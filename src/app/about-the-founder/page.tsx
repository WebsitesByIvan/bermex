import type { Metadata } from "next";
import { AboutFounderPageView } from "@/components/about-founder/about-founder-page";

export const metadata: Metadata = {
  title: "About the Founder",
  description:
    "Willy A. Bermello — architect, civic leader, and founder of Bermello, Ajamil & Partners. Bermex Development Group.",
  openGraph: {
    title: "About the Founder",
    description:
      "Professional career, community contributions, and family life of Willy A. Bermello.",
  },
};

export default function AboutTheFounderPage() {
  return <AboutFounderPageView />;
}
