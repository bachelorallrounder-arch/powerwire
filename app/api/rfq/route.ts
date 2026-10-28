
import {
  sendFormEmail,
  handleFormError,
} from "@/app/api/_lib/sendFormEmail";


export async function POST(request: Request) {
  try {
    // Validate consent using a clone so the helper can still read the original body.
    const formData = await request.clone().formData();

    if (formData.get("consent") !== "true") {
      return Response.json(
        {
          success: false,
          message: "Please confirm consent before submitting.",
        },
        { status: 400 }
      );
    }

    await sendFormEmail(request, {
      formName: "General RFQ / Contact Enquiry",

      required: [
        "fullName",
        "email",
        "phone",
        "service",
        "message",
      ],

      fileFields: ["attachments"],

      fields: [
        { key: "fullName", label: "Full Name" },
        { key: "company", label: "Company" },
        { key: "email", label: "Email" },
        { key: "phone", label: "Phone" },
        { key: "service", label: "Service" },
        { key: "partNumber", label: "Part Number" },
        { key: "manufacturer", label: "Manufacturer" },
        { key: "quantity", label: "Quantity" },
        { key: "targetDate", label: "Target Date" },
        { key: "message", label: "Message" },
        { key: "consent", label: "Contact Consent" },
      ],
    });

    return Response.json({
      success: true,
      message:
        "Thank you! Your enquiry has been submitted successfully.",
    });
  } catch (error) {
    return handleFormError(error);
  }
}
