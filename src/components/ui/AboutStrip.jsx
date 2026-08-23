import React from 'react';
import { Link } from 'react-router-dom';

export default function AboutStrip() {
  return (
    <section className="w-full bg-white py-20 md:py-28 border-y border-slate-100" id="about">
      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
          
          {/* Left Side: Photo with Overlaid White Card */}
          <div className="md:col-span-6 relative pb-8 md:pb-0">
            <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden shadow-sm bg-slate-100 border border-slate-200/60">
              <img
                src="/products/tomato.jpg"
                alt="Agricultural Heritage & Tomato Powder"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=1200&q=80';
                }}
              />
            </div>

            {/* Overlaid Title Card at Bottom-Right of Image */}
            <div className="absolute bottom-0 right-4 md:bottom-6 md:-right-6 bg-white border border-slate-200 p-6 md:p-8 shadow-xl max-w-[240px] md:max-w-[290px] z-10">
              <span className="font-eyebrow text-[11px] text-[#A16900] uppercase tracking-widest block mb-2 font-bold">
                OUR HERITAGE
              </span>
              <h2 className="font-display-lg text-3xl md:text-4xl text-[#1B1C19] leading-tight font-serif">
                Rooted in <br />
                <span className="text-[#F15A24] italic font-light">Quality.</span>
              </h2>
            </div>
          </div>

          {/* Right Side: Editorial Paragraphs with Left Accent Bar */}
          <div className="md:col-span-6 flex flex-col justify-center space-y-6 pt-4 md:pt-0 md:pl-4">
            
            {/* Lead Paragraph with Vertical Orange Accent Line */}
            <div className="border-l-2 border-[#F15A24] pl-5">
              <p className="font-body-lg text-lg text-[#1B1C19] font-semibold leading-relaxed">
                Established with a vision to share India’s agricultural wealth with the world, Dasa Export stands as a beacon of reliability and superior quality in the international food trade.
              </p>
            </div>

            {/* Second Paragraph */}
            <p className="font-body-md text-base text-[#5A4139] leading-relaxed">
              We partner directly with dedicated farmers, employing advanced processing techniques to ensure that every grain, spice, and powder retains its natural essence, flavor, and nutritional value.
            </p>

            {/* Third Paragraph */}
            <p className="font-body-md text-base text-[#5A4139] leading-relaxed">
              Our commitment extends beyond mere commerce; it is a dedication to sustainable practices and enduring partnerships across continents, bridging local harvests with global excellence.
            </p>

            {/* Learn Our Story CTA Link */}
            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 font-label-md text-sm font-semibold text-[#F15A24] border-b border-[#F15A24]/40 hover:border-[#F15A24] transition-colors pb-1 group"
              >
                <span>Learn Our Story</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
