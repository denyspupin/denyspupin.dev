export type Job = {
  id: string;
  role: string;
  period: string;
  companyDescription: string;
  roleDescription: string;
  skills: string[];
};

export type Experience = {
  title: string;
  jobs: Job[];
};
