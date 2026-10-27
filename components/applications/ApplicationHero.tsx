
import Image from "next/image";
import Link from "next/link";

type Props = {
  badge: string;
  title: string;
  description: string;
  image: string;
  primaryHref?: string;
  secondaryHref?: string;
};

export default function ApplicationHero({
  badge,
  title,
  description,
  image,
  primaryHref = "/contact",
  secondaryHref = "/products",
}: Props) {
  return (
    <section className="relative isolate overflow-hidden bg-[#F3F6FA]">
      <div className="absolute inset-0 -z-20">
        <Image
          src={image}
          alt="Medical electronics and healthcare equipment"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-white via-white/95 to-white/10 lg:via-white/90" />

      <div className="mx-auto grid min-h-[540px] max-w-7xl items-center px-5 py-16 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
        <div className="max-w-2xl">
          <div className="mb-7 flex items-center gap-2 text-sm font-medium text-[#526783]">
            <Link href="/" className="transition hover:text-[#0B50B6]">
              Home
            </Link>
            <span>/</span>
            <Link
              href="/applications"
              className="transition hover:text-[#0B50B6]"
            >
              Applications
            </Link>
            <span>/</span>
            <span className="text-[#10406F]">{badge}</span>
          </div>

          <p className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.24em] text-[#0B50B6]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#E9B747]" />
            PowerWire Applications
          </p>

          <h1 className="max-w-xl text-4xl font-bold leading-[1.08] tracking-tight text-[#10406F] sm:text-5xl lg:text-6xl">
            {title}
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
            {description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={primaryHref}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#E9B747] px-6 py-3 text-sm font-bold text-[#102D50] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#f1c95f]"
            >
              Request a Quote <span aria-hidden="true">→</span>
            </Link>

            <Link
              href={secondaryHref}
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#B9CBE0] bg-white/80 px-6 py-3 text-sm font-semibold text-[#10406F] transition hover:border-[#0B50B6] hover:bg-white"
            >
              Explore Products
            </Link>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-2 gap-x-6 gap-y-5 border-t border-[#D8E2EE] pt-6 sm:grid-cols-4">
            {[
              "Component sourcing",
              "Multiple product categories",
              "Manufacturer options",
              "Enquiry support",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white text-xs font-bold text-[#0B50B6] shadow-sm">
                  ✓
                </span>
                <span className="text-xs leading-5 text-[#526783]">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:block" aria-hidden="true" />
      </div>
    </section>
  );
}
