
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Mail,
  Phone,
  ArrowUpRight,
} from "lucide-react";

import Container from "@/components/shared/Container";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "PCB Services", href: "/pcb" },
  { label: "Contact", href: "/contact" },
];

const industries = [
  {
    label: "Medical & Healthcare",
    href: "/applications/medical-healthcare",
  },
  {
    label: "Automotive Electronics",
    href: "/applications/automotive-electronics",
  },
  {
    label: "Telecommunications",
    href: "/applications/telecommunications",
  },
  {
    label: "Defense, Aerospace & Naval",
    href: "/applications/defense-aerospace-naval",
  },
  {
    label: "Data Centers",
    href: "/applications/data-centers",
  },
  {
    label: "EV Infrastructure",
    href: "/applications/ev-infrastructure",
  },
];

const services = [
  {
    label: "Hard-to-Find Sourcing",
    href: "/services/hard-to-find-sourcing",
  },
  {
    label: "Risk Control & Quality Assurance",
    href: "/services/risk-control-quality-assurance",
  },
  {
    label: "Global Supply Chain Access",
    href: "/services/global-supply-chain-access",
  },
  {
    label: "Engineered Alternatives",
    href: "/services/engineered-alternatives",
  },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  {
    label: "Terms & Conditions",
    href: "/terms-and-conditions",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#10406F] text-white">
      {/* Main Footer */}
      <Container>
        <div className="grid gap-x-10 gap-y-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1.2fr_1.1fr_1.3fr] lg:gap-8 lg:py-20">

          {/* Company Information */}
          <div>
            <Link
              href="/"
              aria-label="Power Wire Crafts Private Limited - Home"
              className="inline-flex rounded-lg bg-white p-2"
            >
              <Image
                src="/logo.png"
                alt="Power Wire Crafts Private Limited"
                width={280}
                height={118}
                className="h-auto w-[220px] object-contain"
              />
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-blue-100/85">
              POWERWIRE CRAFTS PRIVATE LIMITED is committed to
              delivering reliable products and professional service.
              Contact our team to discuss your business requirements.
            </p>

            <div className="mt-6 h-1 w-16 rounded-full bg-[#E9B747]" />
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-6 text-base font-bold text-white">
              Quick Links
            </h4>

            <ul className="space-y-3.5">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-1.5 text-sm text-blue-100/80 transition-colors hover:text-[#E9B747]"
                  >
                    {item.label}
                    <ArrowUpRight
                      size={13}
                      className="opacity-0 transition-opacity group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="mb-6 text-base font-bold text-white">
              Industries
            </h4>

            <ul className="space-y-3.5">
              {industries.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm leading-6 text-blue-100/80 transition-colors hover:text-[#E9B747]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-6 text-base font-bold text-white">
              Services
            </h4>

            <ul className="space-y-3.5">
              {services.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm leading-6 text-blue-100/80 transition-colors hover:text-[#E9B747]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="mb-6 text-base font-bold text-white">
              Get in Touch
            </h4>

            <ul className="space-y-6">

              {/* Address */}
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-[#E9B747]">
                  <MapPin size={18} />
                </span>

                <div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-blue-200">
                    Registered Business Address
                  </p>

                  <address className="text-sm not-italic leading-6 text-blue-100/90">
                    Plot 45/P,
                    <br />
                    Electronic Complex,
                    <br />
                    Nagaram Road, Kapra,
                    <br />
                    Hyderabad, Medchal-Malkajgiri,
                    <br />
                    Telangana - 500062, India.
                  </address>
                </div>
              </li>

              {/* Email */}
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-[#E9B747]">
                  <Mail size={18} />
                </span>

                <div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-blue-200">
                    Email
                  </p>

                  <a
                    href="mailto:sales@powerwirecrafts.com"
                    className="break-all text-sm text-blue-100/90 transition-colors hover:text-[#E9B747]"
                  >
                    sales@powerwirecrafts.com
                  </a>
                </div>
              </li>

              {/* Phone */}
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-[#E9B747]">
                  <Phone size={18} />
                </span>

                <div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-blue-200">
                    Phone
                  </p>

                  <a
                    href="tel:+917207218811"
                    className="text-sm text-blue-100/90 transition-colors hover:text-[#E9B747]"
                  >
                    +91 72072 18811
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      {/* Copyright and Legal Links */}
      <div className="border-t border-white/15">
        <Container>
          <div className="flex flex-col items-center justify-between gap-4 py-6 text-center md:flex-row md:text-left">
            <p className="text-xs leading-6 text-blue-100/70">
             © 2026 POWERWIRE CRAFTS PRIVATE LIMITED. All Rights Reserved.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              {legalLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-xs text-blue-100/70 transition-colors hover:text-[#E9B747]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
