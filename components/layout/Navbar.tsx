
"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown, ArrowUpRight } from "lucide-react";

import Container from "@/components/shared/Container";
import MegaMenu from "./MegaMenu";

const applications = [
  {
    label: "Medical & Healthcare",
    href: "/applications/medical-healthcare",
    description: "Solutions for medical devices.",
  },
  {
    label: "Automotive Electronics",
    href: "/applications/automotive-electronics",
    description: "Components for automotive systems.",
  },
  {
    label: "Telecommunications",
    href: "/applications/telecommunications",
    description: "Solutions for communication systems.",
  },
  {
    label: "Defense, Aerospace & Naval",
    href: "/applications/defense-aerospace-naval",
    description: "Components for specialized systems.",
  },
  {
    label: "Data Centers",
    href: "/applications/data-centers",
    description: "Products for data center infrastructure.",
  },
  {
    label: "EV Infrastructure",
    href: "/applications/ev-infrastructure",
    description: "Solutions for EV infrastructure.",
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

const navLink =
  "text-sm font-semibold text-[#10406F] transition-colors duration-200 hover:text-[#0B50B6]";

const dropdownLink =
  "group/item flex items-center justify-between gap-3 rounded-xl px-4 py-3 transition-colors hover:bg-[#F3F6FA]";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobileMenu = () => setMobileOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 shadow-sm backdrop-blur-md">
      <Container>
        <div className="flex min-h-20 items-center justify-between gap-4 py-3 lg:min-h-24">

          {/* Power Wire Crafts Brand */}
          <Link
            href="/"
            onClick={closeMobileMenu}
            aria-label="Power Wire Crafts Private Limited - Home"
            className="flex shrink-0 items-center"
          >
            <img
              src="/logo.png"
              alt="Power Wire Crafts Private Limited"
              className="h-14 w-auto max-w-[220px] object-contain sm:h-16 sm:max-w-[280px]"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-6 xl:gap-8 lg:flex"
          >
            {/* Products */}
            <div className="group relative py-3">
              <Link href="/products" className={navLink}>
                <span className="inline-flex items-center gap-1.5">
                  Products
                  <ChevronDown
                    size={15}
                    className="transition-transform group-hover:rotate-180"
                  />
                </span>
              </Link>

              <div className="invisible absolute left-0 top-full z-50 w-[min(90vw,760px)] translate-y-2 rounded-2xl border border-slate-200 bg-white p-3 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                <MegaMenu />
              </div>
            </div>

            {/* Applications */}
            <div className="group relative py-3">
              <button
                type="button"
                className={navLink}
                aria-haspopup="true"
              >
                <span className="inline-flex items-center gap-1.5">
                  Applications
                  <ChevronDown
                    size={15}
                    className="transition-transform group-hover:rotate-180"
                  />
                </span>
              </button>

              <div className="invisible absolute left-0 top-full z-50 w-80 translate-y-2 rounded-2xl border border-slate-200 bg-white p-3 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                <p className="px-4 pb-2 pt-3 text-xs font-bold uppercase tracking-[0.18em] text-[#0B50B6]">
                  Our Applications
                </p>

                {applications.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={dropdownLink}
                  >
                    <span>
                      <span className="block text-sm font-semibold text-[#10406F]">
                        {item.label}
                      </span>
                      <span className="mt-1 block text-xs leading-5 text-slate-500">
                        {item.description}
                      </span>
                    </span>

                    <ArrowUpRight
                      size={16}
                      className="shrink-0 text-[#0B50B6] opacity-0 transition group-hover/item:opacity-100"
                    />
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/pcb" className={navLink}>
              PCB
            </Link>

            {/* Services */}
            <div className="group relative py-3">
              <button
                type="button"
                className={navLink}
                aria-haspopup="true"
              >
                <span className="inline-flex items-center gap-1.5">
                  Services
                  <ChevronDown
                    size={15}
                    className="transition-transform group-hover:rotate-180"
                  />
                </span>
              </button>

              <div className="invisible absolute left-0 top-full z-50 w-80 translate-y-2 rounded-2xl border border-slate-200 bg-white p-3 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                <p className="px-4 pb-2 pt-3 text-xs font-bold uppercase tracking-[0.18em] text-[#0B50B6]">
                  Our Services
                </p>

                {services.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block rounded-xl px-4 py-3 text-sm font-medium text-[#10406F] transition-colors hover:bg-[#F3F6FA] hover:text-[#0B50B6]"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/about" className={navLink}>
              About Us
            </Link>

            <Link href="/contact" className={navLink}>
              Contact
            </Link>
          </nav>

          {/* Desktop CTA */}
          <Link
            href="/contact"
            className="hidden shrink-0 items-center gap-2 rounded-full bg-[#0B50B6] px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#10406F] hover:shadow-md lg:inline-flex"
          >
            Request Quote
            <ArrowUpRight size={16} />
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 text-[#10406F] transition-colors hover:bg-[#F3F6FA] lg:hidden"
            aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </Container>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-slate-200 bg-white shadow-lg lg:hidden"
        >
          <Container>
            <nav
              aria-label="Mobile navigation"
              className="flex max-h-[calc(100dvh-5rem)] flex-col gap-1 overflow-y-auto py-4"
            >
              <Link
                href="/products"
                onClick={closeMobileMenu}
                className="rounded-xl px-4 py-3 font-semibold text-[#10406F] hover:bg-[#F3F6FA]"
              >
                Products
              </Link>

              <div className="px-4 pb-1 pt-3 text-xs font-bold uppercase tracking-[0.18em] text-[#0B50B6]">
                Applications
              </div>

              {applications.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className="rounded-xl px-4 py-2.5 text-sm text-slate-600 transition-colors hover:bg-[#F3F6FA] hover:text-[#0B50B6]"
                >
                  {item.label}
                </Link>
              ))}

              <Link
                href="/pcb"
                onClick={closeMobileMenu}
                className="rounded-xl px-4 py-3 font-semibold text-[#10406F] hover:bg-[#F3F6FA]"
              >
                PCB
              </Link>

              <div className="px-4 pb-1 pt-3 text-xs font-bold uppercase tracking-[0.18em] text-[#0B50B6]">
                Services
              </div>

              {services.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className="rounded-xl px-4 py-2.5 text-sm text-slate-600 transition-colors hover:bg-[#F3F6FA] hover:text-[#0B50B6]"
                >
                  {item.label}
                </Link>
              ))}

              <Link
                href="/about"
                onClick={closeMobileMenu}
                className="rounded-xl px-4 py-3 font-semibold text-[#10406F] hover:bg-[#F3F6FA]"
              >
                About Us
              </Link>

              <Link
                href="/contact"
                onClick={closeMobileMenu}
                className="rounded-xl px-4 py-3 font-semibold text-[#10406F] hover:bg-[#F3F6FA]"
              >
                Contact
              </Link>

              <Link
                href="/contact"
                onClick={closeMobileMenu}
                className="mt-3 inline-flex items-center justify-center gap-2 rounded-xl bg-[#0B50B6] px-5 py-3.5 font-semibold text-white transition-colors hover:bg-[#10406F]"
              >
                Request Quote
                <ArrowUpRight size={18} />
              </Link>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}
