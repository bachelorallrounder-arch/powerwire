
import type { Metadata } from "next";

import ApplicationHero from "@/components/applications/ApplicationHero";
import FeaturedProducts from "@/components/applications/FeaturedProducts";
import FeaturedManufacturers from "@/components/applications/FeaturedManufacturers";
import IndustryApplications from "@/components/applications/IndustryApplications";
import PopularCategories from "@/components/applications/PopularCategories";
import WhyChooseIndustry from "@/components/applications/WhyChooseIndustry";
import IndustryCTA from "@/components/applications/IndustryCTA";

import {
  defenseProducts,
  defenseManufacturers,
  defenseCategories,
} from "@/data/defenseAerospaceNaval";

export const metadata: Metadata = {
  title: "Defense, Aerospace & Naval Electronics | PowerWire Crafts",
  description:
    "Explore electronic components for aerospace platforms, satellite systems, defense communications, mission-critical electronics and naval applications with PowerWire Crafts.",
  alternates: {
    canonical: "/applications/defense-aerospace-naval",
  },
};

const defenseApplications = [
  {
    title: "Aerospace & Satellite Systems",
    description:
      "Processing, timing and power components for aerospace electronics and satellite platforms.",
    icon: "01",
  },
  {
    title: "Defense Communications",
    description:
      "RF, transceiver and supporting electronic components for communication equipment.",
    icon: "02",
  },
  {
    title: "Radar & Signal Processing",
    description:
      "Components for timing, signal processing and RF-based electronic systems.",
    icon: "03",
  },
  {
    title: "Mission-Critical Computing",
    description:
      "Embedded processors and programmable logic for demanding computing environments.",
    icon: "04",
  },
  {
    title: "Naval Electronics",
    description:
      "Electronic components and interconnect solutions for naval equipment and onboard systems.",
    icon: "05",
  },
  {
    title: "High-Reliability Power Systems",
    description:
      "Power regulation and semiconductor components for reliability-focused electronic designs.",
    icon: "06",
  },
];

const categoryDetails: Record<
  string,
  { description: string; componentTypes: string }
> = {
  "Embedded IC Chips": {
    description:
      "Processors and integrated circuits for embedded computing, control and programmable electronic systems.",
    componentTypes: "Processors · FPGAs · Controllers",
  },
  "MIL Grade Components": {
    description:
      "Discuss component requirements for demanding applications where environmental and reliability specifications matter.",
    componentTypes: "Application-specific sourcing",
  },
  "RF and Wireless": {
    description:
      "Radio-frequency components for wireless communication, signal transmission and receiver systems.",
    componentTypes: "RF · Wireless · Transceivers",
  },
  "Power Management": {
    description:
      "Power regulation and management devices for electronic systems with defined supply requirements.",
    componentTypes: "Voltage regulation · Power control",
  },
  "Discrete Semiconductors": {
    description:
      "Discrete devices used in switching, rectification and power-related electronic circuits.",
    componentTypes: "Diodes · Power semiconductors",
  },
  "Clock/Timing ICs": {
    description:
      "Timing components that support clock generation, synchronization and signal distribution.",
    componentTypes: "Clock generators · Timing",
  },
  "Connector & Interconnects": {
    description:
      "Interconnect solutions for joining electronic assemblies and supporting equipment interfaces.",
    componentTypes: "Connectors · Interconnects",
  },
  "Signal Conditioners and Isolators": {
    description:
      "Components for signal conditioning and electrical isolation in electronic measurement and control systems.",
    componentTypes: "Signal conditioning · Isolation",
  },
  "RF Amplifiers": {
    description:
      "Amplifier components for RF signal chains and communication equipment.",
    componentTypes: "RF signal amplification",
  },
  "RF Transceiver ICs": {
    description:
      "Integrated transmit-and-receive solutions for radio-frequency communication systems.",
    componentTypes: "Transmit · Receive",
  },
  "High Reliability Power Modules": {
    description:
      "Power module sourcing for systems with defined electrical, environmental and reliability requirements.",
    componentTypes: "Power conversion · Regulation",
  },
  "Industrial Automation and Controls": {
    description:
      "Control and interface components used in automation equipment and electronic control systems.",
    componentTypes: "Control · Interfaces",
  },
};

const categories = defenseCategories.map((title) => ({
  title,
  description:
    categoryDetails[title]?.description ??
    "Contact our team to discuss technical specifications and sourcing options for this component category.",
  componentTypes:
    categoryDetails[title]?.componentTypes ?? "Electronic components",
  href: `/contact?application=defense-aerospace-naval&category=${encodeURIComponent(
    title
  )}`,
}));

export default function DefenseAerospaceNavalPage() {
  return (
    <main className="min-h-screen bg-white">
      <ApplicationHero
        badge="Defense, Aerospace & Naval"
        title="High-Reliability Electronics for Demanding Applications"
        description="Explore embedded processors, RF components, timing devices, power solutions and interconnects for aerospace platforms, satellite systems, defense communications and naval electronics."
        image="/applications/defense-aerospace-naval/hero.png"
        primaryHref="/contact?application=defense-aerospace-naval"
        secondaryHref="/products"
      />

      <FeaturedProducts
        title="Featured Defense & Aerospace Components"
        subtitle="Explore selected components for embedded processing, RF communications, timing and high-reliability power applications."
        products={defenseProducts}
      />

      <IndustryApplications
        title="Applications We Support"
        subtitle="Explore component requirements across aerospace, satellite, communications, naval and mission-critical electronic systems."
        applications={defenseApplications}
      />

      <PopularCategories
        title="Component Categories for Defense & Aerospace"
        subtitle="Explore relevant component families and contact our team with part numbers, technical specifications or sourcing requirements."
        categories={categories}
      />

      <FeaturedManufacturers
        title="Featured Component Manufacturers"
        subtitle="Explore manufacturers associated with the listed components. Product availability, specifications and sourcing are confirmed on enquiry."
        manufacturers={defenseManufacturers}
      />

      <WhyChooseIndustry
        title="Your Component Sourcing Partner for High-Reliability Electronics"
        subtitle="Share part numbers, manufacturer preferences and technical requirements with PowerWire Crafts to discuss sourcing options and availability."
      />

      <IndustryCTA
        title="Looking for Components for a Specialized Project?"
        description="Send us your component part numbers and technical requirements. Our team can discuss sourcing options, availability and relevant product information."
      />
    </main>
  );
}
