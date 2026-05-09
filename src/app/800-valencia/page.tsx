import type { Metadata } from "next";
import { ProjectPageView } from "@/components/project/project-page-view";
import { projectValencia } from "@/lib/content/projects";

export const metadata: Metadata = {
  title: "800 Valencia Avenue",
  description: `${projectValencia.title} — ${projectValencia.location}. Bermex Development Group.`,
  openGraph: {
    title: "800 Valencia Avenue",
    description: `Luxury new construction in ${projectValencia.location}.`,
  },
};

export default function ValenciaPage() {
  return <ProjectPageView project={projectValencia} />;
}
