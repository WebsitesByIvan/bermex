import Image from "next/image";

type BermexLogoProps = {
  className?: string;
};

export function BermexLogo({ className }: BermexLogoProps) {
  return (
    <Image
      src="/bermex-navbar-logo.png"
      alt="Bermex company logo"
      width={200}
      height={63}
      className={className ? `bermex-navbar-logo ${className}` : "bermex-navbar-logo"}
      priority
    />
  );
}
