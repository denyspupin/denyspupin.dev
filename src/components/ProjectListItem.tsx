import { Project } from "@/types";
import iconRenderer from "@/utils/iconRenderer";
import Label from "./ui/label";
import { twMerge } from "tailwind-merge";
import Link from "next/link";

type Props = {
  project: Project;
  className?: string;
};

const ProjectListItem = ({ project, className }: Props) => {
  return (
    <div className={twMerge("flex flex-col gap-y-2", className)}>
      <div className="flex items-center justify-start gap-x-2.5">
        <figure>{iconRenderer("findmyvar", { width: 32, height: 32 })}</figure>
        <h6 className="font-mono text-xl font-medium text-white">
          {project.name}
        </h6>
        {!project.active && <Label>coming soon</Label>}
        {project.links.length > 0 &&
          project.links.map((link) => (
            <Link
              key={link.type}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted px-0.5 py-0.5 transition-colors hover:text-white focus-visible:rounded-sm focus-visible:text-white focus-visible:outline-1 focus-visible:outline-offset-0 focus-visible:outline-white focus-visible:outline-dashed"
            >
              {iconRenderer(link.type, { width: 18, height: 18 })}
            </Link>
          ))}
      </div>
      <div>
        <p className="text-muted font-sans font-light">{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectListItem;
