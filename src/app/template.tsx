"use client";

import { motion } from "motion/react";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.65 }}
      className="px-6 md:px-12 lg:px-16 xl:px-32"
    >
      {children}
    </motion.main>
  );
}
