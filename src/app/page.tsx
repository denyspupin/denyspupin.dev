import Navbar from "@/components/Navbar";
import Image from "next/image";
import * as motion from "motion/react-client";
import { Metadata } from "next";
import navbarLinks from "@/data/navbar";
import getMetadataByPage from "@/helpers/getMetadataByPage";

export const metadata: Metadata = getMetadataByPage("home");

const Home: React.FC = () => {
  return (
    <div className="flex h-[100dvh] flex-col justify-center gap-y-10 md:flex-row md:items-center md:justify-between md:gap-y-0">
      <div className="flex items-center gap-x-8">
        <motion.div whileHover={{ scale: 1.1, rotate: -2 }}>
          <Image
            src="/foto.jpg"
            width={165}
            height={165}
            priority
            alt="Denys's Pupin profile photo"
            className="h-[100px] w-[100px] rounded-3xl lg:h-[145px] lg:w-[145px] xl:h-[165px] xl:w-[165px]"
          />
        </motion.div>
        <h1 className="text-2xl font-medium lg:text-6xl">
          Hello 👋🏻 <br />
          I&apos;m <span className="text-accent">Denys Pupin</span>!
        </h1>
      </div>
      <Navbar links={navbarLinks} />
    </div>
  );
};

export default Home;
