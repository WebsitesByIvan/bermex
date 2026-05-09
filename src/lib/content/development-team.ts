export type DevelopmentPartnerId =
  | "developers"
  | "architect"
  | "financial-advisors"
  | "sales"
  | "legal-counsel"
  | "general-contractor";

export type DevelopmentPartnerLogo = {
  /** File in `public/development-team/` */
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type DevelopmentPartner = {
  id: DevelopmentPartnerId;
  label: string;
  logo: DevelopmentPartnerLogo;
};

/** Order: top row L→R, bottom row L→R. */
export const developmentPartners: DevelopmentPartner[] = [
  {
    id: "developers",
    label: "Developers",
    logo: {
      src: "/development-team/bermex-developers.png",
      alt: "Bermex Development Group",
      width: 320,
      height: 199,
    },
  },
  {
    id: "architect",
    label: "Architects",
    logo: {
      src: "/development-team/locus-architects.jpg",
      alt: "Locus Architects Incorporated",
      width: 320,
      height: 199,
    },
  },
  {
    id: "financial-advisors",
    label: "Financial advisors",
    logo: {
      src: "/development-team/gemrt-financial-advisors.jpg",
      alt: "GEMRT — financial advisors",
      width: 320,
      height: 199,
    },
  },
  {
    id: "sales",
    label: "Sales",
    logo: {
      src: "/development-team/sales-sotheby.jpg",
      alt: "ONE Sotheby's International Realty",
      width: 320,
      height: 199,
    },
  },
  {
    id: "legal-counsel",
    label: "Legal counsel",
    logo: {
      src: "/development-team/ballaga-legal-counsel.jpg",
      alt: "Ballaga, Freedman & Atkins, LLP",
      width: 320,
      height: 199,
    },
  },
  {
    id: "general-contractor",
    label: "General contractor",
    logo: {
      src: "/development-team/la-carta-general-contractor.jpg",
      alt: "The Calta Group",
      width: 320,
      height: 199,
    },
  },
];
