
type Application = {
  title: string;
  description: string;
  icon?: string;
};

type Props = {
  title: string;
  subtitle: string;
  applications: Application[];
};

export default function IndustryApplications({
  title,
  subtitle,
  applications,
}: Props) {
  return (
    <section className="relative overflow-hidden bg-[#F3F6FA] py-16 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#0B50B6]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* Section heading */}
        <div className="mb-10 max-w-3xl sm:mb-12">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-[2px] w-8 rounded-full bg-[#E9B747]" />
            <p className="text-xs font-bold uppercase tracking-[0.23em] text-[#0B50B6]">
              Application Areas
            </p>
          </div>

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#10406F] sm:text-4xl lg:text-[42px]">
            {title}
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            {subtitle}
          </p>
        </div>

        {/* Application cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {applications.map((application, index) => (
            <article
              key={application.title}
              className="group relative flex min-h-[230px] flex-col overflow-hidden rounded-2xl border border-[#DFE7F0] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#B8CDE8] hover:shadow-[0_18px_40px_rgba(16,64,111,0.09)] sm:p-7"
            >
              {/* Number and decorative accent */}
              <div className="flex items-start justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EAF2FF] text-sm font-bold tracking-wide text-[#0B50B6] transition-colors duration-300 group-hover:bg-[#10406F] group-hover:text-white">
                  {application.icon ?? String(index + 1).padStart(2, "0")}
                </span>

                <span className="text-2xl font-light text-[#D5E0ED] transition-colors group-hover:text-[#E9B747]">
                  ↗
                </span>
              </div>

              <div className="mt-7">
                <h3 className="text-xl font-bold leading-snug text-[#10406F] transition-colors group-hover:text-[#0B50B6]">
                  {application.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {application.description}
                </p>
              </div>

              {/* Bottom accent */}
              <div className="mt-auto pt-6">
                <div className="h-[3px] w-10 rounded-full bg-[#E9B747] transition-all duration-300 group-hover:w-16" />
              </div>
            </article>
          ))}
        </div>

        {/* Supporting note */}
        <div className="mt-8 flex flex-col gap-3 rounded-2xl border border-[#DFE7F0] bg-white/70 p-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p className="max-w-2xl text-sm leading-6 text-slate-600">
            Exploring a medical electronics project? Tell us about your
            component requirements and the equipment you are developing.
          </p>

          <a
            href="/contact?application=medical-healthcare"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-[#0B50B6] transition hover:gap-3"
          >
            Discuss your requirements <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
