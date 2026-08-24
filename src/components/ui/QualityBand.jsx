import React from 'react';
import RevealOnScroll from './RevealOnScroll';

export default function QualityBand() {
  const certs = [
    {
      title: "ISO",
      subtitle: "9001:2015 CERTIFIED"
    },
    {
      title: "FSSAI",
      subtitle: "FOOD SAFETY AUTHORITY"
    },
    {
      title: "APEDA",
      subtitle: "REGISTERED MEMBER"
    },
    {
      title: "HACCP",
      subtitle: "SAFETY CERTIFIED"
    },
    {
      title: "ORG",
      subtitle: "100% ORGANIC TRACEABLE"
    }
  ];

  return (
    <section className="w-full bg-[#032313] py-12 md:py-16" id="certificates">
      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop text-center">
        
        {/* Eyebrow Label */}
        <RevealOnScroll delay={0}>
        <span className="font-eyebrow text-[10px] text-[#A16900] uppercase tracking-[0.25em] block mb-2 font-bold">
          QUALITY ASSURANCE
        </span>
        </RevealOnScroll>

        {/* Display Heading */}
        <RevealOnScroll delay={100}>
        <h2 className="font-display-lg text-3xl md:text-4xl text-white font-serif tracking-tight mb-3">
          Uncompromising Global Standards
        </h2>
        </RevealOnScroll>

        {/* Orange Accent Line */}
        <RevealOnScroll delay={200}>
        <div className="w-10 h-[2px] bg-[#F15A24] mx-auto mb-8 md:mb-10" />
        </RevealOnScroll>

        {/* 5 Card Tiles Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6 max-w-5xl mx-auto">
          {certs.map((cert, index) => (
            <RevealOnScroll key={cert.title} delay={300 + index * 100}>
            <div className="flex flex-col items-center group">
              {/* Compact Rounded Square Border Card */}
              <div className="w-full aspect-square bg-[#052b18]/60 border border-[#144229] rounded-xl flex items-center justify-center p-3 mb-2.5 group-hover:border-[#F15A24]/60 group-hover:bg-[#07361f] group-hover:scale-105 group-hover:-translate-y-1 transition-all duration-400 ease-out shadow-inner group-hover:shadow-2xl">
                <span className="font-display text-xl md:text-2xl text-white tracking-wide">
                  {cert.title}
                </span>
              </div>

              {/* Card Subtitle */}
              <span className="font-eyebrow text-[9px] text-white/50 tracking-wider uppercase font-semibold leading-tight text-center max-w-[120px]">
                {cert.subtitle}
              </span>
            </div>
            </RevealOnScroll>
          ))}
        </div>

      </div>
    </section>
  );
}
