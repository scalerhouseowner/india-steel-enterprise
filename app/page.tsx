import React from "react";
import HeroSection from "@/components/sections/HeroSection";
import ProductGrid from "@/components/sections/ProductGrid";
import FeaturedInSection from "@/components/sections/FeaturedInSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import ServicesSection from "@/components/sections/ServicesSection";
import CTABanner from "@/components/ui/CTABanner";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "India Steel Enterprise",
  "alternateName": "ISE Kanpur",
  "url": "https://www.indiasteelenterprise.com",
  "logo": "https://www.indiasteelenterprise.com/icon.jpg",
  "description": "India Steel Enterprise is a leading manufacturer and supplier of display racks, supermarket furniture, slotted angle racks, and industrial storage solutions based in Kanpur, Uttar Pradesh.",
  "foundingDate": "2014",
  "founder": {
    "@type": "Person",
    "name": "Gaurav Dwivedi"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Kanpur",
    "addressRegion": "Uttar Pradesh",
    "addressCountry": "IN"
  },
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+91-99350-99014",
      "contactType": "sales",
      "areaServed": "IN",
      "availableLanguage": ["Hindi", "English"]
    },
    {
      "@type": "ContactPoint",
      "telephone": "+91-95656-66055",
      "contactType": "customer support",
      "contactOption": "WhatsApp",
      "areaServed": "IN",
      "availableLanguage": ["Hindi", "English"]
    }
  ],
  "sameAs": [
    "https://www.facebook.com/indiasteelenterprise",
    "https://www.instagram.com/indiasteelenterprise",
    "https://www.youtube.com/@IndiasteelEnterprise"
  ]
};

export default function Home() {
  return (
    <>
      {/* Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <HeroSection />
      <ProductGrid />
      <FeaturedInSection />
      <WhyUsSection />
      <FeaturedProducts />
      <ServicesSection />
      
      {/* About Strip Section */}
      <section className="bg-primary text-white py-20">
        <div className="w-full max-w-[1920px] mx-auto px-6 sm:px-12 lg:px-24">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6 text-white">About India Steel Enterprise</h2>
              <p className="text-gray-300 text-base mb-8 leading-relaxed">
                Founded by Mr. Gaurav Dwivedi, India Steel Enterprise is a leading manufacturer of premium display racks, supermarket furniture, and industrial storage solutions based in Kanpur, Uttar Pradesh. Operating out of our dedicated facility, we serve retailers and businesses across India.
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
