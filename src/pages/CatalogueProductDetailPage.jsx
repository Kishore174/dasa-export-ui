import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2, FileText, Send } from 'lucide-react';
import { PRODUCTS } from '../data/productsData';
import RevealOnScroll from '../components/ui/RevealOnScroll';
import CatalogueProductCard from '../components/ui/CatalogueProductCard';

export default function CatalogueProductDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const foundProduct = PRODUCTS.find((p) => (p.slug || p.id) === slug);
    if (foundProduct) {
      setProduct(foundProduct);
      
      // Find related products
      const related = PRODUCTS.filter(
        (p) => p.category === foundProduct.category && (p.slug || p.id) !== (foundProduct.slug || foundProduct.id)
      ).slice(0, 4);
      
      // If not enough related from category, just get some other products
      if (related.length < 4) {
        const others = PRODUCTS.filter(p => (p.slug || p.id) !== (foundProduct.slug || foundProduct.id) && !related.includes(p))
          .slice(0, 4 - related.length);
        setRelatedProducts([...related, ...others]);
      } else {
        setRelatedProducts(related);
      }
    } else {
      // Product not found
      navigate('/catalogue');
    }
  }, [slug, navigate]);

  if (!product) return null;

  return (
    <div className="bg-background min-h-screen pt-24 pb-12">
      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop">
        
        {/* Breadcrumb / Back */}
        <RevealOnScroll>
          <Link 
            to="/catalogue"
            className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors font-label text-sm font-medium mb-8 group"
          >
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
            Back to Catalogue
          </Link>
        </RevealOnScroll>

        {/* Product Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-20 lg:mb-24">
          
          {/* Product Image */}
          <div className="lg:col-span-6">
            <RevealOnScroll>
              <div className="relative aspect-[4/3] sm:aspect-square lg:aspect-[4/5] rounded-2xl overflow-hidden bg-surface-container border border-outline/10 shadow-lg group">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
            </RevealOnScroll>
          </div>

          {/* Product Info */}
          <div className="lg:col-span-6 flex flex-col pt-2 lg:pt-8">
            <RevealOnScroll delay={100}>
              <span className="font-eyebrow text-sm uppercase tracking-widest text-primary font-bold mb-3 block">
                {product.category}
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-on-surface mb-6">
                {product.name}
              </h1>
              <p className="font-body-lg text-on-surface-variant text-lg leading-relaxed mb-8">
                {product.description}
              </p>
            </RevealOnScroll>

            {/* Product Highlights */}
            <RevealOnScroll delay={200}>
              <div className="mb-10">
                <h3 className="font-label text-base font-semibold text-on-surface mb-4 uppercase tracking-wider">
                  Product Highlights
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    'Premium Quality',
                    'Export Quality Standards',
                    'Bulk Availability',
                    'International Standards'
                  ].map((highlight, idx) => (
                    <li key={idx} className="flex items-center gap-3 font-body-md text-on-surface-variant">
                      <CheckCircle2 size={20} className="text-secondary shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </RevealOnScroll>

            {/* Actions */}
            <RevealOnScroll delay={300}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-6 border-t border-outline/10">
                <Link 
                  to="/contact"
                  className="group flex-1 inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-label font-semibold rounded-lg hover:bg-on-surface transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <Send size={18} />
                  Send Enquiry
                </Link>
                <a 
                  href="/products/catalog-banner.jpg"
                  download="Dasa_Exports_Catalogue.pdf"
                  className="group flex-1 inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border border-outline/20 text-on-surface font-label font-semibold rounded-lg hover:bg-surface-container-low transition-all duration-300"
                >
                  <FileText size={18} />
                  Download Catalogue
                </a>
              </div>
            </RevealOnScroll>
          </div>
        </div>

        {/* Detailed Information Tabs / Sections */}
        <RevealOnScroll>
          <div className="border-t border-outline/10 pt-16 mb-20 lg:mb-24 grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
            <div className="col-span-1 md:col-span-2 space-y-8 lg:space-y-12">
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-on-surface mb-6">
                  Product Details
                </h2>
                <div className="prose prose-lg text-on-surface-variant max-w-none font-body-md text-lg leading-relaxed space-y-4">
                  <p>
                    Our {product.name} is meticulously sourced and processed to meet the demanding requirements of global markets. We ensure that every batch retains its natural essence, nutritional value, and functional properties.
                  </p>
                  <p>
                    Originating from {product.origin}, this product embodies the rich agricultural heritage combined with modern processing techniques to deliver uncompromising quality. The commitment to excellence means you receive a product that elevates your manufacturing, culinary, or retail offerings.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-span-1">
              <div className="bg-surface-container-low rounded-2xl p-8 border border-outline/5 shadow-sm">
                <h3 className="font-display text-xl font-bold text-on-surface mb-6">
                  Specifications
                </h3>
                {product.specs && Object.keys(product.specs).length > 0 ? (
                  <ul className="space-y-4">
                    {Object.entries(product.specs).map(([key, value]) => (
                      <li key={key} className="flex justify-between items-center border-b border-outline/10 pb-3 last:border-0 last:pb-0">
                        <span className="font-body-md text-on-surface-variant">{key}</span>
                        <span className="font-label font-semibold text-on-surface text-right ml-4">{value}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-on-surface-variant text-sm font-body-md">Specifications available upon request.</p>
                )}
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="border-t border-outline/10 pt-16">
            <RevealOnScroll>
              <div className="flex items-end justify-between mb-10">
                <div>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-on-surface mb-2">
                    Related Products
                  </h2>
                  <p className="font-body-md text-on-surface-variant">
                    Explore similar premium exports in our catalogue.
                  </p>
                </div>
                <Link to="/catalogue" className="hidden sm:inline-flex items-center gap-2 font-label text-primary hover:text-on-surface transition-colors font-semibold group">
                  View All
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </RevealOnScroll>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
              {relatedProducts.map((p, index) => (
                <RevealOnScroll key={p.id} delay={index * 100}>
                  <CatalogueProductCard product={p} />
                </RevealOnScroll>
              ))}
            </div>
            
            <div className="mt-10 text-center sm:hidden">
               <Link to="/catalogue" className="inline-flex items-center gap-2 font-label text-primary hover:text-on-surface transition-colors font-semibold group bg-surface-container py-4 px-6 rounded-lg w-full justify-center">
                  View All Products
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </Link>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
