import { type Contact, type ContactList } from "@/types";
import ContactListItem from "./ContactListItem";

type Props = {
  list: ContactList;
};

const ContactList = ({ list }: Props) => {
  return (
    <div className="flex flex-col gap-y-3.5">
      {list.map((contact: Contact) => (
        <ContactListItem
          key={contact.id}
          type={contact.type}
          href={contact.href}
        >
          {contact.label}
        </ContactListItem>
      ))}
    </div>
  );
};

export default ContactList;
