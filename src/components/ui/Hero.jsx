import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, ChevronLeft, ChevronRight } from 'lucide-react';
import RequestEstimateForm from './Requestestimateform';

const heroSlides = [
  {
    id: 1,
    image: "/hero-bg.jpg",
    eyebrow: "GLOBAL AGRICULTURE",
    title: "Nature's Finest,",
    highlight: "Delivered Worldwide.",
    description: "Premium agricultural ingredients from India, carefully sourced and meticulously processed for discerning global markets. We bridge local harvests with international excellence.",
  },
  {
    id: 2,
    image: "/about-hero-bg.jpg",
    eyebrow: "SOURCE TO EXPORT",
    title: "From Indian Farms,",
    highlight: "To Global Markets.",
    description: "We work directly with certified farm partners across South India to ensure complete traceability, organic integrity, and fair-trade practices at every step.",
  },
  {
    id: 3,
    image: "/products-hero-bg.jpg", 
    eyebrow: "PREMIUM INGREDIENTS",
    title: "Quality You Can",
    highlight: "See. Trust. Taste.",
    description: "From high-curcumin turmeric to cold-milled beetroot powder, our ingredients retain their natural flavor, color, and bio-active potency for the food industry.",
  },
  {
    id: 4,
    image: "/certificates-hero-bg.jpg",
    eyebrow: "QUALITY CONTROL",
    title: "Every Batch,",
    highlight: "Carefully Prepared.",
    description: "Processed in GMP-certified facilities and strictly validated by independent SGS & Geo-Chem laboratories before container loading and port dispatch.",
  },
  {
    id: 5,
    image: "/contact-hero-bg.jpg",
    eyebrow: "GLOBAL LOGISTICS",
    title: "From Our Origin,",
    highlight: "To Your Destination.",
    description: "We handle complete maritime shipping logistics, ensuring seamless customs clearance, APEDA documentation, and phytosanitary compliance for worldwide delivery.",
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNextSlide();
    }, 6000); // 6 seconds per slide
    return () => clearInterval(timer);
  }, [currentSlide]);

  const handleNextSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
      setIsTransitioning(false);
    }, 600); // crossfade duration
  };

  const handlePrevSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
      setIsTransitioning(false);
    }, 600);
  };

  const goToSlide = (index) => {
    if (index === currentSlide) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsTransitioning(false);
    }, 600);
  };

  const slide = heroSlides[currentSlide];

  return (
    <header className="relative w-full min-h-[auto] md:min-h-[85vh] flex flex-col justify-center bg-[#1b1c19] overflow-hidden group/hero pt-24 pb-12 md:py-24">
      
      {/* Background Images Layer (Cinematic crossfade + scale) */}
      {heroSlides.map((s, idx) => {
        const isActive = idx === currentSlide;
        return (
          <div
            key={s.id}
            className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${isActive ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          >
            <div
              className={`bg-cover bg-center w-full h-full transform transition-transform duration-[7000ms] ease-out ${isActive ? 'scale-100' : 'scale-[1.04]'}`}
              style={{
                backgroundImage: `url('${s.image}')`,
                objectPosition: 'center',
              }}
            />
          </div>
        );
      })}

      {/* Cinematic Overlays for Text Readability */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-t from-black/90 via-black/40 to-transparent sm:bg-gradient-to-r sm:from-[#0B2B1B]/95 sm:via-[#0B2B1B]/70 sm:to-transparent mix-blend-multiply" />
      <div className="absolute inset-0 z-0 pointer-events-none bg-black/25" />

      {/* Progress Bar Indicator */}
      <div className="absolute top-0 left-0 w-full h-[4px] bg-white/10 z-30">
        <div 
          className="h-full bg-[#F15A24] transition-all duration-[6000ms] ease-linear origin-left"
          style={{ 
            width: isTransitioning ? '100%' : '100%', 
            transform: isTransitioning ? 'scaleX(0)' : 'scaleX(1)',
            transition: isTransitioning ? 'none' : 'transform 6s linear'
          }}
        />
      </div>

      {/* Custom Keyframe Animations */}
      <style dangerouslySetInnerHTML={{__html: `
        .slide-up-anim {
          animation: slideUpFade 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
          transform: translateY(24px);
        }
        @keyframes slideUpFade {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}} />

      {/* Hero Content Container */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center h-full">

        {/* Left Column (7 cols): Text & Controls */}
        <div className="col-span-1 lg:col-span-7 flex flex-col justify-center items-start">
          
          {/* Keyed container to restart animations on slide change */}
          <div key={`content-${currentSlide}`} className="w-full">
            
            {/* Eyebrow */}
            <div className="slide-up-anim [animation-delay:100ms]">
              <div className="inline-flex items-center gap-2 border border-white/20 px-3.5 py-1.5 bg-black/40 backdrop-blur-md rounded-full mb-5 md:mb-7 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-[#F15A24] animate-pulse" />
                <span className="font-eyebrow text-[10px] sm:text-[11px] text-white tracking-[0.25em] uppercase font-bold">
                  {slide.eyebrow}
                </span>
              </div>
            </div>

            {/* Display Heading */}
            <h1 className="slide-up-anim [animation-delay:250ms] font-display-lg text-4xl sm:text-5xl md:text-6xl text-white max-w-2xl leading-[1.1] mb-5 md:mb-7 drop-shadow-xl">
              {slide.title} <br />
              <span className="text-[#D4A359] italic font-light">{slide.highlight}</span>
            </h1>

            {/* Description */}
            <p className="slide-up-anim [animation-delay:400ms] font-body-lg text-sm sm:text-base md:text-lg text-white/90 max-w-xl font-medium leading-relaxed drop-shadow-lg mb-8 md:mb-10">
              {slide.description}
            </p>

            {/* CTAs */}
            <div className="slide-up-anim [animation-delay:550ms] flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link
                to="/products"
                className="group flex items-center justify-center gap-2 px-8 py-4 sm:py-4.5 bg-[#F15A24] text-white font-eyebrow text-[12px] tracking-[0.15em] font-bold uppercase rounded-sm hover:bg-white hover:text-[#0B2B1B] hover:shadow-2xl hover:-translate-y-1 transition-all duration-400 ease-out w-full sm:w-auto"
              >
                <span>Explore Products</span>
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <a
                href="#catalog-cta"
                className="group flex items-center justify-center gap-2 px-8 py-4 sm:py-4.5 bg-black/20 backdrop-blur-md border border-white/30 text-white font-eyebrow text-[12px] tracking-[0.15em] font-bold uppercase rounded-sm hover:bg-white hover:text-[#0B2B1B] hover:shadow-xl hover:-translate-y-1 transition-all duration-400 ease-out w-full sm:w-auto"
              >
                <Download size={16} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
                <span>Download Catalog</span>
              </a>
            </div>
          </div>

          {/* Slider Pagination & Controls */}
          <div className="mt-12 md:mt-16 flex flex-wrap items-center gap-6 slide-up-anim [animation-delay:700ms]">
            
            <div className="flex items-center gap-2">
              <button onClick={handlePrevSlide} className="w-11 h-11 flex items-center justify-center rounded-full border border-white/20 text-white hover:bg-white hover:text-[#0B2B1B] transition-colors backdrop-blur-md shadow-lg group">
                <ChevronLeft size={20} className="group-hover:-translate-x-0.5 transition-transform" />
              </button>
              <button onClick={handleNextSlide} className="w-11 h-11 flex items-center justify-center rounded-full border border-white/20 text-white hover:bg-white hover:text-[#0B2B1B] transition-colors backdrop-blur-md shadow-lg group">
                <ChevronRight size={20} className="group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
            
            <div className="font-eyebrow text-[11px] tracking-widest text-white/50">
              <span className="text-white font-bold">{String(currentSlide + 1).padStart(2, '0')}</span> / {String(heroSlides.length).padStart(2, '0')}
            </div>
            
            <div className="flex items-center gap-2.5">
              {heroSlides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-500 ${idx === currentSlide ? 'bg-[#F15A24] scale-150' : 'bg-white/30 hover:bg-white/70'}`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

        </div>

        {/* Right Column (5 cols): Request Estimate Form */}
        <div className="col-span-1 lg:col-span-5 relative z-20 mt-8 lg:mt-0">
          <div className="slide-up-anim [animation-delay:600ms]">
            <div className="shadow-2xl shadow-black/40 rounded-2xl overflow-hidden border border-white/10">
              <RequestEstimateForm />
            </div>
          </div>
        </div>

      </div>
    </header>
  );
}