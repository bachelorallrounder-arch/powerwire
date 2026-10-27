
"use client";

import { useState } from "react";
import Container from "@/components/shared/Container";

export default function PCBQuoteForm() {
  const [assembly, setAssembly] = useState("yes");
  const [sourcing, setSourcing] = useState("yes");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Include the selected options in the submitted form data.
    formData.set("assembly", assembly);
    formData.set("sourcing", sourcing);

    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const response = await fetch("/api/pcb-quote", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Unable to submit your PCB quote request."
        );
      }

      setSuccess(
        "Thank you! Your PCB quote request has been submitted successfully. Our team will contact you shortly."
      );

      form.reset();
      setAssembly("yes");
      setSourcing("yes");
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Failed to submit your PCB quote request. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "h-14 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[#0B50B6] focus:ring-4 focus:ring-[#0B50B6]/10";

  const labelClass =
    "mb-2 block text-sm font-semibold text-[#10406F]";

  const sectionHeadingClass =
    "mb-6 flex items-center gap-3 text-xl font-bold text-[#10406F] sm:text-2xl";

  const sectionNumberClass =
    "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#10406F] text-sm font-bold text-white";

  const toggleButtonClass = (active: boolean) =>
    `min-w-20 rounded-lg px-5 py-3 text-sm font-semibold transition ${
      active
        ? "bg-[#10406F] text-white shadow-md shadow-[#10406F]/15"
        : "border border-slate-200 bg-white text-slate-600 hover:border-[#0B50B6] hover:text-[#0B50B6]"
    }`;

  return (
    <section id="pcb-quote" className="bg-[#F3F6FA] py-16 sm:py-20 lg:py-24">
      <Container>
        {/* Section header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-3">
            <span className="h-[3px] w-9 rounded-full bg-[#E9B747]" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0B50B6]">
              PCB Quote Request
            </span>
            <span className="h-[3px] w-9 rounded-full bg-[#E9B747]" />
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-[#10406F] sm:text-4xl lg:text-5xl">
            Tell Us About Your PCB Project
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Share your board specifications, quantities, assembly needs and
            project files. Our team will review your requirements and discuss
            a suitable quotation.
          </p>
        </div>

        {/* Form card */}
        <div className="mx-auto mt-10 max-w-5xl overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-xl shadow-[#10406F]/[0.06] sm:mt-14 sm:rounded-3xl">
          {/* Card header */}
          <div className="relative overflow-hidden bg-[#10406F] px-6 py-7 text-white sm:px-10 sm:py-8">
            <div className="pointer-events-none absolute -right-8 -top-16 h-48 w-48 rounded-full border-[24px] border-white/[0.05]" />
            <div className="pointer-events-none absolute -bottom-20 right-28 h-40 w-40 rounded-full bg-[#0B50B6]/50 blur-2xl" />

            <div className="relative">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#E9B747]">
                Project Enquiry
              </p>
              <h3 className="mt-2 text-2xl font-bold sm:text-3xl">
                PCB Requirements Form
              </h3>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-white/75">
                Complete the details below. Fields marked with * are required.
              </p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            encType="multipart/form-data"
            className="space-y-10 p-5 sm:p-8 lg:p-10"
          >
            {/* Contact information */}
            <div>
              <h3 className={sectionHeadingClass}>
                <span className={sectionNumberClass}>01</span>
                Contact Information
              </h3>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className={labelClass} htmlFor="pcb-fullName">
                    Full Name *
                  </label>
                  <input
                    id="pcb-fullName"
                    name="fullName"
                    type="text"
                    autoComplete="name"
                    required
                    placeholder="Enter your full name"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className={labelClass} htmlFor="pcb-company">
                    Company Name *
                  </label>
                  <input
                    id="pcb-company"
                    name="company"
                    type="text"
                    autoComplete="organization"
                    required
                    placeholder="Enter your company name"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className={labelClass} htmlFor="pcb-email">
                    Business Email *
                  </label>
                  <input
                    id="pcb-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="name@company.com"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className={labelClass} htmlFor="pcb-phone">
                    Phone Number
                  </label>
                  <input
                    id="pcb-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="Enter your contact number"
                    className={inputClass}
                  />
                </div>
              </div>
            </div>

            <div className="h-px bg-slate-100" />

            {/* PCB specifications */}
            <div>
              <h3 className={sectionHeadingClass}>
                <span className={sectionNumberClass}>02</span>
                PCB Specifications
              </h3>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className={labelClass} htmlFor="pcb-type">
                    PCB Type *
                  </label>
                  <select
                    id="pcb-type"
                    name="pcbType"
                    required
                    defaultValue=""
                    className={inputClass}
                  >
                    <option value="" disabled>
                      Select PCB type
                    </option>
                    <option value="Single Layer PCB">Single Layer PCB</option>
                    <option value="Double Layer PCB">Double Layer PCB</option>
                    <option value="Multi Layer PCB">Multi Layer PCB</option>
                    <option value="Flexible PCB">Flexible PCB</option>
                    <option value="Rigid-Flex PCB">Rigid-Flex PCB</option>
                  </select>
                </div>

                <div>
                  <label className={labelClass} htmlFor="pcb-quantity">
                    Required Quantity *
                  </label>
                  <input
                    id="pcb-quantity"
                    name="quantity"
                    type="number"
                    min="1"
                    step="1"
                    required
                    placeholder="e.g. 100"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className={labelClass} htmlFor="pcb-boardSize">
                    Board Dimensions
                  </label>
                  <input
                    id="pcb-boardSize"
                    name="boardSize"
                    type="text"
                    placeholder="e.g. 100 × 80 mm"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className={labelClass} htmlFor="pcb-layers">
                    Number of Layers
                  </label>
                  <select
                    id="pcb-layers"
                    name="layers"
                    defaultValue=""
                    className={inputClass}
                  >
                    <option value="" disabled>
                      Select layer count
                    </option>
                    {[1, 2, 4, 6, 8, 10, 12, 16, 20].map((layer) => (
                      <option key={layer} value={layer}>
                        {layer} {layer === 1 ? "Layer" : "Layers"}
                      </option>
                    ))}
                    <option value="More than 20">More than 20 Layers</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="h-px bg-slate-100" />

            {/* Additional requirements */}
            <div>
              <h3 className={sectionHeadingClass}>
                <span className={sectionNumberClass}>03</span>
                Additional Requirements
              </h3>

              <div className="grid gap-6 lg:grid-cols-2">
                <fieldset className="rounded-xl border border-slate-200 p-5">
                  <legend className="px-1 text-sm font-semibold text-[#10406F]">
                    PCB Assembly Required?
                  </legend>
                  <p className="mb-4 mt-1 text-sm text-slate-500">
                    Do you need components assembled onto the PCB?
                  </p>

                  <div className="flex gap-3">
                    <button
                      type="button"
                      aria-pressed={assembly === "yes"}
                      onClick={() => setAssembly("yes")}
                      className={toggleButtonClass(assembly === "yes")}
                    >
                      Yes
                    </button>
                    <button
                      type="button"
                      aria-pressed={assembly === "no"}
                      onClick={() => setAssembly("no")}
                      className={toggleButtonClass(assembly === "no")}
                    >
                      No
                    </button>
                  </div>
                </fieldset>

                <fieldset className="rounded-xl border border-slate-200 p-5">
                  <legend className="px-1 text-sm font-semibold text-[#10406F]">
                    Component Sourcing Required?
                  </legend>
                  <p className="mb-4 mt-1 text-sm text-slate-500">
                    Do you need help sourcing components from your BOM?
                  </p>

                  <div className="flex gap-3">
                    <button
                      type="button"
                      aria-pressed={sourcing === "yes"}
                      onClick={() => setSourcing("yes")}
                      className={toggleButtonClass(sourcing === "yes")}
                    >
                      Yes
                    </button>
                    <button
                      type="button"
                      aria-pressed={sourcing === "no"}
                      onClick={() => setSourcing("no")}
                      className={toggleButtonClass(sourcing === "no")}
                    >
                      No
                    </button>
                  </div>
                </fieldset>
              </div>
            </div>

            <div className="h-px bg-slate-100" />

            {/* File uploads */}
            <div>
              <h3 className={sectionHeadingClass}>
                <span className={sectionNumberClass}>04</span>
                Upload Project Files
              </h3>

              <p className="mb-6 text-sm leading-6 text-slate-600">
                Attach your manufacturing files and bill of materials so the
                team can better understand your requirements.
              </p>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="rounded-xl border border-dashed border-slate-300 bg-[#F8FAFC] p-5 transition hover:border-[#0B50B6]">
                  <label
                    htmlFor="pcb-gerberFile"
                    className="block cursor-pointer"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 text-xl text-[#0B50B6]">
                      ↑
                    </span>
                    <span className="mt-4 block font-semibold text-[#10406F]">
                      Gerber / Design Files
                    </span>
                    <span className="mt-1 block text-xs leading-5 text-slate-500">
                      ZIP, RAR, 7Z or Gerber files
                    </span>
                  </label>
                  <input
                    id="pcb-gerberFile"
                    name="gerberFile"
                    type="file"
                    accept=".zip,.rar,.7z,.gbr,.gerber"
                    className="mt-4 block w-full text-sm text-slate-600 file:mr-3 file:rounded-lg file:border-0 file:bg-white file:px-3 file:py-2 file:text-xs file:font-semibold file:text-[#10406F] hover:file:bg-blue-50"
                  />
                </div>

                <div className="rounded-xl border border-dashed border-slate-300 bg-[#F8FAFC] p-5 transition hover:border-[#0B50B6]">
                  <label
                    htmlFor="pcb-bomFile"
                    className="block cursor-pointer"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-amber-50 text-xl text-[#10406F]">
                      ↑
                    </span>
                    <span className="mt-4 block font-semibold text-[#10406F]">
                      BOM / Supporting Documents
                    </span>
                    <span className="mt-1 block text-xs leading-5 text-slate-500">
                      PDF, Excel, CSV or ZIP
                    </span>
                  </label>
                  <input
                    id="pcb-bomFile"
                    name="bomFile"
                    type="file"
                    accept=".pdf,.xlsx,.xls,.csv,.zip"
                    className="mt-4 block w-full text-sm text-slate-600 file:mr-3 file:rounded-lg file:border-0 file:bg-white file:px-3 file:py-2 file:text-xs file:font-semibold file:text-[#10406F] hover:file:bg-blue-50"
                  />
                </div>
              </div>

              <p className="mt-3 text-xs leading-5 text-slate-500">
                Upload only files you are authorized to share. Maximum file
                sizes and additional accepted formats depend on the server's
                upload configuration.
              </p>
            </div>

            <div className="h-px bg-slate-100" />

            {/* Project notes */}
            <div>
              <h3 className={sectionHeadingClass}>
                <span className={sectionNumberClass}>05</span>
                Project Requirements
              </h3>

              <label className={labelClass} htmlFor="pcb-requirements">
                Additional Details
              </label>
              <textarea
                id="pcb-requirements"
                name="requirements"
                rows={5}
                placeholder="Tell us about your application, material requirements, copper thickness, surface finish, target delivery date or other specifications..."
                className="w-full rounded-xl border border-slate-200 bg-white p-4 text-sm leading-6 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[#0B50B6] focus:ring-4 focus:ring-[#0B50B6]/10"
              />
            </div>

            {/* Submission feedback */}
            {success && (
              <div
                role="status"
                aria-live="polite"
                className="rounded-xl border border-green-200 bg-green-50 p-4 text-sm leading-6 text-green-800"
              >
                {success}
              </div>
            )}

            {error && (
              <div
                role="alert"
                aria-live="assertive"
                className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm leading-6 text-red-800"
              >
                {error}
              </div>
            )}

            {/* Submit */}
            <div className="border-t border-slate-100 pt-7 text-center">
              <button
                type="submit"
                disabled={loading}
                className="inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-xl bg-[#10406F] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-[#10406F]/15 transition hover:-translate-y-0.5 hover:bg-[#0B50B6] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:min-w-64"
              >
                {loading ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                    Submitting Request...
                  </>
                ) : (
                  <>
                    Request PCB Quote
                    <span aria-hidden="true">→</span>
                  </>
                )}
              </button>

              <p className="mt-4 text-xs leading-5 text-slate-500">
                Submitting this form sends your project details to PowerWire
                Crafts for review. A quotation is subject to technical review
                and confirmation.
              </p>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}
