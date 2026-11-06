import AboutHighlight from "@/components/AboutHighlight";

export default function About() {
  return (
    <main className="site-main">
      <section className="about-intro" aria-labelledby="about-heading">
        <p className="eyebrow">A little about me</p>
        <h1 id="about-heading">Learning by building.</h1>
        <p>
          I&apos;m Samantha Salazar, and I&apos;m building my skills in web
          development through hands-on projects.
        </p>
      </section>

      <AboutHighlight
        typeface={{
          title: "React and interactive experiences",
          description:
            "I’m currently learning React and exploring how to create interactive user experiences.",
          skills: ["React", "JavaScript", "UI development"],
        }}
      />

      <section className="about-section" aria-labelledby="experience-heading">
        <h2 id="experience-heading">What I&apos;ve worked with</h2>
        <p>
          Last term, I learned Node.js while working on the api-docs project.
          I&apos;m continuing to practice with new projects and technologies.
        </p>
      </section>
    </main>
  );
}