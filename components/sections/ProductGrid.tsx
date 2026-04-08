import React from "react";
import CategoryCard from "@/components/ui/CategoryCard";
import { categories } from "@/data/categories";

const ProductGrid = () => {
  return (
    <section className="py-20 bg-surface">
      <div className="w-full max-w-[1920px] mx-auto px-6 sm:px-12 lg:px-24">
        <div className="text-center mb-12">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-4">Our Product Range</h2>
          <p className="text-body-muted text-base max-w-2xl mx-auto">
            Explore our diverse range of retail and industrial solutions. All manufactured in-house in our Kanpur facility.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
