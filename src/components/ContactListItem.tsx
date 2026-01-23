import { Contact } from "@/types";
import iconRenderer from "@/utils/iconRenderer";
import Link from "next/link";
import React from "react";

type Props = {
  children?: React.ReactNode;
} & Omit<Contact, "label" | "id">;

const ContactListItem = ({ children, type, href }: Props) => {
  return (
    <Link
      href={href}
      className="flex items-center gap-x-2 px-1.5 py-0.5 font-mono text-sm text-[var(--muted)] transition-colors hover:text-white focus-visible:rounded-sm focus-visible:text-white focus-visible:outline-1 focus-visible:outline-white focus-visible:outline-dashed"
    >
      {iconRenderer(type)}
      <span>{children}</span>
    </Link>
  );
};

export default ContactListItem;
