import React from "react";
import Link from "next/link";
import { categories } from "@/data/categories";
import { MapPin, Phone, MessageCircle } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-8 border-t border-primary-light">
      <div className="w-full max-w-[1920px] mx-auto px-6 sm:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: Brand Info */}
          <div className="pr-4">
            <div className="flex items-center gap-2 mb-6">
              <Image src="/logo.jpg" alt="India Steel Enterprise" width={48} height={48} className="rounded-sm bg-white p-1" />
              <span className="font-heading font-extrabold text-xl">India Steel Enterprise</span>
            </div>
            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
              Manufacturer & Supplier of Display Racks, Supermarket Furniture, and Storage Solutions in Kanpur, UP.
            </p>
            <div className="flex items-start gap-3 text-sm text-gray-300 mb-4">
              <MapPin size={22} className="text-accent shrink-0 mt-0.5" />
              <span>B No 3/45/A, Jmui Panki Pank Bahadur Nagar, Kanpur – 208020, UP</span>
            </div>
            <div className="text-sm font-semibold text-gray-200 mt-6">
              GST: 09DVUPD7629J1ZS
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4 text-white h-[48px] flex items-end pb-1">Quick Links</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link href="/" className="hover:text-accent transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="/products" className="hover:text-accent transition-colors">Our Products</Link></li>
              <li><Link href="/why-us" className="hover:text-accent transition-colors">Why Choose Us</Link></li>
              <li><Link href="/gallery" className="hover:text-accent transition-colors">Gallery</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Categories */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4 text-white h-[48px] flex items-end pb-1">Product Categories</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              {categories.slice(0, 8).map(cat => (
                <li key={cat.id}>
                  <Link href={`/products#${cat.slug}`} className="hover:text-accent transition-colors">
                    {cat.name}
                  </Link>
                </li>
              ))}
              <li><Link href="/products" className="text-accent hover:text-white transition-colors">View All →</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact & Socials */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4 text-white h-[48px] flex items-end pb-1">Contact Us</h3>
            <div className="space-y-4">
              <a href="tel:+919935099014" className="flex items-center gap-4 text-gray-300 hover:text-accent transition-colors">
                <div className="bg-primary-light p-3 rounded-full">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Call Us Now</div>
                  <div className="font-semibold text-base px-1">+919935099014, +919565666055</div>
                </div>
              </a>
              <a href="https://wa.me/919565666055?text=Hi%2C%20I%20want%20to%20know%20more%20about%20your%20products" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-success transition-colors">
                <div className="bg-primary-light p-3 rounded-full text-success">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Chat on WhatsApp</div>
                  <div className="font-semibold text-base px-1">+919565666055, +919935099014</div>
                </div>
              </a>
              <a href="https://maps.google.com/?q=India+Steel+Enterprises+Kanpur" target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-sm border border-gray-600 px-4 py-2 rounded-md hover:border-accent hover:text-accent transition-colors">
                Open in Google Maps
              </a>
            </div>

            <h3 className="font-heading font-bold text-lg mb-3 mt-8 text-white">Follow Us</h3>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/indiasteelenterprise" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center hover:bg-accent text-white transition-colors" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://www.instagram.com/indiasteelenterprise" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center hover:bg-accent text-white transition-colors" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="https://www.youtube.com/@IndiasteelEnterprise" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center hover:bg-red-600 text-white transition-colors" aria-label="YouTube">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-primary-light mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} India Steel Enterprise | All Rights Reserved. <br className="md:hidden" />
            <span className="hidden md:inline"> | </span> 
            Made with Love By <a href="https://scalerhouse.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-accent transition-colors font-medium">ScalerHouse</a>
          </p>
          <p className="mt-2 md:mt-0">GST: 09DVUPD7629J1ZS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
