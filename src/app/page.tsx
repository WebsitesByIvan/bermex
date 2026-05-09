import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Architecture is an artistic signature in the sky — Bermex redefines luxury living.",
};

export default function HomePage() {
  return (
    <div className="home-hero">
      <div className="home-hero__mark" aria-hidden>
        <Image
          src="/bermex-home-hero-mark.png"
          alt=""
          width={967}
          height={1024}
          className="home-hero__mark-img"
          priority
          sizes="(max-width: 899px) 76vw, (max-width: 1400px) 46vw, 36rem"
        />
      </div>
      <div className="home-hero__quote">
        <p>
          Architecture is an artistic signature in the sky, and at{" "}
          <strong>BERMEX</strong> we are redefining luxury living every day.
        </p>
      </div>
    </div>
  );
}
