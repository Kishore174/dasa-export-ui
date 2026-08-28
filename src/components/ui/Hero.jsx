import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, ChevronLeft, ChevronRight, ShieldCheck, Globe, Sparkles, X, FileText } from 'lucide-react';
import RequestEstimateForm from './Requestestimateform';

const heroSlides = [
  {
    id: 1,
    image: "/hero/tomato-hero.png",
    eyebrow: "GLOBAL AGRICULTURAL EXPORTS",
    title: "Nature's Finest Ingredients,",
    highlight: "Delivered Worldwide.",
    description: "Premium spray-dried tomato & vegetable powders sourced directly from South Indian farms. Processed in GMP-certified facilities for international food manufacturers.",
    statLabel: "EXPORT DESTINATIONS",
    statValue: "15+ Countries",
    lot: "TOM-2026-A1",
    grade: "GRADE A",
  },
  {
    id: 2,
    image: "/hero/turmeric-hero.png",
    eyebrow: "HIGH CURCUMIN SPICES",
    title: "Pure Alleppey Turmeric,",
    highlight: "Packed with Bio-Active Potency.",
    description: "Cold-milled golden finger roots with guaranteed curcumin content > 3.0%. Ideal for curry blends, food processing, and pharmaceuticals.",
    statLabel: "ANNUAL CAPACITY",
    statValue: "5,000+ MT",
    lot: "TUR-2026-B2",
    grade: "CURCUMIN 3.0%+",
  },
  {
    id: 3,
    image: "/hero/moringa-hero.png",
    eyebrow: "ORGANIC SUPERFOOD BOTANICALS",
    title: "Organic Moringa Leaf,",
    highlight: "Soil-to-Port Traceability.",
    description: "Nutrient-dense green leaf powder processed with 100% organic integrity, validated by independent SGS & Geo-Chem laboratories before container loading.",
    statLabel: "STATUTORY COMPLIANCE",
    statValue: "ISO & FSSAI Certified",
    lot: "MOR-2026-C3",
    grade: "CERTIFIED ORGANIC",
  },
  {
    id: 4,
    image: "/hero/millet-hero.png",
    eyebrow: "ANCIENT SUPER-GRAINS",
    title: "Organic Indian Millets,",
    highlight: "100% Gluten-Free Powerhouse.",
    description: "Cold-milled ancient millet powders (Ragi, Foxtail, Bajra, Sorghum) harvested for global health foods, baby nutrition, and modern bakery formulations.",
    statLabel: "PRODUCT VARIETIES",
    statValue: "12+ Millet Grains",
    lot: "MIL-2026-D4",
    grade: "100% GLUTEN FREE",
  },
  {
    id: 5,
    image: "/hero/fruit-powder-hero.png",
    eyebrow: "PREMIUM FRUIT POWDERS",
    title: "Vibrant Fruit Powders,",
    highlight: "100% Natural Essence.",
    description: "Spray-dried natural fruit powders retaining authentic flavor, color, and nutritional value. Perfect for beverages, confectionery, and modern food applications.",
    statLabel: "SOLUBILITY",
    statValue: "100% Water Soluble",
    lot: "FRT-2026-E5",
    grade: "PREMIUM GRADE",
  },
];

