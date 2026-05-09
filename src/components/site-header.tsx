"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useMemo, useState } from "react";
import { BermexLogo } from "@/components/bermex-logo";
import { mainNavItems, portfolioSubmenu, projectOverlayPaths } from "@/lib/content/site";

export function SiteHeader() {
  const pathname = usePathname();
  const overlay = useMemo(
    () => projectOverlayPaths.some((p) => pathname === p || pathname.startsWith(`${p}/`)),
    [pathname],
  );
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mobilePortfolioOpen, setMobilePortfolioOpen] = useState(false);
  const drawerId = useId();
  const portfolioMenuId = useId();

  useEffect(() => {
    if (!drawerOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDrawerOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [drawerOpen]);

  const portfolioActive = portfolioSubmenu.some(
    (p) => pathname === p.href || pathname.startsWith(`${p.href}/`),
  );

  return (
    <>
      <header
        role="banner"
        className={`site-header ${overlay ? "site-header--overlay" : "site-header--solid"}`}
      >
        <Link href="/" className="site-header__brand">
          <BermexLogo />
        </Link>
        <nav className="site-header__nav" aria-label="Main">
          {mainNavItems.map((item) =>
            item.kind === "link" ? (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ) : (
              <div
                key={item.label}
                className={`site-header__nav-item site-header__nav-item--portfolio${portfolioActive ? " is-active" : ""}`}
              >
                <button
                  type="button"
                  className="site-header__portfolio-trigger"
                  aria-haspopup="menu"
                  aria-controls={portfolioMenuId}
                  id={`${portfolioMenuId}-trigger`}
                >
                  {item.label}
                </button>
                <ul
                  className="site-header__dropdown"
                  role="menu"
                  id={portfolioMenuId}
                  aria-labelledby={`${portfolioMenuId}-trigger`}
                >
                  {portfolioSubmenu.map((sub) => (
                    <li key={sub.href} role="none">
                      <Link href={sub.href} role="menuitem">
                        {sub.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ),
          )}
        </nav>
        <button
          type="button"
          className="site-header__menu-btn"
          aria-expanded={drawerOpen}
          aria-controls={drawerId}
          aria-label={drawerOpen ? "Close menu" : "Open menu"}
          onClick={() =>
            setDrawerOpen((open) => {
              const next = !open;
              if (next && portfolioActive) setMobilePortfolioOpen(true);
              return next;
            })
          }
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            {drawerOpen ? (
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            ) : (
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
            )}
          </svg>
        </button>
      </header>
      <div
        className={`site-header__drawer-backdrop${drawerOpen ? " is-open" : ""}`}
        aria-hidden={!drawerOpen}
        onClick={() => setDrawerOpen(false)}
      />
      <aside
        id={drawerId}
        className={`site-header__drawer${drawerOpen ? " is-open" : ""}`}
        aria-hidden={!drawerOpen}
        aria-labelledby={`${drawerId}-label`}
      >
        <p id={`${drawerId}-label`} className="site-header__brand" style={{ marginBottom: 0 }}>
          Menu
        </p>
        <nav aria-label="Mobile main" className="site-header__drawer-nav">
          {mainNavItems.map((item) =>
            item.kind === "link" ? (
              <Link key={item.href} href={item.href} onClick={() => setDrawerOpen(false)}>
                {item.label}
              </Link>
            ) : (
              <div key={item.label} className="site-header__drawer-group">
                <button
                  type="button"
                  className="site-header__drawer-portfolio-btn"
                  aria-expanded={mobilePortfolioOpen}
                  onClick={() => setMobilePortfolioOpen((v) => !v)}
                >
                  {item.label}
                  <span className="site-header__drawer-chevron" aria-hidden>
                    {mobilePortfolioOpen ? "−" : "+"}
                  </span>
                </button>
                <div className={`site-header__drawer-sub${mobilePortfolioOpen ? " is-open" : ""}`}>
                  {portfolioSubmenu.map((sub) => (
                    <Link key={sub.href} href={sub.href} onClick={() => setDrawerOpen(false)}>
                      {sub.label}
                    </Link>
                  ))}
                </div>
              </div>
            ),
          )}
        </nav>
      </aside>
    </>
  );
}
