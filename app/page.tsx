import React from "react";
import HeroSection from "@/components/sections/HeroSection";
import ProductGrid from "@/components/sections/ProductGrid";
import WhyUsSection from "@/components/sections/WhyUsSection";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import CTABanner from "@/components/ui/CTABanner";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProductGrid />
      <WhyUsSection />
      <FeaturedProducts />
      
      {/* About Strip Section */}
      <section className="bg-primary text-white py-20">
        <div className="w-full max-w-[1920px] mx-auto px-6 sm:px-12 lg:px-24">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6 text-white">About India Steel Enterprises</h2>
              <p className="text-gray-300 text-base mb-8 leading-relaxed">
                Founded by Mr. Gaurav Dwivedi, India Steel Enterprises is a leading manufacturer of premium display racks, supermarket furniture, and industrial storage solutions based in Kanpur, Uttar Pradesh. Operating out of our dedicated facility, we serve retailers and businesses across India.
              </p>
              <a href="/about" className="inline-flex items-center text-accent font-semibold hover:text-white transition-colors">
                Learn More About Us →
              </a>
            </div>
            
            <div className="lg:w-1/2 grid grid-cols-2 gap-4 w-full">
              <div className="bg-primary-light/50 p-6 rounded-md border border-primary-light flex flex-col items-center justify-center text-center">
                <span className="font-heading text-2xl font-bold text-white mb-1">10+</span>
                <span className="text-gray-400 text-sm">Years Experience</span>
              </div>
              <div className="bg-primary-light/50 p-6 rounded-md border border-primary-light flex flex-col items-center justify-center text-center">
                <span className="font-heading text-2xl font-bold text-white mb-1">500+</span>
                <span className="text-gray-400 text-sm">Products Delivered</span>
              </div>
              <div className="bg-primary-light/50 p-6 rounded-md border border-primary-light flex flex-col items-center justify-center text-center">
                <span className="font-heading text-2xl font-bold text-white mb-1">All India</span>
                <span className="text-gray-400 text-sm">Delivery Network</span>
              </div>
              <div className="bg-primary-light/50 p-6 rounded-md border border-primary-light flex flex-col items-center justify-center text-center">
                <span className="font-heading text-2xl font-bold text-white mb-1">GST</span>
                <span className="text-gray-400 text-sm">Verified Business</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
