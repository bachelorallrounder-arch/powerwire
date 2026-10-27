
"use client";

import Link from "next/link";
import Container from "@/components/shared/Container";
import {
  ArrowRight,
  ArrowUpRight,
  Activity,
  CarFront,
  Cpu,
  Factory,
  RadioTower,
  ShieldCheck,
  Zap,
} from "lucide-react";

const industries = [
  {
    number: "01",
    title: "Medical & Healthcare",
    description:
      "Electronic components for medical devices, monitoring equipment, diagnostic systems, and healthcare technology development.",
    tags: ["Sensors", "Semiconductors", "Embedded Systems"],
    icon: Activity,
    href: "/applications/medical-healthcare",
  },
  {
    number: "02",
    title: "Automotive & Mobility",
    description:
      "Component sourcing for automotive electronics, control modules, vehicle monitoring, and next-generation mobility systems.",
    tags: ["Power ICs", "Microcontrollers", "Connectors"],
    icon: CarFront,
    href: "/applications/automotive-electronics",
  },
  {
    number: "03",
    title: "Telecommunications",
    description:
      "Electronic components for communication equipment, networking hardware, signal processing, and connectivity solutions.",
    tags: ["RF Components", "Connectivity", "Processors"],
    icon: RadioTower,
    href: "/applications/telecommunications",
  },
  {
    number: "04",
    title: "Defense & Aerospace",
    description:
      "Electronic component sourcing for specialized aerospace, defense, instrumentation, and mission-oriented electronic systems.",
    tags: ["Electronic ICs", "Sensors", "Control Systems"],
    icon: ShieldCheck,
    href: "/applications/defense-aerospace-naval",
  },
  {
    number: "05",
    title: "Energy & Power Electronics",
    description:
      "Components for power conversion, energy management, industrial power supplies, and electronic control applications.",
    tags: ["Power Semiconductors", "Controllers", "Protection"],
    icon: Zap,
    href: "/applications/ev-infrastructure",
  },
  {
    number: "06",
    title: "Industrial & Embedded Systems",
    description:
      "Electronic components for automation, embedded product development, instrumentation, and industrial control equipment.",
    tags: ["MCUs", "Analog ICs", "Industrial Electronics"],
    icon: Factory,
    href: "/applications/data-centers",
  },
];

export default function Industries() {
  return (
    <section className="relative overflow-hidden bg-[#F3F6FA] py-20 sm:py-24 lg:py-28">
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#0B50B6]/[0.05] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-[#E9B747]/[0.09] blur-3xl"
      />

      <Container>
        <div className="relative">
          {/* Section heading */}
          <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#10406F]/10 bg-white px-4 py-2 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#E9B747]" />
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#10406F]">
                Industries We Serve
              </span>
            </div>

            <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#10406F] sm:text-4xl lg:text-5xl">
              Powering Innovation
              <span className="mt-1 block text-[#0B50B6]">
                Across Industries
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Supporting electronics manufacturers, engineering teams, and
              product developers with component sourcing across a wide range
              of technology-driven applications.
            </p>
          </div>

          {/* Industry cards */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {industries.map((industry) => {
              const Icon = industry.icon;

              return (
                <article
                  key={industry.number}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_4px_24px_rgba(16,64,111,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#0B50B6]/25 hover:shadow-[0_18px_45px_rgba(16,64,111,0.11)] sm:p-7"
                >
                  {/* Gold accent */}
                  <div className="absolute left-0 top-0 h-1 w-0 bg-[#E9B747] transition-all duration-300 group-hover:w-full" />

                  <div className="mb-7 flex items-start justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#10406F]/[0.06] text-[#10406F] transition-colors duration-300 group-hover:bg-[#10406F] group-hover:text-white">
                      <Icon size={27} strokeWidth={1.8} />
                    </div>

                    <span className="font-mono text-sm font-semibold tracking-wider text-slate-300 transition-colors group-hover:text-[#E9B747]">
                      {industry.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold tracking-tight text-[#10406F] transition-colors group-hover:text-[#0B50B6]">
                    {industry.title}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
                    {industry.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {industry.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-[#F3F6FA] px-2.5 py-1.5 text-[11px] font-semibold text-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 border-t border-slate-100 pt-5">
                    <Link
                      href={industry.href}
                      className="inline-flex items-center gap-2 text-sm font-bold text-[#10406F] transition-colors hover:text-[#0B50B6]"
                    >
                      Explore applications
                      <ArrowUpRight
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="relative mt-10 overflow-hidden rounded-2xl bg-[#10406F] p-7 sm:mt-14 sm:p-10 lg:p-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-10 -top-24 h-64 w-64 rounded-full border border-white/[0.08]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-2 -top-16 h-48 w-48 rounded-full border border-white/[0.08]"
            />

            <div className="relative flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <div className="mb-3 flex items-center gap-2 text-[#E9B747]">
                  <Cpu size={19} />
                  <span className="text-xs font-bold uppercase tracking-[0.18em]">
                    Have a specific requirement?
                  </span>
                </div>

                <h3 className="text-2xl font-bold leading-tight text-white sm:text-3xl">
                  Let&apos;s find the right components for your application.
                </h3>

                <p className="mt-3 max-w-xl text-sm leading-7 text-white/75 sm:text-base">
                  Share your part numbers, technical specifications, or
                  project requirements with our team to discuss your sourcing
                  needs.
                </p>
              </div>

              <Link
                href="/contact"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#E9B747] px-6 py-3.5 text-sm font-bold text-[#102F4D] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
              >
                Discuss Your Requirement
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
