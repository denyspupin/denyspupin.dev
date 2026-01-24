import React from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  period: string;
  className?: string;
};

const TimeLinePoint = ({ period, className }: Props) => {
  return (
    <div
      className={twMerge(
        "flex flex-row items-center justify-end gap-x-2 whitespace-nowrap",
        className,
      )}
    >
      <div className="flex items-center justify-start rounded-sm bg-[#282828] px-2.5 py-0.5 font-mono text-xs text-[#A8A8A8]">
        <span>{period}</span>
      </div>
      <div className="bg-background flex h-[21px] w-[21px] items-center justify-center rounded-full">
        <div className="h-[9px] w-[9px] rounded-full bg-[var(--muted)]"></div>
      </div>
    </div>
  );
};

export default TimeLinePoint;
