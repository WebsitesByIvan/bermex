import type { ProjectContent } from "@/lib/content/projects";

export function ProjectRailInner({ project }: { project: ProjectContent }) {
  return (
    <>
      <div>
        <h2 className="project-rail__title">{project.title}</h2>
        <p className="project-rail__location">{project.location}</p>
      </div>
      <div className="project-rail__features">
        <h3>Main Features</h3>
        <ul>
          {project.features.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
