
type Props = {
  title: string;
  subtitle: string;
};

const benefits = [
  {
    number: "01",
    title: "Broad Component Selection",
    description:
      "Explore electronic component categories for different medical-device designs.",
  },
  {
    number: "02",
    title: "Sourcing Assistance",
    description:
      "Share your part numbers and requirements to discuss sourcing options.",
  },
  {
    number: "03",
    title: "Application-Focused Support",
    description:
      "Help identify relevant component categories for your design requirements.",
  },
  {
    number: "04",
    title: "Enquiry-Led Service",
    description:
      "Contact the team to discuss quantities, availability and lead-time questions.",
  },
];

export default function WhyChooseIndustry({ title, subtitle }: Props) {
  return (
    <section className="bg-[#F3F6FA] py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.23em] text-[#0B50B6]">
            The PowerWire Approach
          </p>
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#10406F] sm:text-4xl">
            {title}
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-600">
            {subtitle}
          </p>

          <div className="mt-8 h-1.5 w-20 rounded-full bg-[#E9B747]" />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {benefits.map((benefit) => (
            <article
              key={benefit.number}
              className="rounded-[22px] border border-[#E0E8F1] bg-white p-6 transition hover:border-[#B7CDE8] hover:shadow-lg"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAF2FF] text-sm font-extrabold text-[#0B50B6]">
                {benefit.number}
              </span>
              <h3 className="mt-5 text-lg font-bold text-[#10406F]">
                {benefit.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {benefit.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
