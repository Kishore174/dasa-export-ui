import React from "react";
import { Sprout, Factory, ShieldCheck, PackageCheck, Ship } from "lucide-react";

const process = [
  {
    id: "01",
    icon: Sprout,
    title: "Procurement",
    desc: "We source fresh agricultural products directly from trusted farms.",
    accent: "#8FAE6B",
  },
  {
    id: "02",
    icon: Factory,
    title: "Processing",
    desc: "Products are cleaned, processed, and prepared under hygienic conditions.",
    accent: "#B3AC4C",
  },
  
  {
    id: "03",
    icon: ShieldCheck,
    title: "Quality check",
    desc: "Every batch undergoes strict quality inspection before packaging.",
    accent: "#E3A62F",
  },
  {
    id: "04",
    icon: PackageCheck,
    title: "Packaging",
    desc: "Export-grade packaging ensures freshness and product safety.",
    accent: "#D17A2E",
  },
  {
    id: "05",
    icon: Ship,
    title: "Worldwide export",
    desc: "Products are shipped safely to customers around the globe.",
    accent: "#C43E2A",
  },
];

const ExportProcess = () => {
  return (
    <section
      className="relative py-28 font-body overflow-hidden"
      style={{ background: "linear-gradient(to bottom, var(--cream, #F6EFDE), #FFFFFF)" }}
    >
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <span
            className="font-mono inline-flex items-center gap-2 px-4 py-2 rounded-full border text-[11px] uppercase tracking-[3px]"
            style={{ borderColor: "rgba(13,24,16,0.15)", color: "var(--tomato-dark, #9A3020)" }}
          >
            Export Route
          </span>

          <h2
            className="font-display text-4xl lg:text-5xl font-semibold mt-6"
            style={{ color: "var(--ink, #0D1810)" }}
          >
            From farm to global markets
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            Every product moves through five checkpoints — sourced, processed
            and inspected before it ever leaves for port.
          </p>
        </div>

        {/* Route */}
        <div className="relative mt-24">
          {/* Dashed shipping-route line */}
          <div
            className="hidden lg:block absolute top-9 left-[10%] right-[10%] h-px"
            style={{
              backgroundImage:
                "repeating-linear-gradient(90deg, rgba(13,24,16,0.25) 0 8px, transparent 8px 16px)",
            }}
          />

          <div className="grid lg:grid-cols-5 gap-8 relative">
            {process.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.id} className="group relative">
                  {/* Checkpoint stamp */}
                  <div
                    className="mx-auto w-[4.5rem] h-[4.5rem] rounded-full bg-white border-2 border-dashed flex items-center justify-center relative z-10 transition-transform duration-300 group-hover:scale-110"
                    style={{ borderColor: item.accent }}
                  >
                    <Icon size={26} style={{ color: item.accent }} />
                  </div>

                  {/* Card */}
                  <div
                    className="mt-8 rounded-[24px] bg-white border p-7 transition-all duration-500 group-hover:-translate-y-2"
                    style={{ borderColor: "rgba(13,24,16,0.08)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.boxShadow = `0 20px 40px -16px ${item.accent}45`)}
                    onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
                  >
                    <span
                      className="font-mono text-[11px] uppercase tracking-wider"
                      style={{ color: item.accent }}
                    >
                      Step {item.id} / 05
                    </span>

                    <h3
                      className="font-display text-xl font-semibold mt-3"
                      style={{ color: "var(--ink, #0D1810)" }}
                    >
                      {item.title}
                    </h3>

                    <p className="text-gray-600 mt-3 leading-7 text-[15px]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExportProcess;