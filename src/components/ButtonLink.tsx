import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "dark" | "ghost";
  className?: string;
};

const variants = {
  primary:
    "bg-orange-500 text-white shadow-lg shadow-orange-500/25 hover:bg-orange-600",
  secondary:
    "border border-slate-300 bg-white !text-slate-950 hover:border-orange-300 hover:!text-orange-600",
  dark: "bg-slate-950 text-white hover:bg-slate-800",
  ghost: "text-slate-700 hover:text-orange-600"
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = ""
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-11 items-center justify-center rounded-md px-5 py-3 text-sm font-semibold transition ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
