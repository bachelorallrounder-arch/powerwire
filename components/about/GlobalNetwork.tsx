
import Link from "next/link";
import Container from "@/components/shared/Container";
import {
  ArrowRight,
  ArrowUpRight,
  Boxes,
  CheckCircle2,
  Globe2,
  Network,
  PackageSearch,
  SearchCheck,
} from "lucide-react";

const sourcingSteps = [
  {
    number: "01",
    title: "Share Your Requirement",
    description:
      "Provide part numbers, manufacturer references, a bill of materials, or technical specifications.",
    icon: PackageSearch,
  },
  {
    number: "02",
    title: "Review Sourcing Needs",
    description:
      "Discuss the required components, quantities, specifications, and procurement priorities.",
    icon: SearchCheck,
  },
  {
    number: "03",
    title: "Discuss Available Options",
    description:
      "Review the sourcing options, availability, and commercial details that can be confirmed for your enquiry.",
    icon: CheckCircle2,
  },
];

const networkFeatures = [
  "Manufacturer-specific component enquiries",
  "Part number and specification-based requests",
  "Multi-item and BOM sourcing enquiries",
  "Availability and procurement discussions",
  "Business-focused customer communication",
];

export default function GlobalNetwork() {
  return (
    <section className="relative isolate overflow-hidden bg-[#F3F6FA] py-20 sm:py-24 lg:py-28">
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[#0B50B6]/[0.07] blur-[100px]" />
        <div className="absolute -bottom-36 -right-28 h-96 w-96 rounded-full bg-[#E9B747]/[0.10] blur-[100px]" />
      </div>

      <Container className="relative">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Main content */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#10406F]/10 bg-white px-4 py-2 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#E9B747]" />
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#10406F]">
                Sourcing & Procurement
              </span>
            </div>

            <h2 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-[#10406F] sm:text-4xl lg:text-5xl">
              Connecting Component Needs
              <span className="mt-2 block text-[#0B50B6]">
                with Sourcing Opportunities
              </span>
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
              POWERWIRE CRAFTS PRIVATE LIMITED focuses on electronic
              component distribution and sourcing enquiries. We help
              businesses organize their requirements around manufacturer
              references, part numbers, technical specifications, and
              quantities.
            </p>

            <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
              Whether you need a specific component or are preparing a
              multi-item bill of materials, our approach begins with
              understanding your requirements and discussing the relevant
              sourcing and procurement options.
            </p>

            {/* Metrics */}
            <div className="mt-9 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-slate-200/80 bg-white p-5 sm:p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#10406F]/[0.06] text-[#10406F]">
                  <Boxes size={23} strokeWidth={1.8} />
                </div>

                <p className="mt-4 text-3xl font-extrabold tracking-tight text-[#0B50B6] sm:text-4xl">
                  60K+
                </p>

                <p className="mt-2 text-sm font-bold text-[#10406F]">
                  Electronic Components
                </p>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Stated catalogue coverage
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200/80 bg-white p-5 sm:p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E9B747]/15 text-[#9B7419]">
                  <Network size={23} strokeWidth={1.8} />
                </div>

                <p className="mt-4 text-3xl font-extrabold tracking-tight text-[#B68A20] sm:text-4xl">
                  100+
                </p>

                <p className="mt-2 text-sm font-bold text-[#10406F]">
                  Manufacturers
                </p>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Stated manufacturer coverage
                </p>
              </div>
            </div>

            <Link
              href="/contact"
              className="group mt-8 inline-flex min-h-13 items-center justify-center gap-2 rounded-xl bg-[#10406F] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#10406F]/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0B50B6]"
            >
              Discuss Your Sourcing Needs
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>

          {/* Sourcing panel */}
          <div className="relative">
            <div className="absolute -inset-3 rounded-[28px] bg-gradient-to-br from-[#0B50B6]/10 via-transparent to-[#E9B747]/15 blur-xl" />

            <div className="relative overflow-hidden rounded-3xl bg-[#10406F] p-6 text-white shadow-2xl shadow-[#10406F]/15 sm:p-8 lg:p-9">
              {/* Decorative circles */}
              <div
                aria-hidden="true"
                className="absolute -right-16 -top-16 h-56 w-56 rounded-full border border-white/[0.08]"
              />
              <div
                aria-hidden="true"
                className="absolute -right-4 -top-4 h-36 w-36 rounded-full border border-white/[0.08]"
              />

              <div className="relative">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#E9B747]/25 bg-[#E9B747]/10 text-[#E9B747]">
                    <Globe2 size={24} strokeWidth={1.8} />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.17em] text-[#E9B747]">
                      Our Approach
                    </p>

                    <h3 className="mt-1 text-xl font-bold sm:text-2xl">
                      A Clearer Sourcing Process
                    </h3>
                  </div>
                </div>

                <p className="mt-5 text-sm leading-7 text-blue-100/75">
                  Every enquiry starts with understanding the component,
                  quantity, specifications, and business requirements.
                </p>

                <div className="mt-8 space-y-6">
                  {sourcingSteps.map((step, index) => {
                    const Icon = step.icon;

                    return (
                      <div key={step.number} className="relative flex gap-4">
                        {index !== sourcingSteps.length - 1 && (
                          <div className="absolute bottom-0 left-5 top-12 w-px bg-white/15" />
                        )}

                        <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-[#E9B747]">
                          <Icon size={19} strokeWidth={1.8} />
                        </div>

                        <div className="pb-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="font-mono text-[11px] font-semibold text-[#E9B747]">
                              {step.number}
                            </span>

                            <h4 className="text-sm font-bold text-white sm:text-base">
                              {step.title}
                            </h4>
                          </div>

                          <p className="mt-2 text-sm leading-6 text-blue-100/70">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.05] p-5">
                  <h4 className="text-sm font-bold text-white">
                    What you can enquire about
                  </h4>

                  <ul className="mt-4 space-y-3">
                    {networkFeatures.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm leading-6 text-blue-100/80"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#E9B747]" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/products"
                  className="group mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#E9B747] transition-colors hover:text-white"
                >
                  Explore Our Products
                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
