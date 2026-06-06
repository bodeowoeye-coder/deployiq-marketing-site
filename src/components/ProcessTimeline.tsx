const steps = [
  "Field Installer Executes Deployment",
  "Capture Evidence",
  "GPS Verification",
  "Management Review",
  "Executive Visibility"
];

export function ProcessTimeline() {
  return (
    <div className="grid gap-4 md:grid-cols-5">
      {steps.map((step, index) => (
        <div key={step} className="relative rounded-lg border border-slate-200 bg-white p-5 card-shadow">
          <div className="mb-8 flex size-11 items-center justify-center rounded-full bg-slate-950 text-sm font-black text-orange-300">
            {index + 1}
          </div>
          <h3 className="text-lg font-black leading-6 text-slate-950">{step}</h3>
        </div>
      ))}
    </div>
  );
}
