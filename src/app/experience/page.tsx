import JobPosition from "@/components/JobPosition";
import { experience } from "@/data/experience";
import getMetadataByPage from "@/helpers/getMetadataByPage";
import { Job } from "@/types/experience";
import { Metadata } from "next";

export const metadata: Metadata = getMetadataByPage("experience");
const Experience: React.FC = () => {
  return (
    <div className="pt-10 md:pt-16 lg:pt-24">
      <h1 className="text-3xl font-medium md:text-5xl lg:text-6xl xl:text-8xl">
        Experience
      </h1>
      <ul className="timeline mt-10 flex flex-col gap-y-8 py-10 pl-8 md:mt-10 md:gap-y-10 md:py-16 md:pl-16 lg:mt-16 lg:gap-y-20 lg:py-20 lg:pl-24 xl:max-w-[80%] 2xl:max-w-[55%]">
        {experience.jobs.map((job: Job) => (
          <JobPosition key={job.id} job={job} />
        ))}
      </ul>
    </div>
  );
};

export default Experience;
