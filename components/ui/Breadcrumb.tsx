import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center text-sm space-x-1 sm:space-x-2 text-body-muted flex-wrap">
        <li>
          <Link href="/" className="hover:text-accent transition-colors">Home</Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <ChevronRight size={14} className="mx-1" />
            {item.href ? (
              <Link href={item.href} className="hover:text-accent transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-body-dark font-medium" aria-current="page">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
      
      {/* JSON-LD Schema for Breadcrumbs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://yourwebsite.com/" // Usually get this from env
              },
              ...items.map((item, index) => ({
                "@type": "ListItem",
                "position": index + 2,
                "name": item.label,
                ...(item.href ? { "item": `https://yourwebsite.com${item.href}` } : {})
              }))
            ]
          })
        }}
      />
    </nav>
  );
};

export default Breadcrumb;
