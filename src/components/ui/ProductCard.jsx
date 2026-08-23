import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  if (!product) return null;

  return (
    <Link to={`/products/${product.slug || product.id}`} className="flex flex-col group cursor-pointer border border-outline/10 bg-surface rounded-sm p-4 hover:bg-surface-container-low transition-colors">
      <div className="w-full aspect-square overflow-hidden bg-surface-container mb-4 rounded-sm">
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
      <span className="font-eyebrow text-eyebrow text-on-surface-variant block mb-1">
        {product.category}
      </span>
      <h4 className="font-body-lg text-body-lg text-on-background font-medium group-hover:text-primary transition-colors">
        {product.name}
      </h4>
    </Link>
  );
}
