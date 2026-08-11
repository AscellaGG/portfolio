import "./App.css";
import { experiences } from "./data/experience";
import { education } from "./data/education";
import { skills } from "./data/skills";
import { ExternalLink, GraduationCap } from "lucide-react";
import GlitchText from "./components/GlitchText";
import Bubbles from "./components/Bubbles";

function App() {
  return (
    <div className="text-center text-lavender-blush relative min-h-screen">
      {/* BACKGROUND */}
      <Bubbles />

      {/* MAIN */}
      <main className="">
        <div className="mt-10">
          <div className="text-5xl font-bold overflow-hidden">
            <GlitchText text="Otilia Schiff" />
          </div>
          <h2 className="text-xl mt-3 text-powder-blush">
            Junior .NET Developer
          </h2>
          <p className="mt-6 w-2/3 mx-auto text-center">
            Junior .NET Developer with experience building APIs, web
            applications, and SQL databases. Passionate about creating clean,
            reliable software and always eager to learn.
          </p>
          <h2 className="text-xl mt-6 text-powder-blush">
            Available for freelance work.{" "}
            <a
              href="mailto:otilia.schiff@gmail.com"
              className="inline-block underline"
            >
              Get in touch!
            </a>
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-10 mx-10 md:mx-20 my-15">
          <section className="flex flex-col items-center gap-10 md:w-2/3">
            {/* WORK EXPERIENCE */}
            <div className="glass">
              <h2 className="text-3xl font-bold">Work Experience</h2>

              {experiences.map((experience) => (
                <article key={experience.company} className="mt-6">
                  <div className="flex flex-col items-center md:flex-row md:justify-center md:gap-2 text-xl font-semibold">
                    <h3>{experience.role}</h3>
                    <span className="hidden md:inline">–</span>
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
            </div>

            {/* EDUCATION */}
            <div className="glass">
              <h2 className="text-3xl font-bold">Education</h2>
              <ul>
                {education.map((education) => (
                  <li key={education.institution} className="mt-6">
                    <h3 className="text-xl font-semibold flex justify-center items-center gap-2">
                      {education.program}
                      {education.type === "degree" && (
                        <GraduationCap className="text-muted-teal" />
                      )}
                    </h3>
                    <a
                      href={education.institution}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {education.institution}
                    </a>
                    {education.credential && <p>{education.credential}</p>}

                    <p className="text-muted-text">{education.period}</p>
                    <ul className="mt-2 sparkle-list list-inside">
                      {education.courses?.map((course) => (
                        <li key={course} className="">
                          <span className="pl-2">{course}</span>
                        </li>
                      ))}
                    </ul>
                    <p>{education.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="md:w-1/3 flex flex-col gap-10">
            {/* CERTIFICATES */}
            <div className="glass">
              <h2 className="text-3xl font-bold">Certificates</h2>
              <ul className="mt-4 font-semibold space-y-2">
                <li>
                  <a
                    href="/certificates/6496-CTFL-Otilia-Schiff-Cert.pdf"
                    target="_blank"
                    className="inline-flex items-center gap-1"
                    rel="noopener noreferrer"
                  >
                    <span>ISTQB Foundations</span>
                    <ExternalLink className="h-3 w-3 text-muted-teal" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://learn.microsoft.com/api/credentials/share/en-us/OtiliaSchiff-7845/6C49ADA2A3A9467E?sharingId"
                    target="_blank"
                    className="inline-flex items-center gap-1"
                    rel="noopener noreferrer"
                  >
                    <span>Azure Fundamentals</span>
                    <ExternalLink className="h-3 w-3 text-accent text-muted-teal" />
                  </a>
                </li>
                <li>
                  <a
                    href="/certificates/1764314380616.jpg"
                    target="_blank"
                    className="inline-flex items-center gap-1"
                    rel="noopener noreferrer"
                  >
                    <span>Elements of AI</span>
                    <ExternalLink className="h-3 w-3 text-accent text-muted-teal" />
                  </a>
                </li>
              </ul>
            </div>

            {/* SKILLS */}
            <div className="glass">
              <h2 className="text-3xl font-bold">Skills</h2>
              <ul>
                {skills.map((skills) => (
                  <article key={skills.category} className="mt-6">
                    <div className="flex flex-col items-center justify-center gap-2">
                      <h3 className="text-xl font-semibold">
                        {skills.category}
                      </h3>
                      <ul className="sparkle-list list-inside">
                        {skills.skills.map((skill) => (
                          <li key={skill}>
                            <span className="pl-1">{skill}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                ))}
              </ul>
            </div>

            {/* ABOUT ME */}
            <div className="glass">
              <h2 className="text-3xl font-bold mb-6">About me</h2>
              <p>
                I create structure and organization in my work, which helps me
                complete tasks efficiently while maintaining a high standard of
                quality.
                <br className="mb-2" />
                Problem-solving and creativity are my greatest motivators, and I
                look forward to further developing my skills and applying them
                in practical projects.
              </p>
            </div>
          </section>
        </div>

        {/* CONTACT */}
        <div className="mb-15">
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
        </div>
      </main>
    </div>
  );
}

export default App;
