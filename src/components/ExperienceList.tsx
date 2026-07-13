import { Experience } from "@/types";
import ExperienceListItem from "./ExperienceListItem";

type Props = {
  experiences?: Experience[];
  className?: string;
};

const ExperienceList = ({ experiences, className }: Props) => {
  return (
    <div className={`experience-list ${className ?? ""}`}>
      {experiences &&
        experiences.map((experience) => (
          <ExperienceListItem key={experience.id} experience={experience} />
        ))}
    </div>
  );
};

export default ExperienceList;
