"use client";

import React, { useEffect, useState } from "react";
import { MapPin } from "lucide-react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const CountdownTimer = () => {
  const calculateTimeLeft = (): TimeLeft => {
    const now = new Date();

    // Target: february 15
    let target = new Date(now.getFullYear(), 2, 15);

    if (now > target) {
      target = new Date(now.getFullYear() + 1, 2, 15);
    }

    const diff = target.getTime() - now.getTime();

    return diff > 0
      ? {
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        }
      : { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  /*
   * Fix for Hydration Error:
   * Initialize with zeros so server and client match initially.
   * The actual time is calculated only after mount (client-side).
   */
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Calculate immediately on mount
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <span className="font-space font-bold text-3xl sm:text-5xl md:text-[clamp(3.5rem,6vw,5.5rem)] text-white leading-none tracking-[-0.02em] tabular-nums">
        {value.toString().padStart(2, "0")}
      </span>
      <span className="font-inter text-xs tracking-[0.2em] uppercase text-[#eb0028] mt-2">
        {label}
      </span>
    </div>
  );

  return (
    <section className="flex flex-col items-center text-center md:items-end md:text-right md:mr-16 z-30">
      {/* Label */}
      <p className="font-inter text-[10px] md:text-xs tracking-[0.25em] uppercase text-white/70 mb-4">
        Event Begins In
      </p>

      {/* Countdown */}
      <div className="flex items-start gap-3 md:gap-6 mb-6">
        <TimeUnit value={timeLeft.days} label="Days" />
        <span className="font-space text-3xl md:text-5xl text-white/50 mt-2 md:mt-4">
          :
        </span>
        <TimeUnit value={timeLeft.hours} label="Hours" />
        <span className="font-space text-3xl md:text-5xl text-white/50 mt-2 md:mt-4">
          :
        </span>
        <TimeUnit value={timeLeft.minutes} label="Mins" />
        <span className="font-space text-3xl md:text-5xl text-white/50 mt-2 md:mt-4">
          :
        </span>
        <TimeUnit value={timeLeft.seconds} label="Secs" />
      </div>

      {/* Location */}
      <div className="flex items-center gap-3 group">
        <div className="text-right">
          <p className="font-space font-semibold tracking-wide text-white">
            PUNNAPRA, KERALA
          </p>
          <p className="font-inter text-sm text-white/60">
            Carmel College of Engineering & Technology
          </p>
        </div>

        <div className="p-3 rounded-full bg-[#eb0028] text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
          <MapPin className="w-5 h-5" />
        </div>
      </div>
    </section>
  );
};
