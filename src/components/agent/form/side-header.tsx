"use client";

import classNames from "classnames";
import { useAgentStore } from "../stores/agent";

const SideHeader = ({ children }: React.PropsWithChildren) => {
  const mode = useAgentStore((state) => state.mode);
  return (
    <h2
      className={classNames(
        `
        px-1.5 py-1.5 text-center text-sm font-bold uppercase
      bg-zinc-800 text-white outline-zinc-800
      dark:bg-white dark:text-zinc-800 dark:outline-zinc-100
        print:py-0 print:outline-slate-950
        sm:rotate-180 sm:[writing-mode:vertical-lr] sm:py-1.5
        `,

        // TODO this is still not properly printing the rotated text in PDF export
        mode === "print" ? "[&_span]:transform-[rotate(90deg)]" : "",
      )}
    >
      <span>{children}</span>
    </h2>
  );
};

export { SideHeader };
