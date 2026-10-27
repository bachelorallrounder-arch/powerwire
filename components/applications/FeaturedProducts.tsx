
"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

type FeaturedProduct = {
  partNumber: string;
  name: string;
  manufacturer: string;
  image: string;
  category: string;
  description: string;
};

type Props = {
  title: string;
  subtitle: string;
  products: FeaturedProduct[];
};

export default function FeaturedProducts({
  title,
  subtitle,
  products,
}: Props) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    trackRef.current?.scrollBy({
      left: direction === "right" ? 340 : -340,
      behavior: "smooth",
    });
  };

  return (
    <section className="overflow-hidden bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.23em] text-[#0B50B6]">
              Featured Components
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-[#10406F] sm:text-4xl">
              {title}
            </h2>

            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
              {subtitle}
            </p>
          </div>

          <div className="hidden shrink-0 gap-2 sm:flex">
            <button
              type="button"
              onClick={() => scroll("left")}
              aria-label="Scroll components left"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D8E2EE] text-xl text-[#10406F] transition hover:border-[#0B50B6] hover:bg-[#F3F6FA]"
            >
              ←
            </button>

            <button
              type="button"
              onClick={() => scroll("right")}
              aria-label="Scroll components right"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D8E2EE] text-xl text-[#10406F] transition hover:border-[#0B50B6] hover:bg-[#F3F6FA]"
            >
              →
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-width:thin] [scrollbar-color:#B9CBE0_transparent]"
        >
          {products.map((product) => (
            <article
              key={product.partNumber}
              className="group flex w-[270px] shrink-0 snap-start flex-col overflow-hidden rounded-[22px] border border-[#E0E8F1] bg-white transition duration-300 hover:-translate-y-1 hover:border-[#B7CDE8] hover:shadow-[0_18px_45px_rgba(16,64,111,0.10)] sm:w-[285px]"
            >
              <Link
                href={`/contact?partNumber=${encodeURIComponent(product.partNumber)}`}
                aria-label={`Enquire about ${product.partNumber}`}
                className="relative flex h-[220px] items-center justify-center overflow-hidden bg-[#F5F8FB] p-7"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-[#EEF3F8]" />

                <Image
                  src={product.image}
                  alt={`${product.name} (${product.partNumber})`}
                  width={220}
                  height={170}
                  className="relative z-10 h-full w-full object-contain mix-blend-multiply transition duration-500 group-hover:scale-105"
                />
              </Link>

              <div className="flex flex-1 flex-col p-5">
                <div className="mb-4 flex items-start gap-2">
                  <span className="max-w-[60%] rounded-full bg-[#EAF2FF] px-3 py-1.5 text-xs font-semibold leading-4 text-[#0B50B6]">
                    {product.category}
                  </span>

                  <span className="min-w-0 pt-1 text-xs leading-4 text-slate-500">
                    {product.manufacturer}
                  </span>
                </div>

                <h3 className="text-xl font-bold tracking-tight text-[#102D50]">
                  {product.partNumber}
                </h3>

                <p className="mt-1 text-sm font-semibold text-slate-700">
                  {product.name}
                </p>

                <p className="mt-3 line-clamp-3 min-h-[72px] text-sm leading-6 text-slate-600">
                  {product.description}
                </p>

                <Link
                  href={`/contact?partNumber=${encodeURIComponent(product.partNumber)}`}
                  className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-bold text-[#0B50B6] transition hover:gap-3"
                >
                  Request Availability <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-2 text-xs leading-5 text-slate-500">
          Contact PowerWire Crafts to confirm component availability and
          sourcing options.
        </p>
      </div>
    </section>
  );
}
