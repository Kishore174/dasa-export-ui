import React, { useState } from "react";
import { Star, Quote, ShieldCheck, ChevronLeft, ChevronRight, Globe, Award } from "lucide-react";

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
    avatarBg: "linear-gradient(135deg, #1D3624, #28452F)",
    initials: "HM",
    quote:
      "DASA Exports consistently delivers exceptional purity and vibrant color. Their moringa powder strictly complies with EU Organic standards with zero chemical residues. Delivery to Hamburg Port has been 100% on schedule across all 12 shipments this year.",
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
    avatarBg: "linear-gradient(135deg, #C43E2A, #9A3020)",
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
    avatarBg: "linear-gradient(135deg, #E3A62F, #B87C1D)",
    initials: "SJ",
    quote:
      "Partnering with DASA Exports transformed our raw botanical sourcing. High-curcumin turmeric and beetroot powder arrive in double-sealed moisture-proof aluminum barrier drums. Outstanding professionalism!",
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
    avatarBg: "linear-gradient(135deg, #8FAE6B, #4A6B29)",
    initials: "KT",
    quote:
      "Japanese food import safety regulations are among the strictest globally. DASA Exports passed our comprehensive independent laboratory testing on the very first attempt with pristine microbial purity test reports.",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const active = testimonials[activeIndex];

  return (
    <section
      id="testimonials"
      className="relative py-28 font-body overflow-hidden"
      style={{ background: "var(--forest-950, #122318)" }}
    >
      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-32 right-0 w-[35rem] h-[35rem] rounded-full opacity-15 blur-3xl"
          style={{ background: "var(--turmeric, #E3A62F)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-[30rem] h-[30rem] rounded-full opacity-15 blur-3xl"
          style={{ background: "var(--tomato, #C43E2A)" }}
        />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(246,239,222,0.8) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span
            className="font-mono inline-flex items-center gap-2 px-4 py-2 rounded-full border text-[11px] uppercase tracking-[3px]"
            style={{ borderColor: "rgba(246,239,222,0.2)", color: "var(--turmeric, #E3A62F)" }}
          >
            <Globe size={13} />
            Global Buyer Reviews
          </span>

          <h2
            className="font-display text-4xl lg:text-5xl font-semibold mt-6"
            style={{ color: "var(--cream, #F6EFDE)" }}
          >
            Trusted by food importers in 15+ countries
          </h2>

          <p
            className="mt-6 text-base lg:text-lg leading-8"
            style={{ color: "rgba(246,239,222,0.7)" }}
          >
            Discover why food processing plants, ingredient distributors, and spice brands worldwide rely on DASA Exports for consistent agricultural quality.
          </p>

          {/* Trade-route strip — the same four buyer countries, connected like a shipping lane */}
          <div className="flex items-center justify-center gap-3 mt-8 flex-wrap">
            {testimonials.map((t, idx) => (
              <React.Fragment key={t.id}>
                <button
                  onClick={() => setActiveIndex(idx)}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all duration-300 font-mono text-[11px] tracking-wider"
                  style={{
                    borderColor: idx === activeIndex ? "var(--turmeric, #E3A62F)" : "rgba(246,239,222,0.18)",
                    background: idx === activeIndex ? "rgba(227,166,47,0.12)" : "transparent",
                    color: idx === activeIndex ? "var(--turmeric, #E3A62F)" : "rgba(246,239,222,0.55)",
                  }}
                >
                  <span className="text-base leading-none">{t.flag}</span>
                  {t.location.split(",")[1]?.trim() || t.location}
                </button>
                {idx < testimonials.length - 1 && (
                  <span
                    className="hidden sm:block w-6 border-t border-dashed"
                    style={{ borderColor: "rgba(246,239,222,0.2)" }}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Featured Testimonial Card */}
        <div className="mt-12 max-w-5xl mx-auto">
          <div
            className="relative rounded-[32px] border p-8 md:p-14 backdrop-blur-xl shadow-2xl transition-all duration-500"
            style={{
              background: "rgba(29, 54, 36, 0.55)",
              borderColor: "rgba(246,239,222,0.15)",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
            }}
          >
            {/* Quote Icon watermark */}
            <Quote
              size={120}
              className="absolute top-6 right-8 opacity-[0.06] pointer-events-none"
              style={{ color: "var(--cream, #F6EFDE)" }}
            />

            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
              {/* Rating stars */}
              <div className="flex items-center gap-1.5">
                {[...Array(active.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="fill-current"
                    style={{ color: "var(--turmeric, #E3A62F)" }}
                  />
                ))}
              </div>

              {/* Verified badge */}
              <span
                className="font-mono text-[11px] uppercase tracking-wider px-3.5 py-1.5 rounded-full border flex items-center gap-1.5"
                style={{
                  borderColor: "rgba(143,174,107,0.4)",
                  color: "var(--moringa, #8FAE6B)",
                  background: "rgba(143,174,107,0.1)",
                }}
              >
                <ShieldCheck size={14} />
                {active.batch}
              </span>
            </div>

            {/* Testimonial Quote */}
            <p
              className="font-display text-xl md:text-2xl leading-relaxed italic"
              style={{ color: "var(--cream, #F6EFDE)" }}
            >
              &ldquo;{active.quote}&rdquo;
            </p>

            {/* Author info & navigation */}
            <div className="mt-10 pt-8 border-t flex flex-col md:flex-row md:items-center justify-between gap-6"
              style={{ borderColor: "rgba(246,239,222,0.12)" }}
            >
              <div className="flex items-center gap-4">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center font-display text-lg font-bold text-white shadow-lg shrink-0 border-2"
                  style={{ background: active.avatarBg, borderColor: "var(--turmeric, #E3A62F)" }}
                >
                  {active.initials}
                </div>
                <div>
                  <h4
                    className="font-display text-lg font-semibold flex items-center gap-2"
                    style={{ color: "var(--cream, #F6EFDE)" }}
                  >
                    {active.name} <span className="text-xl">{active.flag}</span>
                  </h4>
                  <p className="text-xs md:text-sm" style={{ color: "rgba(246,239,222,0.65)" }}>
                    {active.role} · <span style={{ color: "var(--turmeric, #E3A62F)" }}>{active.company}</span>
                  </p>
                  <p className="font-mono text-[11px] mt-1" style={{ color: "rgba(246,239,222,0.45)" }}>
                    Imports: {active.product} ({active.location})
                  </p>
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center gap-3 self-end md:self-auto">
                <button
                  onClick={prevTestimonial}
                  aria-label="Previous Testimonial"
                  className="w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 hover:bg-white/10"
                  style={{ borderColor: "rgba(246,239,222,0.25)", color: "var(--cream, #F6EFDE)" }}
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextTestimonial}
                  aria-label="Next Testimonial"
                  className="w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 hover:bg-white/10"
                  style={{ borderColor: "rgba(246,239,222,0.25)", color: "var(--cream, #F6EFDE)" }}
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Dots navigation */}
          <div className="flex justify-center items-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                aria-label={`Go to testimonial ${idx + 1}`}
                className="h-2 rounded-full transition-all duration-300"
                style={{
                  width: idx === activeIndex ? "32px" : "8px",
                  background: idx === activeIndex ? "var(--tomato, #C43E2A)" : "rgba(246,239,222,0.25)",
                }}
              />
            ))}
          </div>
        </div>

        {/* Global Statistics Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-20">
          {[
            {
              icon: Award,
              number: "99.8%",
              title: "Quality Pass Rate",
              desc: "Tested by SGS & Geo-Chem laboratories prior to port dispatch.",
            },
            {
              icon: Globe,
              number: "100%",
              title: "Export Compliance",
              desc: "Fully compliant with US FDA, EU Phytosanitary, & APEDA regulations.",
            },
            {
              icon: ShieldCheck,
              number: "15+ Countries",
              title: "Global Footprint",
              desc: "Delivering across Europe, Middle East, North America, and Asia-Pacific.",
            },
          ].map((stat, i) => (
            <div
              key={i}
              className="rounded-[24px] border p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "rgba(29, 54, 36, 0.3)",
                borderColor: "rgba(246,239,222,0.1)",
              }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mb-6 border"
                style={{
                  borderColor: "rgba(227,166,47,0.3)",
                  background: "rgba(227,166,47,0.1)",
                  color: "var(--turmeric, #E3A62F)",
                }}
              >
                <stat.icon size={22} />
              </div>
              <h3 className="font-display text-3xl font-semibold text-[#F6EFDE]">
                {stat.number}
              </h3>
              <p className="font-mono text-xs uppercase tracking-wider mt-1" style={{ color: "var(--turmeric, #E3A62F)" }}>
                {stat.title}
              </p>
              <p className="text-sm mt-3 leading-relaxed" style={{ color: "rgba(246,239,222,0.6)" }}>
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;