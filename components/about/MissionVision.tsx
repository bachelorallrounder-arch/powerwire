
import Link from "next/link";
import Container from "@/components/shared/Container";
import {
  ArrowRight,
  ArrowUpRight,
  Compass,
  Eye,
  Goal,
  Handshake,
  Lightbulb,
  ShieldCheck,
  Target,
} from "lucide-react";

const principles = [
  {
    icon: ShieldCheck,
    title: "Trust & Transparency",
    description:
      "Build professional relationships through clear communication, honest expectations, and responsible business practices.",
  },
  {
    icon: Lightbulb,
    title: "Customer-Focused Thinking",
    description:
      "Understand each customer's component requirements, technical specifications, and procurement priorities.",
  },
  {
    icon: Handshake,
    title: "Long-Term Partnerships",
    description:
      "Develop lasting business relationships through responsiveness, collaboration, and a consistent service approach.",
  },
];

export default function VisionMission() {
  return (
    <section className="relative isolate overflow-hidden bg-[#F3F6FA] py-20 sm:py-24 lg:py-28">
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -left-36 -top-32 h-96 w-96 rounded-full bg-[#0B50B6]/[0.07] blur-[100px]" />
        <div className="absolute -bottom-40 -right-32 h-96 w-96 rounded-full bg-[#E9B747]/[0.11] blur-[100px]" />
      </div>

      <Container className="relative">
        {/* Section heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#10406F]/10 bg-white px-4 py-2 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#E9B747]" />
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#10406F] sm:text-sm">
              Our Vision & Mission
            </span>
          </div>

          <h2 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-[#10406F] sm:text-4xl lg:text-5xl">
            Our Purpose.
            <span className="mt-2 block text-[#0B50B6]">
              Our Direction.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Our vision and mission shape how POWERWIRE CRAFTS approaches
            electronic component distribution, sourcing requirements, and
            relationships with businesses.
          </p>
        </div>

        {/* Vision and mission cards */}
        <div className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-2 lg:gap-8">
          {/* Vision */}
          <article className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-7 shadow-[0_8px_30px_rgba(16,64,111,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-9 lg:p-10">
            <div className="absolute right-0 top-0 h-36 w-36 rounded-bl-full bg-[#0B50B6]/[0.04] transition-colors duration-300 group-hover:bg-[#0B50B6]/[0.08]" />

            <div className="relative">
              <div className="flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#10406F] text-white shadow-lg shadow-[#10406F]/15">
                  <Eye size={27} strokeWidth={1.8} />
                </div>

                <span className="font-mono text-sm font-semibold tracking-widest text-slate-300">
                  01 / VISION
                </span>
              </div>

              <p className="mt-8 text-xs font-bold uppercase tracking-[0.18em] text-[#B68A20]">
                Where We Aspire to Go
              </p>

              <h3 className="mt-3 text-2xl font-extrabold leading-snug tracking-tight text-[#10406F] sm:text-3xl">
                To Be a Trusted Name in Electronic Component Sourcing
              </h3>

              <p className="mt-5 text-sm leading-8 text-slate-600 sm:text-base">
                Our vision is to build POWERWIRE CRAFTS into a trusted
                business partner for electronic component distribution and
                sourcing by making product enquiries more accessible,
                strengthening customer relationships, and supporting the
                evolving needs of the electronics industry.
              </p>

              <div className="mt-7 flex items-center gap-3 border-t border-slate-100 pt-6">
                <Compass size={19} className="shrink-0 text-[#0B50B6]" />
                <p className="text-sm font-semibold text-[#10406F]">
                  Growing through trust, service, and lasting relationships.
                </p>
              </div>
            </div>
          </article>

          {/* Mission */}
          <article className="group relative overflow-hidden rounded-3xl bg-[#10406F] p-7 shadow-xl shadow-[#10406F]/10 transition-all duration-300 hover:-translate-y-1 sm:p-9 lg:p-10">
            <div className="absolute -right-12 -top-12 h-52 w-52 rounded-full border border-white/[0.08]" />
            <div className="absolute -right-2 -top-2 h-32 w-32 rounded-full border border-white/[0.08]" />

            <div className="relative">
              <div className="flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#E9B747]/25 bg-[#E9B747]/10 text-[#E9B747]">
                  <Target size={27} strokeWidth={1.8} />
                </div>

                <span className="font-mono text-sm font-semibold tracking-widest text-white/40">
                  02 / MISSION
                </span>
              </div>

              <p className="mt-8 text-xs font-bold uppercase tracking-[0.18em] text-[#E9B747]">
                What Guides Our Work
              </p>

              <h3 className="mt-3 text-2xl font-extrabold leading-snug tracking-tight text-white sm:text-3xl">
                Making Component Sourcing Clearer and More Customer-Focused
              </h3>

              <p className="mt-5 text-sm leading-8 text-blue-100/80 sm:text-base">
                Our mission is to understand customer requirements, facilitate
                electronic component enquiries, and provide a structured
                approach to product and sourcing discussions. We aim to
                support businesses through responsive communication,
                attention to specifications, and professional service.
              </p>

              <div className="mt-7 flex items-center gap-3 border-t border-white/10 pt-6">
                <Goal size={19} className="shrink-0 text-[#E9B747]" />
                <p className="text-sm font-semibold text-white">
                  Turning component requirements into focused enquiries.
                </p>
              </div>
            </div>
          </article>
        </div>

        {/* Guiding principles */}
        <div className="mt-16 sm:mt-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#B68A20]">
              What Guides Us
            </p>

            <h3 className="mt-3 text-2xl font-extrabold tracking-tight text-[#10406F] sm:text-3xl">
              The Principles Behind Our Purpose
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              The standards we aim to bring to every customer interaction and
              business relationship.
            </p>
          </div>

          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {principles.map((principle, index) => {
              const Icon = principle.icon;

              return (
                <article
                  key={principle.title}
                  className="group rounded-2xl border border-slate-200/80 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#0B50B6]/25 hover:shadow-lg hover:shadow-[#10406F]/[0.06] sm:p-7"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#10406F]/[0.06] text-[#10406F] transition-colors duration-300 group-hover:bg-[#10406F] group-hover:text-white">
                      <Icon size={23} strokeWidth={1.8} />
                    </div>

                    <span className="font-mono text-xs font-semibold text-slate-300">
                      0{index + 1}
                    </span>
                  </div>

                  <h4 className="mt-5 text-lg font-bold text-[#10406F]">
                    {principle.title}
                  </h4>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {principle.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>

        {/* Closing CTA */}
        <div className="mt-12 flex flex-col items-center justify-between gap-5 rounded-2xl border border-[#10406F]/10 bg-white p-6 sm:flex-row sm:p-8">
          <div>
            <h3 className="text-xl font-bold text-[#10406F]">
              Let&apos;s Build a Strong Business Relationship
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Tell us about your electronic component or sourcing requirements.
            </p>
          </div>

          <Link
            href="/contact"
            className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#10406F] px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0B50B6]"
          >
            Contact Our Team
            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </Container>
    </section>
  );
}
