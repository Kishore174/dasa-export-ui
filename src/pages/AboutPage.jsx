import React from "react";
import { Sprout, ShieldCheck, Globe, Award, ArrowRight, Building2 } from "lucide-react";
import WhyChoose from "../components/ui/WhyChoose";
import { Link } from "react-router-dom";

const companyStats = [
  { label: "Founded", value: "2018" },
  { label: "Active Export Countries", value: "15+" },
  { label: "Farmer Partners", value: "200+" },
  { label: "Annual Export Capacity", value: "5,000+ MT" },
];

const values = [
  {
    icon: Sprout,
    title: "100% Organic & Traceable",
    desc: "Every product batch originates from certified farm partners across South India, fully traceable from soil to final container seal.",
    accent: "#2E7D32",
  },
  {
    icon: ShieldCheck,
    title: "Uncompromised Quality Gate",
    desc: "Processed in GMP-certified facilities and validated by independent SGS & Geo-Chem laboratories prior to port dispatch.",
    accent: "#F15A24",
  },
  {
    icon: Globe,
    title: "Seamless Global Freight",
    desc: "Handling door-to-port maritime shipping with complete APEDA, Phytosanitary, and customs clearance paperwork.",
    accent: "#A16900",
  },
];

const AboutPage = () => {
  return (
    <div className="font-body bg-white min-h-screen">
      {/* Header Banner — Pure Light Crisp Theme */}
      <section className="relative py-20 md:py-28 bg-[#FAF8F2] text-[#0B2B1B] overflow-hidden border-b border-slate-200/80">
        {/* Soft Background Photography Layer */}
        <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
          <img
            src="/about-hero-bg.jpg"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://images.unsplash.com/photo-1509358271058-acd02cc93898?auto=format&fit=crop&w=2000&q=85";
            }}
            alt="South India Organic Spice Farm Plantation"
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop">
          <span className="font-eyebrow inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#0B2B1B]/15 bg-white/90 backdrop-blur-sm text-[11px] uppercase tracking-[0.2em] text-[#F15A24] font-bold mb-6 shadow-sm">
            <Building2 size={14} className="text-[#F15A24]" />
            About Dasa Export
          </span>

          <h1 className="font-display-lg text-4xl md:text-6xl font-serif font-bold max-w-4xl leading-tight text-[#0B2B1B]">
            Connecting India&rsquo;s Agricultural Richness to Global Markets.
          </h1>

          <p className="mt-6 text-base md:text-lg leading-relaxed text-[#5A4139] max-w-2xl font-normal">
            Headquartered in Tamil Nadu, India, Dasa Export is a premier grower, processor, and exporter of organic botanicals, dehydrated spices, and spray-dried agricultural powders.
          </p>

          {/* Stats strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-10 border-t border-slate-200/80">
            {companyStats.map((st) => (
              <div key={st.label}>
                <h3 className="font-display-lg text-3xl md:text-5xl font-serif font-bold text-[#A16900]">{st.value}</h3>
                <p className="font-eyebrow text-xs uppercase tracking-widest text-[#5A4139] mt-2 font-bold">{st.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Mission & Story Section — Optimized Responsive Layout */}
      <section className="py-12 sm:py-16 md:py-24 max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-start">
          
          {/* Left Column (7 cols): Editorial Story */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="font-eyebrow text-xs uppercase tracking-[0.2em] text-[#D4A359] font-bold block mb-2 sm:mb-3">
              Our Legacy &amp; Vision
            </span>

            <h2 className="font-display-lg text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#0B2B1B] leading-tight sm:leading-snug">
              Pioneering Sustainable Agricultural Exports from South India
            </h2>

            <p className="mt-4 sm:mt-6 text-[#5A4139] leading-relaxed text-sm sm:text-base">
              Founded with a mission to deliver unadulterated Indian agricultural produce to international buyers, Dasa Export bridges smallholder organic farmers with food manufacturers across Europe, the Middle East, North America, and Asia-Pacific.
            </p>

            <p className="mt-3 sm:mt-4 text-[#5A4139] leading-relaxed text-sm sm:text-base">
              From high-curcumin turmeric and spray-dried tomato powder to nutrient-dense moringa and cold-milled beetroot, our state-of-the-art processing facility in Tamil Nadu ensures that natural flavor, color, and bio-active potency are fully preserved.
            </p>

            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3.5 sm:gap-4">
              <Link
                to="/products"
                className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-[#F15A24] text-white font-eyebrow text-xs uppercase tracking-[0.15em] font-bold rounded hover:bg-[#0B2B1B] transition-colors shadow-md w-full sm:w-auto text-center"
              >
                <span>Explore Export Products</span>
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/certificates"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-white border border-[#2E7D32] text-[#0B2B1B] font-eyebrow text-xs uppercase tracking-[0.15em] font-bold rounded hover:bg-[#FAF8F2] transition-colors shadow-sm w-full sm:w-auto text-center"
              >
                <Award size={16} className="text-[#D4A359]" />
                <span>View Certifications</span>
              </Link>
            </div>
          </div>

          {/* Right Column (5 cols): Responsive Values Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4 sm:gap-6 mt-2 lg:mt-0 w-full">
            {values.map((v) => {
              const Icon = v.icon;

              return (
                <div
                  key={v.title}
                  className="border border-[#0B2B1B]/10 p-5 sm:p-6 md:p-8 bg-[#FAF8F2] rounded-xl transition-all duration-300 hover:border-[#0B2B1B]/25 hover:shadow-sm"
                >
                  <div className="flex items-center gap-3.5 sm:gap-4 mb-3 sm:mb-4">
                    <div
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center text-white shrink-0 shadow-sm"
                      style={{ background: v.accent }}
                    >
                      <Icon size={20} className="sm:w-[22px] sm:h-[22px]" />
                    </div>
                    <h3 className="font-display-lg text-lg sm:text-xl font-serif font-bold text-[#0B2B1B] leading-snug">
                      {v.title}
                    </h3>
                  </div>
                  <p className="text-[#5A4139] text-xs sm:text-sm leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>
      {/* Why Choose Section */}
      <WhyChoose />
    </div>
  );
};

export default AboutPage;
