
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/shared/Container";

export const metadata = {
  title: "Hard-to-Find Electronic Component Sourcing | PowerWire Crafts",
  description:
    "Source obsolete, discontinued, allocated and long-lead-time electronic components through PowerWire Crafts. Submit your part numbers to discuss sourcing options.",
  alternates: {
    canonical: "/services/hard-to-find-sourcing",
  },
  openGraph: {
    title: "Hard-to-Find Component Sourcing | PowerWire Crafts",
    description:
      "Explore sourcing options for obsolete, allocated and hard-to-find electronic components.",
    url: "/services/hard-to-find-sourcing",
    type: "website",
  },
};

const capabilities = [
  {
    number: "01",
    title: "Obsolete & Discontinued Parts",
    description:
      "Explore sourcing options for end-of-life components needed to maintain existing products, equipment and legacy systems.",
    icon: "◈",
  },
  {
    number: "02",
    title: "Allocated Components",
    description:
      "When manufacturer allocation limits availability, we help you explore alternative supply channels and procurement options.",
    icon: "⌁",
  },
  {
    number: "03",
    title: "Long Lead-Time Parts",
    description:
      "Share your target quantities and timelines so we can investigate potential sources for components with extended lead times.",
    icon: "◷",
  },
  {
    number: "04",
    title: "Specialized Electronic Parts",
    description:
      "Get support identifying sourcing options for specific part numbers, legacy designs and less commonly available components.",
    icon: "⌘",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Share Your Requirements",
    description:
      "Send us the manufacturer part number, quantity, target date and any approved specifications or alternatives.",
  },
  {
    number: "02",
    title: "Source Exploration",
    description:
      "We review your requirements and explore relevant supplier channels and potential availability.",
  },
  {
    number: "03",
    title: "Review the Quotation",
    description:
      "Review the proposed part details, available quantity, pricing, lead time and applicable documentation.",
  },
  {
    number: "04",
    title: "Confirm Your Order",
    description:
      "Once the part, commercial terms and delivery details are agreed, we coordinate the next procurement steps.",
  },
];

const advantages = [
  {
    title: "Requirement-Led Sourcing",
    description:
      "We start with your exact part number, specifications, quantity and project constraints.",
  },
  {
    title: "Supplier Channel Exploration",
    description:
      "We explore relevant sourcing channels to identify potential options for challenging requirements.",
  },
  {
    title: "Part and Documentation Review",
    description:
      "We help review available part information and supplier documentation before you make a purchasing decision.",
  },
  {
    title: "Clear Communication",
    description:
      "Discuss availability, commercial terms, lead times and open questions before confirming an order.",
  },
];

