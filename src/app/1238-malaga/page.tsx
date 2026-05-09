import type { Metadata } from "next";
import { ProjectPageView } from "@/components/project/project-page-view";
import { projectMalaga } from "@/lib/content/projects";

export const metadata: Metadata = {
  title: "1238 Malaga Avenue",
  description: `${projectMalaga.title} — ${projectMalaga.location}. A Coral Gables residence by Bermex Development Group.`,
  openGraph: {
    title: "1238 Malaga Avenue",
    description: `Luxury new construction in ${projectMalaga.location}.`,
  },
};

export default function MalagaPage() {
  return <ProjectPageView project={projectMalaga} />;
}
