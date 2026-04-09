import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import { Factory, Construction, CheckCircle2 } from "lucide-react";
import CTABanner from "@/components/ui/CTABanner";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about India Steel Enterprise, a trusted manufacturer and supplier of display racks and supermarket furniture based in Kanpur, UP.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Strip */}
      <section className="bg-primary text-white py-16 lg:py-24">
        <div className="w-full max-w-[1920px] mx-auto px-6 sm:px-12 lg:px-24 text-center pt-8">
          <Breadcrumb items={[{ label: "About Us" }]} />
          <h1 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-white">About India Steel Enterprise</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Your trusted manufacturing partner for display racks and storage solutions for over a decade.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="w-full max-w-[1920px] mx-auto px-6 sm:px-12 lg:px-24">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6 text-primary">Our Story</h2>
              <div className="space-y-4 text-body-muted text-base leading-relaxed">
                <p>
                  Founded by <strong>Mr. Gaurav Dwivedi</strong>, India Steel Enterprise has grown into a leading name in the manufacturing of retail display and industrial storage solutions. Based in Panki, Kanpur, Uttar Pradesh, our state-of-the-art facility builds products tailored to the demanding needs of modern retail.
                </p>
                <p>
                  We proudly manufacture a wide range of display racks, supermarket furniture, and heavy-duty storage shelving. As a GST-registered business (GST: 09DVUPD7629J1ZS), we maintain strict compliance and quality standards.
                </p>
                <p>
                  We operate exclusively in the domestic market, offering reliable all-India delivery. By dealing directly with us, our clients bypass broker markups and receive genuine factory-direct pricing for uncompromised quality.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 relative h-[400px] w-full rounded-lg overflow-hidden shadow-xl border border-border">
              {/* Using a placeholder from available images that looks like an overview */}
              <Image 
                src="/images/Display-Storage-Rack..jpg" 
                alt="India Steel Enterprise Manufacturing Facility" 
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="py-20 bg-surface">
        <div className="w-full max-w-[1920px] mx-auto px-6 sm:px-12 lg:px-24">
          <div className="text-center mb-16">
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4 text-primary">Our Infrastructure & Quality</h2>
            <p className="text-lg text-body-muted max-w-2xl mx-auto">
              We control the entire process from raw material to finished product.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-card border border-border flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
                <Factory size={32} />
              </div>
              <h3 className="font-heading text-xl font-bold text-body-dark mb-4">Manufacturing</h3>
              <p className="text-body-muted leading-relaxed">
                Our own expansive manufacturing facility in Kanpur. All products are built completely in-house utilizing modern fabrication techniques.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-card border border-border flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
                <Construction size={32} />
              </div>
              <h3 className="font-heading text-xl font-bold text-body-dark mb-4">Materials</h3>
              <p className="text-body-muted leading-relaxed">
                We strictly use premium Mild Steel (MS), Stainless Steel (SS), and durable PP plastic — sourced exclusively from certified, trusted suppliers.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-card border border-border flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="font-heading text-xl font-bold text-body-dark mb-4">Quality check</h3>
              <p className="text-body-muted leading-relaxed">
                Powder coating is done in-house. Every single piece is rigorously checked for structural integrity and finish before dispatch.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
