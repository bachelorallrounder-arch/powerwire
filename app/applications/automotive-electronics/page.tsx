
import type { Metadata } from "next";

import ApplicationHero from "@/components/applications/ApplicationHero";
import FeaturedProducts from "@/components/applications/FeaturedProducts";
import FeaturedManufacturers from "@/components/applications/FeaturedManufacturers";
import IndustryApplications from "@/components/applications/IndustryApplications";
import PopularCategories from "@/components/applications/PopularCategories";
import WhyChooseIndustry from "@/components/applications/WhyChooseIndustry";
import IndustryCTA from "@/components/applications/IndustryCTA";

import {
  automotiveProducts,
  automotiveManufacturers,
  automotiveCategories,
} from "@/data/automotiveElectronics";

export const metadata: Metadata = {
  title: "Automotive Electronics Components | PowerWire Crafts",
  description:
    "Explore automotive electronic components for ADAS, vehicle control systems, power management and advanced automotive electronics with PowerWire Crafts.",
  alternates: {
    canonical: "/applications/automotive-electronics",
  },
};

const automotiveApplications = [
  {
    title: "ADAS & Driver Assistance",
    description:
      "Processing and supporting components for advanced driver assistance and vehicle sensing systems.",
    icon: "01",
  },
  {
    title: "Vehicle Control Units",
    description:
      "Semiconductors and logic components for electronic control and vehicle system management.",
    icon: "02",
  },
  {
    title: "Automotive Power Management",
    description:
      "Power conversion and regulation components for vehicle electronic systems.",
    icon: "03",
  },
  {
    title: "Infotainment & Connectivity",
    description:
      "Electronic components for connected dashboards, infotainment and in-vehicle interfaces.",
    icon: "04",
  },
  {
    title: "Electric Vehicle Electronics",
    description:
      "Power management and control components for electric vehicle subsystems.",
    icon: "05",
  },
  {
    title: "Body & Comfort Electronics",
    description:
      "Components for electronic control functions across vehicle body and comfort systems.",
    icon: "06",
  },
];

const categoryDetails: Record<
  string,
  { description: string; componentTypes: string }
> = {
  "Discrete Semiconductors": {
    description:
      "Semiconductor devices for switching, signal conditioning and electronic control circuits.",
    componentTypes: "Diodes · Transistors",
  },
  "Transient Voltage Suppressors": {
    description:
      "Protection devices designed to help protect electronics against transient voltage events.",
    componentTypes: "Transient protection · TVS",
  },
  "Zener Diodes": {
    description:
      "Diodes used for voltage reference, clamping and regulation in electronic circuits.",
    componentTypes: "Voltage reference · Clamping",
  },
  "Memory ICs Products": {
    description:
      "Memory components for storing configuration, operational and application data.",
    componentTypes: "Memory · Data storage",
  },
  Unclassified: {
    description:
      "Additional catalogue components that may require specification-based identification.",
    componentTypes: "General components",
  },
  "Embedded IC Chips": {
    description:
      "Integrated circuits for embedded processing, control and automotive computing applications.",
    componentTypes: "Processing · Embedded systems",
  },
  Microcontrollers: {
    description:
      "Embedded controllers for monitoring inputs, executing control logic and managing electronic functions.",
    componentTypes: "Control · Processing",
  },
  "External/Internal DC DC Converters": {
    description:
      "Power conversion components for generating regulated voltage rails in vehicle electronics.",
    componentTypes: "Buck · Boost · DC/DC",
  },
  "TVS Diodes": {
    description:
      "Transient suppression components for protecting sensitive electronic interfaces and circuits.",
    componentTypes: "ESD · Surge protection",
  },
  "Single Zener Diodes": {
    description:
      "Single Zener devices for voltage clamping and reference applications.",
    componentTypes: "Voltage clamping · Reference",
  },
};

// Verify these slugs against the actual product catalogue routes.
const categorySlugs: Record<string, string> = {
  "Discrete Semiconductors": "discrete-semiconductors",
  "Transient Voltage Suppressors": "transient-voltage-suppressors",
  "Zener Diodes": "zener-diodes",
  "Memory ICs Products": "memory-ics",
  Unclassified: "unclassified",
  "Embedded IC Chips": "embedded-ic-chips",
  Microcontrollers: "microcontrollers",
  "External/Internal DC DC Converters":
    "external-internal-dc-dc-converters",
  "TVS Diodes": "tvs-diodes",
  "Single Zener Diodes": "single-zener-diodes",
};

const categories = automotiveCategories.map((title) => ({
  title,
  description:
    categoryDetails[title]?.description ??
    "Contact our team to discuss component specifications and sourcing options.",
  componentTypes:
    categoryDetails[title]?.componentTypes ?? "Electronic components",
  // All category cards lead to Contact, not product category pages.
  href: `/contact?application=automotive-electronics&category=${encodeURIComponent(
    title
  )}`,
}));

export default function AutomotiveElectronicsPage() {
  return (
    <main className="min-h-screen bg-white">
      <ApplicationHero
        badge="Automotive Electronics"
        title="Reliable Electronics for the Next Generation of Mobility"
        description="Explore semiconductor devices, embedded processors, power management ICs and conversion solutions for automotive control systems, driver assistance and advanced vehicle electronics."
        image="/applications/automotive-electronics/hero.png"
        primaryHref="/contact?application=automotive-electronics"
        secondaryHref="/products"
      />

      <FeaturedProducts
        title="Featured Automotive Components"
        subtitle="Explore selected components for automotive electronics, embedded processing and vehicle power systems."
        products={automotiveProducts}
      />

      <IndustryApplications
        title="Automotive Applications We Support"
        subtitle="Explore component requirements across vehicle control, power management, driver assistance and connected automotive systems."
        applications={automotiveApplications}
      />

      <PopularCategories
        title="Popular Categories for Automotive Electronics"
        subtitle="Explore relevant component families and contact our team with your part numbers, technical specifications or sourcing requirements."
        categories={categories}
      />

      <FeaturedManufacturers
        title="Automotive Electronics Manufacturers"
        subtitle="Explore manufacturers represented in our automotive component selection. Specific part availability and sourcing are confirmed on enquiry."
        manufacturers={automotiveManufacturers}
      />

      <WhyChooseIndustry
        title="Your Component Sourcing Partner for Automotive Electronics"
        subtitle="Share your component part numbers and technical requirements with PowerWire Crafts to discuss sourcing options, availability and lead times."
      />

      <IndustryCTA
        title="Sourcing Components for an Automotive Project?"
        description="Send us your part numbers, manufacturer preferences or technical requirements. Our team can discuss sourcing options and component availability."
      />
    </main>
  );
}
