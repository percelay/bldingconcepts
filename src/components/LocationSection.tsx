import { Facebook, MapPin } from "lucide-react";

export default function LocationSection() {
  return (
    <section className="bg-surface/45 py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        <div className="bg-white border border-text-main/10 rounded-xl p-7 md:p-8">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px bg-accent" />
            <span className="text-accent font-semibold text-xs tracking-[0.18em] uppercase">
              Visit and Connect
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-black text-text-main leading-tight tracking-tight mb-4">
            Find JM Carpet Express Inc
          </h2>

          <p className="text-text-main/70 leading-relaxed mb-7 max-w-md">
            Use the map to get directions and follow us on Facebook for project
            updates and recent work photos.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://www.google.com/maps/place/JM+Carpet+Express+Inc/data=!4m2!3m1!1s0x0:0x67ac49f7a6f4fa47?sa=X&ved=1t:2428&ictx=111"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-sm font-black text-sm tracking-[0.08em] uppercase hover:bg-primary/85 transition-colors duration-200"
            >
              <MapPin size={15} />
              Open in Google Maps
            </a>
            <a
              href="https://www.facebook.com/p/JM-Carpet-Express-Inc-100063619538083/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-text-main/20 text-text-main px-6 py-3 rounded-sm font-semibold text-sm hover:border-primary hover:text-primary transition-colors duration-200"
            >
              <Facebook size={15} />
              Facebook Page
            </a>
          </div>
        </div>

        <div className="relative rounded-xl overflow-hidden border border-text-main/10 min-h-[320px]">
          <iframe
            title="Map showing JM Carpet Express Inc"
            src="https://www.google.com/maps?q=JM+Carpet+Express+Inc&output=embed"
            loading="lazy"
            className="absolute inset-0 w-full h-full border-0"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
