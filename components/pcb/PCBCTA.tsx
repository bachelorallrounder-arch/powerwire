
import Link from "next/link";
import Container from "@/components/shared/Container";

export default function PCBCTA() {
  return (
    <section className="relative overflow-hidden bg-[#10406F] py-16 sm:py-20 lg:py-24">
      {/* Decorative background elements */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full border border-white/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-[#0B50B6]/40 blur-3xl"
      />

      <Container>
        <div className="relative mx-auto max-w-4xl text-center">
          {/* Eyebrow */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#E9B747]/40 bg-white/5 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-[#E9B747]" />
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#E9B747] sm:text-sm">
              Let&apos;s Build Your Next PCB Project
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Have a PCB Project in Mind?
            <span className="mt-2 block text-[#E9B747]">
              Let&apos;s Make It Happen.
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-blue-100 sm:text-lg sm:leading-8">
            Share your PCB design, component requirements, or project
            specifications with PowerWire Crafts. Tell us what you need, and
            our team can review your requirements and discuss the next steps.
          </p>

          {/* CTA buttons */}
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="#pcb-quote"
              className="group inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-xl bg-[#E9B747] px-7 py-4 text-sm font-bold text-[#10406F] shadow-lg shadow-black/10 transition duration-300 hover:-translate-y-1 hover:bg-[#F3C95F] sm:w-auto sm:min-w-52"
            >
              Request a PCB Quote
              <svg
                aria-hidden="true"
                className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14m-7-7 7 7-7 7"
                />
              </svg>
            </Link>

            <Link
              href="/contact"
              className="inline-flex min-h-14 w-full items-center justify-center rounded-xl border border-white/30 bg-white/5 px-7 py-4 text-sm font-semibold text-white transition duration-300 hover:border-white/60 hover:bg-white/10 sm:w-auto sm:min-w-44"
            >
              Contact Our Team
            </Link>
          </div>

          {/* Supporting points */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-sm text-blue-100/90">
            <div className="flex items-center gap-2">
              <svg
                aria-hidden="true"
                className="h-4 w-4 text-[#E9B747]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m5 12 4 4L19 6"
                />
              </svg>
              PCB Fabrication
            </div>

            <div className="flex items-center gap-2">
              <svg
                aria-hidden="true"
                className="h-4 w-4 text-[#E9B747]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m5 12 4 4L19 6"
                />
              </svg>
              PCB Assembly
            </div>

            <div className="flex items-center gap-2">
              <svg
                aria-hidden="true"
                className="h-4 w-4 text-[#E9B747]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m5 12 4 4L19 6"
                />
              </svg>
              BOM Component Sourcing
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
