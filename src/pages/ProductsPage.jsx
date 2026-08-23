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
    <div className="pt-24 pb-section-gap bg-background min-h-screen">
      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="font-eyebrow text-eyebrow text-tertiary-container uppercase tracking-widest block">
            Export Catalog
          </span>
          <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-background">
            Our Products
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Explore our range of premium agricultural ingredients, dehydrated powders, and spices.
          </p>
        </div>

        {/* Category Pills & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-outline/10">
          <div className="flex flex-wrap gap-2">
            {categoryList.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-eyebrow rounded transition-colors ${
                  selectedCategory === cat
                    ? 'bg-[#F15A24] text-white'
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
            className="px-4 py-2 bg-transparent border-b border-outline/30 text-on-background placeholder-on-surface-variant/50 focus:outline-none focus:border-primary font-body-md"
          />
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-gutter">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </div>
  );
}
