
import Link from "next/link";

type Props = {
  title: string;
  description: string;
};

export default function IndustryCTA({ title, description }: Props) {
  return (
    <section className="px-5 pb-16 sm:px-8 sm:pb-20">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[28px] bg-[#10406F] px-6 py-12 sm:px-10 sm:py-14 lg:px-14">
        <div className="absolute -right-20 -top-32 h-80 w-80 rounded-full border border-white/10" />
        <div className="absolute -right-8 -top-20 h-60 w-60 rounded-full border border-white/10" />
        <div className="absolute bottom-0 right-0 h-48 w-48 bg-[#0B50B6]/40 blur-3xl" />

        <div className="relative z-10 grid items-center gap-8 lg:grid-cols-[1fr_auto]">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.23em] text-[#E9B747]">
              Work with PowerWire Crafts
            </p>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-blue-100 sm:text-base">
              {description}
            </p>

            <Link
              href="/contact"
              className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#E9B747] px-6 py-3 text-sm font-bold text-[#102D50] transition hover:-translate-y-0.5 hover:bg-[#f1c95f]"
            >
              Request a Quote <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="hidden min-w-48 grid-cols-1 gap-4 border-l border-white/15 pl-8 sm:grid">
            {["Component enquiries", "Sourcing discussions", "Availability questions"].map(
              (item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-sm text-[#E9B747]">
                    ✓
                  </span>
                  <span className="text-sm text-blue-50">{item}</span>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
