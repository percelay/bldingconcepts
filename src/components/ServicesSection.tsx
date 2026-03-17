import { ArrowRight } from "lucide-react";
import Image from "next/image";

const services = [
  {
    number: "01",
    title: "Pre-Engineered Steel Buildings",
    description:
      "Long-term value combining style, function, fast construction, and affordability with lasting quality. Features wide interior clear spans, unobstructed by columns. Meets or exceeds all building code specifications with a shorter construction time cycle.",
    features: [
      "Wide interior clear spans",
      "Unobstructed by columns",
      "Meets all building codes",
      "Shorter construction cycle",
    ],
    image: "/images/slide5.jpg",
    alt: "Pre-engineered steel building by Building Concepts of America",
  },
  {
    number: "02",
    title: "Standing Seam Metal Roofs",
    description:
      "Designed and crafted to provide durable, weathertight coverage for a lifespan measured in decades. Enhances thermal efficiency and utilizes a system of sliding clips to accommodate changing weather conditions.",
    features: [
      "Decades-long lifespan",
      "Weathertight coverage",
      "Enhanced thermal efficiency",
      "Sliding clip system",
    ],
    image: "/images/standing seam.jpg",
    alt: "Standing seam metal roof installation",
  },
  {
    number: "03",
    title: "Retro-Fit Metal Roof Systems",
    description:
      "Overcomes modern building design challenges with light-gauge sub-framing systems. Allows roof slope changes economically and can be mounted over existing roof decks without interrupting building activities below.",
    features: [
      "Light-gauge sub-framing",
      "Economical slope changes",
      "Mounts over existing decks",
      "No activity interruption",
    ],
    image: "/images/retrofit metal roof.jpeg",
    alt: "Retro-fit metal roof system installation",
  },
  {
    number: "04",
    title: "Pre-Formed Metal Wall Panels",
    description:
      "Most economic wall system offering aesthetic flexibility and design. Provides unsurpassed performance, appearance, and value, practically maintenance-free with a 35-year paint finish warranty.",
    features: [
      "Aesthetic flexibility",
      "Maintenance-free",
      "35-year paint warranty",
      "Unsurpassed performance",
    ],
    image: "/images/Preformed-Metal-Wall-Panel-1.jpg",
    alt: "Pre-formed metal wall panel system",
  },
  {
    number: "05",
    title: "Design / Build",
    description:
      "Collaborative in-house process turning initial ideas and sketches into a finished site. Includes real-time cost estimating, local building code compliance, permit navigation, and highly skilled supervision to ensure projects remain on schedule and within budget.",
    features: [
      "Real-time cost estimating",
      "Building code compliance",
      "Permit navigation",
      "Skilled supervision",
    ],
    image: "/images/design+build.jpg",
    alt: "Design and build process by Building Concepts of America",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="max-w-3xl mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-px bg-crimson" />
            <span className="text-crimson font-semibold text-xs tracking-[0.2em] uppercase">
              Our Services
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-navy leading-tight tracking-tight mb-6">
            Comprehensive Building
            <br />
            <span className="text-crimson">Solutions</span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            From pre-engineered steel structures to complete design/build
            services, we provide end-to-end solutions for every project.
          </p>
        </div>

        {/* Services list */}
        <div className="space-y-0">
          {services.map((service, index) => (
            <article
              key={service.number}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 py-16 ${
                index !== services.length - 1
                  ? "border-b border-gray-200"
                  : ""
              }`}
            >
              {/* Number + Title */}
              <div className="lg:col-span-4">
                <div className="flex items-start gap-4">
                  <span className="text-crimson/20 font-black text-5xl leading-none select-none">
                    {service.number}
                  </span>
                  <div className="pt-1">
                    <h3 className="text-navy font-black text-2xl md:text-3xl leading-tight tracking-tight">
                      {service.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Description + Features */}
              <div className="lg:col-span-5">
                <p className="text-gray-600 text-base leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Feature tags */}
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="bg-offwhite text-navy text-xs font-semibold px-3 py-1.5 border border-gray-200"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Service photo */}
              <div className="lg:col-span-3 flex items-center">
                <div className="w-full aspect-[4/3] relative overflow-hidden border border-gray-200">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-20 bg-navy p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-white text-2xl md:text-3xl font-black tracking-tight mb-2">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-400 text-base">
              Let our experienced team help you plan, design, and construct your
              new building.
            </p>
          </div>
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 bg-crimson text-white px-8 py-4 font-semibold text-sm uppercase tracking-wide hover:bg-crimson-dark transition-colors shrink-0"
          >
            Contact Us Today
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
