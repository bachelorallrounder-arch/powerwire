
import Link from "next/link";
import Container from "@/components/shared/Container";
import {
  ArrowRight,
  ArrowUpRight,
  Cpu,
  Globe2,
  Handshake,
  Layers3,
} from "lucide-react";

const highlights = [
  {
    number: "60K+",
    label: "Electronic Components",
    description: "A broad component catalogue",
  },
  {
    number: "100+",
    label: "Manufacturers",
    description: "Brands across electronic technologies",
  },
  {
    number: "Global",
    label: "Sourcing Network",
    description: "Sourcing-oriented procurement support",
  },
  {
    number: "B2B",
    label: "Business Focus",
    description: "Solutions for business requirements",
  },
];

const capabilities = [
  {
    icon: Cpu,
    title: "Electronic Components",
    description:
      "Semiconductors, integrated circuits, sensors, and other electronic component categories.",
  },
  {
    icon: Layers3,
    title: "Specification-Based Sourcing",
    description:
      "Enquiries guided by part numbers, datasheets, bills of materials, and technical requirements.",
  },
  {
    icon: Globe2,
    title: "Sourcing Support",
    description:
      "A structured approach to discussing component sourcing and procurement needs.",
  },
  {
    icon: Handshake,
    title: "B2B Engagement",
    description:
      "Working with businesses and engineering teams to understand their component requirements.",
  },
];

export default function AboutHero() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#F3F6FA] via-white to-white">
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -right-24 -top-28 h-96 w-96 rounded-full bg-[#0B50B6]/[0.09] blur-[100px]" />

        <div className="absolute -left-28 top-1/3 h-80 w-80 rounded-full bg-[#E9B747]/[0.12] blur-[100px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#10406F 1px, transparent 1px), linear-gradient(90deg, #10406F 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
      </div>

      <Container className="relative">
        <div className="py-16 sm:py-20 lg:py-24">
          {/* Hero introduction */}
          <div className="mx-auto max-w-5xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#10406F]/10 bg-white/90 px-5 py-2.5 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#E9B747]" />

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#10406F] sm:text-sm">
                About POWERWIRE CRAFTS
              </span>
            </div>

            <h1 className="mt-7 text-4xl font-extrabold leading-[1.15] tracking-tight text-[#10406F] sm:text-5xl lg:text-6xl">
              Connecting Businesses
              <span className="mt-2 block">
                with{" "}
                <span className="text-[#0B50B6]">
                  Electronic Solutions
                </span>
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg lg:text-xl">
              POWERWIRE CRAFTS PRIVATE LIMITED focuses on electronic
              component distribution and sourcing requirements for
              businesses. From semiconductors and integrated circuits to
              sensors and connectivity components, we aim to help customers
              navigate their component requirements with a specification-led
              approach.
            </p>

            {/* CTA buttons */}
            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex min-h-14 items-center justify-center gap-2 rounded-xl bg-[#10406F] px-7 py-4 text-sm font-bold text-white shadow-lg shadow-[#10406F]/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0B50B6]"
              >
                Discuss Your Requirements

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/products"
                className="group inline-flex min-h-14 items-center justify-center gap-2 rounded-xl border border-[#10406F]/15 bg-white px-7 py-4 text-sm font-bold text-[#10406F] transition-all duration-300 hover:border-[#0B50B6]/30 hover:bg-[#F3F6FA]"
              >
                Explore Products

                <ArrowUpRight
                  size={17}
                  className="text-[#0B50B6] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </div>

          {/* Company highlights */}
          <div className="mx-auto mt-14 max-w-6xl sm:mt-16 lg:mt-20">
            <div className="grid grid-cols-2 overflow-hidden rounded-2xl border border-slate-200/80 bg-white/95 shadow-[0_12px_40px_rgba(16,64,111,0.07)] backdrop-blur-sm lg:grid-cols-4">
              {highlights.map((item, index) => (
                <div
                  key={item.label}
                  className={`group p-5 text-center transition-colors duration-300 hover:bg-[#F3F6FA] sm:p-7 ${
                    index % 2 === 1
                      ? "border-l border-slate-100"
                      : ""
                  } ${
                    index >= 2
                      ? "border-t border-slate-100 lg:border-t-0"
                      : ""
                  } ${
                    index > 0
                      ? "lg:border-l lg:border-t-0"
                      : ""
                  }`}
                >
                  <p
                    className={`text-3xl font-extrabold tracking-tight transition-transform duration-300 group-hover:-translate-y-0.5 sm:text-4xl ${
                      index % 2 === 0
                        ? "text-[#0B50B6]"
                        : "text-[#B68A20]"
                    }`}
                  >
                    {item.number}
                  </p>

                  <h2 className="mt-3 text-sm font-bold text-[#10406F] sm:text-base">
                    {item.label}
                  </h2>

                  <p className="mt-2 text-xs leading-5 text-slate-500 sm:text-sm">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Capabilities */}
          <div className="mx-auto mt-16 max-w-6xl lg:mt-20">
            <div className="mb-8 max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#B68A20]">
                What We Focus On
              </p>

              <h2 className="mt-3 text-2xl font-bold tracking-tight text-[#10406F] sm:text-3xl">
                Built Around Your Component Requirements
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                A clear, requirement-driven approach to electronic component
                enquiries and sourcing discussions.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {capabilities.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group rounded-2xl border border-slate-200/80 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#0B50B6]/25 hover:shadow-lg hover:shadow-[#10406F]/[0.06] sm:p-6"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#10406F]/[0.06] text-[#10406F] transition-colors duration-300 group-hover:bg-[#10406F] group-hover:text-white">
                      <Icon size={23} strokeWidth={1.8} />
                    </div>

                    <h3 className="mt-5 text-base font-bold text-[#10406F]">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Brand signature */}
          <div className="mt-12 flex flex-col items-center justify-center gap-3 text-center sm:flex-row">
            <span className="h-px w-8 bg-[#E9B747]" />

            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
              POWERWIRE CRAFTS PRIVATE LIMITED
            </p>

            <span className="h-px w-8 bg-[#E9B747]" />
          </div>
        </div>
      </Container>
    </section>
  );
}
