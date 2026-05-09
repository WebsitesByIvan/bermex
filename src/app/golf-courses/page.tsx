import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Golf Courses",
  description: "Golf course communities and related development work by Bermex Development Group.",
};

export default function GolfCoursesPage() {
  return (
    <article className="page-inner page-inner--wide">
      <h1>Golf Courses</h1>
      <p className="lede">
        Bermex engages select opportunities where golf-course adjacency, views, and privacy
        reinforce a single coherent vision for the estate.
      </p>
      <section>
        <h2>Inquiries</h2>
        <p>
          For partnership or acquisition conversations related to golf community development,
          please reach the team through the{" "}
          <a href="/contact">Contact</a> page.
        </p>
      </section>
    </article>
  );
}
