
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Cable,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  Zap,
} from "lucide-react";

import Container from "@/components/shared/Container";

const productHighlights = [
  "Power & Electrical Cables",
  "Industrial Cable Solutions",
  "Wires & Cable Accessories",
];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-white">
      {/* Brand background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute right-[-10%] top-[-20%] h-[480px] w-[480px] rounded-full bg-[#EAF2FF] blur-3xl" />

        <div className="absolute bottom-[-25%] left-[-10%] h-[400px] w-[400px] rounded-full bg-[#F0F5FC] blur-3xl" />

        <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(#10406F_1px,transparent_1px),linear-gradient(90deg,#10406F_1px,transparent_1px)] [background-size:44px_44px]" />
      </div>

      <Container>
        <div className="grid items-center gap-12 py-14 sm:py-18 lg:min-h-[680px] lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:py-20">

          {/* Left: Brand message */}
          <div className="relative z-10">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#D7E5FA] bg-white/90 px-4 py-0 shadow-sm">
              <span className="size-2 rounded-full bg-[#0B50B6]" />

              <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#10406F] sm:text-xs">
                Power Wire Crafts Private Limited
              </span>
            </div>

            {/* Main heading */}
            <h1 className="mt-7 max-w-2xl text-[2.65rem] font-bold leading-[1.1] tracking-[-0.045em] text-[#102F52] sm:text-5xl lg:text-[3.8rem]">
              Connecting Power.
              <span className="mt-2 block text-[#0B50B6]">
                Building Reliability.
              </span>
            </h1>

            {/* Supporting text */}
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              Explore electrical wire and cable solutions for
              building installations, power distribution and
              industrial applications. Connect with our team to
              discuss the right products for your requirements.
            </p>

            {/* Primary actions */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/products"
                className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-xl bg-[#0B50B6] px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-900/15 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#10406F] hover:shadow-xl"
              >
                Explore Our Products

                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/contact"
                className="inline-flex min-h-14 items-center justify-center gap-3 rounded-xl border border-[#CBD8E8] bg-white/90 px-7 py-4 text-sm font-semibold text-[#10406F] transition-all duration-200 hover:border-[#0B50B6] hover:bg-[#F3F7FF]"
              >
                Request a Quote

                <ArrowUpRight size={18} />
              </Link>
            </div>

            {/* Product highlights */}
            <div className="mt-10 border-t border-slate-200 pt-6">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                Explore Our Solutions
              </p>

              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-5">
                {productHighlights.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm font-medium text-[#34516F]"
                  >
                    <CheckCircle2
                      size={16}
                      className="shrink-0 text-[#0B50B6]"
                    />

                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Cable-focused visual */}
          <div className="relative mx-auto w-full max-w-[570px] lg:ml-auto">
            {/* Main visual panel */}
            <div className="relative overflow-hidden rounded-[28px] bg-[#0B2D52] shadow-2xl shadow-[#10406F]/20">

              {/* Decorative background */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(48,117,210,0.45),transparent_55%),linear-gradient(145deg,#153F70_0%,#0B2D52_55%,#071D35_100%)]"
              />

              <div
                aria-hidden="true"
                className="absolute right-[-70px] top-[-90px] size-72 rounded-full border border-white/10"
              />

              <div
                aria-hidden="true"
                className="absolute right-[-35px] top-[-55px] size-52 rounded-full border border-white/10"
              />

              {/* Visual header */}
              <div className="relative z-10 flex items-center justify-between gap-4 px-6 pt-7 sm:px-8 sm:pt-8">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-200">
                    Engineered for Connection
                  </p>

                  <p className="mt-2 text-xl font-semibold text-white sm:text-2xl">
                    Wire & Cable Solutions
                  </p>
                </div>

                <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-[#E9B747]">
                  <Cable size={25} />
                </div>
              </div>

              {/* Main image */}
              <div className="relative z-10 mx-4 mt-6 overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:mx-6">
                <div className="relative aspect-[5/4]">
                  <Image
                    src="/hero-cables.png"
                    alt="Electrical wires and power cables for industrial and electrical applications"
                    fill
                    priority
                    sizes="(max-width: 1024px) 90vw, 45vw"
                    className="object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#071D35]/70 via-transparent to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-100">
                      Power • Protection • Performance
                    </p>

                    <p className="mt-2 max-w-sm text-xl font-semibold leading-snug text-white sm:text-2xl">
                      Reliable connections for demanding applications.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom information */}
              <div className="relative z-10 grid grid-cols-2 gap-4 px-6 py-6 sm:px-8 sm:py-7">
                <div className="flex items-start gap-3">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#E9B747]">
                    <ShieldCheck size={21} />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-white">
                      Product Focus
                    </p>

                    <p className="mt-1 text-xs leading-5 text-blue-200">
                      Wire & cable solutions
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#E9B747]">
                    <Zap size={21} />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-white">
                      Your Requirements
                    </p>

                    <p className="mt-1 text-xs leading-5 text-blue-200">
                      Discuss with our team
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom product navigation */}
            <Link
              href="/products"
              className="group mt-4 flex items-center justify-between gap-4 rounded-2xl border border-[#DCE6F2] bg-white p-4 shadow-lg shadow-[#10406F]/5 transition-colors hover:border-[#0B50B6] sm:p-5"
            >
              <div className="flex items-center gap-3">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#EEF5FF] text-[#0B50B6]">
                  <Cable size={21} />
                </div>

                <div>
                  <p className="text-sm font-bold text-[#10406F]">
                    Find the Right Product
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Browse our product categories
                  </p>
                </div>
              </div>

              <ChevronRight
                size={20}
                className="shrink-0 text-[#0B50B6] transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
