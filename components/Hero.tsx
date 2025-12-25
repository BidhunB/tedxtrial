import Link from "next/link";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { ThemeManifesto } from "@/components/ThemeManifesto";
import Image from "next/image";
import { CountdownTimer } from "@/components/CountdownTimer";

export const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail: "/mq/mq1.png",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail: "/mq/mq2.png",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail: "/mq/mq3.png",
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail: "/mq/mq4.png",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail: "/mq/mq5.png",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail: "/mq/mq6.png",
  },

  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail: "/mq/mq7.png",
  },
];

const Hero = () => {
  // 1. The Parallax Header: This WILL participate in the 3D scroll effect
  const ParallaxHeader = (
    <div className="max-w-7xl relative mx-auto px-4 w-full  left-0 top-0 flex items-center justify-center pointer-events-none">
      {/* Margins/Padding to align with the parallax flow */}
      <div className="mt-40 md:mt-60 pointer-events-auto">
        <ThemeManifesto />
      </div>
    </div>
  );

  return (
    <div className="relative w-full">
      {/* 2. The Static/Stable Overlay: These elements stay 'normal' (don't rotate/fly away uncontrollably) 
                   positioning them absolutely relative to the Hero container's top viewport. 
            */}
      <div className="absolute top-0 left-0 w-full h-[100vh] z-30 pointer-events-none overflow-hidden">
        {/* BIG TYPOGRAPHY (Left) */}
        <div className="absolute left-4 top-[30%] sm:top-[45%] md:top-[55%] -translate-y-1/2 z-30 pointer-events-auto">
          <h1
            className="
                            font-black uppercase tracking-tight leading-none
                            flex flex-row
                            justify-center items-start
                            text-left
                            text-6xl sm:text-7xl md:text-[clamp(3rem,12vh,18vh)]
                            [writing-mode:vertical-lr]
                        "
          >
            <span className="text-zinc-500">DAUNT</span>
            <span className="text-[#eb0028]">LESS</span>
          </h1>
        </div>

        {/* COUNTDOWN TIMER & LOCATION (Right Side) */}
        <div className="absolute w-full md:w-auto bottom-32 md:bottom-auto md:right-0 md:top-1/2 md:-translate-y-1/2 z-30 pointer-events-none flex justify-center md:block">
          <CountdownTimer />
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-10 left-10 text-white/20 font-mono text-xs z-10 hidden md:block pointer-events-auto">
          <p>TEDxTrial Event</p>
          <p>34.0522° N, 118.2437° W</p>
        </div>
      </div>

      {/* 3. The Main Parallax Component */}
      <HeroParallax products={products} headerContent={ParallaxHeader} />
    </div>
  );
};

export default Hero;
