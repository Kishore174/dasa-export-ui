import React from 'react';
import { Link } from 'react-router-dom';
import RequestEstimateForm from './Requestestimateform';

export default function Hero({ onOpenQuoteModal }) {
  return (
    <header className="relative w-full min-h-[90vh] flex items-center bg-[#FAF8F2] overflow-hidden border-b border-slate-200/60">
      {/* High-Definition Agricultural Spices Photo Background Layer */}
      <div className="absolute inset-0 z-0">
        <div
          className="bg-cover bg-center w-full h-full opacity-85 mix-blend-multiply"
          style={{
            backgroundImage: `url('/hero-bg.jpg'), url('https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=2000&q=85')`
          }}
        />
        {/* Soft, crisp cream backdrop gradient to guarantee 100% perfect text legibility on the left while showcasing the photo on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F2] via-[#FAF8F2]/90 to-transparent pointer-events-none" />
      </div>

      {/* Hero Content Grid */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-20 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">

        {/* Left Column (7 cols): Copy & CTAs */}
        <div className="col-span-1 md:col-span-7 flex flex-col justify-center items-start space-y-6">

          {/* Global Agriculture Badge */}
          <div className="inline-flex items-center gap-2 border border-[#0B2B1B]/15 px-3.5 py-1.5 bg-white/90 backdrop-blur-sm shadow-sm rounded-full">
            <span className="w-2 h-2 rounded-full bg-[#F15A24]" />
            <span className="font-eyebrow text-eyebrow text-[#0B2B1B] tracking-widest uppercase">
              Global Agriculture
            </span>
          </div>

          {/* Display Heading */}
          <h1 className="font-display-lg text-display-lg text-[#0B2B1B] max-w-3xl leading-[1.1]">
            Nature's Finest, <br />
            <span className="text-[#2E7D32] italic font-light">Delivered Worldwide.</span>
          </h1>

          {/* Subtext */}
          <p className="font-body-lg text-body-lg text-[#5A4139] max-w-2xl font-normal leading-relaxed">
            Premium agricultural ingredients from India, carefully sourced and meticulously processed for discerning global markets. We bridge local harvests with international excellence.
          </p>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row gap-4">
            <Link
              to="/products"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#F15A24] text-white font-label-md text-label-md rounded hover:bg-[#0B2B1B] transition-colors duration-200 shadow-md"
            >
              Explore Products
            </Link>

            <a
              href="#catalog-cta"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/90 border border-[#2E7D32] text-[#0B2B1B] font-label-md text-label-md rounded hover:bg-white transition-colors duration-200 shadow-sm"
            >
              Download Catalog
            </a>
          </div>

        </div>

        {/* Right Column (5 cols): Request Estimate Form */}
        <div className="col-span-1 md:col-span-5 relative z-20">
          <RequestEstimateForm />
        </div>

      </div>
    </header>
  );
}