import GlitchText from "../components/GlitchText";
import WindowButtons from "../components/WindowButtons";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <main>
      <div className="text-5xl mt-10">
        <GlitchText text="Projects" />
      </div>
      <div className="flex flex-col md:flex-row gap-10 mx-10 md:mx-20 my-15">
        {projects.map((project) => (
          <div className="window md:w-1/2">
            <div className="window-header">
              <h2>{project.title}</h2>
              <WindowButtons />
            </div>
            <div className="window-body mt-5">{project.description}</div>
            <button className="button mb-5">
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
