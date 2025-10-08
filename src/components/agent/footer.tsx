"use client";

export default function Footer() {
  return (
    <div className="flex flex-col gap-4 font-jost">
      <div className="grid grid-cols-1 font-jost text-xs uppercase sm:grid-cols-2 mb-2">
        <div className="h-12 px-2 py-1 outline-1 outline-zinc-800 print:outline-slate-950">
          20. Authorizing officer
        </div>
        <div className="h-12 px-2 py-1 outline-1 outline-zinc-800 print:outline-slate-950">
          21. Agent signature
        </div>
      </div>
      <div className="flex flex-col gap-2 uppercase lg:flex-row lg:justify-between print:flex-row print:justify-between">
        <div className="flex items-center justify-center">
          <span className="font-roboto-condensed text-3xl">DD</span>
          <div className="w-24 text-center text-xs leading-none">
            United States form
          </div>
          <span className="font-roboto-condensed text-3xl">315</span>
        </div>
        <div className="flex flex-col items-center gap-2 lg:flex-row print:flex-row">
          <div className="w-96 text-center text-xs leading-none">
            Top secret//orcon//special access required—Delta Green Agent
            documentation sheet
          </div>
          <span className="font-roboto-condensed text-3xl">112382</span>
        </div>
      </div>
    </div>
  );
}
