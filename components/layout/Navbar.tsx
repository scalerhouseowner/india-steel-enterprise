"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, MessageCircle, Menu, X, ChevronDown } from "lucide-react";
import { categories } from "@/data/categories";
import Image from "next/image";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const pathname = usePathname();

  const isHomepage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navbarClasses = `fixed top-0 left-0 right-0 z-[100] transition-colors duration-300 ${
    isHomepage && !isScrolled
      ? "bg-transparent text-white"
      : "bg-white shadow-md text-body-dark"
  }`;



  return (
    <nav className={navbarClasses}>
      <div className="w-full max-w-[1920px] mx-auto px-6 sm:px-12 lg:px-24">
        <div className="flex justify-between items-center h-16 lg:h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="font-heading font-extrabold text-xl md:text-2xl flex items-center gap-3">
              <Image src="/logo.jpg" alt="India Steel Enterprises" width={48} height={48} className="rounded-sm bg-white p-1" />
              <span className={`tracking-tight ${isHomepage && !isScrolled ? 'text-white' : 'text-primary'}`}>India Steel Enterprises</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link href="/" className="text-base font-semibold hover:text-accent transition-colors">Home</Link>
            
            <div 
              className="relative group"
              onMouseEnter={() => setIsMegaMenuOpen(true)}
              onMouseLeave={() => setIsMegaMenuOpen(false)}
            >
              <Link href="/products" className="text-base font-semibold hover:text-accent transition-colors flex items-center gap-1">
                Our Products <ChevronDown size={18} />
              </Link>
              
              {/* Mega Dropdown */}
              {isMegaMenuOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[550px] bg-white shadow-xl rounded-md border border-border mt-0 p-6 grid grid-cols-2 gap-4">
                  {categories.map((cat) => (
                    <Link 
                      key={cat.id} 
                      href={`/products#${cat.slug}`}
                      className="text-body-dark hover:text-accent font-medium text-sm flex items-center"
                      onClick={() => setIsMegaMenuOpen(false)}
                    >
                      {cat.name} ({cat.productCount})
                    </Link>
                  ))}
                  <Link 
                    href="/products"
                    className="col-span-2 text-center text-accent font-semibold text-sm mt-2 pt-2 border-t border-border"
                  >
                    View All Products →
                  </Link>
                </div>
              )}
            </div>

            <Link href="/about" className="text-base font-semibold hover:text-accent transition-colors">About</Link>
            <Link href="/why-us" className="text-base font-semibold hover:text-accent transition-colors">Why Us</Link>
            <Link href="/gallery" className="text-base font-semibold hover:text-accent transition-colors">Gallery</Link>
            <Link href="/contact" className="text-base font-semibold hover:text-accent transition-colors">Contact Us</Link>
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:08071793169" className="btn-bounce bg-primary hover:bg-primary-light text-white px-4 py-2 rounded-md font-bold text-sm flex items-center gap-2">
              <Phone size={16} /> Call Now
            </a>
            <a href="https://wa.me/918071793169?text=Hi%2C%20I%20want%20to%20know%20more%20about%20your%20products" target="_blank" rel="noopener noreferrer" className="btn-bounce border-2 border-success text-success hover:bg-success hover:text-white px-4 py-2 rounded-md font-bold text-sm flex items-center gap-2 transition-colors">
              <MessageCircle size={16} /> WhatsApp
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md hover:bg-black/10 focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-border h-screen overflow-y-auto pb-32">
          <div className="px-4 pt-2 pb-6 space-y-1 bg-white flex flex-col text-body-dark">
            <Link href="/" className="block px-3 py-3 rounded-md text-base font-semibold border-b border-border" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            <Link href="/products" className="block px-3 py-3 rounded-md text-base font-semibold border-b border-border" onClick={() => setIsMobileMenuOpen(false)}>Products List</Link>
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/products#${cat.slug}`}
                className="block pl-6 pr-3 py-2 text-sm text-body-muted border-b border-border/50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {cat.name} ({cat.productCount})
              </Link>
            ))}
            <Link href="/about" className="block px-3 py-3 rounded-md text-base font-semibold border-b border-border" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
            <Link href="/why-us" className="block px-3 py-3 rounded-md text-base font-semibold border-b border-border" onClick={() => setIsMobileMenuOpen(false)}>Why Us</Link>
            <Link href="/gallery" className="block px-3 py-3 rounded-md text-base font-semibold border-b border-border" onClick={() => setIsMobileMenuOpen(false)}>Gallery</Link>
            <Link href="/contact" className="block px-3 py-3 rounded-md text-base font-semibold border-b border-border" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
