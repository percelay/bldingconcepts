"use client";

import { useState } from "react";
import { Phone, Mail, Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Expertise", href: "#expertise" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Top utility bar */}
      <div className="bg-navy text-white text-sm">
        <div className="max-w-7xl mx-auto px-6 py-2.5 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a
              href="tel:3022920200"
              className="flex items-center gap-2 hover:text-gold transition-colors"
            >
              <Phone size={13} />
              <span>(302) 292-0200</span>
            </a>
            <span className="hidden sm:inline text-white/20">|</span>
            <a
              href="tel:3022920201"
              className="hidden sm:flex items-center gap-2 hover:text-gold transition-colors"
            >
              <Phone size={13} />
              <span>(302) 292-0201</span>
            </a>
          </div>
          <a
            href="mailto:info@buildingconceptsofamerica.co"
            className="flex items-center gap-2 hover:text-gold transition-colors"
          >
            <Mail size={13} />
            <span className="hidden sm:inline">
              info@buildingconceptsofamerica.co
            </span>
            <span className="sm:hidden">Email Us</span>
          </a>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-white sticky top-0 z-50 border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="Building Concepts of America"
              width={72}
              height={72}
              className="h-18 w-auto"
              priority
            />
            <div className="hidden md:block">
              <div className="text-navy font-bold text-lg leading-tight tracking-tight">
                Building Concepts
              </div>
              <div className="text-crimson text-xs font-semibold uppercase tracking-widest">
                of America, INC
              </div>
            </div>
          </a>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-steel font-medium text-sm uppercase tracking-wide hover:text-crimson transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-crimson transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a
              href="#contact"
              className="ml-4 bg-crimson text-white px-6 py-2.5 text-sm font-semibold uppercase tracking-wide hover:bg-crimson-dark transition-colors"
            >
              Get Started
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-navy"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 pb-6">
            <div className="max-w-7xl mx-auto px-6 pt-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-steel font-medium text-sm uppercase tracking-wide py-2 border-b border-gray-100 hover:text-crimson transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="bg-crimson text-white px-6 py-3 text-sm font-semibold uppercase tracking-wide text-center hover:bg-crimson-dark transition-colors mt-2"
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
