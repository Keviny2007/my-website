import { ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-5 bg-gray-50 border border-gray-100 rounded-lg hover:border-primary/30 hover:bg-white hover:shadow-md transition-all group"
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-semibold text-text group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <ExternalLink className="h-4 w-4 text-text-muted group-hover:text-primary shrink-0 transition-colors" />
      </div>
      <p className="text-sm text-text-light mt-2 line-clamp-3">{project.description}</p>
      {project.tags && (
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags.map((tag, index) => (
            <span key={index} className="text-xs text-primary bg-primary/10 px-2 py-1 rounded-md font-medium">
              {tag}
            </span>
          ))}
        </div>
      )}
    </a>
  );
}
