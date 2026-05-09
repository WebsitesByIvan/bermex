import Image from "next/image";
import {
  aboutFounderColumnLeft,
  aboutFounderColumnRight,
  aboutFounderImage,
  type AboutSection,
} from "@/lib/content/about-founder";

function ColumnBlocks({ sections }: { sections: AboutSection[] }) {
  return (
    <>
      {sections.map((section, si) => (
        <div key={si} className="about-founder__block">
          {section.heading ? (
            <h2 className="about-founder__section-title">{section.heading}</h2>
          ) : null}
          {section.paragraphs.map((p, pi) => (
            <p key={pi} className="about-founder__text">
              {p}
            </p>
          ))}
        </div>
      ))}
    </>
  );
}

export function AboutFounderPageView() {
  return (
    <article className="about-founder">
      <h1 className="visually-hidden">About the Founder</h1>
      <figure className="about-founder__photo">
        <Image
          src={aboutFounderImage.src}
          alt={aboutFounderImage.alt}
          fill
          className="about-founder__img"
          sizes="(max-width: 959px) 96vw, 32vw"
          priority
        />
      </figure>
      <div className="about-founder__copy">
        <div className="about-founder__col">
          <ColumnBlocks sections={aboutFounderColumnLeft} />
        </div>
        <div className="about-founder__col">
          <ColumnBlocks sections={aboutFounderColumnRight} />
        </div>
      </div>
    </article>
  );
}
