import { Tech } from "@/types";
import iconRenderer from "@/utils/iconRenderer";

type Props = {
  techStack: Array<Tech>;
  className?: string;
};

const TechList = ({ techStack, className }: Props) => {
  return (
    <ul
      className={`tech-list ${className ?? ""}`}
    >
      {techStack.map((tech) => (
        <li key={tech} title={tech}>
          {iconRenderer(tech, { width: 20, height: 20 })}
        </li>
      ))}
    </ul>
  );
};

export default TechList;
