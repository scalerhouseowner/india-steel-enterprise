"use client";

import React, { useState } from "react";
import Image from "next/image";

interface ProductImageCarouselProps {
  primaryImage: string;
  images?: string[];
  alt: string;
}

export default function ProductImageCarousel({ primaryImage, images, alt }: ProductImageCarouselProps) {
  const allImages = images && images.length > 0 ? [primaryImage, ...images.filter(img => img !== primaryImage)] : [primaryImage];
  const [activeImg, setActiveImg] = useState(allImages[0]);

  return (
    <div className="flex flex-col gap-4">
      {/* Main Image */}
      <div className="relative aspect-square w-full rounded-lg overflow-hidden bg-surface border border-border group">
        <Image 
          src={activeImg} 
          alt={alt}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 55vw"
          className="object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      {/* Thumbnails */}
      {allImages.length > 1 && (
        <div className="grid grid-cols-4 gap-3">
          {allImages.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setActiveImg(img)}
              className={`relative aspect-square bg-surface rounded-md overflow-hidden border-2 transition-all ${activeImg === img ? 'border-accent' : 'border-transparent hover:border-gray-300'}`}
            >
              <Image 
                src={img} 
                alt={`${alt} thumbnail ${idx + 1}`}
                fill
                sizes="(max-width: 768px) 25vw, 15vw"
                className="object-contain p-1"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
