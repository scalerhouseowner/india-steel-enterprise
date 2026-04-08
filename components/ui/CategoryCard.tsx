import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Category } from "@/data/types";

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <Link href={`/products#${category.slug}`} className="block group">
      <div className="bg-white border border-border rounded-md shadow-card card-hover-effect overflow-hidden">
        <div className="relative aspect-[4/3] w-full bg-white">
          <Image 
            src={category.image} 
            alt={category.name}
            fill
            className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-4 flex items-center justify-between">
          <div>
            <h3 className="font-heading font-semibold text-lg text-body-dark">{category.name}</h3>
            <p className="text-sm text-body-muted mt-1">{category.productCount} {category.productCount === 1 ? 'product' : 'products'}</p>
          </div>
          <span className="text-accent group-hover:translate-x-1 transition-transform duration-200">
            →
          </span>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
