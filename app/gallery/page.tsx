import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Gallery | Our Work",
  description: "View our gallery of installations, products, and our Kanpur manufacturing facility.",
};

export default function GalleryPage() {
  // Using product images as gallery placeholders as per spec
  const galleryImages = products.map((p, index) => ({
    id: index,
    src: p.image,
    alt: `Installation of ${p.name}`
  }));

  return (
    <>
      <section className="bg-primary text-white py-16 lg:py-24">
        <div className="w-full max-w-[1920px] mx-auto px-6 sm:px-12 lg:px-24 text-center pt-8">
          <Breadcrumb items={[{ label: "Gallery" }]} />
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-white">Our Work</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Installations, diverse retail products, and a glimpse into our manufacturing scale.
          </p>
        </div>
      </section>

      <section className="py-20 bg-surface min-h-[60vh]">
        <div className="w-full max-w-[1920px] mx-auto px-6 sm:px-12 lg:px-24">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((img) => (
              <div key={img.id} className="relative aspect-square rounded-md overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow group border border-border">
                <Image 
                  src={img.src} 
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-medium text-sm px-4 text-center">View Installation</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <section className="bg-white py-16 px-4 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-3xl font-bold mb-6 text-primary">Want a similar setup for your store?</h2>
          <a 
            href="https://wa.me/918071793169?text=Hi%2C%20I%20saw%20your%20gallery%20and%20want%20to%20discuss%20my%20store%20setup."
            target="_blank"
            rel="noopener noreferrer" 
            className="btn-bounce inline-flex bg-success text-white px-8 py-4 rounded-md font-semibold text-lg items-center justify-center gap-3 transition-colors shadow-md hover:bg-green-600"
          >
            <MessageCircle size={24} /> WhatsApp Us Your Requirements
          </a>
        </div>
      </section>
    </>
  );
}
