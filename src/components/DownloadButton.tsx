import Link from "next/link";
import React from "react";

const DownloadButton = () => {
  return (
    <Link
      type="button"
      href="https://www.dropbox.com/scl/fi/3vbhfe1fr6x7h716s0rg4/Denys-Pupin-CV.pdf?rlkey=fenvypjvqpqus57dw4i1x3uie&e=1&st=1fzrqzi6&dl=0"
      className="border-accent text-accent inline-flex h-9 items-center rounded-lg border-2 px-8 font-bold hover:cursor-pointer"
    >
      Download CV
    </Link>
  );
};

export default DownloadButton;
