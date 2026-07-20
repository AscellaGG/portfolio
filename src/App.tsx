import "./App.css";
import { experiences } from "./data/experience";
import { education } from "./data/education";

function App() {
  return (
    <div className="m-5 flex-col justify-center text-center text-lavender-blush">
      <section className="mt-15">
        <h1 className="text-5xl font-bold">Otilia Schiff</h1>
        <h2 className="text-xl mt-3 text-powder-blush">
          Junior .NET Developer
        </h2>
        <p className="mt-6">
          I build web applications using C#, .NET, React and TypeScript.
          Interested in clean architecture and solving practical problems.
        </p>
      </section>

      {/* WORK EXPERIENCE */}
      <section className="mt-15 mx-30">
        <h2 className="text-3xl font-bold">Work Experience</h2>

        {experiences.map((experience) => (
          <article key={experience.company} className="mt-6">
            <div className="flex flex-row items-center justify-center gap-2 text-xl font-bold">
              <h3>{experience.role}</h3>
              <p> - </p>
              <a
                href={experience.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {experience.company}
              </a>
            </div>
            <p className="text-powder-blush">{experience.period}</p>
            <p>{experience.description}</p>
          </article>
        ))}
      </section>

      {/* EDUCATION */}
      <section className="mt-15 mx-30">
        <h2 className="text-3xl font-bold">Education</h2>

        {education.map((education) => (
          <article key={education.institution} className="mt-6">
            <h3 className="text-xl font-bold">{education.program}</h3>
            <a
              href={education.institution}
              target="_blank"
              rel="noopener noreferrer"
            >
              {education.institution}
            </a>
            <p className="text-powder-blush">{education.period}</p>
          </article>
        ))}
      </section>

      {/* CONTACT */}
      <section className="mt-15 mb-15">
        <h2 className="text-3xl font-semibold">Contact</h2>
        <div className="mt-4 flex gap-4 justify-center">
          <a
            href="https://github.com/AscellaGG"
            target="_blank"
            className="underline"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/otilia-schiff-93b3141a2/"
            target="_blank"
            className="underline"
          >
            LinkedIn
          </a>
        </div>
        <a
          href="mailto:otilia.schiff@gmail.com"
          className="mt-4 inline-block underline"
        >
          otilia.schiff@gmail.com
        </a>
      </section>
    </div>
  );
}

export default App;
