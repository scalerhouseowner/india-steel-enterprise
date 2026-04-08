import React from "react";
import { Metadata } from "next";
import { Phone, MessageCircle, MapPin, Clock, Building } from "lucide-react";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact India Steel Enterprises in Kanpur, UP. Call 08071793169 or WhatsApp us for inquiries on display racks and supermarket furniture.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-primary text-white py-16 lg:py-24">
        <div className="w-full max-w-[1920px] mx-auto px-6 sm:px-12 lg:px-24 text-center pt-8">
          <Breadcrumb items={[{ label: "Contact Us" }]} />
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-white">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Get in touch for custom pricing, bulk orders, or product inquiries.
          </p>
        </div>
      </section>

      <section className="py-20 bg-surface min-h-[60vh]">
        <div className="w-full max-w-[1920px] mx-auto px-6 sm:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-xl shadow-card overflow-hidden border border-border">
            
            {/* Contact Details Card */}
            <div className="p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-border">
              <h2 className="font-heading text-3xl font-bold text-primary mb-8">Get In Touch</h2>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <Building className="text-accent mt-1 shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold text-body-dark">India Steel Enterprises</h3>
                    <p className="text-body-muted text-sm">Proprietor: Mr. Gaurav Dwivedi</p>
                    <p className="text-body-muted text-sm mt-1">GST: 09DVUPD7629J1ZS</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <MapPin className="text-accent mt-1 shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold text-body-dark">Factory Address</h3>
                    <p className="text-body-muted text-sm leading-relaxed">
                      B No 3/45/A, Jmui Panki<br/>
                      Pank Bahadur Nagar<br/>
                      Kanpur – 208020, UP, India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Clock className="text-accent mt-1 shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold text-body-dark">Working Hours</h3>
                    <p className="text-body-muted text-sm">Mon–Sat, 9:00 AM – 7:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <a 
                  href="https://wa.me/918071793169?text=Hi%2C%20I%20want%20to%20know%20more%20about%20your%20products"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="btn-bounce w-full bg-success text-white py-4 rounded-md font-semibold text-lg flex items-center justify-center gap-3 transition-colors shadow-sm hover:shadow-md"
                >
                  <MessageCircle size={24} /> Chat on WhatsApp Now
                </a>
                <a 
                  href="tel:08071793169" 
                  className="btn-bounce w-full bg-primary text-white py-4 rounded-md font-semibold text-lg flex items-center justify-center gap-3 transition-colors shadow-sm hover:shadow-md"
                >
                  <Phone size={24} /> Call 08071793169
                </a>
              </div>
              
              <div className="mt-8 text-center bg-surface p-4 rounded-md">
                <p className="text-body-dark font-medium text-sm">Prefer to send a message?</p>
                <p className="text-body-muted text-sm mt-1">WhatsApp us anytime. We respond to all inquiries within 2 working hours.</p>
              </div>
            </div>
            
            {/* Google Maps Embed */}
            <div className="h-full min-h-[400px] lg:min-h-full relative bg-gray-200">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114311.19655610852!2d80.20786934255554!3d26.447814468641913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c4770b127c46f%3A0x1778302a9fbe7b41!2sKanpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0, position: 'absolute', top: 0, left: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="India Steel Enterprises Location"
              ></iframe>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
