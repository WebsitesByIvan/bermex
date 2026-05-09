"use client";

import { useEffect, useId, useState, type ReactNode } from "react";

export function ProjectMobileShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const dialogId = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <>
      <div className="project-mobile-details">
        <div className="project-mobile-details-inner">
          <button
            type="button"
            className="project-details-btn"
            onClick={() => setOpen(true)}
            aria-haspopup="dialog"
            aria-expanded={open}
            aria-controls={dialogId}
          >
            Project details
          </button>
        </div>
      </div>
      <div
        className={`project-drawer-backdrop${open ? " is-open" : ""}`}
        aria-hidden={!open}
        onClick={() => setOpen(false)}
      />
      <div
        id={dialogId}
        className={`project-drawer${open ? " is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Project details"
        aria-hidden={!open}
      >
        <div className="project-drawer__handle" aria-hidden />
        {children}
      </div>
    </>
  );
}
