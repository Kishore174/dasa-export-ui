import React from "react";
import { ArrowRight, Download, Sparkles, ShieldCheck } from "lucide-react";

const products = [
  {
    name: "Tomato Powder",
    image: "/products/tomato.jpg",
    desc: "Premium quality spray-dried & sun-milled tomato powder for global food manufacturing.",
    lot: "LOT-04 · 99.2% purity",
    accent: "#C43E2A",
  },
  {
    name: "Moringa Powder",
    image: "/products/moringa.jpg",
    desc: "Nutrient-rich organic moringa leaf powder harvested and processed under ultra-hygienic standards.",
    lot: "LOT-07 · Organic Certified",
    accent: "#8FAE6B",
  },
  {
    name: "Turmeric Powder",
    image: "/products/turmeric.jpg",
    desc: "Pure Indian turmeric with vibrant natural golden color and high active curcumin content.",
    lot: "LOT-11 · Curcumin 5%+",
    accent: "#E3A62F",
  },
  {
    name: "Beetroot Powder",
    image: "/products/beetroot.jpg",
    desc: "Fresh cold-milled beetroot powder rich in natural nitrates for food and nutraceutical industries.",
    lot: "LOT-14 · Cold-milled",
    accent: "#8B2E4A",
  },
  {
    name: "Onion Powder",
    image: "/products/onion.jpg",
    desc: "Finely processed dehydrated onion powder offering concentrated aroma, flavor, and long shelf life.",
    lot: "LOT-08 · Dehydrated",
    accent: "#9C8563",
  },
  {
    name: "Garlic Powder",
    image: "/products/garlic.jpg",
    desc: "Aromatic allicin-rich garlic powder processed strictly to meet international export specifications.",
    lot: "LOT-22 · Allicin-rich",
    accent: "#8A7F68",
  },
];

const Products = () => {
  return (
    <section
      id="catalog"
      className="relative py-28 font-body overflow-hidden"
      style={{ background: "var(--cream, #F6EFDE)" }}
    >
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(13,24,16,0.8) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <span
            className="font-mono inline-flex items-center gap-2 px-4 py-2 rounded-full border text-[11px] uppercase tracking-[3px]"
            style={{ borderColor: "rgba(13,24,16,0.15)", color: "var(--tomato-dark, #9A3020)" }}
          >
            <Sparkles size={13} />
            Export Catalog 2026
          </span>

          <h2
            className="font-display text-4xl lg:text-5xl font-semibold mt-6"
            style={{ color: "var(--ink, #0D1810)" }}
          >
            Premium agricultural exports
          </h2>

          <p className="mt-6 text-gray-600 leading-8 text-lg">
            We grow, dehydrate, and mill premium agricultural powders, organic botanicals,
            and spices under strict quality control — ready for shipment across global borders.
          </p>
        </div>

        {/* Featured Export Catalog Showcase Banner */}
        <div className="mt-16 rounded-[32px] overflow-hidden border shadow-2xl relative group"
          style={{ borderColor: "rgba(13,24,16,0.12)", background: "var(--forest-950, #122318)" }}
        >
          <div className="grid lg:grid-cols-2 items-center">
            <div className="p-8 lg:p-14 text-white">
              <span
                className="font-mono inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] uppercase tracking-[2px] mb-6 border"
                style={{ borderColor: "rgba(227,166,47,0.4)", color: "var(--turmeric, #E3A62F)" }}
              >
                Official Master Catalog
              </span>
              <h3 className="font-display text-3xl lg:text-4xl font-semibold leading-tight text-[#F6EFDE]">
                Explore Our Complete Global Export Product Portfolio
              </h3>
              <p className="mt-4 text-gray-300 leading-relaxed text-sm lg:text-base">
                Download the complete 2026 specification sheet including mesh sizes, moisture levels, microbial standards, and bulk packaging options for international buyers.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  className="px-6 py-3.5 rounded-full font-medium text-sm flex items-center gap-2 transition-transform hover:-translate-y-0.5 shadow-lg"
                  style={{ background: "var(--tomato, #C43E2A)", color: "var(--cream, #F6EFDE)" }}
                >
                  <Download size={16} />
                  Download Full Catalog (PDF)
                </button>
                <span className="text-xs font-mono text-gray-400">
                  Updated Aug 2026 · 14 Pages
                </span>
              </div>
            </div>
            <div className="relative h-72 lg:h-full min-h-[320px] overflow-hidden">
              <img
                src="/products/catalog-banner.jpg"
                alt="Premium Agricultural Exports Showcase"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#122318] via-transparent to-transparent lg:block hidden" />
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
          {products.map((item) => (
            <div
              key={item.name}
              className="group bg-white rounded-[24px] overflow-hidden border transition-all duration-500 hover:-translate-y-1 shadow-sm hover:shadow-xl"
              style={{ borderColor: "rgba(13,24,16,0.08)" }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = `0 24px 48px -16px ${item.accent}45`)}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
            >
              {/* Accent bar identifies the product family at a glance */}
              <div className="h-1.5" style={{ background: item.accent }} />

              <div
                className="relative overflow-hidden h-64"
                style={{ background: `${item.accent}1A` }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <span
                  className="absolute top-4 left-4 font-mono text-[10px] uppercase tracking-wider px-3 py-1.5 rounded-full border backdrop-blur-md shadow-sm"
                  style={{
                    borderColor: `${item.accent}55`,
                    color: item.accent,
                    background: "rgba(255,255,255,0.9)",
                  }}
                >
                  {item.lot}
                </span>

                {/* Hover-reveal customs stamp: ties the card back to the export theme */}
                <div
                  className="absolute -bottom-14 -right-10 h-28 w-28 rounded-full border-2 border-dashed flex flex-col items-center justify-center text-center transition-all duration-500 group-hover:bottom-[-2.5rem] group-hover:right-[-1.5rem] opacity-0 group-hover:opacity-100"
                  style={{
                    borderColor: item.accent,
                    background: "rgba(255,255,255,0.92)",
                    transform: "rotate(-12deg)",
                  }}
                >
                  <ShieldCheck size={16} style={{ color: item.accent }} />
                  <p
                    className="font-mono text-[7px] uppercase tracking-wider mt-1 leading-tight"
                    style={{ color: item.accent }}
                  >
                    Export
                    <br />
                    Ready
                  </p>
                </div>
              </div>

              <div className="p-8">
                <h3
                  className="font-display text-2xl font-semibold"
                  style={{ color: "var(--ink, #0D1810)" }}
                >
                  {item.name}
                </h3>

                <p className="text-gray-600 mt-4 leading-7 text-[15px]">
                  {item.desc}
                </p>

                <button
                  className="mt-8 flex items-center gap-2 font-medium text-sm transition-colors group-hover:gap-3"
                  style={{ color: item.accent }}
                >
                  Request Specification Sheet
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <button
            className="px-8 py-4 rounded-full text-base font-medium transition-transform hover:-translate-y-0.5 shadow-lg"
            style={{ background: "var(--tomato, #C43E2A)", color: "var(--cream, #F6EFDE)" }}
          >
            Request Custom Bulk Order
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;