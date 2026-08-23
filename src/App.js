import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './index.css';
import Navbar from './components/ui/Navbar';
import Footer from './components/ui/Footer';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CatalogPage from './pages/CatalogPage';
import CertificatesPage from './pages/CertificatesPage';
import PaymentTermsPage from './pages/PaymentTermsPage';
import ContactPage from './pages/ContactPage';

// Scroll To Top on Route Change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const handleOpenQuoteModal = () => {
    const quoteElement = document.getElementById('quote-form');
    if (quoteElement) {
      quoteElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/contact';
    }
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="bg-background text-on-background min-h-screen flex flex-col font-body-md">
        
        {/* Top Navbar */}
        <Navbar onOpenQuoteModal={handleOpenQuoteModal} />

        {/* Page Content Routes */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:slug" element={<ProductDetailPage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/certificates" element={<CertificatesPage />} />
            <Route path="/payment-terms" element={<PaymentTermsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;