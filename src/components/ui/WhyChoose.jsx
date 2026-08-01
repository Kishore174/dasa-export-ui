import React from "react";
import { ShieldCheck, Globe, Truck, Leaf } from "lucide-react";

/**
 * Ordered as a real shipment sequence — farm to doorstep — so the
 * "01 / 02 / 03 / 04" markers encode something true rather than decorate.
 */
const data = [
  {
    icon: <Leaf size={26} />,
    stop: "01",
    stage: "Origin",
    title: "Premium Quality",
    desc: "High-quality agricultural and organic products, grown and milled to meet international export standards.",
    tag: "Standard · Grade A",
    accent: "#8FAE6B", // moringa
    rotate: "-3deg",
  },
  {
    icon: <ShieldCheck size={26} />,
    stop: "02",
    stage: "Quality control",
    title: "Certified Products",
    desc: "Processed under strict quality control and backed by international certifications.",
    tag: "ISO 22000 · FSSAI",
    accent: "#1D3624", // forest
    rotate: "3deg",
  },
  {
    icon: <Globe size={26} />,
    stop: "03",
    stage: "Port · loaded",
    title: "Global Export",
    desc: "Reliable export solutions serving customers across multiple countries and markets.",
    tag: "Reach · 15+ countries",
    accent: "#E3A62F", // turmeric
    rotate: "2deg",
  },
  {
    icon: <Truck size={26} />,
    stop: "04",
    stage: "Destination",
    title: "Fast Delivery",
    desc: "Efficient packaging and worldwide shipping, tracked door-to-port for every shipment.",
    tag: "Avg. transit · 18–25 days",
    accent: "#C43E2A", // tomato
    rotate: "-2deg",
  },
];

const WhyChoose = () => {
  return (
    <section
      id="why-us"
      className="relative py-28 font-body overflow-hidden"
      style={{ background: "var(--cream, #F6EFDE)" }}
    >
      {/* Faint dot texture, echoing the hero */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(13,24,16,0.8) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <span
            className="font-mono inline-flex items-center gap-2 px-4 py-2 rounded-full border text-[11px] uppercase tracking-[3px]"
            style={{ borderColor: "rgba(13,24,16,0.15)", color: "var(--tomato-dark, #9A3020)" }}
          >
            Quality Manifest
          </span>

          <h2
            className="font-display mt-6 text-4xl lg:text-5xl font-semibold leading-tight"
            style={{ color: "var(--ink, #0D1810)" }}
          >
            Delivering quality to the world
          </h2>

          <p className="mt-6 leading-8 text-gray-600">
            Dasa Export is committed to supplying premium agricultural
            products with international quality standards, timely
            delivery, and exceptional customer satisfaction.
          </p>
        </div>

        {/* Route rail — the four stops of a real shipment, in order */}
        <div className="relative mt-20">
          <div
            className="hidden md:block absolute left-0 right-0 border-t-2 border-dashed"
            style={{ top: "72px", borderColor: "rgba(13,24,16,0.15)" }}
            aria-hidden="true"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.map((item) => (
              <div
                key={item.title}
                className="group relative bg-white p-8 pt-10 rounded-[24px] border transition-all duration-300 hover:-translate-y-2"
                style={{
                  borderColor: "rgba(13,24,16,0.08)",
                  boxShadow: "0 1px 2px rgba(13,24,16,0.04)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.boxShadow = `0 20px 40px -12px ${item.accent}40`)}
                onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 1px 2px rgba(13,24,16,0.04)")}
              >
                {/* Perforated top edge, like a torn manifest stub */}
                <div
                  className="absolute top-0 left-6 right-6 h-px"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(90deg, rgba(13,24,16,0.18) 0 6px, transparent 6px 12px)",
                  }}
                />

                <div className="flex items-center justify-between">
                  {/* Stamp-style icon badge, doubles as a route node */}
                  <div
                    className="relative z-10 w-16 h-16 rounded-full border-2 border-dashed flex items-center justify-center transition-transform duration-300 group-hover:scale-105 bg-white"
                    style={{
                      borderColor: item.accent,
                      color: item.accent,
                      transform: `rotate(${item.rotate})`,
                    }}
                  >
                    {item.icon}
                  </div>

                  <span
                    className="font-mono text-[11px] tracking-wider px-2.5 py-1 rounded-full border"
                    style={{ color: item.accent, borderColor: `${item.accent}55` }}
                  >
                    {item.stop}
                  </span>
                </div>

                <p
                  className="font-mono text-[10px] uppercase tracking-[2px] mt-6"
                  style={{ color: "rgba(13,24,16,0.4)" }}
                >
                  Stop {item.stop} · {item.stage}
                </p>

                <h3
                  className="font-display text-xl font-semibold mt-2"
                  style={{ color: "var(--ink, #0D1810)" }}
                >
                  {item.title}
                </h3>

                <p className="text-gray-600 mt-3 leading-7 text-[15px]">
                  {item.desc}
                </p>

                <p
                  className="font-mono text-[10px] uppercase tracking-wider mt-5 pt-4 border-t"
                  style={{ borderColor: "rgba(13,24,16,0.08)", color: item.accent }}
                >
                  {item.tag}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;