import React from "react";
import Hero from "../components/ui/Hero";
import WhyChoose from "../components/ui/WhyChoose";
import Products from "../components/ui/Products";
import ExportProcess from "../components/ui/ExportProcess";
// import Certificates from "../components/ui/Certificates";
import Testimonials from "../components/ui/Testimonials";
import ContactSection from "../components/ui/ContactSection";

const HomePage = () => {
  return (
    <>
      {/* 1 · Hero section */}
      <Hero />

      {/* 2 · Why Choose Us (About Summary) */}
      <WhyChoose />

      {/* 3 · Products Catalog */}
      <Products />

      {/* 4 · 5-Stage Export Pipeline */}
      <ExportProcess />

      {/* 5 · Certifications */}
      {/* <Certificates /> */}

      {/* 6 · Global Testimonials */}
      <Testimonials />

      {/* 7 · Contact & Inquiries */}
      <ContactSection />
    </>
  );
};

export default HomePage;
