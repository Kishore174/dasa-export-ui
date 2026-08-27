import React from "react";
import {
  Landmark,
  FileText,
  CreditCard,
  Mail,
  MessageSquare,
  Clock,
  CheckCircle2,
  FileCheck,
  CalendarCheck2,
  TrendingUp,
  PackageCheck,
  Boxes,
  Award,
  ShieldCheck,
  BadgeCheck,
  Sparkles,
} from "lucide-react";

const paymentMethods = [
  {
    number: "01",
    icon: CreditCard,
    title: "100% Advance Payment",
    desc: "Payment via T/T (Telegraphic Transfer) prior to production / shipment.",
  },
  {
    number: "02",
    icon: Landmark,
    title: "100% T/T (Telegraphic Transfer)",
    desc: "Direct bank-to-bank wire transfer.",
  },
  {
    number: "03",
    icon: FileText,
    title: "100% Irrevocable & Confirmed LC at 30/45/60 Days Usance",
    desc: "Letter of credit backed by a prime international bank.",
  },
  {
    number: "04",
    icon: Clock,
    title: "50% Advance & 50% Balance via LC (30/45/60 Days)",
    desc: "50% Advance via T/T and the remaining 50% through usance LC.",
  },
  {
    number: "05",
    icon: CheckCircle2,
    title: "LC at Sight",
    desc: "100% payment release immediately upon shipment and submission of compliant documents to the bank.",
  },
  {
    number: "06",
    icon: FileCheck,
    title: "50% Advance & 50% Against BL (Bill of Lading) Scan Copy",
    desc: "50% Advance via T/T, and the balance 50% immediate T/T release upon sharing the scanned copy of the BL before final vessel departure.",
  },
];

const incoTermsList = [
  {
    icon: CalendarCheck2,
    badge: "Contract",
    title: "Contract Period",
    value: "3 Months, 6 Months, 1 Year & 3 Years Available",
    desc: "Flexible supply contracts designed for recurring shipments and long-term market stability.",
  },
  {
    icon: TrendingUp,
    badge: "Pricing",
    title: "No Price Fixation",
    value: "Transparent Dynamic Pricing",
    desc: "Fair competitive market rate structures without rigid price fixation penalties.",
  },
  {
    icon: Boxes,
    badge: "Order Scale",
    title: "MOQ Support",
    value: "Minimum Order Quantity Available",
    desc: "Scalable order volumes catered to both initial trial orders and full container shipments.",
  },
  {
    icon: PackageCheck,
    badge: "Packaging",
    title: "Standard Packing",
    value: "5 KG, 10 KG & Custom Packaging",
    desc: "Available in standard 5 KG and 10 KG packs, or custom packed at the importer's discretion.",
  },
  {
    icon: Award,
    badge: "Branding",
    title: "Standby Brand Support",
    value: "Standby Brand Available",
    desc: "OEM and private labeling solutions ready for rapid international market deployment.",
  },
  {
    icon: ShieldCheck,
    badge: "Inspection",
    title: "Third-Party Inspection",
    value: "Third Party Inspection Available",
    desc: "Full pre-shipment quality verification by accredited independent inspection agencies.",
  },
  {
    icon: BadgeCheck,
    badge: "Assurance",
    title: "Quality Control (QC)",
    value: "QC - Quality Control Available",
    desc: "Strict quality control compliance checks executed for every export batch.",
  },
];

const timelineSteps = [
  { step: "Step 01", title: "Order Confirmation", position: "top" },
  { step: "Step 02", title: "Advance Deposit", position: "bottom" },
  { step: "Step 03", title: "Production & QA", position: "top" },
  { step: "Step 04", title: "Shipping", position: "bottom" },
  { step: "Step 05", title: "Balance & Docs", position: "top" },
];

