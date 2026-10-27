
"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import Link from "next/link";
import Container from "@/components/shared/Container";

const services = [
  "Electronic Component Sourcing",
  "Hard-to-Find Sourcing",
  "Risk Control & Quality Assurance",
  "Global Supply Chain Access",
  "Engineered Alternatives",
  "PCB Manufacturing & Assembly",
  "Medical & Healthcare Components",
  "Automotive Electronics",
  "Defense, Aerospace & Naval",
  "Telecommunications",
  "Data Center Components",
  "EV Infrastructure",
  "Other / General Enquiry",
];

const initialForm = {
  fullName: "",
  company: "",
  email: "",
  phone: "",
  service: "",
  partNumber: "",
  manufacturer: "",
  quantity: "",
  targetDate: "",
  message: "",
};

type FormValues = typeof initialForm;

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <span className="h-[3px] w-8 rounded-full bg-[#E9B747]" />
      <span className="text-xs font-bold uppercase tracking-[0.17em] text-[#0B50B6]">
        {children}
      </span>
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
    >
      <path
        d="M5 12h14m-7-7 7 7-7 7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ContactIcon({ type }: { type: "email" | "phone" | "location" | "time" }) {
  const paths = {
    email: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
      </>
    ),
    phone: (
      <path d="M5 3h4l2 5-3 2a15 15 0 0 0 6 6l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2Z" />
    ),
    location: (
      <>
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    time: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
  };

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
    >
      {paths[type]}
    </svg>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  required = false,
  type = "text",
  placeholder,
  autoComplete,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-semibold text-[#10406F]"
      >
        {label}
        {required && <span className="ml-1 text-red-600">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="min-h-12 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-[#10406F] outline-none transition placeholder:text-slate-400 focus:border-[#0B50B6] focus:ring-4 focus:ring-[#0B50B6]/10"
      />
    </div>
  );
}

