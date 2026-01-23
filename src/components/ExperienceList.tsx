import { Experience } from "@/types";
import ExperienceListItem from "./ExperienceListItem";
import { twMerge } from "tailwind-merge";

type Props = {
  experiences?: Experience[];
  className?: string;
};

const ExperienceList = ({ experiences, className }: Props) => {
  return (
    <div className={twMerge("flex w-full flex-col gap-y-16", className)}>
      {experiences &&
        experiences.map((experience) => (
          <ExperienceListItem key={experience.id} experience={experience} />
        ))}
    </div>
  );
};

export default ExperienceList;
