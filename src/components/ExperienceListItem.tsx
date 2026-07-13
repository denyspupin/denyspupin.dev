import { Experience } from "@/types";
import TechList from "./TechList";

type Props = {
  experience: Experience;
  className?: string;
};

const ExperienceListItem = ({ experience, className }: Props) => {
  return (
    <article className={`experience-item ${className ?? ""}`}>
      <p className="experience-period">{experience.period}</p>
      <div className="experience-title">
        <h3>{experience.role}</h3>
        <p>{experience.company}</p>
      </div>
      <p className="experience-description">{experience.description}</p>
      <TechList techStack={experience.techStack} />
    </article>
  );
};

export default ExperienceListItem;
