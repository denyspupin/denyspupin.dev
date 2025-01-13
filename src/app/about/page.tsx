import getMetadataByPage from "@/helpers/getMetadataByPage";
import { Metadata } from "next";

export const metadata: Metadata = getMetadataByPage("about");

const About: React.FC = () => {
  return (
    <div className="flex h-[100dvh] flex-col pt-20 md:pt-24">
      <h1 className="text-5xl font-medium lg:text-6xl xl:text-8xl">About me</h1>
      <div className="mb-auto mt-auto flex flex-col gap-y-5 text-xl font-medium md:max-w-[80%] md:text-2xl lg:max-w-[70%] lg:text-3xl xl:max-w-[75%] xl:text-4xl">
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
