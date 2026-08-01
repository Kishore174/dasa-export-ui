import React, { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle2, Clock, MessageSquare, Anchor, Building2 } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    product: "Tomato Powder",
    volume: "1 - 5 Metric Tons",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        country: "",
        product: "Tomato Powder",
        volume: "1 - 5 Metric Tons",
        message: "",
      });
    }, 5000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="contact"
      className="relative py-28 font-body overflow-hidden"
      style={{ background: "var(--cream, #F6EFDE)" }}
    >
      {/* Subtle background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(13,24,16,0.8) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <span
            className="font-mono inline-flex items-center gap-2 px-4 py-2 rounded-full border text-[11px] uppercase tracking-[3px]"
            style={{ borderColor: "rgba(13,24,16,0.15)", color: "var(--tomato-dark, #9A3020)" }}
          >
            <MessageSquare size={13} />
            Export Inquiry &amp; Support
          </span>

          <h2
            className="font-display text-4xl lg:text-5xl font-semibold mt-6"
            style={{ color: "var(--ink, #0D1810)" }}
          >
            Get in touch with our export desk
          </h2>

          <p className="mt-6 text-gray-600 leading-8 text-lg">
            Ready to source premium agricultural products, request bulk FOB/CIF pricing, or order lab samples? Fill in the details below.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 mt-16 items-start">
          {/* Left Column — Interactive Contact Form */}
          <div
            className="bg-white rounded-[32px] p-8 md:p-12 border shadow-xl relative overflow-hidden"
            style={{ borderColor: "rgba(13,24,16,0.08)" }}
          >
            <h3
              className="font-display text-2xl font-semibold mb-2"
              style={{ color: "var(--ink, #0D1810)" }}
            >
              Request a Bulk Quote or Sample
            </h3>
            <p className="text-gray-500 text-sm mb-8">
              Our export specialists respond to all international inquiries within 4 business hours.
            </p>

            {submitted ? (
              <div
                className="p-8 rounded-[24px] border text-center my-12"
                style={{
                  background: "rgba(143,174,107,0.1)",
                  borderColor: "var(--moringa, #8FAE6B)",
                }}
              >
                <div
                  className="w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-4"
                  style={{ background: "var(--moringa, #8FAE6B)", color: "#FFF" }}
                >
                  <CheckCircle2 size={32} />
                </div>
                <h4
                  className="font-display text-2xl font-semibold"
                  style={{ color: "var(--ink, #0D1810)" }}
                >
                  Inquiry Received Successfully!
                </h4>
                <p className="text-gray-600 mt-2 text-sm leading-relaxed max-w-md mx-auto">
                  Thank you, <strong className="text-gray-900">{formData.name || "Valued Buyer"}</strong>. Our international export manager will send the specification sheet and price quote to your email.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider mb-2 font-medium text-gray-700">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Hans Mueller"
                      className="w-full px-4 py-3.5 rounded-xl border focus:outline-none focus:ring-2 text-sm text-gray-800 transition"
                      style={{
                        borderColor: "rgba(13,24,16,0.15)",
                        background: "rgba(246,239,222,0.2)",
                      }}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider mb-2 font-medium text-gray-700">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. hans@bavariaspice.de"
                      className="w-full px-4 py-3.5 rounded-xl border focus:outline-none focus:ring-2 text-sm text-gray-800 transition"
                      style={{
                        borderColor: "rgba(13,24,16,0.15)",
                        background: "rgba(246,239,222,0.2)",
                      }}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider mb-2 font-medium text-gray-700">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+49 89 1234567"
                      className="w-full px-4 py-3.5 rounded-xl border focus:outline-none focus:ring-2 text-sm text-gray-800 transition"
                      style={{
                        borderColor: "rgba(13,24,16,0.15)",
                        background: "rgba(246,239,222,0.2)",
                      }}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider mb-2 font-medium text-gray-700">
                      Destination Country *
                    </label>
                    <input
                      type="text"
                      name="country"
                      required
                      value={formData.country}
                      onChange={handleChange}
                      placeholder="e.g. Germany, UAE, USA"
                      className="w-full px-4 py-3.5 rounded-xl border focus:outline-none focus:ring-2 text-sm text-gray-800 transition"
                      style={{
                        borderColor: "rgba(13,24,16,0.15)",
                        background: "rgba(246,239,222,0.2)",
                      }}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider mb-2 font-medium text-gray-700">
                      Product Interest
                    </label>
                    <select
                      name="product"
                      value={formData.product}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-xl border focus:outline-none focus:ring-2 text-sm text-gray-800 transition bg-white"
                      style={{
                        borderColor: "rgba(13,24,16,0.15)",
                      }}
                    >
                      <option value="Tomato Powder">Tomato Powder</option>
                      <option value="Moringa Powder">Organic Moringa Powder</option>
                      <option value="Turmeric Powder">High Curcumin Turmeric</option>
                      <option value="Beetroot Powder">Beetroot Powder</option>
                      <option value="Onion Powder">Dehydrated Onion Powder</option>
                      <option value="Garlic Powder">Garlic Powder</option>
                      <option value="Multiple Products">Multiple Products (Full Container)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider mb-2 font-medium text-gray-700">
                      Order Quantity
                    </label>
                    <select
                      name="volume"
                      value={formData.volume}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-xl border focus:outline-none focus:ring-2 text-sm text-gray-800 transition bg-white"
                      style={{
                        borderColor: "rgba(13,24,16,0.15)",
                      }}
                    >
                      <option value="Sample Pack">Sample Pack (500g - 5kg)</option>
                      <option value="500kg - 1 Ton">500 kg - 1 Metric Ton</option>
                      <option value="1 - 5 Metric Tons">1 - 5 Metric Tons</option>
                      <option value="20ft FCL Container">20ft FCL Container (~12 Tons)</option>
                      <option value="40ft FCL Container">40ft FCL Container (~24 Tons)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider mb-2 font-medium text-gray-700">
                    Message / Specifications
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Specify mesh size, moisture limit, packaging preference, or port of destination (FOB/CIF)..."
                    className="w-full px-4 py-3.5 rounded-xl border focus:outline-none focus:ring-2 text-sm text-gray-800 transition"
                    style={{
                      borderColor: "rgba(13,24,16,0.15)",
                      background: "rgba(246,239,222,0.2)",
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full font-medium text-base flex items-center justify-center gap-3 transition-transform hover:-translate-y-0.5 shadow-lg"
                  style={{
                    background: "var(--tomato, #C43E2A)",
                    color: "var(--cream, #F6EFDE)",
                  }}
                >
                  <Send size={18} />
                  Submit Export Inquiry
                </button>
              </form>
            )}
          </div>

          {/* Right Column — Export Office & Contact Details */}
          <div className="space-y-6">
            {/* Quick Contact Cards */}
            <div
              className="bg-white rounded-[28px] p-8 border shadow-lg space-y-6"
              style={{ borderColor: "rgba(13,24,16,0.08)" }}
            >
              <h3
                className="font-display text-xl font-semibold flex items-center gap-2"
                style={{ color: "var(--ink, #0D1810)" }}
              >
                <Building2 size={20} style={{ color: "var(--tomato, #C43E2A)" }} />
                Export Headquarters
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: "rgba(196,62,42,0.1)", color: "var(--tomato, #C43E2A)" }}
                  >
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-gray-900">Facility &amp; Processing Plant</h4>
                    <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">
                      DASA Exports Pvt Ltd, Agricultural Industrial Zone, Tamil Nadu, India.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: "rgba(227,166,47,0.1)", color: "var(--turmeric, #E3A62F)" }}
                  >
                    <Phone size={18} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-gray-900">Direct Desk &amp; WhatsApp</h4>
                    <a
                      href="tel:+919894132848"
                      className="text-xs text-gray-600 mt-0.5 block hover:text-emerald-700 font-medium transition-colors"
                    >
                      +91 98941 32848
                    </a>
                    <a
                      href="https://wa.me/919894132848"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-mono text-emerald-700 mt-0.5 inline-block hover:underline"
                    >
                      ● 24/7 WhatsApp Chat Available
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: "rgba(143,174,107,0.1)", color: "var(--moringa, #8FAE6B)" }}
                  >
                    <Mail size={18} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-gray-900">Official Email</h4>
                    <p className="text-xs text-gray-600 mt-0.5">info@dasaexports.com</p>
                    <p className="text-xs text-gray-600">sales@dasaexports.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Logistics Ports Card */}
            <div
              className="rounded-[28px] p-8 border shadow-lg text-white"
              style={{ background: "var(--forest-950, #122318)", borderColor: "rgba(246,239,222,0.14)" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Anchor size={22} style={{ color: "var(--turmeric, #E3A62F)" }} />
                <h4 className="font-display text-lg font-semibold text-[#F6EFDE]">
                  Nearest Dispatch Seaports
                </h4>
              </div>
              <ul className="space-y-3 text-xs leading-relaxed" style={{ color: "rgba(246,239,222,0.75)" }}>
                <li className="flex items-center justify-between border-b pb-2" style={{ borderColor: "rgba(246,239,222,0.1)" }}>
                  <span>Tuticorin Port (VOC)</span>
                  <span className="font-mono text-[10px]" style={{ color: "var(--turmeric, #E3A62F)" }}>Primary Container Port</span>
                </li>
                <li className="flex items-center justify-between border-b pb-2" style={{ borderColor: "rgba(246,239,222,0.1)" }}>
                  <span>Chennai Seaport</span>
                  <span className="font-mono text-[10px]" style={{ color: "var(--turmeric, #E3A62F)" }}>Air &amp; Sea Cargo</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Cochin Port</span>
                  <span className="font-mono text-[10px]" style={{ color: "var(--turmeric, #E3A62F)" }}>Western Logistics</span>
                </li>
              </ul>
            </div>

            {/* Operating Hours Card */}
            <div
              className="bg-white rounded-[28px] p-6 border flex items-center gap-4"
              style={{ borderColor: "rgba(13,24,16,0.08)" }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                style={{ background: "rgba(196,62,42,0.08)", color: "var(--tomato, #C43E2A)" }}
              >
                <Clock size={22} />
              </div>
              <div>
                <h4 className="font-semibold text-sm text-gray-900">Working Hours</h4>
                <p className="text-xs text-gray-500 mt-0.5">
                  Mon – Sat: 08:30 AM – 08:00 PM IST (GMT +5:30)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
