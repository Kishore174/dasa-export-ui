import React, { useState, useEffect } from "react";
import { X, ArrowRight, ShieldCheck, FileCheck2, CheckCircle2, Building2, Download } from "lucide-react";
import RevealOnScroll from "../components/ui/RevealOnScroll";

const certificatesData = [
  {
    id: "gst",
    image: "/certificates/real-gst-1.png",
    pdfUrl: "/certificates/gst-certificate.pdf",
    title: "GST Registration Certificate",
    badge: "REGISTRATION NO: 33BYUPD2670Q2ZR",
    subtitle: "Form GST REG-06 Goods and Services Tax Taxpayer Registration",
    issuer: "Government of India — Goods and Services Tax Network",
    entity: "DASA EXPORTS & IMPORTS (Legal Name: DASARATHAN N)",
    kindOfBusiness: "Proprietorship — Export & Import Operations",
    validity: "Date of Issue: 26/06/2026",
    address: "18/2A, Bangalore Road, Konavattam, Vellore, Tamil Nadu - 632013",
    pages: "3 Pages PDF",
  },
  {
    id: "fssai",
    image: "/certificates/real-fssai-1.png",
    pdfUrl: "/certificates/fssai-certificate.pdf",
    title: "FSSAI Food Safety License",
    badge: "LICENSE NO: 12426998000511",
    subtitle: "Food Safety and Standards Authority of India (Central License)",
    issuer: "Government of India — Ministry of Health & Family Welfare",
    entity: "DASA EXPORTS & IMPORTS (Prop: DASARATHAN N)",
    kindOfBusiness: "Trade/Retail - Trader/Merchant - Exporter",
    validity: "Issued: 07-08-2026 | Valid: 06-08-2027",
    address: "18/2A, Bangalore Road, Konavattam, Vellore, Tamil Nadu - 632013",
    pages: "7 Pages PDF",
  },
  {
    id: "dasa-cert",
    image: "/certificates/real-dasa-cert-1.png",
    pdfUrl: "/certificates/dasa-export-certificate.pdf",
    title: "DASA Export & Import Registration",
    badge: "EXPORTER REGISTRATION CERTIFICATE",
    subtitle: "Official Registration & Trade Certificate for Agricultural Food Export",
    issuer: "Directorate General of Foreign Trade & Export Authority",
    entity: "DASA EXPORTS & IMPORTS",
    kindOfBusiness: "Agricultural Food Powders, Spices & Leaf Powders Export",
    validity: "Active Export License",
    address: "18/2A, Bangalore Road, Konavattam, Vellore, Tamil Nadu - 632013",
    pages: "Official PDF Document",
  },
];

