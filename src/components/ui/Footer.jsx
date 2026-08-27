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
    <footer className="relative w-full text-white overflow-hidden bg-[#1B1C19]">
      {/* Premium Footer Texture & Ambient Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img src="/footer-premium-bg.png" className="w-full h-full object-cover object-center opacity-60" alt="Footer Background Texture" />
        
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#F15A24]/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-2/3 h-full bg-[#F4A62A]/5 blur-[140px] rounded-full" />
      </div>

      {/* Signature statement band */}
      <div className="relative z-10 border-b border-white/10 bg-white/5">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 px-margin-mobile md:px-margin-desktop w-full max-w-[1440px] mx-auto py-8 md:py-10">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F15A24]/10 text-[10px] uppercase tracking-[0.15em] text-[#F15A24] font-bold mb-3 shadow-sm border border-[#F15A24]/20">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F15A24] animate-pulse" />
              Global Supply Partner
            </span>
            <h3 className="font-display-lg font-serif font-bold text-white text-2xl md:text-3xl leading-tight max-w-xl">
              Nature's Finest Ingredients,
              <br className="hidden md:block" />
              Delivered Worldwide.
            </h3>
          </div>
          <Link
            to="/contact"
            className="group shrink-0 inline-flex items-center gap-2 font-eyebrow text-[11px] uppercase tracking-[0.15em] font-bold text-white bg-[#F15A24] px-6 py-3.5 rounded-lg hover:bg-white hover:text-[#1B1C19] shadow-lg transition-all duration-300 ease-out"
          >
            Start an Export Enquiry
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>
      </div>

      {/* Main columns */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6 px-margin-mobile md:px-margin-desktop w-full max-w-[1440px] mx-auto py-10 md:py-12">

        {/* Brand */}
        <div className="md:col-span-4 flex flex-col justify-between">
          <div>
            <Link className="font-display-lg text-3xl text-white font-serif font-bold mb-4 inline-block tracking-tight" to="/">
              Dasa Export
            </Link>
            <p className="font-body-md text-sm text-slate-200 leading-relaxed max-w-xs">
              Premium agricultural ingredients direct from India — carefully harvested,
              cold-milled, and trusted by global food manufacturers worldwide.
            </p>
          </div>
          <div className="hidden md:flex items-center gap-2.5 mt-10 text-xs text-[#F4A62A] uppercase tracking-[0.15em] font-bold">
            <span className="w-6 h-0.5 bg-[#F4A62A]" />
            ISO · FSSAI · APEDA · HACCP Certified
          </div>
        </div>

        {/* Contact */}
        <div className="md:col-span-3">
          <h4 className="font-eyebrow text-xs text-[#F4A62A] uppercase tracking-[0.2em] font-bold mb-6">
            Direct Contact
          </h4>
          <ul className="flex flex-col gap-4 text-sm text-slate-100">
            <li>
              <a
                className="flex items-center gap-3 hover:text-[#F15A24] transition-colors"
                href="https://wa.me/919894132848"
                target="_blank"
                rel="noreferrer"
              >
                <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-[#F4A62A] shrink-0">
                  <MessageCircle size={15} />
                </div>
                <span>WhatsApp Desk</span>
              </a>
            </li>
            <li>
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-[#F4A62A] shrink-0 mt-0.5">
                  <Mail size={15} />
                </div>
                <div className="flex flex-col gap-1.5 text-sm text-slate-100">
                  <a
                    className="hover:text-[#F15A24] transition-colors"
                    href="mailto:contact@dasaexports.com"
                  >
                    contact@dasaexports.com
                  </a>
                  <a
                    className="hover:text-[#F15A24] transition-colors"
                    href="mailto:info@dasaexports.com"
                  >
                    info@dasaexports.com
                  </a>
                  <a
                    className="hover:text-[#F15A24] transition-colors"
                    href="mailto:sales@dasaexports.com"
                  >
                    sales@dasaexports.com
                  </a>
                </div>
              </div>
            </li>
            <li>
              <a
                className="flex items-center gap-3 hover:text-[#F15A24] transition-colors"
                href="tel:+919894132848"
              >
                <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-[#F4A62A] shrink-0">
                  <Phone size={15} />
                </div>
                <span>+91 98941 32848</span>
              </a>
            </li>
            <li>
              <a
                className="flex items-center gap-3 hover:text-[#F15A24] transition-colors"
                href="https://www.dasaexports.com"
                target="_blank"
                rel="noreferrer"
              >
                <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-[#F4A62A] shrink-0">
                  <Globe size={15} />
                </div>
                <span>www.dasaexports.com</span>
              </a>
            </li>
            <li>
              <div className="flex items-center gap-3 text-slate-200">
                <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-[#F4A62A] shrink-0">
                  <MapPin size={15} />
                </div>
                <span>Tamil Nadu, India</span>
              </div>
            </li>
          </ul>
        </div>

        {/* Quick links */}
        <div className="md:col-span-2">
          <h4 className="font-eyebrow text-xs text-[#F4A62A] uppercase tracking-[0.2em] font-bold mb-6">
            Quick Navigation
          </h4>
          <ul className="flex flex-col gap-3.5 text-sm text-slate-100 font-medium">
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
                Products &amp; Millets
              </Link>
            </li>
            <li>
              <Link className="hover:text-[#F15A24] transition-colors" to="/certificates">
                Certificates
              </Link>
            </li>
            <li>
              <Link className="hover:text-[#F15A24] transition-colors" to="/payment-terms">
                Payment Terms
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="md:col-span-3">
          <h4 className="font-eyebrow text-xs text-[#F4A62A] uppercase tracking-[0.2em] font-bold mb-6">
            Export Market Dispatch
          </h4>
          <p className="font-body-md text-sm text-slate-200 mb-6 leading-relaxed">
            Receive seasonal harvest updates and market reports direct from origin.
          </p>

          {subscribed ? (
            <div className="text-xs font-bold text-[#F4A62A] py-3.5 border border-[#F4A62A]/40 px-4 bg-[#F4A62A]/15 rounded-lg shadow-sm">
              ✓ Subscribed to Dasa Export updates
            </div>
          ) : (
            <form className="flex flex-col gap-3.5" onSubmit={handleSubscribe}>
              <div className="bg-white/10 border border-white/20 rounded-lg px-4 focus-within:border-[#F4A62A] transition-colors backdrop-blur-sm">
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email address"
                  className="w-full bg-transparent text-white placeholder-slate-300 py-3 text-sm focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 px-5 bg-[#F15A24] text-white rounded-lg font-eyebrow text-xs uppercase tracking-[0.18em] font-bold hover:bg-white hover:text-[#12281D] transition-all duration-300 shadow-md cursor-pointer"
              >
                Subscribe Now →
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 border-t border-white/15 bg-black/30 backdrop-blur-sm">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-4 px-margin-mobile md:px-margin-desktop w-full max-w-[1440px] mx-auto py-6">
          <p className="font-eyebrow text-xs text-slate-300 uppercase tracking-[0.15em] font-semibold text-center md:text-left">
            © 2026 Dasa Export. All rights reserved.
          </p>
          <p className="font-eyebrow text-xs text-slate-300 uppercase tracking-[0.15em] font-semibold text-center md:text-right">
            Tamil Nadu, India · www.dasaexports.com
          </p>
        </div>
      </div>
    </footer>
  );
}
