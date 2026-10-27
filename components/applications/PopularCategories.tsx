
import Link from "next/link";

type Category = {
  title: string;
  description?: string;
  componentTypes?: string;
  count?: number;
};

type Props = {
  title: string;
  subtitle: string;
  categories: Category[];
};

export default function PopularCategories({
  title,
  subtitle,
  categories,
}: Props) {
  const contactHref = (category: Category) =>
    `/contact?application=medical-healthcare&category=${encodeURIComponent(
      category.title
    )}`;

  return (
    <section className="relative overflow-hidden bg-[#F3F6FA] py-20 sm:py-24">
      <div className="pointer-events-none absolute -right-28 top-10 h-72 w-72 rounded-full bg-[#0B50B6]/[0.05] blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-[#E9B747]/[0.08] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section heading */}
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[3px] w-10 rounded-full bg-[#E9B747]" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#0B50B6]">
                Explore Our Catalogue
              </span>
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-[#10406F] sm:text-4xl lg:text-5xl">
              {title}
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              {subtitle}
            </p>
          </div>

          <Link
            href="/contact?application=medical-healthcare"
            className="inline-flex shrink-0 items-center justify-center gap-3 self-start rounded-lg bg-[#10406F] px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-[#10406F]/10 transition hover:-translate-y-0.5 hover:bg-[#0B50B6] md:self-auto"
          >
            Discuss Your Requirements
            <span aria-hidden="true">↗</span>
          </Link>
        </div>

        {/* Catalogue overview */}
        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="relative overflow-hidden rounded-2xl bg-[#10406F] p-6 text-white shadow-lg shadow-[#10406F]/10">
            <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full border-[18px] border-white/[0.06]" />

            <p className="relative text-sm font-medium text-white/70">
              Categories to Explore
            </p>

            <div className="relative mt-3 flex items-baseline gap-2">
              <span className="text-4xl font-bold tracking-tight">
                {categories.length.toString().padStart(2, "0")}
              </span>
              <span className="text-sm text-white/75">
                component categories
              </span>
            </div>

            <div className="mt-5 h-1 w-12 rounded-full bg-[#E9B747]" />
          </div>

          <div className="rounded-2xl border border-slate-200/80 bg-white p-6 transition hover:border-[#0B50B6]/30">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-lg text-[#0B50B6]">
              <span aria-hidden="true">◈</span>
            </div>
            <h3 className="font-bold text-[#10406F]">Semiconductors & ICs</h3>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              Devices for control, processing, switching and signal circuits.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200/80 bg-white p-6 transition hover:border-[#0B50B6]/30">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-lg text-amber-700">
              <span aria-hidden="true">ϟ</span>
            </div>
            <h3 className="font-bold text-[#10406F]">Power & Protection</h3>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              Components for voltage conversion, regulation and circuit protection.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200/80 bg-white p-6 transition hover:border-[#0B50B6]/30">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-lg text-sky-700">
              <span aria-hidden="true">⌁</span>
            </div>
            <h3 className="font-bold text-[#10406F]">Timing & Control</h3>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              Components supporting timing, embedded control and system operation.
            </p>
          </div>
        </div>

        {/* Category cards */}
        {categories.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category, index) => (
              <Link
                key={`${category.title}-${index}`}
                href={contactHref(category)}
                className="group relative flex min-h-[245px] flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#0B50B6]/40 hover:shadow-xl hover:shadow-[#10406F]/[0.07] sm:p-7"
                aria-label={`Enquire about ${category.title}`}
              >
                <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-[#E9B747] transition-transform duration-300 group-hover:scale-x-100" />

                <div className="mb-6 flex items-start justify-between gap-4">
                  <span className="inline-flex rounded-md bg-[#F3F6FA] px-3 py-1.5 text-[11px] font-bold tracking-[0.16em] text-[#0B50B6] transition group-hover:bg-blue-50">
                    CATEGORY {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 text-lg text-[#10406F] transition duration-300 group-hover:border-[#10406F] group-hover:bg-[#10406F] group-hover:text-white">
                    <span aria-hidden="true">↗</span>
                  </span>
                </div>

                <h3 className="text-xl font-bold leading-snug text-[#10406F] transition-colors group-hover:text-[#0B50B6]">
                  {category.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
                  {category.description ??
                    "Contact our team to discuss component specifications and sourcing options for this category."}
                </p>

                {category.componentTypes && (
                  <div className="mt-5">
                    <span className="inline-flex max-w-full rounded-md border border-slate-100 bg-[#F8FAFC] px-3 py-2 text-xs font-medium leading-5 text-slate-600">
                      {category.componentTypes}
                    </span>
                  </div>
                )}

                <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
                  <span className="text-sm font-semibold text-[#0B50B6]">
                    Enquire about category
                  </span>

                  {typeof category.count === "number" && (
                    <span className="text-xs text-slate-500">
                      {category.count} listed
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-slate-200 bg-white px-6 py-12 text-center">
            <h3 className="text-lg font-semibold text-[#10406F]">
              Explore our component catalogue
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Contact our team to discuss your component requirements.
            </p>
            <Link
              href="/contact?application=medical-healthcare"
              className="mt-5 inline-flex rounded-lg bg-[#10406F] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0B50B6]"
            >
              Contact Our Team
            </Link>
          </div>
        )}

        {/* Bottom enquiry banner */}
        <div className="mt-10 flex flex-col gap-5 rounded-2xl border border-[#10406F]/10 bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-2xl text-[#10406F]">
              <span aria-hidden="true">⌕</span>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#10406F]">
                Looking for a specific component?
              </h3>
              <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-600">
                Share a part number, manufacturer or technical specification.
                Our team can discuss sourcing options and availability.
              </p>
            </div>
          </div>

          <Link
            href="/contact?application=medical-healthcare"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg border border-[#10406F] px-5 py-3 text-sm font-semibold text-[#10406F] transition hover:bg-[#10406F] hover:text-white"
          >
            Contact PowerWire
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
