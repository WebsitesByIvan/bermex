/** Primary contact email (shown on Contact page). */
export const contactEmail = "willybermello@me.com";

/** Inbox(es) that receive Contact form submissions (API route). */
export const contactFormRecipients = [
  "willybermello@me.com",
  "websitesbyivan@gmail.com",
] as const;

/** Portfolio dropdown — labels match main nav styling (uppercase). */
export const portfolioSubmenu = [
  { href: "/1238-malaga", label: "1238 MALAGA" },
  { href: "/505-zamora", label: "505 ZAMORA" },
  { href: "/747-palermo", label: "747 PALERMO" },
  { href: "/800-valencia", label: "800 VALENCIA" },
] as const;

/** Project routes that use the full-bleed gallery header overlay */
export const projectOverlayPaths: readonly string[] = portfolioSubmenu.map((p) => p.href);

export type NavItem =
  | { kind: "link"; href: string; label: string }
  | { kind: "portfolio"; label: string };

export const mainNavItems: NavItem[] = [
  { kind: "link", href: "/", label: "Home" },
  { kind: "portfolio", label: "PORTFOLIO" },
  { kind: "link", href: "/visioning", label: "Visioning" },
  { kind: "link", href: "/about-the-founder", label: "About the Founder" },
  { kind: "link", href: "/development-team", label: "Development Team" },
  { kind: "link", href: "/contact", label: "Contact" },
];

/** Replace with your WhatsApp business number (digits only, country code included). */
export const whatsappNumber = "13055550199";

export const whatsappDefaultMessage = encodeURIComponent(
  "Hello — I would like to connect with Bermex Development Group.",
);

export function whatsappHref() {
  return `https://wa.me/${whatsappNumber}?text=${whatsappDefaultMessage}`;
}
