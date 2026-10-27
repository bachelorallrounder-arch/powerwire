

import Image from "next/image";
import Link from "next/link";
import Container from "@/components/shared/Container";

export const metadata = {
  title: "Engineered Component Alternatives | PowerWire Crafts",
  description:
    "Explore potential electronic component replacements with PowerWire Crafts. Compare specifications, package compatibility, electrical characteristics and sourcing options.",
  alternates: {
    canonical: "/services/engineered-alternatives",
  },
  openGraph: {
    title: "Engineered Alternatives | PowerWire Crafts",
    description:
      "Explore potential component alternatives when original parts are unavailable, discontinued or difficult to source.",
    url: "/services/engineered-alternatives",
    type: "website",
  },
};

const capabilities = [
  {
    number: "01",
    icon: "⌕",
    title: "Alternative Part Identification",
    description:
      "Explore potential replacement components based on the original manufacturer part number, application and stated technical requirements.",
  },
  {
    number: "02",
    icon: "◇",
    title: "Specification Comparison",
    description:
      "Compare relevant parameters such as voltage, current, tolerance, operating temperature and other datasheet specifications.",
  },
  {
    number: "03",
    icon: "▦",
    title: "Package & Pin Compatibility",
    description:
      "Review package dimensions, pin configuration and footprint information to identify potential physical integration concerns.",
  },
  {
    number: "04",
    icon: "↗",
    title: "Alternative Sourcing Options",
    description:
      "Explore sourcing availability for candidate parts that may meet your technical, commercial and procurement requirements.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Share the Original Part",
    description:
      "Provide the manufacturer part number, datasheet, application details and any design constraints.",
  },
  {
    number: "02",
    title: "Define Key Requirements",
    description:
      "Identify critical electrical parameters, package requirements, operating conditions and applicable standards.",
  },
  {
    number: "03",
    title: "Compare Candidates",
    description:
      "Review potential alternatives against the original specifications and identify differences that may require further evaluation.",
  },
  {
    number: "04",
    title: "Evaluate Before Approval",
    description:
      "Review remaining technical risks and determine whether additional engineering analysis, testing or design changes are needed.",
  },
];

const benefits = [
  {
    number: "01",
    title: "Support for Obsolete Parts",
    description:
      "Explore replacement possibilities when the original component is discontinued or difficult to obtain.",
  },
  {
    number: "02",
    title: "Requirement-Based Comparison",
    description:
      "Focus on the specifications and operating conditions that matter for your application.",
  },
  {
    number: "03",
    title: "Procurement Flexibility",
    description:
      "Consider additional sourcing options when original parts face availability or lead-time constraints.",
  },
  {
    number: "04",
    title: "Clear Technical Trade-Offs",
    description:
      "Identify specification differences and compatibility questions that need attention before selecting a replacement.",
  },
];

