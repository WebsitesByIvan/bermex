import type { Metadata } from "next";
import { VisioningHero } from "@/components/visioning/visioning-hero";
import { VisioningMasonry } from "@/components/visioning/visioning-masonry";

export const metadata: Metadata = {
  title: "Visioning",
  description:
    "Visioning inspires and influences the design process — Bermex Development Group.",
  openGraph: {
    title: "Visioning",
    description:
      "Visioning inspires and influences the design process to exceed limits and foster creativity.",
  },
};

export default function VisioningPage() {
  return (
    <div className="visioning-page">
      <VisioningHero />
      <VisioningMasonry />
    </div>
  );
}
