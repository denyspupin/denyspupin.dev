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
      <div className="flex items-center gap-x-2.5 font-mono">
        <h5 className="text-lg font-semibold text-white">{experience.role}</h5>
        <span className="block h-1 w-1 rounded-full bg-[var(--muted)]"></span>
        <p className="text-lg font-light text-[var(--muted)]">
          {experience.company}
        </p>
      </div>
      <div className="flex w-full lg:max-w-[640px]">
        <p className="text-muted font-sans font-light">
          {experience.description}
        </p>
      </div>
      <TechList techStack={experience.techStack} className="pt-1" />
      <TimeLinePoint
        period={experience.period}
        className="absolute top-[3px] right-[100.85%]"
      />
    </div>
  );
};

export default ExperienceListItem;
