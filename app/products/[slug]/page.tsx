
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import Container from "@/components/shared/Container";
import { productCatalog } from "@/data/productCatalog";
import { productCategories } from "@/data/productCategories";

export const instant = false;

type Manufacturer =
  | string
  | {
      name: string;
      logo: string;
    };

type ProductSubCategory = {
  name: string;
  count: number;
};

type ProductCategory = {
  category: string;
  slug: string;
  subCategories: ProductSubCategory[];
};

type ManufacturerCategory = {
  slug: string;
  manufacturers?: Manufacturer[];
};

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

const categories = productCatalog as ProductCategory[];
const manufacturerCategories =
  productCategories as ManufacturerCategory[];

function formatNumber(value: number): string {
  return value.toLocaleString("en-IN");
}

function getCategory(slug: string) {
  return categories.find((item) => item.slug === slug);
}

function getManufacturers(slug: string): Manufacturer[] {
  const category = manufacturerCategories.find(
    (item) => item.slug === slug
  );

  return category?.manufacturers ?? [];
}

function getTotalProducts(category: ProductCategory): number {
  return category.subCategories.reduce(
    (total, item) => total + (item.count || 0),
    0
  );
}

export async function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);

  if (!category) {
    return {
      title: "Product Category Not Found | PowerWire Crafts",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const title = `${category.category} | PowerWire Crafts`;
  const description =
    `Explore ${category.category} at PowerWire Crafts. ` +
    "Browse product groups and contact our team for sourcing enquiries, pricing, and availability.";

  return {
    title,
    description,
    alternates: {
      canonical: `/products/${category.slug}`,
    },
    openGraph: {
      title,
      description,
      type: "website",
    },
  };
}

export default async function ProductCategoryPage({
  params,
}: Props) {
  const { slug } = await params;
  const category = getCategory(slug);

  if (!category) {
    notFound();
  }

  const productGroups = category.subCategories;
  const totalProducts = getTotalProducts(category);
  const manufacturers = getManufacturers(slug);

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F3F6FA] via-white to-white py-14 sm:py-20">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#0B50B6]/5 blur-3xl" />

        <Container>
          <div className="relative">
            {/* Breadcrumb */}
            <nav
              aria-label="Breadcrumb"
              className="mb-8 flex flex-wrap items-center gap-2 text-sm text-slate-500"
            >
              <Link
                href="/"
                className="transition hover:text-[#0B50B6]"
              >
                Home
              </Link>

              <span aria-hidden="true">/</span>

              <Link
                href="/products"
                className="transition hover:text-[#0B50B6]"
              >
                Products
              </Link>

              <span aria-hidden="true">/</span>

              <span
                aria-current="page"
                className="font-medium text-[#10406F]"
              >
                {category.category}
              </span>
            </nav>

            <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-16">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-[#0B50B6]/15 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#0B50B6] shadow-sm">
                  <span className="h-2 w-2 rounded-full bg-[#E9B747]" />
                  Product Category
                </span>

                <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-[#10406F] sm:text-5xl lg:text-6xl">
                  {category.category}
                </h1>

                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                  Explore our catalogue of{" "}
                  {category.category.toLowerCase()} and related
                  components. Contact PowerWire Crafts for sourcing
                  enquiries, pricing, availability, and suitable
                  alternatives.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href={`/contact?category=${encodeURIComponent(category.category)}`}
                    className="inline-flex items-center justify-center rounded-xl bg-[#0B50B6] px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-[#0B50B6]/15 transition hover:-translate-y-0.5 hover:bg-[#10406F]"
                  >
                    Request a Quote
                    <span className="ml-2" aria-hidden="true">
                      →
                    </span>
                  </Link>

                  <Link
                    href="/products"
                    className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-[#10406F] transition hover:border-[#0B50B6] hover:bg-[#F3F6FA]"
                  >
                    All Categories
                  </Link>
                </div>
              </div>

              {/* Catalogue summary */}
              <div className="w-full rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-[#10406F]/5 sm:p-8 lg:w-[320px]">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-500">
                    Catalogue Overview
                  </span>

                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F3F6FA] text-[#0B50B6]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      className="h-6 w-6"
                      aria-hidden="true"
                    >
                      <rect
                        x="4"
                        y="3"
                        width="16"
                        height="18"
                        rx="2"
                      />
                      <path
                        d="M8 7h8M8 11h8M8 15h5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </div>

                <div className="mt-7">
                  <p className="text-sm text-slate-500">
                    Product Groups
                  </p>

                  <p className="mt-1 text-4xl font-bold tabular-nums text-[#10406F]">
                    {formatNumber(productGroups.length)}
                  </p>
                </div>

                <div className="my-6 border-t border-slate-100" />

                <div>
                  <p className="text-sm text-slate-500">
                    Catalogue Count
                  </p>

                  <p className="mt-1 text-3xl font-bold tabular-nums text-[#0B50B6]">
                    {formatNumber(totalProducts)}
                  </p>
                </div>

                <p className="mt-5 rounded-xl bg-[#F3F6FA] p-3 text-xs leading-5 text-slate-500">
                  Reference figures only. Counts do not confirm
                  current inventory or availability.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Featured Manufacturers */}
      {manufacturers.length > 0 && (
        <section className="bg-[#F3F6FA] py-14 sm:py-16">
          <Container>
            <div className="mb-8">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0B50B6]">
                Our Brand Network
              </span>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#10406F] sm:text-4xl">
                Featured Manufacturers
              </h2>

              <p className="mt-3 max-w-2xl leading-7 text-slate-600">
                Explore manufacturers associated with this product
                category. Contact our team for help identifying suitable
                components.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {manufacturers.map((manufacturer, index) => {
                const isObject = typeof manufacturer !== "string";
                const name = isObject
                  ? manufacturer.name
                  : manufacturer;
                const logo = isObject ? manufacturer.logo : null;

                return (
                  <div
                    key={`${name}-${index}`}
                    className="group flex min-h-32 flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm transition duration-200 hover:-translate-y-1 hover:border-[#0B50B6]/40 hover:shadow-lg"
                  >
                    {logo ? (
                      <div className="relative mb-3 h-12 w-full">
                        <Image
                          src={logo}
                          alt={`${name} logo`}
                          fill
                          sizes="150px"
                          className="object-contain"
                        />
                      </div>
                    ) : (
                      <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-[#F3F6FA] text-lg font-bold text-[#0B50B6]">
                        {name.charAt(0).toUpperCase()}
                      </div>
                    )}

                    <span className="text-sm font-semibold leading-5 text-[#10406F]">
                      {name}
                    </span>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>
      )}

      {/* Product Groups */}
      <section className="py-14 sm:py-20">
        <Container>
          <div className="mb-8 flex flex-col justify-between gap-4 sm:mb-10 sm:flex-row sm:items-end">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0B50B6]">
                Explore the Catalogue
              </span>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#10406F] sm:text-4xl">
                Product Groups
              </h2>

              <p className="mt-3 max-w-2xl leading-7 text-slate-600">
                Browse the product groups listed under{" "}
                {category.category}. Contact our team if you need help
                identifying a component.
              </p>
            </div>

            <p className="text-sm font-medium text-slate-500">
              {formatNumber(productGroups.length)} groups
            </p>
          </div>

          {productGroups.length > 0 ? (
            <>
              {/* Desktop table */}
              <div className="hidden overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm md:block">
                <div className="grid grid-cols-12 items-center bg-[#10406F] px-6 py-5 text-sm font-semibold text-white">
                  <div className="col-span-8">
                    Product Group
                  </div>

                  <div className="col-span-4 text-right">
                    Catalogue Count
                  </div>
                </div>

                {productGroups.map((item, index) => (
                  <div
                    key={item.name}
                    className={`grid grid-cols-12 items-center px-6 py-5 transition hover:bg-[#F3F6FA] ${
                      index !== productGroups.length - 1
                        ? "border-b border-slate-100"
                        : ""
                    }`}
                  >
                    <div className="col-span-8 flex items-center gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F3F6FA] text-sm font-semibold text-[#0B50B6]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="font-medium text-slate-800">
                        {item.name}
                      </span>
                    </div>

                    <div className="col-span-4 flex items-center justify-end gap-5">
                      <span className="font-semibold tabular-nums text-[#0B50B6]">
                        {formatNumber(item.count)}
                      </span>

                      <Link
                        href={`/contact?category=${encodeURIComponent(category.category)}&group=${encodeURIComponent(item.name)}`}
                        aria-label={`Enquire about ${item.name}`}
                        className="rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-[#10406F] transition hover:border-[#0B50B6] hover:bg-white"
                      >
                        Enquire
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile cards */}
              <div className="grid gap-4 md:hidden">
                {productGroups.map((item, index) => (
                  <article
                    key={item.name}
                    className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-[#0B50B6]/40 hover:shadow-md"
                  >
                    <div className="flex items-start gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F3F6FA] text-sm font-semibold text-[#0B50B6]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div className="min-w-0 flex-1">
                        <h3 className="font-semibold leading-6 text-[#10406F]">
                          {item.name}
                        </h3>

                        <p className="mt-2 text-sm text-slate-500">
                          Catalogue count:{" "}
                          <span className="font-semibold tabular-nums text-[#0B50B6]">
                            {formatNumber(item.count)}
                          </span>
                        </p>
                      </div>
                    </div>

                    <Link
                      href={`/contact?category=${encodeURIComponent(category.category)}&group=${encodeURIComponent(item.name)}`}
                      className="mt-5 inline-flex w-full items-center justify-center rounded-xl border border-[#0B50B6]/20 px-4 py-3 text-sm font-semibold text-[#0B50B6] transition hover:bg-[#F3F6FA]"
                    >
                      Enquire About This Group
                    </Link>
                  </article>
                ))}
              </div>
            </>
          ) : (
            <div className="rounded-2xl border border-dashed border-slate-300 bg-[#F3F6FA] px-6 py-14 text-center">
              <h3 className="text-lg font-semibold text-[#10406F]">
                Product groups will be listed here
              </h3>

              <p className="mt-2 text-sm text-slate-600">
                Contact our team for assistance with this category.
              </p>

              <Link
                href={`/contact?category=${encodeURIComponent(category.category)}`}
                className="mt-5 inline-flex rounded-xl bg-[#0B50B6] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#10406F]"
              >
                Contact Our Team
              </Link>
            </div>
          )}

          <p className="mt-6 text-xs leading-5 text-slate-500">
            Catalogue counts are reference figures and do not represent
            verified stock quantities, live availability, or a guarantee
            that every listed item is currently supplied.
          </p>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-[#10406F] py-16 sm:py-20">
        <Container>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] px-6 py-12 text-center sm:px-12 sm:py-16">
            <div className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full bg-[#E9B747]/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-28 -left-16 h-64 w-64 rounded-full bg-[#0B50B6]/30 blur-3xl" />

            <div className="relative mx-auto max-w-3xl">
              <span className="inline-flex rounded-full border border-[#E9B747]/30 bg-[#E9B747]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#E9B747]">
                PowerWire Crafts
              </span>

              <h2 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl">
                Looking for Specific Components?
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                Tell us what you need. Our team can assist with sourcing
                enquiries, pricing, lead times, and suitable alternatives.
              </p>

              <Link
                href={`/contact?category=${encodeURIComponent(category.category)}`}
                className="mt-8 inline-flex items-center justify-center rounded-xl bg-[#E9B747] px-7 py-4 font-semibold text-[#10406F] shadow-lg transition hover:-translate-y-0.5 hover:bg-[#f2c85f]"
              >
                Request a Quote
                <span className="ml-2" aria-hidden="true">
                  →
                </span>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
