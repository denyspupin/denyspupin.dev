import { experience } from "@/data/experiences";

const Experience = () => {
  return (
    <div className="lg:pt-24">
      <h1 className="font-medium lg:text-6xl xl:text-8xl">Experience</h1>
      <ul className="timeline flex flex-col lg:gap-y-20 lg:py-20 lg:pl-24 xl:max-w-[90%] 2xl:max-w-[70%] lg:mt-16">
        {experience.jobs.map((job) => (
          <li key={job.id} className="flex flex-col lg:gap-y-7">
            <div>
              <h3 className="lg:text-2xl xl:text-3xl 2xl:text-4xl font-medium text-accent relative timeline-achor">
                {job.role}
              </h3>
              <h4 className="font-light xl:text-lg 2xl:text-xl">
                {job.period}
              </h4>
            </div>
            {/* <div> */}
            <p className="text-lg 2xl:text-xl">{job.companyDescription}</p>
            <p className="text-lg 2xl:text-xl">{job.roleDescription}</p>
            {/* </div> */}
            <p className="text-lg 2xl:text-xl">
              <span className="text-accent">Skills: </span>
              {job.skills.join(", ").toString()}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Experience;
