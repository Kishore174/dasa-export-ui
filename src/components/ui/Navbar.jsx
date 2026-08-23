import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar({ onOpenQuoteModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products', path: '/products' },
    // { name: 'Catalog', path: '/catalog' },
    { name: 'Certificates', path: '/certificates' },
    { name: 'Payment', path: '/payment-terms' },
  ];

  const handleQuoteClick = () => {
    const quoteEl = document.getElementById('quote-form');
    if (quoteEl) {
      quoteEl.scrollIntoView({ behavior: 'smooth' });
    } else if (onOpenQuoteModal) {
      onOpenQuoteModal();
    } else {
      window.location.href = '/contact';
    }
  };

  return (
    <header className="w-full sticky top-0 z-50 bg-white border-b border-[#0B2B1B]/10 shadow-sm transition-all duration-300 ease-in-out">
      
      {/* Top Contact Bar — Desktop/Tablet Only (Hidden on Mobile) */}
      <div className="hidden sm:block bg-[#021c10] text-white text-[11px] py-1.5 px-margin-mobile md:px-margin-desktop border-b border-white/5">
        <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-1.5 sm:gap-4 font-eyebrow tracking-wider text-center sm:text-left">
          
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-6">
            <span className="truncate">ISO · FSSAI · APEDA · HACCP CERTIFIED</span>
            <span className="hidden lg:inline opacity-40">|</span>
            <span className="hidden lg:inline">TAMIL NADU, INDIA</span>
          </div>

          <div className="flex items-center justify-center gap-3 sm:gap-4">
            <a href="mailto:contact@dasaexports.com" className="hover:text-[#F15A24] transition-colors truncate">
              contact@dasaexports.com
            </a>
            <span className="opacity-40">|</span>
            <a href="https://wa.me/919894132848" target="_blank" rel="noreferrer" className="text-[#F15A24] font-bold hover:underline whitespace-nowrap">
              +91 98941 32848
            </a>
          </div>

        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="w-full bg-white/95 backdrop-blur-md">
        <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-4 max-w-[1440px] mx-auto">

          {/* Brand Logo */}
          <Link className="font-headline-md text-2xl md:text-3xl text-[#0B2B1B] hover:text-[#F15A24] transition-colors font-serif font-bold" to="/">
            Dasa Export<span className="text-[#F15A24]">.</span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-gutter">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`font-eyebrow text-eyebrow tracking-widest uppercase transition-colors pb-1 border-b ${
                    isActive
                      ? 'text-[#F15A24] border-[#F15A24] font-bold'
                      : 'text-[#0B2B1B]/70 border-transparent hover:text-[#F15A24]'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Request Quote CTA Button */}
          <button
            onClick={handleQuoteClick}
            className="hidden md:inline-flex items-center justify-center px-6 py-3 bg-[#F15A24] text-white font-label-md text-label-md hover:bg-[#0B2B1B] transition-colors duration-200"
          >
            Request Quote
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#0B2B1B] p-1"
            aria-label="Toggle Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-[#0B2B1B]/10 px-margin-mobile py-4 space-y-3">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block font-eyebrow text-eyebrow py-2 border-b border-[#0B2B1B]/10 transition-colors ${
                    isActive ? 'text-[#F15A24] font-bold' : 'text-[#0B2B1B]/70 hover:text-[#F15A24]'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleQuoteClick();
              }}
              className="w-full mt-2 px-6 py-3 bg-[#F15A24] text-white font-label-md text-label-md text-center hover:bg-[#0B2B1B] transition-colors duration-200"
            >
              Request Quote
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}