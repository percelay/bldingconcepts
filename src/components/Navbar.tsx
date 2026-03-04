import Link from "next/link";
import { Facebook, MapPin, Phone } from "lucide-react";

export default function Navbar() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b"
      style={{
        backgroundColor: "color-mix(in oklab, #fff7ec 85%, transparent)",
        borderBottomColor: "rgba(28, 28, 28, 0.12)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center shrink-0">
            <span className="text-white font-black text-[11px] tracking-tight">
              JM
            </span>
          </div>
          <div className="flex flex-col leading-none gap-0.5">
            <span className="text-text-main font-black text-[15px] tracking-tight leading-none">
              JM Carpet
              <span className="text-primary">Express</span>
            </span>
            <span className="text-text-main/40 font-semibold text-[9px] tracking-[0.15em] uppercase leading-none">
              Inc.
            </span>
          </div>
        </Link>

        {/* Right: quick links + phone CTA */}
        <div className="flex items-center gap-3 md:gap-5">
          <a
            href="https://www.google.com/maps/place/JM+Carpet+Express+Inc/data=!4m2!3m1!1s0x0:0x67ac49f7a6f4fa47?sa=X&ved=1t:2428&ictx=111"
            target="_blank"
            rel="noreferrer"
            className="hidden lg:inline-flex items-center gap-1.5 text-text-main/65 font-semibold text-sm hover:text-primary transition-colors duration-200"
          >
            <MapPin size={14} className="shrink-0" />
            Directions
          </a>
          <a
            href="https://www.facebook.com/p/JM-Carpet-Express-Inc-100063619538083/"
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex items-center gap-1.5 text-text-main/65 font-semibold text-sm hover:text-primary transition-colors duration-200"
          >
            <Facebook size={14} className="shrink-0" />
            Facebook
          </a>
          <a
            href="tel:9734421182"
            className="hidden md:block text-text-main/65 font-semibold text-sm hover:text-primary transition-colors duration-200"
          >
            973-442-1182
          </a>
          <a
            href="tel:9734421182"
            className="flex items-center gap-2 bg-primary text-white px-4 py-2.5 rounded-sm font-bold text-sm transition-all duration-200 hover:bg-primary/80"
          >
            <Phone size={13} className="shrink-0" />
            <span>Call Now</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
