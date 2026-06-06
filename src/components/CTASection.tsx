import { ButtonLink } from "./ButtonLink";

export function CTASection() {
  return (
    <section className="dark-panel py-20 text-white">
      <div className="section-shell grid items-center gap-8 md:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-orange-300">
            DeployIQ™
          </p>
          <h2 className="mt-3 text-balance text-4xl font-black tracking-tight sm:text-5xl">
            Ready To Transform Your Field Operations?
          </h2>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
          <ButtonLink href="/contact" variant="primary">
            Book Demo
          </ButtonLink>
          <ButtonLink href="/contact" variant="secondary">
            Contact Sales
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
