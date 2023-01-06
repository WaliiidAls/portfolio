import { motion } from "framer-motion";
import data from "../data.json";
// images
import myworksign from "../assets/myworksign.png";
import minimizetab from "../assets/minimizetab.png";
import closetab from "../assets/closetab.png";

const Projects = () => {
  const { projects } = data;
  return (
    <section className="projects">
      <motion.img
        initial={{
          filter: "drop-shadow(10px 10px 0px #7C6A0A)",
          "-webkit-filter": "drop-shadow(10px 10px 0px #7C6A0A)",
        }}
        animate={{
          filter: "drop-shadow(5px 5px 0px #7C6A0A)",
          "-webkit-filter": "drop-shadow(5px 5px 0px #7C6A0A)",
          rotate: [0, 1],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        src={myworksign}
        alt="My Work"
      />
      <div className="container">
        {projects.map((project) => (
          <div className="card">
            <div>
              <a href={project.url}>
                <h3>{project.name}</h3>
              </a>
              <span>
                <img src={minimizetab} alt="minimize" />
                <img src={closetab} alt="close" />
              </span>
            </div>
            <iframe src={project.url} frameBorder={0} zoom="0.60"></iframe>
          </div>
        ))}
      </div>
      <h1>AND MORE...</h1>
    </section>
  );
};
export default Projects;
