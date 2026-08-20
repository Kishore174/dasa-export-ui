import React from "react";
import { ArrowRight, Download, Anchor } from "lucide-react";
import RequestEstimateForm from "./Requestestimateform";

/**
 * Signature element: the "manifest line" — a single ruled measurement
 * strip with tick marks, standing in for a shipment's route line.
 */
const ManifestLine = () => (
  <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[2.5px]" style={{ color: "var(--gold)" }}>
    <span>TN, India</span>
    <div className="flex-1 h-px relative" style={{ background: "rgba(255,255,255,0.3)" }}>
      {[0, 25, 50, 75, 100].map((p) => (
        <span
          key={p}
          className="absolute top-1/2 -translate-y-1/2 w-px h-2"
          style={{ left: `${p}%`, background: "rgba(255,255,255,0.3)" }}
        />
      ))}
    </div>
    <span>Global Ports</span>
  </div>
);

const stats = [
  ["15+", "Countries served"],
  ["100+", "Products catalog"],
  ["24/7", "Customer support"],
];

const Hero = () => {
  const scrollToCatalog = () => {
    document.querySelector("#catalog")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="top"
      className="relative pt-[72px] font-body min-h-[92vh] flex items-center overflow-hidden"
      style={{ background: "#0A1A0F" }}
    >
      {/* Background AI-generated image with subtle zoom overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.jpg"
          alt="International Maritime Logistics - DASA Exports Cargo Ship"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-10000"
          style={{ filter: "brightness(0.75) contrast(1.1)" }}
        />
        {/* Layered cinematic gradient overlays for high text contrast */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(10,26,15,0.94) 0%, rgba(15,35,22,0.82) 50%, rgba(10,26,15,0.92) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 20% 50%, rgba(176,138,62,0.12) 0%, transparent 60%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, transparent 60%, rgba(10,26,15,1) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-24 w-full">
        <div className="mb-12 max-w-md">
          <ManifestLine />
        </div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
          {/* Left Hero Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[rgba(201,168,76,0.3)] bg-[rgba(10,26,15,0.6)] backdrop-blur-md mb-6">
              <Anchor size={13} style={{ color: "var(--gold)" }} />
              <span
                className="font-mono text-[10.5px] uppercase tracking-[2.5px]"
                style={{ color: "var(--gold)" }}
              >
                Est. Export Co. — Manifest No. 2026
              </span>
            </div>

            <h1
              className="font-display text-5xl lg:text-[4.2rem] leading-[1.06] font-semibold tracking-tight"
              style={{ color: "#FFFFFF" }}
            >
              Nature&rsquo;s finest, bound for every border
            </h1>

            <p
              className="mt-7 text-base lg:text-lg leading-8 max-w-xl font-normal"
              style={{ color: "rgba(255,255,255,0.82)" }}
            >
              We grow, dry, and mill premium tomato powder, organic botanicals,
              and spices in small batches — then ship them to global markets
              under strict quality control, from soil to seal.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <button
                onClick={scrollToCatalog}
                className="px-7 py-4 rounded-lg font-medium text-sm flex items-center gap-2.5 shadow-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  background: "var(--terracotta)",
                  color: "#FFFFFF",
                  boxShadow: "0 8px 24px rgba(181,75,50,0.35)",
                }}
              >
                Explore Products
                <ArrowRight size={17} />
              </button>

              <button
                onClick={scrollToCatalog}
                className="px-7 py-4 rounded-lg border font-medium text-sm flex items-center gap-2.5 backdrop-blur-md transition-all duration-200 hover:bg-white/10"
                style={{
                  borderColor: "rgba(255,255,255,0.3)",
                  color: "#FFFFFF",
                  background: "rgba(255,255,255,0.05)",
                }}
              >
                <Download size={16} />
                Download Catalog
              </button>
            </div>

            {/* Stats Bar */}
            <div
              className="grid grid-cols-3 gap-6 mt-16 pt-8 border-t backdrop-blur-sm"
              style={{ borderColor: "rgba(255,255,255,0.15)" }}
            >
              {stats.map(([num, label]) => (
                <div key={label}>
                  <h2
                    className="font-display text-3xl lg:text-4xl font-bold tracking-tight"
                    style={{ color: "#FFFFFF" }}
                  >
                    {num}
                  </h2>
                  <p
                    className="font-mono text-[10.5px] uppercase tracking-wider mt-2"
                    style={{ color: "var(--gold)" }}
                  >
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Estimate request form */}
          <div className="hidden lg:block">
            <div className="shadow-2xl rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.18)] backdrop-blur-xl">
              <RequestEstimateForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;