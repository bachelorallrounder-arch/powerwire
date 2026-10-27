
import Link from "next/link";
import Container from "@/components/shared/Container";

const processSteps = [
  {
    number: "01",
    label: "STEP ONE",
    title: "Share Your Requirements",
    description:
      "Send us your PCB specifications, Gerber files, BOM, required quantity and project details so we can understand your needs.",
    details: [
      "Gerber and design files",
      "Board dimensions and layer count",
      "Quantity and delivery expectations",
    ],
  },
  {
    number: "02",
    label: "STEP TWO",
    title: "Technical Review & Quote",
    description:
      "We review the submitted information and discuss fabrication, assembly, component sourcing and quotation requirements.",
    details: [
      "Specification review",
      "Assembly and sourcing requirements",
      "Quotation and lead-time discussion",
    ],
  },
  {
    number: "03",
    label: "STEP THREE",
    title: "Fabrication & Assembly",
    description:
      "After requirements and commercial terms are approved, the PCB project proceeds according to the agreed manufacturing scope.",
    details: [
      "PCB fabrication",
      "Component sourcing, if requested",
      "PCB assembly, if requested",
    ],
  },
  {
    number: "04",
    label: "STEP FOUR",
    title: "Quality Review & Delivery",
    description:
      "The completed order is reviewed against the agreed requirements before delivery arrangements are confirmed.",
    details: [
      "Review against agreed specifications",
      "Order and dispatch coordination",
      "Delivery updates",
    ],
  },
];

export default function PCBProcess() {
  return (
    <section
      id="pcb-process"
      className="relative overflow-hidden bg-white py-20 sm:py-24"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-36 top-24 h-80 w-80 rounded-full bg-[#0B50B6]/[0.045] blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#E9B747]/[0.09] blur-3xl" />

      <Container>
        {/* Heading */}
        <div className="relative mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-3">
            <span className="h-[3px] w-9 rounded-full bg-[#E9B747]" />
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#0B50B6]">
              How It Works
            </span>
            <span className="h-[3px] w-9 rounded-full bg-[#E9B747]" />
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-[#10406F] sm:text-4xl lg:text-5xl">
            From PCB Enquiry to Delivery
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            A straightforward process to discuss your PCB requirements,
            review the project scope and coordinate fabrication, assembly
            and component sourcing.
          </p>
        </div>

        {/* Process timeline */}
        <div className="relative mt-14 grid gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {/* Desktop connecting line */}
          <div className="pointer-events-none absolute left-[12%] right-[12%] top-7 hidden h-px bg-gradient-to-r from-[#E9B747]/30 via-[#0B50B6]/30 to-[#E9B747]/30 lg:block" />

          {processSteps.map((step, index) => (
            <article
              key={step.number}
              className="group relative flex flex-col rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#0B50B6]/30 hover:shadow-xl hover:shadow-[#10406F]/[0.07] sm:p-7"
            >
              {/* Number */}
              <div className="relative z-10 mb-7 flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#10406F]/10 bg-[#F3F6FA] text-lg font-bold text-[#10406F] transition duration-300 group-hover:border-[#10406F] group-hover:bg-[#10406F] group-hover:text-white">
                  {step.number}
                </div>

                {index < processSteps.length - 1 && (
                  <span className="text-xl font-light text-[#E9B747] lg:hidden">
                    →
                  </span>
                )}

                <span className="hidden text-xs font-bold tracking-[0.14em] text-slate-400 sm:inline">
                  {step.label}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold leading-snug text-[#10406F] sm:text-[22px]">
                {step.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                {step.description}
              </p>

              {/* Details */}
              <ul className="mt-6 space-y-3 border-t border-slate-100 pt-5">
                {step.details.map((detail) => (
                  <li key={detail} className="flex items-start gap-2.5">
                    <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#E9B747]/20 text-[10px] font-bold text-[#10406F]">
                      ✓
                    </span>
                    <span className="text-xs leading-5 text-slate-600">
                      {detail}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Bottom accent */}
              <div className="mt-auto pt-7">
                <div className="h-1 w-10 rounded-full bg-[#E9B747] transition-all duration-300 group-hover:w-20" />
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="relative mt-12 overflow-hidden rounded-2xl bg-[#10406F] p-7 sm:mt-16 sm:p-10 lg:p-12">
          <div className="pointer-events-none absolute -right-12 -top-20 h-64 w-64 rounded-full border-[30px] border-white/[0.045]" />
          <div className="pointer-events-none absolute -bottom-20 right-1/3 h-48 w-48 rounded-full bg-[#0B50B6]/40 blur-3xl" />

          <div className="relative flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#E9B747]">
                Ready to Get Started?
              </span>

              <h3 className="mt-3 text-2xl font-bold leading-tight text-white sm:text-3xl">
                Let&apos;s Discuss Your PCB Project
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/75 sm:text-base">
                Share your files, board specifications and project
                requirements to start a quotation enquiry with PowerWire
                Crafts.
              </p>
            </div>

            <Link
              href="#pcb-quote"
              className="inline-flex shrink-0 items-center justify-center gap-3 rounded-lg bg-[#E9B747] px-7 py-4 text-sm font-bold text-[#10406F] transition duration-300 hover:-translate-y-0.5 hover:bg-white"
            >
              Request a PCB Quote
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
