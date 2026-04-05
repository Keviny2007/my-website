import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="project-item">
      <p style={{ margin: "0 0 0.2em" }}>
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-title">
          {project.title}
        </a>
        {project.tags && project.tags.length > 0 && (
          <span className="project-tags"> · {project.tags.join(", ")}</span>
        )}
      </p>
      <p style={{ margin: 0, fontSize: "0.9em", color: "#666" }}>{project.description}</p>
    </div>
  );
}
