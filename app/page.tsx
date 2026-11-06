import Link from "next/link";
import ProjectList from "@/components/ProjectList";

const projects = [
  {
    title: "Study OddParents Application",
    description:
      "A project I built to practice JavaScript and CSS. Take a look at the source on GitHub.",
    technologies: ["JavaScript", "CSS"],
    link: "https://github.com/sqsaay/StudyOddParents",
  },
];

export default function Home() {
  return (
    <main className="site-main">
      <section className="hero" aria-labelledby="intro-heading">
        <p className="eyebrow">Web development portfolio</p>
        <h1 id="intro-heading">Hi, I&apos;m Samantha.</h1>
        <p className="hero-copy">
          I&apos;m learning React and growing my skills one project at a time.
          Explore what I&apos;ve been working on.
        </p>
        <Link className="button-link" href="#projects">
          Explore my projects
        </Link>
      </section>

      <section id="projects" aria-labelledby="projects-heading">
        <div className="section-heading">
          <p className="eyebrow">A few things I&apos;ve worked on</p>
          <h2 id="projects-heading">Projects</h2>
          <p>Each project is a chance to learn and build something new.</p>
        </div>
        <ProjectList projects={projects} />
      </section>
    </main>
  );
}