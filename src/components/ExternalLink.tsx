"use client";

import { sendGAEvent } from "@next/third-parties/google";
import React from "react";

type Props = {
  href: string;
  children: React.ReactNode;
  openInNewTab?: boolean;
  className?: string;
};

const ExternalLink: React.FC<Props> = ({
  href,
  children,
  openInNewTab,
  className,
}) => {
  const sendEventToGA = (value: string) => {
    sendGAEvent("event", "link_clicked", { value });
  };

  return (
    <a
      href={href}
      target={openInNewTab ? "_blank" : ""}
      className={className}
      onClick={() => sendEventToGA(href)}
    >
      {children}
    </a>
  );
};

export default ExternalLink;