const applications = [
  "Industrial control boards",
  "Power electronics",
  "Automotive electronics",
  "Telecommunications equipment",
  "Embedded systems",
  "Legacy electronic products",
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

export default function EngineeredAlternativesPage() {
  return (
    <main className="overflow-hidden bg-white text-[#10406F]">
      {/* SECTION 1: HERO */}
      <section className="bg-[#F3F6FA]">
        <Container>
          <div className="grid items-center gap-10 py-14 sm:py-18 lg:grid-cols-2 lg:gap-14 lg:py-24">
            <div>
              <Eyebrow>Engineered Alternatives</Eyebrow>

              <h1 className="max-w-2xl text-4xl font-bold leading-[1.12] tracking-tight text-[#10406F] sm:text-5xl lg:text-[3.6rem]">
                When the Original Part Isn’t an Option,{" "}
                <span className="text-[#0B50B6]">
                  Explore Alternatives.
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
                Discontinued components, supply shortages and extended lead
                times can put projects at risk. PowerWire Crafts helps you
                explore potential component alternatives by reviewing key
                specifications, package considerations and sourcing options
                against your requirements.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact?service=engineered-alternatives"
                  className="group inline-flex min-h-13 items-center justify-center gap-3 rounded-xl bg-[#E9B747] px-6 py-4 text-sm font-bold text-[#10406F] transition hover:-translate-y-0.5 hover:bg-[#F3C95F]"
                >
                  Discuss Your Component
                  <ArrowIcon />
                </Link>

                <Link
                  href="#alternative-process"
                  className="inline-flex min-h-13 items-center justify-center rounded-xl border border-[#10406F]/20 bg-white px-6 py-4 text-sm font-semibold text-[#10406F] transition hover:border-[#0B50B6] hover:bg-blue-50"
                >
                  Explore Our Process
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-slate-600">
                {[
                  "Specification comparison",
                  "Package compatibility review",
                  "Alternative sourcing",
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
              <div className="absolute -right-5 -top-5 h-32 w-32 rounded-full bg-[#E9B747]/20 blur-3xl" />
              <div className="absolute -bottom-5 -left-5 h-32 w-32 rounded-full bg-[#0B50B6]/15 blur-3xl" />

              <div className="relative overflow-hidden rounded-3xl border border-white shadow-[0_24px_70px_rgba(16,64,111,0.16)]">
                <Image
                  src="/services/engineered-alternatives-hero.png"
                  alt="Engineer comparing electronic components and specifications to evaluate potential alternatives"
                  width={1648}
                  height={1024}
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="h-[360px] w-full object-cover sm:h-[460px] lg:h-[550px]"
                />

                <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/50 bg-white/95 p-4 shadow-lg backdrop-blur-sm sm:inset-x-5 sm:bottom-5 sm:p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#0B50B6]">
                    Compare Before You Replace
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Review specifications, physical compatibility and
                    application requirements before approving a substitute.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 2: CAPABILITIES */}
      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <Eyebrow>Our Alternative Solutions</Eyebrow>

              <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#10406F] sm:text-4xl">
                Find Potential Replacements with{" "}
                <span className="text-[#0B50B6]">
                  Technical Requirements in Mind
                </span>
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                A component with a similar name or package is not necessarily
                a suitable replacement. Electrical ratings, pin assignments,
                timing, thermal characteristics and operating conditions can
                all affect compatibility.
              </p>

              <p className="mt-4 leading-7 text-slate-600">
                We help structure the search around your original component
                and stated requirements so that potential candidates and
                their differences can be reviewed before selection.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {capabilities.map((item) => (
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

      {/* SECTION 3: EVALUATION PROCESS */}
      <section
        id="alternative-process"
        className="scroll-mt-24 bg-[#F3F6FA] py-16 sm:py-20 lg:py-24"
      >
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex justify-center">
              <Eyebrow>Our Evaluation Process</Eyebrow>
            </div>

            <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#10406F] sm:text-4xl">
              From Original Part to{" "}
              <span className="text-[#0B50B6]">
                Potential Alternatives
              </span>
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              A structured review helps establish the requirements, compare
              potential candidates and identify what needs to be validated
              before a replacement is approved.
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
              href="/contact?service=engineered-alternatives"
              className="group inline-flex items-center justify-center gap-3 rounded-xl bg-[#10406F] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#0B50B6]"
            >
              Submit Your Part Number
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
                Make Informed Choices for{" "}
                <span className="text-[#0B50B6]">
                  Your Component Needs
                </span>
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                Selecting a substitute can affect circuit performance,
                reliability, manufacturability and compliance. Understanding
                the differences between the original part and a candidate
                replacement is an important part of the decision.
              </p>

              <p className="mt-4 leading-7 text-slate-600">
                PowerWire Crafts helps you explore potential alternatives and
                sourcing options based on the information available and the
                requirements you provide.
              </p>

              <div className="mt-6 rounded-2xl border-l-4 border-[#E9B747] bg-[#F3F6FA] p-5">
                <p className="text-sm font-semibold leading-6 text-[#10406F]">
                  A potential alternative is not automatically a drop-in
                  replacement.
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Engineering review, design validation and application
                  testing may be required before use.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map((item) => (
                <article
                  key={item.number}
                  className="rounded-2xl border border-slate-100 bg-white p-5 shadow-[0_8px_30px_rgba(16,64,111,0.05)]"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0B50B6]/10 text-sm font-bold text-[#0B50B6]">
                    {item.number}
                  </div>

                  <h3 className="mt-4 text-base font-bold text-[#10406F]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                </article>
              ))}

              <div className="rounded-2xl border border-[#0B50B6]/10 bg-[#F3F6FA] p-5 sm:col-span-2 sm:p-6">
                <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#0B50B6]">
                  Applications we can discuss
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {applications.map((application) => (
                    <span
                      key={application}
                      className="rounded-full border border-[#10406F]/10 bg-white px-3 py-2 text-xs font-medium text-slate-600 sm:text-sm"
                    >
                      {application}
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
                  Looking for a Component Alternative?
                </span>
              </div>

              <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                Let’s Explore the{" "}
                <span className="text-[#E9B747]">
                  Right Options for Your Design.
                </span>
              </h2>

              <p className="mt-5 max-w-xl leading-7 text-blue-100">
                Send us the original part number, datasheet, required quantity
                and application details. We’ll review your enquiry and discuss
                potential alternative components and sourcing options.
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <Link
                href="/contact?service=engineered-alternatives"
                className="group inline-flex min-h-13 items-center justify-center gap-3 rounded-xl bg-[#E9B747] px-6 py-4 text-sm font-bold text-[#10406F] transition hover:-translate-y-0.5 hover:bg-[#F3C95F]"
              >
                Discuss Your Requirements
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
