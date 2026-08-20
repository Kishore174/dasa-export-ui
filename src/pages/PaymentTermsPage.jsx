import React from "react";
import PaymentTerms from "../components/ui/PaymentTerms";
import { CreditCard } from "lucide-react";
import { Link } from "react-router-dom";

const PaymentTermsPage = () => {
  return (
    <div className="pt-[72px] font-body bg-white min-h-screen">
      {/* Page Header */}
      <section className="relative py-28 bg-[#0A1A0F] text-white overflow-hidden">
        {/* AI Generated Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/payment-hero-bg.jpg"
            alt="Maritime Trade Container Port Terminal"
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
                "radial-gradient(circle at 60% 50%, rgba(176,138,62,0.15) 0%, transparent 60%)",
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <span className="font-mono inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[rgba(201,168,76,0.3)] bg-[rgba(201,168,76,0.08)] text-[10.5px] uppercase tracking-[2.5px] text-[var(--gold)] mb-4">
            <CreditCard size={13} />
            International Trade &amp; Commercial Terms
          </span>

          <h1 className="font-display text-4xl lg:text-5xl font-semibold">
            Commercial Payment Terms &amp; Policies
          </h1>

          <p className="mt-4 text-base lg:text-lg leading-8 text-[rgba(255,255,255,0.78)] max-w-2xl">
            Flexible payment structures (L/C, T/T, D/P), supported Incoterms (FOB, CIF, CFR), container packaging specifications, and complete customs document packages for global importers.
          </p>
        </div>
      </section>

      {/* Main Payment Terms Section */}
      <PaymentTerms />

      {/* CTA Box */}
      <section className="pb-24 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="rounded-3xl bg-[var(--ink)] text-white p-8 lg:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-[rgba(201,168,76,0.3)] shadow-2xl">
          <div>
            <h3 className="font-display text-2xl lg:text-3xl font-semibold">
              Need custom payment terms for a high-volume FCL order?
            </h3>
            <p className="mt-2 text-sm text-[rgba(255,255,255,0.7)]">
              Our export finance desk works directly with major international banking institutions.
            </p>
          </div>

          <Link
            to="/contact"
            className="px-8 py-4 rounded-xl bg-[var(--terracotta)] text-white font-medium text-sm shrink-0 shadow-lg transition-transform hover:scale-105"
          >
            Contact Export Desk
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PaymentTermsPage;
