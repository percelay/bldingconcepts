"use client";

import { FormEvent, useState } from "react";

export default function QuoteFormSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.currentTarget.reset();
    setSubmitted(true);
  };

  return (
    <section id="request-quote" className="bg-bg py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-accent" />
              <span className="text-accent font-semibold text-xs tracking-[0.18em] uppercase">
                Request a Quote
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-text-main leading-tight tracking-tight mb-6">
              Tell Us About Your Project
            </h2>

            <p className="text-text-main/70 text-lg leading-relaxed mb-5 max-w-lg">
              Share a few project details and we will follow up to schedule your
              estimate.
            </p>

            <p className="text-sm text-text-main/70">
              Prefer to talk now? Call{" "}
              <a
                href="tel:9734421182"
                className="font-black text-primary hover:text-accent transition-colors duration-200"
              >
                973-442-1182
              </a>
              .
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white border border-text-main/10 rounded-xl p-6 md:p-8 space-y-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-xs font-semibold uppercase tracking-[0.12em] text-text-main/60 mb-2"
                >
                  Full Name
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  className="w-full border border-text-main/15 rounded-sm px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-xs font-semibold uppercase tracking-[0.12em] text-text-main/60 mb-2"
                >
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  className="w-full border border-text-main/15 rounded-sm px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-xs font-semibold uppercase tracking-[0.12em] text-text-main/60 mb-2"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full border border-text-main/15 rounded-sm px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <div>
              <label
                htmlFor="serviceType"
                className="block text-xs font-semibold uppercase tracking-[0.12em] text-text-main/60 mb-2"
              >
                Service Type
              </label>
              <select
                id="serviceType"
                name="serviceType"
                className="w-full border border-text-main/15 rounded-sm px-3 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/20"
                defaultValue=""
              >
                <option value="" disabled>
                  Select a service
                </option>
                <option>Carpet Installation</option>
                <option>Hardwood Installation</option>
                <option>Vinyl / LVT Installation</option>
                <option>Tile Installation</option>
                <option>Commercial Project</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-xs font-semibold uppercase tracking-[0.12em] text-text-main/60 mb-2"
              >
                Project Details
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full border border-text-main/15 rounded-sm px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="Square footage, timeline, and any material preferences."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white px-6 py-3 rounded-sm font-black text-sm tracking-[0.08em] uppercase hover:bg-primary/85 transition-colors duration-200"
            >
              Send Quote Request
            </button>

            {submitted ? (
              <p className="text-sm text-primary font-semibold">
                Thanks, your quote request has been captured. We will follow up
                soon.
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
}
