import React from "react";
import About from "./components/About";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";

const Body = () => {
  return (
    <div>
      <section id="about">
        <About />
      </section>
      <section id="project">
        <Project />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="work">
        <Work />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Body;
