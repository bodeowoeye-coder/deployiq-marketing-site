type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  copy?: string;
  light?: boolean;
};

export function SectionHeading({ eyebrow, title, copy, light = false }: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow ? (
        <p className={`text-sm font-black uppercase tracking-[0.18em] ${light ? "text-orange-300" : "text-orange-600"}`}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className={`mt-3 text-balance text-3xl font-black tracking-tight sm:text-5xl ${light ? "text-white" : "text-slate-950"}`}>
        {title}
      </h2>
      {copy ? (
        <p className={`mt-5 text-lg leading-8 ${light ? "text-slate-300" : "text-slate-600"}`}>
          {copy}
        </p>
      ) : null}
    </div>
  );
}
