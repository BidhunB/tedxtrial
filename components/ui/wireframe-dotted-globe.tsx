"use client";

import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

interface RotatingEarthProps {
  width?: number;
  height?: number;
  className?: string;
}

export default function RotatingEarth({
  width = 800,
  height = 600,
  className = "",
}: RotatingEarthProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    if (!context) return;

    // Set up responsive dimensions based on actual display size
    // Set up responsive dimensions based on actual display size
    // Using let to allow updates on resize
    let rect = canvas.getBoundingClientRect();
    let containerWidth = rect.width;
    let containerHeight = rect.height;

    // Avoid 0 dimensions
    if (containerWidth === 0 || containerHeight === 0) return;

    let radius = Math.min(containerWidth, containerHeight) / 2.2;
    // Increased radius slightly (2.5 -> 2.2) to fill more space since we are cropping

    const dpr = window.devicePixelRatio || 1;
    canvas.width = containerWidth * dpr;
    canvas.height = containerHeight * dpr;
    // Don't set style.width/height here, let CSS handle it
    context.scale(dpr, dpr);

    // Create projection and path generator for Canvas
    const projection = d3
      .geoOrthographic()
      .scale(radius)
      .translate([containerWidth / 2, containerHeight / 2])
      .clipAngle(90);

    const path = d3.geoPath().projection(projection).context(context);

    const pointInPolygon = (
      point: [number, number],
      polygon: number[][]
    ): boolean => {
      const [x, y] = point;
      let inside = false;

      for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
        const [xi, yi] = polygon[i];
        const [xj, yj] = polygon[j];

        if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) {
          inside = !inside;
        }
      }

      return inside;
    };

    const pointInFeature = (point: [number, number], feature: any): boolean => {
      const geometry = feature.geometry;

      if (geometry.type === "Polygon") {
        const coordinates = geometry.coordinates;
        // Check if point is in outer ring
        if (!pointInPolygon(point, coordinates[0])) {
          return false;
        }
        // Check if point is in any hole (inner rings)
        for (let i = 1; i < coordinates.length; i++) {
          if (pointInPolygon(point, coordinates[i])) {
            return false; // Point is in a hole
          }
        }
        return true;
      } else if (geometry.type === "MultiPolygon") {
        // Check each polygon in the MultiPolygon
        for (const polygon of geometry.coordinates) {
          // Check if point is in outer ring
          if (pointInPolygon(point, polygon[0])) {
            // Check if point is in any hole
            let inHole = false;
            for (let i = 1; i < polygon.length; i++) {
              if (pointInPolygon(point, polygon[i])) {
                inHole = true;
                break;
              }
            }
            if (!inHole) {
              return true;
            }
          }
        }
        return false;
      }

      return false;
    };

    const generateDotsInPolygon = (feature: any, dotSpacing = 16) => {
      const dots: [number, number][] = [];
      const bounds = d3.geoBounds(feature);
      const [[minLng, minLat], [maxLng, maxLat]] = bounds;

      const stepSize = dotSpacing * 0.08;
      let pointsGenerated = 0;

      for (let lng = minLng; lng <= maxLng; lng += stepSize) {
        for (let lat = minLat; lat <= maxLat; lat += stepSize) {
          const point: [number, number] = [lng, lat];
          if (pointInFeature(point, feature)) {
            dots.push(point);
            pointsGenerated++;
          }
        }
      }

      console.log(
        `[v0] Generated ${pointsGenerated} points for land feature:`,
        feature.properties?.featurecla || "Land"
      );
      return dots;
    };

    interface DotData {
      lng: number;
      lat: number;
      visible: boolean;
    }

    const allDots: DotData[] = [];
    let landFeatures: any;

    // Set up rotation
    let rotation = [0, 0];
    const rotationSpeed = 0.3;

    const render = () => {
      // Clear canvas
      context.clearRect(0, 0, containerWidth, containerHeight);

      const currentScale = projection.scale();
      const scaleFactor = currentScale / radius;

      // Draw globe sphere outline (transparent fill)
      context.beginPath();
      context.arc(
        containerWidth / 2,
        containerHeight / 2,
        currentScale,
        0,
        2 * Math.PI
      );
      // No fill to keep it transparent
      context.strokeStyle = "#eb0028";
      context.lineWidth = 0.5 * scaleFactor;
      context.globalAlpha = 0.3;
      context.stroke();
      context.globalAlpha = 1;

      if (landFeatures) {
        // Draw graticule
        const graticule = d3.geoGraticule();
        context.beginPath();
        path(graticule());
        context.strokeStyle = "#eb0028"; // TED Red
        context.lineWidth = 0.5 * scaleFactor;
        context.globalAlpha = 0.15; // Very subtle
        context.stroke();
        context.globalAlpha = 1;

        // Draw land outlines
        context.beginPath();
        landFeatures.features.forEach((feature: any) => {
          path(feature);
        });
        context.strokeStyle = "#eb0028"; // TED Red
        context.lineWidth = 0.8 * scaleFactor;
        context.globalAlpha = 0.3;
        context.stroke();
        context.globalAlpha = 1;

        // Draw halftone dots
        allDots.forEach((dot) => {
          const projected = projection([dot.lng, dot.lat]);
          if (
            projected &&
            projected[0] >= 0 &&
            projected[0] <= containerWidth &&
            projected[1] >= 0 &&
            projected[1] <= containerHeight
          ) {
            context.beginPath();
            context.arc(
              projected[0],
              projected[1],
              1.2 * scaleFactor,
              0,
              2 * Math.PI
            );
            context.fillStyle = "#eb0028"; // TED Red
            context.fill();
          }
        });
      }
    };

    // Animation loop for smooth rotation
    const animate = () => {
      rotation[0] += rotationSpeed;
      projection.rotate(rotation as [number, number]);
      render(); // Render every frame
      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();
      const scaleFactor = event.deltaY > 0 ? 0.9 : 1.1;
      const currentScale = projection.scale();
      const newScale = currentScale * scaleFactor;

      // Limit zoom
      const minScale = radius * 0.5;
      const maxScale = radius * 3;

      projection.scale(Math.max(minScale, Math.min(newScale, maxScale)));
      render();
    };

    const loadWorldData = async () => {
      try {
        setIsLoading(true);

        const response = await fetch(
          "https://raw.githubusercontent.com/martynafford/natural-earth-geojson/refs/heads/master/110m/physical/ne_110m_land.json"
        );
        if (!response.ok) throw new Error("Failed to load land data");

        landFeatures = await response.json();

        // Generate dots for all land features
        let totalDots = 0;
        landFeatures.features.forEach((feature: any) => {
          const dots = generateDotsInPolygon(feature, 16);
          dots.forEach(([lng, lat]) => {
            allDots.push({ lng, lat, visible: true });
            totalDots++;
          });
        });

        console.log(
          `[v0] Total dots generated: ${totalDots} across ${landFeatures.features.length} land features`
        );

        render();
        setIsLoading(false);
      } catch (err) {
        setError("Failed to load land map data");
        setIsLoading(false);
      }
    };

    // Load the world data
    loadWorldData();

    const initGlobe = () => {
      if (!canvasRef.current) return;
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      if (!context) return;

      const rect = canvas.getBoundingClientRect();
      // Update shared variables
      containerWidth = rect.width;
      containerHeight = rect.height;

      if (containerWidth === 0 || containerHeight === 0) return;

      // Recalculate radius for new size
      radius = Math.min(containerWidth, containerHeight) / 2.2;
      const dpr = window.devicePixelRatio || 1;

      canvas.width = containerWidth * dpr;
      canvas.height = containerHeight * dpr;
      context.scale(dpr, dpr);

      projection
        .scale(radius)
        .translate([containerWidth / 2, containerHeight / 2])
        .clipAngle(90);

      path.projection(projection).context(context);
      render();
    };

    // Call initGlobe to ensure sizing is correct after mount (overriding initial if needed)
    initGlobe();

    // Handle Resize
    const handleResize = () => {
      initGlobe();
    };
    window.addEventListener("resize", handleResize);

    canvasRef.current?.addEventListener("wheel", handleWheel);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);
      canvasRef.current?.removeEventListener("wheel", handleWheel);
      window.removeEventListener("resize", handleResize);
    };
  }, [width, height]);

  if (error) {
    return (
      <div
        className={`dark flex items-center justify-center bg-card rounded-2xl p-8 ${className}`}
      >
        <div className="text-center">
          <p className="dark text-destructive font-semibold mb-2">
            Error loading Earth visualization
          </p>
          <p className="dark text-muted-foreground text-sm">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
        style={{ maxWidth: "100%", height: "auto" }}
      />
    </div>
  );
}
