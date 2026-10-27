
import Link from "next/link";
import Container from "@/components/shared/Container";
import {
  ArrowRight,
  ArrowUpRight,
  Boxes,
  Cpu,
  FileSearch,
  Globe2,
  Headset,
  Layers3,
  PackageCheck,
  ShieldCheck,
  Workflow,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: Cpu,
    title: "Electronic Components Distribution",
    description:
      "Explore electronic component categories for product development, maintenance, manufacturing, and electronic system requirements.",
    points: [
      "Semiconductors and integrated circuits",
      "Active and passive components",
      "Electronic component categories",
    ],
  },
  {
    number: "02",
    icon: FileSearch,
    title: "Component Sourcing",
    description:
      "Build a clear sourcing enquiry around your required part numbers, manufacturer references, specifications, and target quantities.",
    points: [
      "Part number identification",
      "Datasheet and specification review",
      "BOM-based sourcing enquiries",
    ],
  },
  {
    number: "03",
    icon: Layers3,
    title: "Product Identification Support",
    description:
      "Help structure your requirements so product options can be discussed using relevant technical details and application needs.",
    points: [
      "Component specifications",
      "Package and model references",
      "Application-related requirements",
    ],
  },
  {
    number: "04",
    icon: Globe2,
    title: "Manufacturer-Based Enquiries",
    description:
      "Submit enquiries for components associated with your preferred manufacturers and discuss sourcing options for your requirements.",
    points: [
      "Manufacturer and part references",
      "Product family enquiries",
      "Sourcing option discussions",
    ],
  },
  {
    number: "05",
    icon: Workflow,
    title: "Procurement Support",
    description:
      "Organize component requirements for procurement discussions, from individual items to multi-line bills of materials.",
    points: [
      "Consolidated requirement lists",
      "Quantity-based enquiries",
      "Requirement coordination",
    ],
  },
  {
    number: "06",
    icon: Headset,
    title: "Business Enquiry Support",
    description:
      "Get in touch with your component requirements so the next steps can be discussed clearly with our team.",
    points: [
      "Product and availability enquiries",
      "Technical requirement details",
      "Business purchasing discussions",
    ],
  },
];

const metrics = [
  {
    value: "60K+",
    label: "Electronic Components",
    description: "Catalogue coverage",
    icon: Boxes,
  },
  {
    value: "100+",
    label: "Manufacturers",
    description: "Manufacturer coverage",
    icon: PackageCheck,
  },
  {
    value: "B2B",
    label: "Business Focus",
    description: "Business sourcing needs",
    icon: Workflow,
  },
  {
    value: "End-to-End",
    label: "Enquiry Approach",
    description: "From requirement to discussion",
    icon: ShieldCheck,
  },
];

export default function WhatWeDo() {
  return (
    <section className="relative isolate overflow-hidden bg-[#F3F6FA] py-20 sm:py-24 lg:py-28">
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -right-40 -top-32 h-96 w-96 rounded-full bg-[#0B50B6]/[0.07] blur-[100px]" />
        <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-[#E9B747]/[0.10] blur-[100px]" />
      </div>

      <Container className="relative">
        {/* Section header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#10406F]/10 bg-white px-4 py-2 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#E9B747]" />
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#10406F] sm:text-sm">
              What We Do
            </span>
          </div>

          <h2 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-[#10406F] sm:text-4xl lg:text-5xl">
            Electronic Component
            <span className="mt-2 block text-[#0B50B6]">
              Distribution & Sourcing
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            POWERWIRE CRAFTS PRIVATE LIMITED focuses on electronic component
            distribution and sourcing enquiries for businesses. We help
            customers organize their requirements around product references,
            technical specifications, quantities, and intended applications.
          </p>
        </div>

        {/* Service cards */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.number}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_5px_24px_rgba(16,64,111,0.035)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#0B50B6]/25 hover:shadow-[0_18px_40px_rgba(16,64,111,0.09)] sm:p-7"
              >
                {/* Top accent */}
                <div className="absolute left-0 top-0 h-1 w-0 bg-[#E9B747] transition-all duration-300 group-hover:w-full" />

                <div className="flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#10406F]/[0.06] text-[#10406F] transition-all duration-300 group-hover:bg-[#10406F] group-hover:text-white">
                    <Icon size={26} strokeWidth={1.8} />
                  </div>

                  <span className="font-mono text-sm font-semibold tracking-wider text-slate-300 transition-colors group-hover:text-[#B68A20]">
                    {service.number}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-bold leading-snug tracking-tight text-[#10406F] transition-colors group-hover:text-[#0B50B6]">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {service.description}
                </p>

                <ul className="mt-5 space-y-3">
                  {service.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2.5 text-sm leading-6 text-slate-600"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#B68A20]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto border-t border-slate-100 pt-5">
                  <Link
                    href="/contact"
                    className="group/link inline-flex items-center gap-2 text-sm font-bold text-[#10406F] transition-colors hover:text-[#0B50B6]"
                  >
                    Enquire About This Service
                    <ArrowUpRight
                      size={16}
                      className="text-[#B68A20] transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                    />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        {/* Company metrics */}
        <div className="relative mt-16 overflow-hidden rounded-3xl bg-[#10406F] p-7 shadow-xl shadow-[#10406F]/10 sm:mt-20 sm:p-10 lg:p-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-28 h-72 w-72 rounded-full border border-white/[0.07]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-4 -top-12 h-48 w-48 rounded-full border border-white/[0.07]"
          />

          <div className="relative">
            <div className="mx-auto mb-9 max-w-2xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#E9B747]">
                POWERWIRE CRAFTS PRIVATE LIMITED
              </p>

              <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                A Focus on Your Component Requirements
              </h3>

              <p className="mt-3 text-sm leading-7 text-blue-100/75 sm:text-base">
                Explore our stated catalogue coverage and business approach,
                then contact us to discuss your specific sourcing needs.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-0">
              {metrics.map((metric, index) => {
                const Icon = metric.icon;

                return (
                  <div
                    key={metric.label}
                    className={`rounded-xl border border-white/10 bg-white/[0.04] p-5 text-center transition-colors hover:bg-white/[0.08] sm:p-6 lg:rounded-none lg:border-0 lg:bg-transparent lg:hover:bg-transparent ${
                      index > 0 ? "lg:border-l lg:border-white/15" : ""
                    }`}
                  >
                    <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-[#E9B747]/10 text-[#E9B747]">
                      <Icon size={21} strokeWidth={1.8} />
                    </div>

                    <p
                      className={`mt-4 font-extrabold tracking-tight ${
                        metric.value === "End-to-End"
                          ? "text-2xl sm:text-3xl"
                          : "text-3xl sm:text-4xl"
                      } ${
                        index % 2 === 0
                          ? "text-white"
                          : "text-[#E9B747]"
                      }`}
                    >
                      {metric.value}
                    </p>

                    <h4 className="mt-2 text-sm font-bold text-white">
                      {metric.label}
                    </h4>

                    <p className="mt-1 text-xs leading-5 text-blue-100/60">
                      {metric.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-9 flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-7 text-center sm:flex-row sm:text-left">
              <p className="max-w-xl text-sm leading-6 text-blue-100/75">
                Have a part number, BOM, or product specification? Start an
                enquiry with our team.
              </p>

              <Link
                href="/contact"
                className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#E9B747] px-6 py-3.5 text-sm font-bold text-[#102F4D] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
              >
                Request a Quote
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
