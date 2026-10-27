"use client";

import { useState } from "react";
import Link from "next/link";
import Container from "@/components/shared/Container";
import {
  ArrowRight,
  ArrowUpRight,
  Cable,
  CheckCircle2,
  Factory,
  ShieldCheck,
  Zap,
} from "lucide-react";

const manufacturers = [
  { name: "Texas Instruments", logo: "/manufacturers/ti.png" },
  { name: "Microchip", logo: "/manufacturers/microchip.webp" },
  { name: "NXP", logo: "/manufacturers/nxp.png" },
  { name: "STMicroelectronics", logo: "/manufacturers/st.png" },
  { name: "Infineon", logo: "/manufacturers/infineon.webp" },
  { name: "Analog Devices", logo: "/manufacturers/adi.jpg" },
  { name: "Renesas", logo: "/manufacturers/renesas.png" },
  { name: "Qorvo", logo: "/manufacturers/qorvo.png" },
  { name: "Intel", logo: "/manufacturers/intel.png" },
  { name: "AMD", logo: "/manufacturers/amd.png" },
  { name: "Molex", logo: "/manufacturers/molex.png" },
  { name: "Amphenol", logo: "/manufacturers/amphenol.png" },
];

const productGroups = [
  {
    number: "01",
    title: "Building & House Wires",
    description:
      "Discuss wire requirements for residential, commercial and building applications.",
    icon: Zap,
  },
  {
    number: "02",
    title: "Power & Industrial Cables",
    description:
      "Explore cable requirements for power distribution and industrial applications.",
    icon: Cable,
  },
  {
    number: "03",
    title: "Application-Based Enquiries",
    description:
      "Share your project specifications to discuss suitable product options.",
    icon: Factory,
  },
];

const principles = [
  {
    title: "Application-Focused Discussions",
    description:
      "Start with your project's needs, intended use and technical requirements.",
    icon: Cable,
  },
  {
    title: "Clear Product Information",
    description:
      "Discuss relevant specifications and documentation for your requirements.",
    icon: CheckCircle2,
  },
  {
    title: "Requirement-Led Enquiries",
    description:
      "Share product details and quantities to help clarify your enquiry.",
    icon: ShieldCheck,
  },
];

