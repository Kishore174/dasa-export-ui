import React, { useState } from 'react';
import { PRODUCTS, CATEGORIES } from '../data/productsData';
import ProductCard from '../components/ui/ProductCard';

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categoryList = ['All', ...CATEGORIES.map((c) => c.name)];

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory =
      selectedCategory === 'All' ||
      product.category.toLowerCase() === selectedCategory.toLowerCase();

    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="font-body bg-white min-h-screen">
      {/* Cinematic Hero Section */}
      <section className="relative w-full min-h-[45vh] flex flex-col justify-center overflow-hidden bg-[#0B2B1B] py-12 md:py-16 border-b border-[#0B2B1B]/10">
        <div className="absolute inset-0 z-0 pointer-events-none">
           <img src="/products-all-premium.png" className="w-full h-full object-cover object-center" alt="Premium Products Assortment" />
           {/* Subtle gradient to ensure the centered text always stays perfectly readable */}
           <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="max-w-[1440px] w-full mx-auto px-margin-mobile md:px-margin-desktop relative z-10 mt-8 text-center">
          <div className="max-w-3xl mx-auto">
            <span className="font-eyebrow text-eyebrow tracking-widest text-[#F15A24] uppercase bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full inline-block mb-6 font-bold shadow-sm">
              EXPORT CATALOG
            </span>
            <h1 className="font-display-lg text-4xl md:text-6xl font-serif font-bold text-white mb-5 leading-tight drop-shadow-2xl">
              Our Products
            </h1>
            <p className="font-body-lg text-base md:text-lg text-white/95 max-w-2xl mx-auto font-medium drop-shadow-lg">
              Explore our range of premium agricultural ingredients, dehydrated powders, and spices.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop space-y-12 py-12">

        {/* Category Pills & Search */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-outline/10">
          
          <div className="flex flex-nowrap md:flex-wrap gap-2 overflow-x-auto w-full pb-2 md:pb-0 scrollbar-hide shrink-0 lg:max-w-[70%]">
            {categoryList.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-eyebrow rounded transition-colors whitespace-nowrap shrink-0 ${
                  selectedCategory === cat
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-4 py-2 bg-transparent border-b border-outline/30 text-on-background placeholder-on-surface-variant/50 focus:outline-none focus:border-primary font-body-md w-full lg:w-64 shrink-0 transition-colors"
          />
        </div>

        {/* Product Count */}
        <div className="mb-6 text-center md:text-left">
          <p className="font-body-md text-on-surface-variant">
            {selectedCategory === 'Fruit Powder' ? (
              <span className="font-bold text-primary">Showing {filteredProducts.length} products in Fruit Powder</span>
            ) : (
              <span>Showing {filteredProducts.length} products</span>
            )}
          </p>
        </div>

        {/* Product Grid & Empty State */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-gutter">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="w-full py-24 flex flex-col items-center justify-center text-center bg-surface-container/20 rounded-xl border border-outline/10">
            <h3 className="font-display-sm text-2xl font-serif font-bold text-[#1B1C19] mb-3">
              No products found in this category.
            </h3>
            <p className="font-body-md text-on-surface-variant max-w-md">
              We couldn't find any products matching your selected category and search criteria. Try adjusting your filters.
            </p>
          </div>
        )}

      </div>
    </div>
  );
}
