import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../data/productsData';
import ContactSection from '../components/ui/ContactSection';

export default function ProductDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const product = PRODUCTS.find((p) => (p.slug || p.id) === slug) || PRODUCTS[0];
  const [activeImage, setActiveImage] = React.useState(0);
  
  // Intelligent gallery mapping based on product category for premium, highly relevant images
  const categoryGalleries = {
    'Millet Products': [
      product.image,
      'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80', // Farm Grains
      'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=800&q=80', // Wheat/Millet
      'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=800&q=80'  // Grain Bowl
    ],
    'Dehydrated Powders': [
      product.image,
      'https://images.unsplash.com/photo-1621236378699-8597fa6a7985?auto=format&fit=crop&w=800&q=80', // Fine Powders
      'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80', // Spices & Powders
      'https://images.unsplash.com/photo-1532336414038-cb11d78509cb?auto=format&fit=crop&w=800&q=80'  // Powder processing
    ],
    'Leaf Powders': [
      product.image,
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80', // Healthy Greens
      'https://images.unsplash.com/photo-1603569283847-aa295f0d016a?auto=format&fit=crop&w=800&q=80', // Organic Leaves
      'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80'  // Healthy Bowl
    ],
    'Spices': [
      product.image,
      'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80', // Spice assortment
      'https://images.unsplash.com/photo-1596647273397-6cb56ec230c6?auto=format&fit=crop&w=800&q=80', // Spice bowls
      'https://images.unsplash.com/photo-1615486511484-92e17202ea84?auto=format&fit=crop&w=800&q=80'  // Turmeric & raw spices
    ],
    'Vegetables': [
      product.image,
      'https://images.unsplash.com/photo-1595859703043-4dc60fcc50f4?auto=format&fit=crop&w=800&q=80', // Fresh Vegetables
      'https://images.unsplash.com/photo-1518843875459-f738682238a6?auto=format&fit=crop&w=800&q=80', // Veg assortment
      'https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?auto=format&fit=crop&w=800&q=80'  // Organic farm veg
    ],
    'Dehydrated': [
      product.image,
      'https://images.unsplash.com/photo-1595859703043-4dc60fcc50f4?auto=format&fit=crop&w=800&q=80', // Fresh Vegetables
      'https://images.unsplash.com/photo-1518843875459-f738682238a6?auto=format&fit=crop&w=800&q=80', // Veg assortment
      'https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?auto=format&fit=crop&w=800&q=80'  // Organic farm veg
    ]
  };

  const gallery = product.gallery || [
    product.image,
    `/products/gallery/${product.id}-1.jpg`,
    `/products/gallery/${product.id}-2.jpg`,
    `/products/gallery/${product.id}-3.jpg`
  ];

  return (
    <div className="pt-[120px] md:pt-[140px] pb-12 bg-background min-h-screen">
      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop space-y-8 md:space-y-10">
        
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
          
          <div className="md:col-span-6 flex flex-col gap-4">
            {/* Main Image Viewport */}
            <div className="relative aspect-square overflow-hidden rounded-xl border border-[#0B2B1B]/10 shadow-sm flex items-center justify-center bg-black">
              <img
                src={gallery[activeImage]}
                alt={`${product.name} View`}
                className="w-full h-full object-cover transition-opacity duration-500 ease-in-out"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = product.image;
                }}
              />
              
              {/* Premium Brand Label Overlay for Packaging Image (4th Image) */}
              {activeImage === 3 && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none pb-4 transition-opacity duration-700">
                  <div className="bg-[#1A1A1A] w-[50%] aspect-square rounded-full flex flex-col items-center justify-center shadow-2xl border-4 border-[#F15A24] p-4 relative z-10">
                    <div className="absolute inset-0 rounded-full border border-white/10 m-1" />
                    <span className="font-eyebrow text-[#F15A24] text-[8px] md:text-[10px] tracking-[0.2em] uppercase mb-1 md:mb-2 text-center">100% Organic</span>
                    <h3 className="font-headline-md text-white text-xl md:text-3xl font-bold text-center leading-tight mb-2 md:mb-3">DASA<br/>EXPORTS</h3>
                    <div className="h-[2px] w-12 bg-[#F15A24] mb-2 md:mb-3" />
                    <span className="font-eyebrow text-white/80 text-[9px] md:text-xs uppercase tracking-wider text-center px-2 line-clamp-2">{product.name}</span>
                  </div>
                </div>
              )}
            </div>
            
            {/* Thumbnails Gallery */}
            <div className="grid grid-cols-4 gap-3">
              {gallery.map((imgUrl, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`relative aspect-square rounded-lg overflow-hidden border-2 bg-black transition-all duration-300 ${
                    activeImage === idx 
                      ? 'border-[#F15A24] shadow-md opacity-100 scale-100' 
                      : 'border-transparent opacity-70 hover:opacity-100 hover:scale-[1.02]'
                  }`}
                >
                  <img 
                    src={imgUrl} 
                    alt={`Thumbnail ${idx + 1}`} 
                    className="w-full h-full object-cover" 
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = product.image;
                    }}
                  />
                  {/* Miniature Label for thumbnail 4 */}
                  {idx === 3 && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="bg-[#1A1A1A] w-[60%] aspect-square rounded-full border-2 border-[#F15A24] flex items-center justify-center">
                        <span className="text-[6px] text-white font-bold tracking-wider">DASA</span>
                      </div>
                    </div>
                  )}
                  {activeImage === idx && (
                    <div className="absolute inset-0 bg-[#F15A24]/10 pointer-events-none" />
                  )}
                </button>
              ))}
            </div>
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
