import type { Metadata } from "next";
import { ProjectPageView } from "@/components/project/project-page-view";
import { projectPalermo } from "@/lib/content/projects";

export const metadata: Metadata = {
  title: "747 Palermo Avenue",
  description: `${projectPalermo.title} — ${projectPalermo.location}. Bermex Development Group.`,
  openGraph: {
    title: "747 Palermo Avenue",
    description: `Luxury new construction in ${projectPalermo.location}.`,
  },
};

export default function PalermoPage() {
  return <ProjectPageView project={projectPalermo} />;
}
