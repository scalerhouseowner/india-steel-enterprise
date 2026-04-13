import React from 'react';
import { Hammer, Store, Wrench, PenTool } from 'lucide-react';

export default function ServicesSection() {
  return (
    <section className="bg-surface py-16 lg:py-24 border-y border-border relative overflow-hidden">
      
      {/* Background Decorative Pattern */}
      <div className="absolute top-0 right-0 p-32 opacity-[0.03] pointer-events-none">
        <Hammer size={400} />
      </div>

      <div className="w-full max-w-[1920px] mx-auto px-6 sm:px-12 lg:px-24 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6 text-primary leading-tight">
            We also provide all types of iron work services available and all types of stores
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-6 relative"></div>
          <p className="text-gray-600 text-lg md:text-xl">
            Beyond our standard catalog, India Steel Enterprise delivers comprehensive custom iron fabrication and complete store setup solutions tailored exactly to your unique business requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center group border border-border/50">
            <div className="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-500">
              <Hammer size={36} />
            </div>
            <h3 className="font-heading font-bold text-2xl text-primary mb-4">Custom Iron Work</h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Specialized iron fabrication services, welding, and durable structural components built precisely to your heavy-duty specifications.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center group border border-border/50">
            <div className="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-500">
              <Store size={36} />
            </div>
            <h3 className="font-heading font-bold text-2xl text-primary mb-4">All Store Types</h3>
            <p className="text-gray-600 text-base leading-relaxed">
              From small independent kirana shops to massive hypermarkets and upscale fashion boutiques, we cater to all store configurations.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center group border border-border/50">
            <div className="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-500">
              <PenTool size={36} />
            </div>
            <h3 className="font-heading font-bold text-2xl text-primary mb-4">Bespoke Design</h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Tailor-made designs that optimize your specific floor plan dimensions and match your brand&apos;s unique aesthetic perfectly.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center group border border-border/50">
            <div className="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-500">
              <Wrench size={36} />
            </div>
            <h3 className="font-heading font-bold text-2xl text-primary mb-4">End-to-End Setup</h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Comprehensive turnkey solutions including manufacturing, fast delivery, and professional final installation at your site.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
