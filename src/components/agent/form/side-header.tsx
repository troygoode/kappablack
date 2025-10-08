"use client";

const SideHeader = ({ children }: React.PropsWithChildren) => (
  <h2 className="bg-slate-950 px-1.5 py-1.5 text-center font-jost text-sm font-bold uppercase text-slate-50 outline-1 outline-slate-500 sm:rotate-180 sm:py-5 sm:[writing-mode:vertical-lr] print:py-0 print:outline-slate-950">
    {children}
  </h2>
);

export { SideHeader };
