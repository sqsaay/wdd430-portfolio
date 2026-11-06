import ProjectCard, { type ProjectCardProps } from "./ProjectCard";

interface ProjectListProps {
  projects: ProjectCardProps[];
}

export default function ProjectList({ projects }: ProjectListProps) {
  return (
    <div className="project-grid">
      {projects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </div>
  );
}