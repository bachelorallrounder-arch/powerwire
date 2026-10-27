
import Image from "next/image";
import Link from "next/link";

type Manufacturer = {
  name: string;
  logo: string;
};

type Props = {
  title: string;
  subtitle: string;
  manufacturers: Manufacturer[];
};

export default function FeaturedManufacturers({
  title,
  subtitle,
  manufacturers,
}: Props) {
  return (
    <section className="bg-white pb-16 sm:pb-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.23em] text-[#0B50B6]">
              Component Manufacturers
            </p>

            <h2 className="text-2xl font-bold tracking-tight text-[#10406F] sm:text-3xl">
              {title}
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-600 sm:text-base">
              {subtitle}
            </p>
          </div>

          <Link
            href="/contact"
            className="text-sm font-semibold text-[#0B50B6] hover:underline"
          >
            Ask about sourcing →
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {manufacturers.map((manufacturer) => (
            <div
              key={manufacturer.name}
              className="flex min-h-[112px] items-center justify-center rounded-2xl border border-[#E0E8F1] bg-white p-6 transition hover:border-[#B7CDE8] hover:bg-[#F8FAFD] hover:shadow-sm"
            >
              <Image
                src={manufacturer.logo}
                alt={`${manufacturer.name} logo`}
                width={180}
                height={64}
                className="h-12 w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
