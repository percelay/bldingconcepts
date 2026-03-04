import Image from "next/image";

const galleryPhotos = [
  {
    src: "/images/gal1.jpg",
    alt: "Completed flooring project by JM Carpet Express Inc",
  },
  {
    src: "/images/gal2.jpg",
    alt: "Hardwood and trim detail by JM Carpet Express Inc",
  },
  {
    src: "/images/gal3.jpg",
    alt: "Commercial flooring installation by JM Carpet Express Inc",
  },
  {
    src: "/images/lvt.jpg",
    alt: "Luxury vinyl flooring installed by JM Carpet Express Inc",
  },
  {
    src: "/images/lvt2.jpg",
    alt: "Patterned vinyl floor installation by JM Carpet Express Inc",
  },
  {
    src: "/images/woods.jpg",
    alt: "Refinished wood flooring project by JM Carpet Express Inc",
  },
];

export default function GallerySection() {
  return (
    <section className="bg-surface/30 py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-8 h-px bg-accent" />
          <span className="text-accent font-semibold text-xs tracking-[0.18em] uppercase">
            Recent Work
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-text-main leading-tight tracking-tight mb-12">
          A Look at Our Best Installations
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryPhotos.map((photo, index) => (
            <article
              key={photo.src}
              className={`relative overflow-hidden rounded-xl border border-text-main/10 ${
                index === 0 ? "col-span-2 lg:col-span-2" : "col-span-1"
              }`}
            >
              <div
                className={`relative ${
                  index === 0 ? "aspect-[16/9]" : "aspect-[4/5]"
                }`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
