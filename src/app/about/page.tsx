import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about DeployIQ™, Impact Visibility Ltd, and the mission to make field deployment visible, measurable, and accountable."
};

const sections = [
  ["About DeployIQ", "DeployIQ™ is a Field Deployment Intelligence Platform built to help organizations execute, track, verify, and report field operations with confidence."],
  ["About Impact Visibility Ltd", "Impact Visibility Ltd develops deployment and visibility solutions for organizations that need stronger control over field execution and market-facing assets."],
  ["Why DeployIQ Was Built", "The platform was created to solve the visibility gap between field teams, managers, clients, and executives who need timely evidence of execution."],
  ["Vision", "To become the trusted intelligence layer for field deployment, merchandising, activation, signage, and OOH execution across Africa."],
  ["Mission", "To make every field activity visible, measurable, accountable, and decision-ready through practical technology and verified evidence."],
  ["Future Roadmap", "DeployIQ is evolving toward richer AI-assisted validation, advanced analytics, deeper client reporting, and expanded operational intelligence modules."]
];

export default function AboutPage() {
  return (
    <>
      <section className="dark-panel py-20 text-white">
        <div className="section-shell max-w-4xl">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-orange-300">
            About DeployIQ™
          </p>
          <h1 className="mt-4 text-balance text-5xl font-black tracking-tight sm:text-6xl">
            Field deployment software built by people who understand field deployment.
          </h1>
          <p className="mt-6 text-xl leading-9 text-slate-200">
            DeployIQ bridges the distance between what happens in the field and what
            leaders need to see, approve, and act on.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="section-shell grid gap-5 md:grid-cols-2">
          {sections.map(([title, copy]) => (
            <div key={title} className="rounded-lg border border-slate-200 bg-white p-7 card-shadow">
              <h2 className="text-2xl font-black text-slate-950">{title}</h2>
              <p className="mt-4 leading-8 text-slate-600">{copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="section-shell grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-lg bg-slate-950 p-8 text-white">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-orange-300">
              Execute. Track. Verify.
            </p>
            <div className="mt-8 grid gap-4">
              {["Visibility", "Accountability", "Evidence", "Workflow", "Intelligence"].map((item) => (
                <div key={item} className="rounded-md bg-white/10 px-5 py-4 text-lg font-black">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
              A mature SaaS product for verified operations.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              DeployIQ™ gives brand managers, trade marketing leaders, procurement
              teams, agencies, OOH operators, retail chains, and investors a clearer
              view into execution quality and operational progress.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
