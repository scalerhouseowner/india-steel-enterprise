import React from "react";
import { Phone, MessageCircle } from "lucide-react";

const CTABanner = () => {
  return (
    <section className="bg-accent text-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4 text-white">Ready to Setup Your Store?</h2>
        <p className="text-base sm:text-lg mb-8 text-white/90">Tell us what you need — we&apos;ll give you the best factory price.</p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="tel:08071793169" 
            className="btn-bounce bg-white text-accent w-full sm:w-auto px-6 py-2.5 rounded-md font-semibold text-base flex items-center justify-center gap-2"
          >
            <Phone size={18} /> Call 08071793169
          </a>
          <a 
            href="https://wa.me/918071793169?text=Hi%2C%20I%20want%20to%20know%20more%20about%20your%20products"
            target="_blank"
            rel="noopener noreferrer" 
            className="btn-bounce bg-success text-white w-full sm:w-auto px-6 py-2.5 rounded-md font-semibold text-base flex items-center justify-center gap-2"
          >
            <MessageCircle size={18} /> Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
