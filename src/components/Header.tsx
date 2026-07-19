"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { nav } from "@/lib/nav";
import { brand } from "@/lib/brand";
import { ChevronDown, ArrowRight } from "./ui/Icons";

type NavDrop = {
  key: string;
  label: string;
  items?: readonly { label: string; href: string }[];
  href?: string;
};

const dropdowns: NavDrop[] = [
  { key: "products", label: "Products", items: nav.products },
  { key: "capabilities", label: "Capabilities", items: nav.capabilities },
  { key: "company", label: "Company", items: nav.company },
  { key: "applications", label: "Applications", href: nav.applications.href },
];

export function Header() {
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-[#0f1f10]/92 backdrop-blur-md" : "bg-transparent"
      }`}
      style={{ height: "var(--header-h)" }}
    >
      <div
        className="site-container flex h-full items-center justify-between"
        style={{ height: "var(--header-h)" }}
      >
        <Link href="/" className="relative z-10 flex items-center gap-2.5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={brand.logo}
            alt={brand.name}
            width={180}
            height={36}
            className="h-8 w-auto max-w-[160px] object-contain object-left brightness-0 invert md:h-9 md:max-w-[200px]"
          />
        </Link>

        <nav className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-0 xl:flex">
          {dropdowns.map((d) =>
            d.items ? (
              <div
                key={d.key}
                className="relative"
                onMouseEnter={() => setOpen(d.key)}
                onMouseLeave={() => setOpen(null)}
              >
                <button className="nav-link flex items-center gap-1.5 px-3 py-2 text-[11px] tracking-[0.08em] text-[#f5f4f2]/92">
                  {d.label}
                  <ChevronDown className="h-2.5 w-2.5 opacity-55" />
                </button>
                {open === d.key && (
                  <div className="absolute left-1/2 top-full z-50 min-w-[220px] -translate-x-1/2 pt-2">
                    <div className="max-h-[70vh] overflow-y-auto rounded-xl border border-white/10 bg-[#0f1f10] p-1.5 shadow-2xl">
                      {d.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block rounded-lg px-3.5 py-2.5 font-mono text-[11px] uppercase tracking-[0.08em] text-white/75 transition hover:bg-white/5 hover:text-[#c6f19d]"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={d.key}
                href={d.href || "/"}
                className="nav-link px-3 py-2 text-[11px] tracking-[0.08em] text-[#f5f4f2]/92"
              >
                {d.label}
              </Link>
            )
          )}
        </nav>

        <div className="relative z-10 hidden items-center gap-3 xl:flex">
          <Link
            href={nav.faq.href}
            className="font-mono text-[11px] uppercase tracking-[0.1em] text-[#f5f4f2]/70 transition hover:text-white"
          >
            FAQ
          </Link>
          <Link
            href={nav.contact.href}
            className="group inline-flex items-center gap-2.5 font-mono text-[11px] font-medium uppercase tracking-[0.1em] text-[#f5f4f2]/88 transition hover:text-white"
          >
            Contact Us
            <span className="flex h-7 w-7 items-center justify-center rounded-[6px] border border-white/25 text-white transition group-hover:border-[#c6f19d] group-hover:bg-[#c6f19d] group-hover:text-[#0f1f10]">
              <ArrowRight className="h-3 w-3" />
            </span>
          </Link>
        </div>

        <button
          className="relative z-10 inline-flex items-center justify-center rounded-md bg-[#c6f19d] px-3.5 py-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.1em] text-[#0f1f10] xl:hidden"
          aria-label="Menu"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? "Close" : "Menu"}
        </button>
      </div>

      {mobileOpen && (
        <div className="max-h-[80vh] overflow-y-auto border-t border-white/10 bg-[#0f1f10] px-5 py-6 xl:hidden">
          <div className="flex flex-col gap-5">
            {dropdowns.map((d) =>
              d.items ? (
                <div key={d.key}>
                  <p className="eyebrow mb-2 text-[#c6f19d]">{d.label}</p>
                  <div className="flex flex-col gap-2">
                    {d.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="font-mono text-sm uppercase tracking-[0.06em] text-white/80"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={d.key}
                  href={d.href || "/"}
                  onClick={() => setMobileOpen(false)}
                  className="eyebrow text-white/80"
                >
                  {d.label}
                </Link>
              )
            )}
            <Link
              href={nav.contact.href}
              onClick={() => setMobileOpen(false)}
              className="btn-primary w-fit"
            >
              <span>Contact Us</span>
              <span className="btn-primary-icon">
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
