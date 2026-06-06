"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { loginUrl, navItems } from "@/data/site";
import { ButtonLink } from "./ButtonLink";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <div className="section-shell flex min-h-20 items-center justify-between gap-5">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex size-11 items-center justify-center rounded-md bg-slate-950 text-lg font-black text-orange-400">
            DQ
          </span>
          <span className="leading-tight">
            <span className="block text-lg font-black tracking-tight text-slate-950">
              DeployIQ™
            </span>
            <span className="hidden text-xs font-semibold uppercase tracking-[0.12em] text-slate-500 sm:block">
              Field Deployment Intelligence Platform
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-semibold text-slate-700 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={
                pathname === item.href
                  ? "text-orange-600"
                  : "hover:text-orange-600"
              }
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ButtonLink href="/contact" variant="primary">
            Book Demo
          </ButtonLink>
          <ButtonLink href={loginUrl} variant="secondary">
            Login
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}
