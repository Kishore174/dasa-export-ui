import React, { useState, useEffect } from "react";
import { Maximize2, X, ArrowRight, ArrowLeft } from "lucide-react";
import RevealOnScroll from "../components/ui/RevealOnScroll";

const certificatesData = [
  { id: "iso", image: "/certificates/iso.jpg", title: "ISO 9001:2015", subtitle: "Global Quality Management", pages: "1/3" },
  { id: "fssai", image: "/certificates/fssai.jpg", title: "FSSAI License", subtitle: "Food Safety Authority of India", pages: "1/1" },
  { id: "apeda", image: "/certificates/apeda.jpg", title: "APEDA Certified", subtitle: "Agricultural Export Authority", pages: "1/2" },
  { id: "haccp", image: "/certificates/haccp.jpg", title: "HACCP Compliant", subtitle: "Hazard Control System", pages: "1/2" },
  { id: "organic", image: "/certificates/organic.jpg", title: "Organic Certified", subtitle: "NPOP Organic Certification", pages: "1/1" },
];

export default function CertificatesPage() {
  const [selectedCert, setSelectedCert] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-body bg-background min-h-screen text-on-background pb-24">
      {/* Hero Section */}
      <section className="text-center max-w-3xl mx-auto mb-20 px-margin-mobile pt-10">
        <RevealOnScroll>
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-primary/10 border border-primary/20 text-[11px] text-primary font-bold rounded-full mb-6 tracking-widest uppercase shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Dasa Exports
          </div>
        </RevealOnScroll>
        <RevealOnScroll delay={100}>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-on-surface mb-6">
            Our Certifications
          </h1>
        </RevealOnScroll>
        <RevealOnScroll delay={200}>
          <p className="font-body-lg text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Our certifications reflect our commitment to quality, safety and international standards. We maintain rigorous compliance for global export.
          </p>
        </RevealOnScroll>
      </section>

      {/* Grid Section */}
      <section className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {certificatesData.map((cert, idx) => (
            <RevealOnScroll key={cert.id} delay={(idx % 3) * 100}>
              <div 
                className="group relative flex flex-col bg-surface rounded-2xl border border-outline/10 shadow-sm hover:shadow-xl transition-all duration-500 ease-out hover:-translate-y-2 cursor-pointer overflow-hidden"
                onClick={() => setSelectedCert(cert)}
              >
                {/* Image Container */}
                <div className="w-full aspect-[4/5] bg-surface-container-low overflow-hidden p-6 relative flex items-center justify-center border-b border-outline/5">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  
                  <img
                    src={cert.image}
                    alt={cert.title}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80";
                    }}
                    className="max-h-full max-w-full object-contain shadow-md border border-outline/10 transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  
                  {/* Action Button */}
                  <div className="absolute bottom-6 left-0 w-full flex justify-center z-20 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400 ease-out delay-75">
                    <span className="inline-flex items-center gap-2 bg-white text-on-surface px-6 py-3 rounded-full font-label font-semibold text-sm shadow-lg group/btn">
                      View Certificate <ArrowRight size={16} className="text-primary transition-transform group-hover/btn:translate-x-1" />
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 text-center bg-white flex flex-col justify-center flex-grow">
                  <h3 className="font-display text-xl md:text-2xl font-bold text-on-surface mb-2 group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  <p className="font-body-md text-sm text-on-surface-variant font-medium">
                    {cert.subtitle}
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* Quality Section */}
      <section className="max-w-[1000px] mx-auto px-margin-mobile mt-24 text-center">
        <RevealOnScroll>
          <div className="bg-surface-container-low rounded-3xl p-10 md:p-16 border border-outline/10 hover:border-outline/20 transition-colors duration-500 hover:shadow-lg">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-on-surface mb-4">
              Committed to Quality
            </h2>
            <p className="font-body-md text-on-surface-variant text-lg">
              Our certifications demonstrate our commitment to maintaining consistent quality and meeting international standards. We strictly adhere to global export regulations to ensure product safety and integrity.
            </p>
          </div>
        </RevealOnScroll>
      </section>

      {/* Lightbox / Preview */}
      {selectedCert && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10 animate-fade-in">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-sm transition-opacity" onClick={() => setSelectedCert(null)} />
          
          <div className="relative z-10 w-full max-w-4xl max-h-[90vh] h-auto bg-surface rounded-2xl overflow-hidden shadow-2xl flex flex-col animate-scale-in">
            <div className="flex justify-between items-center p-4 md:p-5 border-b border-outline/10 bg-white shrink-0">
              <div>
                <h3 className="font-display text-xl font-bold text-on-surface">{selectedCert.title}</h3>
                <p className="text-sm text-on-surface-variant font-medium">{selectedCert.subtitle}</p>
              </div>
              <button 
                onClick={() => setSelectedCert(null)}
                className="p-2.5 bg-surface-container hover:bg-surface-container-high rounded-full transition-colors text-on-surface shrink-0"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="flex-grow p-4 sm:p-6 bg-surface-container-low flex items-center justify-center min-h-[40vh] md:min-h-[60vh] overflow-hidden relative">
              <img 
                src={selectedCert.image} 
                alt={selectedCert.title} 
                className="absolute inset-4 sm:inset-6 w-[calc(100%-2rem)] sm:w-[calc(100%-3rem)] h-[calc(100%-2rem)] sm:h-[calc(100%-3rem)] object-contain drop-shadow-xl"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}