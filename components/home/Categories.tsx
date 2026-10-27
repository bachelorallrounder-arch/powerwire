
import Container from "@/components/shared/Container";
import { ArrowRight, Cable } from "lucide-react";
import { homeCategories } from "@/data/homeCategories";

export default function Categories() {
  const middleIndex = Math.ceil(homeCategories.length / 2);
  const firstRow = homeCategories.slice(0, middleIndex);
  const secondRow = homeCategories.slice(middleIndex);

  return (
    <section className="relative isolate overflow-hidden bg-[#F3F6FA] py-20 sm:py-24 lg:py-28">
      {/* Brand background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,#FFFFFF_0%,#F3F6FA_55%,#FFFFFF_100%)]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-16 -z-10 h-96 w-96 rounded-full bg-[#0B50B6]/[0.07] blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-0 -z-10 h-96 w-96 rounded-full bg-[#E9B747]/[0.13] blur-3xl"
      />

      <Container>
        {/* Section heading */}
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#0B50B6]/15 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#0B50B6] shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#E9B747]" />
            POWERWIRE CRAFTS PRIVATE LIMITED
          </span>

          <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-[#10406F] sm:text-4xl lg:text-5xl">
            Explore Our Product Range
            <span className="mt-2 block text-[#0B50B6]">
              Wire & Cable Solutions
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Explore our range of wire and cable product categories for
            building, commercial and industrial applications. Share your
            requirements with our team to discuss suitable products and
            specifications.
          </p>
        </div>

        {/* Product category rows */}
        {homeCategories.length > 0 && (
          <div className="mt-14 space-y-5 sm:mt-16 sm:space-y-7">
            <CategoryRow categories={firstRow} direction="left" />
            {secondRow.length > 0 && (
              <CategoryRow categories={secondRow} direction="right" />
            )}
          </div>
        )}

        {/* Bottom CTA */}
        <div className="relative mt-14 overflow-hidden rounded-3xl bg-[#10406F] p-7 sm:mt-16 sm:p-10 lg:p-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(233,183,71,0.18),transparent_42%)]"
          />

          <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-sm font-semibold text-[#E9B747]">
                <Cable size={18} />
                Have a specific requirement?
              </div>

              <h3 className="mt-3 text-2xl font-bold leading-tight text-white sm:text-3xl">
                Let’s discuss your wire and cable needs.
              </h3>

              <p className="mt-3 leading-7 text-blue-100/80">
                Tell us about your application, specifications and required
                quantity to start an enquiry.
              </p>
            </div>

            <a
              href="/contact"
              className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#E9B747] px-5 py-3.5 text-sm font-bold text-[#10406F] transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#10406F]"
            >
              Request an Enquiry
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

type Category = {
  name: string;
  image: string;
  products: string;
};

function CategoryRow({
  categories,
  direction,
}: {
  categories: Category[];
  direction: "left" | "right";
}) {
  if (categories.length === 0) return null;

  const animationClass =
    direction === "left" ? "animate-scroll-left" : "animate-scroll-right";

  return (
    <div className="group/row relative overflow-hidden">
      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-[#F5F8FC] to-transparent sm:w-16" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-[#F5F8FC] to-transparent sm:w-16" />

      <div
        className={`flex w-max gap-4 pr-4 sm:gap-6 ${animationClass}`}
      >
        {[...categories, ...categories].map((category, index) => (
          <CategoryCard
            key={`${category.name}-${index}`}
            category={category}
          />
        ))}
      </div>
    </div>
  );
}

function CategoryCard({ category }: { category: Category }) {
  return (
    <a
      href="/contact"
      aria-label={`Enquire about ${category.name}`}
      className="group/card relative w-[270px] shrink-0 overflow-hidden rounded-2xl border border-[#DCE4EE] bg-white shadow-[0_8px_28px_rgba(16,64,111,0.06)] transition duration-300 hover:-translate-y-1 hover:border-[#0B50B6]/35 hover:shadow-[0_18px_40px_rgba(16,64,111,0.12)] sm:w-[310px] sm:rounded-3xl"
    >
      {/* Category image */}
      <div className="relative h-[210px] overflow-hidden bg-[#EAF0F7] sm:h-[240px]">
        <img
          src={category.image}
          alt={category.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover/card:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#071B32]/65 via-transparent to-transparent" />

        <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full border border-white/25 bg-[#10406F]/80 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
          <span className="h-1.5 w-1.5 rounded-full bg-[#E9B747]" />
          Product Category
        </span>
      </div>

      {/* Category information */}
      <div className="p-5 sm:p-6">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#0B50B6]">
          {category.products}
        </p>

        <h3 className="mt-2 min-h-[3.5rem] text-xl font-bold leading-snug text-[#10406F] sm:text-2xl">
          {category.name}
        </h3>

        <div className="mt-5 flex items-center justify-between border-t border-[#E8EDF4] pt-4">
          <span className="text-sm font-semibold text-[#0B50B6]">
            Enquire about this
          </span>

          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#EEF5FF] text-[#0B50B6] transition group-hover/card:bg-[#0B50B6] group-hover/card:text-white">
            <ArrowRight
              size={17}
              className="transition-transform group-hover/card:translate-x-0.5"
            />
          </span>
        </div>
      </div>

      {/* Brand accent */}
      <div className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-[#E9B747] transition-transform duration-300 group-hover/card:scale-x-100" />
    </a>
  );
}
