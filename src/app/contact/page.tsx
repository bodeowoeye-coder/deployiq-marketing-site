import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request a DeployIQ™ demo or contact the Impact Visibility Ltd team about field deployment intelligence."
};

export default function ContactPage() {
  return (
    <>
      <section className="dark-panel py-20 text-white">
        <div className="section-shell max-w-4xl">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-orange-300">
            Contact DeployIQ™
          </p>
          <h1 className="mt-4 text-balance text-5xl font-black tracking-tight sm:text-6xl">
            Request a demo for your field operations team.
          </h1>
          <p className="mt-6 text-xl leading-9 text-slate-200">
            Tell us about your deployment workflow, campaign structure, or reporting
            needs. The Impact Visibility Ltd team will follow up with next steps.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="section-shell grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <ContactForm />
          <aside className="rounded-lg border border-slate-200 bg-white p-7 card-shadow">
            <h2 className="text-2xl font-black text-slate-950">Contact Information</h2>
            <div className="mt-6 space-y-5">
              {[
                ["Company", "Impact Visibility Ltd"],
                ["Product", "DeployIQ™"],
                ["Email", "hello@deployiq.ng"],
                ["Office Line", "+234 816 163 0635"],
                ["Mobile Line", "+234 806 548 7889"],
                ["Location", "Lagos, Nigeria"]
              ].map(([label, value]) => (
                <div key={label} className="rounded-md bg-slate-50 p-4">
                  <div className="text-xs font-black uppercase tracking-[0.14em] text-orange-600">
                    {label}
                  </div>
                  <div className="mt-1 font-bold text-slate-800">{value}</div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
