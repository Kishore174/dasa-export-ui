import React, { useState } from "react";
import { ArrowRight, Download, Search, Filter, X, CheckCircle2, ShieldCheck, FileText, Send } from "lucide-react";
import { Link } from "react-router-dom";

const categories = ["All Products", "Organic Powders", "Dehydrated Spices", "Botanical Extracts"];

const productsList = [
  {
    id: "tomato-powder",
    name: "Tomato Powder",
    category: "Dehydrated Spices",
    image: "/products/tomato.jpg",
    desc: "Premium spray-dried & sun-milled tomato powder for food manufacturing, sauces, soups, and seasonings.",
    lot: "LOT-04 · 99.2% Purity",
    accent: "#B54B32",
    specs: {
      meshSize: "80 - 100 Mesh",
      moisture: "< 4.5%",
      solubility: "98.5%",
      shelfLife: "24 Months",
      packaging: "25kg Foil Bags in HDPE Fiber Drums",
      certifications: ["ISO 22000", "FSSAI", "APEDA", "HACCP"],
    },
  },
  {
    id: "moringa-powder",
    name: "Moringa Leaf Powder",
    category: "Organic Powders",
    image: "/products/moringa.jpg",
    desc: "Nutrient-dense organic moringa leaf powder harvested and processed under ultra-hygienic cold-milling standards.",
    lot: "LOT-07 · Organic Certified",
    accent: "#7C9473",
    specs: {
      meshSize: "100 Mesh Fine",
      moisture: "< 6.0%",
      proteinContent: "> 27%",
      shelfLife: "24 Months",
      packaging: "25kg Vacuum Aluminum Barrier Drums",
      certifications: ["NPOP Organic", "EU Organic", "ISO 22000"],
    },
  },
  {
    id: "turmeric-powder",
    name: "Turmeric Powder",
    category: "Dehydrated Spices",
    image: "/products/turmeric.jpg",
    desc: "Pure Indian turmeric with vibrant natural golden color, rich aroma, and high active curcumin potency.",
    lot: "LOT-11 · Curcumin 5%+",
    accent: "#B08A3E",
    specs: {
      meshSize: "80 - 100 Mesh",
      curcumin: "5.2% - 5.8%",
      moisture: "< 8.0%",
      shelfLife: "24 Months",
      packaging: "25kg / 50kg HDPE Lined Drums",
      certifications: ["APEDA", "FSSAI", "ISO 22000", "Non-GMO"],
    },
  },
  {
    id: "beetroot-powder",
    name: "Beetroot Powder",
    category: "Organic Powders",
    image: "/products/beetroot.jpg",
    desc: "Fresh cold-milled beetroot powder rich in natural nitrates and vibrant red betalain pigments.",
    lot: "LOT-14 · Cold-milled",
    accent: "#8B2E4A",
    specs: {
      meshSize: "80 Mesh",
      moisture: "< 5.0%",
      nitrateContent: "High Natural Bio-Nitrate",
      shelfLife: "18 Months",
      packaging: "25kg Aluminum Foil Vacuum Bags",
      certifications: ["ISO 22000", "FSSAI", "Non-GMO"],
    },
  },
  {
    id: "onion-powder",
    name: "Dehydrated Onion Powder",
    category: "Dehydrated Spices",
    image: "/products/onion.jpg",
    desc: "Finely processed dehydrated onion powder offering concentrated aroma, rich flavor, and extended shelf life.",
    lot: "LOT-08 · Dehydrated",
    accent: "#9C8563",
    specs: {
      meshSize: "80 - 100 Mesh",
      moisture: "< 5.0%",
      pyruvateValue: "High Pungency Grade",
      shelfLife: "24 Months",
      packaging: "25kg Polyethylene Lined Fiber Drums",
      certifications: ["ISO 22000", "FSSAI", "APEDA"],
    },
  },
  {
    id: "garlic-powder",
    name: "Garlic Powder",
    category: "Dehydrated Spices",
    image: "/products/garlic.jpg",
    desc: "Aromatic allicin-rich garlic powder processed strictly to meet international food safety export specifications.",
    lot: "LOT-22 · Allicin-rich",
    accent: "#5D6B4F",
    specs: {
      meshSize: "80 Mesh",
      allicinContent: "> 1.2%",
      moisture: "< 6.0%",
      shelfLife: "24 Months",
      packaging: "25kg Vacuum Foil Barrier Cartons",
      certifications: ["ISO 22000", "FSSAI", "HACCP"],
    },
  },
];

