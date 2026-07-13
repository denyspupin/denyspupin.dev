import { Project } from "@/types";
import ProjectListItem from "./ProjectListItem";

type Props = {
  projects: Project[];
  className?: string;
};

const ProjectList = ({ projects, className }: Props) => {
  return (
    <div className={`project-list ${className ?? ""}`}>
      {projects.map((project) => (
        <ProjectListItem key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectList;
