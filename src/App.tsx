import "./App.css";

function App() {
  return (
    <div className="m-5 flex-col justify-center text-center">
      <section className="mt-15">
        <h1 className="text-5xl font-bold">Otilia Schiff</h1>
        <h2 className="text-xl mt-3">Junior .NET Developer</h2>
        <p className="mt-6">
          I build web applications using C#, .NET, React and TypeScript.
          Interested in clean architecture and solving practical problems.
        </p>
      </section>

      <section className="mt-15">
        <h1 className="text-3xl font-bold">Work Experience</h1>
        
      </section>

      {/* CONTACT */}
      <section className="mt-20">
        <h2 className="text-3xl font-semibold">Contact</h2>

        <div className="mt-4 flex gap-4 justify-center">
          <a href="#" className="underline">
            GitHub
          </a>

          <a href="#" className="underline">
            LinkedIn
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;
