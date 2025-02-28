import React from "react";
import * as motion from "motion/react-client";

const Intro = () => {
  return (
    <div className="mx-auto flex max-w-[1100px] gap-y-9" id="intro">
      <div className="mx-auto flex max-w-3/4 flex-col gap-y-9 py-40 text-xl">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeIn" }}
        >
          Hi, I’m Denys Pupin{" "}
          <motion.span
            animate={{ scale: 1.2 }}
            initial={{ scale: 1 }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            👋🏻
          </motion.span>
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeIn" }}
        >
          I'm a software engineer with 7+ years of experience building products
          across different industries. I enjoy tackling complex problems,
          working closely with stakeholders, and turning ideas into reality.
          Whether it’s designing scalable systems or refining user experiences,
          I love bringing tech and business needs together to create impactful
          solutions.
        </motion.p>
      </div>
    </div>
  );
};

export default Intro;
