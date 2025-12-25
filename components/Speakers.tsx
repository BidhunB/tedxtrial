import React from "react";
import Image from "next/image";

const speakersData = [
  {
    name: "Dr. Sarah Chen",
    title: "Neuroscientist",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=688&auto=format&fit=crop",
    topic: "The Neural Frontiers",
  },
  {
    name: "Marcus Thorne",
    title: "Ethical Hacker",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=687&auto=format&fit=crop",
    topic: "Digital Dauntless",
  },
  {
    name: "Elena Rodriguez",
    title: "Urban Architect",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=764&auto=format&fit=crop",
    topic: "Cities of Tomorrow",
  },
  {
    name: "David Kim",
    title: "AI Philosopher",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=687&auto=format&fit=crop",
    topic: "Ghost in the Machine",
  },
  {
    name: "Aisha Patel",
    title: "Climate Innovator",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=687&auto=format&fit=crop",
    topic: "Reversing the Clock",
  },
  {
    name: "James Wilson",
    title: "Exploration Geologist",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=687&auto=format&fit=crop",
    topic: "Beneath the Surface",
  },
];

const Speakers = () => {
  return (
    <section className="relative w-full bg-black py-24 text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="text-[#eb0028] text-xs font-bold tracking-[0.2em] uppercase mb-4">
            The Voices
          </p>
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight">
            Meet Our Speakers
          </h2>
        </div>

        {/* Speakers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakersData.map((speaker, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-md border border-white/10 bg-neutral-900/50"
            >
              {/* Image Container */}
              <div className="aspect-[3/4] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 ease-out relative">
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 z-10"></div>

                {/* Placeholder for Next.js Image - using div for now if config not set, but trying Image first */}
                {/* Note: In a real scenario, you need to configure domains in next.config.js for external images. 
                             I'll use a standard img tag for simplicity to avoid config errors in this environment unless I can fix config. 
                             Using standard img for robustness here. */}
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 w-full p-6 z-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-[#eb0028] text-xs font-bold tracking-wider uppercase mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {speaker.topic}
                </p>
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#eb0028] transition-colors">
                  {speaker.name}
                </h3>
                <p className="text-sm text-gray-400">{speaker.title}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="border border-white/20 px-8 py-3 text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300">
            View All Speakers
          </button>
        </div>
      </div>
    </section>
  );
};

export default Speakers;
