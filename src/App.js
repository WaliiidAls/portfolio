import "./App.css";
import Hero from "./components/hero";
import Langs from "./components/languages";
import Projects from "./components/projects";
import data from "./data.json";

function App() {
  return (
    <>
      {/* HERO */}
      <Hero payload={data} />
      {/* Languages & Frameworks */}
      <Langs languages={data.languages} />
      {/* My Work */}
      <Projects />
      {/* My Achivements */}
      {/* Contact Me */}
    </>
  );
}

export default App;
