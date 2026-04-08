import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';

const MobileCTABar = () => {
  return (
    <div className="mobile-cta-bar">
      <a
        href="https://wa.me/918071793169?text=Hi%2C%20I%20want%20to%20know%20more%20about%20your%20products"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp flex items-center justify-center gap-2"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={20} />
        <span className="font-heading">WhatsApp</span>
      </a>
      <a
        href="tel:08071793169"
        className="call flex items-center justify-center gap-2 bg-primary text-white"
        aria-label="Call Now"
      >
        <Phone size={20} />
        <span className="font-heading">Call Now</span>
      </a>
    </div>
  );
};

export default MobileCTABar;