const PaymentTerms = () => {
  return (
    <div className="font-body bg-[#FAF8F2] min-h-screen text-[#1B1C19]">
      
      {/* Cinematic Hero Section */}
      <section className="relative w-full min-h-[45vh] flex flex-col justify-center overflow-hidden bg-black py-20 lg:py-28 border-b border-white/10">
        <div className="absolute inset-0 z-0 pointer-events-none">
           <img src="/payment-hero-bg.jpg" className="w-full h-full object-cover object-center opacity-70" alt="Payment Background" />
           <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
        </div>
        
        <div className="max-w-[1440px] w-full mx-auto px-margin-mobile md:px-margin-desktop relative z-10 mt-8">
          <span className="font-eyebrow text-eyebrow tracking-widest text-white uppercase bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-full inline-block mb-6 shadow-sm font-bold">
            POLICIES
          </span>
          <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg font-serif text-white mb-4 drop-shadow-xl max-w-3xl">
            International Payment &amp; Shipping Terms
          </h1>
          <p className="font-body-lg text-body-lg text-white/90 leading-relaxed max-w-2xl drop-shadow-md">
            We prioritize transparent, secure, and efficient financial transactions to foster long-term partnerships with our global clientele. Review our standard terms designed for international trade.
          </p>
        </div>
      </section>

      {/* Container wrapper */}
      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop py-16 md:py-24">

        {/* Accepted Payment Methods Section */}
        <section className="mb-24">
          <h2 className="font-headline-md text-headline-md font-serif text-[#1B1C19] pb-4 border-b border-[#DFDCD5] mb-4">
            Accepted Payment Methods
          </h2>

          <div className="divide-y divide-[#DFDCD5]/80">
            {paymentMethods.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="py-8 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start">
                  
                  {/* Left Column (5 cols): Number, Icon & Title */}
                  <div className="md:col-span-5 flex items-start gap-3.5">
                    <span className="font-mono text-xs font-bold text-[#F15A24] bg-[#F15A24]/10 px-2 py-1 rounded shrink-0 mt-0.5">
                      {item.number}
                    </span>
                    <div className="text-[#F15A24] shrink-0 mt-0.5">
                      <Icon size={20} />
                    </div>
                    <h3 className="font-headline-sm text-headline-sm font-serif text-[#1B1C19]">
                      {item.title}
                    </h3>
                  </div>

                  {/* Right Column (7 cols): Detailed Description */}
                  <div className="md:col-span-7">
                    <p className="font-body-md text-body-md text-[#5A4139] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                </div>
              );
            })}
          </div>
        </section>

        {/* Standard Order Timeline Section */}
        <section className="mb-20">
          <h2 className="font-headline-md text-headline-md font-serif text-[#1B1C19] mb-16">
            Standard Order Timeline
          </h2>

          {/* Timeline Graphic Container */}
          <div className="relative py-12 px-4">
            
            {/* Center Connecting Line */}
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[1px] bg-[#DFDCD5]" />

            {/* 5 Timeline Steps Grid */}
            <div className="grid grid-cols-5 gap-2 relative z-10">
              {timelineSteps.map((s, idx) => (
                <div key={idx} className="flex flex-col items-center text-center group">
                  
                  {/* Top Label (Step 01, Step 03, Step 05) */}
                  <div className={`h-16 flex flex-col justify-end transition-transform duration-200 ${s.position === 'top' ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                    <span className="font-eyebrow text-eyebrow uppercase tracking-widest text-[#5A4139] block">
                      {s.step}
                    </span>
                    <span className="font-body-md text-body-md font-serif font-bold text-[#1B1C19] leading-tight">
                      {s.title}
                    </span>
                  </div>

                  {/* Green Dot on Line */}
                  <div className="w-3.5 h-3.5 rounded-full bg-[#021c10] border-2 border-[#FAF8F2] shadow-sm my-3 shrink-0" />

                  {/* Bottom Label (Step 02, Step 04) */}
                  <div className={`h-16 flex flex-col justify-start transition-transform duration-200 ${s.position === 'bottom' ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                    <span className="font-eyebrow text-eyebrow uppercase tracking-widest text-[#5A4139] block">
                      {s.step}
                    </span>
                    <span className="font-body-md text-body-md font-serif font-bold text-[#1B1C19] leading-tight">
                      {s.title}
                    </span>
                  </div>

                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Inco Terms Section */}
        <section className="mb-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 border-b border-[#DFDCD5] mb-10 gap-4">
            <div>
              <span className="font-eyebrow text-eyebrow tracking-widest text-[#F15A24] uppercase font-bold block mb-2">
                Trade Policies
              </span>
              <h2 className="font-headline-md text-headline-md font-serif text-[#1B1C19]">
                Inco Terms &amp; Commercial Conditions
              </h2>
            </div>
            <p className="font-body-md text-body-md text-[#5A4139] max-w-md leading-relaxed">
              Standardized trade terms and commercial flexibilities designed for seamless global trade operations.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {incoTermsList.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="group relative bg-white border border-[#DFDCD5]/85 rounded-2xl p-6 hover:shadow-xl hover:border-[#F15A24]/60 transition-all duration-300 flex flex-col justify-between overflow-hidden"
                >
                  {/* Hover Accent Top Bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#F15A24] to-[#D1430A] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div>
                    {/* Header Row: Icon & Badge */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-[#FAF8F2] border border-[#DFDCD5] text-[#F15A24] flex items-center justify-center group-hover:bg-[#F15A24] group-hover:text-white transition-colors duration-300 shadow-2xs">
                        <Icon size={22} />
                      </div>
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#5A4139] bg-[#FAF8F2] border border-[#DFDCD5]/70 px-2.5 py-1 rounded-full">
                        {item.badge}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-headline-sm text-headline-sm font-serif text-[#1B1C19] mb-1.5 group-hover:text-[#F15A24] transition-colors">
                      {item.title}
                    </h3>

                    {/* Primary Value */}
                    <div className="font-bold text-[#1B1C19] text-sm mb-3 flex items-center gap-1.5">
                      <Sparkles size={13} className="text-[#F15A24] shrink-0" />
                      <span>{item.value}</span>
                    </div>

                    {/* Description */}
                    <p className="font-body-md text-body-md text-[#5A4139] leading-relaxed text-sm">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

      </div>

      {/* Bottom Financial Queries Consultation Band */}
      <section className="w-full bg-[#F3F0E6] border-t border-[#DFDCD5] py-10 px-margin-mobile md:px-margin-desktop">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          
          <div>
            <h3 className="font-headline-md text-headline-md font-serif text-[#1B1C19] mb-1">
              Have specific financial queries?
            </h3>
            <p className="font-body-md text-body-md text-[#5A4139]">
              Our finance team is available for immediate consultation regarding custom payment structures.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3.5 shrink-0">
            <a
              href="mailto:contact@dasaexports.com"
              className="inline-flex items-center gap-2 px-5 py-3 bg-white border border-[#DFDCD5] text-[#1B1C19] font-label-md text-label-md rounded hover:bg-slate-50 transition-colors shadow-xs"
            >
              <Mail size={15} />
              <span>Email Finance</span>
            </a>

            <a
              href="https://wa.me/919894132848"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 bg-[#F15A24] text-white font-label-md text-label-md rounded hover:bg-[#D1430A] transition-colors shadow-sm"
            >
              <MessageSquare size={15} />
              <span>WhatsApp Us</span>
            </a>
          </div>

        </div>
      </section>

    </div>
  );
};

export default PaymentTerms;
