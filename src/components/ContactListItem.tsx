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
      className="contact-link"
    >
      {iconRenderer(type)}
      <span>{children}</span>
    </Link>
  );
};

export default ContactListItem;
