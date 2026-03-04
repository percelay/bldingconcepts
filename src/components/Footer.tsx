import { Facebook, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-text-main text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center shrink-0">
                <span className="text-white font-black text-[11px] tracking-tight">
                  JM
                </span>
              </div>
              <div>
                <p className="font-black text-lg leading-none">JM Carpet Express</p>
                <p className="text-white/50 text-xs uppercase tracking-[0.12em]">
                  Flooring Services
                </p>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm">
              Residential and commercial flooring installation across New
              Jersey.
            </p>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.14em] text-white/60 font-black mb-4">
              Quick Links
            </h3>
            <div className="space-y-3">
              <a
                href="#request-quote"
                className="block text-sm text-white/80 hover:text-accent transition-colors duration-200"
              >
                Request a Quote
              </a>
              <a
                href="https://www.google.com/maps/place/JM+Carpet+Express+Inc/data=!4m2!3m1!1s0x0:0x67ac49f7a6f4fa47?sa=X&ved=1t:2428&ictx=111"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-accent transition-colors duration-200"
              >
                <MapPin size={14} />
                Google Maps
              </a>
              <a
                href="https://www.facebook.com/p/JM-Carpet-Express-Inc-100063619538083/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-accent transition-colors duration-200"
              >
                <Facebook size={14} />
                Facebook
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.14em] text-white/60 font-black mb-4">
              Contact
            </h3>
            <a
              href="tel:9734421182"
              className="inline-flex items-center gap-2 text-white font-semibold hover:text-accent transition-colors duration-200"
            >
              <Phone size={14} />
              973-442-1182
            </a>
            <p className="text-white/50 text-sm mt-3">
              Call for project scheduling and estimates.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/35 text-xs">
            © {year} JM Carpet Express Inc. All rights reserved.
          </p>
          <p className="text-white/35 text-xs">Licensed and insured in NJ.</p>
        </div>
      </div>
    </footer>
  );
}
