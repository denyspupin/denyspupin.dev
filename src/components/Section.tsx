import React from "react";
import SectionHeader from "./SectionHeader";
import { twMerge } from "tailwind-merge";

type Props = {
  header: string;
  children?: React.ReactNode;
  className?: string;
};

const Section = ({ header, children, className }: Props) => {
  return (
    <section
      className={twMerge(
        "flex w-full flex-col items-start gap-y-6 px-4",
        className,
      )}
    >
      <SectionHeader>{header}</SectionHeader>
      {children}
    </section>
  );
};

export default Section;
