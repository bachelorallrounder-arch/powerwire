
import type { Metadata } from "next";

import PCBHero from "@/components/pcb/PCBHero";
import PCBQuoteForm from "@/components/pcb/PCBQuoteForm";
import PCBProcess from "@/components/pcb/PCBProcess";
import PCBCTA from "@/components/pcb/PCBCTA";

export const metadata: Metadata = {
  title: "PCB Manufacturing & Assembly Services | PowerWire Crafts",
  description:
    "Request a quote for PCB fabrication, printed circuit board assembly, prototype boards and BOM component sourcing with PowerWire Crafts.",
  alternates: {
    canonical: "/pcb",
  },
  openGraph: {
    title: "PCB Manufacturing & Assembly | PowerWire Crafts",
    description:
      "Explore PCB fabrication, assembly and electronic component sourcing solutions for your next project.",
    url: "/pcb",
    type: "website",
  },
};

export default function PCBPage() {
  return (
    <main className="min-h-screen bg-white">
      <PCBHero />

      <PCBQuoteForm />

      <PCBProcess />

      <PCBCTA />
    </main>
  );
}
