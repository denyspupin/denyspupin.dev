import { Project } from "@/types";
import iconRenderer from "@/utils/iconRenderer";
import Link from "next/link";

type Props = {
  project: Project;
  className?: string;
};

const ProjectListItem = ({ project, className }: Props) => {
  return (
    <article className={`project-item ${className ?? ""}`}>
      <figure>{iconRenderer(project.logo_key, { width: 34, height: 34 })}</figure>
      <div className="project-copy">
        <div className="project-title-row">
          <h3>{project.name}</h3>
          {!project.active && <span className="project-status">In progress</span>}
        </div>
        <p>{project.description}</p>
      </div>
      <div className="project-links">
        {project.links.map((link) => (
          <Link
            key={link.type}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {iconRenderer(link.type, { width: 17, height: 17 })}
            <span>{link.label.replace(`Findmyvar on `, "")}</span>
          </Link>
        ))}
      </div>
    </article>
  );
};

export default ProjectListItem;
