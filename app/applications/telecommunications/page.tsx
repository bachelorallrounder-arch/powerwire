
import type { Metadata } from "next";

import ApplicationHero from "@/components/applications/ApplicationHero";
import FeaturedProducts from "@/components/applications/FeaturedProducts";
import FeaturedManufacturers from "@/components/applications/FeaturedManufacturers";
import IndustryApplications from "@/components/applications/IndustryApplications";
import PopularCategories from "@/components/applications/PopularCategories";
import WhyChooseIndustry from "@/components/applications/WhyChooseIndustry";
import IndustryCTA from "@/components/applications/IndustryCTA";

import {
  telecommunicationsProducts,
  telecommunicationsManufacturers,
  telecommunicationsCategories,
} from "@/data/telecommunications";

export const metadata: Metadata = {
  title: "Telecommunications & Networking Components | PowerWire Crafts",
  description:
    "Explore RF components, Ethernet networking ICs, clock and timing devices, interface ICs and power management solutions for telecommunications infrastructure with PowerWire Crafts.",
  alternates: {
    canonical: "/applications/telecommunications",
  },
};

const telecommunicationsApplications = [
  {
    title: "Wireless Infrastructure",
    description:
      "RF components, frequency synthesizers and front-end modules for wireless communication equipment.",
    icon: "01",
  },
  {
    title: "Network Switching & Routing",
    description:
      "Ethernet switches, PHY transceivers and interface components for network infrastructure.",
    icon: "02",
  },
  {
    title: "RF & Signal Distribution",
    description:
      "Frequency generation and RF components for radio systems and communication signal chains.",
    icon: "03",
  },
  {
    title: "Clock Synchronization",
    description:
      "Clock generation and timing components for synchronized communication and networking systems.",
    icon: "04",
  },
  {
    title: "Fiber & Optical Networks",
    description:
      "Explore component sourcing requirements for optical communication and fiber networking equipment.",
    icon: "05",
  },
  {
    title: "Telecom Power Systems",
    description:
      "Power monitoring and management components for communication equipment and network infrastructure.",
    icon: "06",
  },
];

const categoryDetails: Record<
  string,
  { description: string; componentTypes: string }
> = {
  "RF Components": {
    description:
      "Radio-frequency components for signal generation, reception and wireless communication systems.",
    componentTypes: "RF · Frequency generation · Signal chains",
  },
  "RF Front-End Modules": {
    description:
      "Integrated RF front-end solutions for wireless transmission and reception applications.",
    componentTypes: "RF front ends · Wireless interfaces",
  },
  "RF and Wireless": {
    description:
      "Components supporting radio connectivity, wireless interfaces and communication equipment.",
    componentTypes: "Wireless · RF connectivity",
  },
  "Networking Solutions": {
    description:
      "Electronic components for network interfaces, data communication and connected infrastructure.",
    componentTypes: "Network interfaces · Data communication",
  },
  "Ethernet Switches": {
    description:
      "Switching devices for connecting Ethernet ports and managing network traffic.",
    componentTypes: "Ethernet switching · Network connectivity",
  },
  "Ethernet PHYs": {
    description:
      "Physical-layer transceivers that support Ethernet signaling between network equipment and connected devices.",
    componentTypes: "Ethernet PHY · Signal interfaces",
  },
  "Clock / Timing ICs": {
    description:
      "Clock generators and timing devices for synchronization and clock distribution in communication systems.",
    componentTypes: "Clock generation · Timing · Jitter control",
  },
  Oscillators: {
    description:
      "Reference-frequency components for timing, synchronization and electronic communication circuits.",
    componentTypes: "Frequency references · Timing",
  },
  "Power Management": {
    description:
      "Components for monitoring, regulating and managing power in telecommunications equipment.",
    componentTypes: "Power monitoring · Regulation",
  },
  "Fiber Communication": {
    description:
      "Explore components for fiber-optic communication interfaces and optical data transmission systems.",
    componentTypes: "Fiber links · Optical interfaces",
  },
  "Optical Networking": {
    description:
      "Component sourcing for optical networking equipment and high-speed communication infrastructure.",
    componentTypes: "Optical links · Network infrastructure",
  },
  "Interface IC Chips": {
    description:
      "Interface controllers and bridge ICs for connecting processors, computers and embedded communication devices.",
    componentTypes: "USB · UART · Data interfaces",
  },
};

const categories = telecommunicationsCategories.map((title) => ({
  title,
  description:
    categoryDetails[title]?.description ??
    "Contact our team to discuss component specifications and sourcing options for this category.",
  componentTypes:
    categoryDetails[title]?.componentTypes ?? "Electronic components",
  href: `/contact?application=telecommunications&category=${encodeURIComponent(
    title
  )}`,
}));

export default function TelecommunicationsPage() {
  return (
    <main className="min-h-screen bg-white">
      <ApplicationHero
        badge="Telecommunications & Networking"
        title="Connected Infrastructure Starts with the Right Components"
        description="Explore RF components, networking ICs, Ethernet interfaces, clock and timing devices, and power management solutions for telecommunications equipment and connected infrastructure."
        image="/applications/telecommunications/hero.png"
        primaryHref="/contact?application=telecommunications"
        secondaryHref="/products"
      />

      <FeaturedProducts
        title="Featured Telecommunications Components"
        subtitle="Explore selected components for RF systems, Ethernet networking, timing, interfaces and telecom power management."
        products={telecommunicationsProducts}
      />

      <IndustryApplications
        title="Telecommunications Applications We Support"
        subtitle="Explore component requirements across wireless infrastructure, networking equipment, RF systems, synchronization and optical communications."
        applications={telecommunicationsApplications}
      />

      <PopularCategories
        title="Popular Categories for Telecommunications"
        subtitle="Explore relevant component families and contact our team with part numbers, technical specifications or sourcing requirements."
        categories={categories}
      />

      <FeaturedManufacturers
        title="Telecommunications Component Manufacturers"
        subtitle="Explore manufacturers represented in our telecommunications component selection. Product availability and sourcing are confirmed on enquiry."
        manufacturers={telecommunicationsManufacturers}
      />

      <WhyChooseIndustry
        title="Your Component Sourcing Partner for Telecommunications"
        subtitle="Share part numbers, manufacturer preferences or technical requirements with PowerWire Crafts to discuss sourcing options and component availability."
      />

      <IndustryCTA
        title="Sourcing Components for Your Network Infrastructure?"
        description="Send us your part numbers, component specifications or project requirements. Our team can discuss sourcing options and availability for your telecommunications project."
      />
    </main>
  );
}
