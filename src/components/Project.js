import React from "react";
import { motion } from "framer-motion";
import { RiShareBoxFill, RiGithubFill } from "react-icons/ri";
import img3 from "../assets/3.png";

const Project = () => {
  return (
    <div className="h-auto my-4 w-full p-3">
      <p className="pl-4 text-white text-5xl md:text-6xl font-semibold">
        Projects
      </p>
      <hr className="hr ml-4" />

      <div className="flex flex-col md:flex-row">
        <div className="p-4 ">
          <div className="figure">
            <img
              src="https://cdn.dribbble.com/users/427642/screenshots/5031601/github-jobs-home_4x.png?compress=1&resize=1200x900"
              width="700"
              alt="none"
            />
          </div>
          <p className="text-4xl font-semibold pt-3">01</p>
          <p className="text-white text-2xl ">Job Finder App</p>
          <p className="text-white font-extralight ">
            Job Finder Application where you can easily find the Jobs using
            React.
          </p>
          <motion.a
            whileHover={{ scale: 1.08 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1.5 } }}
            className="flex text-white bg-primary-col w-16 justify-center rounded-lg h-auto p-2"
            target="_blank"
            rel="noreferrer"
          >
            <RiGithubFill size={40} />
          </motion.a>
        </div>
        <div className="p-4  margin-div ">
          <div className=" flex figure1 justify-center">
            <img
              src="https://www.bhupeshkalra.com/wp-content/uploads/2018/11/ecommerce-mobile-app.png"
              // width="500"
              style={{ height: 400 }}
              className="img-style"
              alt="none"
            />
          </div>
          <p className="text-4xl font-semibold pt-3">02</p>
          <p className="text-white text-2xl ">E-commerce App</p>
          <p className="text-white font-extralight ">
            E-commerce Application using MERN
          </p>
          <motion.a
            whileHover={{ scale: 1.08 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1.5 } }}
            className="flex text-white bg-primary-col w-16 justify-center rounded-lg h-auto p-2"
            target="_blank"
            rel="noreferrer"
          >
            <RiGithubFill size={40} />
          </motion.a>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="p-4 margin-left">
          <div className="figure">
            <img src={img3} width="1000" alt="none"/>
          </div>
          <p className="text-4xl font-semibold pt-3">03</p>
          <p className="text-white text-2xl ">DODO - Frontend Website</p>
          <p className="text-white font-extralight ">
            Frontend Website using React, Bootstrap and Tailwind CSS
          </p>
          <motion.a
            whileHover={{ scale: 1.08 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1.5 } }}
            className="flex text-white bg-primary-col items-center w-40 justify-center rounded-lg h-auto p-2"
            href="https://dodo-test.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Have a look
            <RiShareBoxFill size={25} className="ml-2" />
          </motion.a>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="p-4 margin-left">
          <div className="figure">
            <img src="https://websitelearners.com/content/uploads/2019/03/make-a-blog.png" width="700" alt="none"/>
          </div>
          <p className="text-4xl font-semibold pt-3">03</p>
          <p className="text-white text-2xl ">MultiUser Blog Website</p>
          <p className="text-white font-extralight ">
            MultiUser Blog Website using MERN
          </p>
          <motion.a
            whileHover={{ scale: 1.08 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1.5 } }}
            className="flex text-white bg-primary-col items-center w-40 justify-center rounded-lg h-auto p-2"
            target="_blank"
            rel="noreferrer"
          >
            Have a looks
            <RiShareBoxFill size={25} className="ml-2" />
          </motion.a>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-around">
        <div className="p-4 md:w-2/5 ">
          <div className="figure">
            <img
              src="https://st2.zoom.us/static/5.1.620/image/pricing/desktop.png"
              // width="700"
              alt="none"
            />
          </div>
          <p className="text-4xl font-semibold pt-3">04</p>
          <p className="text-white text-2xl ">Zoom Clone</p>
          <p className="text-white font-extralight ">
            Zoom Clone using NodeJS,ExpressJS, Socket.io and Ejs
          </p>
          <motion.a
            whileHover={{ scale: 1.08 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1.5 } }}
            className="flex text-white bg-primary-col w-16 justify-center rounded-lg h-auto p-2"
            target="_blank"
            rel="noreferrer"
          >
            <RiGithubFill size={40} />
          </motion.a>
        </div>
        <div className="p-4 md:w-2/5  ">
          <div className="figure">
            <img
              src="https://d1g9yur4m4naub.cloudfront.net/image-handler/ts/20200319081757/ri/673/picture/2020/3/shutterstock_738008380.jpg"
              width="600"
              alt="none"
            />
          </div>
          <p className="text-4xl font-semibold pt-3">05</p>
          <p className="text-white text-2xl "> Cotton Plant Disease Prediction & Cure App </p>
          <p className="text-white font-extralight ">
          Cotton Plant Disease Prediction & Cure App Using AI , python .
          </p>
          <motion.a
            whileHover={{ scale: 1.08 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1.5 } }}
            className="flex text-white bg-primary-col w-16 justify-center rounded-lg h-auto p-2"
            href="https://github.com/gitiatul/Cotton-Plant-Disease-Prediction-Cure-App-AI-in-Agriculture"
            target="_blank"
            rel="noreferrer"
          >
            <RiGithubFill size={40} />
          </motion.a>
        </div>
      </div>
      <p className="text-white p-1 font-light mt-4 text-center">
        To view more of my work, Visit{" "}
        <a
          href="https://github.com/gitiatul"
          target="_blank"
          rel="noreferrer"
          className="text-white  underline font-semibold text-xl"
        >
          Github.
        </a>
      </p>
    </div>
  );
};

export default Project;
