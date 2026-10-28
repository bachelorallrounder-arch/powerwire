
import { Resend } from "resend";

const MAX_TOTAL_FILE_BYTES = 3 * 1024 * 1024;
const MAX_FIELD_LENGTH = 5000;
const MAX_EMAIL_LENGTH = 254;
const MAX_FILENAME_LENGTH = 150;

const ALLOWED_EXTENSIONS = new Set([
  "pdf",
  "png",
  "jpg",
  "jpeg",
  "csv",
  "xls",
  "xlsx",
  "doc",
  "docx",
  "zip",
  "gbr",
  "ger",
  "gtl",
  "gbl",
  "gts",
  "gbs",
  "gto",
  "gbo",
  "gko",
  "drl",
]);

type EmailField = {
  key: string;
  label: string;
};

type EmailFormOptions = {
  formName: string;
  fields: EmailField[];
  required: string[];
  fileFields: string[];
};

type EmailAttachment = {
  filename: string;
  content: Buffer;
};

export class FormInputError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "FormInputError";
  }
}

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };

    return entities[character];
  });
}

function sanitizeFilename(filename: string): string {
  const basename = filename.split(/[\\/]/).pop() ?? "attachment";

  return (
    basename
      .replace(/[^\w.\- ()]/g, "_")
      .replace(/\.{2,}/g, ".")
      .slice(0, MAX_FILENAME_LENGTH) || "attachment"
  );
}

function validateEmail(email: string): boolean {
  return (
    email.length <= MAX_EMAIL_LENGTH &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  );
}

function getExtension(filename: string): string {
  const dotIndex = filename.lastIndexOf(".");

  if (dotIndex < 1 || dotIndex === filename.length - 1) {
    return "";
  }

  return filename.slice(dotIndex + 1).toLowerCase();
}

function validateAttachmentFilename(filename: string): string {
  const extension = getExtension(filename);

  if (!extension || !ALLOWED_EXTENSIONS.has(extension)) {
    throw new FormInputError(
      `The file "${sanitizeFilename(filename)}" has an unsupported file type.`,
    );
  }

  return extension;
}

export async function sendFormEmail(
  request: Request,
  options: EmailFormOptions,
): Promise<{ id: string }> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  const to = process.env.SALES_EMAIL;

  if (!apiKey || !from || !to) {
    console.error("Email service configuration is incomplete.");
    throw new Error("Email service is not configured.");
  }

  const formData = await request.formData();

  // Honeypot: the form should include an input named "website".
  if (String(formData.get("website") ?? "").trim()) {
    throw new FormInputError("Unable to process this submission.");
  }

  // Reject explicitly unchecked consent.
  // The RFQ route should also require consent === "true".
  const consent = formData.get("consent");

  if (consent !== null && consent !== "true") {
    throw new FormInputError(
      "Please confirm consent before submitting.",
    );
  }

  const fieldKeys = new Set(options.fields.map((field) => field.key));
  const values: Record<string, string> = {};

  // Ensure server configuration doesn't reference undefined fields.
  for (const key of options.required) {
    if (!fieldKeys.has(key)) {
      console.error(
        `Form configuration error: required field "${key}" is not configured.`,
      );

      throw new Error("Form configuration is invalid.");
    }
  }

  // Read and validate text fields.
  for (const field of options.fields) {
    const rawValue = formData.get(field.key);

    // File values are not accepted as text fields.
    if (rawValue !== null && typeof rawValue !== "string") {
      throw new FormInputError(
        `Invalid value provided for ${field.label}.`,
      );
    }

    const value =
      typeof rawValue === "string" ? rawValue.trim() : "";

    if (value.length > MAX_FIELD_LENGTH) {
      throw new FormInputError(`${field.label} is too long.`);
    }

    values[field.key] = value;
  }

  // Validate required fields.
  for (const key of options.required) {
    if (!values[key]) {
      throw new FormInputError(
        "Please complete all required fields.",
      );
    }
  }

  // Validate the customer's email.
  const email = values.email;

  if (!email || !validateEmail(email)) {
    throw new FormInputError(
      "Please provide a valid email address.",
    );
  }

  // Validate and prepare attachments.
  const attachments: EmailAttachment[] = [];
  let totalFileBytes = 0;

  for (const fieldName of options.fileFields) {
    const entries = formData.getAll(fieldName);

    for (const entry of entries) {
      if (typeof entry === "string") {
        if (entry.trim()) {
          throw new FormInputError(
            "An invalid attachment was submitted.",
          );
        }

        continue;
      }

      // Ignore an empty file input.
      if (entry.size === 0 && !entry.name) {
        continue;
      }

      if (entry.size === 0) {
        throw new FormInputError(
          `The file "${sanitizeFilename(entry.name)}" is empty.`,
        );
      }

      validateAttachmentFilename(entry.name);

      totalFileBytes += entry.size;

      if (totalFileBytes > MAX_TOTAL_FILE_BYTES) {
        throw new FormInputError(
          "The combined attachment size must not exceed 3 MB.",
        );
      }

      attachments.push({
        filename: sanitizeFilename(entry.name),
        content: Buffer.from(await entry.arrayBuffer()),
      });
    }
  }

  // Build a safe HTML email from the configured fields.
  const rows = options.fields
    .filter((field) => values[field.key])
    .map(
      (field) => `
        <tr>
          <td style="padding:10px;border:1px solid #dbe3ec;font-weight:600;vertical-align:top;">
            ${escapeHtml(field.label)}
          </td>
          <td style="padding:10px;border:1px solid #dbe3ec;white-space:pre-wrap;overflow-wrap:anywhere;">
            ${escapeHtml(values[field.key])}
          </td>
        </tr>
      `,
    )
    .join("");

  const fullName = (values.fullName || "Website visitor")
    .replace(/[\r\n\t]+/g, " ")
    .slice(0, 120);

  const safeFormName = escapeHtml(options.formName);

  const resend = new Resend(apiKey);

  const { data, error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: email,
    subject: `${options.formName} — ${fullName}`,
    html: `
      <div style="font-family:Arial,sans-serif;color:#172b45;max-width:720px;margin:auto;">
        <div style="background:#10406F;color:#ffffff;padding:22px;">
          <h2 style="margin:0;">PowerWire Crafts</h2>
          <p style="margin:8px 0 0;">New ${safeFormName}</p>
        </div>

        <div style="padding:20px;">
          <p>A customer has submitted a new enquiry through your website.</p>

          <table style="width:100%;border-collapse:collapse;">
            ${rows}
          </table>

          ${
            attachments.length
              ? `<p style="margin-top:20px;">Attachments: ${attachments.length}</p>`
              : ""
          }

          <p style="margin-top:20px;font-size:12px;color:#64748b;">
            This notification was generated by the PowerWire Crafts website.
          </p>
        </div>
      </div>
    `,
    attachments,
  });

  if (error || !data?.id) {
    console.error("Resend email submission failed:", error);
    throw new Error(
      "The enquiry email could not be submitted. Please try again later.",
    );
  }

  return { id: data.id };
}

export function handleFormError(error: unknown): Response {
  if (error instanceof FormInputError) {
    return Response.json(
      {
        success: false,
        message: error.message,
      },
      { status: 400 },
    );
  }

  console.error("Form submission failed:", error);

  return Response.json(
    {
      success: false,
      message:
        "We could not submit your enquiry. Please try again later.",
    },
    { status: 500 },
  );
}
