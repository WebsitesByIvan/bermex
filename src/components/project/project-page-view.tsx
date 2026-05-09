import { ProjectGallery } from "@/components/project/project-gallery";
import { ProjectMobileShell } from "@/components/project/project-mobile-shell";
import { ProjectRailInner } from "@/components/project/project-rail-inner";
import type { ProjectContent } from "@/lib/content/projects";

export function ProjectPageView({ project }: { project: ProjectContent }) {
  return (
    <div className="project-layout">
      <div className="project-gallery-wrap">
        <ProjectGallery slides={project.slides} projectTitle={project.title} />
      </div>
      <aside className="project-rail project-rail--desktop" aria-label="Project details">
        <ProjectRailInner project={project} />
      </aside>
      <ProjectMobileShell>
        <ProjectRailInner project={project} />
      </ProjectMobileShell>
    </div>
  );
}
