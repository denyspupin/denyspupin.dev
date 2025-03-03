import React from "react";
import TimelineEntry from "./TimelineEntry";
import { timeline } from "@/data/timeline";

function Timeline() {
  return (
    <div className="flex flex-col gap-y-16 border-l-1 border-l-[rgba(255,255,255,0.6)] py-6">
      {timeline.map((entry) => (
        <TimelineEntry key={entry.id} entry={entry} />
      ))}
    </div>
  );
}

export default Timeline;
