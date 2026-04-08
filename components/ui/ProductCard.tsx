import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { Product } from "@/data/types";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white border border-border rounded-md shadow-card card-hover-effect overflow-hidden flex flex-col h-full group">
      <Link href={`/products/${product.slug}`} className="block relative aspect-square w-full overflow-hidden bg-white">
        <Image 
          src={product.image} 
          alt={product.name}
          fill
          className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
        />
      </Link>
      
      <div className="p-4 flex flex-col flex-grow">
        <div className="mb-2">
          <span className="inline-block bg-accent/10 text-accent text-micro font-semibold px-2 py-1 rounded-sm">
            {product.category}
          </span>
        </div>
        
        <Link href={`/products/${product.slug}`}>
          <h3 className="font-heading font-semibold text-[20px] text-body-dark leading-tight mb-2 group-hover:text-accent transition-colors">
            {product.name}
          </h3>
        </Link>
        
        <div className="mb-3">
          <span className={product.price === "On Request" ? "text-body-muted font-medium" : "text-accent font-bold text-lg"}>
            {product.price}
          </span>
        </div>
        
        <p className="text-body-muted text-sm line-clamp-2 mb-4 flex-grow">
          {product.shortDescription}
        </p>
        
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
          <Link 
            href={`/products/${product.slug}`} 
            className="bg-primary hover:bg-primary-light text-white font-medium text-xs px-4 py-2 rounded shadow-sm transition-colors"
          >
            View Details
          </Link>
          <a 
            href={`https://wa.me/918071793169?text=${encodeURIComponent(product.whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full bg-success/10 text-success flex items-center justify-center hover:bg-success hover:text-white transition-colors"
            aria-label={`Inquire about ${product.name} on WhatsApp`}
          >
            <MessageCircle size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
