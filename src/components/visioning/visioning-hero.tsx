import Image from "next/image";
import { visioningFounderImage, visioningQuote } from "@/lib/content/visioning";

export function VisioningHero() {
  return (
    <section className="visioning-hero" aria-labelledby="visioning-heading">
      <h1 id="visioning-heading" className="visually-hidden">
        Visioning
      </h1>
      <div className="visioning-hero__portrait">
        <Image
          src={visioningFounderImage.src}
          alt={visioningFounderImage.alt}
          fill
          priority
          sizes="(max-width: 768px) 90vw, 360px"
          className="visioning-hero__portrait-img"
        />
      </div>
      <blockquote className="visioning-hero__quote">
        <p>{visioningQuote.text}</p>
        <footer>— {visioningQuote.attribution}</footer>
      </blockquote>
    </section>
  );
}
