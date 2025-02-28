"use client";

import { type TimelineEntry } from "@/types/timeline";
import { FaAngleRight } from "react-icons/fa";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import Link from "next/link";

type TimelineEntryProps = {
  entry: TimelineEntry;
  nested?: boolean;
};

const TimelineEntry = ({ entry }: TimelineEntryProps) => {
  const [showProjects, setShowProjects] = useState(false);

  return (
    <>
      <div className="flex max-w-[900px] flex-col gap-y-4 pl-11">
        <div className="relative flex flex-col">
          <h3 className="text-2xl font-medium">
            {entry.position} •{" "}
            <Link
              href={entry.link}
              className="hover:text-accent transition-colors"
            >
              {entry.company}
            </Link>
          </h3>
          <h4 className="text-accent text-sm">{entry.timePeriod}</h4>
          <span className="bg-accent absolute top-2 left-[-53px] h-4 w-4 rounded-full"></span>
        </div>
        <p className="text-sm">{entry.companyDescription}</p>
        <p className="text-sm">{entry.jobDescription}</p>
      </div>
      {entry.projects && (
        <button
          type="button"
          className="text-accent flex items-center gap-x-3 pl-11 font-bold hover:cursor-pointer"
          onClick={() => setShowProjects(!showProjects)}
        >
          Show consultancy projects{" "}
          {showProjects ? (
            <FaAngleRight className="rotate-90 transform transition-transform" />
          ) : (
            <FaAngleRight className="transition-transform" />
          )}
        </button>
      )}
      {showProjects && entry.projects && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="flex flex-col gap-y-16 pl-11"
          >
            {entry.projects.map((project) => (
              <div
                className="flex max-w-[900px] flex-col gap-y-4 pl-11"
                key={project.id}
              >
                <div className="relative flex flex-col">
                  <h3 className="text-2xl font-medium">
                    {project.position} •{" "}
                    <Link
                      href={project.link}
                      className="hover:text-accent transition-colors"
                    >
                      {project.company}
                    </Link>
                  </h3>
                  <h4 className="text-accent text-sm">{project.timePeriod}</h4>
                  <span className="bg-accent absolute top-2 left-[-96px] h-4 w-4 rounded-full"></span>
                </div>
                <p className="text-sm">{project.companyDescription}</p>
                <p className="text-sm">{project.jobDescription}</p>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
};

export default TimelineEntry;
