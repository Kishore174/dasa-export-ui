import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RevealOnScroll from '../components/ui/RevealOnScroll';
import CatalogueProductCard from '../components/ui/CatalogueProductCard';
import { PRODUCTS, CATEGORIES } from '../data/productsData';
import { ArrowRight, CheckCircle2, Award, Truck, ShieldCheck, Globe } from 'lucide-react';

export default function CataloguePage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredProducts, setFilteredProducts] = useState(PRODUCTS);

  useEffect(() => {
    // Filter transition logic
    if (activeCategory === 'All') {
      setFilteredProducts(PRODUCTS);
    } else {
      setFilteredProducts(PRODUCTS.filter((p) => p.category === activeCategory || p.category.includes(activeCategory)));
    }
  }, [activeCategory]);

  const allCategories = ['All', ...new Set(PRODUCTS.map((p) => p.category))];

  return (
    <div className="bg-background min-h-screen">
      {/* CATALOGUE HERO */}
      <section className="relative w-full min-h-[50vh] flex flex-col justify-center overflow-hidden bg-black py-20 lg:py-32 border-b border-white/10">
        {/* Cinematic Background Image */}
        <div className="absolute inset-0 z-0 pointer-events-none">
           <img src="/products/catalog-banner.jpg" className="w-full h-full object-cover object-center opacity-85" alt="Catalogue Background" />
           <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 mix-blend-multiply" />
           <div className="absolute inset-0 bg-black/20" />
        </div>
        
        <div className="max-w-[1440px] w-full mx-auto px-margin-mobile md:px-margin-desktop relative z-10 text-center mt-10">
          <RevealOnScroll delay={0}>
            <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/10 border border-white/20 text-white font-eyebrow text-[11px] font-bold tracking-[0.25em] uppercase mb-6 shadow-sm backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Dasa Exports
            </span>
          </RevealOnScroll>
          <RevealOnScroll delay={100}>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 max-w-4xl mx-auto leading-tight drop-shadow-xl">
              Our Premium Export Catalogue
            </h1>
          </RevealOnScroll>
          <RevealOnScroll delay={200}>
            <p className="font-body-lg text-white/90 max-w-2xl mx-auto mb-10 text-lg drop-shadow-md">
              Explore our carefully selected range of premium-quality products prepared to meet international export standards.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={300}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={() => document.getElementById('catalogue-grid')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-eyebrow text-xs tracking-widest font-bold uppercase rounded-sm hover:bg-white hover:text-black transition-all duration-400 shadow-lg w-full sm:w-auto"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Explore Products
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </span>
              </button>
              <Link 
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-black/30 backdrop-blur-sm border border-white/30 text-white font-eyebrow text-xs tracking-widest font-bold uppercase rounded-sm hover:bg-white hover:text-black transition-all duration-400 shadow-lg w-full sm:w-auto"
              >
                Send Enquiry
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* CATEGORY FILTER */}
      <section className="py-8 md:py-12 border-b border-outline/10 sticky top-[72px] z-30 bg-white/90 backdrop-blur-md">
        <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="flex overflow-x-auto hide-scrollbar gap-2 md:gap-4 pb-2 md:pb-0 justify-start md:justify-center">
            {allCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-5 md:px-6 py-2.5 md:py-3 font-label text-sm md:text-base font-medium rounded-full transition-all duration-300 whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-secondary text-white shadow-md'
                    : 'bg-surface-container hover:bg-surface-container-high text-on-surface-variant'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      {activeCategory === 'All' && (
        <section className="py-20 lg:py-28 bg-surface">
          <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop">
            <RevealOnScroll>
              <div className="mb-12 md:mb-16">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-on-surface mb-4">
                  Featured Products
                </h2>
                <p className="font-body-md text-on-surface-variant max-w-2xl text-lg">
                  Discover some of our selected premium export products.
                </p>
              </div>
            </RevealOnScroll>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {PRODUCTS.slice(0, 3).map((product, index) => (
                <RevealOnScroll key={product.id} delay={index * 100}>
                  <CatalogueProductCard product={product} />
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ALL PRODUCTS GRID */}
      <section id="catalogue-grid" className={`py-20 lg:py-28 ${activeCategory === 'All' ? 'bg-surface-container-low' : 'bg-surface'}`}>
        <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop">
          <RevealOnScroll>
            <div className="mb-12 md:mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-on-surface mb-4">
                {activeCategory === 'All' ? 'Our Products' : `${activeCategory} Products`}
              </h2>
              <p className="font-body-md text-on-surface-variant max-w-2xl text-lg">
                Explore our complete range of quality products.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 min-h-[400px]">
            {filteredProducts.map((product, index) => (
              <RevealOnScroll key={`${activeCategory}-${product.id}`} delay={(index % 4) * 100}>
                <CatalogueProductCard product={product} />
              </RevealOnScroll>
            ))}
            
            {filteredProducts.length === 0 && (
              <div className="col-span-full py-20 text-center">
                <p className="text-on-surface-variant text-lg">No products found for this category.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE DASA EXPORTS */}
      <section className="py-20 lg:py-28 bg-white border-t border-outline/10">
        <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop">
          <RevealOnScroll>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-on-surface mb-4">
                Why Choose Dasa Exports?
              </h2>
              <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto text-lg">
                We are committed to delivering excellence across every stage of the export process.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: Award, title: 'Premium Quality', desc: 'Carefully sourced products meeting the highest standards.' },
              { icon: Globe, title: 'International Standards', desc: 'Fully compliant with global export regulations and requirements.' },
              { icon: ShieldCheck, title: 'Quality Assurance', desc: 'Rigorous testing and inspection before every shipment.' },
              { icon: Truck, title: 'Reliable Supply', desc: 'Consistent bulk supply chain with timely global delivery.' },
            ].map((feature, idx) => (
              <RevealOnScroll key={idx} delay={idx * 100}>
                <div className="p-8 rounded-2xl bg-surface-container-low border border-outline/5 hover:bg-surface-container transition-colors duration-300 text-center h-full">
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                    <feature.icon size={32} />
                  </div>
                  <h3 className="font-display text-xl font-bold text-on-surface mb-3">{feature.title}</h3>
                  <p className="font-body-md text-on-surface-variant text-sm">{feature.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* QUALITY / EXPORT STANDARDS SECTION */}
      <section className="py-20 lg:py-28 bg-secondary text-white relative overflow-hidden">
         {/* Background Image / Overlay */}
        <div className="absolute inset-0 z-0">
          <img src="/products/turmeric.jpg" alt="Quality Standards" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-secondary/80 mix-blend-multiply" />
        </div>
        
        <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <RevealOnScroll>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                <img src="/products/moringa.jpg" alt="Export Quality" className="w-full h-full object-cover" />
                <div className="absolute inset-0 border border-white/20 rounded-2xl" />
              </div>
            </RevealOnScroll>
            
            <RevealOnScroll delay={200}>
              <div>
                <span className="font-eyebrow text-sm uppercase tracking-widest text-primary-container font-bold block mb-4">
                  Export Quality
                </span>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                  Our Commitment to Quality
                </h2>
                <p className="font-body-lg text-white/80 mb-8 text-lg">
                  We focus on quality, consistency and reliable supply to deliver products that meet international expectations. Our integrated approach ensures pristine condition upon arrival.
                </p>
                
                <ul className="space-y-4 font-body-md text-white/90">
                  {[
                    'Quality-focused sourcing from certified farms',
                    'Consistent product standards and specifications',
                    'Reliable supply for bulk and continuous orders',
                    'Export-ready products with complete documentation'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 size={24} className="text-primary-container shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 lg:py-28 bg-surface-container text-center relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl opacity-5 pointer-events-none">
           <div className="absolute top-10 left-10 w-64 h-64 bg-primary rounded-full mix-blend-multiply filter blur-3xl"></div>
           <div className="absolute bottom-10 right-10 w-64 h-64 bg-secondary rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
          <RevealOnScroll>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-on-surface mb-6 max-w-3xl mx-auto leading-tight">
              Looking for Premium Export Products?
            </h2>
            <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto mb-10 text-lg">
              Get in touch with our team to discuss your product requirements, custom specifications, and bulk enquiries.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 px-10 py-4 bg-primary text-white font-label font-semibold rounded-lg hover:bg-on-surface transition-all duration-300 shadow-lg w-full sm:w-auto"
              >
                Send Enquiry
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link 
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-white border border-outline/20 text-on-surface font-label font-semibold rounded-lg hover:bg-surface-container-low transition-all duration-300 shadow-sm w-full sm:w-auto"
              >
                Contact Us
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
}
