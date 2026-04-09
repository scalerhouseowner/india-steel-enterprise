import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { MessageCircle, Phone, Truck, Box, CheckCircle2 } from "lucide-react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SpecTable from "@/components/ui/SpecTable";
import ProductCard from "@/components/ui/ProductCard";
import { products } from "@/data/products";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const product = products.find(p => p.slug === params.slug);
  if (!product) return { title: "Product Not Found" };
  
  return {
    title: product.seo.title,
    description: product.seo.description,
    openGraph: {
      title: `${product.name} | India Steel Enterprise`,
      description: product.seo.description,
      images: [product.image],
      type: "website",
    }
  };
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = products.find(p => p.slug === params.slug);
  
  if (!product) {
    notFound();
  }

  const relatedProds = products.filter(p => product.relatedProducts.includes(p.slug));

  return (
    <>
      <div className="bg-surface pb-20 pt-8 mt-16 lg:mt-20">
        <div className="w-full max-w-[1920px] mx-auto px-6 sm:px-12 lg:px-24">
          
          <Breadcrumb items={[
            { label: "Products", href: "/products" },
            { label: product.category, href: `/products#${product.categorySlug}` },
            { label: product.name }
          ]} />

          {/* Above Fold 2-Column Layout */}
          <div className="bg-white rounded-xl shadow-sm border border-border p-6 lg:p-10 flex flex-col lg:flex-row gap-10 lg:gap-16">
            
            {/* Left Col: Image */}
            <div className="lg:w-[55%]">
              <div className="relative aspect-square w-full rounded-lg overflow-hidden bg-surface border border-border group">
                <Image 
                  src={product.image} 
                  alt={product.name}
                  fill
                  priority
                  className="object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Right Col: Details & CTAs */}
            <div className="lg:w-[45%] flex flex-col">
              <span className="text-accent text-xs font-bold uppercase tracking-wider mb-2">{product.category}</span>
              <h1 className="font-heading text-2xl lg:text-3xl font-bold text-primary mb-3">{product.name}</h1>
              <p className="text-body-muted text-base mb-6">{product.shortDescription}</p>
              
              <div className="border-t border-b border-border py-4 mb-6">
                <div className="text-2xl font-bold text-accent mb-3">
                  {product.price}
                  {product.price !== "On Request" && <span className="text-sm text-body-muted font-normal"> / {product.priceUnit}</span>}
                </div>
                
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3 text-body-dark text-sm font-medium">
                    <Truck size={18} className="text-success" />
                    Delivery: <span className="text-body-muted">{product.deliveryDays}</span>
                  </div>
                  <div className="flex items-center gap-3 text-body-dark text-sm font-medium">
                    <Box size={18} className="text-primary" />
                    Min. Order: <span className="text-body-muted">{product.moq}</span>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="space-y-3 mb-6">
                <a 
                  href={`https://wa.me/918071793169?text=${encodeURIComponent(product.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="btn-bounce w-full bg-success hover:bg-green-600 text-white py-3 rounded-md font-semibold text-base flex items-center justify-center gap-3 transition-colors shadow-sm"
                >
                  <MessageCircle size={20} /> WhatsApp Inquiry
                </a>
                <a 
                  href="tel:08071793169" 
                  className="btn-bounce w-full border-2 border-accent text-accent hover:bg-accent hover:text-white py-2.5 rounded-md font-semibold text-base flex items-center justify-center gap-3 transition-colors"
                >
                  <Phone size={18} /> Call Now: 08071793169
                </a>
                <p className="text-center text-xs text-body-muted mt-1">Response within 2 hours &bull; Domestic inquiries only</p>
              </div>

              <div className="mt-auto pt-4">
                <h3 className="font-semibold text-body-dark mb-3">Quick Specifications</h3>
                <SpecTable specs={product.specs} />
              </div>
            </div>
            
          </div>

          {/* Below Fold: Tabs/Sections */}
          <div className="mt-12 bg-white rounded-xl shadow-sm border border-border p-6 lg:p-10">
            <h2 className="font-heading text-xl font-bold text-primary mb-4">Product Description</h2>
            <div className="prose max-w-none text-body-muted text-sm leading-relaxed mb-8">
              <p>{product.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-heading text-lg font-bold text-primary mb-3">Ideal For:</h3>
                <ul className="space-y-2">
                  {product.useCases.map((useCase, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-body-muted">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                      {useCase}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="font-heading text-lg font-bold text-primary mb-3">Key Features:</h3>
                <ul className="space-y-2">
                  {product.keyFeatures.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-body-muted">
                      <CheckCircle2 size={16} className="text-success shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {product.faqs && product.faqs.length > 0 && (
              <div className="mt-12 pt-8 border-t border-border">
                <h2 className="font-heading text-2xl font-bold text-primary mb-6">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  {product.faqs.map((faq, idx) => (
                    <div key={idx}>
                      <h4 className="font-semibold text-body-dark mb-2">Q: {faq.q}</h4>
                      <p className="text-body-muted">A: {faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Related Products */}
          {relatedProds.length > 0 && (
            <div className="mt-16">
              <h2 className="font-heading text-2xl font-bold text-primary mb-8">You may also need</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProds.map(p => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
      
      {/* JSON-LD Product Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": product.name,
            "description": product.seo.description,
            "image": `https://yourwebsite.com${product.image}`, // Update with actual domain
            "brand": {
              "@type": "Brand",
              "name": "India Steel Enterprise"
            },
            "offers": {
              "@type": "Offer",
              "priceCurrency": "INR",
              "price": product.price.replace(/[^0-9]/g, '') || "0",
              "availability": "https://schema.org/InStock",
              "seller": {
                "@type": "Organization",
                "name": "India Steel Enterprise"
              }
            }
          })
        }}
      />
    </>
  );
}
