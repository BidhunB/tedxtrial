import React from "react";

const CrackedXOverlay: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      {/* Blurred cracked X */}
      <div className="
        absolute inset-0
        backdrop-blur-xl
        bg-white/10
        clip-cracked-x
      " />

      {/* Crack texture layer */}
      <div className="absolute inset-0">
        <div className="
          absolute inset-0
          bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.35)_0px,rgba(255,255,255,0.35)_1px,transparent_1px,transparent_8px)]
          mix-blend-overlay
          opacity-40
        " />
        <div className="
          absolute inset-0
          rotate-90
          bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.25)_0px,rgba(255,255,255,0.25)_1px,transparent_1px,transparent_10px)]
          mix-blend-overlay
          opacity-30
        " />
      </div>
    </div>
  );
};

export default CrackedXOverlay;
