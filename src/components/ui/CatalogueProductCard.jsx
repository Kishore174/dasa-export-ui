import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function CatalogueProductCard({ product }) {
  if (!product) return null;

  return (
    <div className="group relative bg-white rounded-xl border border-outline/10 shadow-sm hover:shadow-xl transition-all duration-500 ease-out hover:-translate-y-1.5 flex flex-col overflow-hidden h-full">
      {/* Product Image Section */}
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-surface-container">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        {/* Subtle Overlay on Hover */}
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Floating Action Button (Appears on Hover) */}
        <div className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400 ease-out delay-75">
          <ArrowRight size={18} className="text-primary group-hover:translate-x-0.5 transition-transform" />
        </div>
      </div>

      {/* Card Content Section */}
      <div className="p-6 flex flex-col flex-grow">
        <span className="font-eyebrow text-[10px] sm:text-xs uppercase tracking-widest text-primary font-semibold mb-2 block">
          {product.category}
        </span>
        <h3 className="font-display text-lg sm:text-xl font-bold text-on-surface mb-3 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <p className="font-body-md text-sm text-on-surface-variant line-clamp-2 mb-6 flex-grow">
          {product.description}
        </p>

        {/* View Details Action */}
        <div className="mt-auto pt-4 border-t border-outline/10 flex items-center gap-2">
          <span
            className="inline-flex items-center gap-2 font-label text-sm font-semibold text-secondary group-hover:text-primary transition-colors"
          >
            <span>View Details</span>
            <ArrowRight size={16} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 absolute right-6" />
          </span>
        </div>
      </div>
      
      {/* Absolute Link Covering the Card */}
      <Link to={`/catalogue/product/${product.slug || product.id}`} className="absolute inset-0 z-10">
        <span className="sr-only">View {product.name}</span>
      </Link>
    </div>
  );
}
