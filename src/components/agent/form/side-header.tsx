"use client";

const SideHeader = ({ children }: React.PropsWithChildren) => (
  <h2
    className={`
      px-1.5 py-1.5 text-center text-sm font-bold uppercase sm:rotate-180 sm:py-1.5 sm:[writing-mode:vertical-lr]
    bg-zinc-800 text-white outline-zinc-800
    dark:bg-white dark:text-zinc-800 dark:outline-zinc-100
      print:py-0 print:outline-slate-950`}
  >
    {children}
  </h2>
);

export { SideHeader };
