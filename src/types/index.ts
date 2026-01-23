export type Contact = {
  id: string;
  type: "email" | "github" | "linkedin";
  href: string;
  label: string;
};

export type ContactList = Contact[];

export type Experience = {
  id: string;
  role: string;
  company: string;
  description: string;
  period: string;
  techStack: Array<Tech>;
};

export type ExperienceList = Experience[];

export type Tech =
  | "js"
  | "ts"
  | "react"
  | "sanity"
  | "aws"
  | "azure"
  | "csharp"
  | "materialui"
  | "nextjs"
  | "tailwindcss"
  | "angular"
  | "graphql"
  | "dotnet"
  | "nextjs"
  | "dotnet"
  | "rxjs";

export type Project = {
  id: string;
  name: string;
  logo_url: string;
  description: string;
  active: boolean;
  links: ProjectLink[];
};

type ProjectLink = {
  type: string;
  href: string;
};

export type ProjectList = Project[];
