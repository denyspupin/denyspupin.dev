"use client";

import { IoCopyOutline } from "react-icons/io5";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";
import { useState } from "react";

type Props = {
  value: string;
};

const CopyButton = ({ value }: Props) => {
  const [showPopup, setShowPopup] = useState(false);

  const copyToClipboard = (value: string) => {
    navigator.clipboard.writeText(value.trim());
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 1000);
  };

  return (
    <button
      className="text-md relative mx-2"
      onClick={() => copyToClipboard(value)}
      aria-label="Copy email to clipboard"
    >
      <IoCopyOutline />
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, scale: 0, x: "-50%" }}
            animate={{ opacity: 1, scale: 1, x: "-50%" }}
            transition={{ duration: 0.08 }}
            className="text-md absolute left-[50%] top-[-35px] translate-x-[-50%] rounded-md bg-[rgb(21,21,21)] px-2 py-1 text-sm"
          >
            Copied
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
};

export default CopyButton;
