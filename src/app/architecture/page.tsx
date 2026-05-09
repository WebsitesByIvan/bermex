import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Architecture",
  description:
    "Residential architecture and custom estates by Bermex Development Group — South Florida.",
};

export default function ArchitecturePage() {
  return (
    <article className="page-inner page-inner--wide">
      <h1>Architecture</h1>
      <p className="lede">
        Explore signature residences where proportion, light, and landscape work together —
        including{" "}
        <a href="/1238-malaga">1238 Malaga Avenue</a>,{" "}
        <a href="/505-zamora">505 Zamora Avenue</a>,{" "}
        <a href="/747-palermo">747 Palermo Avenue</a>, and{" "}
        <a href="/800-valencia">800 Valencia Avenue</a>.
      </p>
      <section>
        <h2>Approach</h2>
        <p>
          Each commission begins with a disciplined read of the site and a clear architectural idea.
          We collaborate closely with design partners to deliver homes that feel timeless and
          precisely tuned to how our clients live.
        </p>
      </section>
    </article>
  );
}
