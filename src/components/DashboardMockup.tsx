const bars = ["h-24", "h-36", "h-28", "h-44", "h-32", "h-40"];

export function DashboardMockup() {
  return (
    <div className="card-shadow rounded-lg border border-white/15 bg-white p-3">
      <div className="rounded-md bg-slate-950 p-4 text-white">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-300">
              Live Operations
            </div>
            <div className="mt-1 text-xl font-black">Deployment Command Center</div>
          </div>
          <div className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-bold text-emerald-300">
            94% verified
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          {["Active Sites", "Evidence", "Approvals"].map((label, index) => (
            <div key={label} className="rounded-md bg-white/10 p-3">
              <div className="text-2xl font-black">{[248, 1240, 86][index]}</div>
              <div className="text-xs text-slate-300">{label}</div>
            </div>
          ))}
        </div>
        <div className="mt-4 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-md bg-white/10 p-4">
            <div className="mb-4 text-sm font-bold">Regional Completion</div>
            <div className="flex h-48 items-end gap-3">
              {bars.map((height, index) => (
                <div key={index} className="flex flex-1 flex-col items-center gap-2">
                  <div className={`${height} w-full rounded-t bg-orange-400`} />
                  <span className="text-[10px] text-slate-300">
                    {["LA", "AB", "KN", "PH", "EN", "IB"][index]}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-md bg-white/10 p-4">
            <div className="mb-4 text-sm font-bold">Evidence Queue</div>
            <div className="space-y-3">
              {["Dealer board", "Shelf display", "Road signage", "Activation booth"].map(
                (item) => (
                  <div key={item} className="flex items-center justify-between rounded bg-white/10 p-3">
                    <span className="text-xs">{item}</span>
                    <span className="size-2 rounded-full bg-orange-300" />
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
