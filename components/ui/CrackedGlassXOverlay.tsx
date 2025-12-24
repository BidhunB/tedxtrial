import React from "react";

type CrackedGlassXOverlayProps = {
  className?: string;
};

// Simple cracked-glass X overlay:
// - No glow
// - Thin white lines
// - Very light glass blur
export const CrackedGlassXOverlay: React.FC<CrackedGlassXOverlayProps> = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-40">
      {/* Very light glass blur so background is still visible */}
      <div className="absolute inset-0 bg-slate-900/25 backdrop-blur-[3px]" />

      {/* Thin X crack, no glow */}
      <svg
        className="absolute inset-0 h-full w-full opacity-55"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {/* Main X strokes */}
        <path
          d="M 8 10 L 22 18 L 38 14 L 52 22 L 68 18 L 82 24 L 92 18
             M 92 82 L 78 74 L 62 78 L 48 70 L 32 74 L 18 68 L 8 74"
          stroke="rgba(255,255,255,0.8)"
          strokeWidth="0.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M 92 10 L 78 18 L 62 14 L 48 22 L 32 18 L 18 24 L 8 18
             M 8 82 L 22 74 L 38 78 L 52 70 L 68 74 L 82 68 L 92 74"
          stroke="rgba(255,255,255,0.8)"
          strokeWidth="0.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Small side cracks */}
        <path
          d="M 30 20 L 28 26
             M 46 22 L 44 28
             M 60 20 L 58 26
             M 74 22 L 72 28"
          stroke="rgba(255,255,255,0.7)"
          strokeWidth="0.5"
          strokeLinecap="round"
        />
        <path
          d="M 26 76 L 24 70
             M 40 78 L 38 72
             M 54 76 L 52 70
             M 68 78 L 66 72"
          stroke="rgba(255,255,255,0.7)"
          strokeWidth="0.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default CrackedGlassXOverlay;


