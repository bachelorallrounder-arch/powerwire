
import type { Metadata } from "next";

import ApplicationHero from "@/components/applications/ApplicationHero";
import FeaturedProducts from "@/components/applications/FeaturedProducts";
import FeaturedManufacturers from "@/components/applications/FeaturedManufacturers";
import IndustryApplications from "@/components/applications/IndustryApplications";
import PopularCategories from "@/components/applications/PopularCategories";
import WhyChooseIndustry from "@/components/applications/WhyChooseIndustry";
import IndustryCTA from "@/components/applications/IndustryCTA";

import {
  medicalProducts,
  medicalManufacturers,
  medicalCategories,
} from "@/data/medicalHealthcare";

export const metadata: Metadata = {
  title: "Medical & Healthcare Electronics | PowerWire Crafts",
  description:
    "Explore electronic components for medical devices, diagnostics, patient monitoring and healthcare electronics with PowerWire Crafts.",
  alternates: {
    canonical: "/applications/medical-healthcare",
  },
};

const medicalApplications = [
  {
    title: "Patient Monitoring Systems",
    description:
      "Electronic components for vital-sign monitoring and connected patient-care equipment.",
    icon: "01",
  },
  {
    title: "Diagnostic Equipment",
    description:
      "Components for diagnostic instruments, sensing systems and electronic test equipment.",
    icon: "02",
  },
  {
    title: "Medical Imaging",
    description:
      "Electronic components used in medical imaging and supporting equipment.",
    icon: "03",
  },
  {
    title: "Laboratory Automation",
    description:
      "Control, sensing and connectivity components for laboratory systems.",
    icon: "04",
  },
  {
    title: "Wearable Healthcare Devices",
    description:
      "Compact, low-power electronic components for connected wearable devices.",
    icon: "05",
  },
  {
    title: "Portable Medical Equipment",
    description:
      "Power and sensing components for portable healthcare equipment.",
    icon: "06",
  },
];

const categoryDetails: Record<
  string,
  { description: string; componentTypes: string }
> = {
  Oscillators: {
    description:
      "Timing references for clocks, control circuits and electronic systems.",
    componentTypes: "Clock sources · Timing",
  },
  "External/Internal DC DC Converters": {
    description:
      "DC-to-DC conversion components for power rails and embedded electronics.",
    componentTypes: "Voltage conversion · Power",
  },
  "Memory ICs Products": {
    description:
      "Memory devices for data storage, buffering and embedded applications.",
    componentTypes: "Memory · Data storage",
  },
  "Single Diodes": {
    description:
      "Discrete semiconductor devices for rectification and signal circuits.",
    componentTypes: "Rectification · Switching",
  },
  Unclassified: {
    description:
      "Additional catalogue components that may require specification-based identification.",
    componentTypes: "General components",
  },
  "TVS Diodes": {
    description:
      "Transient voltage suppression components for circuit protection designs.",
    componentTypes: "ESD · Surge protection",
  },
  FETs: {
    description:
      "Field-effect transistors used in switching and electronic control circuits.",
    componentTypes: "Discrete semiconductors",
  },
  MOSFETs: {
    description:
      "MOSFET devices for power switching and electronic control applications.",
    componentTypes: "Power · Switching",
  },
  "Power Management": {
    description:
      "Components for voltage regulation, power control and energy efficiency.",
    componentTypes: "Regulation · Power control",
  },
  MicroControllers: {
    description:
      "Embedded control devices for monitoring, processing and system management.",
    componentTypes: "Embedded control · Processing",
  },
  "Linear & Switching Voltage Regulators": {
    description:
      "Voltage regulation components for stable electronic power supplies.",
    componentTypes: "Linear · Switching regulators",
  },
};

// Use the exact slugs defined in your product catalogue.
// Update these values if your actual product routes use different slugs.
const categorySlugs: Record<string, string> = {
  Oscillators: "oscillators",
  "External/Internal DC DC Converters":
    "external-internal-dc-dc-converters",
  "Memory ICs Products": "memory-ics",
  "Single Diodes": "single-diodes",
  Unclassified: "unclassified",
  "TVS Diodes": "tvs-diodes",
  FETs: "fets",
  MOSFETs: "mosfets",
  "Power Management": "power-management",
  MicroControllers: "microcontrollers",
  "Linear & Switching Voltage Regulators":
    "linear-switching-voltage-regulators",
};

const categories = medicalCategories.map((title) => ({
  title,
  // Avoid inventing a category route if a slug has not been mapped.
  href: categorySlugs[title]
    ? `/products/${categorySlugs[title]}`
    : "/products",
  description:
    categoryDetails[title]?.description ??
    "Explore catalogue components relevant to electronic design and component sourcing.",
  componentTypes:
    categoryDetails[title]?.componentTypes ?? "Electronic components",
}));

export default function MedicalHealthcarePage() {
  return (
    <main className="min-h-screen bg-white">
      <ApplicationHero
        badge="Medical & Healthcare"
        title="Precision Electronics for Modern Healthcare"
        description="Explore electronic components, sensors, power solutions and semiconductor technologies for medical devices, diagnostic equipment and connected healthcare systems."
        image="/applications/medical-healthcare/hero.png"
        primaryHref="/contact?application=medical-healthcare"
        secondaryHref="/products"
      />

      <FeaturedProducts
        title="Featured Medical Components"
        subtitle="Explore electronic components for medical and healthcare equipment."
        products={medicalProducts}
      />

      <IndustryApplications
        title="Healthcare Applications We Support"
        subtitle="Explore component requirements across medical equipment and connected healthcare technologies."
        applications={medicalApplications}
      />

      <PopularCategories
        title="Relevant Categories for Medical Applications"
        subtitle="Browse component categories related to healthcare electronics, from semiconductor devices to power regulation and circuit protection."
        categories={categories}
      />

      <FeaturedManufacturers
        title="Medical Electronics Manufacturers"
        subtitle="Explore manufacturers represented in our medical component catalogue. Availability and sourcing are confirmed on enquiry."
        manufacturers={medicalManufacturers}
      />

      <WhyChooseIndustry
        title="Your Component Sourcing Partner for Healthcare Electronics"
        subtitle="Share part numbers or technical requirements with PowerWire Crafts to discuss sourcing options, availability and lead-time questions."
      />

      <IndustryCTA
        title="Need Components for Your Medical Device Project?"
        description="Send us your part numbers, component specifications or project requirements. Contact PowerWire Crafts to discuss sourcing options and availability."
      />
    </main>
  );
}
