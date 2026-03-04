const manufacturers = [
  "Shaw Floors",
  "Mohawk",
  "Mannington",
  "COREtec",
  "Karastan",
  "Armstrong Flooring",
  "Tarkett",
  "Stanton",
  "Daltile",
  "Bruce Hardwood",
];

export default function ManufacturersSection() {
  return (
    <section className="bg-primary py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-8 h-px bg-accent" />
          <span className="text-accent font-semibold text-xs tracking-[0.18em] uppercase">
            Manufacturers
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tight mb-12">
          Brands We Work With
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {manufacturers.map((name) => (
            <div
              key={name}
              className="bg-white/10 border border-white/20 rounded-sm px-4 py-4 text-center"
            >
              <span className="text-white font-semibold text-sm">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
