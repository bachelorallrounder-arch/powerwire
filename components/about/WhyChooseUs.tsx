
import Container from "@/components/shared/Container";
import {
  ArrowRight,
  Cable,
  CheckCircle2,
  ClipboardCheck,
  Headset,
  ShieldCheck,
  Target,
  Truck,
  Zap,
} from "lucide-react";
import Link from "next/link";

const reasons = [
  {
    icon: Cable,
    number: "01",
    title: "Wire & Cable Solutions",
    description:
      "Explore wire and cable options for building, commercial and industrial applications based on your requirements.",
  },
  {
    icon: ClipboardCheck,
    number: "02",
    title: "Specification-Focused",
    description:
      "Discuss relevant product details, technical specifications and intended applications before making a selection.",
  },
  {
    icon: ShieldCheck,
    number: "03",
    title: "Quality-Conscious Approach",
    description:
      "Review applicable product standards and documentation relevant to your requirements during the enquiry process.",
  },
  {
    icon: Target,
    number: "04",
    title: "Application-Led Guidance",
    description:
      "Share your project details and intended use to help identify suitable product options for further discussion.",
  },
  {
    icon: Truck,
    number: "05",
    title: "Requirement-Based Enquiries",
    description:
      "Communicate your product type, required quantity and delivery expectations clearly from the beginning.",
  },
  {
    icon: Headset,
    number: "06",
    title: "Customer-Focused Service",
    description:
      "Get a straightforward enquiry experience with clear communication around your product requirements.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative isolate overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      {/* Background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 -z-10 h-96 w-96 rounded-full bg-[#0B50B6]/[0.05] blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-10 -z-10 h-96 w-96 rounded-full bg-[#E9B747]/[0.12] blur-3xl"
      />

      <Container>
        {/* Section heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#0B50B6]/15 bg-[#F3F6FA] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#0B50B6]">
            <span className="h-2 w-2 rounded-full bg-[#E9B747]" />
            The Powerwire Approach
          </span>

          <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-[#10406F] sm:text-4xl lg:text-5xl">
            Why Choose
            <span className="block text-[#0B50B6]">
              POWERWIRE CRAFTS?
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Choosing wire and cable products starts with understanding your
            application. We focus on clear product enquiries, relevant
            specifications and a customer-first approach to your requirements.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 sm:gap-6 xl:grid-cols-3 lg:mt-16">
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <article
                key={reason.number}
                className="group relative overflow-hidden rounded-2xl border border-[#DCE4EE] bg-white p-6 shadow-[0_8px_30px_rgba(16,64,111,0.04)] transition duration-300 hover:-translate-y-1 hover:border-[#0B50B6]/30 hover:shadow-[0_18px_40px_rgba(16,64,111,0.09)] sm:rounded-3xl sm:p-8"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EEF5FF] text-[#0B50B6] transition duration-300 group-hover:bg-[#0B50B6] group-hover:text-white">
                    <Icon size={25} strokeWidth={1.8} />
                  </div>

                  <span className="text-sm font-bold tracking-widest text-[#B2C0D0]">
                    {reason.number}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-bold leading-snug text-[#10406F] sm:text-2xl">
                  {reason.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                  {reason.description}
                </p>

                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-[#0B50B6]">
                  <span className="h-1 w-8 rounded-full bg-[#E9B747] transition-all duration-300 group-hover:w-12" />
                  <span>Powerwire Crafts</span>
                </div>

                {/* Bottom hover accent */}
                <div className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-[#E9B747] transition-transform duration-300 group-hover:scale-x-100" />
              </article>
            );
          })}
        </div>

        {/* Commitment banner */}
        <div className="relative mt-16 overflow-hidden rounded-3xl bg-[#10406F] shadow-[0_24px_70px_rgba(16,64,111,0.16)] sm:mt-20 sm:rounded-[2rem]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(233,183,71,0.18),transparent_38%)]"
          />

          <div className="relative grid lg:grid-cols-[1.1fr_0.9fr]">
            {/* Banner content */}
            <div className="p-7 sm:p-10 lg:p-14">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#E9B747]">
                <CheckCircle2 size={17} />
                Our Commitment
              </span>

              <h3 className="mt-5 max-w-xl text-3xl font-bold leading-tight text-white sm:text-4xl">
                A Clearer Approach to Your Wire & Cable Requirements.
              </h3>

              <p className="mt-5 max-w-xl text-base leading-7 text-blue-100/80 sm:text-lg sm:leading-8">
                Every project has its own needs. We encourage clear
                communication about applications, technical specifications
                and quantities so product enquiries can start with the right
                information.
              </p>

              <Link
                href="/contact"
                className="group mt-8 inline-flex items-center gap-3 rounded-xl bg-[#E9B747] px-5 py-3.5 text-sm font-bold text-[#10406F] transition hover:bg-white"
              >
                Discuss Your Requirements
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>

            {/* Commitment highlights */}
            <div className="flex flex-col justify-center border-t border-white/10 bg-white/[0.04] p-7 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-100/70">
                What Guides Our Approach
              </p>

              <div className="mt-7 space-y-5">
                {[
                  {
                    icon: Cable,
                    title: "Product Relevance",
                    text: "Start with the application and the product you need.",
                  },
                  {
                    icon: ClipboardCheck,
                    title: "Clear Specifications",
                    text: "Discuss technical details that matter to your project.",
                  },
                  {
                    icon: Headset,
                    title: "Direct Communication",
                    text: "Make your requirements and questions clear from the outset.",
                  },
                  {
                    icon: ShieldCheck,
                    title: "Informed Decisions",
                    text: "Review relevant product information before proceeding.",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.title} className="flex gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.08] text-[#E9B747]">
                        <Icon size={21} strokeWidth={1.8} />
                      </div>

                      <div>
                        <h4 className="font-semibold text-white">
                          {item.title}
                        </h4>
                        <p className="mt-1 text-sm leading-6 text-blue-100/70">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
