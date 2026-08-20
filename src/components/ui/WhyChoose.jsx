import React from "react";
import { ShieldCheck, Globe, Truck, Leaf } from "lucide-react";

/**
 * Ordered as a real shipment sequence — farm to doorstep — so the
 * numbering encodes something true rather than decorates.
 */
const data = [
  {
    icon: <Leaf size={22} />,
    stop: "01",
    stage: "Origin",
    title: "Premium Quality",
    desc: "High-quality agricultural and organic products, grown and milled to meet international export standards.",
    tag: "Standard · Grade A",
    accent: "#7C9473",
  },
  {
    icon: <ShieldCheck size={22} />,
    stop: "02",
    stage: "Quality control",
    title: "Certified Products",
    desc: "Processed under strict quality control and backed by international certifications.",
    tag: "ISO 22000 · FSSAI",
    accent: "#1B3025",
  },
  {
    icon: <Globe size={22} />,
    stop: "03",
    stage: "Port · loaded",
    title: "Global Export",
    desc: "Reliable export solutions serving customers across multiple countries and markets.",
    tag: "Reach · 15+ countries",
    accent: "#B08A3E",
  },
  {
    icon: <Truck size={22} />,
    stop: "04",
    stage: "Destination",
    title: "Fast Delivery",
    desc: "Efficient packaging and worldwide shipping, tracked door-to-port for every shipment.",
    tag: "Avg. transit · 18–25 days",
    accent: "#B54B32",
  },
];

const WhyChoose = () => {
  return (
    <section id="why-us" className="py-24 font-body" style={{ background: "var(--ivory)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <span
            className="font-mono inline-block text-[11px] uppercase tracking-[2.5px]"
            style={{ color: "var(--gold)" }}
          >
            Quality Manifest
          </span>

          <h2 className="font-display mt-5 text-4xl lg:text-5xl font-semibold leading-tight" style={{ color: "var(--ink)" }}>
            Delivering quality to the world
          </h2>

          <p className="mt-6 leading-8" style={{ color: "rgba(20,33,26,0.62)" }}>
            Dasa Exports is committed to supplying premium agricultural
            products with international quality standards, timely delivery,
            and exceptional customer satisfaction.
          </p>
        </div>

        {/* Four stops of a shipment, in order */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px mt-16 border" style={{ borderColor: "var(--line-light)", background: "var(--line-light)" }}>
          {data.map((item) => (
            <div key={item.title} className="p-8 pt-9" style={{ background: "var(--ivory)" }}>
              <div className="h-[3px] w-10 mb-8" style={{ background: item.accent }} />

              <div className="flex items-center justify-between">
                <div style={{ color: item.accent }}>{item.icon}</div>
                <span className="font-mono text-[11px] tracking-wider" style={{ color: "rgba(20,33,26,0.35)" }}>
                  {item.stop}
                </span>
              </div>

              <p className="font-mono text-[10px] uppercase tracking-[2px] mt-6" style={{ color: "rgba(20,33,26,0.4)" }}>
                Stop {item.stop} · {item.stage}
              </p>

              <h3 className="font-display text-xl font-semibold mt-2" style={{ color: "var(--ink)" }}>
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