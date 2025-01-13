import CopyButton from "@/components/CopyButton";
import ExternalLink from "@/components/ExternalLink";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacts",
  description:
    "Get in touch with Denys Pupin for collaboration, inquiries, or project discussions.",
  keywords:
    "Contact Denys Pupin, collaboration, software development inquiries, web development projects",
  openGraph: {
    title: "Contact me - Denys Pupin | Software Engineer",
    description:
      "Reach out to Denys Pupin for any questions or collaborations related to software development.",
    images: "https://denyspupin.dev/og_image.jpg",
    url: "https://denyspupin.dev/contacts",
  },
};

const Contacts: React.FC = () => {
  return (
    <div className="flex h-[100dvh] flex-col justify-center gap-y-10">
      <h1 className="text-6xl font-medium md:text-8xl">Contacts</h1>
      <div className="flex flex-col gap-y-1 text-lg md:text-3xl">
        <p>
          Feel free to explore my{" "}
          <ExternalLink
            href="https://www.linkedin.com/in/denyspupin/"
            className="text-accent underline"
            openInNewTab
          >
            LinkedIn
          </ExternalLink>
        </p>
        <p>
          or connect via email at{" "}
          <a
            href="mailto:denyspupin.dev@gmail.com"
            className="text-accent underline"
          >
            denyspupin.dev@gmail.com
          </a>
          <CopyButton value="denyspupin.dev@gmail.com" />
        </p>
      </div>
    </div>
  );
};

export default Contacts;
