import Link from "next/link";
import React from "react";

type Props = {
  href: string;
  children?: React.ReactNode;
  icon?: React.ReactNode;
};

const Button = ({ children, href }: Props) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-foreground focus-outline flex items-center justify-center gap-x-1 rounded-lg border border-transparent px-3 py-1 font-mono font-semibold transition-colors hover:border-white hover:text-white focus-visible:text-white"
    >
      {children}
    </Link>
  );
};

export default Button;
