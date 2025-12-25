import React from "react";

// Using simple text placeholders for logos to keep it clean and robust without external assets
const partners = [
  { name: "Google", color: "text-white" },
  { name: "Microsoft", color: "text-white" },
  { name: "Amazon", color: "text-white" },
  { name: "Figma", color: "text-white" },
  { name: "Notion", color: "text-white" },
  { name: "Slack", color: "text-white" },
];

const Partners = () => {
  return (
    <section className="w-full bg-black py-20 text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
        <p className="text-[#eb0028] text-xs font-bold tracking-[0.2em] uppercase mb-12">
          Our Partners
        </p>

        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="text-2xl md:text-3xl font-bold font-serif tracking-tighter hover:text-white transition-colors cursor-pointer"
            >
              {partner.name}
            </div>
          ))}
        </div>

        <div className="mt-16">
          <a
            href="#"
            className="text-xs text-gray-500 hover:text-[#eb0028] transition-colors border-b border-transparent hover:border-[#eb0028] pb-1"
          >
            Become a Partner
          </a>
        </div>
      </div>
    </section>
  );
};

export default Partners;
