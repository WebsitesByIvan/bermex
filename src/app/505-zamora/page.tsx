import type { Metadata } from "next";
import { ProjectPageView } from "@/components/project/project-page-view";
import { projectZamora } from "@/lib/content/projects";

export const metadata: Metadata = {
  title: "505 Zamora Avenue",
  description: `${projectZamora.title} — ${projectZamora.location}. A Coral Gables residence by Bermex Development Group.`,
  openGraph: {
    title: "505 Zamora Avenue",
    description: `Luxury new construction in ${projectZamora.location}.`,
  },
};

export default function ZamoraPage() {
  return <ProjectPageView project={projectZamora} />;
}
