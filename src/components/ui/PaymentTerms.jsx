import React from "react";
import { CreditCard, FileCheck, ShieldCheck, DollarSign, Package, CheckCircle2, Building, Truck } from "lucide-react";

const paymentMethods = [
  {
    icon: FileCheck,
    title: "Letter of Credit (L/C at Sight)",
    desc: "100% Irrevocable L/C at sight issued by first-class international banks. Ideal for 20ft & 40ft FCL container shipments.",
    badge: "Most Popular for FCL",
    accent: "#1D3624",
  },
  {
    icon: DollarSign,
    title: "Telegraphic Transfer (T/T Wire)",
    desc: "30% Advance deposit upon Proforma Invoice (PI) confirmation, 70% balance against scanned shipping documents & Bill of Lading (B/L).",
    badge: "Fastest Processing",
    accent: "#C43E2A",
  },
  {
    icon: ShieldCheck,
    title: "Documents Against Payment (D/P)",
    desc: "Available for established buyers and repeat trade partners upon credit evaluation and bank approval.",
    badge: "For Regular Buyers",
    accent: "#E3A62F",
  },
  {
    icon: Package,
    title: "Sample Order Policy",
    desc: "Free sample kits up to 500g per product. Express air courier freight payable via buyer DHL / FedEx / UPS account or T/T.",
    badge: "Free Sample Kit",
    accent: "#8FAE6B",
  },
];

const incoterms = [
  { term: "FOB (Free on Board)", detail: "Loaded at Tuticorin / Chennai Port, India." },
  { term: "CIF (Cost, Insurance & Freight)", detail: "Delivered to destination port with insurance." },
  { term: "CFR (Cost & Freight)", detail: "Ocean freight included to destination port." },
];

const documents = [
  "Commercial Invoice & Detailed Packing List",
  "APEDA Certificate of Origin (COO)",
  "Phytosanitary & Plant Quarantine Certificate",
  "Clean Shipped-on-Board Bill of Lading (B/L)",
  "Third-Party SGS / Geo-Chem Inspection Certificate",
  "Non-GMO & Heavy Metal Lab Analysis Test Report",
];

const PaymentTerms = () => {
  return (
    <section
      id="payment-terms"
      className="relative py-28 font-body overflow-hidden"
      style={{ background: "linear-gradient(to bottom, #FFFFFF, var(--cream, #F6EFDE), #FFFFFF)" }}
    >
      {/* Background accents */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(13,24,16,0.8) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span
            className="font-mono inline-flex items-center gap-2 px-4 py-2 rounded-full border text-[11px] uppercase tracking-[3px]"
            style={{ borderColor: "rgba(13,24,16,0.15)", color: "var(--tomato-dark, #9A3020)" }}
          >
            <CreditCard size={13} />
            Commercial Terms
          </span>

          <h2
            className="font-display text-4xl lg:text-5xl font-semibold mt-6"
            style={{ color: "var(--ink, #0D1810)" }}
          >
            Payment terms &amp; trade policies
          </h2>

          <p className="mt-6 text-gray-600 leading-8 text-lg">
            We offer transparent commercial terms, flexible international payment structures, and complete export documentation for hassle-free customs clearance.
          </p>
        </div>

        {/* Payment Methods Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {paymentMethods.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-[28px] border p-8 transition-all duration-300 hover:-translate-y-1.5 shadow-sm hover:shadow-xl flex flex-col justify-between"
              style={{ borderColor: "rgba(13,24,16,0.08)" }}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-6">
                  <div
                    className="w-12 h-12 rounded-full border-2 border-dashed flex items-center justify-center shrink-0"
                    style={{ borderColor: item.accent, color: item.accent }}
                  >
                    <item.icon size={22} />
                  </div>
                  <span
                    className="font-mono text-[9px] uppercase tracking-wider px-3 py-1 rounded-full border"
                    style={{ borderColor: `${item.accent}44`, color: item.accent, background: `${item.accent}10` }}
                  >
                    {item.badge}
                  </span>
                </div>

                <h3 className="font-display text-xl font-semibold text-[#0D1810]">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t flex items-center gap-1.5 text-xs font-medium text-emerald-700"
                style={{ borderColor: "rgba(13,24,16,0.06)" }}
              >
                <CheckCircle2 size={14} />
                Trade Safe Guaranteed
              </div>
            </div>
          ))}
        </div>

        {/* Shipping Documents & Incoterms Banner */}
        <div className="mt-16 rounded-[32px] overflow-hidden border shadow-xl p-8 lg:p-12 text-white"
          style={{ background: "var(--forest-950, #122318)", borderColor: "rgba(246,239,222,0.14)" }}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Export Documentation Package */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Building size={20} style={{ color: "var(--turmeric, #E3A62F)" }} />
                <span className="font-mono text-xs uppercase tracking-[2px]" style={{ color: "var(--turmeric, #E3A62F)" }}>
                  Customs Clearance Package
                </span>
              </div>
              <h3 className="font-display text-3xl font-semibold text-[#F6EFDE] mb-6">
                Complete Export Documentation Provided with Every Order
              </h3>

              <div className="grid sm:grid-cols-2 gap-3">
                {documents.map((doc, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-gray-300">
                    <CheckCircle2 size={15} className="shrink-0 mt-0.5" style={{ color: "var(--moringa, #8FAE6B)" }} />
                    <span>{doc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Incoterms & Currencies */}
            <div className="bg-white/5 rounded-[24px] p-6 lg:p-8 border"
              style={{ borderColor: "rgba(246,239,222,0.12)" }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Truck size={20} style={{ color: "var(--tomato, #C43E2A)" }} />
                <h4 className="font-display text-xl font-semibold text-[#F6EFDE]">
                  Supported Incoterms 2020
                </h4>
              </div>

              <ul className="space-y-3 mb-8">
                {incoterms.map((inco, idx) => (
                  <li key={idx} className="border-b pb-2 text-xs" style={{ borderColor: "rgba(246,239,222,0.1)" }}>
                    <strong className="text-[#F6EFDE] block text-sm font-semibold">{inco.term}</strong>
                    <span className="text-gray-400">{inco.detail}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t flex flex-wrap items-center justify-between gap-4"
                style={{ borderColor: "rgba(246,239,222,0.15)" }}
              >
                <span className="font-mono text-xs text-gray-400 uppercase tracking-wider">Accepted Currencies:</span>
                <div className="flex items-center gap-2 font-mono text-xs text-[#F6EFDE]">
                  <span className="px-2.5 py-1 rounded bg-white/10 font-bold">USD ($)</span>
                  <span className="px-2.5 py-1 rounded bg-white/10 font-bold">EUR (€)</span>
                  <span className="px-2.5 py-1 rounded bg-white/10 font-bold">AED (د.إ)</span>
                  <span className="px-2.5 py-1 rounded bg-white/10 font-bold">GBP (£)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentTerms;
