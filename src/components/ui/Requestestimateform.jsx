import React, { useState } from "react";
import { ArrowRight, CheckCircle2, Ship, Clock3 } from "lucide-react";

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
  background: "#FAF8F2",
  borderColor: "#DFDCD5",
  color: "#0B2B1B",
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
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const update = (key) => (e) => setValues((v) => ({ ...v, [key]: e.target.value }));

  const handleSubmit = async () => {
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
          _subject: `New Estimate Request from ${values.name} (${values.country || "Global"})`,
          _replyto: values.email,
          _captcha: "false",
          "Buyer Name": values.name,
          "Business Email": values.email,
          "Mobile / WhatsApp": values.mobile,
          "Country": values.country,
          "City": values.city,
          "Product": values.product,
          "Message": values.message,
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
    <div>
      <div className="border p-8 bg-white border-[#0B2B1B]/10">
        <div className="flex items-center justify-between">
          <p className="font-eyebrow text-[11px] uppercase tracking-[2.5px]" style={{ color: "#D4A359" }}>
            Request Estimate
          </p>
          <p className="font-eyebrow text-[10px] tracking-wider" style={{ color: "#0B2B1B", opacity: 0.4 }}>
            REF 20260801
          </p>
        </div>
        <h3 className="font-headline-md text-2xl font-semibold mt-3" style={{ color: "#0B2B1B" }}>
          Get a shipment quote
        </h3>
        <p className="font-body-md text-sm mt-2" style={{ color: "#5A4139" }}>
          Tell us what you need — we'll reply with pricing and lead time.
        </p>

        {submitted ? (
          <div className="mt-8 border p-6 text-center bg-[#FAF8F2] border-[#0B2B1B]/10">
            <CheckCircle2 size={26} style={{ color: "#2E7D32" }} className="mx-auto" />
            <p className="font-headline-md text-lg font-semibold mt-3" style={{ color: "#0B2B1B" }}>
              Request received
            </p>
            <p className="font-body-md text-sm mt-1" style={{ color: "#5A4139" }}>
              We'll get back to you at {values.email} within 4 hours.
            </p>
          </div>
        ) : (
          <div className="mt-7 flex flex-col gap-4">
            <input
              type="text"
              placeholder="Name *"
              value={values.name}
              onChange={update("name")}
              className="w-full border px-4 py-3 text-sm outline-none transition-colors focus:border-[#F15A24] placeholder:text-[#8E7067]"
              style={fieldStyle}
            />

            <div className="grid grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Email *"
                value={values.email}
                onChange={update("email")}
                className="w-full border px-4 py-3 text-sm outline-none transition-colors focus:border-[#F15A24] placeholder:text-[#8E7067]"
                style={fieldStyle}
              />
              <input
                type="tel"
                placeholder="Mobile"
                value={values.mobile}
                onChange={update("mobile")}
                className="w-full border px-4 py-3 text-sm outline-none transition-colors focus:border-[#F15A24] placeholder:text-[#8E7067]"
                style={fieldStyle}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Country"
                value={values.country}
                onChange={update("country")}
                className="w-full border px-4 py-3 text-sm outline-none transition-colors focus:border-[#F15A24] placeholder:text-[#8E7067]"
                style={fieldStyle}
              />
              <input
                type="text"
                placeholder="City"
                value={values.city}
                onChange={update("city")}
                className="w-full border px-4 py-3 text-sm outline-none transition-colors focus:border-[#F15A24] placeholder:text-[#8E7067]"
                style={fieldStyle}
              />
            </div>

            <select
              value={values.product}
              onChange={update("product")}
              className="w-full border px-4 py-3 text-sm outline-none transition-colors focus:border-[#F15A24]"
              style={fieldStyle}
            >
              {products.map((p) => (
                <option key={p} value={p} style={{ color: "#0B2B1B", background: "#FFFFFF" }}>
                  {p}
                </option>
              ))}
            </select>

            <textarea
              placeholder="Message"
              rows={4}
              value={values.message}
              onChange={update("message")}
              className="w-full border px-4 py-3 text-sm outline-none transition-colors resize-none focus:border-[#F15A24] placeholder:text-[#8E7067]"
              style={fieldStyle}
            />

            <button
              onClick={handleSubmit}
              disabled={loading}
              className="mt-1 w-full flex items-center justify-center gap-2 px-6 py-3.5 font-medium text-sm transition-colors hover:bg-[#0B2B1B] disabled:opacity-60"
              style={{ background: "#F15A24", color: "#FFFFFF" }}
            >
              {loading ? "Sending Quote Request..." : "Send request"}
              <ArrowRight size={16} />
            </button>
          </div>
        )}
      </div>

      <div
        className="flex items-center justify-center gap-6 mt-5 font-eyebrow text-[10px] uppercase tracking-wider"
        style={{ color: "#5A4139" }}
      >
        <span className="flex items-center gap-1.5">
          <Ship size={13} className="text-[#2E7D32]" /> Global shipping
        </span>
        <span className="flex items-center gap-1.5">
          <Clock3 size={13} className="text-[#F15A24]" /> Reply within 24h
        </span>
      </div>
    </div>
  );
};

export default RequestEstimateForm;