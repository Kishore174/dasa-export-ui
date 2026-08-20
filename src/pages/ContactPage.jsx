import React from "react";
import ContactSection from "../components/ui/ContactSection";
import { MessageSquare } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="pt-[72px] font-body bg-white min-h-screen">
      {/* Page Header */}
      <section className="relative py-28 bg-[#0A1A0F] text-white overflow-hidden">
        {/* AI Generated Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/contact-hero-bg.jpg"
            alt="International Export Headquarters Office"
            className="w-full h-full object-cover object-center scale-105"
            style={{ filter: "brightness(0.7) contrast(1.1)" }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(10,26,15,0.94) 0%, rgba(15,35,22,0.85) 50%, rgba(10,26,15,0.92) 100%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, rgba(176,138,62,0.15) 0%, transparent 60%)",
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <span className="font-mono inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[rgba(201,168,76,0.3)] bg-[rgba(201,168,76,0.08)] text-[10.5px] uppercase tracking-[2.5px] text-[var(--gold)] mb-4">
            <MessageSquare size={13} />
            Direct Export Desk
          </span>

          <h1 className="font-display text-4xl lg:text-5xl font-semibold">
            Contact DASA Exports
          </h1>

          <p className="mt-4 text-base lg:text-lg leading-8 text-[rgba(255,255,255,0.78)] max-w-2xl">
            Request bulk FOB/CIF price quotes, sample test kits, custom mesh size specifications, or schedule a facility tour. Our international team responds within 4 business hours.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <ContactSection />
    </div>
  );
};

export default ContactPage;
