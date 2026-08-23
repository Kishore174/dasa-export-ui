import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../data/productsData';
import ContactSection from '../components/ui/ContactSection';

export default function ProductDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const product = PRODUCTS.find((p) => (p.slug || p.id) === slug) || PRODUCTS[0];

  return (
    <div className="pt-24 pb-section-gap bg-background min-h-screen">
      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop space-y-12">
        
        {/* Back link */}
        <div>
          <button
            onClick={() => navigate(-1)}
            className="font-eyebrow text-eyebrow text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2"
          >
            ← Back to Products
          </button>
        </div>

        {/* Product Details Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-start">
          
          <div className="md:col-span-6 bg-surface-container aspect-square overflow-hidden rounded-sm">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/products/catalog-banner.jpg';
              }}
            />
          </div>

          <div className="md:col-span-6 space-y-6">
            <div>
              <span className="font-eyebrow text-eyebrow text-tertiary-container uppercase tracking-widest block mb-2">
                {product.category}
              </span>
              <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-background">
                {product.name}
              </h1>
              {product.origin && (
                <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                  Origin: {product.origin}
                </p>
              )}
            </div>

            <p className="font-body-lg text-body-lg text-on-surface-variant">
              {product.description}
            </p>

            {/* Specifications Table */}
            {product.specs && (
              <div className="border border-outline/10 p-6 rounded-sm bg-surface-container-low space-y-4">
                <h3 className="font-eyebrow text-eyebrow text-on-background uppercase tracking-widest">
                  Specifications
                </h3>
                <div className="space-y-2">
                  {Object.entries(product.specs).map(([key, val]) => (
                    <div key={key} className="flex justify-between border-b border-outline/10 py-1 text-sm">
                      <span className="font-bold text-on-background">{key}:</span>
                      <span className="text-on-surface-variant">{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div>
              <a
                href="#quote-form"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#F15A24] text-white font-label-md text-label-md rounded hover:bg-[#D1430A] transition-colors"
              >
                Request Quote for {product.name}
              </a>
            </div>
          </div>

        </div>

        <ContactSection selectedProductName={product.name} />

      </div>
    </div>
  );
}
