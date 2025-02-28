"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { AnimatePresence, motion } from "motion/react";

const MoveUpButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();
    window.addEventListener(
      "scroll",
      () => {
        if (window.scrollY > 570) {
          setShowButton(true);
        } else {
          setShowButton(false);
        }
      },
      {
        signal: abortController.signal,
      },
    );
    return () => {
      abortController.abort();
    };
  }, []);

  if (!showButton) return null;

  return (
    <AnimatePresence>
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="bg-accent fixed right-10 bottom-10 inline-flex h-10 w-10 items-center justify-center rounded-full hover:cursor-pointer"
        type="button"
      >
        <FaArrowUp fill="#000" />
        <span className="sr-only">Scroll to top</span>
      </motion.button>
    </AnimatePresence>
  );
};

export default MoveUpButton;
