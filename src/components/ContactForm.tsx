const industries = [
  "FMCG",
  "Telecommunications",
  "OOH Advertising",
  "Retail",
  "Marketing Agency",
  "Field Services",
  "Other"
];

export function ContactForm() {
  return (
    <form className="rounded-lg border border-slate-200 bg-white p-6 card-shadow">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-bold text-slate-700">
          Full Name
          <input className="mt-2 w-full rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-orange-500" name="fullName" />
        </label>
        <label className="text-sm font-bold text-slate-700">
          Company Name
          <input className="mt-2 w-full rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-orange-500" name="companyName" />
        </label>
        <label className="text-sm font-bold text-slate-700">
          Email Address
          <input type="email" className="mt-2 w-full rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-orange-500" name="email" />
        </label>
        <label className="text-sm font-bold text-slate-700">
          Phone Number
          <input className="mt-2 w-full rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-orange-500" name="phone" />
        </label>
        <label className="text-sm font-bold text-slate-700 sm:col-span-2">
          Industry
          <select className="mt-2 w-full rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-orange-500" name="industry">
            {industries.map((industry) => (
              <option key={industry}>{industry}</option>
            ))}
          </select>
        </label>
        <label className="text-sm font-bold text-slate-700 sm:col-span-2">
          Message
          <textarea className="mt-2 min-h-36 w-full rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-orange-500" name="message" />
        </label>
      </div>
      <button className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-md bg-orange-500 px-6 py-3 text-sm font-black text-white shadow-lg shadow-orange-500/25 transition hover:bg-orange-600 sm:w-auto">
        Request Demo
      </button>
    </form>
  );
}
