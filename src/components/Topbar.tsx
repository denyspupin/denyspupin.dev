// import Link from "next/link";
import React from "react";
import Navbar from "./Navbar";
// import Image from "next/image";

const Topbar = () => {
  return (
    <nav className="sticky top-0 z-10 h-14 backdrop-blur-md">
      <div className="glass-backdrop"></div>
      <div className="mx-auto flex h-full max-w-[1100px] items-center justify-between px-8 lg:px-0">
        {/* <Link href="/">
          <Image
            height={40}
            width={40}
            src={"/foto.jpg"}
            className="rounded-lg"
            alt="Photo of Denys Pupin"
          />
        </Link> */}
        <span className="text-xl font-bold">DP.</span>
        <Navbar />
      </div>
    </nav>
  );
};

export default Topbar;
