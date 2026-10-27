
import {
  ShieldCheck,
  Cable,
  Handshake,
  Headset,
} from "lucide-react";

import Container from "@/components/shared/Container";

const companyHighlights = [
  {
    number: "01",
    title: "Quality-Focused",
    description:
      "Product selection centered on quality and application requirements.",
    icon: ShieldCheck,
  },
  {
    number: "02",
    title: "Wire & Cable Solutions",
    description:
      "Explore electrical wire and cable categories for different applications.",
    icon: Cable,
  },
  {
    number: "03",
    title: "Customer Commitment",
    description:
      "A customer-first approach to product enquiries and requirements.",
    icon: Handshake,
  },
  {
    number: "04",
    title: "Enquiry Support",
    description:
      "Connect with our team to discuss your product requirements.",
    icon: Headset,
  },
];

export default function Stats() {
  return (
    <section className="relative overflow-hidden border-y border-[#DCE6F2] bg-[#F7F9FC]">
      {/* Subtle brand accent */}
      <div
        aria-hidden="true"
        className="absolute left-0 top-0 h-0.5 w-full bg-gradient-to-r from-[#10406F] via-[#0B50B6] to-[#E9B747]"
      />

      <Container>
        <div className="py-12 sm:py-16">
          {/* Section introduction */}
          <div className="mx-auto mb-9 max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0B50B6]">
              The Powerwire Approach
            </p>

            <h2 className="mt-3 text-2xl font-bold tracking-tight text-[#10406F] sm:text-3xl">
              Built Around Your Requirements
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
              A clear, customer-focused approach to electrical wire
              and cable solutions, product enquiries, and support.
            </p>
          </div>

          {/* Company highlights */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {companyHighlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.number}
                  className="group relative rounded-2xl border border-[#DFE7F0] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#B8D0F2] hover:shadow-xl hover:shadow-[#10406F]/5"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex size-12 items-center justify-center rounded-xl bg-[#EEF5FF] text-[#0B50B6] transition-colors duration-300 group-hover:bg-[#0B50B6] group-hover:text-white">
                      <Icon size={23} strokeWidth={1.8} />
                    </div>

                    <span className="text-xs font-bold tracking-widest text-slate-300">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-[#10406F]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>

                  <div className="mt-5 h-0.5 w-10 rounded-full bg-[#E9B747] transition-all duration-300 group-hover:w-16" />
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
