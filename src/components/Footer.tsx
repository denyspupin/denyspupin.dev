import { Contact } from "@/types";
import iconRenderer from "@/utils/iconRenderer";
import Link from "next/link";

const Footer = async () => {
  const contactList = (await import("@/data/data.json"))
    .contact_list as Contact[];

  return (
    <footer className="site-footer">
      <div>
        <p>© {new Date().getFullYear()} Denys Pupin</p>
        <div className="footer-links">
          {[...contactList].reverse().map((contact) => (
            <Link
              key={contact.id}
              href={contact.href}
              className="footer-link"
            >
              {iconRenderer(contact.type, { width: 20, height: 20 })}
              <span className="sr-only">{contact.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
