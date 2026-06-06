import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { DashboardMockup } from "@/components/DashboardMockup";
import { FeatureCard } from "@/components/FeatureCard";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore DeployIQ™ features for GPS verification, photo evidence, installer management, campaign tracking, analytics, and client visibility."
};

const features = [
  ["GPS Verification", "Confirm field execution with location data tied to each deployment submission.", "G"],
  ["Photo Evidence Management", "Capture, review, approve, and organize field photos by campaign, site, installer, and region.", "P"],
  ["AI-Assisted Validation", "Use assisted checks to flag incomplete evidence, duplicate submissions, and review exceptions faster.", "AI"],
  ["Installer Management", "Assign installers, monitor progress, and connect activity to responsible field personnel.", "I"],
  ["Campaign Management", "Plan deployment projects, allocate territories, set objectives, and track work from kickoff to closeout.", "C"],
  ["Reports & Analytics", "Turn field execution into completion rates, approval trends, regional insights, and executive summaries.", "R"],
  ["Client Portal", "Give clients structured visibility into project progress, evidence review, and campaign reporting.", "CP"]
];

export default function FeaturesPage() {
  return (
    <>
      <section className="dark-panel py-20 text-white">
        <div className="section-shell grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-orange-300">
              DeployIQ™ Features
            </p>
            <h1 className="mt-4 text-balance text-5xl font-black tracking-tight sm:text-6xl">
              Verified field execution, managed from one platform.
            </h1>
            <p className="mt-6 text-xl leading-9 text-slate-200">
              Built for teams that need field evidence, installer accountability,
              campaign visibility, and analytics without manual reporting chaos.
            </p>
          </div>
          <DashboardMockup />
        </div>
      </section>

      <section className="py-20">
        <div className="section-shell">
          <SectionHeading eyebrow="Core Capabilities" title="Everything Needed To Execute, Track, And Verify" />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {features.map(([title, copy, icon]) => (
              <FeatureCard key={title} title={title} copy={copy} icon={icon} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="section-shell grid gap-6 lg:grid-cols-3">
          {[
            ["Plan", "Create campaigns, allocate territories, assign installers, and define what success should look like."],
            ["Review", "Evaluate evidence, approve submissions, reject incomplete work, and keep every decision traceable."],
            ["Report", "Share structured progress, completion, and performance views with managers, clients, and leadership."]
          ].map(([title, copy]) => (
            <div key={title} className="rounded-lg bg-slate-950 p-8 text-white">
              <div className="text-4xl font-black text-orange-300">{title}</div>
              <p className="mt-5 leading-8 text-slate-300">{copy}</p>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
