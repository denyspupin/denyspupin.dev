import React from "react";

type Props = {
  children?: React.ReactNode;
};

const SectionHeader = ({ children }: Props) => {
  return (
    <div className="section-heading">
      <h2>{children}</h2>
    </div>
  );
};

export default SectionHeader;
