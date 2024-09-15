import React from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { motion } from "framer-motion";
import img1 from "../assets/Programming-amico.png";

const About = () => {
  const fadeLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };
  const fadeTop = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div className="flex md:flex-row flex-col justify-around">
      <div className="md:2/5 self-center p-5">
        <motion.p
          variants={fadeLeft}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1 }}
          className="text-white text-2xl md:text-3xl font-light"
          style={{ lineHeight: "3.5rem" }}
        >
          Hi there , I'm{" "}
          <span className="underline color-2 text-5xl font-bold">Atul.</span>{" "}
          <br /> I am a Full Stack Web and App Developer.
          <br />
          <span className="color-2 font-medium">Startups</span> and{" "}
          <span className="color-2 font-medium">Technology</span> are two topics that pique my attention.
        </motion.p>

        <motion.a
          whileHover={{ scale: 1.08 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1.5 } }}
          className="flex justify-center items-center p-2 md:w-1/3 bg-primary-col text-white rounded-lg text-xl color-1 font-medium btn-1"
          download
          href={require("../assets/resume.pdf").default}
        >
          <AiOutlineDownload className="mr-3 animate-bounce" size={30} />
          Resume
        </motion.a>
      </div>
      <motion.div
        variants={fadeTop}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1 }}
        whileTap={{ scale: 0.9 }}
        className="md:2/5"
      >
        <img src={img1} width="500" alt="none"/>
      </motion.div>
    </div>
  );
};

export default About;
