import { motion } from "framer-motion";
// images
import language from "../assets/language.png";
import framework from "../assets/framework.png";
import swift from "../assets/swift.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import nodejs from "../assets/nodejs.png";
import flutter from "../assets/flutter.png";
import unity from "../assets/unity.png";

const images = {
  Swift: swift,
  JavaScript: javascript,
  "React/Native": react,
  NodeJS: nodejs,
  Flutter: flutter,
  Unity: unity,
};

const Langs = (props) => {
  const { languages } = props;
  return (
    <section className="languages">
      <motion.div
        initial={{
          filter: "drop-shadow(5px 5px 0px #ffdac6)",
          "-webkit-filter": "drop-shadow(5px 5px 0px #ffdac6)",
        }}
        animate={{
          filter: "drop-shadow(0px 0px 0px #ffdac6)",
          "-webkit-filter": "drop-shadow(0px 0px 0px #ffdac6)",
          rotate: [0, 1],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        children={
          <>
            <img src={language} alt="Language" draggable="false" />
            <img src={framework} alt="Framework" draggable="false" />
          </>
        }
      />
      <div className="container">
        {languages.map((lang) => (
          <motion.div
            className="card"
            initial={{
              position: "relative",
              top: Math.random() * 25,
              left: Math.random() * 25,
              bottom: Math.random() * 25,
              right: Math.random() * 25,
            }}
            animate={{
              top: Math.random() * 15,
              left: Math.random() * 15,
              bottom: Math.random() * 5,
              right: Math.random() * 5,
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            children={
              <>
                <img src={images[lang.name]} alt={lang.name} />
                <div>
                  <h1>{lang.name}</h1>
                  <p>{lang.desc}</p>
                </div>
              </>
            }
          />
        ))}
      </div>
    </section>
  );
};

export default Langs;
