"use client";

import React from "react";
import { cn } from "@/lib/utils";

type Holographic3DTextProps = {
  children: React.ReactNode;
  className?: string;
  /** Intensity of the 3D pop-out effect (0-1) */
  depth?: number;
  /** Enable animated holographic shimmer (only for holographic variant) */
  animated?: boolean;
  /**
   * Visual style variant
   * @default "holographic"
   */
  variant?: "holographic" | "hollow" | "hole";
  /** @deprecated use variant='hollow' instead */
  hollow?: boolean;
};

export const Holographic3DText: React.FC<Holographic3DTextProps> = ({
  children,
  className,
  depth = 0.3,
  animated = true,
  variant = "holographic",
  hollow,
}) => {
  // Backwards compatibility handling
  const effectiveVariant = hollow ? "hollow" : variant;

  // Configuration based on variant
  const isHolographic = effectiveVariant === "holographic";
  const isHollow = effectiveVariant === "hollow";
  const isHole = effectiveVariant === "hole";

  // For the 'hole' variant, we stack layers to create physical-looking depth (walls)
  // We'll generate a stack of spans to act as the extrusion
  const layerCount = isHole ? 16 : 1;
  const layers = Array.from({ length: layerCount });

  return (
    <div
      className={cn("relative inline-block", className)}
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d",
      }}
    >
      {/* 3D Container */}
      <div
        className="relative"
        style={{
          transformStyle: "preserve-3d",
          transform: isHole ? `rotateX(15deg) rotateY(-15deg)` : undefined,
        }}
      >
        {isHole ? (
          // HOLE VARIANT: Multi-layer extrusion
          <>
            {/* The "Walls" created by stacking layers behind */}
            {layers.map((_, i) => (
              <div
                key={i}
                className="absolute inset-0 select-none pointer-events-none font-black uppercase tracking-tight"
                aria-hidden="true"
                style={{
                  zIndex: -1 - i,
                  // Darken as we go deeper: start from dark gray to black
                  color: `hsl(0, 0%, ${15 - i}%)`,
                  transform: `translateZ(-${
                    (i + 1) * (depth * 4)
                  }px) translate(${i * 0.5}px, ${i * 0.5}px)`,
                  opacity: 1,
                  // Add a subtle stroke to smooth the walls
                  WebkitTextStroke: `1px hsl(0, 0%, ${10 - i}%)`,
                }}
              >
                {children}
              </div>
            ))}

            {/* The Bottom of the hole (deepest layer) */}
            <div
              className="absolute inset-0 select-none pointer-events-none font-black uppercase tracking-tight"
              aria-hidden="true"
              style={{
                zIndex: -50,
                color: "#2a0a0a", // Very dark red/black at bottom
                transform: `translateZ(-${
                  (layerCount + 1) * (depth * 4)
                }px) translate(${layerCount * 0.5}px, ${layerCount * 0.5}px)`,
                textShadow: "0 10px 30px rgba(0,0,0,0.8)",
              }}
            >
              {children}
            </div>

            {/* The "Surface/Face" Layer */}
            {/* For a hole, the face is the "void". 
                  We make it dark/transparent, but with an inner shadow effect using the layers behind.
                  However, to match the reference "cutout" look on a black bg, we need contrast.
                  Let's make the face transparent but with a rim. */}
            <div
              className="relative z-10 font-black uppercase tracking-tight"
              style={{
                color: "transparent", // The void
                WebkitTextStroke: "1px rgba(255, 255, 255, 0.3)", // Subtle white rim
                // We rely on the layers behind to provide the "fill" of the hole
              }}
            >
              {children}
            </div>
          </>
        ) : (
          // HOLOGRAPHIC / HOLLOW VARIANTS (Original Logic)
          <>
            <div
              className={cn(
                "relative inline-block font-black uppercase tracking-tight",
                isHolographic && animated && "animate-holographic-shimmer"
              )}
              style={{
                ...(isHollow
                  ? {
                      WebkitTextStroke: "2px rgba(255, 255, 255, 0.8)",
                      color: "transparent",
                    }
                  : {
                      background: `
                  linear-gradient(135deg, 
                    #ff006e 0%, 
                    #8338ec 20%, 
                    #3a86ff 40%, 
                    #06ffa5 60%, 
                    #ffbe0b 80%, 
                    #ff006e 100%
                  )
                `,
                      backgroundSize: "200% 200%",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      filter: "brightness(1.2) saturate(1.3)",
                    }),
                transform: `translateZ(${depth * 20}px)`,
                textShadow: isHollow
                  ? `
                  0 0 ${depth * 10}px rgba(255, 255, 255, 0.4),
                  ${depth * 2}px ${depth * 2}px ${
                      depth * 4
                    }px rgba(255, 0, 110, 0.3)
                `
                  : `
                  ${depth * 2}px ${depth * 2}px ${
                      depth * 4
                    }px rgba(255, 0, 110, 0.5),
                  ${depth * 4}px ${depth * 4}px ${
                      depth * 8
                    }px rgba(131, 56, 236, 0.4),
                  ${depth * 6}px ${depth * 6}px ${
                      depth * 12
                    }px rgba(58, 134, 255, 0.3),
                  0 0 ${depth * 30}px rgba(6, 255, 165, 0.2)
                `,
              }}
            >
              {children}
            </div>

            {/* Depth/Glow Layers for Holographic */}
            {!isHollow && (
              <>
                <div
                  className="absolute inset-0 inline-block font-black uppercase tracking-tight pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255,0,110,0.3), rgba(131,56,236,0.3))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    transform: `translateZ(${depth * -10}px) translate(${
                      depth * 2
                    }px, ${depth * 2}px)`,
                    filter: "blur(2px)",
                    opacity: 0.6,
                  }}
                  aria-hidden="true"
                >
                  {children}
                </div>
                <div
                  className="absolute inset-0 inline-block font-black uppercase tracking-tight pointer-events-none"
                  style={{
                    background: `
                    radial-gradient(circle at 30% 30%, rgba(255, 0, 110, 0.4), transparent 50%),
                    radial-gradient(circle at 70% 70%, rgba(6, 255, 165, 0.4), transparent 50%)
                  `,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    transform: `translateZ(${depth * 15}px)`,
                    filter: "blur(4px)",
                    opacity: 0.8,
                  }}
                  aria-hidden="true"
                >
                  {children}
                </div>
              </>
            )}

            {isHollow && (
              <div
                className="absolute inset-0 inline-block font-black uppercase tracking-tight pointer-events-none"
                style={{
                  color: "transparent",
                  WebkitTextStroke: "2px rgba(255, 0, 110, 0.2)",
                  transform: `translateZ(${depth * -10}px)`,
                  filter: "blur(2px)",
                }}
                aria-hidden="true"
              >
                {children}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Holographic3DText;
