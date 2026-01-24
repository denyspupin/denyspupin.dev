import React from "react";

type Props = {
  children?: React.ReactNode;
};

const SectionHeader = ({ children }: Props) => {
  return (
    <div className="inline-flex w-auto justify-start rounded-sm bg-(--header-bg) px-2.5 py-1">
      <h3 className="text-foreground font-mono">{children}</h3>
    </div>
  );
};

export default SectionHeader;
