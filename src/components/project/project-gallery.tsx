"use client";

import Image from "next/image";
import { useCallback, useEffect, useId, useState } from "react";
import type { ProjectSlide } from "@/lib/content/projects";

type Props = {
  slides: ProjectSlide[];
  projectTitle: string;
};

export function ProjectGallery({ slides, projectTitle }: Props) {
  const [index, setIndex] = useState(0);
  const statusId = useId();
  const n = slides.length;

  const go = useCallback(
    (dir: -1 | 1) => {
      setIndex((i) => (i + dir + n) % n);
    },
    [n],
  );

  const goTo = useCallback((i: number) => {
    setIndex(i);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  return (
    <section
      className="project-gallery"
      aria-roledescription="carousel"
      aria-label={`${projectTitle} photography`}
      aria-describedby={statusId}
      aria-live="polite"
      aria-atomic="true"
    >
      <p id={statusId} className="visually-hidden">
        Slide {index + 1} of {n}
      </p>
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className={`project-gallery__slide${i === index ? " is-active" : ""}`}
          aria-hidden={i !== index}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            sizes="(max-width: 1023px) 100vw, 78vw"
            style={{ objectFit: "cover" }}
          />
        </div>
      ))}
      <button
        type="button"
        className="project-gallery__btn project-gallery__btn--prev"
        onClick={() => go(-1)}
        aria-label="Previous image"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
        </svg>
      </button>
      <button
        type="button"
        className="project-gallery__btn project-gallery__btn--next"
        onClick={() => go(1)}
        aria-label="Next image"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
        </svg>
      </button>
      <div className="project-gallery__dots" role="tablist" aria-label="Gallery slides">
        {slides.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`Go to slide ${i + 1}`}
            className={`project-gallery__dot${i === index ? " is-active" : ""}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </section>
  );
}
