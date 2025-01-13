import { Job } from "@/types/experience";
import React from "react";
import * as motion from "motion/react-client";

type Props = {
  job: Job;
};
const JobPosition: React.FC<Props> = ({ job }) => {
  return (
    <motion.li className="flex flex-col gap-y-5 lg:gap-y-7">
      <div>
        <h3 className="timeline-achor relative text-lg font-medium text-accent md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
          {job.role}
        </h3>
        <h4 className="font-light xl:text-lg 2xl:text-xl">{job.period}</h4>
      </div>
      <p className="lg:text-lg 2xl:text-xl">{job.companyDescription}</p>
      <p className="lg:text-lg 2xl:text-xl">{job.roleDescription}</p>
      <p className="lg:text-lg 2xl:text-xl">
        <span className="text-accent">Skills: </span>
        {job.skills.join(", ").toString()}
      </p>
    </motion.li>
  );
};

export default JobPosition;
