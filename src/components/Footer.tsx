import Link from "next/link";
import { loginUrl, navItems } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-slate-950 py-12 text-white">
      <div className="section-shell grid gap-10 md:grid-cols-[1.3fr_1fr]">
        <div>
          <div className="text-2xl font-black">DeployIQ™</div>
          <p className="mt-2 text-lg font-semibold text-orange-300">
            Execute. Track. Verify.
          </p>
          <p className="mt-4 max-w-md text-sm leading-6 text-slate-300">
            A Product of Impact Visibility Ltd. Built for verified field deployment,
            campaign oversight, and executive visibility.
            <br />
            Office Line: +234 816 163 0635
            <br />
            Mobile Line: +234 806 548 7889
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 text-sm font-semibold text-slate-300 sm:grid-cols-5">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-orange-300">
              {item.label}
            </Link>
          ))}
          <Link href={loginUrl} className="hover:text-orange-300">
            Login
          </Link>
        </div>
      </div>
    </footer>
  );
}
