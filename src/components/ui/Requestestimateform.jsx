import React, { useState } from "react";
import { ArrowRight, ShieldCheck, Ship, Clock3 } from "lucide-react";

const products = [
  "Tomato Powder",
  "Turmeric Powder",
  "Moringa Powder",
  "Beetroot Powder",
  "Onion Powder",
  "Garlic Powder",
  "Other",
];

const fieldStyle = {
  background: "rgba(246,239,222,0.06)",
  borderColor: "rgba(246,239,222,0.18)",
  color: "var(--cream)",
};

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
  const [submitted, setSubmitted] = useState(false);

  const update = (key) => (e) => setValues((v) => ({ ...v, [key]: e.target.value }));

  const handleSubmit = () => {
    if (!values.name || !values.email) return;
    // Wire this up to your form endpoint / API call.
    setSubmitted(true);
  };

  return (
    <div className="relative">
      <div
        className="relative rounded-[28px] border-2 border-dashed p-7 lg:p-8 pl-9 lg:pl-10"
        style={{ background: "var(--forest-800)", borderColor: "rgba(246,239,222,0.25)" }}
      >
        {/* Ticket-stub perforation, left edge: two notches cut into the card
            so the form reads as a bill of lading rather than a plain panel */}
        <div
          className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 h-6 w-6 rounded-full"
          style={{ background: "var(--forest-950)" }}
          aria-hidden="true"
        />
        <div
          className="absolute left-0 bottom-0 -translate-x-1/2 translate-y-1/2 h-6 w-6 rounded-full"
          style={{ background: "var(--forest-950)" }}
          aria-hidden="true"
        />
        <div
          className="absolute left-3 top-6 bottom-6 border-l-2 border-dashed opacity-40"
          style={{ borderColor: "var(--cream)" }}
          aria-hidden="true"
        />

        {/* Certification stamp, kept for brand continuity */}
        <div
          className="absolute -top-7 -right-5 h-24 w-24 rounded-full border-2 border-dashed flex flex-col items-center justify-center text-center"
          style={{ borderColor: "var(--turmeric)", background: "var(--forest-950)", transform: "rotate(8deg)" }}
        >
          <ShieldCheck size={18} style={{ color: "var(--turmeric)" }} />
          <p className="font-mono text-[7px] uppercase tracking-wider mt-1 leading-tight" style={{ color: "var(--cream)" }}>
            Verified
            <br />
            Exporter
          </p>
        </div>

        <div className="flex items-center justify-between">
          <p className="font-mono text-[11px] uppercase tracking-[3px]" style={{ color: "var(--turmeric)" }}>
            Request Estimate
          </p>
          <p className="font-mono text-[10px] tracking-wider" style={{ color: "rgba(246,239,222,0.35)" }}>
            NO. 20260801
          </p>
        </div>
        <h3 className="font-display text-2xl font-semibold mt-2" style={{ color: "var(--cream)" }}>
          Get a shipment quote
        </h3>
        <p className="text-sm mt-2" style={{ color: "rgba(246,239,222,0.55)" }}>
          Tell us what you need — we'll reply with pricing and lead time.
        </p>

        {submitted ? (
          <div
            className="mt-8 rounded-2xl border border-dashed p-6 text-center"
            style={{ borderColor: "rgba(246,239,222,0.25)" }}
          >
            <ShieldCheck size={28} style={{ color: "var(--moringa)" }} className="mx-auto" />
            <p className="font-display text-lg font-semibold mt-3" style={{ color: "var(--cream)" }}>
              Request received
            </p>
            <p className="text-sm mt-1" style={{ color: "rgba(246,239,222,0.55)" }}>
              We'll get back to you within 24 hours.
            </p>
          </div>
        ) : (
          <div className="mt-7 flex flex-col gap-4">
            <input
              type="text"
              placeholder="Name"
              value={values.name}
              onChange={update("name")}
              className="w-full rounded-xl border px-4 py-3 text-sm outline-none transition-colors focus:border-[var(--turmeric)] placeholder:text-[rgba(246,239,222,0.35)]"
              style={fieldStyle}
            />

            <div className="grid grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Email"
                value={values.email}
                onChange={update("email")}
                className="w-full rounded-xl border px-4 py-3 text-sm outline-none transition-colors focus:border-[var(--turmeric)] placeholder:text-[rgba(246,239,222,0.35)]"
                style={fieldStyle}
              />
              <input
                type="tel"
                placeholder="Mobile"
                value={values.mobile}
                onChange={update("mobile")}
                className="w-full rounded-xl border px-4 py-3 text-sm outline-none transition-colors focus:border-[var(--turmeric)] placeholder:text-[rgba(246,239,222,0.35)]"
                style={fieldStyle}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Country"
                value={values.country}
                onChange={update("country")}
                className="w-full rounded-xl border px-4 py-3 text-sm outline-none transition-colors focus:border-[var(--turmeric)] placeholder:text-[rgba(246,239,222,0.35)]"
                style={fieldStyle}
              />
              <input
                type="text"
                placeholder="City"
                value={values.city}
                onChange={update("city")}
                className="w-full rounded-xl border px-4 py-3 text-sm outline-none transition-colors focus:border-[var(--turmeric)] placeholder:text-[rgba(246,239,222,0.35)]"
                style={fieldStyle}
              />
            </div>

            <select
              value={values.product}
              onChange={update("product")}
              className="w-full rounded-xl border px-4 py-3 text-sm outline-none transition-colors focus:border-[var(--turmeric)]"
              style={fieldStyle}
            >
              {products.map((p) => (
                <option key={p} value={p} style={{ color: "#0D1810" }}>
                  {p}
                </option>
              ))}
            </select>

            <textarea
              placeholder="Message"
              rows={4}
              value={values.message}
              onChange={update("message")}
              className="w-full rounded-xl border px-4 py-3 text-sm outline-none transition-colors resize-none focus:border-[var(--turmeric)] placeholder:text-[rgba(246,239,222,0.35)]"
              style={fieldStyle}
            />

            <button
              onClick={handleSubmit}
              className="mt-1 w-full flex items-center justify-center gap-2 rounded-full px-6 py-4 font-medium text-sm transition-transform hover:-translate-y-0.5"
              style={{ background: "var(--tomato)", color: "var(--cream)" }}
            >
              Send request
              <ArrowRight size={16} />
            </button>
          </div>
        )}
      </div>

      {/* Trust row, replaces the floating overlapping badges — safer with a taller form */}
      <div
        className="flex items-center justify-center gap-6 mt-5 font-mono text-[10px] uppercase tracking-wider"
        style={{ color: "rgba(246,239,222,0.5)" }}
      >
        <span className="flex items-center gap-1.5">
          <Ship size={13} /> Global shipping
        </span>
        <span className="flex items-center gap-1.5">
          <Clock3 size={13} /> Reply within 24h
        </span>
      </div>
    </div>
  );
};

export default RequestEstimateForm;