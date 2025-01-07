import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex flex-row justify-center gap-x-4 text-right text-xl font-medium transition-colors md:flex-col md:gap-x-0 md:gap-y-4 md:text-4xl lg:gap-y-5 xl:gap-y-8 xl:text-5xl">
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
