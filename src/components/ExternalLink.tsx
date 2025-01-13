"use client";

import { sendGAEvent } from "@next/third-parties/google";
import React from "react";

type Props = {
  href: string;
  children: React.ReactNode;
  openInNewTab?: boolean;
  className?: string;
};

const ExternalLink: React.FC<Props> = (props) => {
  const sendEventToGA = (value: string) => {
    sendGAEvent("event", "link_clicked", { value });
  };

  return (
    <a
      href={props.href}
      target={props.openInNewTab ? "_blank" : ""}
      className={props.className}
      onClick={() => sendEventToGA(props.href)}
    >
      {props.children}
    </a>
  );
};

export default ExternalLink;
