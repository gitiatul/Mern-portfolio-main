import React from "react";
import { motion } from "framer-motion";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineGithub,
  AiOutlineTwitter,
} from "react-icons/ai";
const Contact = () => {
  return (
    <div
      style={{ backgroundColor: "#000000" }}
      className="flex flex-col md:flex-row justify-around text-white p-5"
    >
      <div>
        <motion.p
          whileHover={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3, transition: { duration: 1.5 } }}
          className="text-6xl md:text-7xl  font-semibold"
        >
          <a href="https://atulcontactme.herokuapp.com/">Get in touch.</a>
        </motion.p>
        <p className="font-light font-semibold text-lg animate-pulse">
          Atul balodi
        </p>
        <p className="font-light">Email: atulbalodi6@gmail.com</p>
      </div>
      <div className="flex items-center">
        <motion.a
          whileHover={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3, transition: { duration: 1.5 } }}
          href="https://github.com/gitiatul"
          target="_blank"
        >
          <AiOutlineGithub className="social-icon" />
        </motion.a>
        <motion.a
          whileHover={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3, transition: { duration: 1.5 } }}
          href="https://www.linkedin.com/in/atul-balodi-5a3a9514a"
          target="_blank"
        >
          <AiFillLinkedin className="social-icon" />
        </motion.a>
        <motion.a
          whileHover={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3, transition: { duration: 1.5 } }}
          href="https://twitter.com/Atulbalodi2"
          target="_blank"
        >
          <AiOutlineTwitter className="social-icon" />
        </motion.a>
        <motion.a
          whileHover={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3, transition: { duration: 1.5 } }}
          href="https://www.instagram.com/atul_balodi/"
          target="_blank"
        >
          <AiFillInstagram className="social-icon" />
        </motion.a>
      </div>
    </div>
  );
};

export default Contact;
