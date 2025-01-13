import { Metadata } from "next";

type PageMetadata = Metadata;

export type SiteMetadata = {
  [key: string]: PageMetadata;
};
