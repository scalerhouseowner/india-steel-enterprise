import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppFloat = () => {
  return (
    <a
      href="https://wa.me/918071793169?text=Hi%2C%20I%20want%20to%20know%20more%20about%20your%20products"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float bg-success hover:bg-green-500 text-white"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={32} />
    </a>
  );
};

export default WhatsAppFloat;
