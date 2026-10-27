
"use client";

import Link from "next/link";
import { ArrowUpRight, ChevronRight, Boxes } from "lucide-react";

import { productCategories } from "@/data/productCategories";

export default function MegaMenu() {
  return (
    <div className="invisible absolute left-0 top-full z-50 mt-3 w-[min(90vw,360px)] translate-y-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_18px_50px_rgba(16,64,111,0.14)]">

        {/* Menu Header */}
        <div className="border-b border-slate-100 bg-[#F3F6FA] px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#0B50B6] text-white">
              <Boxes size={20} />
            </div>

            <div>
              <p className="text-sm font-bold text-[#10406F]">
                Product Categories
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Explore our product portfolio
              </p>
            </div>
          </div>
        </div>

        {/* Product Category Links */}
        <div className="max-h-[65vh] overflow-y-auto p-2">
          {productCategories.map((category) => (
            <Link
              key={category.slug}
              href={`/products/${category.slug}`}
              className="group/item flex items-center justify-between gap-3 rounded-xl px-4 py-3 transition-colors duration-200 hover:bg-[#EEF5FF] focus-visible:bg-[#EEF5FF] focus-visible:outline-none"
            >
              <div className="min-w-0">
                <span className="block text-sm font-semibold text-slate-700 transition-colors group-hover/item:text-[#0B50B6]">
                  {category.title}
                </span>
              </div>

              <ChevronRight
                size={17}
                className="shrink-0 text-slate-400 transition-all duration-200 group-hover/item:translate-x-1 group-hover/item:text-[#0B50B6]"
              />
            </Link>
          ))}
        </div>

        {/* View All Products */}
        <div className="border-t border-slate-100 bg-white p-3">
          <Link
            href="/products"
            className="flex items-center justify-between rounded-xl bg-[#0B50B6] px-4 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#10406F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E9B747] focus-visible:ring-offset-2"
          >
            <span>Explore All Products</span>
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>
    </div>
  );
}
