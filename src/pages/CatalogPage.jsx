import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Download,
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronRight,
  Send,
  Package,
  ShoppingBag,
  Layers,
} from "lucide-react";

// Catalog Products Data
const CATALOG_PRODUCTS = [
  {
    id: "millet-products",
    name: "Millet Powders & Grains",
    category: "Organic",
    categoryLabel: "ANCIENT SUPER-GRAIN",
    shortDesc: "Nutrient-dense, 100% gluten-free ancient Indian millet flours (Ragi, Foxtail, Bajra, Sorghum) cold-milled for international food processing.",
    image: "/products/millet.jpg",
    origin: "India",
    form: "De-hulled Grains & Fine Flour",
    application: "Bakery, Health Foods, Breakfast Cereals",
    packaging: "25 – 50 kg HDPE / Paper Bag",
    size: "large",
  },
  {
    id: "ragi-millet",
    name: "Finger Millet (Ragi) Powder",
    category: "Millets",
    categoryLabel: "HIGH CALCIUM GRAIN",
    shortDesc: "Calcium-dense organic Finger Millet (Ragi) flour, cold-milled from premium de-hulled grains for health foods and infant nutrition.",
    image: "/products/ragi-millet.jpg",
    origin: "India",
    form: "Fine Cold-Milled Flour",
    application: "Infant Foods, Health Drinks, Bakery",
    packaging: "25 – 50 kg HDPE Bag",
    size: "medium",
  },
  {
    id: "foxtail-millet",
    name: "Foxtail Millet Flour",
    category: "Millets",
    categoryLabel: "PROTEIN-RICH GRAIN",
    shortDesc: "Golden-yellow Foxtail millet grain and flour packed with dietary fiber, iron, and protein for gluten-free formulations.",
    image: "/products/foxtail-millet.jpg",
    origin: "India",
    form: "Whole Grain & Fine Flour",
    application: "Gluten-Free Bakery, Breakfast Cereals",
    packaging: "25 – 50 kg Kraft Bag",
    size: "medium",
  },
  {
    id: "bajra-millet",
    name: "Pearl Millet (Bajra) Powder",
    category: "Millets",
    categoryLabel: "ENERGY-DENSE GRAIN",
    shortDesc: "Magnesium and iron-rich Pearl Millet (Bajra) flour processed under strict low-moisture hygiene standards.",
    image: "/products/bajra-millet.jpg",
    origin: "India",
    form: "Pure Bajra Flour",
    application: "Traditional Flatbreads, Snack Foods",
    packaging: "25 – 50 kg HDPE Bag",
    size: "small",
  },
  {
    id: "jowar-millet",
    name: "Sorghum (Jowar) Flour",
    category: "Millets",
    categoryLabel: "GLUTEN-FREE STAPLE",
    shortDesc: "Pure white Sorghum (Jowar) flour cold-milled for light texture and high dietary fiber in commercial food production.",
    image: "/products/jowar-millet.jpg",
    origin: "India",
    form: "Fine White Flour",
    application: "Baking Blends, Pasta, Extruded Snacks",
    packaging: "25 – 50 kg Paper Bag",
    size: "small",
  },
  {
    id: "tomato-powder",
    name: "Tomato Powder",
    category: "Powders",
    categoryLabel: "SPRAY-DRIED EXTRACT",
    shortDesc: "Rich natural red color, balanced tangy flavor, and 100% soluble for soups, sauces, and snack seasonings.",
    image: "/products/tomato.jpg",
    origin: "India",
    form: "Fine Spray-Dried Powder",
    application: "Food & Beverage, Sauces, Seasonings",
    packaging: "10 – 25 kg Bag-in-Box",
    size: "large", // Asymmetric grid layout
  },
  {
    id: "moringa-powder",
    name: "Moringa Powder",
    category: "Organic",
    categoryLabel: "SUPERFOOD BOTANICAL",
    shortDesc: "Nutrient-dense, vibrant green organic leaf powder sourced directly from certified South Indian farms.",
    image: "/products/moringa.jpg",
    origin: "India",
    form: "Fine Leaf Powder",
    application: "Nutraceuticals, Beverages, Dietary Supplements",
    packaging: "20 – 50 kg Paper Bag",
    size: "medium",
  },
  {
    id: "turmeric-powder",
    name: "Turmeric Powder",
    category: "Spices",
    categoryLabel: "HIGH CURCUMIN SPICE",
    shortDesc: "Golden-yellow high curcumin turmeric powder milled from premium hand-picked Alleppey finger roots.",
    image: "/products/turmeric.jpg",
    origin: "India",
    form: "Pure Ground Powder",
    application: "Curry Blends, Food Colorant, Pharma",
    packaging: "25 kg Fibre Drum",
    size: "medium",
  },
  {
    id: "beetroot-powder",
    name: "Beetroot Powder",
    category: "Fruit Powders",
    categoryLabel: "NATURAL COLORANT",
    shortDesc: "Deep ruby red cold-milled juice powder offering natural sweetness and intense food coloring capability.",
    image: "/products/beetroot.jpg",
    origin: "India",
    form: "Cold-Milled Juice Powder",
    application: "Confectionery, Bakery, Beverage, Meat Alt",
    packaging: "10 – 25 kg Box",
    size: "small",
  },
  {
    id: "onion-powder",
    name: "Onion Powder",
    category: "Dehydrated Vegetables",
    categoryLabel: "DEHYDRATED VEGETABLE",
    shortDesc: "Pungent, savory dehydrated onion powder processed from clean white & red Indian onion bulbs.",
    image: "/products/onion.jpg",
    origin: "India",
    form: "Dehydrated Powder / Flakes",
    application: "Processed Foods, Spice Mixes, Ready Meals",
    packaging: "20 – 50 kg Bag",
    size: "small",
  },
  {
    id: "garlic-powder",
    name: "Garlic Powder",
    category: "Dehydrated Vegetables",
    categoryLabel: "DEHYDRATED VEGETABLE",
    shortDesc: "Aromatic dehydrated garlic powder and flakes with preserved bioactive allicin content.",
    image: "/products/garlic.jpg",
    origin: "India",
    form: "Dehydrated Flakes & Powder",
    application: "Meat Processing, Seasonings, Sauces",
    packaging: "20 – 50 kg Bag",
    size: "small",
  },
];

