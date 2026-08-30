import { Link, Route, Routes } from "react-router";
import "./App.css";
import Projects from "./pages/projects";
import Home from "./pages/home";

function App() {
  return (
    <div className="text-center text-dark-amethyst relative min-h-screen">
      <header className="taskbar fixed bottom-0 left-0 z-50 w-full">
        <div className="taskbar-content">
          <h2 className="m-2 text-2xl">OS</h2>

          <nav className="flex gap-3">
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
          </nav>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
