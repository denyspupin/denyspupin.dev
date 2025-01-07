import Navbar from "@/components/Navbar";
import Image from "next/image";

const Home = () => {
  return (
    <div className="flex flex-row h-[100dvh] justify-between items-center">
      <div className="flex items-center gap-x-8">
        <Image
          src={"/foto.jpg"}
          width={165}
          height={165}
          priority={true}
          alt="Denys's Pupin photo"
          className="rounded-3xl lg:w-[145px] h-[145px] xl:w-[165px] xl:h-[165px]"
        />
        <h1 className="font-medium lg:text-6xl">
          Hello 👋🏻 <br></br> I&apos;m{" "}
          <span className="text-accent">Denys Pupin</span>!
        </h1>
      </div>
      <Navbar />
    </div>
  );
};

export default Home;
