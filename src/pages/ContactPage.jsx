import React from "react";
import ContactSection from "../components/ui/ContactSection";
import RevealOnScroll from "../components/ui/RevealOnScroll";

const ContactPage = () => {
  return (
    <div className="font-body bg-white min-h-screen">
      {/* Page Header */}
      <section className="relative py-28 bg-[#0A1A0F] text-white overflow-hidden">
        {/* Bright Premium Photographic Background Image */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="/products/contact-premium-new.jpg"
            alt="Dasa Exports Headquarters"
            className="w-full h-full object-cover object-center"
          />
          {/* Clean left-to-right gradient to make text readable while keeping image bright and clear */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(10,26,15,0.95) 0%, rgba(10,26,15,0.7) 45%, transparent 100%)",
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 mt-10">
          <RevealOnScroll delay={0}>
            <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/10 border border-white/20 text-white font-eyebrow text-[11px] font-bold tracking-[0.25em] uppercase mb-6 shadow-md backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F4A62A] animate-pulse" />
              Direct Export Desk
            </span>
          </RevealOnScroll>

          <RevealOnScroll delay={100}>
            <h1 className="font-display text-4xl lg:text-5xl font-semibold mb-6">
              Contact DASA Exports
            </h1>
          </RevealOnScroll>

          <RevealOnScroll delay={200}>
            <p className="font-body-lg text-base lg:text-lg leading-8 text-[rgba(255,255,255,0.9)] max-w-2xl drop-shadow-md">
              Request bulk FOB/CIF price quotes, sample test kits, custom mesh size specifications, or schedule a facility tour. Our international team responds within 4 business hours.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Main Contact Section */}
      <ContactSection />
    </div>
  );
};

export default ContactPage;
