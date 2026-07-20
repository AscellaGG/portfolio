import "./App.css";
import { experiences } from "./data/experience";
import { education } from "./data/education";
import { Sparkles } from "lucide-react";
import GlitchText from "./components/GlitchText";

function App() {
  return (
    <div className="text-center text-lavender-blush relative min-h-screen">
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 fixed inset-0 -z-10 overflow-hidden">
        <div
          className="
        absolute
        -left-40
        -top-40
        h-[500px]
        w-[500px]
        rounded-full
        bg-powder-blush/30
        blur-[120px]
      "
        />

        <div
          className="
        absolute
        right-[-200px]
        top-[20%]
        h-[600px]
        w-[600px]
        rounded-full
        bg-pacific-cyan/30
        blur-[140px]
      "
        />

        <div
          className="
        absolute
        bottom-[-200px]
        left-[30%]
        h-[500px]
        w-[500px]
        rounded-full
        bg-muted-teal/30
        blur-[130px]
      "
        />
      </div>

      <main className="flex flex-col items-center gap-10">
        <section className="mt-10">
          {/* <h1 className="text-5xl font-bold">Otilia Schiff</h1> */}
          <div className="text-5xl font-bold">
            <GlitchText text="Otilia Schiff" />
          </div>
          <h2 className="text-xl mt-3 text-powder-blush">
            Junior .NET Developer
          </h2>
          <p className="mt-6">
            I build web applications using C#, .NET, React and TypeScript.
            Interested in clean architecture and solving practical problems.
          </p>
        </section>

        {/* WORK EXPERIENCE */}
        <section className="glass">
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
              <p className="text-muted-text">{experience.period}</p>
              <p>{experience.description}</p>
            </article>
          ))}
        </section>

        {/* EDUCATION */}
        <section className="glass">
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
              {education.credential && <p>{education.credential}</p>}
              <p className="text-muted-text">{education.period}</p>
              <ul className="mt-2">
                {education.courses?.map((course) => (
                  <li
                    key={course}
                    className="flex items-center gap-2 justify-center"
                  >
                    <Sparkles className="h-3 w-3 text-accent text-muted-teal" />
                    <span>{course}</span>
                  </li>
                ))}
              </ul>
              {education.type === "course" && "Standalone course"}
            </article>
          ))}
        </section>

        {/* CONTACT */}
        <section className="mb-15">
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
      </main>
    </div>
  );
}

export default App;
