import React from "react";
import * as motion from "motion/react-client";

const Intro = () => {
  return (
    <section className="mx-auto flex max-w-[1100px] gap-y-9" id="intro">
      <div className="mx-auto flex flex-col gap-y-9 px-8 py-40 md:max-w-3/4 md:px-0 md:text-xl">
        <motion.div
          className="flex gap-x-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeIn" }}
        >
          <p>Hi, I’m Denys Pupin </p>
          <motion.span
            animate={{ rotate: -10 }}
            initial={{ rotate: 10 }}
            transition={{
              duration: 0.9,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            👋🏻
          </motion.span>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeIn" }}
        >
          I&apos;m a software engineer with 7+ years of experience building
          products across different industries. I enjoy tackling complex
          problems, working closely with stakeholders, and turning ideas into
          reality. Whether it’s designing scalable systems or refining user
          experiences, I love bringing tech and business needs together to
          create impactful solutions.
        </motion.p>
      </div>
    </section>
  );
};

export default Intro;