export default function Manufacturers() {
  const [paused, setPaused] = useState(false);

  return (
    <section className="relative overflow-hidden bg-[#F3F6FA] py-20 sm:py-24 lg:py-28">
      {/* Brand background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-0 h-[420px] w-[420px] rounded-full bg-[#0B50B6]/[0.06] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-32 h-[380px] w-[380px] rounded-full bg-[#E9B747]/[0.12] blur-3xl"
      />

      <Container>
        {/* Heading */}
        <div className="relative mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#0B50B6]/15 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#0B50B6] shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#E9B747]" />
            Manufacturer Ecosystem
          </span>

          <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-[#10406F] sm:text-4xl lg:text-5xl">
            Recognized Technology
            <span className="mt-2 block text-[#0B50B6]">
              & Component Manufacturers
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Explore a selection of established technology and component brands.
            Contact our team to discuss your specific product requirements,
            availability and sourcing needs.
          </p>
        </div>

        {/* Manufacturer carousel */}
        <div className="relative mt-14 sm:mt-16">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm font-semibold text-[#10406F]">
              Featured Manufacturer Brands
            </p>

            <button
              type="button"
              onClick={() => setPaused((previous) => !previous)}
              aria-pressed={paused}
              className="rounded-lg border border-[#DCE4EE] bg-white px-3 py-2 text-xs font-semibold text-[#10406F] transition hover:border-[#0B50B6]/40 hover:text-[#0B50B6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B50B6]"
            >
              {paused ? "Resume movement" : "Pause movement"}
            </button>
          </div>

          <div
            className="group relative overflow-hidden rounded-2xl border border-[#DCE4EE] bg-white py-7 shadow-[0_12px_40px_rgba(16,64,111,0.05)] sm:py-9"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* Fade edges */}
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-white to-transparent sm:w-20" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-white to-transparent sm:w-20" />

            <div
              className={`flex w-max gap-4 sm:gap-6 ${
                paused ? "" : "animate-[scroll_35s_linear_infinite]"
              }`}
              style={paused ? undefined : { animationPlayState: "running" }}
            >
              {[...manufacturers, ...manufacturers].map(
                (manufacturer, index) => (
                  <div
                    key={`${manufacturer.name}-${index}`}
                    className="group/card flex h-28 w-48 shrink-0 flex-col items-center justify-center gap-3 rounded-xl border border-[#DCE4EE] bg-[#F8FAFD] px-5 transition duration-300 hover:border-[#0B50B6]/30 hover:bg-white hover:shadow-md sm:h-32 sm:w-56"
                  >
                    <div className="flex h-12 w-full items-center justify-center">
                      {/* Plain img allows graceful handling of missing logo files */}
                      <img
                        src={manufacturer.logo}
                        alt={`${manufacturer.name} logo`}
                        loading="lazy"
                        className="max-h-10 max-w-[145px] object-contain opacity-75 grayscale transition duration-300 group-hover/card:opacity-100 group-hover/card:grayscale-0 sm:max-w-[165px]"
                        onError={(event) => {
                          event.currentTarget.style.display = "none";
                          const fallback =
                            event.currentTarget.nextElementSibling as HTMLElement | null;
                          if (fallback) fallback.style.display = "flex";
                        }}
                      />
                      <div
                        style={{ display: "none" }}
                        className="h-10 w-full items-center justify-center text-center text-sm font-bold text-[#10406F]"
                      >
                        {manufacturer.name}
                      </div>
                    </div>

                    <p className="text-center text-xs font-semibold text-slate-600 sm:text-sm">
                      {manufacturer.name}
                    </p>
                  </div>
                ),
              )}
            </div>
          </div>

          <p className="mt-4 text-center text-xs leading-5 text-slate-500">
            Brand names and logos belong to their respective owners. Display
            does not by itself imply an authorized partnership or endorsement.
          </p>
        </div>

        {/* Product enquiry feature */}
        <div className="relative mt-20 overflow-hidden rounded-3xl border border-[#DCE4EE] bg-white shadow-[0_18px_60px_rgba(16,64,111,0.07)] sm:mt-24">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
            <div className="relative flex min-h-[320px] flex-col justify-between overflow-hidden bg-[#10406F] p-7 sm:p-10 lg:min-h-[420px] lg:p-12">
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(233,183,71,0.2),transparent_45%)]"
              />

              <div className="relative">
                <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/90">
                  Project & Procurement Support
                </span>

                <h3 className="mt-6 max-w-lg text-3xl font-bold leading-tight text-white sm:text-4xl">
                  Start with your product and project requirements.
                </h3>

                <p className="mt-4 max-w-md leading-7 text-blue-100/85">
                  Share the application, technical specifications and required
                  quantity so your enquiry can be understood clearly.
                </p>
              </div>

              <div className="relative mt-8 flex items-center gap-3 border-t border-white/15 pt-6">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E9B747] text-[#10406F]">
                  <Cable size={22} />
                </div>
                <div>
                  <p className="font-semibold text-white">
                    Wire & Cable Enquiries
                  </p>
                  <p className="mt-1 text-sm text-blue-100/75">
                    Discuss requirements with our team
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#0B50B6]">
                A Clear Enquiry Process
              </p>

              <h3 className="mt-4 text-2xl font-bold leading-snug text-[#10406F] sm:text-3xl">
                Practical information. Clear next steps.
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Tell us what you are looking for. We can then discuss the
                relevant specifications and next steps based on your enquiry.
              </p>

              <div className="mt-7 space-y-5">
                {principles.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.title} className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EEF5FF] text-[#0B50B6]">
                        <Icon size={19} />
                      </div>

                      <div>
                        <h4 className="font-semibold text-[#10406F]">
                          {item.title}
                        </h4>
                        <p className="mt-1 text-sm leading-6 text-slate-600">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <Link
                href="/contact"
                className="group mt-8 inline-flex w-fit items-center gap-2 rounded-xl bg-[#0B50B6] px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#0B50B6]/15 transition hover:bg-[#084088]"
              >
                Discuss Your Requirements
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Product categories */}
        <div className="relative mt-20 sm:mt-24">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#0B50B6]">
                Explore Product Areas
              </p>
              <h3 className="mt-3 text-2xl font-bold text-[#10406F] sm:text-3xl">
                Solutions for Different Applications
              </h3>
            </div>

            <Link
              href="/products"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-[#0B50B6] transition hover:text-[#10406F]"
            >
              Explore Products
              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {productGroups.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.number}
                  href="/contact"
                  className="group relative overflow-hidden rounded-2xl border border-[#DCE4EE] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#0B50B6]/30 hover:shadow-[0_16px_40px_rgba(16,64,111,0.09)] sm:p-7"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EEF5FF] text-[#0B50B6] transition group-hover:bg-[#0B50B6] group-hover:text-white">
                      <Icon size={23} />
                    </div>
                    <span className="text-sm font-bold tracking-widest text-[#9AAABD]">
                      {item.number}
                    </span>
                  </div>

                  <h4 className="mt-6 text-xl font-bold text-[#10406F]">
                    {item.title}
                  </h4>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>

                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#0B50B6]">
                    Enquire about this
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </span>

                  <div className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-[#E9B747] transition-transform duration-300 group-hover:scale-x-100" />
                </Link>
              );
            })}
          </div>
        </div>

        {/* Final call to action */}
        <div className="relative mt-16 overflow-hidden rounded-3xl bg-[#10406F] px-6 py-10 sm:px-10 sm:py-12 lg:mt-20 lg:px-14">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(115deg,transparent_35%,rgba(11,80,182,0.65),transparent_90%)]"
          />

          <div className="relative flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#E9B747]">
                Let’s Talk About Your Project
              </span>

              <h3 className="mt-3 text-2xl font-bold leading-tight text-white sm:text-3xl">
                Looking for wire or cable solutions?
              </h3>

              <p className="mt-3 leading-7 text-blue-100/80">
                Send your requirements to POWERWIRE CRAFTS PRIVATE LIMITED to
                start a product enquiry.
              </p>
            </div>

            <Link
              href="/contact"
              className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#E9B747] px-6 py-4 text-sm font-bold text-[#10406F] transition hover:bg-white"
            >
              Request an Enquiry
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
