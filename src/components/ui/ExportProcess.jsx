import React, { useState } from "react";
import { Sprout, Factory, ShieldCheck, PackageCheck, Ship, ArrowRight, CheckCircle2, ChevronRight, Award } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Farm Sourcing & Harvest",
    stage: "Soil to Harvest",
    shortDesc: "Direct farm sourcing from certified growers.",
    fullDesc: "Direct contract farming with certified agricultural partners across South India. Raw harvests undergo immediate field inspections for moisture, aroma, and pesticide compliance right at the farm gate.",
    metrics: ["100% Farm Traceable", "Direct Sourcing", "Pesticide-Free Standard"],
    badge: "Check-in #01 · Origin",
    accent: "#8FAE6B", // Moringa Green
    icon: Sprout,
    image: "/process/farm-sourcing.jpg",
  },
  {
    id: "02",
    title: "Hygienic Milling & Processing",
    stage: "Dehydration & Milling",
    shortDesc: "Low-temp spray drying & cold milling.",
    fullDesc: "State-of-the-art cold-milling and spray-drying technology preserves active curcumin, essential oils, vibrant natural colors, and nutritional density without thermal degradation.",
    metrics: ["Cold-Milled Tech", "Zero Artificial Color", "GMP Clean Facility"],
    badge: "Check-in #02 · Facility",
    accent: "#E3A62F", // Gold / Turmeric
    icon: Factory,
    image: "/process/milling-facility.jpg",
  },
  {
    id: "03",
    title: "Rigorous Quality & Lab Clearance",
    stage: "Microbial & Purity Testing",
    shortDesc: "Multi-point SGS laboratory validation.",
    fullDesc: "Every production batch undergoes comprehensive multi-point laboratory analysis by SGS and Geo-Chem for heavy metals, microbial counts, moisture percentage, and active ingredient potency.",
    metrics: ["SGS & Geo-Chem Tested", "99.8% Quality Pass Rate", "Phytosanitary Ready"],
    badge: "Check-in #03 · Quality Gate",
    accent: "#B08A3E", // Brass Gold
    icon: ShieldCheck,
    image: "/process/quality-lab.jpg",
  },
  {
    id: "04",
    title: "Export Barrier Packaging",
    stage: "Moisture & Vacuum Sealing",
    shortDesc: "Multi-layer foil bags in fiber drums.",
    fullDesc: "Packed in multi-layer aluminum barrier vacuum bags sealed inside heavy-duty HDPE fiber drums and corrugated boxes to withstand humidity during multi-week ocean transit.",
    metrics: ["Moisture Proof Barrier", "25kg / 50kg Export Drums", "Palletized & Strapped"],
    badge: "Check-in #04 · Packaging",
    accent: "#C17A3E", // Spice Terracotta
    icon: PackageCheck,
    image: "/process/barrier-packaging.jpg",
  },
  {
    id: "05",
    title: "Maritime Freight & Customs Dispatch",
    stage: "Global Port Shipping",
    shortDesc: "FOB / CIF shipments to 15+ countries.",
    fullDesc: "Dispatched from primary seaports (Tuticorin VOC, Chennai, Cochin) with complete export paperwork — Bill of Lading, APEDA certificate, Phytosanitary, and Certificate of Origin.",
    metrics: ["Tuticorin & Chennai Ports", "Complete APEDA Paperwork", "Door-to-Port Tracked"],
    badge: "Check-in #05 · Destination Port",
    accent: "#C43E2A", // Tomato Red
    icon: Ship,
    image: "/process/maritime-shipping.jpg",
  },
];

