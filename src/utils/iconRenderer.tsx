import {
  Angular,
  Csharp,
  GitHub,
  JavaScript,
  LinkedIn,
  React,
  TypeScript,
  AmazonWebServices,
  Nextjs,
  MaterialUI,
  RxJS,
  Sanity,
  MicrosoftNET,
  MicrosoftAzure,
  GraphQL,
  TailwindCSS,
  FindMyVar,
  Figma,
} from "@/components/ui/icons";
import { Contact, Tech } from "@/types";
import Image from "next/image";
import { ExternalLink, Mail } from "lucide-react";

export default function iconRenderer(
  type: Contact["type"] | Tech | string,
  size: { width: number; height: number } = { width: 18, height: 18 },
) {
  switch (type) {
    case "email":
      return <Mail width={size.width} height={size.height} />;
    case "github":
      return <GitHub width={size.width} height={size.height} />;
    case "linkedin":
      return <LinkedIn width={size.width} height={size.height} />;
    case "js":
      return <JavaScript width={size.width} height={size.height} />;
    case "ts":
      return <TypeScript width={size.width} height={size.height} />;
    case "csharp":
      return <Csharp width={size.width} height={size.height} />;
    case "react":
      return <React width={size.width} height={size.height} />;
    case "angular":
      return <Angular width={size.width} height={size.height} />;
    case "aws":
      return <AmazonWebServices width={size.width} height={size.height} />;
    case "azure":
      return <MicrosoftAzure width={size.width} height={size.height} />;
    case "dotnet":
      return <MicrosoftNET width={size.width} height={size.height} />;
    case "nextjs":
      return <Nextjs width={size.width} height={size.height} />;
    case "materialui":
      return <MaterialUI width={size.width} height={size.height} />;
    case "sanity":
      return <Sanity width={size.width} height={size.height} />;
    case "rxjs":
      return <RxJS width={size.width} height={size.height} />;
    case "graphql":
      return <GraphQL width={size.width} height={size.height} />;
    case "tailwindcss":
      return <TailwindCSS width={size.width} height={size.height} />;
    case "findmyvar":
      return <FindMyVar width={size.width} height={size.height} />;
    case "flashforge":
      return (
        <Image
          src="/flashforge-logo.png"
          alt=""
          width={size.width}
          height={size.height}
        />
      );
    case "figma":
      return <Figma width={size.width} height={size.height} />;
    case "external":
      return <ExternalLink width={size.width} height={size.height} />;
    default:
      return null;
  }
}
