import React from "react";
import { CreditCard, FileCheck, ShieldCheck, DollarSign, Package, CheckCircle2, Building, Truck } from "lucide-react";

const paymentMethods = [
  {
    num: "01",
    title: "100% Advance Payment",
    desc: "Payment via T/T (Telegraphic Transfer) prior to production and shipment dispatch.",
    badge: "Direct Advance",
    accent: "#8FAE6B",
    icon: DollarSign,
  },
  {
    num: "02",
    title: "100% T/T (Telegraphic Transfer)",
    desc: "Direct bank-to-bank wire transfer prior to container loading.",
    badge: "Wire Transfer",
    accent: "#B08A3E",
    icon: CreditCard,
  },
  {
    num: "03",
    title: "100% Irrevocable & Confirmed LC (30/45/60 Days Usance)",
    desc: "Letter of Credit backed by a prime first-class international bank with 30, 45, or 60 days usance terms.",
    badge: "Usance L/C",
    accent: "#1D3624",
    icon: FileCheck,
  },
  {
    num: "04",
    title: "50% Advance & 50% Balance via LC (30/45/60 Days)",
    desc: "50% advance deposit via T/T and the remaining 50% balance structured through usance LC.",
    badge: "Hybrid L/C",
    accent: "#E3A62F",
    icon: ShieldCheck,
  },
  {
    num: "05",
    title: "LC at Sight",
    desc: "100% payment release immediately upon shipment and submission of compliant export documents to the bank.",
    badge: "L/C at Sight",
    accent: "#C43E2A",
    icon: FileCheck,
  },
  {
    num: "06",
    title: "50% Advance & 50% Against BL Copy",
    desc: "50% advance deposit via T/T, and the remaining 50% balance payable against scanned Bill of Lading (B/L) copy.",
    badge: "B/L Release",
    accent: "#9C8563",
    icon: Package,
  },
  {
    num: "07",
    title: "50% Advance via T/T & 50% Pre-Vessel Departure",
    desc: "50% advance via T/T, and the remaining 50% balance immediate T/T release upon sharing scanned copy of B/L before final vessel departure.",
    badge: "Pre-Departure T/T",
    accent: "#5D6B4F",
    icon: Truck,
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
      className="relative py-28 font-body overflow-hidden bg-white"
    >
      {/* Background accents */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
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
            Commercial Trade Options
          </span>

          <h2
            className="font-display text-4xl lg:text-5xl font-semibold mt-6"
            style={{ color: "var(--ink, #0D1810)" }}
          >
            Flexible Commercial Payment Terms
          </h2>

          <p className="mt-6 text-gray-600 leading-8 text-lg">
            We offer 7 flexible international commercial payment structures designed to support food manufacturers, distributors, and global importers.
          </p>
        </div>

        {/* Payment Methods Grid — 7 Options */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {paymentMethods.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-1.5 shadow-sm hover:shadow-xl flex flex-col justify-between group relative overflow-hidden"
              style={{ borderColor: "rgba(13,24,16,0.1)" }}
            >
              <div className="h-1.5 absolute top-0 left-0 right-0" style={{ background: item.accent }} />

              <div>
                <div className="flex items-center justify-between gap-2 mb-6">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 text-white shadow-md"
                      style={{ background: item.accent }}
                    >
                      <item.icon size={22} />
                    </div>
                    <span className="font-mono text-xs font-bold text-gray-400">
                      Option #{item.num}
                    </span>
                  </div>

                  <span
                    className="font-mono text-[9.5px] uppercase tracking-wider px-3 py-1 rounded-full border font-semibold"
                    style={{ borderColor: `${item.accent}44`, color: item.accent, background: `${item.accent}10` }}
                  >
                    {item.badge}
                  </span>
                </div>

                <h3 className="font-display text-xl font-semibold text-[#0D1810] group-hover:text-[var(--gold)] transition-colors">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div
                className="mt-6 pt-4 border-t flex items-center justify-between text-xs font-medium text-emerald-700"
                style={{ borderColor: "rgba(13,24,16,0.06)" }}
              >
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={15} />
                  Bank Compliant
                </span>
                <span className="font-mono text-[10px] text-gray-400">ISO 22000 Certified</span>
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
