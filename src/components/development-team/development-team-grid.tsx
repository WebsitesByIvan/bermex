import Image from "next/image";
import { developmentPartners } from "@/lib/content/development-team";

export function DevelopmentTeamGrid() {
  return (
    <ul className="dev-team-grid">
      {developmentPartners.map((partner) => (
        <li key={partner.id}>
          <article className="dev-team-card">
            <div className="dev-team-card__logo">
              <Image
                src={partner.logo.src}
                alt={partner.logo.alt}
                width={partner.logo.width}
                height={partner.logo.height}
                className="partner-logo"
                sizes="(max-width: 640px) 85vw, 280px"
              />
            </div>
            <hr className="dev-team-card__rule" />
            <p className="dev-team-card__label">{partner.label}</p>
          </article>
        </li>
      ))}
    </ul>
  );
}
