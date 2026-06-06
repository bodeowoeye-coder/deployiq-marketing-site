const states = ["Lagos", "Abuja", "Kano", "Port Harcourt", "Enugu", "Ibadan", "Kaduna"];

export function NigeriaMap() {
  return (
    <div className="grid items-center gap-8 rounded-lg border border-slate-200 bg-white p-6 card-shadow lg:grid-cols-[1fr_0.8fr]">
      <div className="relative min-h-[320px] overflow-hidden rounded-lg bg-slate-950 grid-paper">
        <div className="map-shape absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 bg-orange-400 shadow-2xl shadow-orange-500/30" />
        {states.slice(0, 5).map((state, index) => (
          <div
            key={state}
            className="absolute rounded-full border border-white/30 bg-white px-2 py-1 text-[10px] font-black text-slate-950"
            style={{
              left: `${[24, 52, 46, 58, 44][index]}%`,
              top: `${[65, 47, 24, 72, 76][index]}%`
            }}
          >
            {state}
          </div>
        ))}
      </div>
      <div>
        <p className="text-sm font-black uppercase tracking-[0.18em] text-orange-600">
          Nationwide Visibility
        </p>
        <h3 className="mt-3 text-3xl font-black tracking-tight text-slate-950">
          See Every Deployment Across Nigeria
        </h3>
        <div className="mt-6 flex flex-wrap gap-3">
          {states.map((state) => (
            <span key={state} className="rounded-full border border-slate-200 px-4 py-2 text-sm font-bold text-slate-700">
              {state}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
