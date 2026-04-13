export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  image: string;
  images?: string[];
  price: string;
  priceUnit: string;
  moq: string;
  deliveryDays: string;
  specs: Record<string, string>;
  description: string;
  shortDescription: string;
  useCases: string[];
  keyFeatures: string[];
  faqs: { q: string; a: string }[];
  relatedProducts: string[];
  seo: {
    title: string;
    description: string;
    focusKeyword: string;
  };
  whatsappMessage: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  image: string;
  productCount: number;
}
