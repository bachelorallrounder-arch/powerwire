
import type { Metadata } from "next";

import ApplicationHero from "@/components/applications/ApplicationHero";
import FeaturedProducts from "@/components/applications/FeaturedProducts";
import FeaturedManufacturers from "@/components/applications/FeaturedManufacturers";
import IndustryApplications from "@/components/applications/IndustryApplications";
import PopularCategories from "@/components/applications/PopularCategories";
import WhyChooseIndustry from "@/components/applications/WhyChooseIndustry";
import IndustryCTA from "@/components/applications/IndustryCTA";

import {
  evProducts,
  evManufacturers,
  evCategories,
} from "@/data/evInfrastructure";

export const metadata: Metadata = {
  title: "EV Infrastructure & Charging Components | PowerWire Crafts",
  description:
    "Explore electronic components for EV charging infrastructure, battery management, power conversion, energy monitoring and electric mobility systems with PowerWire Crafts.",
  alternates: {
    canonical: "/applications/ev-infrastructure",
  },
};

const evApplications = [
  {
    title: "EV Charging Stations",
    description:
      "Control, measurement and power-electronics components for AC and DC electric vehicle charging equipment.",
    icon: "01",
  },
  {
    title: "Battery Management Systems",
    description:
      "Battery monitoring and control components for battery packs and energy storage applications.",
    icon: "02",
  },
  {
    title: "Power Conversion Systems",
    description:
      "Semiconductors, gate drivers and control ICs for power conversion and regulation.",
    icon: "03",
  },
  {
    title: "Energy Monitoring",
    description:
      "Measurement and sensing components for monitoring current, voltage, energy and power usage.",
    icon: "04",
  },
  {
    title: "EV Communication Systems",
    description:
      "Interface and communication components for connected electric mobility and charging equipment.",
    icon: "05",
  },
  {
    title: "Charging Infrastructure Control",
    description:
      "Embedded controllers and industrial control components for charging equipment and supporting systems.",
    icon: "06",
  },
];

const categoryDetails: Record<
  string,
  { description: string; componentTypes: string }
> = {
  "Battery Management": {
    description:
      "Components for battery monitoring, cell measurement and battery-system control in electric mobility and energy storage.",
    componentTypes: "Battery monitoring · Cell management",
  },
  "Power Management": {
    description:
      "Power-control and monitoring ICs for charging equipment, power conversion and electronic power systems.",
    componentTypes: "Power control · Monitoring · Regulation",
  },
  "Embedded IC Chips": {
    description:
      "Microcontrollers and embedded processing devices for real-time control and charging-system management.",
    componentTypes: "MCUs · Embedded control",
  },
  "Discrete Semiconductors": {
    description:
      "Semiconductor components for switching, rectification and power-electronics circuits.",
    componentTypes: "Power semiconductors · Diodes",
  },
  "MOSFET Solutions": {
    description:
      "MOSFET devices for power switching and electronic control in suitable power-conversion designs.",
    componentTypes: "Power switching · MOSFETs",
  },
  "IGBT Modules": {
    description:
      "Power switching modules for suitable high-power conversion and industrial power-electronics applications.",
    componentTypes: "IGBTs · Power modules",
  },
  "Sensors & Transducers": {
    description:
      "Sensing components for measuring electrical and physical parameters in charging and energy systems.",
    componentTypes: "Current · Voltage · Measurement",
  },
  "Current Sensors": {
    description:
      "Components for measuring current in charging equipment, power converters and energy monitoring systems.",
    componentTypes: "Current measurement · Monitoring",
  },
  "Interface IC Chips": {
    description:
      "Interface and communication ICs for connecting controllers with other electronic systems and equipment.",
    componentTypes: "Communication · Interfaces",
  },
  "External/Internal DC DC Converters": {
    description:
      "DC-to-DC conversion components for generating regulated voltage rails in electronic power systems.",
    componentTypes: "Buck · Boost · DC/DC",
  },
  "Connector & Interconnects": {
    description:
      "Connection solutions for electronic assemblies, charging equipment and supporting infrastructure.",
    componentTypes: "Connectors · Interconnects",
  },
  "Industrial Automation and Controls": {
    description:
      "Control and interface components for charging equipment, power systems and supporting industrial infrastructure.",
    componentTypes: "Control · Automation · Interfaces",
  },
};

const categories = evCategories.map((title) => ({
  title,
  description:
    categoryDetails[title]?.description ??
    "Contact our team to discuss component specifications and sourcing options for this category.",
  componentTypes:
    categoryDetails[title]?.componentTypes ?? "Electronic components",
  href: `/contact?application=ev-infrastructure&category=${encodeURIComponent(
    title
  )}`,
}));

export default function EVInfrastructurePage() {
  return (
    <main className="min-h-screen bg-white">
      <ApplicationHero
        badge="EV Infrastructure & Charging"
        title="Powering the Future of Electric Mobility"
        description="Explore embedded controllers, battery monitoring ICs, power semiconductors, measurement devices and interface components for EV charging equipment and electric mobility infrastructure."
        image="/applications/ev-infrastructure/hero.png"
        primaryHref="/contact?application=ev-infrastructure"
        secondaryHref="/products"
      />

      <FeaturedProducts
        title="Featured EV Infrastructure Components"
        subtitle="Explore selected components for battery monitoring, charging control, power conversion and energy measurement."
        products={evProducts}
      />

      <IndustryApplications
        title="EV Applications We Support"
        subtitle="Explore component requirements across charging stations, battery systems, power conversion, energy monitoring and connected charging infrastructure."
        applications={evApplications}
      />

      <PopularCategories
        title="Popular Categories for EV Infrastructure"
        subtitle="Browse component families relevant to electric mobility and charging systems, then contact our team with your part numbers and technical requirements."
        categories={categories}
      />

      <FeaturedManufacturers
        title="EV Electronics Manufacturers"
        subtitle="Explore manufacturers represented in our selected component portfolio. Specific product availability and sourcing are confirmed on enquiry."
        manufacturers={evManufacturers}
      />

      <WhyChooseIndustry
        title="Your Component Sourcing Partner for EV Infrastructure"
        subtitle="Share part numbers, manufacturer preferences and technical requirements with PowerWire Crafts to discuss sourcing options, availability and lead-time questions."
      />

      <IndustryCTA
        title="Sourcing Components for an EV Charging Project?"
        description="Send us your part numbers, component specifications or project requirements. Our team can discuss sourcing options and availability for your EV infrastructure needs."
      />
    </main>
  );
}
