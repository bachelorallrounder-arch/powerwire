
"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import Container from "@/components/shared/Container";
import { productCatalog } from "@/data/productCatalog";

type ProductSubCategory = {
  name: string;
  count: number;
};

type ProductCategory = {
  category: string;
  slug: string;
  subCategories: ProductSubCategory[];
};

type SortOption = "default" | "az" | "za" | "groups" | "items";

const categories = productCatalog as ProductCategory[];

function formatNumber(value: number): string {
  return value.toLocaleString("en-IN");
}

function getTotalItems(category: ProductCategory): number {
  return category.subCategories.reduce(
    (total, item) => total + (item.count || 0),
    0
  );
}

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("default");

  const filteredCategories = useMemo(() => {
    const query = search.trim().toLowerCase();

    const result = categories.filter((category) => {
      if (!query) return true;

      return (
        category.category.toLowerCase().includes(query) ||
        category.slug.toLowerCase().includes(query) ||
        category.subCategories.some((item) =>
          item.name.toLowerCase().includes(query)
        )
      );
    });

    return [...result].sort((a, b) => {
      switch (sortBy) {
        case "az":
          return a.category.localeCompare(b.category);

        case "za":
          return b.category.localeCompare(a.category);

        case "groups":
          return b.subCategories.length - a.subCategories.length;

        case "items":
          return getTotalItems(b) - getTotalItems(a);

        default:
          return 0;
      }
    });
  }, [search, sortBy]);

  const totalProductGroups = useMemo(
    () =>
      categories.reduce(
        (total, category) => total + category.subCategories.length,
        0
      ),
    []
  );

  return (
    <main className="min-h-screen bg-[#F3F6FA] py-14 sm:py-20">
      <Container>
        {/* Hero */}
        <section className="mb-12 text-center sm:mb-16">
          <span className="inline-flex rounded-full border border-[#10406F]/10 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#0B50B6] shadow-sm">
            Product Portfolio
          </span>

          <h1 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-[#10406F] sm:text-4xl lg:text-5xl">
            Electronic Components &
            <span className="mt-2 block text-[#0B50B6]">
              Product Categories
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-4xl text-base leading-8 text-slate-600 sm:text-lg">
            Explore the PowerWire Crafts product catalogue, covering
            semiconductors, integrated circuits, resistors, capacitors,
            connectors, sensors, power supplies, industrial automation,
            test equipment and many more component categories.
          </p>
        </section>

        {/* Catalogue overview */}
        <section
          aria-label="Catalogue overview"
          className="mb-8 grid grid-cols-2 gap-4 lg:grid-cols-3"
        >
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 sm:text-sm">
              Categories
            </p>
            <p className="mt-2 text-2xl font-bold text-[#10406F] sm:text-3xl">
              {formatNumber(categories.length)}
            </p>
            <p className="mt-1 text-xs text-slate-500 sm:text-sm">
              Product categories
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 sm:text-sm">
              Product Groups
            </p>
            <p className="mt-2 text-2xl font-bold text-[#10406F] sm:text-3xl">
              {formatNumber(totalProductGroups)}
            </p>
            <p className="mt-1 text-xs text-slate-500 sm:text-sm">
              Listed subcategories
            </p>
          </div>

          <div className="col-span-2 rounded-2xl border border-[#10406F]/10 bg-[#10406F] p-5 shadow-sm sm:p-6 lg:col-span-1">
            <p className="text-xs font-semibold uppercase tracking-wider text-blue-100 sm:text-sm">
              Find a Component
            </p>
            <p className="mt-2 text-lg font-bold text-white sm:text-xl">
              Search our catalogue
            </p>
            <p className="mt-1 text-sm text-blue-100">
              Search categories or product groups below.
            </p>
          </div>
        </section>

        {/* Search and sorting */}
        <section className="mb-8 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
          <div className="flex flex-col gap-4 md:flex-row md:items-end">
            <div className="flex-1">
              <label
                htmlFor="product-search"
                className="mb-2 block text-sm font-semibold text-[#10406F]"
              >
                Search categories and product groups
              </label>

              <div className="flex items-center rounded-xl border border-slate-200 bg-[#F8FAFC] px-4 transition-colors focus-within:border-[#0B50B6] focus-within:ring-2 focus-within:ring-[#0B50B6]/10">
                <svg
                  aria-hidden="true"
                  className="mr-3 h-5 w-5 shrink-0 text-slate-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <circle cx="11" cy="11" r="7" />
                  <path d="m16 16 4 4" />
                </svg>

                <input
                  id="product-search"
                  type="search"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Try resistors, connectors, diodes, sensors..."
                  className="min-h-12 w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
                />

                {search && (
                  <button
                    type="button"
                    onClick={() => setSearch("")}
                    className="ml-2 shrink-0 rounded-lg px-2 py-1 text-xs font-semibold text-[#0B50B6] hover:bg-blue-50"
                    aria-label="Clear search"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>

            <div className="w-full md:w-60">
              <label
                htmlFor="product-sort"
                className="mb-2 block text-sm font-semibold text-[#10406F]"
              >
                Sort categories
              </label>

              <select
                id="product-sort"
                value={sortBy}
                onChange={(event) =>
                  setSortBy(event.target.value as SortOption)
                }
                className="min-h-12 w-full rounded-xl border border-slate-200 bg-[#F8FAFC] px-3 text-sm text-slate-700 outline-none focus:border-[#0B50B6] focus:ring-2 focus:ring-[#0B50B6]/10"
              >
                <option value="default">Original catalogue order</option>
                <option value="az">Name: A to Z</option>
                <option value="za">Name: Z to A</option>
                <option value="groups">Most product groups</option>
                <option value="items">Highest catalogue count</option>
              </select>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-slate-100 pt-4">
            <p className="text-sm text-slate-600" aria-live="polite">
              Showing{" "}
              <span className="font-bold text-[#10406F]">
                {formatNumber(filteredCategories.length)}
              </span>{" "}
              of {formatNumber(categories.length)} categories
            </p>

            {search && (
              <p className="text-xs text-slate-500">
                Matching category names and product groups
              </p>
            )}
          </div>
        </section>

        {/* All product categories */}
        <section aria-label="All product categories">
          {filteredCategories.length > 0 ? (
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {filteredCategories.map((category) => {
                const subCategories = category.subCategories ?? [];
                const totalItems = getTotalItems(category);

                const topSubCategories = [...subCategories]
                  .sort((a, b) => b.count - a.count)
                  .slice(0, 4);

                return (
                  <Link
                    key={category.slug}
                    href={`/products/${category.slug}`}
                    className="group flex h-full min-w-0 flex-col rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0B50B6]/50 hover:shadow-xl sm:p-7"
                  >
                    {/* Category title */}
                    <div className="flex items-start justify-between gap-3">
                      <h2 className="text-lg font-bold leading-snug text-[#10406F] transition-colors group-hover:text-[#0B50B6] sm:text-xl">
                        {category.category}
                      </h2>

                      <span className="shrink-0 rounded-full bg-[#0B50B6]/[0.07] px-3 py-1.5 text-xs font-bold text-[#0B50B6]">
                        {formatNumber(subCategories.length)}
                      </span>
                    </div>

                    {/* Catalogue count */}
                    <div className="mt-4">
                      <p className="text-2xl font-bold tracking-tight text-[#10406F]">
                        {formatNumber(totalItems)}
                      </p>
                      <p className="mt-1 text-sm text-slate-500">
                        Catalogue items
                      </p>
                    </div>

                    <div className="mt-3 flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#E9B747]" />
                      <p className="text-xs font-medium text-slate-500">
                        {formatNumber(subCategories.length)} product groups
                      </p>
                    </div>

                    {/* Representative product groups */}
                    <div className="mt-5 border-t border-slate-100 pt-5">
                      <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Explore product groups
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {topSubCategories.map((subCategory) => (
                          <span
                            key={subCategory.name}
                            className="max-w-full rounded-full bg-[#F3F6FA] px-3 py-1.5 text-xs leading-relaxed text-slate-600 transition-colors group-hover:bg-[#0B50B6]/[0.06]"
                          >
                            {subCategory.name}
                          </span>
                        ))}
                      </div>

                      {subCategories.length > 4 && (
                        <p className="mt-3 text-xs text-slate-400">
                          +{formatNumber(subCategories.length - 4)} more groups
                        </p>
                      )}
                    </div>

                    {/* Category link */}
                    <div className="mt-auto flex items-center justify-between pt-7">
                      <span className="font-semibold text-[#0B50B6]">
                        View Category
                      </span>

                      <span
                        aria-hidden="true"
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0B50B6]/[0.07] text-lg text-[#0B50B6] transition-all duration-300 group-hover:translate-x-1 group-hover:bg-[#E9B747] group-hover:text-[#10406F]"
                      >
                        →
                      </span>
                    </div>

                    <div className="mt-5 h-1 w-12 rounded-full bg-[#E9B747] transition-all duration-300 group-hover:w-20" />
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#F3F6FA] text-2xl text-[#10406F]">
                ?
              </div>

              <h2 className="mt-5 text-xl font-bold text-[#10406F]">
                No matching categories found
              </h2>

              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
                Try a different category name or search for a product group,
                such as capacitors, power supplies or connectors.
              </p>

              <button
                type="button"
                onClick={() => setSearch("")}
                className="mt-6 rounded-full bg-[#10406F] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0B50B6]"
              >
                View All Categories
              </button>
            </div>
          )}
        </section>

        {/* Catalogue note */}
        <p className="mt-8 text-center text-xs leading-6 text-slate-500">
          Catalogue counts are reference figures and do not represent verified
          inventory, current stock or live product availability.
        </p>

        {/* Enquiry CTA */}
        <section className="mt-14 overflow-hidden rounded-3xl bg-[#10406F] px-6 py-10 text-center sm:mt-16 sm:px-10 sm:py-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E9B747]">
            Component Sourcing Support
          </p>

          <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
            Looking for a specific electronic component?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-blue-100 sm:text-base">
            Send us the part number, manufacturer or technical specifications.
            Our team can help you with your component sourcing enquiry.
          </p>

          <Link
            href="/contact"
            className="mt-7 inline-flex items-center justify-center rounded-full bg-[#E9B747] px-6 py-3 font-semibold text-[#10406F] transition-colors hover:bg-white"
          >
            Send an Enquiry
            <span aria-hidden="true" className="ml-2">
              →
            </span>
          </Link>
        </section>
      </Container>
    </main>
  );
}
