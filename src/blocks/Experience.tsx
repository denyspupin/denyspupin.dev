import Timeline from "@/components/Timeline";
import React from "react";

const Experience = () => {
  return (
    <section
      className="mx-auto mb-9 flex max-w-[1100px] flex-col gap-y-9 px-8 md:px-0"
      id="experience"
    >
      <h2 className="text-2xl font-medium md:text-3xl">
        Professional Experience
      </h2>
      <Timeline />
    </section>
  );
};

export default Experience;
