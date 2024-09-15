import React from "react";

const Work = () => {
  return (
    <div className="h-auto my-4 w-full">
      <p className="pl-5 text-white text-5xl md:text-6xl font-semibold">Work</p>
      <hr className="hr ml-5" />

      <div className="flex md:flex-row flex-col justify-around">
        <div className="md:w-2/5 p-3 primary-col ">
          <p className="font-semibold text-2xl md:text-3xl">
            Senior Software developer
          </p>
          <p className="text-lg"> Barnes & Noble </p>
          <p className="color-3">02/2023 - Present</p>
          <div className="text-sm text-white">
            <p>
              • Improved web application performance by 50% by successfully
              migrating Nuxt 2 to Nuxt 3, resulting in faster user experience
              and increased customer satisfaction.
            </p>
            <p>
              • Enhanced website accessibility for disabled users by resolving
              around 200 ADA issues, leading to a more inclusive user experience
              and broader customer reach.
            </p>
            <p>
              • Enhanced the performance of the bookstore application,
              increasing website loading speed by 30%,Managed a team of 5
              developers, overseeing the creation of the entire website
              architecture.
            </p>
          </div>
        </div>
        <div className="md:w-2/5 p-3 primary-col ">
          <p className="font-semibold text-2xl md:text-3xl">
            Senior Software developer
          </p>
          <p className="text-lg"> Sopra Steria</p>
          <p className="color-3">08/2022 - 01/2023</p>
          <div className="text-sm text-white">
            <p>
              • Migrated the WARMS Litrox project to a Nuxt.js application,
              improving client experience and reducing page load times by 40%.
              Utilized Vue.js, Nuxt.js, Tailwind, and Jest to modernize the
              application and enhance performance. Enhanced user interface
              responsiveness and streamlined front-end workflows, leading to a
              25% increase in user engagement.
            </p>
          </div>
        </div>
        <div className="md:w-2/5 p-3 primary-col ">
          <p className="font-semibold text-2xl md:text-3xl">
            Senior Software developer
          </p>
          <p className="text-lg"> IT-34(Freelancing)</p>
          <p className="color-3"> 09/2021 - 06/2022</p>
          <div className="text-sm text-white">
            <p>
              • Developed a construction 3D model website using Three.js,
              improving user experience and rendering speed by 35%. Gathered
              requirements from clients to ensure the final product met their
              specifications and needs. Streamlined the development process,
              reducing project delivery time by 20%.
            </p>
          </div>
        </div>
        <div className="md:w-2/5 p-3 primary-col ">
          <p className="font-semibold text-2xl md:text-3xl">
            Associate Analyst
          </p>
          <p className="text-lg">WIPRO</p>
          <p className="color-3"> 11/2019 - 09/2021</p>
          <div className="text-sm text-white">
            <p>
              • Experienced in developing and maintain overall test methodology
              and strategy
            </p>
            <p>
              • Proficient in working as an application developer involving:
              -software development, Regression and Integration Testing,
              Debugging and finding defects
            </p>
            <p>
              • Developed a SAML and Auth2.0 Nodejs Serverless app with AWS
              secret manager and deployed with AWS lambda serverless
            </p>
          </div>
        </div>
        <div className="md:w-2/5  p-3 primary-col ">
          <p className="font-semibold text-2xl md:text-3xl">Mentor</p>
          <p className="text-lg">GNIOT</p>
          <p className="color-3">01/2019 - 07/2019</p>
          <div className="text-sm text-white">
            <p>- Stack mentor .</p>
            <p>- Taught students about Git, Github, Python</p>
            <p>
              - Full Stack web application using React in Frontend and Node.js,
              Express.js in Backend
            </p>
            <p>- Got a certificate of appreciation.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
