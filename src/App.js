import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import { DesignTokens } from './components/ui/Navbar';
import Navbar from './components/ui/Navbar';
import Footer from './components/ui/Footer';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import CertificatesPage from './pages/CertificatesPage';
import PaymentTermsPage from './pages/PaymentTermsPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <div style={{ background: '#FFFFFF', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <DesignTokens />

        {/* Navigation bar */}
        <Navbar />

        {/* Page Content Routes */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/products" element={<ProductsPage />} />
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