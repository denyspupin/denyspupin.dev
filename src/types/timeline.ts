export type TimelineEntry = {
  id: number;
  position: string;
  company: string;
  link: string;
  timePeriod: string;
  companyDescription: string;
  jobDescription: string;
  projects: TimelineEntry[] | null;
};

export type Timeline = TimelineEntry[];
