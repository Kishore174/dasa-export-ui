import React from "react";
import { Maximize2, Grid, ZoomIn, ZoomOut, Share2, MoreHorizontal } from "lucide-react";

const certificatesData = [
  {
    id: "gst",
    image: "/certificates/iso.jpg",
    title: "GST Certificate",
    subtitle: "Goods and Services Tax Registration",
    pages: "1/3",
  },
  {
    id: "msme",
    image: "/certificates/fssai.jpg",
    title: "MSME Certificate",
    subtitle: "Udyam Registration Certificate",
    pages: "1/3",
  },
  {
    id: "bank",
    image: "/certificates/apeda.jpg",
    title: "Bank Certificate",
    subtitle: "Commercial Banking & Export Account Verification",
    pages: "1/1",
  },
  {
    id: "iec",
    image: "/certificates/haccp.jpg",
    title: "IEC Certificate",
    subtitle: "Import Export Code Registration",
    pages: "1/2",
  },
  {
    id: "fssai",
    image: "/certificates/organic.jpg",
    title: "FSSAI License",
    subtitle: "Food Safety and Standards Authority of India",
    pages: "1/1",
  },
  {
    id: "apeda",
    image: "/certificates/apeda.jpg",
    title: "APEDA Certificate",
    subtitle: "Agricultural & Processed Food Products Export Development Authority",
    pages: "1/2",
  },
];

const CertificatesPage = () => {
  return (
    <div className="font-body bg-white min-h-screen text-[#0B2B1B] pt-12 pb-24">

      {/* Header Section — Neat & Clean */}
      <section className="text-center max-w-xl mx-auto mb-12 px-margin-mobile">
        
        {/* Brand Pill */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FAF8F2] border border-slate-200 text-[11px] text-[#0B2B1B] font-bold rounded-full mb-3 shadow-2xs">
          <span className="w-1.5 h-1.5 rounded-full bg-[#F15A24]" />
          <span>Dasa Export</span>
        </div>

        {/* Title matching reference screenshot */}
        <h1 className="font-headline-md font-serif text-2xl md:text-3xl font-bold uppercase tracking-widest text-[#0B2B1B]">
          OUR CERTIFICATE
        </h1>
      </section>

      {/* Neat PDF Document Cards Grid */}
      <section className="max-w-[1200px] mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10 items-start">
          {certificatesData.map((cert) => (
            <div
              key={cert.id}
              className="flex flex-col items-center group"
            >
              {/* Dark Grey Document Frame Container */}
              <div className="w-full bg-[#555555] p-2.5 rounded-sm shadow-md group-hover:bg-[#333333] transition-colors duration-200">
                
                {/* White A4 Document Viewer Sheet */}
                <div className="bg-white aspect-[1/1.3] w-full p-2.5 overflow-hidden flex items-center justify-center relative shadow-inner">
                  <img
                    src={cert.image}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80";
                    }}
                    alt={cert.title}
                    className="w-full h-full object-contain object-top shadow-2xs"
                  />
                </div>

                {/* PDF Viewer Bottom Toolbar inside Frame */}
                <div className="bg-[#444444] text-white/80 py-1.5 px-3 flex items-center justify-between text-[11px] font-mono border-t border-[#666666] select-none">
                  <span>{cert.pages}</span>
                  <div className="flex items-center gap-2.5 text-white/70">
                    <Grid size={13} className="hover:text-white cursor-pointer" />
                    <ZoomIn size={13} className="hover:text-white cursor-pointer" />
                    <ZoomOut size={13} className="hover:text-white cursor-pointer" />
                    <Maximize2 size={13} className="hover:text-white cursor-pointer" />
                    <Share2 size={13} className="hover:text-white cursor-pointer" />
                    <MoreHorizontal size={13} className="hover:text-white cursor-pointer" />
                  </div>
                </div>

              </div>

              {/* Title Centered Under Document Frame */}
              <h3 className="font-display-lg text-base md:text-lg font-serif font-bold text-[#0B2B1B] text-center mt-3.5 group-hover:text-[#F15A24] transition-colors">
                {cert.title}
              </h3>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default CertificatesPage;