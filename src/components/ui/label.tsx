import React from "react";

type Props = {
  children?: React.ReactNode;
};

const Label = ({ children }: Props) => {
  return (
    <div className="bg-font-mono text-muted inline-flex h-4.5 items-center justify-center rounded-lg bg-[#282828] px-2 py-0.5 text-xs font-medium">
      <span>{children}</span>
    </div>
  );
};

export default Label;
