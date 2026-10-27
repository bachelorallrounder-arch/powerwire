
import Link from "next/link";
import Container from "@/components/shared/Container";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Cpu,
  FileText,
  Headphones,
} from "lucide-react";

const highlights = [
  {
    icon: Cpu,
    title: "Component Sourcing",
    description: "Requirements across electronic components and technologies.",
  },
  {
    icon: FileText,
    title: "Specification-Based Enquiries",
    description: "Share part numbers, datasheets, or technical requirements.",
  },
  {
    icon: Headphones,
    title: "Enquiry Support",
    description: "Discuss product availability and sourcing requirements.",
  },
];

export default function CTA() {
  return (
    <section className="relative isolate overflow-hidden bg-[#10406F] py-20 sm:py-24 lg:py-28">
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -left-32 -top-40 h-[28rem] w-[28rem] rounded-full bg-[#0B50B6]/35 blur-[100px]" />
        <div className="absolute -bottom-48 -right-20 h-[32rem] w-[32rem] rounded-full bg-[#E9B747]/15 blur-[110px]" />

        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <Container className="relative">
        <div className="mx-auto max-w-6xl">
          {/* Main CTA panel */}
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0B3159]/65 px-6 py-10 shadow-2xl shadow-[#071B4D]/20 backdrop-blur-sm sm:px-10 sm:py-14 lg:px-16 lg:py-16">
            {/* Decorative accent */}
            <div
              aria-hidden="true"
              className="absolute right-0 top-0 h-1 w-40 bg-gradient-to-l from-[#E9B747] to-transparent sm:w-64"
            />

            <div className="relative grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
              {/* Copy and actions */}
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-[#E9B747]/30 bg-[#E9B747]/10 px-4 py-2">
                  <span className="h-2 w-2 rounded-full bg-[#E9B747]" />
                  <span className="text-xs font-bold uppercase tracking-[0.17em] text-[#F5D98D]">
                    Let&apos;s Discuss Your Requirements
                  </span>
                </div>

                <h2 className="mt-7 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Looking for the Right
                  <span className="mt-2 block text-[#E9B747]">
                    Electronic Components?
                  </span>
                </h2>

                <p className="mt-6 max-w-2xl text-base leading-8 text-blue-100/80 sm:text-lg">
                  From semiconductors and integrated circuits to sensors,
                  connectors, and embedded electronics, POWERWIRE CRAFTS
                  PRIVATE LIMITED helps you discuss component requirements
                  with a specification-focused approach.
                </p>

                <p className="mt-3 max-w-2xl text-sm leading-7 text-blue-100/65">
                  Send us your part numbers, bill of materials (BOM), or
                  technical specifications to start an enquiry.
                </p>

                <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="/contact"
                    className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-xl bg-[#E9B747] px-7 py-4 text-sm font-bold text-[#102F4D] shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
                  >
                    Request a Quote
                    <ArrowRight
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>

                  <Link
                    href="/products"
                    className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-xl border border-white/20 bg-white/[0.04] px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:border-white/40 hover:bg-white/10"
                  >
                    Explore Products
                    <ArrowUpRight
                      size={17}
                      className="text-[#E9B747] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </Link>
                </div>

                <div className="mt-7 flex items-start gap-2.5 text-sm text-blue-100/75">
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-[#E9B747]"
                  />
                  <p>
                    Have a part number or technical specification ready?
                    Include it in your enquiry for a more focused discussion.
                  </p>
                </div>
              </div>

              {/* Supporting information card */}
              <div className="relative">
                <div className="absolute -inset-3 rounded-3xl border border-white/[0.07]" />

                <div className="relative rounded-2xl border border-white/10 bg-white/[0.06] p-6 sm:p-7">
                  <div className="mb-6 flex items-center gap-4 border-b border-white/10 pb-6">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#E9B747]/15 text-[#E9B747]">
                      <Cpu size={25} strokeWidth={1.8} />
                    </div>

                    <div>
                      <p className="text-lg font-bold text-white">
                        Your Sourcing Enquiry
                      </p>
                      <p className="mt-1 text-sm text-blue-100/60">
                        Start with your requirement
                      </p>
                    </div>
                  </div>

                  <div className="space-y-5">
                    {highlights.map((item, index) => {
                      const Icon = item.icon;

                      return (
                        <div key={item.title} className="flex gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-[#E9B747]">
                            <Icon size={19} strokeWidth={1.8} />
                          </div>

                          <div>
                            <h3 className="text-sm font-semibold text-white">
                              {item.title}
                            </h3>
                            <p className="mt-1 text-sm leading-6 text-blue-100/65">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-7 rounded-xl border border-[#E9B747]/20 bg-[#E9B747]/[0.07] p-4">
                    <p className="text-sm font-medium leading-6 text-[#F5D98D]">
                      Every project starts with understanding the right
                      component requirements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom brand signature */}
          <div className="mt-7 flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/60">
              POWERWIRE CRAFTS PRIVATE LIMITED
            </p>

            <p className="text-xs text-white/50">
              Electronic Components · Sourcing · Technical Requirements
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
