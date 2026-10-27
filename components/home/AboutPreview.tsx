
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Cable,
  Target,
  ShieldCheck,
  Users,
} from "lucide-react";

import Container from "@/components/shared/Container";

const companyValues = [
  {
    icon: ShieldCheck,
    title: "Quality-Minded Approach",
    description:
      "A focus on product suitability, specifications, and application requirements.",
  },
  {
    icon: Cable,
    title: "Product-Focused Solutions",
    description:
      "Wire and cable options aligned with different electrical and industrial needs.",
  },
  {
    icon: Users,
    title: "Customer Collaboration",
    description:
      "A responsive approach to understanding enquiries and product requirements.",
  },
  {
    icon: Target,
    title: "Practical Guidance",
    description:
      "Clear product information to help customers evaluate suitable options.",
  },
];

export default function AboutPreview() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-28">
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-10 size-[420px] rounded-full bg-[#EEF5FF] blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-40 size-[420px] rounded-full bg-[#F3F6FA] blur-3xl"
      />

      <Container>
        <div className="relative grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* Left: Company visual */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-[28px] bg-[#10406F] shadow-2xl shadow-[#10406F]/15">
              <div className="relative aspect-[4/4.2] sm:aspect-[5/4.5] lg:aspect-[4/4.6]">
                <Image
                  src="/about-cables.png"
                  alt="Electrical wire and cable products for building and industrial applications"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />

                {/* Image contrast overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#071D35]/90 via-[#071D35]/10 to-transparent" />

                {/* Visual label */}
                <div className="absolute left-5 top-5 sm:left-7 sm:top-7">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-[#071D35]/50 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md">
                    <span className="size-2 rounded-full bg-[#E9B747]" />
                    POWERWIRE CRAFTS
                  </span>
                </div>

                {/* Image caption */}
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-200">
                    Our Focus
                  </p>

                  <h3 className="mt-3 max-w-md text-2xl font-bold leading-snug text-white sm:text-3xl">
                    Connecting everyday needs with dependable cable solutions.
                  </h3>

                  <div className="mt-5 h-1 w-16 rounded-full bg-[#E9B747]" />
                </div>
              </div>
            </div>

            {/* Supporting visual detail */}
            <div className="absolute -bottom-5 right-5 flex items-center gap-3 rounded-2xl border border-[#DCE6F2] bg-white p-4 shadow-xl sm:-right-5 sm:p-5">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#EEF5FF] text-[#0B50B6]">
                <Cable size={23} />
              </div>

              <div>
                <p className="text-sm font-bold text-[#10406F]">
                  Wires & Cables
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Product-focused solutions
                </p>
              </div>
            </div>
          </div>

          {/* Right: Company introduction */}
          <div className="pt-5 lg:pt-0">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#D7E5FA] bg-[#F3F7FF] px-4 py-2">
              <span className="size-2 rounded-full bg-[#0B50B6]" />

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#10406F]">
                About Powerwire Crafts
              </span>
            </div>

            <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-[#102F52] sm:text-4xl lg:text-[2.85rem]">
              Practical Electrical Solutions.
              <span className="mt-2 block text-[#0B50B6]">
                A Customer-First Approach.
              </span>
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
              POWERWIRE CRAFTS PRIVATE LIMITED is focused on
              electrical wire and cable solutions for a range of
              building, commercial, and industrial requirements.
              We aim to make product enquiries clear, straightforward,
              and aligned with each customer's needs.
            </p>

            <p className="mt-4 text-base leading-8 text-slate-600">
              From understanding application requirements to
              discussing relevant product specifications, our
              approach starts with listening, sharing clear
              information, and helping customers identify suitable
              options for consideration.
            </p>

            {/* Brand differentiators */}
            <div className="mt-8 grid gap-x-6 gap-y-4 sm:grid-cols-2">
              {[
                "Application-led product discussions",
                "Clear product specifications",
                "Customer-focused enquiries",
                "Solutions for varied requirements",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={19}
                    className="mt-0.5 shrink-0 text-[#0B50B6]"
                  />

                  <span className="text-sm font-medium leading-6 text-[#34516F]">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Call to action */}
            <div className="mt-9 flex flex-wrap items-center gap-5">
              <Link
                href="/about"
                className="group inline-flex min-h-12 items-center gap-3 rounded-xl bg-[#0B50B6] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-900/10 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#10406F]"
              >
                About Our Company

                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#10406F] transition-colors hover:text-[#0B50B6]"
              >
                Discuss Your Requirements
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
