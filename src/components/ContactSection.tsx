"use client";

import { FormEvent, useState } from "react";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.currentTarget.reset();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-10 h-px bg-crimson" />
            <span className="text-crimson font-semibold text-xs tracking-[0.2em] uppercase">
              Get In Touch
            </span>
            <div className="w-10 h-px bg-crimson" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-navy leading-tight tracking-tight">
            Contact Us
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left — Contact info + Map */}
          <div>
            {/* Contact cards */}
            <div className="space-y-6 mb-10">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-navy flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="text-navy font-bold text-sm uppercase tracking-wide mb-1">
                    Our Location
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    101 Peoples Drive
                    <br />
                    Newark Industrial Park
                    <br />
                    Newark, Delaware 19702
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-navy flex items-center justify-center shrink-0">
                  <Phone size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="text-navy font-bold text-sm uppercase tracking-wide mb-1">
                    Phone
                  </h3>
                  <div className="space-y-1">
                    <a
                      href="tel:3022920200"
                      className="block text-gray-600 hover:text-crimson transition-colors"
                    >
                      (302) 292-0200
                    </a>
                    <a
                      href="tel:3022920201"
                      className="block text-gray-600 hover:text-crimson transition-colors"
                    >
                      (302) 292-0201
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-navy flex items-center justify-center shrink-0">
                  <Mail size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="text-navy font-bold text-sm uppercase tracking-wide mb-1">
                    Email
                  </h3>
                  <a
                    href="mailto:info@buildingconceptsofamerica.co"
                    className="text-gray-600 hover:text-crimson transition-colors"
                  >
                    info@buildingconceptsofamerica.co
                  </a>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="relative border border-gray-200 overflow-hidden h-[280px]">
              <iframe
                title="Building Concepts of America location"
                src="https://www.google.com/maps?q=101+Peoples+Drive+Newark+Delaware+19702&output=embed"
                loading="lazy"
                className="absolute inset-0 w-full h-full border-0"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right — Contact form */}
          <div>
            <div className="bg-offwhite border border-gray-200 p-8 md:p-10">
              <h3 className="text-navy font-black text-2xl tracking-tight mb-2">
                Send Us a Message
              </h3>
              <p className="text-gray-500 text-sm mb-8">
                Tell us about your project and we&apos;ll get back to you
                promptly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-xs font-semibold uppercase tracking-[0.12em] text-gray-500 mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      className="w-full border border-gray-300 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs font-semibold uppercase tracking-[0.12em] text-gray-500 mb-2"
                    >
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      className="w-full border border-gray-300 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold uppercase tracking-[0.12em] text-gray-500 mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="w-full border border-gray-300 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="serviceType"
                    className="block text-xs font-semibold uppercase tracking-[0.12em] text-gray-500 mb-2"
                  >
                    Service Interest
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    className="w-full border border-gray-300 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-colors"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option>Pre-Engineered Steel Buildings</option>
                    <option>Standing Seam Metal Roofs</option>
                    <option>Retro-Fit Metal Roof Systems</option>
                    <option>Pre-Formed Metal Wall Panels</option>
                    <option>Design / Build</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold uppercase tracking-[0.12em] text-gray-500 mb-2"
                  >
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full border border-gray-300 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-colors"
                    placeholder="Building size, location, timeline, and any other details..."
                  />
                </div>

                <button
                  type="submit"
                  className="group w-full bg-crimson text-white px-6 py-4 font-semibold text-sm uppercase tracking-wide hover:bg-crimson-dark transition-colors flex items-center justify-center gap-3"
                >
                  Send Message
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>

                {submitted && (
                  <p className="text-sm text-navy font-semibold text-center pt-2">
                    Thank you for your inquiry. We will follow up promptly.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
