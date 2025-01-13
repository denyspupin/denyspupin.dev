import { NavbarLink, NavbarLinks } from "@/types/navbar";
import Link from "next/link";

type Props = {
  links: NavbarLinks;
};

const Navbar: React.FC<Props> = ({ links }) => {
  return (
    <nav>
      <ul className="flex flex-row justify-center gap-x-4 text-right text-xl font-medium transition-colors md:flex-col md:gap-x-0 md:gap-y-4 md:text-4xl lg:gap-y-5 xl:gap-y-8 xl:text-5xl">
        {links.map((link: NavbarLink) => (
          <li key={link.id}>
            <Link href={link.href} className="hover:text-accent">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
