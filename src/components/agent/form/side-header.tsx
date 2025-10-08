"use client";

const SideHeader = ({ children }: React.PropsWithChildren) => (
  <h2 className="bg-zinc-100 px-1.5 py-1.5 text-center text-sm font-bold uppercase text-zinc-800 outline-1 outline-zinc-800 sm:rotate-180 sm:py-1.5 sm:[writing-mode:vertical-lr] print:py-0 print:outline-slate-950">
    {children}
  </h2>
);

export { SideHeader };
