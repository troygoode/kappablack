"use client";

import classNames from "classnames";

const AgentField = ({
  className,
  children,
}: React.PropsWithChildren<{ className?: string }>) => (
  <div
    className={classNames(
      className,
      `flex h-auto w-full flex-col gap-1 px-2 py-1
      sm:outline-1 outline-zinc-800
      print:gap-0 print:outline-slate-950`
    )}
  >
    {children}
  </div>
);

export { AgentField };