// Technical Datasheet Specs
const DATASHEET_SPECS = {
  "Tomato Powder": {
    form: "Fine Spray-Dried Powder",
    moisture: "Up to 5.0%",
    mesh: "60 – 80 Mesh",
    shelfLife: "24 Months",
    origin: "Tamil Nadu, India",
    packaging: "10 kg – 25 kg Bag-in-Box",
    solubility: "100% Water Soluble",
  },
  "Moringa Powder": {
    form: "Fine Milled Organic Leaf Powder",
    moisture: "Up to 6.5%",
    mesh: "80 – 100 Mesh",
    shelfLife: "24 Months",
    origin: "Tamil Nadu, India",
    packaging: "20 kg – 50 kg Multi-wall Bag",
    solubility: "Suspension Grade",
  },
  "Turmeric Powder": {
    form: "Pure Ground Turmeric (Curcumin > 3.0%)",
    moisture: "Up to 8.0%",
    mesh: "60 – 80 Mesh",
    shelfLife: "36 Months",
    origin: "Tamil Nadu, India",
    packaging: "25 kg Fibre Drum",
    solubility: "Oil Dispersible",
  },
  "Beetroot Powder": {
    form: "Cold-Milled Juice Powder",
    moisture: "Up to 5.5%",
    mesh: "60 – 80 Mesh",
    shelfLife: "24 Months",
    origin: "Tamil Nadu, India",
    packaging: "10 kg – 25 kg Carton Box",
    solubility: "Fully Water Soluble",
  },
  "Dehydrated Vegetables": {
    form: "Dehydrated Flakes / Granules / Powder",
    moisture: "Up to 6.0%",
    mesh: "5mm Flakes / 40 – 60 Mesh",
    shelfLife: "24 Months",
    origin: "Tamil Nadu, India",
    packaging: "20 kg Poly-lined Kraft Bag",
    solubility: "Rehydratable",
  },
  "Millet Powders": {
    form: "De-hulled Grains & Cold-Milled Flour",
    moisture: "Up to 8.0%",
    mesh: "80 – 100 Fine Mesh",
    shelfLife: "24 Months",
    origin: "Tamil Nadu & Karnataka, India",
    packaging: "25 kg – 50 kg HDPE / Paper Bag",
    solubility: "100% Gluten-Free Grain",
  },
};

// Packaging Formats Data
const PACKAGING_FORMATS = [
  {
    icon: Package,
    title: "Carton Box",
    capacity: "10 kg – 25 kg",
    image: "/process/barrier-packaging.jpg",
    desc: "Multi-wall corrugated outer carton with food-grade inner polyethylene liner. Optimal protection for moisture-sensitive powders.",
  },
  {
    icon: ShoppingBag,
    title: "Multi-wall Bag",
    capacity: "20 kg – 50 kg",
    image: "/process/farm-sourcing.jpg",
    desc: "Heavy-duty kraft paper bag with inner PE barrier liner. The global export standard for whole spices and dehydrated flakes.",
  },
  {
    icon: Layers,
    title: "Fibre Drum",
    capacity: "25 kg – 50 kg",
    image: "/process/milling-facility.jpg",
    desc: "Rigid structural fibre drum providing complete anti-crush protection for high-value botanical extracts and essential powders.",
  },
];

