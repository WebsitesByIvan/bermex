import type { Metadata } from "next";
import { DevelopmentTeamGrid } from "@/components/development-team/development-team-grid";

export const metadata: Metadata = {
  title: "Development Team",
  description:
    "Bermex development partners: architecture, brokerage, legal, construction, and advisory.",
  openGraph: {
    title: "Development Team",
    description: "Meet the partners behind Bermex residential developments.",
  },
};

export default function DevelopmentTeamPage() {
  return (
    <div className="dev-team-page">
      <h1 className="visually-hidden">Development Team</h1>
      <DevelopmentTeamGrid />
    </div>
  );
}
