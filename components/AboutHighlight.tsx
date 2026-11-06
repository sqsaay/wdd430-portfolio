export interface Typeface {
  title: string;
  description: string;
  skills: string[];
}

interface AboutHighlightProps {
  typeface: Typeface;
}

export default function AboutHighlight({ typeface }: AboutHighlightProps) {
  return (
    <section
      className="rounded-2xl border border-violet-200 bg-white p-6 shadow-sm sm:p-8"
      aria-labelledby="learning-heading"
    >
      <p className="mb-2 text-sm font-semibold uppercase tracking-[0.16em] text-violet-700">
        Currently learning
      </p>
      <h2
        id="learning-heading"
        className="text-2xl font-bold tracking-tight text-violet-950"
      >
        {typeface.title}
      </h2>
      <p className="mt-3 max-w-2xl leading-7 text-slate-600">
        {typeface.description}
      </p>
      <ul className="mt-5 flex flex-wrap gap-2" aria-label="Learning topics">
        {typeface.skills.map((skill) => (
          <li
            key={skill}
            className="rounded-full bg-violet-100 px-3 py-1 text-sm font-medium text-violet-900"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