const ProductsPage = () => {
  const [activeCategory, setActiveCategory] = useState("All Products");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = productsList.filter((item) => {
    const matchesCategory = activeCategory === "All Products" || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || item.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-[72px] font-body bg-white min-h-screen">
      {/* Header Banner */}
      <section className="relative py-28 bg-[#0A1A0F] text-white overflow-hidden">
        {/* AI Generated Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/products-hero-bg.jpg"
            alt="Agricultural Powders & Botanical Spices Showcase"
            className="w-full h-full object-cover object-center scale-105"
            style={{ filter: "brightness(0.7) contrast(1.1)" }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(10,26,15,0.94) 0%, rgba(15,35,22,0.85) 50%, rgba(10,26,15,0.92) 100%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 70% 30%, rgba(176,138,62,0.15) 0%, transparent 60%)",
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <span className="font-mono inline-block text-[11px] uppercase tracking-[2.5px] text-[var(--gold)] mb-4">
            Master Export Portfolio 2026
          </span>

          <h1 className="font-display text-4xl lg:text-5xl font-semibold">
            Agricultural Powders &amp; Botanical Spices
          </h1>

          <p className="mt-4 text-base lg:text-lg leading-8 text-[rgba(255,255,255,0.75)] max-w-2xl">
            Explore our complete export catalog — grown, milled, and packaged to meet strict EU, FDA, and international microbial standards.
          </p>

          {/* Search & Filter Bar */}
          <div className="mt-10 flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search products e.g. Turmeric, Moringa..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-white/20 bg-white/10 text-white placeholder-gray-400 text-sm focus:outline-none focus:border-[var(--gold)] transition"
              />
            </div>

            <div className="flex items-center gap-2 flex-wrap w-full md:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2.5 rounded-xl font-mono text-xs tracking-wider transition-all ${
                    activeCategory === cat
                      ? "bg-[var(--gold)] text-black font-semibold shadow-lg"
                      : "bg-white/10 text-white/80 hover:bg-white/20"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Products Showcase — Alternating Left Image / Right Content Brief Cards */}
      <section className="py-16 max-w-7xl mx-auto px-6 lg:px-10 space-y-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="font-mono inline-block text-[11px] uppercase tracking-[2.5px] text-[var(--gold)]">
            Export Catalog Specification Briefs
          </span>
          <h2 className="font-display text-4xl font-semibold text-[var(--ink)] mt-3">
            Complete Product Portfolio &amp; Technical Specifications
          </h2>
          <p className="text-sm text-gray-600 mt-3 leading-relaxed">
            Detailed briefs for every export-grade product — grown, processed, and packed under strict international quality controls.
          </p>
        </div>

        {filteredProducts.map((item, idx) => {
          const isEven = idx % 2 === 0;

          return (
            <div
              key={item.id}
              className="rounded-3xl border overflow-hidden relative shadow-lg transition-all duration-300 hover:shadow-2xl bg-white"
              style={{ borderColor: "rgba(20,33,26,0.12)" }}
            >
              {/* Top Accent Color Bar */}
              <div className="h-1.5 w-full" style={{ background: item.accent }} />

              <div className="p-8 lg:p-12">
                <div className={`grid lg:grid-cols-12 gap-12 items-center ${isEven ? "" : "lg:flex-row-reverse"}`}>
                  {/* Image Column (Left on even, Right on odd) */}
                  <div className={`lg:col-span-5 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                    <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-xl group bg-gray-50">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-[360px] object-cover group-hover:scale-105 transition-transform duration-700"
                      />

                      {/* Overlaid Badges */}
                      <span
                        className="absolute top-4 left-4 font-mono text-[10px] uppercase tracking-wider px-3.5 py-1.5 rounded-full border shadow-md backdrop-blur-md"
                        style={{
                          borderColor: `${item.accent}55`,
                          color: item.accent,
                          background: "rgba(255,255,255,0.92)",
                        }}
                      >
                        {item.lot}
                      </span>

                      <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-black/85 backdrop-blur-md border border-white/15 text-white flex items-center justify-between">
                        <div>
                          <p className="font-mono text-[9.5px] uppercase tracking-wider text-[var(--gold)]">
                            Category:
                          </p>
                          <p className="font-display text-xs font-semibold mt-0.5">{item.category}</p>
                        </div>
                        <span
                          className="font-mono text-[11px] font-bold px-2.5 py-1 rounded border"
                          style={{
                            borderColor: `${item.accent}55`,
                            color: item.accent,
                            background: "rgba(255,255,255,0.1)",
                          }}
                        >
                          Export Grade A
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content Column (Right on even, Left on odd) */}
                  <div className={`lg:col-span-7 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                    <div className="flex items-center gap-3 mb-2">
                      <span
                        className="font-mono text-[10.5px] uppercase tracking-[2px] px-3 py-1 rounded-full border"
                        style={{
                          borderColor: `${item.accent}44`,
                          color: item.accent,
                          background: `${item.accent}10`,
                        }}
                      >
                        Product Specification Brief #{item.id.substring(0, 3).toUpperCase()}
                      </span>
                    </div>

                    <h3 className="font-display text-3xl font-semibold text-[var(--ink)] mt-2">
                      {item.name}
                    </h3>

                    <p className="mt-4 text-base leading-8 text-gray-600">
                      {item.desc}
                    </p>

                    {/* Technical Feature Parameters Grid */}
                    <div className="grid sm:grid-cols-2 gap-4 mt-6 pt-6 border-t border-gray-100">
                      {Object.entries(item.specs).map(([key, val]) => {
                        if (key === "certifications") return null;

                        return (
                          <div key={key} className="flex items-start gap-2.5 text-xs">
                            <CheckCircle2 size={16} className="shrink-0 mt-0.5" style={{ color: item.accent }} />
                            <div>
                              <span className="text-gray-400 font-mono capitalize block">
                                {key.replace(/([A-Z])/g, " $1")}:
                              </span>
                              <strong className="text-gray-900 text-sm font-semibold">
                                {Array.isArray(val) ? val.join(", ") : val}
                              </strong>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Certifications Badges */}
                    <div className="mt-6 pt-4 border-t border-gray-100 flex flex-wrap items-center gap-2">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-gray-400 mr-2">
                        Statutory Certifications:
                      </span>
                      {item.specs.certifications?.map((c) => (
                        <span
                          key={c}
                          className="px-2.5 py-1 rounded-md font-mono text-[10px] uppercase tracking-wider border text-gray-700 bg-gray-50 border-gray-200"
                        >
                          {c}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-8 flex flex-wrap items-center gap-4">
                      <Link
                        to="/contact"
                        className="px-6 py-3.5 rounded-xl text-white font-medium text-sm flex items-center gap-2 shadow-lg transition-transform hover:scale-105"
                        style={{ background: "var(--terracotta)" }}
                      >
                        <Send size={15} />
                        Request Price Quote / Sample
                      </Link>

                      <button
                        onClick={() => setSelectedProduct(item)}
                        className="px-5 py-3.5 rounded-xl border border-gray-300 text-gray-800 font-medium text-sm hover:bg-gray-50 transition-colors flex items-center gap-2"
                      >
                        <FileText size={15} style={{ color: item.accent }} />
                        Full Specification Sheet
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Product Specification Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-8 relative border shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-6 right-6 p-2 rounded-full border text-gray-500 hover:bg-gray-100"
            >
              <X size={20} />
            </button>

            <div className="flex items-center gap-3 mb-2">
              <span className="font-mono text-xs uppercase tracking-wider text-[var(--gold)] font-bold">
                {selectedProduct.lot}
              </span>
              <span className="text-gray-300">•</span>
              <span className="text-xs font-mono text-gray-500">{selectedProduct.category}</span>
            </div>

            <h2 className="font-display text-3xl font-semibold text-[var(--ink)]">
              {selectedProduct.name}
            </h2>

            <p className="text-sm text-gray-600 mt-2 leading-relaxed">
              {selectedProduct.desc}
            </p>

            {/* Spec Sheet Table */}
            <div className="mt-6 border rounded-2xl p-6 bg-gray-50 space-y-3">
              <h4 className="font-mono text-xs uppercase tracking-wider text-gray-900 font-semibold mb-4">
                Export Technical Parameters:
              </h4>

              {Object.entries(selectedProduct.specs).map(([key, val]) => (
                <div key={key} className="flex items-center justify-between text-xs border-b pb-2 last:border-b-0">
                  <span className="capitalize text-gray-500 font-medium">
                    {key.replace(/([A-Z])/g, " $1")}:
                  </span>
                  <span className="font-semibold text-gray-900">
                    {Array.isArray(val) ? val.join(", ") : val}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/contact"
                onClick={() => setSelectedProduct(null)}
                className="flex-1 py-3.5 rounded-xl bg-[var(--terracotta)] text-white font-medium text-sm flex items-center justify-center gap-2 shadow-lg text-center"
              >
                <Send size={16} />
                Request Price Quote / Sample Kit
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsPage;
