
import Link from "next/link";
import Container from "@/components/shared/Container";
import {
  ArrowRight,
  ArrowUpRight,
  ClipboardList,
  Cpu,
  FileText,
  MessageCircle,
} from "lucide-react";

const enquiryOptions = [
  {
    icon: Cpu,
    title: "Component Requirements",
    description: "Share the components or part numbers you need.",
  },
  {
    icon: ClipboardList,
    title: "BOM & Specifications",
    description: "Send your component list or technical details.",
  },
  {
    icon: MessageCircle,
    title: "Business Enquiries",
    description: "Discuss your procurement and sourcing needs.",
  },
];

export default function CTA() {
  return (
    <section className="relative isolate overflow-hidden bg-[#10406F] py-20 sm:py-24 lg:py-28">
      {/* Background effects */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -left-32 -top-40 h-[28rem] w-[28rem] rounded-full bg-[#0B50B6]/40 blur-[100px]" />

        <div className="absolute -bottom-40 -right-20 h-[30rem] w-[30rem] rounded-full bg-[#E9B747]/15 blur-[110px]" />

        <div
          className="absolute inset-0 opacity-[0.055]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
      </div>

      <Container className="relative">
        <div className="mx-auto max-w-6xl">
          {/* Main CTA panel */}
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0B3159]/70 px-6 py-10 shadow-2xl shadow-[#071B4D]/20 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
            <div
              aria-hidden="true"
              className="absolute right-0 top-0 h-1 w-40 bg-gradient-to-l from-[#E9B747] to-transparent sm:w-64"
            />

            <div className="relative grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
              {/* Left content */}
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-[#E9B747]/25 bg-[#E9B747]/10 px-4 py-2">
                  <span className="h-2 w-2 rounded-full bg-[#E9B747]" />

                  <span className="text-xs font-bold uppercase tracking-[0.17em] text-[#F5D98D]">
                    Let&apos;s Work Together
                  </span>
                </div>

                <h2 className="mt-7 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Your Component Requirements.
                  <span className="mt-2 block text-[#E9B747]">
                    Our Next Conversation.
                  </span>
                </h2>

                <p className="mt-6 max-w-xl text-base leading-8 text-blue-100/80 sm:text-lg">
                  Whether you are sourcing a specific electronic component,
                  preparing a bill of materials, or exploring products for
                  your next project, POWERWIRE CRAFTS PRIVATE LIMITED invites
                  you to share your requirements with our team.
                </p>

                <p className="mt-4 max-w-xl text-sm leading-7 text-blue-100/65">
                  Give us the part numbers, specifications, or quantities
                  relevant to your enquiry so we can better understand your
                  needs and discuss the appropriate next steps.
                </p>

                <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="/contact"
                    className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-xl bg-[#E9B747] px-7 py-4 text-sm font-bold text-[#102F4D] shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
                  >
                    Send an Enquiry

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
                      className="text-[#E9B747] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </Link>
                </div>
              </div>

              {/* Right enquiry card */}
              <div className="relative">
                <div className="absolute -inset-3 rounded-3xl border border-white/[0.07]" />

                <div className="relative rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-sm sm:p-7">
                  <div className="flex items-center gap-4 border-b border-white/10 pb-6">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#E9B747]/15 text-[#E9B747]">
                      <FileText size={24} strokeWidth={1.8} />
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-white">
                        Start Your Enquiry
                      </h3>

                      <p className="mt-1 text-sm text-blue-100/60">
                        Tell us what your business needs
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 space-y-6">
                    {enquiryOptions.map((option, index) => {
                      const Icon = option.icon;

                      return (
                        <div
                          key={option.title}
                          className="flex gap-4"
                        >
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-[#E9B747]">
                            <Icon size={19} strokeWidth={1.8} />
                          </div>

                          <div>
                            <p className="text-sm font-bold text-white">
                              {option.title}
                            </p>

                            <p className="mt-1 text-sm leading-6 text-blue-100/65">
                              {option.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <Link
                    href="/contact"
                    className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.05] px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                  >
                    Contact POWERWIRE CRAFTS
                    <ArrowRight size={16} className="text-[#E9B747]" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Brand footer */}
          <div className="mt-7 flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-white/65">
              POWERWIRE CRAFTS PRIVATE LIMITED
            </p>

            <p className="text-xs text-white/50">
              Electronic Components · Distribution · Sourcing
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
