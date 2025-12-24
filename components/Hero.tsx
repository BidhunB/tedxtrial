import Link from "next/link";
import { Holographic3DText } from "@/components/ui/holographic-3d-text";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { ThemeManifesto } from "@/components/ThemeManifesto";
import Image from "next/image";

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
    <div
      key="parallax-header"
      className="max-w-7xl relative mx-auto px-4 w-full  left-0 top-0 flex justify-center mb-20 pointer-events-none"
    >
      {/* Margins/Padding to align with the parallax flow */}
      <div className="mt-40 pointer-events-auto">
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
        <div className="absolute left-4 top-1/2 -translate-y-1/2 z-30 pointer-events-auto">
          <h1
            className="
                            font-black uppercase tracking-tight leading-none
                            flex flex-col md:flex-row
                            justify-center items-center md:items-start
                            text-center md:text-left
                            text-[clamp(3rem,12vh,18vh)]
                            md:[writing-mode:vertical-lr]
                        "
          >
            <span className="text-zinc-500">DAUNT</span>
            <span className="text-[#eb0028]">LESS</span>
          </h1>
        </div>

        {/* HOLOGRAPHIC X (Right Side - Giant) */}
        <div className="hidden md:flex absolute right-[-5vh] top-1/2 -translate-y-1/2 z-20 pointer-events-none opacity-50">
          <Holographic3DText
            className="text-[120vh] leading-none opacity-90"
            depth={2.0}
            variant="hole"
          >
            X
          </Holographic3DText>
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
