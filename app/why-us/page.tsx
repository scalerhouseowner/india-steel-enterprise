import React from "react";
import { Metadata } from "next";
import { Factory, Ruler, Truck, ShieldCheck, FileText } from "lucide-react";
import CTABanner from "@/components/ui/CTABanner";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Why Choose Us",
  description: "5 reasons why retailers across India trust India Steel Enterprises for their display racks and retail furniture.",
};

export default function WhyUsPage() {
  const reasons = [
    {
      id: 1,
      icon: <Factory size={48} className="text-accent" />,
      title: "Direct from Factory",
      text: "You deal directly with the manufacturer. No distributor markup, no commission agent. What you see is the transparent factory price.",
    },
    {
      id: 2,
      icon: <Ruler size={48} className="text-accent" />,
      title: "Custom Sizing Available",
      text: "Standard sizes don't work for every shop. We build to your exact dimensions — width, height, number of shelves, all completely customizable.",
    },
    {
      id: 3,
      icon: <Truck size={48} className="text-accent" />,
      title: "Pan-India Delivery in 5–7 Days",
      text: "We dispatch from Kanpur within 48 hours of order confirmation. Delivery across UP happens in 1–2 days, and the rest of India within 5–7 days.",
    },
    {
      id: 4,
      icon: <ShieldCheck size={48} className="text-accent" />,
      title: "Rust-Resistant Powder Coating",
      text: "All MS products are powder-coated in-house. This gives a hard, rust-resistant finish that lasts 8–10 years even in highly humid environments.",
    },
    {
      id: 5,
      icon: <FileText size={48} className="text-accent" />,
      title: "GST Invoice Provided",
      text: "We are a fully GST-registered business (09DVUPD7629J1ZS). You receive a proper, official GST invoice for all purchases allowing you to claim input tax credit.",
    },
  ];

  return (
    <>
      <section className="bg-primary text-white py-16 lg:py-24">
        <div className="w-full max-w-[1920px] mx-auto px-6 sm:px-12 lg:px-24 text-center pt-8">
          <Breadcrumb items={[{ label: "Why Choose Us" }]} />
          <h1 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-white">Why Buy From India Steel Enterprises?</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            5 reasons retailers across India trust us as their primary racking supplier.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="w-full max-w-[1920px] mx-auto px-6 sm:px-12 lg:px-24">
          <div className="space-y-16">
            {reasons.map((reason, index) => (
              <div 
                key={reason.id} 
                className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="flex-shrink-0 w-32 h-32 bg-surface rounded-full flex items-center justify-center border-4 border-white shadow-card">
                  {reason.icon}
                </div>
                <div className={`flex-1 text-center ${index % 2 !== 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <h3 className="font-heading text-xl font-bold text-primary mb-3">{reason.title}</h3>
                  <p className="text-base text-body-muted leading-relaxed">{reason.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
