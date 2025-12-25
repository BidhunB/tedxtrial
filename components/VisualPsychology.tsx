import React from "react";

const VisualPsychology = () => {
  return (
    <section className="w-full bg-[#050505] py-24 text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <p className="text-[#eb0028] text-xs font-bold tracking-[0.2em] uppercase mb-4">
            Our Impact
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-wide uppercase">
            Visual Psychology
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Card 1: Idea Balance */}
          <div className="bg-[#0a0a0a] border border-white/5 p-8 rounded-xl relative overflow-hidden group hover:border-[#eb0028]/30 transition-colors duration-500">
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-8 text-center">
              Idea Balance
            </h3>

            <div className="flex justify-center items-center py-8">
              {/* CSS-only donut chart approximation */}
              <div className="relative w-40 h-40 rounded-full border-[16px] border-[#eb0028] border-r-white/20 border-b-white/20 rotate-45 transform transition-transform duration-1000 group-hover:rotate-90">
                {/* Inner hole */}
                <div className="absolute inset-0 m-auto w-full h-full rounded-full border-[2px] border-black"></div>
              </div>
            </div>

            <div className="flex justify-center gap-6 mt-8 text-xs text-gray-500 uppercase tracking-widest">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#eb0028]"></div>
                <span>Social</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white/20"></div>
                <span>Global</span>
              </div>
            </div>
            <p className="text-center text-[10px] text-gray-600 mt-6 max-w-xs mx-auto">
              Representing the diverse spectrum of ideas shared at our event.
            </p>
          </div>

          {/* Card 2: Narrative Intensity */}
          <div className="bg-[#0a0a0a] border border-white/5 p-8 rounded-xl relative overflow-hidden group hover:border-[#eb0028]/30 transition-colors duration-500">
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-8 text-center">
              Narrative Intensity
            </h3>

            <div className="relative h-48 w-full flex items-end justify-between px-4 gap-2">
              {/* Fake Bar/Line Graph */}
              <div className="w-full h-[30%] bg-[#eb0028]/20 rounded-t-sm relative group-hover:h-[40%] transition-all duration-700"></div>
              <div className="w-full h-[50%] bg-[#eb0028]/40 rounded-t-sm relative group-hover:h-[60%] transition-all duration-700 delay-75"></div>
              <div className="w-full h-[40%] bg-[#eb0028]/30 rounded-t-sm relative group-hover:h-[30%] transition-all duration-700 delay-100"></div>
              <div className="w-full h-[70%] bg-[#eb0028]/60 rounded-t-sm relative group-hover:h-[80%] transition-all duration-700 delay-150"></div>
              <div className="w-full h-[60%] bg-[#eb0028]/50 rounded-t-sm relative group-hover:h-[50%] transition-all duration-700 delay-200"></div>
              <div className="w-full h-[90%] bg-[#eb0028] rounded-t-sm relative group-hover:h-[85%] transition-all duration-700 delay-300"></div>
              <div className="w-full h-[40%] bg-[#eb0028]/20 rounded-t-sm relative group-hover:h-[45%] transition-all duration-700 delay-300"></div>

              {/* SVG Line Overlay */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 120 C 40 100, 80 80, 120 100 S 200 60, 240 40 S 320 80, 360 20"
                  stroke="white"
                  strokeWidth="2"
                  strokeOpacity="0.2"
                  fill="none"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
            </div>

            <p className="text-center text-[10px] text-gray-600 mt-8 max-w-xs mx-auto">
              The rising tide of emotional resonance throughout the conference.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisualPsychology;
