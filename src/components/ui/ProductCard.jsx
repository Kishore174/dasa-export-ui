import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function ProductCard({ product }) {
  if (!product) return null;

  return (
    <div className="flex flex-col group border border-outline/10 bg-surface rounded-sm p-4 hover:bg-surface-container-low transition-colors h-full">
      <Link to={`/products/${product.slug || product.id}`} className="flex flex-col flex-grow cursor-pointer">
        <div className="w-full aspect-square overflow-hidden bg-surface-container mb-4 rounded-sm relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = '/products/catalog-banner.jpg';
            }}
          />
        </div>
        
        <div className="flex items-start justify-between gap-2 mb-1">
          <span className="font-eyebrow text-eyebrow text-on-surface-variant uppercase tracking-wider block">
            {product.category}
          </span>
        </div>

        <h4 className="font-body-lg text-lg text-on-background font-medium group-hover:text-primary transition-colors mb-1">
          {product.name}
        </h4>
        
        {product.description && (
          <p className="font-body-sm text-sm text-on-surface-variant line-clamp-1 mt-1">
            {product.description}
          </p>
        )}
      </Link>
      
      {/* 
      {(product.status === 'Inquiry Only' || product.category === 'Fruit Powder') && (
        <div className="mt-4 pt-4 border-t border-outline/10 flex items-center justify-between gap-2">
          <span className="font-eyebrow text-[10px] font-bold tracking-widest text-primary uppercase shrink-0">
            {product.status || 'INQUIRY ONLY'}
          </span>
          <Link
            to="/contact"
            state={{ selectedProduct: product.name }}
            className="flex items-center gap-2 px-4 py-2 bg-primary hover:opacity-90 text-white font-eyebrow text-[10px] tracking-widest font-bold uppercase rounded transition-all duration-300 shadow-sm"
          >
            Request Quote
            <ArrowRight size={14} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
          </Link>
        </div>
      )}
      */}
    </div>
  );
}
