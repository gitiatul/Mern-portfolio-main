import React from "react";
import SkillComponent from "./SkillComponent";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaVuejs,
  FaAws,
  FaGithub,
} from "react-icons/fa";
import { SiNuxtdotjs, SiHeroku, SiVuetify } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMongodb, SiFirebase, SiMysql } from "react-icons/si";

const Skills = () => {
  return (
    <div className="h-auto my-4 w-full">
      <p className="pl-5 text-white text-5xl md:text-6xl font-semibold">
        Skills
      </p>
      <hr className="hr ml-5" />
      <div className="flex md:flex-row flex-col justify-around p-2">
        <div className="md:w-2/5">
          <p className="text-2xl font-medium color-2 pl-2">Frontend</p>
          <div className="flex flex-wrap">
            <SkillComponent title="VueJs" icon={<FaVuejs size={80} />} />
            <SkillComponent title="NuxtJs" icon={<SiNuxtdotjs size={80} />} />
            <SkillComponent title="ReactJS" icon={<FaReact size={80} />} />
            <SkillComponent title="HTML" icon={<FaHtml5 size={80} />} />
            <SkillComponent title="CSS" icon={<FaCss3Alt size={80} />} />
            <SkillComponent title="Vuetify" icon={<SiVuetify size={80} />} />
          </div>
        </div>
        <div className="md:w-2/5">
          <p className="text-2xl font-medium color-2 pl-2">Backend</p>
          <div className="flex">
            <SkillComponent title="NodeJS" icon={<FaNodeJs size={80} />} />
            <SkillComponent
              title="ExpressJS"
              icon={
                <i
                  className="devicon-express-original"
                  style={{ fontSize: 80 }}
                ></i>
              }
            />
          </div>
        </div>
      </div>
      <div className="flex md:flex-row flex-col justify-around p-2 my-3">
        <div className="md:w-2/5">
          <p className="text-2xl font-medium color-2 pl-2">Database</p>
          <div className="flex">
            <SkillComponent title="MongoDB" icon={<SiMongodb size={80} />} />

            <SkillComponent title="Firebase" icon={<SiFirebase size={80} />} />
            <SkillComponent title="MySQL" icon={<SiMysql size={80} />} />
          </div>
        </div>
        <div className="md:w-2/5">
          <p className="text-2xl font-medium color-2 pl-2">
            Programming Languages
          </p>
          <div className="flex">
            <SkillComponent
              title="JavaScript"
              icon={<IoLogoJavascript size={80} />}
            />

            <SkillComponent title="Python" icon={<FaPython size={80} />} />
          </div>
        </div>
        <div className="md:w-2/5">
          <p className="text-2xl font-medium color-2 pl-2">Deployment</p>
          <div className="flex">
            <SkillComponent title="AWS" icon={<FaAws size={80} />} />
            <SkillComponent title="Heroku" icon={<SiHeroku size={80} />} />
            <SkillComponent title="Github" icon={<FaGithub size={80} />} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
