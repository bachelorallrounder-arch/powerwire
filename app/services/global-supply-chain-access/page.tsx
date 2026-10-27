
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/shared/Container";

export const metadata = {
  title: "Global Supply Chain Access | PowerWire Crafts",
  description:
    "Explore global electronic component sourcing options, supplier networks and procurement coordination with PowerWire Crafts.",
  alternates: {
    canonical: "/services/global-supply-chain-access",
  },
  openGraph: {
    title: "Global Supply Chain Access | PowerWire Crafts",
    description:
      "Access sourcing options for electronic components through supplier channels and coordinated procurement support.",
    url: "/services/global-supply-chain-access",
    type: "website",
  },
};

const capabilities = [
  {
    number: "01",
    icon: "◎",
    title: "Global Supplier Access",
    description:
      "Explore potential suppliers and sourcing channels across relevant markets to support your electronic component requirements.",
  },
  {
    number: "02",
    icon: "◇",
    title: "Multi-Source Procurement",
    description:
      "Consider alternative sourcing options when a preferred supplier cannot meet your quantity, availability or lead-time needs.",
  },
  {
    number: "03",
    icon: "↗",
    title: "Procurement Coordination",
    description:
      "Communicate your part requirements, quantities and target timelines to help coordinate the sourcing and quotation process.",
  },
  {
    number: "04",
    icon: "⌁",
    title: "Supply Continuity Support",
    description:
      "Explore sourcing options for repeat orders, ongoing production needs and components that require longer-term procurement planning.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Define Your Requirements",
    description:
      "Share part numbers, manufacturer preferences, quantities, specifications and target delivery timelines.",
  },
  {
    number: "02",
    title: "Explore Supply Channels",
    description:
      "Review potential suppliers and sourcing routes relevant to your component and procurement needs.",
  },
  {
    number: "03",
    title: "Evaluate Available Options",
    description:
      "Compare available part information, quoted quantities, pricing, lead times and applicable documentation.",
  },
  {
    number: "04",
    title: "Coordinate Procurement",
    description:
      "Confirm the agreed commercial and delivery requirements before proceeding with the order.",
  },
];

const advantages = [
  {
    number: "01",
    title: "Broader Sourcing Options",
    description:
      "Explore potential supply channels beyond a single preferred source when your requirements call for alternatives.",
  },
  {
    number: "02",
    title: "Requirement-Led Approach",
    description:
      "Evaluate sourcing options according to your specified components, quantities, application and project timeline.",
  },
  {
    number: "03",
    title: "Clear Procurement Communication",
    description:
      "Discuss availability, quotations, documentation and delivery expectations before confirming an order.",
  },
  {
    number: "04",
    title: "Long-Term Supply Planning",
    description:
      "Identify sourcing considerations for recurring purchases, production schedules and ongoing component demand.",
  },
];

