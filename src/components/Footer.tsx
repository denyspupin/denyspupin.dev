import { Contact } from "@/types";
import iconRenderer from "@/utils/iconRenderer";
import Link from "next/link";
import Button from "./ui/button";
import { Download } from "lucide-react";

await import("@/data/data.json");

const Footer = async () => {
  const contactList = (await import("@/data/data.json"))
    .contact_list as Contact[];

  return (
    <footer className="border-gradient py-6">
      <div className="mr-auto ml-auto flex w-full px-4 py-6 lg:max-w-[732px]">
        <div className="flex items-center justify-start gap-x-4">
          {contactList.reverse().map((contact) => (
            <Link
              key={contact.id}
              href={contact.href}
              className="text-muted focus-outline px-1 py-1 hover:text-white focus-visible:text-white"
            >
              {iconRenderer(contact.type, { width: 20, height: 20 })}
            </Link>
          ))}
        </div>
        <div className="ml-auto flex">
          <Button href="#">
            <span>Download CV</span> <Download width={16} height={16} />
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
