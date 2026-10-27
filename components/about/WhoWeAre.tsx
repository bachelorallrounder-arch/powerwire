
import Link from "next/link";
import Container from "@/components/shared/Container";
import {
  ArrowRight,
  ArrowUpRight,
  Boxes,
  Cpu,
  FileSearch,
  Handshake,
  ShieldCheck,
} from "lucide-react";

const focusAreas = [
  {
    icon: Cpu,
    title: "Electronic Components",
    description:
      "Explore component requirements across semiconductors, integrated circuits, sensors, and other electronic technologies.",
  },
  {
    icon: FileSearch,
    title: "Requirement-Based Sourcing",
    description:
      "Share part numbers, datasheets, or a bill of materials to help define your component sourcing requirements.",
  },
  {
    icon: Boxes,
    title: "Product Selection Support",
    description:
      "Organize your enquiry around product specifications, component details, and intended applications.",
  },
  {
    icon: Handshake,
    title: "Business-Focused Service",
    description:
      "A professional approach to understanding the needs of businesses, procurement teams, and engineering professionals.",
  },
];

export default function WhoWeAre() {
  return (
    <section className="relative isolate overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#0B50B6]/[0.05] blur-[100px]" />
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#E9B747]/[0.08] blur-[100px]" />
      </div>

      <Container className="relative">
        {/* Company introduction */}
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#10406F]/10 bg-[#F3F6FA] px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-[#E9B747]" />
              <span className="text-xs font-bold uppercase tracking-[0.17em] text-[#10406F] sm:text-sm">
                Who We Are
              </span>
            </div>

            <h2 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-[#10406F] sm:text-4xl lg:text-5xl">
              Your Partner in
              <span className="mt-2 block text-[#0B50B6]">
                Electronic Component Sourcing
              </span>
            </h2>

            <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
              <p>
                <strong className="font-semibold text-[#10406F]">
                  POWERWIRE CRAFTS PRIVATE LIMITED
                </strong>{" "}
                is focused on electronic component distribution and sourcing,
                helping businesses navigate the requirements involved in
                finding components for their products, projects, and
                electronic systems.
              </p>

              <p>
                From identifying components by part number to discussing
                product specifications and sourcing requirements, we
                understand that every enquiry begins with a specific need.
                Clear information and a structured approach can help make the
                procurement process easier to manage.
              </p>

              <p>
                Our focus is on understanding what customers require,
                supporting informed product enquiries, and building
                professional business relationships through clear
                communication and a customer-oriented approach.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#10406F] px-6 py-3.5 text-sm font-bold text-white shadow-md shadow-[#10406F]/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0B50B6]"
              >
                Talk to Our Team
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/products"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-bold text-[#10406F] transition-all duration-300 hover:border-[#0B50B6]/30 hover:bg-[#F3F6FA]"
              >
                Browse Products
                <ArrowUpRight
                  size={17}
                  className="text-[#0B50B6] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </div>

          {/* Brand message panel */}
          <div className="relative">
            <div className="absolute -inset-3 rounded-[28px] bg-gradient-to-br from-[#0B50B6]/10 via-transparent to-[#E9B747]/15 blur-xl" />

            <div className="relative overflow-hidden rounded-3xl bg-[#10406F] p-7 shadow-2xl shadow-[#10406F]/15 sm:p-9 lg:p-10">
              <div
                aria-hidden="true"
                className="absolute -right-16 -top-16 h-56 w-56 rounded-full border border-white/[0.08]"
              />
              <div
                aria-hidden="true"
                className="absolute -right-5 -top-5 h-36 w-36 rounded-full border border-white/[0.08]"
              />

              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#E9B747]/25 bg-[#E9B747]/10 text-[#E9B747]">
                  <ShieldCheck size={28} strokeWidth={1.7} />
                </div>

                <p className="mt-8 text-xs font-bold uppercase tracking-[0.18em] text-[#E9B747]">
                  Our Approach
                </p>

                <h3 className="mt-3 text-2xl font-bold leading-snug text-white sm:text-3xl">
                  Understand the requirement.
                  <span className="mt-1 block text-[#E9B747]">
                    Start the right conversation.
                  </span>
                </h3>

                <p className="mt-5 text-sm leading-7 text-blue-100/80 sm:text-base">
                  Whether you have an individual part number or a detailed
                  component list, a clear enquiry helps establish the
                  specifications, quantities, and sourcing requirements
                  that need to be discussed.
                </p>

                <div className="mt-8 space-y-4 border-t border-white/10 pt-6">
                  {[
                    "Part numbers and component identification",
                    "Technical specifications and datasheets",
                    "Project and procurement requirements",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#E9B747]" />
                      <p className="text-sm leading-6 text-white/90">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="group mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#E9B747] transition-colors hover:text-white"
                >
                  Share Your Requirements
                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Areas of focus */}
        <div className="mt-20 border-t border-slate-100 pt-14 sm:mt-24 sm:pt-16">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#B68A20]">
                What We Focus On
              </p>

              <h3 className="mt-3 text-2xl font-extrabold tracking-tight text-[#10406F] sm:text-3xl">
                Designed Around Business Requirements
              </h3>
            </div>

            <p className="max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
              A practical approach to component enquiries, product
              information, and sourcing discussions.
            </p>
          </div>

          <div className="mt-9 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {focusAreas.map((area, index) => {
              const Icon = area.icon;

              return (
                <article
                  key={area.title}
                  className="group rounded-2xl border border-slate-200/80 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#0B50B6]/25 hover:shadow-xl hover:shadow-[#10406F]/[0.06]"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#10406F]/[0.06] text-[#10406F] transition-colors duration-300 group-hover:bg-[#10406F] group-hover:text-white">
                      <Icon size={23} strokeWidth={1.8} />
                    </div>

                    <span className="font-mono text-xs font-semibold text-slate-300 transition-colors group-hover:text-[#B68A20]">
                      0{index + 1}
                    </span>
                  </div>

                  <h4 className="mt-5 text-base font-bold text-[#10406F]">
                    {area.title}
                  </h4>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {area.description}
                  </p>

                  <div className="mt-5 h-1 w-10 rounded-full bg-[#E9B747] transition-all duration-300 group-hover:w-16" />
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