const destinations = [
  "USA", "GERMANY", "UAE", "NETHERLANDS", "JAPAN", "SINGAPORE",
  "SOUTH KOREA", "UNITED KINGDOM", "AUSTRALIA", "SAUDI ARABIA",
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isEstimateOpen, setIsEstimateOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNextSlide();
    }, 6500);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const handleNextSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
      setIsTransitioning(false);
    }, 500);
  };

  const handlePrevSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
      setIsTransitioning(false);
    }, 500);
  };

  const goToSlide = (index) => {
    if (index === currentSlide) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsTransitioning(false);
    }, 500);
  };

  const slide = heroSlides[currentSlide];

  return (
    <header className="relative w-full min-h-[100svh] flex flex-col justify-between bg-[#0B2B1B] overflow-hidden group/hero pt-24 lg:pt-32">

      {/* 4K Background Images Layer — Fixed Dimensions & GPU Accelerated Crossfade */}
      {heroSlides.map((s, idx) => {
        const isActive = idx === currentSlide;
        return (
          <div
            key={s.id}
            className={`absolute inset-0 w-full h-full z-0 transition-opacity duration-1000 ease-in-out will-change-opacity ${isActive ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          >
            <div
              className={`bg-cover bg-center w-full h-full transform-gpu transition-transform duration-[8000ms] ease-out ${isActive ? 'scale-105' : 'scale-100'}`}
              style={{ 
                backgroundImage: `url('${s.image}')`, 
                objectPosition: 'center center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }}
            />
          </div>
        );
      })}

      {/* Clean Background Image View — Dark Overlay Shadow Removed */}

      {/* Fine paper-grain overlay */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.05] mix-blend-overlay"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="absolute -top-32 left-1/4 w-96 h-96 bg-[#F15A24]/15 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute -bottom-32 right-1/4 w-96 h-96 bg-[#2E7D32]/20 rounded-full blur-3xl pointer-events-none z-0" />

      {/* Top progress bar */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-white/10 z-30">
        <div
          className="h-full bg-[#F15A24] origin-left"
          style={{
            transform: isTransitioning ? 'scaleX(0)' : 'scaleX(1)',
            transition: isTransitioning ? 'none' : 'transform 6.5s linear',
          }}
        />
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .slide-up-anim { animation: slideUpFade 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; opacity: 0; transform: translateY(20px); }
        @keyframes slideUpFade { to { opacity: 1; transform: translateY(0); } }
        @keyframes slideLeft { from { transform: translateX(100%); } to { transform: translateX(0); } }
        .animate-slideLeft { animation: slideLeft 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        @keyframes sealSpin { to { transform: rotate(360deg); } }
        .seal-ring { animation: sealSpin 22s linear infinite; }
        .marquee-track { animation: marquee 28s linear infinite; }
        .marquee-track:hover { animation-play-state: paused; }
        @keyframes shimmer { 0% { transform: translateX(-100%); } 100% { transform: translateX(200%); } }
        @media (prefers-reduced-motion: reduce) {
          .slide-up-anim, .seal-ring, .marquee-track { animation: none !important; opacity: 1 !important; transform: none !important; }
        }
      `}} />

      {/* Main content row — Fixed Height Container & Left Aligned */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-[clamp(16px,5vw,64px)] flex-1 flex flex-col justify-center items-start pb-8 lg:pb-12">
        <div className="max-w-2xl text-left w-full">

          <div key={`content-${currentSlide}`} className="w-full min-h-[380px] flex flex-col justify-center">

            {/* Eyebrow */}
            <div className="slide-up-anim [animation-delay:100ms]">
              <div className="inline-flex items-center gap-3 border border-white/20 px-5 py-2 bg-gradient-to-r from-black/60 to-black/20 backdrop-blur-xl rounded-full mb-6 shadow-2xl relative overflow-hidden">
                {/* Glowing Corporate Indicator */}
                <div className="w-1.5 h-1.5 rounded-full bg-[#F4A62A] shadow-[0_0_10px_2px_rgba(244,166,42,0.8)] relative z-10" />
                <span className="font-eyebrow text-[10px] sm:text-[11px] text-white tracking-[0.3em] uppercase font-bold relative z-10">
                  {slide.eyebrow}
                </span>
                {/* Subtle Shimmer Sweep */}
                <div className="absolute inset-0 w-[200%] bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-[shimmer_3.5s_infinite_linear]" />
              </div>
            </div>

            {/* Heading */}
            <h1 className="slide-up-anim [animation-delay:250ms] font-display-lg text-[clamp(40px,10vw,64px)] text-white leading-[1.1] mb-2 font-serif font-bold drop-shadow-2xl">
              {slide.title} <br />
              <span className="text-[#F4A62A] italic font-light">{slide.highlight}</span>
            </h1>

            <p className="slide-up-anim [animation-delay:400ms] font-body-lg text-base sm:text-lg text-white/90 font-normal leading-relaxed drop-shadow-md max-w-xl min-h-[56px] mt-[clamp(16px,4vw,32px)] mb-7">
              {slide.description}
            </p>

            {/* CTAs */}
            <div className="slide-up-anim [animation-delay:550ms] flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <button
                onClick={() => setIsEstimateOpen(true)}
                className="group flex items-center justify-center gap-2.5 px-8 bg-[#F15A24] text-white font-eyebrow text-xs tracking-[0.15em] font-bold uppercase rounded-lg hover:bg-white hover:text-[#0B2B1B] transition-all duration-300 shadow-xl hover:shadow-2xl cursor-pointer w-full sm:w-auto min-h-[56px]"
              >
                <FileText size={16} />
                <span>Request Export Estimate</span>
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <Link
                to="/products"
                className="group flex items-center justify-center gap-2.5 px-8 bg-black/30 backdrop-blur-md border border-white/30 text-white font-eyebrow text-xs tracking-[0.15em] font-bold uppercase rounded-lg hover:bg-white hover:text-[#0B2B1B] transition-all duration-300 shadow-lg w-full sm:w-auto min-h-[56px]"
              >
                <span>Explore Products</span>
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                to="/catalog"
                className="group flex items-center justify-center gap-2.5 px-8 bg-black/20 backdrop-blur-md border border-white/20 text-white font-eyebrow text-xs tracking-[0.15em] font-bold uppercase rounded-lg hover:bg-white hover:text-[#0B2B1B] transition-all duration-300 shadow-md w-full sm:w-auto min-h-[56px]"
              >
                <span>View Catalog</span>
              </Link>
            </div>

            {/* Metric highlights */}
            <div className="slide-up-anim [animation-delay:650ms] mt-[clamp(24px,5vw,32px)] pt-[clamp(20px,4vw,24px)] border-t border-white/15 flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-8 w-full">
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <div className="w-10 h-10 rounded-full bg-[#2E7D32]/20 border border-[#2E7D32]/40 flex items-center justify-center text-[#2E7D32] shrink-0">
                  <ShieldCheck size={20} className="text-[#F4A62A]" />
                </div>
                <div>
                  <span className="font-eyebrow text-[10px] text-white/60 uppercase tracking-widest block font-bold">
                    {slide.statLabel}
                  </span>
                  <span className="font-serif font-bold text-base text-white">
                    {slide.statValue}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:pl-6 sm:border-l border-white/15 w-full sm:w-auto">
                <div className="w-10 h-10 rounded-full bg-[#F15A24]/20 border border-[#F15A24]/40 flex items-center justify-center text-[#F15A24] shrink-0">
                  <Globe size={20} className="text-[#F15A24]" />
                </div>
                <div>
                  <span className="font-eyebrow text-[10px] text-white/60 uppercase tracking-widest block font-bold">
                    EXPORT QUALITY GATE
                  </span>
                  <span className="font-serif font-bold text-base text-white">
                    SGS &amp; Geo-Chem Tested
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Slider controls */}
          <div className="mt-[clamp(24px,5vw,32px)] flex flex-wrap items-center gap-4 sm:gap-6 slide-up-anim [animation-delay:750ms] w-full">
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrevSlide}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 text-white hover:bg-white hover:text-[#0B2B1B] transition-colors backdrop-blur-md shadow-md group cursor-pointer shrink-0"
                aria-label="Previous slide"
              >
                <ChevronLeft size={18} className="group-hover:-translate-x-0.5 transition-transform" />
              </button>
              <button
                onClick={handleNextSlide}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 text-white hover:bg-white hover:text-[#0B2B1B] transition-colors backdrop-blur-md shadow-md group cursor-pointer shrink-0"
                aria-label="Next slide"
              >
                <ChevronRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            <div className="font-mono text-xs tracking-widest text-white/60 border border-dashed border-white/25 rounded px-3 py-1.5 shrink-0">
              LOT <span className="text-white font-bold">{String(currentSlide + 1).padStart(2, '0')}</span> / {String(heroSlides.length).padStart(2, '0')}
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              {heroSlides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className={`h-2 rounded-full transition-all duration-500 cursor-pointer ${idx === currentSlide ? 'w-6 bg-[#F15A24]' : 'w-2 bg-white/30 hover:bg-white/70'}`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Signature element: Premium Export Seal, stamped over the image, right side */}
      <div className="absolute right-4 top-24 sm:right-8 sm:top-28 lg:top-1/2 lg:-translate-y-1/2 lg:right-10 xl:right-16 z-20 pointer-events-none drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
        <div key={`seal-${currentSlide}`} className="relative w-[clamp(90px,23vw,140px)] h-[clamp(90px,23vw,140px)] slide-up-anim [animation-delay:450ms]">
          
          {/* Dark translucent background for guaranteed contrast (80% opacity) */}
          <div className="absolute inset-0 bg-[#0B0B0B]/80 rounded-full border border-[#F4A62A]/40 backdrop-blur-sm" />
          
          {/* Rotating Text Ring */}
          <svg viewBox="0 0 160 160" className="absolute inset-0 w-full h-full seal-ring drop-shadow-md">
            <defs>
              <path id="sealCircle" d="M 80,80 m -64,0 a 64,64 0 1,1 128,0 a 64,64 0 1,1 -128,0" />
            </defs>
            {/* Outer high-contrast border */}
            <circle cx="80" cy="80" r="76" fill="none" stroke="#F4A62A" strokeWidth="1.5" strokeOpacity="0.9" />
            {/* Inner subtle border for premium stamp look */}
            <circle cx="80" cy="80" r="50" fill="none" stroke="#F4A62A" strokeWidth="1" strokeOpacity="0.4" strokeDasharray="3 3" />
            
            <text fill="#F4A62A" fontSize="9.5" letterSpacing="2" className="font-eyebrow uppercase font-bold" style={{ textShadow: "0px 1px 2px rgba(0,0,0,0.8)" }}>
              <textPath href="#sealCircle" startOffset="2%">
                {`EXPORT • ${slide.grade} • CERTIFIED • VELLORE • `}
              </textPath>
            </text>
          </svg>
          
          {/* Static Center Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 scale-90 sm:scale-100">
            <ShieldCheck size={18} className="text-[#F4A62A] mb-1 sm:w-5 sm:h-5 lg:w-6 lg:h-6 drop-shadow-md" strokeWidth={1.5} />
            <span className="font-mono text-[8px] sm:text-[9px] lg:text-[10px] tracking-[0.2em] text-[#F9F7F1] uppercase mb-0.5 opacity-90 drop-shadow-sm">
              Lot No.
            </span>
            <span className="font-mono text-[10px] sm:text-xs lg:text-sm font-bold text-white tracking-widest drop-shadow-md">
              {slide.lot}
            </span>
          </div>
        </div>
      </div>

      {/* Destinations ticker */}
      <div className="relative z-10 w-full border-t border-white/10 bg-black/30 backdrop-blur-sm overflow-hidden shrink-0">
        <div className="flex items-center gap-3 py-3 px-[clamp(16px,5vw,64px)] max-w-[1440px] mx-auto">
          <span className="font-eyebrow text-[10px] tracking-[0.2em] text-[#F4A62A] font-bold uppercase shrink-0 hidden sm:inline">
            Shipping to
          </span>
          <div className="relative flex-1 overflow-hidden">
            <div className="flex whitespace-nowrap marquee-track w-max">
              {[...destinations, ...destinations].map((country, i) => (
                <span key={i} className="font-mono text-[11px] tracking-[0.2em] text-white/50 uppercase mx-5 flex items-center gap-5">
                  {country}
                  <span className="text-[#F15A24]/50">•</span>
                </span>
              ))}
            </div>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#0B2B1B] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#0B2B1B] to-transparent" />
          </div>
        </div>
      </div>

      {/* Slide-over Estimate Form Dialog */}
      {isEstimateOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div
            className="absolute inset-0 bg-black/75 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setIsEstimateOpen(false)}
          />
          <div className="fixed inset-y-0 right-0 max-w-lg w-full bg-[#0B2B1B] shadow-2xl z-50 overflow-y-auto flex flex-col justify-between border-l border-white/10 animate-slideLeft">
            <div className="p-4 sm:p-6 relative">
              <button
                onClick={() => setIsEstimateOpen(false)}
                className="absolute top-5 right-5 p-2 rounded-full bg-white/10 text-white hover:bg-white hover:text-[#0B2B1B] transition-colors z-20 cursor-pointer"
                aria-label="Close dialog"
              >
                <X size={20} />
              </button>
              <RequestEstimateForm />
            </div>
          </div>
        </div>
      )}

    </header>
  );
}