const industries = [
  "Industrial automation",
  "Automotive electronics",
  "Telecommunications",
  "Medical equipment",
  "Aerospace and defense",
  "Data centers and infrastructure",
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <span className="h-[3px] w-8 rounded-full bg-[#E9B747]" />
      <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#0B50B6]">
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

export default function HardToFindSourcingPage() {
  return (
    <main className="overflow-hidden bg-white text-[#10406F]">
      {/* SECTION 1: HERO */}
      <section className="relative isolate bg-[#F3F6FA]">
        <Container>
          <div className="grid items-center gap-10 py-14 sm:py-18 lg:grid-cols-[1.02fr_0.98fr] lg:gap-12 lg:py-24">
            <div className="relative z-10">
              <Eyebrow>Hard-to-Find Sourcing</Eyebrow>

              <h1 className="max-w-2xl text-4xl font-bold leading-[1.12] tracking-tight text-[#10406F] sm:text-5xl lg:text-[3.65rem]">
                Finding the Components{" "}
                <span className="text-[#0B50B6]">Others Can’t.</span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
                Struggling to source an obsolete, allocated or long-lead-time
                component? PowerWire Crafts helps you explore sourcing options
                for hard-to-find electronic parts, so you can make informed
                procurement decisions for your project.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact?service=hard-to-find-sourcing"
                  className="group inline-flex min-h-13 items-center justify-center gap-3 rounded-xl bg-[#E9B747] px-6 py-4 text-sm font-bold text-[#10406F] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#F3C95F]"
                >
                  Request a Sourcing Quote
                  <ArrowIcon />
                </Link>

                <Link
                  href="#sourcing-process"
                  className="inline-flex min-h-13 items-center justify-center gap-2 rounded-xl border border-[#10406F]/20 bg-white px-6 py-4 text-sm font-semibold text-[#10406F] transition hover:border-[#0B50B6] hover:bg-blue-50"
                >
                  Explore Our Process
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-slate-600">
                {[
                  "Obsolete components",
                  "Global supplier channels",
                  "Responsive support",
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

            <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
              <div className="absolute -right-5 -top-5 h-28 w-28 rounded-full bg-[#E9B747]/20 blur-2xl" />
              <div className="absolute -bottom-5 -left-5 h-32 w-32 rounded-full bg-[#0B50B6]/15 blur-2xl" />

              <div className="relative overflow-hidden rounded-3xl border border-white shadow-[0_24px_70px_rgba(16,64,111,0.16)]">
                <Image
                  src="/services/hard-to-find-source.png"
                  alt="Close-up of electronic integrated circuits illustrating hard-to-find component sourcing"
                  width={882}
                  height={906}
                  priority
                  className="h-[360px] w-full object-cover sm:h-[460px] lg:h-[550px]"
                  sizes="(max-width: 1024px) 100vw, 48vw"
                />

                <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/50 bg-white/95 p-4 shadow-lg backdrop-blur-sm sm:inset-x-5 sm:bottom-5 sm:p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#0B50B6]">
                    Have a difficult part number?
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Share the manufacturer part number and required quantity
                    to start a sourcing enquiry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 2: SOURCING CAPABILITIES */}
      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <Eyebrow>Our Sourcing Capabilities</Eyebrow>

              <h2 className="max-w-lg text-3xl font-bold leading-tight tracking-tight text-[#10406F] sm:text-4xl">
                Access to Components{" "}
                <span className="text-[#0B50B6]">
                  You Need, When You Need Them
                </span>
              </h2>

              <p className="mt-5 max-w-lg leading-7 text-slate-600">
                Component shortages and product discontinuations can complicate
                purchasing plans. We help you investigate sourcing options
                based on your component specifications, required quantity and
                project timeline.
              </p>

              <p className="mt-4 max-w-lg leading-7 text-slate-600">
                From legacy electronic designs to supply-constrained parts,
                every enquiry starts with understanding your actual
                requirement.
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

      {/* SECTION 3: SOURCING PROCESS */}
      <section
        id="sourcing-process"
        className="scroll-mt-24 bg-[#F3F6FA] py-16 sm:py-20 lg:py-24"
      >
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex justify-center">
              <Eyebrow>Our Sourcing Process</Eyebrow>
            </div>

            <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#10406F] sm:text-4xl">
              A Clear Path from Enquiry to{" "}
              <span className="text-[#0B50B6]">Sourcing Options</span>
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              A structured approach helps us understand your needs, investigate
              potential supply and communicate the details you need to assess
              your options.
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
              href="/contact?service=hard-to-find-sourcing"
              className="group inline-flex items-center justify-center gap-3 rounded-xl bg-[#10406F] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#0B50B6]"
            >
              Start Your Sourcing Enquiry
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
                A Sourcing Partner for{" "}
                <span className="text-[#0B50B6]">
                  Challenging Requirements
                </span>
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                Hard-to-find sourcing requires more than locating a matching
                part number. Specifications, source credibility, documentation,
                quantity and delivery expectations all matter.
              </p>

              <p className="mt-4 leading-7 text-slate-600">
                PowerWire Crafts works from your stated requirements to help
                identify potential supply options and clarify the information
                available for review before you proceed.
              </p>

              <Link
                href="/contact?service=hard-to-find-sourcing"
                className="group mt-7 inline-flex items-center gap-2 font-bold text-[#0B50B6] transition hover:text-[#10406F]"
              >
                Discuss Your Requirements
                <ArrowIcon />
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {advantages.map((item, index) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-slate-100 bg-white p-5 shadow-[0_8px_30px_rgba(16,64,111,0.05)]"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0B50B6]/10 text-sm font-bold text-[#0B50B6]">
                    0{index + 1}
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

      {/* SECTION 5: FINAL CTA */}
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
                  Need a Hard-to-Find Component?
                </span>
              </div>

              <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                Let’s Find the{" "}
                <span className="text-[#E9B747]">Right Sourcing Option.</span>
              </h2>

              <p className="mt-5 max-w-xl leading-7 text-blue-100">
                Send us your part numbers, required quantities and target
                timelines. Our team can review your enquiry and discuss the
                available sourcing options and next steps.
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <Link
                href="/contact?service=hard-to-find-sourcing"
                className="group inline-flex min-h-13 items-center justify-center gap-3 rounded-xl bg-[#E9B747] px-6 py-4 text-sm font-bold text-[#10406F] transition hover:-translate-y-0.5 hover:bg-[#F3C95F]"
              >
                Request a Sourcing Quote
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
