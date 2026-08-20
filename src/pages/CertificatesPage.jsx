import React, { useState } from "react";
import { ExternalLink, X, Award } from "lucide-react";
import { Link } from "react-router-dom";

const certificatesList = [
  { id: "iso", image: "/certificates/iso.jpg", name: "ISO 22000 Certificate Scan" },
  { id: "fssai", image: "/certificates/fssai.jpg", name: "FSSAI License Scan" },
  { id: "apeda", image: "/certificates/apeda.jpg", name: "APEDA Registration Scan" },
  { id: "organic", image: "/certificates/organic.jpg", name: "Organic NPOP Certificate Scan" },
  { id: "haccp", image: "/certificates/haccp.jpg", name: "HACCP Certificate Scan" },
  { id: "phytosanitary", image: "/certificates/phytosanitary.jpg", name: "Phytosanitary Certificate Scan" },
];

const CertificatesPage = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <div className="pt-[72px] font-body bg-white min-h-screen">
      {/* Neat Clean Header Banner */}
      <section className="relative py-20 bg-[#0A1A0F] text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/certificates-hero-bg.jpg"
            alt="Certificates"
            className="w-full h-full object-cover object-center"
            style={{ filter: "brightness(0.65) contrast(1.1)" }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(10,26,15,0.92) 0%, rgba(10,26,15,0.85) 100%)",
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 text-center max-w-3xl">
          <span className="font-mono inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[rgba(201,168,76,0.3)] bg-[rgba(201,168,76,0.08)] text-[10.5px] uppercase tracking-[2.5px] text-[var(--gold)] mb-4">
            <Award size={13} />
            Statutory Certifications
          </span>

          <h1 className="font-display text-4xl lg:text-5xl font-semibold tracking-tight">
            Official Certificates
          </h1>

          <p className="mt-4 text-base leading-8 text-[rgba(255,255,255,0.75)]">
            Click any certificate scan below to view the full high-resolution document.
          </p>
        </div>
      </section>

      {/* Pure Certificate Image Gallery Grid — No Extra Text */}
      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificatesList.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              className="group rounded-3xl border border-gray-100 bg-white p-4 transition-all duration-300 hover:shadow-2xl hover:border-gray-300 cursor-pointer overflow-hidden relative"
            >
              {/* Certificate Scan Image Only */}
              <div className="h-80 w-full rounded-2xl bg-gray-50 flex items-center justify-center p-3 overflow-hidden relative">
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                />

                {/* Subtle Hover Inspection Badge */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-mono text-xs uppercase tracking-wider gap-2 font-medium">
                  <ExternalLink size={16} /> View Full Certificate
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Clean Fullscreen Image Viewer Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="bg-white rounded-3xl max-w-3xl w-full p-6 relative border border-gray-100 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col items-center">
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-5 right-5 p-2.5 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors z-10"
            >
              <X size={20} />
            </button>

            <div className="w-full h-full flex items-center justify-center bg-gray-50 rounded-2xl p-4 overflow-hidden my-4">
              <img
                src={selectedCert.image}
                alt={selectedCert.name}
                className="max-h-[70vh] w-auto object-contain rounded-lg shadow-md"
              />
            </div>

            <div className="w-full flex items-center justify-between pt-2">
              <span className="text-xs font-mono text-gray-500 font-semibold">{selectedCert.name}</span>
              <Link
                to="/contact"
                onClick={() => setSelectedCert(null)}
                className="px-6 py-2.5 rounded-xl bg-[var(--ink)] text-white font-medium text-xs uppercase tracking-wider hover:bg-black transition-colors"
              >
                Request Verification
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CertificatesPage;
