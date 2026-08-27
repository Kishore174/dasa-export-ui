import React from "react";
import { ShieldCheck, Globe, Truck, Leaf, Clock, Package } from "lucide-react";

const data = [
  {
    icon: <Leaf size={22} />,
    title: "100% Pure & Natural",
    desc: "Made from hand picked fresh tomatoes with zero artificial colors or preservatives.",
    tag: "Zero Additives",
    accent: "#7C9473",
  },
  {
    icon: <Globe size={22} />,
    title: "Year-Round Consistent Supply",
    desc: "Backed by huge sourcing networks, we are fully capable of supplying bulk volumes uninterrupted throughout the year, even during off-seasons.",
    tag: "Bulk Volume",
    accent: "#B08A3E",
  },
  {
    icon: <ShieldCheck size={22} />,
    title: "International Standards",
    desc: "Sourced from certified facilities holding ISO 22000, HACCP, and FSSAI certifications.",
    tag: "ISO 22000 · FSSAI",
    accent: "#1B3025",
  },
  {
    icon: <Clock size={22} />,
    title: "Excellent Texture & Shelf-Life",
    desc: "Moisture level maintained below 4-5% to prevent caking, with a shelf life of 12-18 months.",
    tag: "12-18 Months",
    accent: "#B54B32",
  },
  {
    icon: <Package size={22} />,
    title: "Premium Packaging",
    desc: "Secured in bulk HDPE drums with inner food-grade aluminum barrier foil pouches.",
    tag: "HDPE Drums",
    accent: "#4A6FA5",
  },
];

const WhyChoose = () => {
  return (
    <section id="why-us" className="py-12 md:py-16 font-body" style={{ background: "var(--ivory)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <span
            className="font-mono inline-block text-[11px] uppercase tracking-[2.5px]"
            style={{ color: "var(--gold)" }}
          >
            Why Partner With Us
          </span>

          <h2 className="font-display mt-5 text-4xl lg:text-5xl font-semibold leading-tight" style={{ color: "var(--ink)" }}>
            Why Partner with Dasa Exports & Imports?
          </h2>

          <p className="mt-6 leading-8" style={{ color: "rgba(20,33,26,0.62)" }}>
            Dasa Exports is committed to supplying premium agricultural
            products with international quality standards, timely delivery,
            and exceptional customer satisfaction.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px mt-16 border" style={{ borderColor: "var(--line-light)", background: "var(--line-light)" }}>
          {data.map((item, i) => (
            <div key={item.title} className="p-8 pt-9" style={{ background: "var(--ivory)" }}>
              <div className="h-[3px] w-10 mb-8" style={{ background: item.accent }} />

              <div className="flex items-center justify-between">
                <div style={{ color: item.accent }}>{item.icon}</div>
                <span className="font-mono text-[11px] tracking-wider" style={{ color: "rgba(20,33,26,0.35)" }}>
                  0{i + 1}
                </span>
              </div>

              <h3 className="font-display text-xl font-semibold mt-8" style={{ color: "var(--ink)" }}>
                {item.title}
              </h3>

              <p className="mt-3 leading-7 text-[15px]" style={{ color: "rgba(20,33,26,0.62)" }}>
                {item.desc}
              </p>

              <p className="font-mono text-[10px] uppercase tracking-wider mt-6 pt-4 border-t" style={{ borderColor: "var(--line-light)", color: item.accent }}>
                {item.tag}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
