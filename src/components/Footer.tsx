import { Phone, Mail, MapPin, Star } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <Image
                src="/images/logo.png"
                alt="Building Concepts of America"
                width={40}
                height={40}
                className="h-10 w-auto brightness-0 invert"
              />
              <div>
                <div className="font-bold text-base leading-tight">
                  Building Concepts
                </div>
                <div className="text-crimson text-[10px] font-semibold uppercase tracking-widest">
                  of America, INC
                </div>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Innovative Building Systems offering affordable, high quality, and
              efficient clear span structures.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.14em] text-white/40 font-bold mb-5">
              Services
            </h3>
            <div className="space-y-3">
              {[
                "Pre-Engineered Steel Buildings",
                "Standing Seam Metal Roofs",
                "Retro-Fit Roof Systems",
                "Metal Wall Panels",
                "Design / Build",
              ].map((service) => (
                <a
                  key={service}
                  href="#services"
                  className="block text-sm text-white/60 hover:text-gold transition-colors"
                >
                  {service}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.14em] text-white/40 font-bold mb-5">
              Quick Links
            </h3>
            <div className="space-y-3">
              {[
                { label: "About Us", href: "#about" },
                { label: "Areas of Expertise", href: "#expertise" },
                { label: "Our Services", href: "#services" },
                { label: "Contact Us", href: "#contact" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-sm text-white/60 hover:text-gold transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.14em] text-white/40 font-bold mb-5">
              Contact
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin
                  size={16}
                  className="text-gold shrink-0 mt-0.5"
                />
                <span className="text-sm text-white/60 leading-relaxed">
                  101 Peoples Drive
                  <br />
                  Newark Industrial Park
                  <br />
                  Newark, Delaware 19702
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-gold shrink-0" />
                <div className="space-y-1">
                  <a
                    href="tel:3022920200"
                    className="block text-sm text-white/60 hover:text-gold transition-colors"
                  >
                    (302) 292-0200
                  </a>
                  <a
                    href="tel:3022920201"
                    className="block text-sm text-white/60 hover:text-gold transition-colors"
                  >
                    (302) 292-0201
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-gold shrink-0" />
                <a
                  href="mailto:info@buildingconceptsofamerica.co"
                  className="text-sm text-white/60 hover:text-gold transition-colors"
                >
                  info@buildingconceptsofamerica.co
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs">
            &copy; {year} Building Concepts of America, INC. All rights
            reserved.
          </p>
          <div className="flex items-center gap-2 text-white/30">
            <Star size={10} fill="currentColor" />
            <span className="text-xs">
              Newark, Delaware
            </span>
            <Star size={10} fill="currentColor" />
          </div>
        </div>
      </div>
    </footer>
  );
}
