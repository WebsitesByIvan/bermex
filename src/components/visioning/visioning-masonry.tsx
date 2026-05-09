import Image from "next/image";
import { visioningGallery } from "@/lib/content/visioning";

export function VisioningMasonry() {
  return (
    <section className="visioning-masonry-section" aria-label="Architecture and interiors">
      <div className="visioning-masonry">
        {visioningGallery.map((item) => (
          <div key={item.src} className="visioning-masonry__item">
            <Image
              src={item.src}
              alt={item.alt}
              width={item.width}
              height={item.height}
              sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 33vw"
              className="visioning-masonry__img"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
