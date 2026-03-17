import { Quote, Star } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section className="bg-offwhite py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-10 h-px bg-crimson" />
            <span className="text-crimson font-semibold text-xs tracking-[0.2em] uppercase">
              Testimonials
            </span>
            <div className="w-10 h-px bg-crimson" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-navy leading-tight tracking-tight mb-6">
            What Our Clients Say
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Building lasting relationships through quality workmanship and
            dedicated service.
          </p>
        </div>

        {/* Testimonial placeholders */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 p-8 relative"
            >
              {/* Quote icon */}
              <Quote
                size={32}
                className="text-crimson/10 absolute top-6 right-6"
              />

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[0, 1, 2, 3, 4].map((star) => (
                  <Star
                    key={star}
                    size={14}
                    className="text-gold"
                    fill="currentColor"
                  />
                ))}
              </div>

              {/* Placeholder quote */}
              <div className="space-y-3 mb-8">
                <div className="h-3 bg-gray-100 rounded w-full" />
                <div className="h-3 bg-gray-100 rounded w-full" />
                <div className="h-3 bg-gray-100 rounded w-4/5" />
                <div className="h-3 bg-gray-100 rounded w-3/5" />
              </div>

              {/* Placeholder name */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                <div className="w-12 h-12 bg-navy/10 flex items-center justify-center">
                  <span className="text-navy/30 font-bold text-sm">
                    {String(index).padStart(2, "0")}
                  </span>
                </div>
                <div>
                  <div className="h-3 bg-gray-200 rounded w-28 mb-2" />
                  <div className="h-2 bg-gray-100 rounded w-20" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-gray-400 text-sm mt-10">
          Client testimonials coming soon.
        </p>
      </div>
    </section>
  );
}
