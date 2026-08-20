import React from "react";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const products = [
  {
    name: "Tomato Powder",
    image: "/products/tomato.jpg",
    desc: "Premium quality spray-dried & sun-milled tomato powder for global food manufacturing.",
    lot: "LOT-04 · 99.2% purity",
    accent: "#B54B32",
  },
  {
    name: "Moringa Powder",
    image: "/products/moringa.jpg",
    desc: "Nutrient-rich organic moringa leaf powder harvested and processed under ultra-hygienic standards.",
    lot: "LOT-07 · Organic Certified",
    accent: "#7C9473",
  },
  {
    name: "Turmeric Powder",
    image: "/products/turmeric.jpg",
    desc: "Pure Indian turmeric with vibrant natural golden color and high active curcumin content.",
    lot: "LOT-11 · Curcumin 5%+",
    accent: "#B08A3E",
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
    accent: "#5D6B4F",
  },
];

const Products = () => {
  return (
    <section id="catalog" className="py-24 font-body" style={{ background: "var(--ivory)" }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="max-w-2xl">
          <span className="font-mono inline-block text-[11px] uppercase tracking-[2.5px]" style={{ color: "var(--gold)" }}>
            Export Catalog 2026
          </span>

          <h2 className="font-display text-4xl lg:text-5xl font-semibold mt-5" style={{ color: "var(--ink)" }}>
            Premium agricultural exports
          </h2>

          <p className="mt-6 leading-8 text-lg" style={{ color: "rgba(20,33,26,0.62)" }}>
            We grow, dehydrate, and mill premium agricultural powders, organic
            botanicals, and spices under strict quality control — ready for
            shipment across global borders.
          </p>
        </div>

        {/* Catalog banner */}
        <div className="mt-14 rounded-2xl overflow-hidden border" style={{ borderColor: "var(--line-light)", background: "var(--forest)" }}>
          <div className="grid lg:grid-cols-2 items-center">
            <div className="p-10 lg:p-14">
              <span className="font-mono inline-block text-[10px] uppercase tracking-[2px] mb-5" style={{ color: "var(--gold)" }}>
                Official Master Catalog
              </span>
              <h3 className="font-display text-3xl lg:text-4xl font-semibold leading-tight" style={{ color: "var(--ivory)" }}>
                The complete export product portfolio
              </h3>
              <p className="mt-4 leading-relaxed text-sm lg:text-base" style={{ color: "rgba(250,247,239,0.65)" }}>
                Explore the 2026 specification sheets — mesh sizes, moisture
                levels, microbial standards, and bulk packaging options for
                international buyers.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-5">
                <Link
                  to="/products"
                  className="px-6 py-3.5 rounded-md font-medium text-sm flex items-center gap-2 transition-opacity hover:opacity-90"
                  style={{ background: "var(--terracotta)", color: "var(--ivory)" }}
                >
                  <Sparkles size={16} />
                  Explore Full Catalog &amp; Specs
                </Link>
                <span className="text-xs font-mono" style={{ color: "rgba(250,247,239,0.4)" }}>
                  Updated Aug 2026 · 6 Core Products
                </span>
              </div>
            </div>
            <div className="relative h-64 lg:h-full min-h-[300px]">
              <img
                src="/products/catalog-banner.jpg"
                alt="Premium agricultural exports"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {products.map((item) => (
            <div
              key={item.name}
              className="rounded-2xl overflow-hidden border transition-shadow hover:shadow-lg flex flex-col justify-between"
              style={{ borderColor: "var(--line-light)", background: "#FFFFFF" }}
            >
              <div>
                <div className="h-1" style={{ background: item.accent }} />

                <div className="relative h-56" style={{ background: `${item.accent}14` }}>
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  <span
                    className="absolute top-4 left-4 font-mono text-[10px] uppercase tracking-wider px-3 py-1.5 rounded-full border"
                    style={{ borderColor: `${item.accent}55`, color: item.accent, background: "rgba(255,255,255,0.92)" }}
                  >
                    {item.lot}
                  </span>
                </div>

                <div className="p-7">
                  <h3 className="font-display text-xl font-semibold" style={{ color: "var(--ink)" }}>
                    {item.name}
                  </h3>
                  <p className="mt-3 leading-7 text-[14.5px]" style={{ color: "rgba(20,33,26,0.62)" }}>
                    {item.desc}
                  </p>
                </div>
              </div>

              <div className="px-7 pb-7 pt-2">
                <Link
                  to="/products"
                  className="flex items-center gap-2 font-medium text-sm transition-all hover:gap-3 inline-flex"
                  style={{ color: item.accent }}
                >
                  Request Specification Sheet
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link
            to="/contact"
            className="px-8 py-3.5 rounded-md text-sm font-medium transition-opacity hover:opacity-90 inline-block"
            style={{ background: "var(--ink)", color: "var(--ivory)" }}
          >
            Request Custom Bulk Order
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;