// Certificates List (Exact 3 Registered PDF Assets)
const CERTIFICATES = [
  { id: "gst", title: "GST Registration Certificate", regNo: "33BYUPD2670Q2ZR", image: "/certificates/real-gst-1.png", pdfUrl: "/certificates/gst-certificate.pdf", authority: "Government of India — Form GST REG-06" },
  { id: "fssai", title: "FSSAI Food Safety License", regNo: "12426998000511", image: "/certificates/real-fssai-1.png", pdfUrl: "/certificates/fssai-certificate.pdf", authority: "Food Safety Authority of India (Central License)" },
  { id: "dasa-cert", title: "DASA Export Registration", regNo: "Exporter Certificate", image: "/certificates/real-dasa-cert-1.png", pdfUrl: "/certificates/dasa-export-certificate.pdf", authority: "Export Registration Authority" },
];

export default function CatalogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedSpecProduct, setSelectedSpecProduct] = useState("Tomato Powder");
  const [activeCertIndex, setActiveCertIndex] = useState(0);

  // Enquiry form state
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    country: "",
    product: "Tomato Powder",
    quantity: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const categoriesList = ["All", "Millets", "Powders", "Dehydrated Vegetables", "Spices", "Organic", "Fruit Powders"];

  const filteredProducts =
    activeCategory === "All"
      ? CATALOG_PRODUCTS
      : CATALOG_PRODUCTS.filter((p) => p.category === activeCategory || p.categoryLabel.includes(activeCategory.toUpperCase()));

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setLoading(true);

    try {
      await fetch("https://formsubmit.co/ajax/contact@dasaexports.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `New Catalog Export Enquiry: ${formData.name} (${formData.company || "Individual"})`,
          _replyto: formData.email,
          _captcha: "false",
          "Buyer Name": formData.name,
          "Company Name": formData.company,
          "Business Email": formData.email,
          "Destination Country": formData.country,
          "Product Interest": formData.product,
          "Quantity Required": formData.quantity,
          "Message / Specifications": formData.message,
        }),
      });
      setSubmitted(true);
    } catch (err) {
      console.error("Catalog mail submission error:", err);
      const mailtoSubject = encodeURIComponent(`Export Enquiry: ${formData.name} - ${formData.product}`);
      const mailtoBody = encodeURIComponent(
        `Buyer Name: ${formData.name}\nCompany: ${formData.company}\nEmail: ${formData.email}\nCountry: ${formData.country}\nProduct: ${formData.product}\nQuantity: ${formData.quantity}\nMessage: ${formData.message}`
      );
      window.open(`mailto:contact@dasaexports.com?subject=${mailtoSubject}&body=${mailtoBody}`, '_blank');
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="font-body bg-[#FAF8F2] min-h-screen text-[#172019]">
      
      {/* 01 — CATALOG HERO */}
      <section className="relative pt-16 md:pt-24 pb-20 md:pb-28 bg-[#FAF8F2] overflow-hidden border-b border-slate-200/70">
        <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left side: Editorial Headline & Actions */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Brand Label */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border border-[#2E7D32]/20 rounded-full shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#F15A24]" />
                <span className="font-eyebrow text-[11px] text-[#2E7D32] uppercase tracking-[0.2em] font-bold">
                  DASA EXPORT · PRODUCT CATALOG
                </span>
              </div>

              {/* Large Headline */}
              <h1 className="font-display-lg text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-[#172019] leading-[1.08] tracking-tight">
                A Complete Collection of Nature’s Finest Ingredients.
              </h1>

              {/* Supporting Paragraph */}
              <p className="font-body-lg text-base sm:text-lg text-[#5A4139] leading-relaxed max-w-2xl font-normal">
                Explore our range of premium agricultural powders, dehydrated vegetables, spices and natural food ingredients prepared for global markets.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href="/products/catalog-banner.jpg"
                  download="Dasa_Export_Catalog_2026.pdf"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#F15A24] text-white font-eyebrow text-xs uppercase tracking-[0.15em] font-bold rounded-lg hover:bg-[#0B2B1B] transition-colors shadow-md group"
                >
                  <Download size={16} />
                  <span>Download Catalog PDF</span>
                </a>

                <Link
                  to="/products"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white border border-[#2E7D32] text-[#0B2B1B] font-eyebrow text-xs uppercase tracking-[0.15em] font-bold rounded-lg hover:bg-[#FAF8F2] transition-colors shadow-sm"
                >
                  <span>Explore Products</span>
                  <ArrowRight size={16} className="text-[#2E7D32]" />
                </Link>
              </div>

            </div>

            {/* Right side: Large Artistic Product Photography Composition (No boring box) */}
            <div className="lg:col-span-5 relative">
              <div className="relative w-full aspect-[4/3.5] sm:aspect-[4/3] flex items-center justify-center">
                
                {/* Overlapping Product Photography Cards Composition */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#2E7D32]/10 to-[#F15A24]/10 rounded-3xl -rotate-2 scale-95 pointer-events-none" />

                {/* Main Large Product Frame */}
                <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-white/80 bg-white group">
                  <img
                    src="/products/tomato.jpg"
                    alt="Dasa Export Tomato Powder Sourcing"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B2B1B]/70 via-transparent to-transparent" />
                  
                  {/* Floating Product Badge */}
                  <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-white/80 shadow-lg flex items-center justify-between">
                    <div>
                      <span className="font-eyebrow text-[10px] text-[#F15A24] uppercase tracking-widest font-bold block mb-0.5">
                        NATURAL INGREDIENTS
                      </span>
                      <h4 className="font-serif font-bold text-lg text-[#172019]">Tomato &amp; Moringa Powders</h4>
                    </div>
                    <span className="font-eyebrow text-[11px] font-bold text-[#2E7D32] bg-[#2E7D32]/10 px-3 py-1 rounded-full">
                      EXPORT READY
                    </span>
                  </div>
                </div>

                {/* Overlapping Secondary Card */}
                <div className="absolute -bottom-6 -left-6 z-20 w-44 h-44 rounded-2xl overflow-hidden shadow-xl border-4 border-white hidden sm:block">
                  <img
                    src="/products/turmeric.jpg"
                    alt="Turmeric Powder"
                    className="w-full h-full object-cover"
                  />
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>


      {/* 02 — PRODUCT CATEGORIES */}
      <section className="py-16 md:py-24 bg-white border-b border-slate-200/70">
        <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display-lg text-3xl md:text-5xl font-serif font-bold text-[#172019] mb-3">
              Explore Our Product Range
            </h2>
            <p className="font-body-md text-base text-[#5A4139] leading-relaxed">
              Carefully sourced and processed ingredients for food manufacturers, distributors and global buyers.
            </p>
          </div>

          {/* Horizontal Category Filter Bar with Active Underline */}
          <div className="flex items-center justify-center gap-2 sm:gap-4 overflow-x-auto pb-4 scrollbar-none border-b border-slate-200/80 max-w-4xl mx-auto">
            {categoriesList.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`relative py-3 px-4 font-eyebrow text-xs uppercase tracking-widest transition-colors font-bold whitespace-nowrap ${
                    isActive ? "text-[#F15A24]" : "text-[#5A4139] hover:text-[#172019]"
                  }`}
                >
                  <span>{cat}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#F15A24] rounded-full transition-all duration-300" />
                  )}
                </button>
              );
            })}
          </div>

        </div>
      </section>


      {/* 03 — FEATURED PRODUCT (Editorial Showcase) */}
      <section className="py-20 md:py-28 max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-slate-200/80 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT: Huge product photograph */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-slate-100 group">
              <img
                src="/products/tomato.jpg"
                alt="Tomato Powder Industrial Grade"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-eyebrow font-bold text-[#F15A24] uppercase tracking-wider shadow-sm">
                FLAGSHIP EXPORT COMMODITY
              </div>
            </div>
          </div>

          {/* RIGHT: Editorial Info & Specifications */}
          <div className="lg:col-span-6 space-y-6">
            <div className="font-eyebrow text-xs uppercase tracking-[0.2em] text-[#F4A62A] font-bold">
              01 / FEATURED PRODUCT
            </div>

            <h2 className="font-display-lg text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#172019]">
              Tomato Powder
            </h2>

            <p className="font-serif italic text-lg md:text-xl text-[#2E7D32] leading-relaxed">
              &ldquo;Rich natural color, balanced flavour and carefully processed for consistent industrial applications.&rdquo;
            </p>

            {/* Information Grid */}
            <div className="grid grid-cols-2 gap-4 py-4 border-y border-slate-200/80 text-sm">
              <div>
                <span className="font-eyebrow text-[10px] text-[#5A4139] uppercase tracking-widest font-bold block mb-0.5">
                  Origin
                </span>
                <span className="font-serif font-bold text-[#172019] text-base">India</span>
              </div>
              <div>
                <span className="font-eyebrow text-[10px] text-[#5A4139] uppercase tracking-widest font-bold block mb-0.5">
                  Form
                </span>
                <span className="font-serif font-bold text-[#172019] text-base">Fine Powder</span>
              </div>
              <div>
                <span className="font-eyebrow text-[10px] text-[#5A4139] uppercase tracking-widest font-bold block mb-0.5">
                  Application
                </span>
                <span className="font-serif font-bold text-[#172019] text-base">Food &amp; Beverage</span>
              </div>
              <div>
                <span className="font-eyebrow text-[10px] text-[#5A4139] uppercase tracking-widest font-bold block mb-0.5">
                  Packaging
                </span>
                <span className="font-serif font-bold text-[#172019] text-base">10–25 kg</span>
              </div>
            </div>

            {/* Button */}
            <div>
              <Link
                to="/products/tomato-powder"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#F15A24] text-white font-eyebrow text-xs uppercase tracking-[0.15em] font-bold rounded-lg hover:bg-[#0B2B1B] transition-colors shadow-md group"
              >
                <span>View Product</span>
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

          </div>

        </div>
      </section>


      {/* 04 — PRODUCT COLLECTION (Asymmetric Grid Layout) */}
      <section className="py-20 max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop">
        
        <div className="mb-12">
          <span className="font-eyebrow text-xs uppercase tracking-[0.2em] text-[#F4A62A] font-bold block mb-2">
            GLOBAL EXPORT CATALOG
          </span>
          <h2 className="font-display-lg text-3xl md:text-5xl font-serif font-bold text-[#172019]">
            Product Collection
          </h2>
        </div>

        {/* Asymmetric Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <Link
              key={product.id}
              to={`/products/${product.id}`}
              className="group bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Container with Smooth Zoom Hover */}
              <div className="h-64 sm:h-72 w-full overflow-hidden bg-slate-50 relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                />
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-eyebrow font-bold text-[#2E7D32] uppercase tracking-wider shadow-2xs">
                  {product.categoryLabel}
                </span>
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="font-display-lg text-xl md:text-2xl font-serif font-bold text-[#172019] group-hover:text-[#F15A24] transition-colors mb-2">
                    {product.name}
                  </h3>
                  <p className="font-body-md text-sm text-[#5A4139] leading-relaxed line-clamp-2 mb-6">
                    {product.shortDesc}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100 text-xs">
                  <span className="font-eyebrow uppercase tracking-wider text-[#5A4139] font-bold">
                    Form: {product.form.split(' ')[0]}
                  </span>
                  <span className="inline-flex items-center gap-1 font-eyebrow text-xs uppercase tracking-wider font-bold text-[#F15A24] group-hover:translate-x-1 transition-transform">
                    <span>View Details</span>
                    <ChevronRight size={14} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </section>


      {/* 05 — CATEGORY FEATURE BANNER (Dehydrated Vegetables Showcase) */}
      <section className="py-20 md:py-28 bg-[#0B2B1B] text-white relative overflow-hidden border-y border-emerald-950">
        <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left side info */}
            <div className="lg:col-span-6 space-y-6">
              <span className="font-eyebrow text-xs uppercase tracking-[0.2em] text-[#F4A62A] font-bold block">
                SPECIALTY CATEGORY
              </span>

              <h2 className="font-display-lg text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white leading-tight">
                Dehydrated Vegetables
              </h2>

              <p className="font-body-lg text-base md:text-lg text-white/80 leading-relaxed font-normal">
                Carefully dehydrated vegetables that preserve natural flavour, colour and convenience for food manufacturing and culinary applications.
              </p>

              {/* Feature Checklist */}
              <ul className="grid grid-cols-2 gap-3 pt-2 text-sm text-white/90 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#F15A24]" />
                  <span>Dehydrated Garlic</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#F15A24]" />
                  <span>Dehydrated Onion</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#F15A24]" />
                  <span>Dehydrated Carrot</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#F15A24]" />
                  <span>Dehydrated Capsicum</span>
                </li>
              </ul>

              <div className="pt-4">
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#F15A24] text-white font-eyebrow text-xs uppercase tracking-[0.15em] font-bold rounded-lg hover:bg-white hover:text-[#0B2B1B] transition-colors shadow-md group"
                >
                  <span>Explore Dehydrated Vegetables</span>
                  <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Right side photography */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white/20">
                <img
                  src="/products/garlic.jpg"
                  alt="Dehydrated Garlic and Vegetables"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* 06 — PRODUCT SPECIFICATIONS (Clean Product Datasheet Selector) */}
      <section className="py-20 md:py-28 max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-eyebrow text-xs uppercase tracking-[0.2em] text-[#F4A62A] font-bold block mb-2">
            TECHNICAL DATASHEET
          </span>
          <h2 className="font-display-lg text-3xl md:text-4xl font-serif font-bold text-[#172019]">
            Product Specifications
          </h2>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200/80 shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left: Product Selector List */}
          <div className="lg:col-span-4 bg-[#FAF8F2] border-b lg:border-b-0 lg:border-r border-slate-200/80 p-6 space-y-2">
            <span className="font-eyebrow text-[10px] text-[#5A4139] uppercase tracking-widest font-bold block mb-4">
              SELECT COMMODITY
            </span>
            {Object.keys(DATASHEET_SPECS).map((productName) => {
              const isSelected = selectedSpecProduct === productName;
              return (
                <button
                  key={productName}
                  onClick={() => setSelectedSpecProduct(productName)}
                  className={`w-full text-left py-3.5 px-4 rounded-xl font-serif font-bold text-base transition-all flex items-center justify-between ${
                    isSelected
                      ? "bg-[#0B2B1B] text-white shadow-sm"
                      : "text-[#172019] hover:bg-slate-200/60"
                  }`}
                >
                  <span>{productName}</span>
                  <ChevronRight size={16} className={isSelected ? "text-[#F15A24]" : "opacity-30"} />
                </button>
              );
            })}
          </div>

          {/* Right: Selected Product Datasheet */}
          <div className="lg:col-span-8 p-8 sm:p-12 space-y-8">
            <div className="flex items-center justify-between border-b border-slate-200/80 pb-4">
              <div>
                <span className="font-eyebrow text-[10px] text-[#F15A24] uppercase tracking-widest font-bold block mb-1">
                  OFFICIAL DATASHEET
                </span>
                <h3 className="font-display-lg text-2xl md:text-3xl font-serif font-bold text-[#172019]">
                  {selectedSpecProduct}
                </h3>
              </div>
              <span className="font-eyebrow text-xs font-bold text-[#2E7D32] bg-[#2E7D32]/10 px-3 py-1 rounded-full">
                EXPORT GRADE
              </span>
            </div>

            {/* Spec Details Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-sm">
              <div className="space-y-1">
                <span className="font-eyebrow text-[10px] text-[#5A4139] uppercase tracking-wider font-bold block">
                  Product Form
                </span>
                <span className="font-serif font-bold text-[#172019] text-base">
                  {DATASHEET_SPECS[selectedSpecProduct].form}
                </span>
              </div>

              <div className="space-y-1">
                <span className="font-eyebrow text-[10px] text-[#5A4139] uppercase tracking-wider font-bold block">
                  Moisture
                </span>
                <span className="font-serif font-bold text-[#172019] text-base">
                  {DATASHEET_SPECS[selectedSpecProduct].moisture}
                </span>
              </div>

              <div className="space-y-1">
                <span className="font-eyebrow text-[10px] text-[#5A4139] uppercase tracking-wider font-bold block">
                  Mesh Size
                </span>
                <span className="font-serif font-bold text-[#172019] text-base">
                  {DATASHEET_SPECS[selectedSpecProduct].mesh}
                </span>
              </div>

              <div className="space-y-1">
                <span className="font-eyebrow text-[10px] text-[#5A4139] uppercase tracking-wider font-bold block">
                  Shelf Life
                </span>
                <span className="font-serif font-bold text-[#172019] text-base">
                  {DATASHEET_SPECS[selectedSpecProduct].shelfLife}
                </span>
              </div>

              <div className="space-y-1">
                <span className="font-eyebrow text-[10px] text-[#5A4139] uppercase tracking-wider font-bold block">
                  Origin
                </span>
                <span className="font-serif font-bold text-[#172019] text-base">
                  {DATASHEET_SPECS[selectedSpecProduct].origin}
                </span>
              </div>

              <div className="space-y-1">
                <span className="font-eyebrow text-[10px] text-[#5A4139] uppercase tracking-wider font-bold block">
                  Packaging
                </span>
                <span className="font-serif font-bold text-[#172019] text-base">
                  {DATASHEET_SPECS[selectedSpecProduct].packaging}
                </span>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-[#5A4139]">
              <span className="font-eyebrow uppercase tracking-wider">Solubility: {DATASHEET_SPECS[selectedSpecProduct].solubility}</span>
              <a href="#enquiry-form" className="font-bold text-[#F15A24] hover:underline">Request Custom Spec Sheet →</a>
            </div>
          </div>

        </div>

      </section>


      {/* 07 — PACKAGING (Packaging Designed for Global Supply) */}
      <section className="py-20 max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop">
        
        <div className="mb-12">
          <span className="font-eyebrow text-xs uppercase tracking-[0.2em] text-[#F4A62A] font-bold block mb-2">
            BULK LOGISTICS
          </span>
          <h2 className="font-display-lg text-3xl md:text-5xl font-serif font-bold text-[#172019]">
            Packaging Designed for Global Supply
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PACKAGING_FORMATS.map((pkg, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-2xs flex flex-col justify-between group"
            >
              <div className="h-56 w-full overflow-hidden bg-slate-100">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-display-lg text-xl font-serif font-bold text-[#172019]">
                    {pkg.title}
                  </h3>
                  <span className="font-eyebrow text-xs font-bold text-[#2E7D32] bg-[#2E7D32]/10 px-3 py-1 rounded-full">
                    {pkg.capacity}
                  </span>
                </div>
                <p className="font-body-md text-sm text-[#5A4139] leading-relaxed">
                  {pkg.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </section>


      {/* 08 — QUALITY & CERTIFICATIONS (Clean Certificate Slider Showcase) */}
      <section className="py-20 bg-white border-t border-slate-200/80">
        <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-eyebrow text-xs uppercase tracking-[0.2em] text-[#F4A62A] font-bold block mb-2">
              STATUTORY COMPLIANCE
            </span>
            <h2 className="font-display-lg text-3xl md:text-5xl font-serif font-bold text-[#172019]">
              Quality You Can Trust
            </h2>
          </div>

          {/* Certificate Cards Showcase Slider */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {CERTIFICATES.map((cert, idx) => (
              <div
                key={cert.id}
                onClick={() => setActiveCertIndex(idx)}
                className={`bg-[#FAF8F2] border rounded-2xl p-4 transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  activeCertIndex === idx
                    ? "border-[#F15A24] shadow-md scale-102 bg-white"
                    : "border-slate-200/80 hover:border-slate-300"
                }`}
              >
                <div className="h-48 w-full bg-white rounded-xl p-3 flex items-center justify-center overflow-hidden border border-slate-100 mb-4">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-base text-[#172019] mb-0.5">{cert.title}</h4>
                  <p className="text-xs text-[#5A4139] leading-tight">{cert.authority}</p>
                </div>
                <Link
                  to="/certificates"
                  className="inline-flex items-center gap-1 text-[11px] font-eyebrow uppercase font-bold text-[#F15A24] mt-3 hover:underline"
                >
                  <span>View Certificate</span>
                  <ChevronRight size={12} />
                </Link>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* 09 — EXPORT READY (Deep Green Global Readiness) */}
      <section className="py-20 md:py-28 bg-[#0B2B1B] text-white relative overflow-hidden">
        {/* Subtle Map Background Pattern */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(241,90,36,0.6) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
          <div className="max-w-3xl">
            <span className="font-eyebrow text-xs uppercase tracking-[0.2em] text-[#F4A62A] font-bold block mb-3">
              GLOBAL LOGISTICS
            </span>
            <h2 className="font-display-lg text-4xl md:text-6xl font-serif font-bold text-white mb-8 leading-tight">
              Prepared for Global Markets.
            </h2>

            <div className="grid sm:grid-cols-2 gap-4 text-base font-medium text-white/90 mb-10">
              <div className="flex items-center gap-3">
                <CheckCircle2 size={20} className="text-[#F15A24]" />
                <span>Export-grade packaging</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 size={20} className="text-[#F15A24]" />
                <span>Quality inspection</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 size={20} className="text-[#F15A24]" />
                <span>International documentation</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 size={20} className="text-[#F15A24]" />
                <span>Reliable logistics</span>
              </div>
              <div className="flex items-center gap-3 sm:col-span-2">
                <CheckCircle2 size={20} className="text-[#F15A24]" />
                <span>Global delivery across 15+ countries</span>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* 10 — DOWNLOAD CATALOG CTA (Full Width Premium CTA) */}
      <section className="py-20 bg-[#FAF8F2] border-t border-slate-200/80">
        <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="bg-white rounded-3xl p-8 md:p-14 border border-slate-200/80 shadow-md flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl space-y-3">
              <span className="font-eyebrow text-xs uppercase tracking-[0.2em] text-[#2E7D32] font-bold block">
                FULL SPECIFICATIONS &amp; PRICING
              </span>
              <h2 className="font-display-lg text-3xl md:text-4xl font-serif font-bold text-[#172019]">
                Looking for the Complete Product Range?
              </h2>
              <p className="font-body-md text-base text-[#5A4139] leading-relaxed">
                Download the Dasa Export product catalog for detailed product information, specifications and packaging options.
              </p>
            </div>

            <a
              href="/products/catalog-banner.jpg"
              download="Dasa_Export_Product_Catalog_2026.pdf"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#F15A24] text-white font-eyebrow text-xs uppercase tracking-[0.15em] font-bold rounded-lg hover:bg-[#0B2B1B] transition-colors shadow-md shrink-0"
            >
              <Download size={16} />
              <span>Download Product Catalog PDF →</span>
            </a>
          </div>
        </div>
      </section>


      {/* 11 — EXPORT ENQUIRY (Two Column Form Section) */}
      <section id="enquiry-form" className="py-20 md:py-28 max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop">
        
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <span className="font-eyebrow text-xs uppercase tracking-[0.2em] text-[#F4A62A] font-bold block mb-2">
            DIRECT TRADE DESK
          </span>
          <h2 className="font-display-lg text-3xl md:text-5xl font-serif font-bold text-[#172019]">
            Tell Us What You’re Looking For.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-md">
          
          {/* LEFT: Beautiful Agricultural Product Photo */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/products/catalog-banner.jpg"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/products/turmeric.jpg";
                }}
                alt="Agricultural Sourcing"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2B1B]/80 via-transparent to-transparent p-6 flex flex-col justify-end text-white">
                <span className="font-eyebrow text-[10px] text-[#F4A62A] uppercase tracking-widest font-bold mb-1">
                  24H RESPONSE SLA
                </span>
                <h4 className="font-serif font-bold text-xl">Direct Commercial Quotes</h4>
                <p className="text-xs text-white/80">Tailored FCL pricing &amp; custom container parameters.</p>
              </div>
            </div>
          </div>

          {/* RIGHT: Clean Enquiry Form */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="bg-[#FAF8F2] p-8 rounded-2xl border border-slate-200 text-center space-y-4">
                <div className="w-12 h-12 mx-auto rounded-full bg-[#2E7D32]/10 text-[#2E7D32] flex items-center justify-center">
                  <Check size={24} />
                </div>
                <h3 className="font-serif font-bold text-2xl text-[#172019]">Export Enquiry Received</h3>
                <p className="font-body-md text-sm text-[#5A4139]">
                  Thank you for reaching out to Dasa Export. Our trade desk will review your specifications and reply with quotation within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-3 bg-[#F15A24] text-white font-eyebrow text-xs uppercase tracking-widest font-bold rounded-lg"
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="font-eyebrow text-xs text-[#5A4139] uppercase tracking-wider block mb-2 font-bold">
                      Your Name *
                    </label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full bg-[#FAF8F2] border border-slate-200 rounded-lg px-4 py-3 text-sm text-[#172019] focus:outline-none focus:border-[#F15A24]"
                    />
                  </div>

                  <div>
                    <label className="font-eyebrow text-xs text-[#5A4139] uppercase tracking-wider block mb-2 font-bold">
                      Company *
                    </label>
                    <input
                      required
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Global Food Ingredients Inc"
                      className="w-full bg-[#FAF8F2] border border-slate-200 rounded-lg px-4 py-3 text-sm text-[#172019] focus:outline-none focus:border-[#F15A24]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="font-eyebrow text-xs text-[#5A4139] uppercase tracking-wider block mb-2 font-bold">
                      Email Address *
                    </label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="buyer@company.com"
                      className="w-full bg-[#FAF8F2] border border-slate-200 rounded-lg px-4 py-3 text-sm text-[#172019] focus:outline-none focus:border-[#F15A24]"
                    />
                  </div>

                  <div>
                    <label className="font-eyebrow text-xs text-[#5A4139] uppercase tracking-wider block mb-2 font-bold">
                      Destination Country *
                    </label>
                    <input
                      required
                      type="text"
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      placeholder="e.g. Germany, UAE, USA"
                      className="w-full bg-[#FAF8F2] border border-slate-200 rounded-lg px-4 py-3 text-sm text-[#172019] focus:outline-none focus:border-[#F15A24]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="font-eyebrow text-xs text-[#5A4139] uppercase tracking-wider block mb-2 font-bold">
                      Product Interest
                    </label>
                    <select
                      value={formData.product}
                      onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                      className="w-full bg-[#FAF8F2] border border-slate-200 rounded-lg px-4 py-3 text-sm text-[#172019] focus:outline-none focus:border-[#F15A24]"
                    >
                      {CATALOG_PRODUCTS.map((p) => (
                        <option key={p.id} value={p.name}>
                          {p.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="font-eyebrow text-xs text-[#5A4139] uppercase tracking-wider block mb-2 font-bold">
                      Estimated Quantity (MT)
                    </label>
                    <input
                      type="text"
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                      placeholder="e.g. 25 MT"
                      className="w-full bg-[#FAF8F2] border border-slate-200 rounded-lg px-4 py-3 text-sm text-[#172019] focus:outline-none focus:border-[#F15A24]"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-eyebrow text-xs text-[#5A4139] uppercase tracking-wider block mb-2 font-bold">
                    Message &amp; Specifications
                  </label>
                  <textarea
                    rows="3"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Specify mesh size, packaging parameters, or delivery schedule..."
                    className="w-full bg-[#FAF8F2] border border-slate-200 rounded-lg px-4 py-3 text-[#172019] text-sm focus:outline-none focus:border-[#F15A24] resize-none"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#F15A24] text-white font-eyebrow text-xs uppercase tracking-[0.15em] font-bold rounded-lg hover:bg-[#0B2B1B] transition-colors shadow-md w-full sm:w-auto disabled:opacity-60 cursor-pointer"
                  >
                    <Send size={15} />
                    <span>{loading ? "Submitting..." : "Send Export Enquiry"}</span>
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

      </section>

    </div>
  );
}