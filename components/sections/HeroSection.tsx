import React from "react";

import { Phone, MessageCircle, CheckCircle2 } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative bg-primary text-white pt-28 pb-16 lg:pt-36 lg:pb-20 overflow-hidden z-0 -mt-16 lg:-mt-20">
      {/* Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none z-[-1]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm20 20h20v20H20V20zM0 20h20v20H0V20z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: '20px 20px'
        }}
      />
      
      <div className="w-full max-w-[1920px] mx-auto px-6 sm:px-12 lg:px-24 text-center">
        <div className="inline-block bg-white/20 px-6 py-2 rounded-full mb-8 text-sm font-semibold tracking-wide text-white border border-white/30 shadow-lg">
          Manufacturer & Supplier | Kanpur, UP
        </div>
        
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight max-w-5xl mx-auto text-white drop-shadow-lg">
          Display Racks & Retail Store Solutions
        </h1>
        
        <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-medium drop-shadow-md">
          Direct from factory. Custom sizes. Pan-India delivery.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
          <a 
            href="tel:08071793169" 
            className="btn-bounce bg-accent hover:bg-accent-hover text-white w-full sm:w-auto px-8 py-3.5 rounded-md font-semibold text-lg flex items-center justify-center gap-2"
          >
            <Phone size={20} /> Call Now — 08071793169
          </a>
          <a 
            href="https://wa.me/918071793169?text=Hi%2C%20I%20want%20to%20know%20more%20about%20your%20products"
            target="_blank"
            rel="noopener noreferrer" 
            className="btn-bounce border-2 border-white/30 hover:border-white text-white w-full sm:w-auto px-8 py-3.5 rounded-md font-semibold text-lg flex items-center justify-center gap-2 transition-colors"
          >
            <MessageCircle size={20} /> WhatsApp Inquiry
          </a>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-sm md:text-base text-gray-300">
          <div className="flex items-center gap-2">
            <CheckCircle2 size={18} className="text-success" />
            <span>GST Verified</span>
          </div>
          <div className="hidden md:block text-gray-600">|</div>
          <div className="flex items-center gap-2">
            <CheckCircle2 size={18} className="text-success" />
            <span>5-7 Day Delivery</span>
          </div>
          <div className="hidden md:block text-gray-600">|</div>
          <div className="flex items-center gap-2">
            <CheckCircle2 size={18} className="text-success" />
            <span>Custom Sizing</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
