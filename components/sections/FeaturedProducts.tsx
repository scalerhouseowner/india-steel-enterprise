import React from "react";
import ProductCard from "@/components/ui/ProductCard";
import { products } from "@/data/products";

const FeaturedProducts = () => {
  // Select 4-8 featured products for the homepage
  const featured = products.slice(0, 8);

  return (
    <section className="py-20 bg-white border-t border-border">
      <div className="w-full max-w-[1920px] mx-auto px-6 sm:px-12 lg:px-24">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-2">Most Popular Products</h2>
            <p className="text-body-muted text-sm sm:text-base">Our best-selling display and storage solutions.</p>
          </div>
          <a href="/products" className="hidden sm:inline-flex items-center text-accent font-semibold hover:text-accent-hover transition-colors">
            View All Products →
          </a>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="mt-8 text-center sm:hidden">
          <a href="/products" className="inline-flex items-center text-accent font-semibold hover:text-accent-hover transition-colors">
            View All Products →
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
