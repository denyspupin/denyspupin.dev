import DownloadButton from "@/components/DownloadButton";
import Link from "next/link";
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

function Contact() {
  return (
    <footer className="bg-secondary py-9" id="contact">
      <div className="mx-auto flex max-w-[1100px] flex-col justify-between px-8 md:flex-row md:px-0">
        <div className="flex flex-col">
          <h2 className="text-3xl font-medium">Contact</h2>
          <p className="mt-4 font-bold">
            You can reach me via email:{" "}
            <Link
              className="text-accent"
              href="mailto:denyspupin.dev@gmail.com"
            >
              denyspupin.dev@gmail.com
            </Link>
          </p>
          <ul className="mt-24 flex gap-x-3 text-2xl">
            <li>
              <Link
                href="https://www.linkedin.com/in/denyspupin/"
                target="_blank"
                className="opacity-60 transition-opacity hover:opacity-100"
              >
                <FaLinkedin />
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/denyspupin"
                target="_blank"
                className="opacity-60 transition-opacity hover:opacity-100"
              >
                <FaGithubSquare />
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden flex-col items-end gap-y-4 md:flex">
          <p className="font-medium">Want to know more about my experience?</p>
          <DownloadButton />
        </div>
      </div>
    </footer>
  );
}

export default Contact;
