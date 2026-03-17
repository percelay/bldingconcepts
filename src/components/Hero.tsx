import { ArrowRight, ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-navy min-h-[90vh] flex items-center overflow-hidden">
      {/* Background pattern — subtle diagonal stripes */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent, transparent 40px, white 40px, white 41px)",
        }}
      />

      {/* Accent bar top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-crimson via-gold to-crimson" />

      <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Text content */}
          <div className="animate-fade-in-up">
            {/* Logo */}
            <div className="mb-8">
              <Image
                src="/images/logo.png"
                alt="Building Concepts of America"
                width={120}
                height={120}
                className="h-28 w-auto"
                priority
              />
            </div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-1.5 mb-8">
              <span className="w-2 h-2 bg-crimson rounded-full" />
              <span className="text-white/80 text-xs font-semibold uppercase tracking-widest">
                Innovative Building Systems
              </span>
            </div>

            <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.08] tracking-tight mb-6">
              Welcome To
              <br />
              <span className="text-gold">Building Concepts</span>
              <br />
              of America, INC
            </h1>

            <p className="text-gray-300 text-lg sm:text-xl leading-relaxed max-w-xl mb-10">
              Innovative Building Systems offering affordable, high quality, and
              efficient clear span structures.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#services"
                className="group inline-flex items-center justify-center gap-3 bg-crimson text-white px-8 py-4 font-semibold text-sm uppercase tracking-wide hover:bg-crimson-dark transition-all"
              >
                View Our Services
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-3 border-2 border-white/30 text-white px-8 py-4 font-semibold text-sm uppercase tracking-wide hover:bg-white/10 hover:border-white/50 transition-all"
              >
                Contact Us
              </a>
            </div>

            {/* Stats bar */}
            <div className="flex flex-wrap gap-8 mt-14 pt-8 border-t border-white/10">
              <div>
                <div className="text-gold text-3xl font-black">100%</div>
                <div className="text-gray-400 text-xs uppercase tracking-widest mt-1">
                  Code Compliant
                </div>
              </div>
              <div>
                <div className="text-gold text-3xl font-black">35-Yr</div>
                <div className="text-gray-400 text-xs uppercase tracking-widest mt-1">
                  Paint Warranty
                </div>
              </div>
              <div>
                <div className="text-gold text-3xl font-black">Fast</div>
                <div className="text-gray-400 text-xs uppercase tracking-widest mt-1">
                  Construction
                </div>
              </div>
            </div>
          </div>

          {/* Right — Hero image */}
          <div className="animate-fade-in-up-delay-1 hidden lg:block">
            <div className="relative">
              <div className="aspect-[4/3] relative overflow-hidden border-2 border-white/10">
                <Image
                  src="/images/slide5.jpg"
                  alt="Building Concepts of America steel building project"
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
              </div>
              {/* Decorative accents */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-gold/30 -z-10" />
              <div className="absolute -top-4 -left-4 w-20 h-20 border-2 border-crimson/30 -z-10" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 hover:text-white/70 transition-colors animate-bounce"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  );
}