const ExportProcess = () => {
  const [activeStep, setActiveStep] = useState(0);
  const current = steps[activeStep];
  const IconComponent = current.icon;

  return (
    <section id="process" className="py-12 md:py-16 font-body relative overflow-hidden" style={{ background: "#0A1A0F" }}>
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45rem] h-[25rem] rounded-full opacity-[0.12] blur-[120px] pointer-events-none"
        style={{ background: current.accent }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 border-b border-[rgba(255,255,255,0.12)]">
          <div className="max-w-2xl">
            <span
              className="font-mono inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-[10.5px] uppercase tracking-[2.5px] mb-4"
              style={{
                borderColor: "rgba(201,168,76,0.3)",
                color: "var(--gold)",
                background: "rgba(201,168,76,0.06)",
              }}
            >
              <Award size={13} />
              Export Route Pipeline
            </span>

            <h2 className="font-display text-4xl lg:text-5xl font-semibold tracking-tight" style={{ color: "#FFFFFF" }}>
              From farm to global seaports
            </h2>

            <p className="mt-4 leading-8 text-base text-[rgba(255,255,255,0.7)]">
              Every shipment follows a strict 5-stage quality pipeline — rigorously tested, packaged, and verified before leaving port.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : steps.length - 1))}
              className="px-4 py-2.5 rounded-lg border text-xs font-mono uppercase tracking-wider text-white border-[rgba(255,255,255,0.2)] transition-colors hover:bg-white/10"
            >
              Prev Stage
            </button>
            <button
              onClick={() => setActiveStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0))}
              className="px-4 py-2.5 rounded-lg border text-xs font-mono uppercase tracking-wider text-white border-[rgba(201,168,76,0.4)] bg-[rgba(201,168,76,0.15)] transition-colors hover:bg-[rgba(201,168,76,0.25)]"
              style={{ color: "var(--gold)" }}
            >
              Next Stage
            </button>
          </div>
        </div>

        {/* Timeline Navigation Strip (Desktop & Mobile) */}
        <div className="mt-12 relative">
          {/* Progress Connecting Line */}
          <div className="hidden lg:block absolute top-[28px] left-[5%] right-[5%] h-[2px] bg-[rgba(255,255,255,0.12)]">
            <div
              className="h-full transition-all duration-500 rounded-full"
              style={{
                width: `${(activeStep / (steps.length - 1)) * 100}%`,
                background: `linear-gradient(90deg, #8FAE6B, ${current.accent})`,
              }}
            />
          </div>

          <div className="grid grid-cols-5 gap-3 lg:gap-6 relative">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isActive = idx === activeStep;

              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(idx)}
                  className="flex flex-col items-center text-center group cursor-pointer focus:outline-none"
                >
                  {/* Step Node Icon */}
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center relative z-10 transition-all duration-300 ${
                      isActive ? "scale-110 shadow-xl" : "hover:scale-105 opacity-70 group-hover:opacity-100"
                    }`}
                    style={{
                      background: isActive ? step.accent : "rgba(255,255,255,0.06)",
                      color: isActive ? "#FFFFFF" : "rgba(255,255,255,0.8)",
                      boxShadow: isActive ? `0 10px 25px ${step.accent}55` : "none",
                      border: `1px solid ${isActive ? step.accent : "rgba(255,255,255,0.15)"}`,
                    }}
                  >
                    <Icon size={22} />
                  </div>

                  <span
                    className="font-mono text-[10px] uppercase tracking-wider mt-3"
                    style={{ color: isActive ? step.accent : "rgba(255,255,255,0.4)" }}
                  >
                    Step {step.id}
                  </span>

                  <span
                    className="font-display text-xs lg:text-sm font-medium mt-1 hidden sm:block line-clamp-1"
                    style={{ color: isActive ? "#FFFFFF" : "rgba(255,255,255,0.6)" }}
                  >
                    {step.stage}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Featured Active Stage Showcase */}
        <div className="mt-14">
          <div
            className="rounded-3xl border p-8 lg:p-12 transition-all duration-500 relative overflow-hidden backdrop-blur-xl"
            style={{
              background: "linear-gradient(135deg, rgba(15,35,22,0.92) 0%, rgba(20,45,28,0.95) 100%)",
              borderColor: `${current.accent}66`,
              boxShadow: `0 20px 50px rgba(0,0,0,0.5), 0 0 30px ${current.accent}15`,
            }}
          >
            {/* Top Badge */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <span
                className="font-mono text-[11px] uppercase tracking-[2px] px-3.5 py-1.5 rounded-full border"
                style={{
                  borderColor: `${current.accent}55`,
                  color: current.accent,
                  background: `${current.accent}15`,
                }}
              >
                {current.badge}
              </span>

              <span className="font-mono text-xs text-[rgba(255,255,255,0.4)]">
                Stage {activeStep + 1} of {steps.length}
              </span>
            </div>

            <div className="grid lg:grid-cols-12 gap-8 items-center">
              {/* Left Column Text & Details */}
              <div className="lg:col-span-7">
                <h3 className="font-display text-3xl lg:text-4xl font-semibold" style={{ color: "#FFFFFF" }}>
                  {current.title}
                </h3>

                <p className="mt-4 leading-8 text-base lg:text-lg text-[rgba(255,255,255,0.8)]">
                  {current.fullDesc}
                </p>

                {/* Metrics Pill Grid */}
                <div className="mt-8 pt-6 border-t border-[rgba(255,255,255,0.1)]">
                  <p className="font-mono text-[10px] uppercase tracking-[2px] mb-3 text-[rgba(255,255,255,0.5)]">
                    Quality Benchmarks:
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {current.metrics.map((m) => (
                      <span
                        key={m}
                        className="px-3.5 py-2 rounded-xl text-xs font-medium flex items-center gap-2 border"
                        style={{
                          background: "rgba(255,255,255,0.05)",
                          borderColor: "rgba(255,255,255,0.12)",
                          color: "#FFFFFF",
                        }}
                      >
                        <CheckCircle2 size={14} style={{ color: current.accent }} />
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column Visual Display Card with AI Generated Stage Image */}
              <div className="lg:col-span-5">
                <div
                  className="rounded-2xl border flex flex-col justify-between min-h-[300px] relative overflow-hidden group shadow-2xl"
                  style={{
                    borderColor: `${current.accent}66`,
                  }}
                >
                  {/* Stage Image Background */}
                  <img
                    src={current.image}
                    alt={current.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(10,26,15,0.4) 0%, rgba(10,26,15,0.92) 80%)",
                    }}
                  />

                  {/* Overlaid Icon Badge */}
                  <div className="relative z-10 p-6 flex justify-between items-start">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center border shadow-lg backdrop-blur-md"
                      style={{
                        background: current.accent,
                        color: "#FFFFFF",
                        borderColor: "rgba(255,255,255,0.3)",
                      }}
                    >
                      <IconComponent size={28} />
                    </div>

                    <span className="font-mono text-[10px] uppercase tracking-wider px-3 py-1.5 rounded-full border bg-black/70 backdrop-blur-md text-white border-white/20">
                      Stage {current.id} Live
                    </span>
                  </div>

                  <div className="relative z-10 p-6 pt-0">
                    <p className="font-mono text-[10px] uppercase tracking-wider text-[var(--gold)]">
                      Stage Milestone
                    </p>
                    <h4 className="font-display text-2xl font-semibold mt-1 text-white">
                      {current.stage}
                    </h4>

                    <button
                      onClick={() => {
                        window.location.href = "/products";
                      }}
                      className="mt-4 flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-white hover:gap-3 transition-all font-semibold"
                    >
                      View Export Specifications
                      <ArrowRight size={15} style={{ color: current.accent }} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Grid View Cards with Image Previews below */}
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4 mt-8">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            const isSel = idx === activeStep;

            return (
              <div
                key={item.id}
                onClick={() => setActiveStep(idx)}
                className="rounded-2xl border cursor-pointer transition-all duration-300 hover:-translate-y-1 overflow-hidden relative group"
                style={{
                  borderColor: isSel ? item.accent : "rgba(255,255,255,0.12)",
                  boxShadow: isSel ? `0 8px 20px ${item.accent}33` : "none",
                }}
              >
                {/* Background Image Preview */}
                <div className="relative h-28 w-full overflow-hidden bg-gray-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`w-full h-full object-cover transition-transform duration-500 ${
                      isSel ? "scale-105 brightness-100" : "brightness-50 group-hover:brightness-75 group-hover:scale-105"
                    }`}
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: isSel
                        ? `linear-gradient(180deg, transparent 0%, rgba(10,26,15,0.85) 100%)`
                        : `rgba(10,26,15,0.6)`,
                    }}
                  />

                  <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between z-10">
                    <span
                      className="font-mono text-[9.5px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-black/70 backdrop-blur-md"
                      style={{ color: item.accent }}
                    >
                      0{idx + 1} / 05
                    </span>
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center backdrop-blur-md"
                      style={{
                        background: isSel ? item.accent : "rgba(0,0,0,0.6)",
                        color: "#FFFFFF",
                      }}
                    >
                      <Icon size={14} />
                    </div>
                  </div>
                </div>

                <div className="p-3.5 bg-[#0F2316]">
                  <h4 className={`font-display text-xs font-semibold line-clamp-1 ${isSel ? "text-white" : "text-gray-300"}`}>
                    {item.title}
                  </h4>

                  <p className="text-[11px] text-gray-400 mt-1 line-clamp-1">
                    {item.stage}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExportProcess;
