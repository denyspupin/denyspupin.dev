import { Experience } from "@/types";
import { twMerge } from "tailwind-merge";
import TechList from "./TechList";
import TimeLinePoint from "./TimeLinePoint";

type Props = {
  experience: Experience;
  className?: string;
};

const ExperienceListItem = ({ experience, className }: Props) => {
  return (
    <div className={twMerge("relative flex flex-col gap-y-3", className)}>
      <div className="flex flex-col gap-x-2.5 font-mono md:flex-row md:items-center">
        <h5 className="text-lg font-semibold text-white">{experience.role}</h5>
        <span className="hidden h-1 w-1 rounded-full bg-(--muted) md:block"></span>
        <p className="text-sm font-light text-(--muted) md:text-lg">
          {experience.company}
        </p>
      </div>
      <div className="flex w-full lg:max-w-160">
        <p className="text-muted font-sans font-light">
          {experience.description}
        </p>
      </div>
      <TechList techStack={experience.techStack} className="pt-1" />
      <TimeLinePoint
        period={experience.period}
        className="absolute -top-8 -left-6.75 flex-row-reverse lg:top-0.75 lg:right-[100.85%] lg:left-auto lg:flex-row"
      />
    </div>
  );
};

export default ExperienceListItem;
