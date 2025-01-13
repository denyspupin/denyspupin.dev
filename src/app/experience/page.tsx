import { experience } from "@/data/experiences";
import * as motion from "motion/react-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Experience",
  description:
    "Explore Denys Pupin's professional experience in software development, including roles, achievements, and technologies used.",
  keywords:
    "Denys Pupin experience, professional roles, software developer, achievements, web technologies, career history",
  openGraph: {
    title: "Professional Experience - Denys Pupin",
    description:
      "Detailed overview of Denys Pupin's career in software development, highlighting key roles and contributions.",
    images: "https://denyspupin.dev/og_image.jpg",
    url: "https://denyspupin.dev/experience",
  },
};

const Experience: React.FC = () => {
  return (
    <div className="pt-10 md:pt-16 lg:pt-24">
      <h1 className="text-3xl font-medium md:text-5xl lg:text-6xl xl:text-8xl">
        Experience
      </h1>
      <ul className="timeline mt-10 flex flex-col gap-y-8 py-10 pl-8 md:mt-10 md:gap-y-10 md:py-16 md:pl-16 lg:mt-16 lg:gap-y-20 lg:py-20 lg:pl-24 xl:max-w-[80%] 2xl:max-w-[55%]">
        {experience.jobs.map((job) => (
          <motion.li key={job.id} className="flex flex-col gap-y-5 lg:gap-y-7">
            <div>
              <h3 className="timeline-achor relative text-lg font-medium text-accent md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
                {job.role}
              </h3>
              <h4 className="font-light xl:text-lg 2xl:text-xl">
                {job.period}
              </h4>
            </div>
            <p className="lg:text-lg 2xl:text-xl">{job.companyDescription}</p>
            <p className="lg:text-lg 2xl:text-xl">{job.roleDescription}</p>
            <p className="lg:text-lg 2xl:text-xl">
              <span className="text-accent">Skills: </span>
              {job.skills.join(", ").toString()}
            </p>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default Experience;
