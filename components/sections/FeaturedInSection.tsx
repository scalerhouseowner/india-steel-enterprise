import React from "react";

const newsLogos = [
  { name: "99 News", src: "/news/99news.png" },
  { name: "Insider News", src: "/news/Insidernews.png" },
  { name: "News Today", src: "/news/newstoday.png" },
  { name: "Punjab Kesari", src: "/news/punjabkesari.png" },
  { name: "Republic", src: "/news/republic.png" },
  { name: "Times Now", src: "/news/timesnow.png" },
  { name: "TV9", src: "/news/tv9.png" },
];

const FeaturedInSection = () => {
  return (
    <section className="py-20 bg-white border-y border-border overflow-hidden">
      <div className="w-full max-w-[1920px] mx-auto px-6 sm:px-12 lg:px-24 mb-10">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary text-center">
          Featured In
        </h2>
        <div className="w-24 h-1 bg-accent mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="flex overflow-hidden w-full group py-8 h-[140px] bg-white relative">
        {/* We use two containers animating to create a seamless loop */}
        <div className="flex flex-shrink-0 animate-marquee items-center">
          {newsLogos.map((logo, index) => (
            <div
              key={`logo-1-${index}`}
              className="mx-10 sm:mx-14 md:mx-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-110"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="h-12 sm:h-14 md:h-16 w-auto object-contain max-w-[200px]"
              />
            </div>
          ))}
        </div>

        <div className="flex flex-shrink-0 animate-marquee items-center" aria-hidden="true">
          {newsLogos.map((logo, index) => (
            <div
              key={`logo-2-${index}`}
              className="mx-10 sm:mx-14 md:mx-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-110"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="h-12 sm:h-14 md:h-16 w-auto object-contain max-w-[200px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedInSection;
