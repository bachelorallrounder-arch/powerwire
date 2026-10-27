
import Container from "@/components/shared/Container";
import {
  ShieldCheck,
  Zap,
  BadgeCheck,
  Handshake,
  ArrowUpRight,
} from "lucide-react";

const values = [
  {
    number: "01",
    title: "Integrity",
    description:
      "Building business relationships through transparency, honest communication, and accountability throughout the sourcing process.",
    icon: ShieldCheck,
  },
  {
    number: "02",
    title: "Reliability",
    description:
      "Taking a consistent, requirement-focused approach to component enquiries, sourcing discussions, and customer support.",
    icon: Zap,
  },
  {
    number: "03",
    title: "Quality",
    description:
      "Giving careful attention to product specifications, component requirements, and sourcing details at every stage of an enquiry.",
    icon: BadgeCheck,
  },
  {
    number: "04",
    title: "Partnership",
    description:
      "Building lasting business relationships by understanding customer needs and working towards practical sourcing solutions.",
    icon: Handshake,
  },
];

export default function CoreValues() {
  return (
    <section className="relative isolate overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#0B50B6]/[0.05] blur-[100px]" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-[#E9B747]/[0.08] blur-[100px]" />
      </div>

      <Container className="relative">
        {/* Section heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#10406F]/10 bg-[#F3F6FA] px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-[#E9B747]" />
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#10406F] sm:text-sm">
              Our Core Values
            </span>
          </div>

          <h2 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-[#10406F] sm:text-4xl lg:text-5xl">
            Principles That Guide
            <span className="mt-2 block text-[#0B50B6]">
              Every Partnership
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            The principles behind how POWERWIRE CRAFTS approaches customer
            relationships, electronic component enquiries, and business
            collaboration.
          </p>
        </div>

        {/* Values grid */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 xl:grid-cols-4">
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <article
                key={value.title}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_6px_24px_rgba(16,64,111,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#0B50B6]/25 hover:shadow-[0_18px_40px_rgba(16,64,111,0.10)] sm:p-8"
              >
                {/* Top accent */}
                <div className="absolute left-0 top-0 h-1 w-0 bg-[#E9B747] transition-all duration-300 group-hover:w-full" />

                <div className="flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#10406F]/[0.06] text-[#10406F] transition-all duration-300 group-hover:bg-[#10406F] group-hover:text-white">
                    <Icon size={26} strokeWidth={1.8} />
                  </div>

                  <span className="font-mono text-sm font-semibold tracking-wider text-slate-300 transition-colors group-hover:text-[#B68A20]">
                    {value.number}
                  </span>
                </div>

                <h3 className="mt-7 text-xl font-bold tracking-tight text-[#10406F] transition-colors group-hover:text-[#0B50B6]">
                  {value.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
                  {value.description}
                </p>

                <div className="mt-7 flex items-center justify-between border-t border-slate-100 pt-5">
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                    Our Commitment
                  </span>

                  <ArrowUpRight
                    size={18}
                    className="text-[#B68A20] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </div>
              </article>
            );
          })}
        </div>

        {/* Closing statement */}
        <div className="mt-10 rounded-2xl border border-[#10406F]/10 bg-[#F3F6FA] px-6 py-7 text-center sm:px-10 sm:py-9">
          <p className="text-lg font-bold leading-relaxed text-[#10406F] sm:text-xl">
            Strong business relationships begin with{" "}
            <span className="text-[#0B50B6]">trust</span>, grow through{" "}
            <span className="text-[#B68A20]">consistency</span>, and are
            strengthened by{" "}
            <span className="text-[#0B50B6]">collaboration</span>.
          </p>
        </div>
      </Container>
    </section>
  );
}
