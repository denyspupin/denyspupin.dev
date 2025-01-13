import siteMetadata from "@/data/metadata";

export default function getMetadataByPage(page: string) {
  return siteMetadata[page as keyof typeof siteMetadata];
}
