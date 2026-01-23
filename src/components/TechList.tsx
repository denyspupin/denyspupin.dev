import { Tech } from "@/types";
import iconRenderer from "@/utils/iconRenderer";
import { twMerge } from "tailwind-merge";

type Props = {
  techStack: Array<Tech>;
  className?: string;
};

const TechList = ({ techStack, className }: Props) => {
  return (
    <ul
      className={twMerge("flex items-center justify-start gap-x-3", className)}
    >
      {techStack.map((tech) => (
        <li key={tech}>{iconRenderer(tech, { width: 20, height: 20 })}</li>
      ))}
    </ul>
  );
};

export default TechList;
