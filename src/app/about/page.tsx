import React from "react";

const About = () => {
  return (
    <div className="lg:pt-24 flex flex-col sm:h-[100dvh]">
      <h1 className="font-medium lg:text-6xl xl:text-8xl">About me</h1>
      <div className="font-medium lg:text-3xl xl:text-4xl flex flex-col gap-y-5 lg:max-w-[70%] xl:max-w-[75%] mt-auto mb-auto">
        <p>
          Hi there 👋🏻! I’m Denys Pupin – a software developer with over 7 years
          of experience in various business areas. I’m skilled in the full
          development cycle of web applications for B2B, B2C, and B2B2C
          projects.
        </p>
        <p>
          Working in collaboration with stakeholder and product definition teams
          provided me with solid communication and problem-solving skills.
          Experienced in working within agile development methodologies.{" "}
        </p>
      </div>
    </div>
  );
};

export default About;
