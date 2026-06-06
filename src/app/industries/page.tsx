import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "DeployIQ™ supports field deployment operations across FMCG, telecommunications, OOH advertising, retail, agencies, and field service organizations."
};

const industrySections = [
  ["FMCG", "Track merchandising, trade assets, shelf visibility, promoter activities, dealer boards, and retail execution evidence across regions."],
  ["Telecommunications", "Verify signage installations, outlet branding, dealer activations, route visibility, and field team execution."],
  ["OOH Advertising", "Monitor billboard, street furniture, transit media, and signage installations with photographic proof and location confirmation."],
  ["Retail", "Coordinate store rollouts, product displays, campaign materials, fixture checks, and multi-location execution updates."],
  ["Marketing Agencies", "Give clients campaign visibility, evidence packs, approval workflows, and professional reporting across activation projects."],
  ["Field Services", "Manage distributed teams, territory visits, field tasks, evidence submission, and executive reporting from one platform."]
];

export default function IndustriesPage() {
  return (
    <>
      <section className="dark-panel py-20 text-white">
        <div className="section-shell max-w-4xl">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-orange-300">
            DeployIQ™ Industries
          </p>
          <h1 className="mt-4 text-balance text-5xl font-black tracking-tight sm:text-6xl">
            Built for teams where field execution must be proven.
          </h1>
          <p className="mt-6 text-xl leading-9 text-slate-200">
            From retail stores and dealer locations to signage sites and activation
            points, DeployIQ brings verified visibility to distributed operations.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="section-shell">
          <SectionHeading eyebrow="Use Cases" title="Deployment-Specific Workflows For Modern Teams" />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {industrySections.map(([title, copy], index) => (
              <div key={title} className="rounded-lg border border-slate-200 bg-white p-7 card-shadow">
                <div className="mb-8 flex size-12 items-center justify-center rounded-md bg-slate-950 text-lg font-black text-orange-300">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h2 className="text-2xl font-black text-slate-950">{title}</h2>
                <p className="mt-4 leading-8 text-slate-600">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
