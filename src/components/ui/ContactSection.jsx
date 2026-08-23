import React, { useState } from 'react';
import { PRODUCTS } from '../../data/productsData';
import { PhoneCall, Mail, MapPin, Globe, ArrowUpRight, ShieldCheck } from 'lucide-react';

export default function ContactSection({ selectedProductName = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    country: '',
    email: '',
    product: selectedProductName || 'Tomato Powder',
    quantity: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const update = (field) => (e) =>
    setFormData({ ...formData, [field]: e.target.value });

  return (
    <section
      className="w-full bg-white py-20 md:py-28 border-t border-slate-200/60"
      id="quote-form"
    >
      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start">

          {/* Left Column (7 cols): Export Enquiry Form */}
          <div className="md:col-span-7 md:pr-6">
            <h2 className="font-display-lg text-4xl md:text-5xl text-[#0B2B1B] font-serif font-bold mb-4">
              Export Enquiry
            </h2>
            <p className="font-body-md text-base text-[#5A4139] mb-10 max-w-xl leading-relaxed">
              We welcome global partnerships. Share your requirements below and
              our trade specialists will respond within 24 hours.
            </p>

            {submitted ? (
              <div className="bg-[#FAF8F2] p-8 border border-[#0B2B1B]/10 text-center space-y-4">
                <div className="w-12 h-12 mx-auto rounded-full bg-[#2E7D32]/10 flex items-center justify-center">
                  <ShieldCheck size={22} className="text-[#2E7D32]" />
                </div>
                <h3 className="font-display-lg text-2xl text-[#0B2B1B] font-serif font-bold">
                  Enquiry Received
                </h3>
                <p className="font-body-md text-[#5A4139]">
                  Thank you for reaching out to Dasa Export. We'll get back to
                  you at <span className="font-semibold text-[#0B2B1B]">{formData.email}</span> within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-3 bg-[#F15A24] text-white font-eyebrow text-xs uppercase tracking-widest font-bold hover:bg-[#0B2B1B] transition-colors"
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">

                {/* Row 1: Full Name & Company Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <Field
                    label="Full Name"
                    value={formData.name}
                    onChange={update('name')}
                    placeholder="e.g. Jane Doe"
                    required
                  />
                  <Field
                    label="Company Name"
                    value={formData.company}
                    onChange={update('company')}
                    placeholder="Your Organization"
                    required
                  />
                </div>

                {/* Row 2: Country of Destination & Email Address */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <Field
                    label="Country of Destination"
                    value={formData.country}
                    onChange={update('country')}
                    placeholder="e.g. Netherlands"
                    required
                  />
                  <Field
                    label="Email Address"
                    type="email"
                    value={formData.email}
                    onChange={update('email')}
                    placeholder="contact@dasaexports.com"
                    required
                  />
                </div>

                {/* Row 3: Product of Interest & Estimated Quantity */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <label className="font-eyebrow text-[11px] text-[#D4A359] uppercase tracking-[0.18em] block mb-2 font-bold">
                      Product of Interest
                    </label>
                    <select
                      value={formData.product}
                      onChange={update('product')}
                      className="w-full bg-transparent border-b border-[#DFDCD5] py-2 text-[#0B2B1B] focus:outline-none focus:border-[#F15A24] font-body-md text-sm transition-colors"
                    >
                      {PRODUCTS.map((p) => (
                        <option key={p.id} value={p.name}>
                          {p.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <Field
                    label="Estimated Quantity (MT)"
                    value={formData.quantity}
                    onChange={update('quantity')}
                    placeholder="e.g. 50"
                  />
                </div>

                {/* Row 4: Additional Specifications */}
                <div>
                  <label className="font-eyebrow text-[11px] text-[#D4A359] uppercase tracking-[0.18em] block mb-2 font-bold">
                    Additional Specifications
                  </label>
                  <textarea
                    rows="3"
                    value={formData.message}
                    onChange={update('message')}
                    placeholder="Certifications, packaging requirements, delivery schedule..."
                    className="w-full bg-transparent border-b border-[#DFDCD5] py-2 text-[#0B2B1B] placeholder:text-[#B5B0A4] focus:outline-none focus:border-[#F15A24] font-body-md text-sm transition-colors resize-none"
                  />
                </div>

                {/* Submit */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="group inline-flex items-center gap-2 px-8 py-4 bg-[#F15A24] text-white font-eyebrow text-xs uppercase tracking-[0.15em] font-bold hover:bg-[#0B2B1B] transition-colors"
                  >
                    <span>Submit Enquiry</span>
                    <ArrowUpRight
                      size={15}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column (5 cols): Global Office */}
          <div className="md:col-span-5 md:border-l md:border-[#E5E2D9] md:pl-10 space-y-10">
            <div>
              <h3 className="font-display-lg text-3xl md:text-4xl text-[#0B2B1B] font-serif font-bold mb-8">
                Global Office
              </h3>

              <div className="space-y-8">
                <ContactRow
                  icon={<PhoneCall size={19} className="text-[#2E7D32]" />}
                  label="Trade Desk / WhatsApp"
                  href="https://wa.me/919894132848"
                  external
                >
                  +91 98941 32848
                </ContactRow>

                <ContactRow
                  icon={<Mail size={19} className="text-[#2E7D32]" />}
                  label="General Inquiries"
                  href="mailto:contact@dasaexports.com"
                >
                  contact@dasaexports.com
                </ContactRow>

                <ContactRow
                  icon={<Globe size={19} className="text-[#2E7D32]" />}
                  label="Official Website"
                  href="https://www.dasaexports.com"
                  external
                >
                  www.dasaexports.com
                </ContactRow>

                <div className="flex items-start gap-4">
                  <MapPin size={19} className="text-[#2E7D32] mt-0.5" />
                  <div>
                    <span className="font-eyebrow text-[10px] text-[#D4A359] uppercase tracking-[0.2em] font-bold block mb-1">
                      Headquarters & Processing
                    </span>
                    <p className="text-[#0B2B1B] font-body-md text-sm leading-relaxed font-medium">
                      Dasa Export <br />
                      Tamil Nadu, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Office preview card */}
            <div className="pt-4">
              <div className="border border-[#E5E2D9] overflow-hidden bg-[#FAF8F2] p-5 space-y-3">
                <div className="flex justify-between items-center border-b border-[#0B2B1B]/10 pb-3">
                  <span className="font-eyebrow text-[10px] text-[#D4A359] uppercase tracking-wider font-bold">
                    Visit Us & Factory Tours
                  </span>
                  <span className="text-[11px] font-bold text-[#2E7D32] bg-[#2E7D32]/10 px-2 py-0.5">
                    ISO & FSSAI
                  </span>
                </div>
                <p className="text-xs text-[#5A4139] leading-relaxed">
                  Scheduled factory visits and container loading audits are
                  available on request for registered B2B buyers.
                </p>
                <div className="text-[11px] text-[#0B2B1B] font-bold">
                  Phone / WhatsApp: +91 98941 32848
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function Field({ label, type = 'text', value, onChange, placeholder, required }) {
  return (
    <div>
      <label className="font-eyebrow text-[11px] text-[#D4A359] uppercase tracking-[0.18em] block mb-2 font-bold">
        {label}
      </label>
      <input
        required={required}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full bg-transparent border-b border-[#DFDCD5] py-2 text-[#0B2B1B] placeholder:text-[#B5B0A4] focus:outline-none focus:border-[#F15A24] font-body-md text-sm transition-colors"
      />
    </div>
  );
}

function ContactRow({ icon, label, href, external, children }) {
  return (
    <div className="flex items-start gap-4">
      <div className="mt-0.5">{icon}</div>
      <div>
        <span className="font-eyebrow text-[10px] text-[#D4A359] uppercase tracking-[0.2em] font-bold block mb-1">
          {label}
        </span>
        <a
          href={href}
          target={external ? '_blank' : undefined}
          rel={external ? 'noreferrer' : undefined}
          className="text-[#0B2B1B] font-body-lg text-base font-medium hover:text-[#F15A24] transition-colors"
        >
          {children}
        </a>
      </div>
    </div>
  );
}