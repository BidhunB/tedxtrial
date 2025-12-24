"use client";

import React from "react";
import { MoveRight, Star } from "lucide-react";
import { motion } from "framer-motion";

export const ThemeManifesto = () => {
  return (
    <div className="relative z-30 flex flex-col items-start justify-center text-left mx-auto px-4 left-4 pointer-events-auto">
      {/* Top Marquee Banner */}
      <div className="w-screen relative left-[50%] -translate-x-[50%] overflow-hidden bg-zinc-900/80 backdrop-blur-sm py-2 mb-8 border-y border-white/10">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap gap-8 text-white font-bold text-sm tracking-widest  uppercase"
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <React.Fragment key={i}>
              <span>UPCOMING EVENT</span>
              <Star className="w-4 h-4 text-red-600 fill-red-600" />
              <span className="text-zinc-500">TEDxCCET</span>
              <Star className="w-4 h-4 text-red-600 fill-red-600" />
              <span>OCTOBER 15</span>
              <Star className="w-4 h-4 text-red-600 fill-red-600" />
            </React.Fragment>
          ))}
        </motion.div>
      </div>

      {/* Label */}
      <div className="flex items-center justify-start gap-4 mb-4">
        <span className="h-[1px] w-12 bg-red-600"></span>
        <span className="text-red-600 font-bold tracking-[0.2em] text-sm uppercase">
          The Theme
        </span>
        <span className="h-[1px] w-12 bg-red-600"></span>
      </div>

      {/* Title */}
      <h2 className="text-8xl md:text-9xl font-black text-white tracking-tighter mb-8 uppercase">
        Dauntless
      </h2>

      {/* Paragraph with Icon */}
      <div className="relative mb-12 max-w-2xl text-left">
        <p className="text-zinc-400 text-lg md:text-xl leading-relaxed">
          To be dauntless is not the absence of fear, but the triumph over it.
          Join us as we explore ideas that challenge the status quo and inspire
          courageous action.
        </p>
      </div>

      {/* Button */}
      <button className="group relative px-8 py-3 rounded-full border border-white/20 hover:border-red-600 bg-transparent transition-colors duration-300">
        <span className="flex items-center gap-2 text-white font-medium tracking-wide group-hover:text-red-500 transition-colors">
          Read the Manifesto
          <MoveRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </span>
      </button>
    </div>
  );
};
