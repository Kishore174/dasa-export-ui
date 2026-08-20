import React, { useState } from "react";
import { Star, Quote, ShieldCheck, ChevronLeft, ChevronRight, Globe, Award, CheckCircle2 } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Hans Mueller",
    role: "Director of Quality Assurance",
    company: "Bavaria Spice & Food GmbH",
    location: "Munich, Germany",
    flag: "🇩🇪",
    product: "Organic Moringa & Turmeric Powder",
    batch: "EXPORT BATCH #DE-8921",
    rating: 5,
    avatarBg: "linear-gradient(135deg, #1B3025, #223A2C)",
    initials: "HM",
    quote:
      "DASA Exports consistently delivers exceptional purity and vibrant color. Their moringa powder strictly complies with EU Organic standards with zero chemical residues. Delivery to Hamburg Port has been on schedule across all 12 shipments this year.",
  },
  {
    id: 2,
    name: "Tariq Al-Mansoor",
    role: "Head of Ingredient Procurement",
    company: "Gulf Food Processing LLC",
    location: "Dubai, UAE",
    flag: "🇦🇪",
    product: "Dehydrated Tomato & Onion Powder",
    batch: "EXPORT BATCH #UAE-4012",
    rating: 5,
    avatarBg: "linear-gradient(135deg, #B54B32, #8C3A26)",
    initials: "TM",
    quote:
      "The aroma, solubility, and natural color retention of DASA's spray-dried tomato powder are unmatched in the regional market. Their export logistics team handles phytosanitary certificates and APEDA paperwork seamlessly.",
  },
  {
    id: 3,
    name: "Sarah Jenkins",
    role: "Global Supply Chain Lead",
    company: "NaturaBlend Ingredients Inc.",
    location: "Chicago, USA",
    flag: "🇺🇸",
    product: "Cold-Milled Beetroot & Garlic Powder",
    batch: "EXPORT BATCH #US-7734",
    rating: 5,
    avatarBg: "linear-gradient(135deg, #B08A3E, #8C6E2F)",
    initials: "SJ",
    quote:
      "Partnering with DASA Exports transformed our raw botanical sourcing. High-curcumin turmeric and beetroot powder arrive in double-sealed moisture-proof aluminum barrier drums. Outstanding professionalism.",
  },
  {
    id: 4,
    name: "Kenji Takahashi",
    role: "Import Purchasing Manager",
    company: "Kyoto Botanical Imports",
    location: "Osaka, Japan",
    flag: "🇯🇵",
    product: "Premium Garlic & Spice Powders",
    batch: "EXPORT BATCH #JP-1092",
    rating: 5,
    avatarBg: "linear-gradient(135deg, #7C9473, #5C7256)",
    initials: "KT",
    quote:
      "Japanese food import safety regulations are among the strictest globally. DASA Exports passed our comprehensive independent laboratory testing on the first attempt with pristine microbial purity test reports.",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const active = testimonials[activeIndex];

  return (
    <section id="testimonials" className="py-24 font-body relative overflow-hidden" style={{ background: "#FFFFFF" }}>
      {/* Background ambient grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(20,33,26,0.8) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center">
          <span
            className="font-mono inline-flex items-center gap-2 px-4 py-2 rounded-full border text-[11px] uppercase tracking-[2.5px]"
            style={{
              borderColor: "rgba(176,138,62,0.3)",
              color: "var(--gold)",
              background: "rgba(176,138,62,0.06)",
            }}
          >
            <Globe size={13} />
            Global Buyer Verification
          </span>

          <h2 className="font-display text-4xl lg:text-5xl font-semibold mt-5" style={{ color: "var(--ink)" }}>
            Trusted by importers in 15+ countries
          </h2>

          <p className="mt-6 text-base lg:text-lg leading-8" style={{ color: "rgba(20,33,26,0.68)" }}>
            Food processing plants, ingredient distributors, and spice brands worldwide rely on DASA Exports for consistent agricultural quality.
          </p>

          {/* Country selector */}
          <div className="flex items-center justify-center gap-2.5 mt-8 flex-wrap">
            {testimonials.map((t, idx) => (
              <button
                key={t.id}
                onClick={() => setActiveIndex(idx)}
                className="flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-200 font-mono text-[11px] tracking-wider"
                style={{
                  borderColor: idx === activeIndex ? "var(--gold)" : "rgba(20,33,26,0.12)",
                  background: idx === activeIndex ? "var(--ink)" : "#F9FAFB",
                  color: idx === activeIndex ? "#FFFFFF" : "rgba(20,33,26,0.7)",
                  boxShadow: idx === activeIndex ? "0 4px 12px rgba(20,33,26,0.15)" : "none",
                }}
              >
                <span className="text-base leading-none">{t.flag}</span>
                {t.location.split(",")[1]?.trim() || t.location}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Testimonial Card */}
        <div className="mt-14 max-w-5xl mx-auto">
          <div
            className="relative rounded-3xl border p-8 md:p-14 shadow-2xl transition-all duration-300 overflow-hidden"
            style={{
              background: "#FFFFFF",
              borderColor: "rgba(20,33,26,0.1)",
              boxShadow: "0 25px 60px -15px rgba(20,33,26,0.08)",
            }}
          >
            <Quote size={120} className="absolute -top-4 -right-4 opacity-[0.04] pointer-events-none" style={{ color: "var(--ink)" }} />

            {/* Rating & Batch Badge */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
              <div className="flex items-center gap-1.5">
                {[...Array(active.rating)].map((_, i) => (
                  <Star key={i} size={20} className="fill-current" style={{ color: "var(--gold)" }} />
                ))}
              </div>

              <span
                className="font-mono text-[11px] uppercase tracking-wider px-4 py-1.5 rounded-full border flex items-center gap-2"
                style={{
                  borderColor: "rgba(124,148,115,0.3)",
                  color: "var(--forest)",
                  background: "rgba(124,148,115,0.08)",
                }}
              >
                <ShieldCheck size={15} style={{ color: "var(--sage)" }} />
                {active.batch}
              </span>
            </div>

            {/* Quote Text */}
            <p className="font-display text-xl md:text-2xl lg:text-[1.65rem] leading-relaxed font-normal" style={{ color: "var(--ink)" }}>
              &ldquo;{active.quote}&rdquo;
            </p>

            {/* Author Info & Navigation Controls */}
            <div
              className="mt-10 pt-8 border-t flex flex-col md:flex-row md:items-center justify-between gap-6"
              style={{ borderColor: "rgba(20,33,26,0.08)" }}
            >
              <div className="flex items-center gap-4">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center font-display text-lg font-bold shrink-0 shadow-md text-white"
                  style={{ background: active.avatarBg }}
                >
                  {active.initials}
                </div>
                <div>
                  <h4 className="font-display text-lg font-semibold flex items-center gap-2" style={{ color: "var(--ink)" }}>
                    {active.name} <span className="text-xl">{active.flag}</span>
                  </h4>
                  <p className="text-xs md:text-sm font-medium" style={{ color: "rgba(20,33,26,0.7)" }}>
                    {active.role} · <span style={{ color: "var(--gold)" }}>{active.company}</span>
                  </p>
                  <p className="font-mono text-[11px] mt-0.5" style={{ color: "rgba(20,33,26,0.45)" }}>
                    Sourced: {active.product} ({active.location})
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 self-end md:self-auto">
                <button
                  onClick={prevTestimonial}
                  aria-label="Previous testimonial"
                  className="w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-200 hover:bg-gray-100 hover:scale-105 active:scale-95"
                  style={{ borderColor: "rgba(20,33,26,0.15)", color: "var(--ink)", background: "#FFFFFF" }}
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextTestimonial}
                  aria-label="Next testimonial"
                  className="w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-200 hover:bg-gray-100 hover:scale-105 active:scale-95"
                  style={{ borderColor: "rgba(20,33,26,0.15)", color: "var(--ink)", background: "#FFFFFF" }}
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center items-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                aria-label={`Go to testimonial ${idx + 1}`}
                className="h-2 rounded-full transition-all duration-300"
                style={{
                  width: idx === activeIndex ? "32px" : "8px",
                  background: idx === activeIndex ? "var(--terracotta)" : "rgba(20,33,26,0.18)",
                }}
              />
            ))}
          </div>
        </div>

        {/* Trust Metrics Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {[
            { icon: Award, number: "99.8%", title: "Quality Pass Rate", desc: "Tested by SGS & Geo-Chem laboratories prior to port dispatch." },
            { icon: Globe, number: "100%", title: "Export Compliance", desc: "Fully compliant with US FDA, EU Phytosanitary, & APEDA regulations." },
            { icon: ShieldCheck, number: "15+ Countries", title: "Global Footprint", desc: "Delivering across Europe, Middle East, North America, and Asia-Pacific." },
          ].map((stat, i) => (
            <div
              key={i}
              className="rounded-2xl border p-8 transition-all duration-300 hover:shadow-lg"
              style={{
                background: "#FFFFFF",
                borderColor: "rgba(20,33,26,0.08)",
                boxShadow: "0 10px 30px -10px rgba(20,33,26,0.04)",
              }}
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 border"
                style={{
                  borderColor: "rgba(176,138,62,0.25)",
                  background: "rgba(176,138,62,0.08)",
                  color: "var(--gold)",
                }}
              >
                <stat.icon size={22} />
              </div>
              <h3 className="font-display text-3xl font-bold" style={{ color: "var(--ink)" }}>{stat.number}</h3>
              <p className="font-mono text-xs uppercase tracking-wider mt-1" style={{ color: "var(--gold)" }}>{stat.title}</p>
              <p className="text-sm mt-3 leading-relaxed" style={{ color: "rgba(20,33,26,0.65)" }}>{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;