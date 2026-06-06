type FeatureCardProps = {
  title: string;
  copy: string;
  icon?: string;
};

export function FeatureCard({ title, copy, icon = "✓" }: FeatureCardProps) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-6 card-shadow">
      <div className="mb-6 flex size-12 items-center justify-center rounded-md bg-orange-100 text-xl font-black text-orange-600">
        {icon}
      </div>
      <h3 className="text-xl font-black text-slate-950">{title}</h3>
      <p className="mt-3 leading-7 text-slate-600">{copy}</p>
    </div>
  );
}
