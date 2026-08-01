import './index.css';
import Navbar         from './components/ui/Navbar';
import Hero           from './components/ui/Hero';
import WhyChoose      from './components/ui/WhyChoose';
import Products       from './components/ui/Products';
import ExportProcess  from './components/ui/ExportProcess';
import Certificates   from './components/ui/Certificates';
import PaymentTerms   from './components/ui/PaymentTerms';
import Testimonials   from './components/ui/Testimonials';
import ContactSection from './components/ui/ContactSection';
import Footer         from './components/ui/Footer';

function App() {
  return (
    <div>
      {/* Fixed navigation */}
      <Navbar />

      {/* 1 · Hero — above the fold, dark bg */}
      <main>
        <Hero />

        {/* 2 · Why Choose Us (About Us) — cream bg */}
        <WhyChoose />

        {/* 3 · Products catalog — cream bg with dot grid */}
        <Products />

        {/* 4 · Export Process — cream → white gradient */}
        <ExportProcess />

        {/* 5 · Certificates — white bg with light glow */}
        <Certificates />

        {/* 6 · Commercial Payment Terms — cream/white bg */}
        <PaymentTerms />

        {/* 7 · Testimonials — dark bg, global buyer reviews */}
        <Testimonials />

        {/* 8 · Contact & Inquiries — cream bg, form & offices */}
        <ContactSection />
      </main>

      {/* 9 · Footer — dark bg, closes the page */}
      <Footer />
    </div>
  );
}

export default App;
