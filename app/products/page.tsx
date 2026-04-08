import React from "react";
import { Metadata } from "next";
import Breadcrumb from "@/components/ui/Breadcrumb";
import ProductCard from "@/components/ui/ProductCard";
import { products } from "@/data/products";
import { categories } from "@/data/categories";

export const metadata: Metadata = {
  title: "Our Products",
  description: "Browse our complete range of display racks, supermarket display racks, and retail storage solutions.",
};

export default function ProductsPage() {
  return (
    <div className="bg-surface min-h-screen pb-20">
      <section className="bg-primary text-white py-12 lg:py-16">
        <div className="w-full max-w-[1920px] mx-auto px-6 sm:px-12 lg:px-24 pt-8">
          <Breadcrumb items={[{ label: "Products" }]} />
          <h1 className="font-heading text-4xl font-bold text-white mb-2">Our Products</h1>
        </div>
      </section>

      <div className="w-full max-w-[1920px] mx-auto px-6 sm:px-12 lg:px-24 mt-10">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white border border-border rounded-lg shadow-sm p-6 sticky top-24">
              <h2 className="font-heading font-semibold text-lg border-b border-border pb-4 mb-4 text-primary">Categories</h2>
              <ul className="space-y-3">
                {categories.map(cat => {
                  const itemsCount = products.filter(p => p.categorySlug === cat.slug).length;
                  if (itemsCount === 0) return null; // Only show if we have products in DB for this category
                  
                  return (
                    <li key={cat.id}>
                      <a href={`#${cat.slug}`} className="text-body-muted hover:text-accent transition-colors flex justify-between items-center text-sm font-medium">
                        <span>{cat.name}</span>
                        <span className="bg-surface px-2 py-0.5 rounded-full text-xs">{itemsCount}</span>
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4 space-y-16">
            {categories.map(cat => {
              const categoryProducts = products.filter(p => p.categorySlug === cat.slug);
              if (categoryProducts.length === 0) return null;

              return (
                <div key={cat.id} id={cat.slug} className="scroll-mt-32">
                  <div className="border-b-2 border-primary/10 pb-2 mb-6 flex items-center justify-between">
                    <h2 className="font-heading text-2xl font-bold text-primary">{cat.name}</h2>
                    <span className="text-sm font-medium text-body-muted bg-white px-3 py-1 rounded-full border border-border shadow-sm">
                      {categoryProducts.length} Products
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                    {categoryProducts.map(product => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </div>
  );
}
