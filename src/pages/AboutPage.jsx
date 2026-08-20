import React from "react";
import { Sprout, ShieldCheck, Globe, Award, CheckCircle2, ArrowRight, Building2, MapPin, Users, Target } from "lucide-react";
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
    accent: "#8FAE6B",
  },
  {
    icon: ShieldCheck,
    title: "Uncompromised Quality Gate",
    desc: "Processed in GMP-certified facilities and validated by independent SGS & Geo-Chem laboratories prior to port dispatch.",
    accent: "#B08A3E",
  },
  {
    icon: Globe,
    title: "Seamless Global Freight",
    desc: "Handling door-to-port maritime shipping with complete APEDA, Phytosanitary, and customs clearance paperwork.",
    accent: "#C43E2A",
  },
];

const AboutPage = () => {
  return (
    <div className="pt-[72px] font-body bg-white min-h-screen">
      {/* Header Banner */}
      <section className="relative py-28 bg-[#0A1A0F] text-white overflow-hidden">
        {/* AI Generated Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/about-hero-bg.jpg"
            alt="South India Organic Spice Farm Plantation"
            className="w-full h-full object-cover object-center scale-105"
            style={{ filter: "brightness(0.7) contrast(1.1)" }}
          />
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
                "radial-gradient(circle at 30% 40%, rgba(176,138,62,0.15) 0%, transparent 65%)",
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <span className="font-mono inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[rgba(201,168,76,0.3)] bg-[rgba(10,26,15,0.6)] backdrop-blur-md text-[10.5px] uppercase tracking-[2.5px] text-[var(--gold)] mb-6">
            <Building2 size={13} />
            About DASA Exports
          </span>

          <h1 className="font-display text-4xl lg:text-6xl font-semibold max-w-3xl leading-tight">
            Connecting India&rsquo;s agricultural richness to global markets
          </h1>

          <p className="mt-6 text-base lg:text-lg leading-8 text-[rgba(255,255,255,0.78)] max-w-2xl">
            Headquartered in Tamil Nadu, India, DASA Exports is a premier grower, processor, and exporter of organic botanicals, dehydrated spices, and spray-dried agricultural powders.
          </p>

          {/* Stats strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-10 border-t border-[rgba(255,255,255,0.15)]">
            {companyStats.map((st) => (
              <div key={st.label}>
                <h3 className="font-display text-3xl lg:text-4xl font-bold text-[var(--gold)]">{st.value}</h3>
                <p className="font-mono text-xs uppercase tracking-wider text-[rgba(255,255,255,0.6)] mt-1">{st.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Mission & Story */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[2.5px] text-[var(--gold)]">
              Our Legacy &amp; Vision
            </span>

            <h2 className="font-display text-3xl lg:text-4xl font-semibold text-[var(--ink)] mt-4 leading-tight">
              Pioneering sustainable agricultural exports from South India
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              Founded with a mission to deliver unadulterated Indian agricultural produce to international buyers, DASA Exports bridges smallholder organic farmers with food manufacturers across Europe, the Middle East, North America, and Asia-Pacific.
            </p>

            <p className="mt-4 text-gray-600 leading-8">
              From high-curcumin turmeric and spray-dried tomato powder to nutrient-dense moringa and cold-milled beetroot, our state-of-the-art processing facility ensures that natural flavor, color, and bio-active potency are fully preserved.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/products"
                className="px-6 py-3.5 rounded-lg bg-[var(--ink)] text-white font-medium text-sm flex items-center gap-2 transition-transform hover:scale-[1.02]"
              >
                Explore Export Products
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/certificates"
                className="px-6 py-3.5 rounded-lg border border-gray-300 font-medium text-sm text-[var(--ink)] flex items-center gap-2 hover:bg-gray-50"
              >
                <Award size={16} style={{ color: "var(--gold)" }} />
                View Certifications
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {values.map((v) => {
              const Icon = v.icon;

              return (
                <div
                  key={v.title}
                  className="rounded-2xl border p-8 bg-[#F9FAFB] transition-all duration-300 hover:shadow-md"
                  style={{ borderColor: "rgba(20,33,26,0.08)" }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-white"
                      style={{ background: v.accent }}
                    >
                      <Icon size={22} />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-[var(--ink)]">{v.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
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
