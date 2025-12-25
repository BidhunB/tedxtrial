import React from "react";

const AboutStats = () => {
  return (
    <section className="relative w-full py-20 bg-black text-white px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center">
        {/* Red Title */}
        <p className="text-[#eb0028] font-medium tracking-widest mb-4 uppercase text-sm">
          The Theme
        </p>

        {/* Main Headline */}
        <h2 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-6">
          FEAR IS NOT THE <br />
          ENEMY. <br />
          <span className="text-[#eb0028]">STAGNATION IS.</span>
        </h2>

        {/* Description */}
        <p className="max-w-2xl text-gray-400 text-sm md:text-base mb-20 leading-relaxed font-light">
          In a world obsessed with certainty, true growth lies in the unknown.
          To be Dauntless is not to be devoid of fear, but to act in spite of
          it. Join us as we explore the courage to disrupt the ordinary.
        </p>

        {/* Center Symbol */}
        <div className="mb-20">
          <div className="w-16 h-16 rounded-full border border-[#eb0028]/30 flex items-center justify-center relative">
            <span className="text-[#eb0028] text-2xl font-light">Ø</span>
            {/* Ping animation effect */}
            <div className="absolute inset-0 rounded-full border border-[#eb0028]/50 animate-ping opacity-20"></div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-4xl mx-auto">
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-bold text-[#eb0028] mb-2">
              12+
            </span>
            <span className="text-xs uppercase tracking-widest text-gray-500">
              Speakers
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-bold text-[#eb0028] mb-2">
              600+
            </span>
            <span className="text-xs uppercase tracking-widest text-gray-500">
              Attendees
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-bold text-[#eb0028] mb-2">
              1
            </span>
            <span className="text-xs uppercase tracking-widest text-gray-500">
              Transformative Day
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStats;
