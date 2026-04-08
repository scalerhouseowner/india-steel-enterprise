import React from "react";
import { Factory, Ruler, Truck } from "lucide-react";

const WhyUsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="w-full max-w-[1920px] mx-auto px-6 sm:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center text-primary mb-6">
              <Factory size={32} />
            </div>
            <h3 className="font-heading font-semibold text-lg text-body-dark mb-3">Direct from Manufacturer</h3>
            <p className="text-body-muted text-sm sm:text-base leading-relaxed">
              No middlemen. You buy directly from our Kanpur factory at wholesale prices, ensuring maximum value for your investment.
            </p>
          </div>

          <div className="flex flex-col items-center text-center border-t border-b md:border-t-0 md:border-b-0 md:border-l md:border-r border-border py-8 md:py-0 md:px-8">
            <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center text-primary mb-6">
              <Ruler size={32} />
            </div>
            <h3 className="font-heading font-semibold text-lg text-body-dark mb-3">Custom Dimensions</h3>
            <p className="text-body-muted text-sm sm:text-base leading-relaxed">
              Every product can be built to your exact specifications. Just share your retail layout requirements and we&apos;ll build it.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center text-primary mb-6">
              <Truck size={32} />
            </div>
            <h3 className="font-heading font-semibold text-lg text-body-dark mb-3">5–7 Day Delivery</h3>
            <p className="text-body-muted text-sm sm:text-base leading-relaxed">
              We deliver across India. Kanpur and nearby UP orders are frequently dispatched the very same day.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
