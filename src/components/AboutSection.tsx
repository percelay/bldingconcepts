import Image from "next/image";
import { Star } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Star divider */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="flex-1 max-w-[120px] h-px bg-gray-300" />
          <Star size={16} className="text-gold" fill="currentColor" />
          <div className="flex-1 max-w-[120px] h-px bg-gray-300" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Image */}
          <div className="relative animate-fade-in-up">
            <div className="aspect-[4/3] relative overflow-hidden">
              <Image
                src="/images/slide6.jpg"
                alt="Building Concepts of America team at work"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            {/* Accent element */}
            <div className="absolute -bottom-6 -left-6 bg-crimson px-8 py-6 hidden md:block">
              <div className="text-white text-3xl font-black leading-none">
                BCA
              </div>
              <div className="text-white/70 text-xs uppercase tracking-widest mt-1">
                Est. Newark, DE
              </div>
            </div>
          </div>

          {/* Right — Text */}
          <div>
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-px bg-crimson" />
              <span className="text-crimson font-semibold text-xs tracking-[0.2em] uppercase">
                About Our Company
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-navy leading-[1.1] tracking-tight mb-8">
              &ldquo;Our Business Is
              <br />
              <span className="text-crimson">Building Your Business.&rdquo;</span>
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-lg">
              We take pride in our work. Our experienced staff is ready to help
              you plan, design and construct your new building. From initial
              concept through final construction, we deliver innovative building
              systems that combine affordability with lasting quality.
            </p>

            {/* Value props */}
            <div className="grid grid-cols-2 gap-6 mt-10 pt-8 border-t border-gray-200">
              <div>
                <div className="text-navy font-black text-2xl">Expert</div>
                <div className="text-gray-500 text-sm mt-1">
                  Planning & Design
                </div>
              </div>
              <div>
                <div className="text-navy font-black text-2xl">Quality</div>
                <div className="text-gray-500 text-sm mt-1">
                  Construction Standards
                </div>
              </div>
              <div>
                <div className="text-navy font-black text-2xl">Efficient</div>
                <div className="text-gray-500 text-sm mt-1">
                  Build Timelines
                </div>
              </div>
              <div>
                <div className="text-navy font-black text-2xl">Affordable</div>
                <div className="text-gray-500 text-sm mt-1">
                  Project Budgets
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
