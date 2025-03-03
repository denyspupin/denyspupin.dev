import Intro from "../blocks/Intro";
import Experience from "../blocks/Experience";
import Contact from "@/blocks/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Denys Pupin – Software Engineer",
  description:
    "Explore Denys Pupin's portfolio showcasing skills and experience.",
  keywords: "software engineer, full-stack developer, portfolio",
  openGraph: {
    title: "Denys Pupin – Software Engineer",
    description:
      "Explore Denys Pupin's portfolio showcasing skills and experience.",
    type: "website",
    url: "https://denyspupin.dev",
    images: [
      {
        url: "og_image.png",
      },
    ],
  },
};

const Home: React.FC = () => {
  return (
    <>
      <Intro />
      <Experience />
      <Contact />
    </>
  );
};

export default Home;
