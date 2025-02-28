import Link from "next/link";
import React from "react";
import Navbar from "./Navbar";

const Topbar = () => {
  return (
    <nav className="sticky top-0 z-10 h-14 backdrop-blur-md">
      <div className="mx-auto flex h-full max-w-[1100px] items-center justify-between">
        <Link href={"#"}>DP</Link>
        <Navbar />
      </div>
    </nav>
  );
};

export default Topbar;
