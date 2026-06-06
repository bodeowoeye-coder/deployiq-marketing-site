import { CTASection } from "@/components/CTASection";
import { DashboardMockup } from "@/components/DashboardMockup";
import { FeatureCard } from "@/components/FeatureCard";
import { NigeriaMap } from "@/components/NigeriaMap";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { SectionHeading } from "@/components/SectionHeading";
import { faqs, industries } from "@/data/site";
import { ButtonLink } from "@/components/ButtonLink";

const problems = ["WhatsApp reports", "Phone calls", "Excel tracking", "Manual verification", "Delayed reporting"];
const outcomes = ["Limited visibility", "Poor accountability", "Budget leakage", "Delayed decisions", "Inconsistent execution"];

const modules = [
  {
    title: "Installer App",
    points: ["Photo Upload", "GPS Capture", "Submission Tracking"]
  },
  {
    title: "Campaign Management",
    points: ["Project Planning", "Installer Assignment", "Territory Allocation"]
  },
  {
    title: "Deployment Dashboard",
    points: ["Live Activity Monitoring", "Approval Tracking", "Progress Monitoring"]
  },
  {
    title: "Reports & Analytics",
    points: ["Completion Rates", "Regional Performance", "Approval Trends"]
  },
  {
    title: "Client Portal",
    points: ["Project Visibility", "Evidence Review", "Campaign Reporting"]
  }
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#061427] py-16 text-white sm:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px),radial-gradient(circle_at_14%_16%,rgba(249,115,22,0.28),transparent_30%),radial-gradient(circle_at_88%_18%,rgba(255,255,255,0.08),transparent_24%),linear-gradient(135deg,#061427_0%,#0b213b_52%,#071424_100%)] bg-[length:36px_36px,36px_36px,auto,auto,auto]" />
        <div className="section-shell relative z-10 grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="relative z-10">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-orange-300">
              Execute. Track. Verify.
            </p>
            <h1 className="mt-5 text-balance text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
              DeployIQ™ Field Deployment Intelligence Platform
            </h1>
            <p className="mt-6 text-xl font-medium leading-9 text-slate-100">
              DeployIQ™ gives brands, agencies, and field teams complete visibility
              into retail execution, POSM deployment, merchandising activities,
              activations, signage installations, and out-of-home advertising campaigns.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact">Book a Demo</ButtonLink>
              <ButtonLink href="/features" variant="secondary">
                Watch Platform Overview
              </ButtonLink>
            </div>
          </div>
          <DashboardMockup />
        </div>
      </section>

      <section className="py-20">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Trusted Visibility"
            title="Trusted Visibility for Modern Field Operations"
            copy="Whether deploying dealer boards in Lagos, merchandising products in Kano, activating campaigns in Port Harcourt, or installing signage in Abuja, DeployIQ ensures every field activity is visible, measurable, and accountable."
          />
          <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
            {["FMCG", "Telecommunications", "OOH", "Retail", "Marketing Agencies", "Field Services"].map((industry) => (
              <div key={industry} className="rounded-lg border border-slate-200 bg-white p-5 text-center text-sm font-black text-slate-800">
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="section-shell grid gap-8 lg:grid-cols-2">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-orange-600">
              The Problem
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
              Most Field Deployments Still Operate in the Dark
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[["Common Inputs", problems], ["Business Outcomes", outcomes]].map(([title, items]) => (
              <div key={title as string} className="rounded-lg border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-lg font-black text-slate-950">{title as string}</h3>
                <div className="mt-5 space-y-3">
                  {(items as string[]).map((item) => (
                    <div key={item} className="flex items-center gap-3 text-slate-700">
                      <span className="size-2 rounded-full bg-orange-500" />
                      <span className="font-semibold">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="section-shell">
          <SectionHeading eyebrow="DeployIQ Difference" title="From Field Activity To Verified Intelligence" />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <FeatureCard title="Capture" copy="Field teams submit deployment evidence directly from the field." icon="C" />
            <FeatureCard title="Verify" copy="GPS coordinates and photographic evidence confirm execution." icon="V" />
            <FeatureCard title="Track" copy="Monitor projects, installers, territories, and progress in real time." icon="T" />
            <FeatureCard title="Analyze" copy="Transform deployment activities into actionable intelligence." icon="A" />
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="section-shell">
          <SectionHeading eyebrow="How It Works" title="A Clear Path From Execution To Oversight" />
          <div className="mt-12">
            <ProcessTimeline />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="section-shell">
          <SectionHeading eyebrow="Platform Modules" title="Built For Every Layer Of Field Deployment" />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {modules.map((module) => (
              <div key={module.title} className="rounded-lg border border-slate-200 bg-white p-6 card-shadow">
                <h3 className="text-xl font-black text-slate-950">{module.title}</h3>
                <div className="mt-5 space-y-3">
                  {module.points.map((point) => (
                    <div key={point} className="rounded-md bg-slate-50 px-4 py-3 text-sm font-bold text-slate-700">
                      {point}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="section-shell">
          <NigeriaMap />
        </div>
      </section>

      <section className="py-20">
        <div className="section-shell">
          <SectionHeading eyebrow="Industries" title="Deployment Intelligence Across Operational Teams" />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <FeatureCard
                key={industry}
                title={industry}
                copy="Plan field activity, capture evidence, verify execution, and report progress with confidence."
                icon="•"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white">
        <div className="section-shell">
          <SectionHeading eyebrow="Why DeployIQ" title="Operational Control Without Guesswork" light />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              ["Real-Time Visibility", "See live field progress, regional activity, evidence queues, and completion movement from one command center."],
              ["Accountability", "Connect every submission to an installer, campaign, territory, timestamp, GPS location, and review decision."],
              ["Operational Intelligence", "Turn deployment activity into management insight for budget control, execution quality, and faster decisions."]
            ].map(([title, copy]) => (
              <div key={title} className="rounded-lg border border-white/10 bg-white/10 p-6">
                <h3 className="text-xl font-black">{title}</h3>
                <p className="mt-4 leading-7 text-slate-300">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="section-shell grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-lg bg-orange-100 p-8">
            <div className="rounded-lg bg-white p-6 card-shadow">
              <div className="text-sm font-black uppercase tracking-[0.18em] text-orange-600">
                Impact Visibility Ltd
              </div>
              <div className="mt-8 grid gap-3">
                {["Technology", "GPS Verification", "Photographic Evidence", "Workflow Management", "Real-Time Reporting"].map((item) => (
                  <div key={item} className="rounded-md bg-slate-950 px-4 py-3 text-sm font-bold text-white">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-orange-600">
              About Impact Visibility
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
              Built By Field Deployment Professionals
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              DeployIQ was developed by Impact Visibility Ltd to solve one of the
              biggest challenges in field deployment: visibility.
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              By combining technology, GPS verification, photographic evidence,
              workflow management, and real-time reporting, DeployIQ bridges the gap
              between field execution and executive oversight.
            </p>
          </div>
        </div>
      </section>

      <CTASection />

      <section className="bg-white py-20">
        <div className="section-shell">
          <SectionHeading eyebrow="FAQ" title="Questions Field Teams Usually Ask First" />
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-lg border border-slate-200 p-6">
                <h3 className="text-lg font-black text-slate-950">{faq.question}</h3>
                <p className="mt-3 leading-7 text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
