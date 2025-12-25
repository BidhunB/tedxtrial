import React from "react";
import { Timeline as AceternityTimeline } from "@/components/ui/timeline";

const schedule = [
  {
    time: "09:00 AM",
    event: "Registration & Breakfast",
    desc: "Pick up your badge and fuel up for the day.",
  },
  {
    time: "10:00 AM",
    event: "Opening Ceremony",
    desc: "Welcome address and performance.",
  },
  {
    time: "10:30 AM",
    event: "Session 1: The Unknown",
    desc: "Three speakers explore the frontiers of science.",
  },
  {
    time: "12:00 PM",
    event: "Networking Lunch",
    desc: "Connect with fellow attendees and speakers.",
  },
  {
    time: "01:30 PM",
    event: "Session 2: The Challenge",
    desc: "Interactive workshops and deep dives.",
  },
  { time: "03:00 PM", event: "Coffee Break", desc: "Recharge and reflect." },
  {
    time: "03:30 PM",
    event: "Session 3: The Future",
    desc: "Closing talks and visionary ideas.",
  },
  {
    time: "05:00 PM",
    event: "Closing Reception",
    desc: "Music, drinks, and conversation.",
  },
];

const Timeline = () => {
  const data = schedule.map((item) => ({
    title: item.time,
    content: (
      <div>
        <h3 className="text-xl md:text-2xl font-bold text-white mb-2 tracking-tight">
          {item.event}
        </h3>
        <p className="text-neutral-400 text-sm md:text-base leading-relaxed mb-8">
          {item.desc}
        </p>
        {/* Optional: Add placeholder images or visual elements here if needed for specific sessions */}
      </div>
    ),
  }));

  return (
    <section className="w-full bg-[#050505] py-20 text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <p className="text-[#eb0028] text-xs font-bold tracking-[0.2em] uppercase mb-4">
            The Journey
          </p>
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight">
            Event Timeline
          </h2>
        </div>

        <AceternityTimeline data={data} />
      </div>
    </section>
  );
};

export default Timeline;
