"use client";

import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GoHomeFill } from "react-icons/go";

const FloatingNavbar = () => {
  const path = usePathname();

  // Do not show floating navbar on the home page
  return path === "/" ? null : (
    <AnimatePresence>
      <motion.nav
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-primary fixed bottom-0 left-0 right-0 z-50 flex justify-center p-5"
      >
        <ul className="text-md flex flex-row items-center gap-x-6 rounded-lg bg-[rgb(21,21,21)] px-6 py-3 font-medium md:text-xl">
          <li>
            <Link href="/">
              <GoHomeFill />
            </Link>
          </li>
          {menu.map((item) => (
            <li key={item.id}>
              <Link
                href={item.href}
                className={`hover:text-accent ${path === `/${item.href}` ? "text-accent" : ""}`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </motion.nav>
    </AnimatePresence>
  );
};

export const menu = [
  {
    id: 1,
    name: "About me",
    href: "about",
  },
  {
    id: 2,
    name: "Experience",
    href: "experience",
  },
  {
    id: 3,
    name: "Contacts",
    href: "contacts",
  },
];

export default FloatingNavbar;
