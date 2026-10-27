
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/shared/Container";

export const metadata = {
  title: "Risk Control & Quality Assurance | PowerWire Crafts",
  description:
    "Explore supplier evaluation, electronic component verification, documentation review and quality-focused sourcing support with PowerWire Crafts.",
  alternates: {
    canonical: "/services/risk-control-quality-assurance",
  },
  openGraph: {
    title: "Risk Control & Quality Assurance | PowerWire Crafts",
    description:
      "Quality-focused sourcing support to help assess component and supply-chain risks.",
    url: "/services/risk-control-quality-assurance",
    type: "website",
  },
};

const services = [
  {
    number: "01",
    icon: "⌕",
    title: "Supplier Evaluation",
    description:
      "Review potential suppliers and sourcing channels based on available information, business requirements and procurement criteria.",
  },
  {
    number: "02",
    icon: "◈",
    title: "Component Verification",
    description:
      "Review part numbers, markings, specifications and available inspection information to help identify potential discrepancies.",
  },
  {
    number: "03",
    icon: "▤",
    title: "Documentation Review",
    description:
      "Review available datasheets, certificates, traceability records and supporting documents relevant to your order.",
  },
  {
    number: "04",
    icon: "◇",
    title: "Risk Assessment Support",
    description:
      "Identify sourcing concerns and discuss practical considerations based on the component, supplier and intended application.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Understand Requirements",
    description:
      "Share your part numbers, application, quantity and quality or compliance requirements.",
  },
  {
    number: "02",
    title: "Evaluate Available Sources",
    description:
      "Review potential supplier options and the relevant information available for assessment.",
  },
  {
    number: "03",
    title: "Review Quality Information",
    description:
      "Discuss inspection requirements, component details and supporting documentation where available.",
  },
  {
    number: "04",
    title: "Discuss Next Steps",
    description:
      "Review findings, outstanding questions and suitable procurement options before proceeding.",
  },
];

const benefits = [
  {
    title: "Quality-Focused Sourcing",
    description:
      "Consider component quality and supplier-related risks as part of your sourcing decisions.",
    icon: "✓",
  },
  {
    title: "Clear Communication",
    description:
      "Discuss part details, available evidence, commercial terms and unresolved concerns.",
    icon: "↗",
  },
  {
    title: "Documentation Awareness",
    description:
      "Understand which supporting documents are available and what additional checks may be required.",
    icon: "▤",
  },
  {
    title: "Risk-Based Decisions",
    description:
      "Evaluate sourcing options against your application, requirements and acceptable risk level.",
    icon: "◎",
  },
];