export default function ContactPage() {
  const [form, setForm] = useState<FormValues>(() => {
    const values = { ...initialForm };

    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const service = params.get("service");

      const serviceMap: Record<string, string> = {
        "hard-to-find-sourcing": "Hard-to-Find Sourcing",
        "risk-control-quality-assurance":
          "Risk Control & Quality Assurance",
        "global-supply-chain-access": "Global Supply Chain Access",
        "engineered-alternatives": "Engineered Alternatives",
        pcb: "PCB Manufacturing & Assembly",
      };

      if (service) {
        values.service = serviceMap[service] ?? service;
      }
    }

    return values;
  });

  const [files, setFiles] = useState<File[]>([]);
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState("");

  function updateField(name: keyof FormValues, value: string) {
    setForm((previous) => ({ ...previous, [name]: value }));
  }

  function handleFiles(fileList: FileList | null) {
    if (!fileList) return;

    const selected = Array.from(fileList);
    const allowedExtensions = /\.(pdf|png|jpe?g|csv|xls|xlsx|doc|docx|zip)$/i;
    const maxFileSize = 10 * 1024 * 1024;

    if (selected.some((file) => !allowedExtensions.test(file.name))) {
      setErrorMessage(
        "Use PDF, PNG, JPG, CSV, Excel, Word or ZIP files only."
      );
      setStatus("error");
      return;
    }

    if (selected.some((file) => file.size > maxFileSize)) {
      setErrorMessage("Each attachment must be 10 MB or smaller.");
      setStatus("error");
      return;
    }

    if (selected.reduce((sum, file) => sum + file.size, 0) > 20 * 1024 * 1024) {
      setErrorMessage("The combined attachment size must not exceed 20 MB.");
      setStatus("error");
      return;
    }

    setFiles(selected);
    setStatus("idle");
    setErrorMessage("");
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    if (!consent) {
      setStatus("error");
      setErrorMessage("Please confirm that we may contact you about this enquiry.");
      return;
    }

    const payload = new FormData();

    Object.entries(form).forEach(([key, value]) => {
      payload.append(key, value);
    });

    files.forEach((file) => payload.append("attachments", file));

    try {
      const response = await fetch("/api/rfq", {
        method: "POST",
        body: payload,
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(
          result.error || "We couldn't submit your enquiry. Please try again."
        );
      }

      setStatus("success");
      setForm(initialForm);
      setFiles([]);
      setConsent(false);
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    }
  }

  const inputProps = {
    form,
    updateField,
  };

  return (
    <main className="overflow-hidden bg-white text-[#10406F]">
      {/* SECTION 1: HERO */}
      <section className="relative isolate bg-[#F3F6FA]">
        <div
          aria-hidden="true"
          className="absolute -right-20 -top-20 -z-10 h-80 w-80 rounded-full bg-[#0B50B6]/10 blur-3xl"
        />

        <Container>
          <div className="py-14 sm:py-18 lg:py-20">
            <div className="mx-auto max-w-4xl text-center">
              <div className="flex justify-center">
                <Eyebrow>Contact PowerWire Crafts</Eyebrow>
              </div>

              <h1 className="text-4xl font-bold leading-tight tracking-tight text-[#10406F] sm:text-5xl lg:text-6xl">
                Tell Us What You Need.
                <span className="mt-2 block text-[#0B50B6]">
                  Let’s Find the Right Solution.
                </span>
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                Looking for electronic components, a hard-to-find part, PCB
                manufacturing or a sourcing solution? Send us your requirements
                and our sales team will review your enquiry.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  href="#rfq-form"
                  className="group inline-flex min-h-13 items-center justify-center gap-3 rounded-xl bg-[#E9B747] px-7 py-4 text-sm font-bold text-[#10406F] transition hover:-translate-y-0.5 hover:bg-[#F3C95F]"
                >
                  Submit an RFQ
                  <ArrowIcon />
                </Link>

                <a
                  href="mailto:sales@powerwirecrafts.com"
                  className="inline-flex min-h-13 items-center justify-center rounded-xl border border-[#10406F]/20 bg-white px-7 py-4 text-sm font-semibold transition hover:border-[#0B50B6] hover:bg-blue-50"
                >
                  Email Our Sales Team
                </a>
              </div>

              <div className="mt-8 flex flex-wrap justify-center gap-x-7 gap-y-3 text-sm text-slate-600">
                <span>✓ Component sourcing</span>
                <span>✓ PCB requirements</span>
                <span>✓ Business enquiries</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 2: CONTACT DETAILS */}
      <section className="py-14 sm:py-18">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <article className="rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_8px_30px_rgba(16,64,111,0.05)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0B50B6]/10 text-[#0B50B6]">
                <ContactIcon type="email" />
              </div>
              <h2 className="mt-5 text-lg font-bold">Email Sales</h2>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Send your part numbers and RFQ details.
              </p>
              <a
                href="mailto:sales@powerwirecrafts.com"
                className="mt-4 inline-block break-all text-sm font-semibold text-[#0B50B6] hover:underline"
              >
                sales@powerwirecrafts.com
              </a>
            </article>

            <article className="rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_8px_30px_rgba(16,64,111,0.05)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0B50B6]/10 text-[#0B50B6]">
                <ContactIcon type="phone" />
              </div>
              <h2 className="mt-5 text-lg font-bold">Call Our Team</h2>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Speak to us about your requirements.
              </p>
              <a
                href="tel:+917207218811"
                className="mt-4 inline-block text-sm font-semibold text-[#0B50B6] hover:underline"
              >
                +91 72072 18811
              </a>
            </article>

            <article className="rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_8px_30px_rgba(16,64,111,0.05)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0B50B6]/10 text-[#0B50B6]">
                <ContactIcon type="location" />
              </div>
              <h2 className="mt-5 text-lg font-bold">Visit Our Office</h2>
              <address className="mt-3 text-sm not-italic leading-6 text-slate-600">
                Plot 45/P, Electronic Complex,
                <br />
                Nagaram Road, Kapra,
                <br />
                Hyderabad, Medchal-Malkajgiri,
                <br />
                Telangana – 500062, India
              </address>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Plot+45%2FP+Electronic+Complex+Nagaram+Road+Kapra+Hyderabad+Telangana+500062+India"
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#0B50B6] hover:underline"
              >
                Get directions <ArrowIcon />
              </a>
            </article>

            <article className="rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_8px_30px_rgba(16,64,111,0.05)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0B50B6]/10 text-[#0B50B6]">
                <ContactIcon type="time" />
              </div>
              <h2 className="mt-5 text-lg font-bold">Business Hours</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Monday – Saturday
              </p>
              <p className="mt-1 text-xl font-bold text-[#10406F]">
                9:00 AM – 6:00 PM
              </p>
              <p className="mt-2 text-xs text-slate-500">
                India Standard Time (IST)
              </p>
            </article>
          </div>
        </Container>
      </section>

      {/* SECTION 3: RFQ FORM */}
      <section id="rfq-form" className="scroll-mt-20 bg-[#F3F6FA] py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14">
            <div className="lg:sticky lg:top-24">
              <Eyebrow>Request for Quotation</Eyebrow>

              <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                Let’s Talk About Your{" "}
                <span className="text-[#0B50B6]">Requirements.</span>
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                Complete the form with as much detail as you have. Part
                numbers, manufacturer details and required quantities help us
                understand your enquiry.
              </p>

              <div className="mt-8 rounded-2xl bg-[#10406F] p-6 text-white">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#E9B747]">
                  Helpful information to include
                </p>

                <ul className="mt-5 space-y-4 text-sm leading-6 text-blue-100">
                  {[
                    "Manufacturer part number or BOM",
                    "Required quantity and specifications",
                    "Target delivery date",
                    "Gerber files or technical documents, if applicable",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 text-[#E9B747]">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-7 border-t border-white/15 pt-5">
                  <p className="text-sm text-blue-100">
                    Prefer to email your enquiry?
                  </p>
                  <a
                    href="mailto:sales@powerwirecrafts.com"
                    className="mt-2 inline-block break-all font-semibold text-[#E9B747] hover:underline"
                  >
                    sales@powerwirecrafts.com
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-100 bg-white p-5 shadow-[0_20px_60px_rgba(16,64,111,0.07)] sm:p-8 lg:p-10">
              <div className="mb-8 border-b border-slate-100 pb-6">
                <h3 className="text-2xl font-bold text-[#10406F]">
                  RFQ / Contact Form
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Fields marked with * are required.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <h4 className="mb-5 text-base font-bold text-[#10406F]">
                    01. Your Contact Details
                  </h4>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field
                      label="Full Name"
                      name="fullName"
                      value={form.fullName}
                      onChange={(value) => updateField("fullName", value)}
                      required
                      placeholder="Your full name"
                      autoComplete="name"
                    />

                    <Field
                      label="Company Name"
                      name="company"
                      value={form.company}
                      onChange={(value) => updateField("company", value)}
                      placeholder="Company or organization"
                      autoComplete="organization"
                    />

                    <Field
                      label="Business Email"
                      name="email"
                      value={form.email}
                      onChange={(value) => updateField("email", value)}
                      required
                      type="email"
                      placeholder="you@company.com"
                      autoComplete="email"
                    />

                    <Field
                      label="Phone Number"
                      name="phone"
                      value={form.phone}
                      onChange={(value) => updateField("phone", value)}
                      required
                      type="tel"
                      placeholder="+91"
                      autoComplete="tel"
                    />
                  </div>
                </div>

                <div className="border-t border-slate-100 pt-7">
                  <h4 className="mb-5 text-base font-bold text-[#10406F]">
                    02. Your Requirement
                  </h4>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="service"
                        className="mb-2 block text-sm font-semibold text-[#10406F]"
                      >
                        Service Required <span className="text-red-600">*</span>
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={form.service}
                        onChange={(event) =>
                          updateField("service", event.target.value)
                        }
                        required
                        className="min-h-12 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-[#10406F] outline-none transition focus:border-[#0B50B6] focus:ring-4 focus:ring-[#0B50B6]/10"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    <Field
                      label="Part Number / Model"
                      name="partNumber"
                      value={form.partNumber}
                      onChange={(value) => updateField("partNumber", value)}
                      placeholder="e.g. Manufacturer part number"
                    />

                    <Field
                      label="Manufacturer / Brand"
                      name="manufacturer"
                      value={form.manufacturer}
                      onChange={(value) => updateField("manufacturer", value)}
                      placeholder="Preferred manufacturer"
                    />

                    <Field
                      label="Required Quantity"
                      name="quantity"
                      value={form.quantity}
                      onChange={(value) => updateField("quantity", value)}
                      placeholder="e.g. 500 pieces"
                    />

                    <Field
                      label="Target Delivery Date"
                      name="targetDate"
                      value={form.targetDate}
                      onChange={(value) => updateField("targetDate", value)}
                      type="date"
                    />
                  </div>

                  <div className="mt-5">
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-semibold text-[#10406F]"
                    >
                      Requirements / Project Details{" "}
                      <span className="text-red-600">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={(event) =>
                        updateField("message", event.target.value)
                      }
                      required
                      rows={5}
                      placeholder="Describe the components, specifications, application, quantity, delivery requirements or any other details..."
                      className="w-full resize-y rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm leading-6 text-[#10406F] outline-none transition placeholder:text-slate-400 focus:border-[#0B50B6] focus:ring-4 focus:ring-[#0B50B6]/10"
                    />
                  </div>
                </div>

                <div className="border-t border-slate-100 pt-7">
                  <h4 className="text-base font-bold text-[#10406F]">
                    03. Supporting Documents
                  </h4>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Attach a BOM, datasheet, Gerber file, drawing or other
                    relevant document. Attachments are optional.
                  </p>

                  <label
                    htmlFor="attachments"
                    className="mt-5 flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 bg-[#F3F6FA]/70 px-5 py-8 text-center transition hover:border-[#0B50B6]/50 hover:bg-blue-50/50"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-2xl text-[#0B50B6] shadow-sm">
                      ↑
                    </span>
                    <span className="mt-4 text-sm font-bold text-[#10406F]">
                      Choose files to attach
                    </span>
                    <span className="mt-2 text-xs leading-5 text-slate-500">
                      PDF, PNG, JPG, CSV, Excel, Word or ZIP
                      <br />
                      Maximum 10 MB per file, 20 MB total
                    </span>
                    <input
                      id="attachments"
                      name="attachments"
                      type="file"
                      multiple
                      accept=".pdf,.png,.jpg,.jpeg,.csv,.xls,.xlsx,.doc,.docx,.zip"
                      onChange={(event) => handleFiles(event.target.files)}
                      className="sr-only"
                    />
                  </label>

                  {files.length > 0 && (
                    <ul className="mt-4 space-y-2">
                      {files.map((file) => (
                        <li
                          key={`${file.name}-${file.size}`}
                          className="flex items-center justify-between gap-3 rounded-lg bg-[#F3F6FA] px-3 py-2 text-sm"
                        >
                          <span className="break-all text-[#10406F]">
                            {file.name}
                          </span>
                          <button
                            type="button"
                            onClick={() =>
                              setFiles((previous) =>
                                previous.filter((item) => item !== file)
                              )
                            }
                            className="shrink-0 font-semibold text-red-600 hover:underline"
                            aria-label={`Remove ${file.name}`}
                          >
                            Remove
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="border-t border-slate-100 pt-6">
                  <label className="flex cursor-pointer items-start gap-3">
                    <input
                      type="checkbox"
                      checked={consent}
                      onChange={(event) => setConsent(event.target.checked)}
                      required
                      className="mt-1 h-4 w-4 accent-[#0B50B6]"
                    />
                    <span className="text-sm leading-6 text-slate-600">
                      I agree that PowerWire Crafts may use the information
                      provided to respond to this enquiry and contact me about
                      this RFQ.
                    </span>
                  </label>
                </div>

                {status === "success" && (
                  <div
                    role="status"
                    className="rounded-xl border border-green-200 bg-green-50 p-4 text-sm leading-6 text-green-800"
                  >
                    Your enquiry has been submitted successfully. Thank you
                    for contacting PowerWire Crafts.
                  </div>
                )}

                {status === "error" && (
                  <div
                    role="alert"
                    className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm leading-6 text-red-700"
                  >
                    {errorMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="group inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-xl bg-[#10406F] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#0B50B6] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "loading" ? "Submitting Enquiry..." : "Submit RFQ"}
                  {status !== "loading" && <ArrowIcon />}
                </button>

                <p className="text-center text-xs leading-5 text-slate-500">
                  Please do not upload passwords or confidential credentials.
                  Share only the technical information needed to evaluate your
                  enquiry.
                </p>
              </form>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 4: HOW IT WORKS */}
      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex justify-center">
              <Eyebrow>What Happens Next</Eyebrow>
            </div>
            <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              A Clear Process from{" "}
              <span className="text-[#0B50B6]">Enquiry to Quotation</span>
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              We use your submitted information to understand the requirement
              and determine the next steps.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                number: "01",
                title: "Submit Your RFQ",
                description:
                  "Share your contact details, service requirement and component specifications.",
              },
              {
                number: "02",
                title: "Requirement Review",
                description:
                  "Your enquiry can be reviewed for part details, quantity, documentation and delivery needs.",
              },
              {
                number: "03",
                title: "Discuss Options",
                description:
                  "Clarify availability, technical details, pricing or any additional information required.",
              },
              {
                number: "04",
                title: "Quotation & Next Steps",
                description:
                  "Review the proposed quotation and agree on the next steps before placing an order.",
              },
            ].map((step) => (
              <article
                key={step.number}
                className="rounded-2xl border border-slate-100 bg-[#F3F6FA] p-6"
              >
                <span className="text-sm font-bold tracking-wider text-[#0B50B6]">
                  STEP {step.number}
                </span>
                <h3 className="mt-4 text-lg font-bold text-[#10406F]">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* SECTION 5: FINAL CTA */}
      <section className="relative isolate overflow-hidden bg-[#10406F] py-16 sm:py-20">
        <div
          aria-hidden="true"
          className="absolute -right-24 -top-28 -z-10 h-80 w-80 rounded-full bg-[#0B50B6]/60 blur-3xl"
        />

        <Container>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-[3px] w-8 rounded-full bg-[#E9B747]" />
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#E9B747]">
                  We’re Ready to Hear from You
                </span>
              </div>

              <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
                Have a Requirement?{" "}
                <span className="text-[#E9B747]">Let’s Talk.</span>
              </h2>

              <p className="mt-4 max-w-xl leading-7 text-blue-100">
                Reach PowerWire Crafts for component sourcing, PCB requirements
                and business enquiries.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="tel:+917207218811"
                className="inline-flex min-h-13 items-center justify-center rounded-xl bg-[#E9B747] px-6 py-4 text-sm font-bold text-[#10406F] transition hover:bg-[#F3C95F]"
              >
                Call +91 72072 18811
              </a>
              <a
                href="mailto:sales@powerwirecrafts.com"
                className="inline-flex min-h-13 items-center justify-center rounded-xl border border-white/30 px-6 py-4 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
              >
                Email Sales
              </a>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
