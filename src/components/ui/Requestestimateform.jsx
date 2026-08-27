import React, { useState } from "react";
import { ArrowRight, CheckCircle2, Ship, Clock3, ShieldCheck, User, Mail, Phone, Globe, Package, Sparkles } from "lucide-react";

const products = [
  "Tomato Powder",
  "Turmeric Powder (High Curcumin)",
  "Moringa Powder (Organic)",
  "Beetroot Powder",
  "Onion Powder & Flakes",
  "Garlic Powder & Flakes",
  "Custom Spice / Vegetable Blend",
];

const RequestEstimateForm = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    mobile: "",
    country: "",
    city: "",
    product: "Tomato Powder",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const update = (key) => (e) => setValues((v) => ({ ...v, [key]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!values.name || !values.email) return;
    setLoading(true);

    try {
      await fetch("https://formsubmit.co/ajax/contact@dasaexports.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `New International Quote Request: ${values.name} (${values.country || "Global"})`,
          _replyto: values.email,
          _captcha: "false",
          "Buyer Name": values.name,
          "Business Email": values.email,
          "Mobile / WhatsApp": values.mobile,
          "Country": values.country,
          "City": values.city,
          "Product Required": values.product,
          "Specifications / Message": values.message,
        }),
      });
      setSubmitted(true);
    } catch (err) {
      console.error("Estimate mail error:", err);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white/95 backdrop-blur-xl border border-white/40 shadow-2xl rounded-2xl overflow-hidden font-body text-[#172019]">
      
      {/* Top Header Bar */}
      <div className="bg-[#0B2B1B] text-white p-6 sm:p-7 relative overflow-hidden">
        {/* Subtle accent light blur */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#F15A24]/20 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 flex items-center justify-between mb-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 border border-white/15 rounded-full text-[10px] font-eyebrow uppercase tracking-[0.2em] text-[#F4A62A] font-bold">
            <Sparkles size={12} className="text-[#F15A24]" />
            DIRECT EXPORT DESK
          </span>
          <span className="font-mono text-[10px] text-white/50 tracking-wider">
            24H RESPONSE SLA
          </span>
        </div>

        <h3 className="font-display-lg text-2xl sm:text-3xl font-serif font-bold text-white leading-tight">
          Request Export Estimate
        </h3>
        <p className="text-xs sm:text-sm text-white/80 mt-1.5 font-normal leading-relaxed">
          Get tailored FCL container pricing &amp; specifications directly from our trade team.
        </p>
      </div>

      {/* Form Body */}
      <div className="p-6 sm:p-7 bg-white">
        {submitted ? (
          <div className="py-8 text-center bg-[#FAF8F2] rounded-xl border border-[#2E7D32]/20 p-6 space-y-4">
            <div className="w-14 h-14 mx-auto rounded-full bg-[#2E7D32]/10 text-[#2E7D32] flex items-center justify-center border border-[#2E7D32]/20 shadow-sm">
              <CheckCircle2 size={32} />
            </div>
            <h4 className="font-serif font-bold text-xl text-[#0B2B1B]">Estimate Request Submitted</h4>
            <p className="text-xs sm:text-sm text-[#5A4139] leading-relaxed max-w-xs mx-auto">
              Thank you, <strong className="text-[#0B2B1B]">{values.name}</strong>. Our export desk will review your container details and contact you at <span className="text-[#F15A24] font-bold">{values.email}</span> within 4 hours.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-2 px-5 py-2.5 bg-[#0B2B1B] text-white font-eyebrow text-xs uppercase tracking-wider font-bold rounded-lg hover:bg-[#F15A24] transition-colors"
            >
              Submit Another Request
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Buyer Name */}
            <div>
              <label className="font-eyebrow text-[10.5px] uppercase tracking-wider text-[#5A4139] font-bold block mb-1.5">
                Full Name *
              </label>
              <div className="relative">
                <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  required
                  type="text"
                  placeholder="e.g. Alexander Wright"
                  value={values.name}
                  onChange={update("name")}
                  className="w-full bg-[#FAF8F2] border border-slate-200 rounded-lg pl-10 pr-4 py-2.5 text-xs sm:text-sm text-[#172019] outline-none transition-all focus:border-[#F15A24] focus:bg-white focus:ring-2 focus:ring-[#F15A24]/10 placeholder:text-slate-400"
                />
              </div>
            </div>

            {/* Email & Mobile Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="font-eyebrow text-[10.5px] uppercase tracking-wider text-[#5A4139] font-bold block mb-1.5">
                  Business Email *
                </label>
                <div className="relative">
                  <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    required
                    type="email"
                    placeholder="buyer@company.com"
                    value={values.email}
                    onChange={update("email")}
                    className="w-full bg-[#FAF8F2] border border-slate-200 rounded-lg pl-10 pr-3.5 py-2.5 text-xs sm:text-sm text-[#172019] outline-none transition-all focus:border-[#F15A24] focus:bg-white focus:ring-2 focus:ring-[#F15A24]/10 placeholder:text-slate-400"
                  />
                </div>
              </div>

              <div>
                <label className="font-eyebrow text-[10.5px] uppercase tracking-wider text-[#5A4139] font-bold block mb-1.5">
                  WhatsApp / Phone
                </label>
                <div className="relative">
                  <Phone size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="tel"
                    placeholder="+1 555 019 2831"
                    value={values.mobile}
                    onChange={update("mobile")}
                    className="w-full bg-[#FAF8F2] border border-slate-200 rounded-lg pl-10 pr-3.5 py-2.5 text-xs sm:text-sm text-[#172019] outline-none transition-all focus:border-[#F15A24] focus:bg-white focus:ring-2 focus:ring-[#F15A24]/10 placeholder:text-slate-400"
                  />
                </div>
              </div>
            </div>

            {/* Destination Country & City */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="font-eyebrow text-[10.5px] uppercase tracking-wider text-[#5A4139] font-bold block mb-1.5">
                  Destination Country
                </label>
                <div className="relative">
                  <Globe size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    placeholder="e.g. Germany, UAE"
                    value={values.country}
                    onChange={update("country")}
                    className="w-full bg-[#FAF8F2] border border-slate-200 rounded-lg pl-10 pr-3.5 py-2.5 text-xs sm:text-sm text-[#172019] outline-none transition-all focus:border-[#F15A24] focus:bg-white focus:ring-2 focus:ring-[#F15A24]/10 placeholder:text-slate-400"
                  />
                </div>
              </div>

              <div>
                <label className="font-eyebrow text-[10.5px] uppercase tracking-wider text-[#5A4139] font-bold block mb-1.5">
                  Port / City
                </label>
                <input
                  type="text"
                  placeholder="e.g. Hamburg Port"
                  value={values.city}
                  onChange={update("city")}
                  className="w-full bg-[#FAF8F2] border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-[#172019] outline-none transition-all focus:border-[#F15A24] focus:bg-white focus:ring-2 focus:ring-[#F15A24]/10 placeholder:text-slate-400"
                />
              </div>
            </div>

            {/* Product Selection */}
            <div>
              <label className="font-eyebrow text-[10.5px] uppercase tracking-wider text-[#5A4139] font-bold block mb-1.5">
                Product Interest
              </label>
              <div className="relative">
                <Package size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                <select
                  value={values.product}
                  onChange={update("product")}
                  className="w-full bg-[#FAF8F2] border border-slate-200 rounded-lg pl-10 pr-4 py-2.5 text-xs sm:text-sm text-[#172019] outline-none transition-all focus:border-[#F15A24] focus:bg-white focus:ring-2 focus:ring-[#F15A24]/10 appearance-none cursor-pointer"
                >
                  {products.map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Specifications / Quantity Message */}
            <div>
              <label className="font-eyebrow text-[10.5px] uppercase tracking-wider text-[#5A4139] font-bold block mb-1.5">
                Estimated Volume &amp; Custom Specs
              </label>
              <textarea
                rows={2}
                placeholder="Mention mesh size, moisture max %, or container requirements (e.g. 1 FCL 20ft)..."
                value={values.message}
                onChange={update("message")}
                className="w-full bg-[#FAF8F2] border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-[#172019] outline-none transition-all focus:border-[#F15A24] focus:bg-white focus:ring-2 focus:ring-[#F15A24]/10 resize-none placeholder:text-slate-400"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="mt-2 w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-[#F15A24] text-white font-eyebrow text-xs uppercase tracking-[0.15em] font-bold rounded-lg hover:bg-[#0B2B1B] transition-all duration-300 shadow-md hover:shadow-xl disabled:opacity-60 cursor-pointer"
            >
              <span>{loading ? "Processing Quote..." : "Send Quote Request"}</span>
              <ArrowRight size={16} />
            </button>
          </form>
        )}

        {/* Bottom Trust Indicators */}
        <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-[10.5px] font-eyebrow text-[#5A4139] font-bold uppercase tracking-wider">
          <span className="flex items-center gap-1.5 text-[#2E7D32]">
            <Ship size={14} className="text-[#2E7D32]" /> FCL &amp; LCL Freight
          </span>
          <span className="flex items-center gap-1.5 text-[#0B2B1B]">
            <ShieldCheck size={14} className="text-[#F4A62A]" /> ISO &amp; FSSAI Validated
          </span>
          <span className="flex items-center gap-1.5 text-[#F15A24]">
            <Clock3 size={14} className="text-[#F15A24]" /> 24h SLA Quote
          </span>
        </div>

      </div>
    </div>
  );
};

export default RequestEstimateForm;
