export interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  link,
}: ProjectCardProps) {
  return (
    <article className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <ul className="technology-list" aria-label={`${title} technologies`}>
        {technologies.map((technology) => (
          <li key={technology}>{technology}</li>
        ))}
      </ul>
      {link && (
        <a
          className="project-link"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          View project on GitHub
        </a>
      )}
    </article>
  );
}