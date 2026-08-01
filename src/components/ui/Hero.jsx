import React from "react";
import { ArrowRight, Download } from "lucide-react";
import RequestEstimateForm from "./Requestestimateform";

// const routes = [
//   "TUTICORIN → HAMBURG · 19 DAYS",
//   "CHENNAI → JEBEL ALI · 6 DAYS",
//   "TUTICORIN → ROTTERDAM · 22 DAYS",
//   "CHENNAI → NEW YORK · 27 DAYS",
//   "COCHIN → OSAKA · 15 DAYS",
//   "TUTICORIN → SINGAPORE · 8 DAYS",
// ];

// const ManifestTicker = () => (
//   <div
//     className="relative left-1/2 -translate-x-1/2 w-screen overflow-hidden border-y"
//     style={{
//       borderColor: "rgba(246,239,222,0.14)",
//       background: "rgba(9,17,12,0.55)",
//     }}
//   >
//     <div className="flex w-max py-3 manifest-track">
//       {[...routes, ...routes].map((r, i) => (
//         <div
//           key={i}
//           className="flex items-center gap-3 px-6 font-mono text-[11px] tracking-[2px] shrink-0"
//           style={{ color: "rgba(246,239,222,0.55)" }}
//         >
//           <Ship size={13} style={{ color: "var(--turmeric)" }} />
//           {r}
//           <span className="mx-3" style={{ color: "rgba(246,239,222,0.25)" }}>
//             •
//           </span>
//         </div>
//       ))}
//     </div>
//   </div>
// );

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex flex-col overflow-hidden font-body"
      style={{ background: "var(--forest-950)" }}
    >
      {/* Ambient texture instead of a flat gradient-over-photo */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-40 -right-24 w-[32rem] h-[32rem] rounded-full opacity-20 blur-3xl"
          style={{ background: "var(--turmeric)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-[28rem] h-[28rem] rounded-full opacity-20 blur-3xl"
          style={{ background: "var(--tomato)" }}
        />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(246,239,222,0.7) 1px, transparent 1px)",
            backgroundSize: "26px 26px",
          }}
        />
        <div className="absolute inset-0 opacity-[0.035] grain-overlay" />
      </div>

      {/* Manifest ticker sits directly under the fixed navbar, full-bleed */}
      {/* <div className="relative pt-28">
        <ManifestTicker />
      </div> */}

      <div className="relative max-w-7xl mx-auto  mt-28 px-6 lg:px-10 w-full pt-16 pb-16 flex-1">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-start">
          {/* Left */}
          <div>
            <span
              className="font-mono inline-flex items-center gap-2 px-4 py-2 rounded-full border text-[11px] uppercase tracking-[3px]"
              style={{ borderColor: "rgba(246,239,222,0.25)", color: "var(--turmeric)" }}
            >
              Export Manifest No. 2026 · TN, India → World
            </span>

            <h1
              className="font-display mt-8 text-5xl lg:text-[4.5rem] leading-[1.05] font-semibold"
              style={{ color: "var(--cream)" }}
            >
              Nature&rsquo;s finest,
              <br />
              <span className="relative inline-block">
                <span
                  className="absolute -inset-x-3 -inset-y-1 rounded-full border-2 border-dashed opacity-50 -rotate-2"
                  style={{ borderColor: "var(--brass)" }}
                  aria-hidden="true"
                />
                <span className="relative italic" style={{ color: "var(--tomato)", fontWeight: 500 }}>
                  bound
                </span>
              </span>{" "}
              for every border
            </h1>

            <p
              className="mt-7 text-base leading-8 max-w-lg"
              style={{ color: "rgba(246,239,222,0.7)" }}
            >
              We grow, dry, and mill premium tomato powder, organic
              botanicals, and spices in small batches — then ship them to
              global markets under strict quality control, from soil to
              seal.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <button
                className="px-7 py-4 rounded-full font-medium text-sm flex items-center gap-3 transition-transform hover:-translate-y-0.5"
                style={{ background: "var(--tomato)", color: "var(--cream)" }}
              >
                Explore Products
                <ArrowRight size={18} />
              </button>

              <button
                className="px-7 py-4 rounded-full border font-medium text-sm flex items-center gap-3 transition-colors hover:bg-white/5"
                style={{ borderColor: "rgba(246,239,222,0.3)", color: "var(--cream)" }}
              >
                <Download size={16} />
                Download Catalog
              </button>
            </div>

            {/* Stats */}
            <div
              className="grid grid-cols-3 gap-8 mt-16 pt-10 border-t"
              style={{ borderColor: "rgba(246,239,222,0.12)" }}
            >
              {[
                ["15+", "Countries served"],
                ["100+", "Products"],
                ["24/7", "Customer support"],
              ].map(([num, label]) => (
                <div key={label}>
                  <h2 className="font-display text-4xl font-semibold" style={{ color: "var(--cream)" }}>
                    {num}
                  </h2>
                  <p className="font-mono text-[11px] uppercase tracking-wider mt-2" style={{ color: "rgba(246,239,222,0.5)" }}>
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — quote request form */}
          <div className="hidden lg:block">
            <RequestEstimateForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;