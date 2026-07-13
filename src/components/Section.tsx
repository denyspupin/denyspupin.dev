import React from "react";
import SectionHeader from "./SectionHeader";

type Props = {
  id?: string;
  header: string;
  children?: React.ReactNode;
  className?: string;
};

const Section = ({ id, header, children, className }: Props) => {
  return (
    <section id={id} className={`content-section ${className ?? ""}`}>
      <SectionHeader>{header}</SectionHeader>
      {children}
    </section>
  );
};

export default Section;
