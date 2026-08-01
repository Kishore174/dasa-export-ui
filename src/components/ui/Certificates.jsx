import React from "react";
import { ShieldCheck } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const certificates = [
  { title: "ISO 22000", code: "CERT · ISO-22000", image: "/certificates/iso.jpg", accent: "#1D3624" },
  { title: "APEDA", code: "CERT · APEDA-IN", image: "/certificates/apeda.jpg", accent: "#C43E2A" },
  { title: "FSSAI", code: "CERT · FSSAI-14", image: "/certificates/fssai.jpg", accent: "#E3A62F" },
  { title: "HACCP", code: "CERT · HACCP-07", image: "/certificates/haccp.jpg", accent: "#8FAE6B" },
  { title: "Organic Certificate", code: "CERT · ORG-IN", image: "/certificates/organic.jpg", accent: "#9A3020" },
];

const summary = [
  { code: "ISO", label: "Certified quality", accent: "#1D3624" },
  { code: "APEDA", label: "Export approved", accent: "#C43E2A" },
  { code: "FSSAI", label: "Food safety", accent: "#E3A62F" },
  { code: "HACCP", label: "Global standards", accent: "#8FAE6B" },
];

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="relative py-28 font-body overflow-hidden"
      style={{ background: "linear-gradient(to bottom, #FFFFFF, var(--cream, #F6EFDE), #FFFFFF)" }}
    >
      {/* Pagination bullets recolored to the brand palette */}
      <style>{`
        .certs-swiper .swiper-pagination-bullet {
          background: rgba(13,24,16,0.25);
          opacity: 1;
        }
        .certs-swiper .swiper-pagination-bullet-active {
          background: var(--tomato, #C43E2A);
        }
        .certs-swiper .swiper-pagination {
          position: relative;
          margin-top: 2.5rem;
        }
      `}</style>

      {/* Background glow + grain, consistent with the rest of the site */}
      <div className="absolute -left-32 top-0 w-96 h-96 rounded-full blur-[150px] opacity-20 pointer-events-none" style={{ background: "var(--turmeric, #E3A62F)" }} />
      <div className="absolute -right-32 bottom-0 w-96 h-96 rounded-full blur-[150px] opacity-20 pointer-events-none" style={{ background: "var(--tomato, #C43E2A)" }} />
      <div className="absolute inset-0 opacity-[0.035] grain-overlay pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span
            className="font-mono inline-flex items-center gap-2 px-4 py-2 rounded-full border text-[11px] uppercase tracking-[3px]"
            style={{ borderColor: "rgba(13,24,16,0.15)", color: "var(--tomato-dark, #9A3020)" }}
          >
            Verified &amp; Certified
          </span>

          <h2
            className="font-display text-4xl lg:text-5xl font-semibold mt-6"
            style={{ color: "var(--ink, #0D1810)" }}
          >
            Our certifications
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            We follow internationally recognized quality standards to ensure
            every product meets export requirements with safety,
            consistency, and excellence.
          </p>
        </div>

        {/* Slider */}
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          coverflowEffect={{ rotate: 20, stretch: 0, depth: 250, modifier: 1, slideShadows: false, scale: 0.9 }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="certs-swiper mySwiper !pb-2"
        >
          {certificates.map((item) => (
            <SwiperSlide key={item.title} style={{ width: "360px" }}>
              <div
                className="bg-white rounded-[28px] border p-3 shadow-lg transition-transform duration-500 hover:-translate-y-2"
                style={{ borderColor: "rgba(13,24,16,0.08)" }}
              >
                {/* Framed like an actual certificate, not a bare photo */}
                <div
                  className="relative h-[440px] overflow-hidden rounded-[20px] border-2 border-dashed"
                  style={{ borderColor: `${item.accent}55` }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />

                  {/* Certificate reference, top-left of the frame */}
                  <span
                    className="absolute top-4 left-4 font-mono text-[10px] uppercase tracking-wider px-3 py-1.5 rounded-full border backdrop-blur-md shadow-sm"
                    style={{
                      borderColor: `${item.accent}55`,
                      color: item.accent,
                      background: "rgba(255,255,255,0.9)",
                    }}
                  >
                    {item.code}
                  </span>

                  {/* Verified seal, bottom-right, matching the stamp motif used elsewhere on the site */}
                  <div
                    className="absolute -bottom-2 -right-2 h-16 w-16 rounded-full bg-white border-2 border-dashed flex flex-col items-center justify-center text-center shadow-md"
                    style={{ borderColor: item.accent, transform: "rotate(8deg)" }}
                  >
                    <ShieldCheck size={16} style={{ color: item.accent }} />
                    <p
                      className="font-mono text-[6px] uppercase tracking-wider mt-0.5 leading-tight"
                      style={{ color: item.accent }}
                    >
                      Verified
                    </p>
                  </div>
                </div>

                <div className="px-4 pb-3 pt-5">
                  <h3
                    className="font-display text-xl font-semibold text-center"
                    style={{ color: "var(--ink, #0D1810)" }}
                  >
                    {item.title}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Bottom summary — quick-reference stamp badges */}
        <div className="grid md:grid-cols-4 gap-6 mt-4">
          {summary.map((item) => (
            <div
              key={item.code}
              className="bg-white rounded-[24px] border p-8 text-center transition-all duration-300 hover:-translate-y-1 shadow-sm"
              style={{ borderColor: "rgba(13,24,16,0.08)" }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = `0 20px 40px -18px ${item.accent}45`)}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
            >
              <div
                className="mx-auto w-16 h-16 rounded-full border-2 border-dashed flex items-center justify-center font-mono text-[11px] font-medium tracking-wide shadow-sm"
                style={{ borderColor: item.accent, color: item.accent }}
              >
                {item.code}
              </div>
              <p className="mt-5 text-gray-600 text-sm font-medium">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}