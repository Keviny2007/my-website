import Section from "@/components/layout/Section";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </Section>
  );
}
