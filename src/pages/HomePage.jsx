import React from 'react';
import Hero from '../components/ui/Hero';
import AboutStrip from '../components/ui/AboutStrip';
import PortfolioShowcase from '../components/ui/PortfolioShowcase';
import QualityBand from '../components/ui/QualityBand';
import ExportTimeline from '../components/ui/ExportTimeline';
import ContactSection from '../components/ui/ContactSection';

export default function HomePage() {
  return (
    <main className="bg-background text-on-background font-body-md text-body-md antialiased">
      {/* 1 · Hero Section */}
      <Hero />

      {/* 2 · About Strip */}
      <AboutStrip />

      {/* 3 · Product Categories Editorial Showcase (Curated Ingredients) */}
      <PortfolioShowcase />

      {/* 4 · Quality Band (#012112 Uncompromising Global Standards) */}
      <QualityBand />

      {/* 5 · Export Process Timeline (The Journey to You) */}
      <ExportTimeline />

      {/* 6 · Quote Form & Contact */}
      <ContactSection />
    </main>
  );
}
