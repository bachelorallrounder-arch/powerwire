
import Image from "next/image";
import Link from "next/link";

const highlights = [
  "PCB Fabrication",
  "PCB Assembly",
  "BOM Component Sourcing",
];

export default function PCBHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#F3F6FA]">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#0B50B6]/[0.06] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-[#E9B747]/[0.10] blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:py-24">
        {/* Hero content */}
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#10406F]/10 bg-white px-4 py-2 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#E9B747]" />
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#10406F]">
              PCB Manufacturing Solutions
            </span>
          </div>

          <h1 className="text-4xl font-bold leading-[1.12] tracking-tight text-[#10406F] sm:text-5xl lg:text-6xl">
            From PCB Design Files to
            <span className="mt-2 block text-[#0B50B6]">
              Production-Ready Boards
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
            Simplify your electronics manufacturing with PCB fabrication,
            printed circuit board assembly and BOM component sourcing.
            Share your project requirements with PowerWire Crafts to discuss
            specifications, quantities, lead times and quotation options.
          </p>

          {/* Service highlights */}
          <div className="mt-8 flex flex-wrap gap-3">
            {highlights.map((highlight) => (
              <div
                key={highlight}
                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm font-medium text-[#10406F] shadow-sm"
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#E9B747]/20 text-xs font-bold text-[#10406F]">
                  ✓
                </span>
                {highlight}
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#pcb-quote"
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-lg bg-[#10406F] px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-[#10406F]/15 transition duration-300 hover:-translate-y-0.5 hover:bg-[#0B50B6]"
            >
              Request a PCB Quote
              <span aria-hidden="true">→</span>
            </Link>

            <Link
              href="#pcb-process"
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-lg border border-[#10406F]/20 bg-white px-7 py-4 text-sm font-semibold text-[#10406F] transition duration-300 hover:border-[#0B50B6] hover:bg-blue-50"
            >
              Explore Our Process
              <span aria-hidden="true">↘</span>
            </Link>
          </div>

          <p className="mt-5 text-xs leading-5 text-slate-500">
            Prototype and production enquiries welcome. Specifications,
            pricing and lead times are confirmed after project review.
          </p>
        </div>

        {/* Hero visual */}
        <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[#0B50B6]/10 via-transparent to-[#E9B747]/20 blur-2xl" />

          <div className="relative overflow-hidden rounded-3xl border border-white bg-white p-3 shadow-2xl shadow-[#10406F]/10 sm:p-4">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#10406F]">
              <Image
                src="/pcb-hero.png"
                alt="Printed circuit board for electronics manufacturing and assembly"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#071D35]/80 via-[#071D35]/10 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                  PCB Fabrication & Assembly
                </span>

                <h2 className="mt-3 max-w-sm text-2xl font-bold leading-snug text-white sm:text-3xl">
                  Your Electronics Project, Built for Production
                </h2>

                <p className="mt-2 max-w-md text-sm leading-6 text-white/80">
                  Board fabrication, assembly requirements and component
                  sourcing discussed in one place.
                </p>
              </div>
            </div>

            {/* Service cards */}
            <div className="grid grid-cols-3 gap-2.5 p-2 pt-4 sm:gap-3 sm:p-3 sm:pt-5">
              <div className="rounded-xl bg-[#F3F6FA] p-3 sm:p-4">
                <div className="text-lg font-bold text-[#10406F]">01</div>
                <p className="mt-1 text-xs font-semibold leading-5 text-slate-600 sm:text-sm">
                  Fabrication
                </p>
              </div>

              <div className="rounded-xl bg-[#F3F6FA] p-3 sm:p-4">
                <div className="text-lg font-bold text-[#10406F]">02</div>
                <p className="mt-1 text-xs font-semibold leading-5 text-slate-600 sm:text-sm">
                  Assembly
                </p>
              </div>

              <div className="rounded-xl bg-[#F3F6FA] p-3 sm:p-4">
                <div className="text-lg font-bold text-[#10406F]">03</div>
                <p className="mt-1 text-xs font-semibold leading-5 text-slate-600 sm:text-sm">
                  Component Sourcing
                </p>
              </div>
            </div>
          </div>

          {/* Gold accent */}
          <div className="absolute -bottom-3 right-8 h-1.5 w-24 rounded-full bg-[#E9B747]" />
        </div>
      </div>
    </section>
  );
}
