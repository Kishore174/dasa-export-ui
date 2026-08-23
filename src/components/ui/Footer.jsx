import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, MessageCircle, Mail, Phone, MapPin, Globe } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <footer className="bg-[#021c10] w-full text-white">
      {/* Signature statement band */}
      <div className="border-b border-white/10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 px-margin-mobile md:px-margin-desktop w-full max-w-[1440px] mx-auto pt-20 md:pt-24 pb-14 md:pb-16">
          <h3 className="font-display-lg font-serif font-bold text-white text-3xl md:text-5xl leading-tight max-w-xl">
            Nature's Finest,
            <br />
            Delivered Worldwide.
          </h3>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 font-eyebrow text-xs uppercase tracking-[0.18em] font-bold text-[#021c10] bg-[#F15A24] px-7 py-4 hover:bg-[#D4A359] transition-colors w-fit"
          >
            Start an Export Enquiry
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      </div>

      {/* Main columns */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 px-margin-mobile md:px-margin-desktop w-full max-w-[1440px] mx-auto py-16 md:py-20">

        {/* Brand */}
        <div className="md:col-span-4 flex flex-col justify-between">
          <div>
            <Link className="font-display-lg text-2xl text-white font-serif font-bold mb-4 inline-block" to="/">
              Dasa Export
            </Link>
            <p className="font-body-md text-sm text-white/70 leading-relaxed max-w-xs">
              Premium agricultural ingredients from India — carefully sourced,
              naturally processed, and trusted by buyers across the globe.
            </p>
          </div>
          <div className="hidden md:flex items-center gap-2 mt-10 text-[10px] text-white/40 uppercase tracking-[0.15em] font-semibold">
            <span className="w-6 h-px bg-[#D4A359]" />
            ISO · FSSAI · APEDA · HACCP Certified
          </div>
        </div>

        {/* Contact */}
        <div className="md:col-span-3">
          <h4 className="font-eyebrow text-xs text-[#D4A359] uppercase tracking-[0.2em] font-bold mb-6">
            Contact
          </h4>
          <ul className="flex flex-col gap-4 text-sm text-white/80">
            <li>
              <a
                className="flex items-center gap-3 hover:text-[#F15A24] transition-colors"
                href="https://wa.me/919894132848"
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={15} className="text-white/40" />
                WhatsApp Desk
              </a>
            </li>
            <li>
              <a
                className="flex items-center gap-3 hover:text-[#F15A24] transition-colors"
                href="mailto:contact@dasaexports.com"
              >
                <Mail size={15} className="text-white/40" />
                contact@dasaexports.com
              </a>
            </li>
            <li>
              <a
                className="flex items-center gap-3 hover:text-[#F15A24] transition-colors"
                href="tel:+919894132848"
              >
                <Phone size={15} className="text-white/40" />
                +91 98941 32848
              </a>
            </li>
            <li>
              <a
                className="flex items-center gap-3 hover:text-[#F15A24] transition-colors"
                href="https://www.dasaexports.com"
                target="_blank"
                rel="noreferrer"
              >
                <Globe size={15} className="text-white/40" />
                www.dasaexports.com
              </a>
            </li>
            <li>
              <div className="flex items-start gap-3 text-white/80">
                <MapPin size={15} className="text-white/40 mt-0.5" />
                <span>Tamil Nadu, India</span>
              </div>
            </li>
          </ul>
        </div>

        {/* Quick links */}
        <div className="md:col-span-2">
          <h4 className="font-eyebrow text-xs text-[#D4A359] uppercase tracking-[0.2em] font-bold mb-6">
            Explore
          </h4>
          <ul className="flex flex-col gap-4 text-sm text-white/80">
            <li>
              <Link className="hover:text-[#F15A24] transition-colors" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:text-[#F15A24] transition-colors" to="/about">
                About Us
              </Link>
            </li>
            <li>
              <Link className="hover:text-[#F15A24] transition-colors" to="/products">
                Products
              </Link>
            </li>
            <li>
              <Link className="hover:text-[#F15A24] transition-colors" to="/certificates">
                Certificates
              </Link>
            </li>
            <li>
              <a className="hover:text-[#F15A24] transition-colors" href="#catalog-cta">
                Catalog
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="md:col-span-3">
          <h4 className="font-eyebrow text-xs text-[#D4A359] uppercase tracking-[0.2em] font-bold mb-6">
            Newsletter
          </h4>
          <p className="font-body-md text-sm text-white/70 mb-6 leading-relaxed">
            Seasonal harvests and export market updates, occasionally.
          </p>

          {subscribed ? (
            <div className="text-xs font-bold text-[#D4A359] py-3 border border-[#D4A359]/30 px-4 bg-[#D4A359]/10">
              ✓ Subscribed to Dasa Export updates
            </div>
          ) : (
            <form className="flex flex-col gap-4" onSubmit={handleSubscribe}>
              <div className="border-b border-white/20 focus-within:border-[#D4A359] transition-colors">
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  className="w-full bg-transparent text-white placeholder-white/40 py-3 text-sm focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="self-start font-eyebrow text-xs text-white uppercase tracking-[0.18em] font-bold hover:text-[#F15A24] transition-colors"
              >
                Subscribe →
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-4 px-margin-mobile md:px-margin-desktop w-full max-w-[1440px] mx-auto py-6">
          <p className="font-eyebrow text-[10px] text-white/40 uppercase tracking-[0.15em] font-semibold text-center md:text-left">
            © 2026 Dasa Export. All rights reserved.
          </p>
          <p className="font-eyebrow text-[10px] text-white/40 uppercase tracking-[0.15em] font-semibold text-center md:text-right">
            Tamil Nadu, India · www.dasaexports.com
          </p>
        </div>
      </div>
    </footer>
  );
}