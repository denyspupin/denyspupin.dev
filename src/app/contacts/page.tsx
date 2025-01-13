import CopyButton from "@/components/CopyButton";
import ExternalLink from "@/components/ExternalLink";
import getMetadataByPage from "@/helpers/getMetadataByPage";
import { Metadata } from "next";

export const metadata: Metadata = getMetadataByPage("contacts");

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
