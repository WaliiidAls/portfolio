// start a react component
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
// images
import boom from "../assets/boom.png";
import pfp1 from "../assets/pfp1.JPG";
import pfp2 from "../assets/pfp2.JPG";
import pfp3 from "../assets/pfp3.JPG";
import minimizetab from "../assets/minimizetab.png";
import closetab from "../assets/closetab.png";

const Hero = (props) => {
  const { nickname, name, bio } = props.payload;
  const pfps = [pfp1, pfp2, pfp3];
  const [PFP, setPFP] = useState(1);
  // update pfp every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setPFP((PFP) => (PFP + 1) % pfps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <div className="left">
        <h3>{nickname}</h3>
        <div>
          <h1>Hello, I am {name}! </h1>
          <p>{bio}</p>
        </div>
        <a href="https://github.com/waliiidals">
          GITHUB <img src={boom} alt="boom" />
        </a>
      </div>
      <motion.div
        className="right"
        initial={{ position: "relative" }}
        animate={{
          top: Math.random() * 20,
          right: Math.random() * 20,
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        children={
          <>
            <div>
              <h3>PFP</h3>
              <span>
                <img src={minimizetab} alt="minimize" />
                <img src={closetab} alt="close" />
              </span>
            </div>
            <img src={pfps[PFP]} alt="PFP" />
          </>
        }
      />
    </section>
  );
};

export default Hero;
