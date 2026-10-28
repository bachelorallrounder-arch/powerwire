
import {
  sendFormEmail,
  handleFormError,
} from "@/app/api/_lib/sendFormEmail";

export async function POST(request: Request) {
  try {
    await sendFormEmail(request, {
      formName: "PCB Manufacturing Quote Request",
      required: ["fullName", "email"],
      fileFields: ["gerberFile", "bomFile"],
      fields: [
        { key: "fullName", label: "Full Name" },
        { key: "company", label: "Company" },
        { key: "email", label: "Email" },
        { key: "phone", label: "Phone" },
        { key: "pcbType", label: "PCB Type" },
        { key: "quantity", label: "Quantity" },
        { key: "boardSize", label: "Board Size" },
        { key: "layers", label: "Number of Layers" },
        { key: "assembly", label: "Assembly Required" },
        { key: "sourcing", label: "Component Sourcing" },
        { key: "requirements", label: "Additional Requirements" },
      ],
    });

    return Response.json({
      success: true,
      message: "Thank you! Your PCB quote request has been submitted.",
    });
  } catch (error) {
    return handleFormError(error);
  }
}
