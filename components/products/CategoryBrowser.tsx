
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Search,
  SlidersHorizontal,
  X,
  PackageSearch,
} from "lucide-react";

type Subcategory = {
  slug: string;
  name: string;
  count?: number;
  totalItems?: number;
};

type CategoryBrowserProps = {
  categoryName: string;
  subcategories: Subcategory[];
};

type SortOption = "az" | "za" | "count-desc" | "count-asc";

function getGroupCount(group: Subcategory): number | null {
  if (typeof group.count === "number") return group.count;
  if (typeof group.totalItems === "number") return group.totalItems;
  return null;
}

export default function CategoryBrowser({
  categoryName,
  subcategories,
}: CategoryBrowserProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState<SortOption>("az");

  const filteredGroups = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    const filtered = subcategories.filter((group) => {
      if (!query) return true;

      return (
        group.name.toLowerCase().includes(query) ||
        group.slug.toLowerCase().includes(query)
      );
    });

    return [...filtered].sort((a, b) => {
      switch (sortOption) {
        case "za":
          return b.name.localeCompare(a.name);

        case "count-desc":
          return (getGroupCount(b) ?? -1) - (getGroupCount(a) ?? -1);

        case "count-asc":
          return (getGroupCount(a) ?? Number.MAX_SAFE_INTEGER) -
            (getGroupCount(b) ?? Number.MAX_SAFE_INTEGER);

        case "az":
        default:
          return a.name.localeCompare(b.name);
      }
    });
  }, [subcategories, searchQuery, sortOption]);

  const clearFilters = () => {
    setSearchQuery("");
    setSortOption("az");
  };

  return (
    <div className="space-y-7">
      {/* Search and sorting */}
      <div className="rounded-2xl border border-slate-200 bg-[#F3F6FA] p-4 sm:p-5">
        <div className="grid gap-4 md:grid-cols-[1fr_240px]">
          <div>
            <label
              htmlFor="product-group-search"
              className="mb-2 block text-sm font-semibold text-[#10406F]"
            >
              Search product groups
            </label>

            <div className="relative">
              <Search
                size={19}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                id="product-group-search"
                type="search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder={`Search ${categoryName.toLowerCase()}...`}
                autoComplete="off"
                className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-11 pr-11 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[#0B50B6] focus:ring-4 focus:ring-blue-100"
              />

              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  aria-label="Clear search"
                  className="absolute right-3 top-1/2 flex size-7 -translate-y-1/2 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
                >
                  <X size={16} />
                </button>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="product-group-sort"
              className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#10406F]"
            >
              <SlidersHorizontal size={15} />
              Sort product groups
            </label>

            <select
              id="product-group-sort"
              value={sortOption}
              onChange={(event) =>
                setSortOption(event.target.value as SortOption)
              }
              className="h-12 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-700 outline-none transition focus:border-[#0B50B6] focus:ring-4 focus:ring-blue-100"
            >
              <option value="az">Name: A to Z</option>
              <option value="za">Name: Z to A</option>
              <option value="count-desc">Item count: High to low</option>
              <option value="count-asc">Item count: Low to high</option>
            </select>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-4">
          <p className="text-sm text-slate-600" aria-live="polite">
            Showing{" "}
            <span className="font-bold text-[#10406F]">
              {filteredGroups.length.toLocaleString("en-IN")}
            </span>{" "}
            of{" "}
            <span className="font-bold text-[#10406F]">
              {subcategories.length.toLocaleString("en-IN")}
            </span>{" "}
            product groups
          </p>

          {(searchQuery || sortOption !== "az") && (
            <button
              type="button"
              onClick={clearFilters}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0B50B6] transition hover:text-[#10406F]"
            >
              <X size={15} />
              Reset filters
            </button>
          )}
        </div>
      </div>

      {/* Product group cards */}
      {filteredGroups.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredGroups.map((group, index) => {
            const itemCount = getGroupCount(group);

            return (
              <Link
                key={group.slug}
                href={`/contact?category=${encodeURIComponent(
                  categoryName
                )}&group=${encodeURIComponent(group.name)}`}
                className="group flex min-h-52 flex-col rounded-2xl border border-slate-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-950/5 sm:p-6"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-blue-50 text-[#0B50B6] transition group-hover:bg-[#0B50B6] group-hover:text-white">
                    <PackageSearch size={21} />
                  </div>

                  <ArrowUpRight
                    size={19}
                    className="text-slate-400 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#0B50B6]"
                  />
                </div>

                <h3 className="mt-5 text-base font-bold leading-6 text-[#10406F] transition group-hover:text-[#0B50B6]">
                  {group.name}
                </h3>

                <div className="mt-3 flex flex-wrap items-center gap-2">
                  {itemCount !== null && (
                    <span className="rounded-full bg-[#F3F6FA] px-2.5 py-1 text-xs font-medium text-slate-600">
                      {itemCount.toLocaleString("en-IN")} listed items
                    </span>
                  )}
                </div>

                <div className="mt-auto flex items-center justify-between gap-3 pt-5">
                  <span className="text-sm font-semibold text-[#0B50B6]">
                    Send an enquiry
                  </span>

                  <span className="flex size-8 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition group-hover:border-[#0B50B6] group-hover:bg-[#0B50B6] group-hover:text-white">
                    <ArrowRight size={15} />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-5 py-14 text-center">
          <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-[#F3F6FA] text-slate-500">
            <Search size={25} />
          </div>

          <h3 className="mt-5 text-lg font-bold text-[#10406F]">
            No product groups found
          </h3>

          <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
            We couldn&apos;t find a product group matching &quot;
            {searchQuery}&quot;. Try a different keyword or reset your
            filters.
          </p>

          <button
            type="button"
            onClick={clearFilters}
            className="mt-5 inline-flex items-center gap-2 rounded-xl bg-[#10406F] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0B50B6]"
          >
            <X size={16} />
            Clear filters
          </button>
        </div>
      )}

      {/* Enquiry prompt */}
      <div className="flex flex-col gap-4 rounded-2xl border border-blue-100 bg-blue-50/70 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
        <div>
          <h3 className="font-bold text-[#10406F]">
            Can&apos;t find the component you need?
          </h3>

          <p className="mt-1 text-sm leading-6 text-slate-600">
            Send us the part number or specification, and enquire about
            sourcing options for your requirement.
          </p>
        </div>

        <Link
          href={`/contact?category=${encodeURIComponent(categoryName)}`}
          className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-xl bg-[#10406F] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#0B50B6]"
        >
          Contact our team
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
