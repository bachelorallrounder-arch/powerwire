
import type { Metadata } from "next";

import ApplicationHero from "@/components/applications/ApplicationHero";
import FeaturedProducts from "@/components/applications/FeaturedProducts";
import FeaturedManufacturers from "@/components/applications/FeaturedManufacturers";
import IndustryApplications from "@/components/applications/IndustryApplications";
import PopularCategories from "@/components/applications/PopularCategories";
import WhyChooseIndustry from "@/components/applications/WhyChooseIndustry";
import IndustryCTA from "@/components/applications/IndustryCTA";

import {
  dataCenterProducts,
  dataCenterManufacturers,
  dataCenterCategories,
} from "@/data/dataCenters";

export const metadata: Metadata = {
  title: "Data Center & Cloud Infrastructure Components | PowerWire Crafts",
  description:
    "Explore server processors, networking ICs, power management components, high-speed interconnects and electronic components for data centers, cloud infrastructure and enterprise computing.",
  alternates: {
    canonical: "/applications/data-centers",
  },
};

const dataCenterApplications = [
  {
    title: "Enterprise Servers",
    description:
      "Processor, power regulation and interconnect solutions for enterprise server platforms and computing systems.",
    icon: "01",
  },
  {
    title: "Hyperscale Cloud Infrastructure",
    description:
      "Electronic components for scalable computing, high-density server deployments and cloud infrastructure.",
    icon: "02",
  },
  {
    title: "Data Center Networking",
    description:
      "Ethernet switching, networking ICs and high-speed interfaces for data center connectivity.",
    icon: "03",
  },
  {
    title: "Power Delivery & Regulation",
    description:
      "Power management and voltage regulation components for server boards and infrastructure electronics.",
    icon: "04",
  },
  {
    title: "High-Speed Interconnects",
    description:
      "Connector and interconnect solutions for server backplanes, network equipment and high-speed data links.",
    icon: "05",
  },
  {
    title: "Storage & Memory Systems",
    description:
      "Explore component sourcing requirements for storage platforms, memory systems and enterprise infrastructure.",
    icon: "06",
  },
];

const categoryDetails: Record<
  string,
  { description: string; componentTypes: string }
> = {
  "Embedded Computers": {
    description:
      "Computing platforms and embedded processing solutions for server systems and specialized electronic equipment.",
    componentTypes: "Processors · Computing platforms",
  },
  "Networking Solutions": {
    description:
      "Components for high-speed data transfer, network infrastructure and enterprise connectivity equipment.",
    componentTypes: "Networking ICs · Data interfaces",
  },
  "Connector & Interconnects": {
    description:
      "High-density connectors and interconnect solutions for server boards, backplanes and network systems.",
    componentTypes: "Backplane · High-speed connectors",
  },
  "Power Management": {
    description:
      "Power monitoring, voltage regulation and control components for server boards and data center electronics.",
    componentTypes: "Power controllers · Regulators",
  },
  "Board Mount Power Supplies": {
    description:
      "Board-level power supply options for electronic assemblies with defined voltage and power requirements.",
    componentTypes: "DC/DC · Board-level power",
  },
  "Ethernet Switches": {
    description:
      "Switching components for connecting devices, managing data traffic and building high-capacity networks.",
    componentTypes: "Ethernet switching · Network ports",
  },
  "RF and Wireless": {
    description:
      "RF and wireless components for monitoring, management and connectivity requirements where applicable.",
    componentTypes: "RF · Wireless interfaces",
  },
  "Memory IC Chips": {
    description:
      "Memory integrated circuits for data storage, buffering and system operation.",
    componentTypes: "Memory ICs · Data storage",
  },
  "Storage Systems": {
    description:
      "Components supporting electronic storage platforms and enterprise data storage infrastructure.",
    componentTypes: "Storage interfaces · System components",
  },
  "Thermal Management": {
    description:
      "Explore component requirements for managing heat and supporting thermal design in high-density electronics.",
    componentTypes: "Thermal monitoring · Heat management",
  },
  "Industrial PCs": {
    description:
      "Industrial computing platforms for monitoring, management and specialized infrastructure applications.",
    componentTypes: "Industrial computing · Control",
  },
  "Optical Networking": {
    description:
      "Components for optical communication links and high-speed data center network infrastructure.",
    componentTypes: "Optical links · Network connectivity",
  },
};

const categories = dataCenterCategories.map((title) => ({
  title,
  description:
    categoryDetails[title]?.description ??
    "Contact our team to discuss component specifications and sourcing options for this category.",
  componentTypes:
    categoryDetails[title]?.componentTypes ?? "Electronic components",
  href: `/contact?application=data-centers&category=${encodeURIComponent(
    title
  )}`,
}));

export default function DataCentersPage() {
  return (
    <main className="min-h-screen bg-white">
      <ApplicationHero
        badge="Data Centers & Cloud Infrastructure"
        title="Powering the Infrastructure Behind a Connected World"
        description="Explore server processors, networking ICs, power management components and high-speed interconnects for enterprise computing, hyperscale infrastructure and modern data centers."
        image="/applications/data-centers/hero.png"
        primaryHref="/contact?application=data-centers"
        secondaryHref="/products"
      />

      <FeaturedProducts
        title="Featured Data Center Components"
        subtitle="Explore selected computing, networking, power management and interconnect components for data center infrastructure."
        products={dataCenterProducts}
      />

      <IndustryApplications
        title="Data Center Applications We Support"
        subtitle="Explore component requirements across enterprise servers, cloud infrastructure, networking, power delivery and high-speed connectivity."
        applications={dataCenterApplications}
      />

      <PopularCategories
        title="Popular Categories for Data Centers"
        subtitle="Browse component families relevant to enterprise computing and cloud infrastructure, then contact our team with your part numbers or technical requirements."
        categories={categories}
      />

      <FeaturedManufacturers
        title="Data Center Component Manufacturers"
        subtitle="Explore manufacturers represented in our selected component portfolio. Product specifications, sourcing and availability are confirmed on enquiry."
        manufacturers={dataCenterManufacturers}
      />

      <WhyChooseIndustry
        title="Your Component Sourcing Partner for Data Center Infrastructure"
        subtitle="Share part numbers, manufacturer preferences and technical requirements with PowerWire Crafts to discuss sourcing options, availability and lead-time questions."
      />

      <IndustryCTA
        title="Sourcing Components for Your Data Center Project?"
        description="Send us your part numbers, component specifications or project requirements. Our team can discuss sourcing options and availability for your infrastructure needs."
      />
    </main>
  );
}
