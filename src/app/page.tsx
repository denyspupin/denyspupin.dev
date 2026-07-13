import ContactList from "@/components/ContactList";
import ExperienceList from "@/components/ExperienceList";
import ProjectList from "@/components/ProjectList";
import Section from "@/components/Section";
import { Contact, Experience, Project } from "@/types";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://denyspupin.dev"),
  title: "Denys Pupin — Software Engineer",
  description:
    "Denys Pupin is a software engineer who builds considered, resilient web products.",
  alternates: { canonical: "https://denyspupin.dev" },
};

export default async function Page() {
  const data = (await import("@/data/data.json")).default;
  const contactList = data.contact_list as Contact[];
  const experienceList = data.work_experience as Experience[];
  const projectList = data.personal_projects as Project[];

  return (
    <div className="site-shell">
      <header className="topbar">
        <Link href="/" className="brand">
          Denys Pupin<span>.</span>
        </Link>
        <nav aria-label="Primary navigation">
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <main>
        <section className="hero" aria-labelledby="intro-title">
          <div className="hero-copy">
            <h1 id="intro-title">Software engineer</h1>
            <p>
              Web applications, product interfaces, and the systems behind them.
            </p>
            <div className="hero-actions">
              <a
                className="primary-action"
                href="mailto:denyspupin.dev@gmail.com"
              >
                Email me <ArrowUpRight size={17} />
              </a>
              <a className="secondary-action" href="#experience">
                Experience <ArrowDownRight size={17} />
              </a>
            </div>
          </div>
        </section>
        <Section id="experience" header="Experience">
          <ExperienceList experiences={experienceList} />
        </Section>
        <Section id="projects" header="Selected work">
          <ProjectList projects={projectList} />
        </Section>
        <Section
          id="contact"
          header="Let’s work together"
          className="contact-section"
        >
          <p className="contact-copy">
            For product work, technical collaboration, or a simple hello:
          </p>
          <ContactList list={contactList} />
        </Section>
      </main>
    </div>
  );
}
