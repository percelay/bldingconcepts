import {
  Building2,
  Car,
  GraduationCap,
  Dumbbell,
  ShoppingBag,
  Plane,
  Warehouse,
} from "lucide-react";

const expertiseAreas = [
  {
    title: "Commercial & Industrial Facilities",
    icon: Building2,
    description:
      "Large-scale commercial and industrial buildings engineered for performance and longevity.",
  },
  {
    title: "Auto Dealerships",
    icon: Car,
    description:
      "Showroom and service facilities designed to maximize visibility and customer experience.",
  },
  {
    title: "Schools / Educational",
    icon: GraduationCap,
    description:
      "Safe, durable educational facilities built to serve communities for generations.",
  },
  {
    title: "Gymnasium / Recreational Activity Buildings",
    icon: Dumbbell,
    description:
      "Wide clear-span interiors ideal for athletic and recreational programming.",
  },
  {
    title: "Strip Shopping Centers",
    icon: ShoppingBag,
    description:
      "Retail environments combining aesthetic appeal with structural efficiency.",
  },
  {
    title: "Airplane Hangers",
    icon: Plane,
    description:
      "Expansive clear-span structures engineered for aircraft storage and maintenance.",
  },
  {
    title: "Self Storage Facilities",
    icon: Warehouse,
    description:
      "Cost-effective, secure storage buildings that maximize rentable square footage.",
  },
];

export default function ExpertiseSection() {
  return (
    <section id="expertise" className="bg-offwhite py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-10 h-px bg-crimson" />
            <span className="text-crimson font-semibold text-xs tracking-[0.2em] uppercase">
              What We Build
            </span>
            <div className="w-10 h-px bg-crimson" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-navy leading-tight tracking-tight mb-6">
            Areas of Expertise
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            From commercial facilities to specialized structures, we deliver
            clear span buildings engineered to exceed expectations.
          </p>
        </div>

        {/* Expertise grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertiseAreas.map((area) => {
            const Icon = area.icon;
            return (
              <div
                key={area.title}
                className="group bg-white border border-gray-200 p-8 hover:border-crimson/30 hover:shadow-lg transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-navy/5 flex items-center justify-center mb-6 group-hover:bg-crimson/10 transition-colors">
                  <Icon
                    size={24}
                    className="text-navy group-hover:text-crimson transition-colors"
                  />
                </div>

                {/* Title */}
                <h3 className="text-navy font-bold text-lg leading-tight mb-3">
                  {area.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed">
                  {area.description}
                </p>
              </div>
            );
          })}

          {/* Photo placeholder card */}
          <div className="bg-navy/5 border-2 border-dashed border-navy/20 p-8 flex flex-col items-center justify-center text-center min-h-[220px]">
            <div className="w-16 h-16 border-2 border-navy/20 flex items-center justify-center mb-4">
              <div className="w-6 h-6 border-2 border-navy/30 rounded-sm" />
            </div>
            <p className="text-navy/40 text-sm font-medium uppercase tracking-widest">
              Project Photo
            </p>
            <p className="text-navy/25 text-xs mt-1">Recommended: 600×400px</p>
          </div>
        </div>
      </div>
    </section>
  );
}
