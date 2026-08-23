import React from "react";
import { Landmark, FileText, CreditCard, Mail, MessageSquare } from "lucide-react";

const paymentMethods = [
  {
    icon: Landmark,
    title: "Telegraphic Transfer (TT)",
    desc: "Our preferred method for speed and reliability. Standard terms require a 30% advance deposit to initiate production and secure raw materials, with the remaining 70% balance due upon presentation of draft shipping documents (Bill of Lading).",
  },
  {
    icon: FileText,
    title: "Letter of Credit (LC)",
    desc: "Accepted for high-volume orders exceeding 1 FCL (Full Container Load). We require an Irrevocable, Confirmed LC at sight from a top-tier international bank. Drafts must be approved prior to final issuance to ensure smooth processing.",
  },
  {
    icon: CreditCard,
    title: "Advance Payment",
    desc: "Available for sample orders, air freight shipments, or expedited requests. 100% advance payment ensures immediate processing without banking delays associated with documentary collections.",
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
      
      {/* Container wrapper */}
      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop py-16 md:py-24">
        
        {/* Header Section */}
        <div className="mb-16 max-w-3xl">
          <span className="font-eyebrow text-eyebrow tracking-widest text-[#A16900] uppercase bg-white border border-[#DFDCD5] px-3 py-1 rounded inline-block mb-6 shadow-2xs font-bold">
            POLICIES
          </span>
          <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg font-serif text-[#1B1C19] mb-4">
            International Payment &amp; Shipping Terms
          </h1>
          <p className="font-body-lg text-body-lg text-[#5A4139] leading-relaxed max-w-2xl">
            We prioritize transparent, secure, and efficient financial transactions to foster long-term partnerships with our global clientele. Review our standard terms designed for international trade.
          </p>
        </div>

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
                  
                  {/* Left Column (4 cols): Icon & Title */}
                  <div className="md:col-span-4 flex items-center gap-3.5">
                    <div className="text-[#F15A24] shrink-0">
                      <Icon size={20} />
                    </div>
                    <h3 className="font-headline-sm text-headline-sm font-serif text-[#1B1C19]">
                      {item.title}
                    </h3>
                  </div>

                  {/* Right Column (8 cols): Detailed Description */}
                  <div className="md:col-span-8">
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
