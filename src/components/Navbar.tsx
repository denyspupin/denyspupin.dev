"use client";

import Link from "next/link";
import React from "react";

const Navbar = () => {
  const scrollToHash = (
    hash: string,
    e: React.MouseEvent<HTMLAnchorElement>,
  ) => {
    e.preventDefault();
    document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ul className="flex gap-x-6">
      <li>
        <Link
          href="#"
          onClick={(e) => scrollToHash("#intro", e)}
          className="hover:text-accent"
        >
          About
        </Link>
      </li>
      <li>
        <Link
          href="#"
          onClick={(e) => scrollToHash("#experience", e)}
          className="hover:text-accent"
        >
          Experience
        </Link>
      </li>
      <li>
        <Link
          href="#"
          onClick={(e) => scrollToHash("#contact", e)}
          className="hover:text-accent"
        >
          Contact
        </Link>
      </li>
    </ul>
  );
};

export default Navbar;