export default function CertificatesPage() {
  const [selectedCert, setSelectedCert] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-body bg-background min-h-screen text-[#172019] pb-12 md:pb-16">
      
      {/* CERTIFICATES HERO */}
      <section className="relative w-full min-h-[50vh] flex flex-col justify-center overflow-hidden bg-[#0B2B1B] py-12 md:py-16">
        {/* Premium Photographic Background Image with Smart Cinematic Overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none">
           <img src="/certificates/hero-bg-2.jpg" className="w-full h-full object-cover object-center" alt="Certificates Background" />
           {/* Smart radial gradient to make centered text readable while keeping image edges bright and clear */}
           <div 
             className="absolute inset-0" 
             style={{ background: "radial-gradient(circle at center, rgba(11,43,27,0.9) 0%, rgba(11,43,27,0.6) 50%, rgba(11,43,27,0.4) 100%)" }}
           />
        </div>
        
        <div className="max-w-[1440px] w-full mx-auto px-margin-mobile md:px-margin-desktop relative z-10 text-center mt-10">
          <RevealOnScroll delay={0}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/20 text-[11px] text-white font-bold rounded-full mb-6 tracking-[0.2em] uppercase shadow-md backdrop-blur-md">
              <ShieldCheck size={14} className="text-white" />
              GOVERNMENT REGISTERED &amp; STATUTORY COMPLIANT EXPORTER
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={100}>
            <h1 className="font-display-lg text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-white mb-6 tracking-tight drop-shadow-xl">
              Official Statutory <br/> Certifications
            </h1>
          </RevealOnScroll>
          <RevealOnScroll delay={200}>
            <p className="font-body-lg text-base md:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
              DASA EXPORTS &amp; IMPORTS operates under strict statutory mandates from the Government of India, FSSAI Central Licensing, and APEDA agricultural export protocols.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Official Certificates Grid — Exactly the 3 Uploaded Asset PDFs */}
      <section className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop pt-12 md:pt-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {certificatesData.map((cert, idx) => (
            <RevealOnScroll key={cert.id} delay={idx * 100}>
              <div 
                className="group relative flex flex-col bg-white rounded-2xl border border-slate-200/80 shadow-md hover:shadow-2xl transition-all duration-400 ease-out hover:-translate-y-1.5 cursor-pointer overflow-hidden h-full"
                onClick={() => setSelectedCert(cert)}
              >
                
                {/* Registration Number Top Pill */}
                <div className="bg-[#0B2B1B] text-white px-5 py-3.5 flex items-center justify-between border-b border-white/10">
                  <span className="font-mono text-[10.5px] tracking-wider text-[#F4A62A] font-bold uppercase truncate">
                    {cert.badge}
                  </span>
                  <span className="font-mono text-[10px] text-white/50 shrink-0">
                    {cert.pages}
                  </span>
                </div>

                {/* Document Viewer Frame */}
                <div className="w-full aspect-[1/1.35] bg-[#444444] overflow-hidden p-3.5 sm:p-4 relative flex items-center justify-center border-b border-slate-200">
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
                    <span className="inline-flex items-center gap-2 bg-white text-[#0B2B1B] px-6 py-3 rounded-full font-eyebrow font-bold text-xs uppercase tracking-wider shadow-2xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      View Official Document <ArrowRight size={15} className="text-[#F15A24]" />
                    </span>
                  </div>
                  
                  {/* A4 Sheet Preview */}
                  <div className="w-full h-full bg-white shadow-2xl rounded-xs p-1 overflow-hidden flex items-center justify-center border border-white/30">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-contain object-top transition-transform duration-500 group-hover:scale-102"
                    />
                  </div>
                </div>

                {/* Card Information */}
                <div className="p-6 bg-white flex flex-col justify-between flex-grow space-y-4">
                  <div>
                    <h3 className="font-serif font-bold text-xl text-[#0B2B1B] group-hover:text-[#F15A24] transition-colors leading-snug">
                      {cert.title}
                    </h3>
                    <p className="font-body-md text-xs text-[#5A4139] mt-1.5 font-medium leading-relaxed">
                      {cert.subtitle}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-eyebrow font-bold text-[#2E7D32]">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 size={14} className="text-[#2E7D32]" /> STATUTORY VALIDATED
                    </span>
                    <span className="text-[#F15A24] font-semibold group-hover:underline">
                      Inspect &rarr;
                    </span>
                  </div>
                </div>

              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* Corporate Statutory Verification Footer */}
      <section className="max-w-[1100px] mx-auto px-margin-mobile mt-20">
        <RevealOnScroll>
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-eyebrow uppercase font-bold text-[#F15A24] tracking-wider">
                <Building2 size={16} /> REGISTERED PROPRIETORSHIP EXPORTER
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B2B1B]">
                Official Business Registration &amp; Trade Address
              </h2>
              <p className="text-sm text-[#5A4139] leading-relaxed">
                <strong>Legal Name:</strong> DASARATHAN N &nbsp;|&nbsp; <strong>Trade Name:</strong> DASA EXPORTS &amp; IMPORTS <br />
                <strong>Principal Address:</strong> 18/2A, BANGALORE ROAD, KONAVATTAM, Vellore, Tamil Nadu, PIN: 632013, India. <br />
                <strong>GSTIN:</strong> 33BYUPD2670Q2ZR &nbsp;|&nbsp; <strong>FSSAI Central License:</strong> 12426998000511
              </p>
            </div>
            
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <a
                href="mailto:contact@dasaexports.com?subject=Verification%20Request%20for%20Dasa%20Exports%20Certificates"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#0B2B1B] text-white font-eyebrow text-xs uppercase tracking-wider font-bold rounded-xl hover:bg-[#F15A24] transition-colors shadow-md text-center"
              >
                <FileCheck2 size={16} /> Request Verified Copies
              </a>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* High-Resolution Document Lightbox Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity" onClick={() => setSelectedCert(null)} />
          
          <div className="relative z-10 w-full max-w-4xl max-h-[92vh] bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col border border-slate-200 animate-slideUp">
            
            {/* Modal Header */}
            <div className="flex justify-between items-center px-6 py-4 bg-[#0B2B1B] text-white border-b border-white/10 shrink-0">
              <div className="space-y-0.5">
                <span className="inline-block px-2.5 py-0.5 bg-[#F4A62A] text-[#0B2B1B] font-mono text-[10px] font-bold rounded uppercase tracking-wider mr-2">
                  {selectedCert.badge}
                </span>
                <h3 className="font-serif text-lg font-bold text-white inline-block">{selectedCert.title}</h3>
                <p className="text-xs text-white/75 font-normal">{selectedCert.issuer} &bull; {selectedCert.validity}</p>
              </div>
              
              <button 
                onClick={() => setSelectedCert(null)}
                className="p-2 bg-white/10 hover:bg-white hover:text-[#0B2B1B] rounded-full transition-colors text-white shrink-0 cursor-pointer"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>
            
            {/* Document Viewer Body */}
            <div className="flex-grow p-4 sm:p-6 bg-[#333333] flex items-center justify-center overflow-auto min-h-[50vh] max-h-[75vh]">
              <img 
                src={selectedCert.image} 
                alt={selectedCert.title} 
                className="max-h-full max-w-full object-contain shadow-2xl rounded-xs border border-white/20 bg-white"
              />
            </div>

            {/* Modal Footer Bar */}
            <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between text-xs text-[#5A4139] gap-3 shrink-0">
              <div>
                <strong>Issued To:</strong> {selectedCert.entity} &bull; <strong>Address:</strong> {selectedCert.address}
              </div>
              
              <div className="flex items-center gap-3">
                <a
                  href={selectedCert.pdfUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#F15A24] text-white font-eyebrow text-xs uppercase tracking-wider font-bold rounded-lg hover:bg-[#0B2B1B] transition-colors"
                >
                  <Download size={14} /> Open Full PDF
                </a>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="px-4 py-2 bg-slate-200 text-[#172019] font-eyebrow text-xs uppercase tracking-wider font-bold rounded-lg hover:bg-slate-300 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