const industries = [
  "Industrial automation",
  "Automotive electronics",
  "Telecommunications",
  "Data centers",
  "Medical equipment",
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

export default function GlobalSupplyChainAccessPage() {
  return (
    <main className="overflow-hidden bg-white text-[#10406F]">
      {/* SECTION 1: HERO */}
      <section className="bg-[#F3F6FA]">
        <Container>
          <div className="grid items-center gap-10 py-14 sm:py-18 lg:grid-cols-2 lg:gap-14 lg:py-24">
            <div>
              <Eyebrow>Global Supply Chain Access</Eyebrow>

              <h1 className="max-w-2xl text-4xl font-bold leading-[1.12] tracking-tight text-[#10406F] sm:text-5xl lg:text-[3.6rem]">
                Connect to Global Supply{" "}
                <span className="text-[#0B50B6]">
                  Opportunities.
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
                Finding the right electronic components can require looking
                beyond your usual suppliers. PowerWire Crafts helps you
                explore sourcing channels, evaluate procurement options and
                coordinate component requirements to support your business
                needs.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact?service=global-supply-chain-access"
                  className="group inline-flex min-h-13 items-center justify-center gap-3 rounded-xl bg-[#E9B747] px-6 py-4 text-sm font-bold text-[#10406F] transition hover:-translate-y-0.5 hover:bg-[#F3C95F]"
                >
                  Discuss Your Requirements
                  <ArrowIcon />
                </Link>

                <Link
                  href="#global-sourcing-process"
                  className="inline-flex min-h-13 items-center justify-center rounded-xl border border-[#10406F]/20 bg-white px-6 py-4 text-sm font-semibold text-[#10406F] transition hover:border-[#0B50B6] hover:bg-blue-50"
                >
                  Explore Our Process
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-slate-600">
                {[
                  "Supplier channel exploration",
                  "Flexible sourcing options",
                  "Procurement coordination",
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
                  src="/services/global-supply-chain-access.png"
                  alt="Global logistics infrastructure with cargo shipping, freight transport and international supply connections"
                  width={1536}
                  height={1024}
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="h-[360px] w-full object-cover sm:h-[460px] lg:h-[550px]"
                />

                <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/50 bg-white/95 p-4 shadow-lg backdrop-blur-sm sm:inset-x-5 sm:bottom-5 sm:p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#0B50B6]">
                    Connected Sourcing Opportunities
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Explore potential supply channels based on your components,
                    quantities and procurement priorities.
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
              <Eyebrow>Our Global Sourcing Capabilities</Eyebrow>

              <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#10406F] sm:text-4xl">
                More Ways to Source the{" "}
                <span className="text-[#0B50B6]">
                  Components You Need
                </span>
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                Supply requirements can change with market availability,
                manufacturer lead times and production demand. Exploring
                relevant sourcing channels can help you assess additional
                procurement options.
              </p>

              <p className="mt-4 leading-7 text-slate-600">
                We start with your actual requirements and discuss potential
                sourcing routes, available information and the practical
                considerations for each enquiry.
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
        id="global-sourcing-process"
        className="scroll-mt-24 bg-[#F3F6FA] py-16 sm:py-20 lg:py-24"
      >
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex justify-center">
              <Eyebrow>Our Sourcing Process</Eyebrow>
            </div>

            <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#10406F] sm:text-4xl">
              From Component Requirements to{" "}
              <span className="text-[#0B50B6]">
                Sourcing Options
              </span>
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              A clear process helps align part specifications, supplier
              options, commercial terms and delivery expectations before an
              order is confirmed.
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
              href="/contact?service=global-supply-chain-access"
              className="group inline-flex items-center justify-center gap-3 rounded-xl bg-[#10406F] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#0B50B6]"
            >
              Start a Sourcing Enquiry
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
                A Flexible Approach to{" "}
                <span className="text-[#0B50B6]">
                  Component Procurement
                </span>
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                The right sourcing approach depends on the component, the
                quantity required, market availability and your delivery
                priorities. We help structure the enquiry around these
                practical considerations.
              </p>

              <p className="mt-4 leading-7 text-slate-600">
                Our focus is to help you review potential options, understand
                the available information and coordinate next steps according
                to the agreed order requirements.
              </p>

              <Link
                href="/contact?service=global-supply-chain-access"
                className="group mt-7 inline-flex items-center gap-2 font-bold text-[#0B50B6] transition hover:text-[#10406F]"
              >
                Discuss Your Supply Needs
                <ArrowIcon />
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {advantages.map((item) => (
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
                  Supporting diverse industries
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Sourcing support can be tailored to the requirements of
                  different electronic equipment, infrastructure and
                  manufacturing applications.
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
                  Expand Your Sourcing Options
                </span>
              </div>

              <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                Let’s Connect Your{" "}
                <span className="text-[#E9B747]">
                  Requirements to Supply.
                </span>
              </h2>

              <p className="mt-5 max-w-xl leading-7 text-blue-100">
                Tell us which components you need, how many you require and
                when you need them. PowerWire Crafts can review your enquiry
                and discuss potential sourcing options and next steps.
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <Link
                href="/contact?service=global-supply-chain-access"
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
