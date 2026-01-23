import ContactList from "@/components/ContactList";
import ExperienceList from "@/components/ExperienceList";
import ProjectList from "@/components/ProjectList";
import Section from "@/components/Section";
import { Experience, Contact, Project } from "@/types";

await import("@/data/data.json");

export default async function Page() {
  const data = (await import("@/data/data.json")).default;

  const contactList = data.contact_list as Contact[];
  const experienceList = data.work_experience as Experience[];
  const projectList = data.personal_projects as Project[];

  return (
    <div className="mr-auto ml-auto flex w-full flex-col items-start gap-y-14 pt-20 pb-16 lg:max-w-[732px]">
      <div className="flex flex-col justify-start gap-y-2 px-4 font-mono">
        <h1 className="text-3xl font-semibold text-white">Denys Pupin</h1>
        <h2 className="text-sm text-[var(--muted)]">Software Engineer</h2>
      </div>
      <div className="flex flex-row px-4">
        <p className="font-mono lg:max-w-[600px]">
          Hi 👋🏻. I&apos;m a software engineer with 8+ years of experience
          building products in different industries. I enjoy working through
          complex challenges with people who care about the outcome, then
          turning that work into something real and useful. Whether it’s scaling
          backend systems or fine-tuning UX details, I like connecting the dots
          between tech and business.
        </p>
      </div>
      <Section header="Get in touch">
        <ContactList list={contactList} />
      </Section>
      <Section header="Experience" className="timeline-border">
        <ExperienceList experiences={experienceList} className="pt-10" />
      </Section>
      <Section header="Projects">
        <ProjectList projects={projectList} />
      </Section>
    </div>
  );
}
