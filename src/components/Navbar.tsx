import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex flex-col lg:gap-y-5 xl:gap-y-8 text-right lg:text-4xl  xl:text-5xl font-medium transition-colors">
        <li>
          <Link href="about" className="hover:text-accent">
            About me
          </Link>
        </li>
        <li>
          <Link href="experience" className="hover:text-accent">
            Experience
          </Link>
        </li>
        <li>
          <Link href="contacts" className="hover:text-accent">
            Contacts
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
