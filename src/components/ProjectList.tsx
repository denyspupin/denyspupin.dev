import { Project } from "@/types";
import ProjectListItem from "./ProjectListItem";
import { twMerge } from "tailwind-merge";

type Props = {
  projects: Project[];
  className?: string;
};

const ProjectList = ({ projects, className }: Props) => {
  return (
    <div className={twMerge("flex flex-col", className)}>
      {projects.map((project) => (
        <ProjectListItem key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectList;