const industries = [
  "Industrial automation",
  "Automotive electronics",
  "Medical equipment",
  "Telecommunications",
  "Data centers",
  "Aerospace and defense",
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <span className="h-[3px] w-8 rounded-full bg-[#E9B747]" />
      <span className="text-xs font-bold uppercase tracking-[0.17em] text-[#0B50B6]">
        {children}
      </span>
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1"
    >
      <path
        d="M5 12h14m-7-7 7 7-7 7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function RiskControlQualityAssurancePage() {
  return (
    <main className="overflow-hidden bg-white text-[#10406F]">
      {/* SECTION 1: HERO */}
      <section className="bg-[#F3F6FA]">
        <Container>
          <div className="grid items-center gap-10 py-14 sm:py-18 lg:grid-cols-2 lg:gap-14 lg:py-24">
            <div>
              <Eyebrow>Risk Control & Quality Assurance</Eyebrow>

              <h1 className="max-w-2xl text-4xl font-bold leading-[1.12] tracking-tight text-[#10406F] sm:text-5xl lg:text-[3.6rem]">
                Quality-Focused Sourcing for a{" "}
                <span className="text-[#0B50B6]">
                  More Reliable Supply Chain
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
                Electronic component sourcing involves more than availability
                and price. PowerWire Crafts helps you assess supplier options,
                review available component information and consider quality
                risks before making procurement decisions.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact?service=risk-control-quality-assurance"
                  className="group inline-flex min-h-13 items-center justify-center gap-3 rounded-xl bg-[#E9B747] px-6 py-4 text-sm font-bold text-[#10406F] transition hover:-translate-y-0.5 hover:bg-[#F3C95F]"
                >
                  Discuss Your Requirements
                  <ArrowIcon />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex min-h-13 items-center justify-center rounded-xl border border-[#10406F]/20 bg-white px-6 py-4 text-sm font-semibold text-[#10406F] transition hover:border-[#0B50B6] hover:bg-blue-50"
                >
                  Contact Our Team
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-slate-600">
                {[
                  "Quality-focused sourcing",
                  "Documentation review",
                  "Risk assessment support",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#0B50B6]/10 text-xs font-bold text-[#0B50B6]">
                      ✓
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -right-4 -top-4 h-32 w-32 rounded-full bg-[#E9B747]/20 blur-3xl" />

              <div className="relative overflow-hidden rounded-3xl border border-white shadow-[0_24px_70px_rgba(16,64,111,0.16)]">
                <Image
                  src="/services/risk-control-quality-assurance-hero.png"
                  alt="Electronic component being examined during a quality inspection"
                  width={1024}
                  height={1024}
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="h-[360px] w-full object-cover sm:h-[460px] lg:h-[550px]"
                />

                <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/50 bg-white/95 p-4 shadow-lg backdrop-blur-sm sm:inset-x-5 sm:bottom-5 sm:p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#0B50B6]">
                    Quality Starts with the Details
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Review part specifications, supplier information and
                    available documentation before you commit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 2: QUALITY ASSURANCE SERVICES */}
      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <Eyebrow>Our Quality Assurance Services</Eyebrow>

              <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#10406F] sm:text-4xl">
                A Practical Approach to{" "}
                <span className="text-[#0B50B6]">
                  Component Quality and Risk Control
                </span>
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                Inconsistent component quality, limited traceability and
                uncertain supply channels can create procurement challenges.
                Our approach helps you consider these risks in the context of
                your specific sourcing requirement.
              </p>

              <p className="mt-4 leading-7 text-slate-600">
                The checks and documentation available depend on the
                component, supplier, order and agreed scope of work.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {services.map((item) => (
                <article
                  key={item.number}
                  className="group rounded-2xl border border-slate-100 bg-[#F3F6FA] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#0B50B6]/20 hover:bg-white hover:shadow-xl hover:shadow-[#10406F]/5"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-2xl text-[#0B50B6] shadow-sm transition group-hover:bg-[#0B50B6] group-hover:text-white">
                      {item.icon}
                    </span>
                    <span className="text-sm font-bold tracking-wider text-[#0B50B6]/50">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-[#10406F]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 3: QUALITY PROCESS */}
      <section
        id="quality-process"
        className="scroll-mt-24 bg-[#F3F6FA] py-16 sm:py-20 lg:py-24"
      >
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex justify-center">
              <Eyebrow>Our Quality Process</Eyebrow>
            </div>

            <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#10406F] sm:text-4xl">
              A Structured Process for{" "}
              <span className="text-[#0B50B6]">Better-Informed Decisions</span>
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              We use a requirement-led approach to discuss potential risks,
              available quality information and the next steps for your
              sourcing enquiry.
            </p>
          </div>

          <div className="relative mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            <div className="absolute left-[12%] right-[12%] top-7 hidden border-t border-dashed border-[#0B50B6]/30 lg:block" />

            {processSteps.map((step) => (
              <article key={step.number} className="relative text-center">
                <div className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-[#0B50B6]/10 bg-white text-lg font-bold text-[#0B50B6] shadow-sm">
                  {step.number}
                </div>

                <h3 className="mt-5 text-lg font-bold text-[#10406F]">
                  {step.title}
                </h3>

                <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-slate-600">
                  {step.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/contact?service=risk-control-quality-assurance"
              className="group inline-flex items-center justify-center gap-3 rounded-xl bg-[#10406F] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#0B50B6]"
            >
              Discuss Your Quality Requirements
              <ArrowIcon />
            </Link>
          </div>
        </Container>
      </section>

      {/* SECTION 4: WHY POWERWIRE CRAFTS */}
      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <div>
              <Eyebrow>Why PowerWire Crafts</Eyebrow>

              <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#10406F] sm:text-4xl">
                Make Sourcing Decisions with{" "}
                <span className="text-[#0B50B6]">
                  Quality in Mind
                </span>
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                Your sourcing requirements may involve specific technical
                standards, documentation needs or application constraints.
                Making these expectations clear helps establish an appropriate
                basis for reviewing potential supply options.
              </p>

              <p className="mt-4 leading-7 text-slate-600">
                We focus on understanding your requirements and communicating
                the information available, so you can evaluate the options
                against your own acceptance criteria.
              </p>

              <div className="mt-6 rounded-2xl border-l-4 border-[#E9B747] bg-[#F3F6FA] p-5">
                <p className="text-sm font-semibold leading-6 text-[#10406F]">
                  Need a particular inspection, test or certification?
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Include it in your enquiry so the requested scope can be
                  discussed before the order proceeds.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-slate-100 bg-white p-5 shadow-[0_8px_30px_rgba(16,64,111,0.05)]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0B50B6]/10 text-xl font-bold text-[#0B50B6]">
                    {item.icon}
                  </div>

                  <h3 className="mt-4 text-base font-bold text-[#10406F]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                </article>
              ))}

              <div className="sm:col-span-2 rounded-2xl border border-[#0B50B6]/10 bg-[#F3F6FA] p-5 sm:p-6">
                <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#0B50B6]">
                  Supporting a range of industries
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {industries.map((industry) => (
                    <span
                      key={industry}
                      className="rounded-full border border-[#10406F]/10 bg-white px-3 py-2 text-xs font-medium text-slate-600 sm:text-sm"
                    >
                      {industry}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 5: CTA */}
      <section className="relative isolate overflow-hidden bg-[#10406F] py-16 sm:py-20 lg:py-24">
        <div
          aria-hidden="true"
          className="absolute -right-24 -top-28 -z-10 h-80 w-80 rounded-full bg-[#0B50B6]/60 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-32 left-1/4 -z-10 h-72 w-72 rounded-full bg-[#0B50B6]/30 blur-3xl"
        />

        <Container>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-[3px] w-8 rounded-full bg-[#E9B747]" />
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#E9B747]">
                  Strengthen Your Sourcing Process
                </span>
              </div>

              <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                Let’s Discuss Your{" "}
                <span className="text-[#E9B747]">
                  Quality Requirements.
                </span>
              </h2>

              <p className="mt-5 max-w-xl leading-7 text-blue-100">
                Share your component details, quality expectations and
                documentation needs with PowerWire Crafts. We’ll discuss your
                enquiry and the next steps based on your requirements.
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <Link
                href="/contact?service=risk-control-quality-assurance"
                className="group inline-flex min-h-13 items-center justify-center gap-3 rounded-xl bg-[#E9B747] px-6 py-4 text-sm font-bold text-[#10406F] transition hover:-translate-y-0.5 hover:bg-[#F3C95F]"
              >
                Request a Quality Review
                <ArrowIcon />
              </Link>

              <Link
                href="/contact"
                className="inline-flex min-h-13 items-center justify-center rounded-xl border border-white/30 px-6 py-4 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
              >
                Contact Our Team
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
