"use client";

import { toast as sonner } from "sonner";

import { Button } from "../ui/button";
import { XIcon } from "../ui/icons/lucide-x";

export function Toast({
  t,
  children,
}: React.PropsWithChildren<{ t: string | number }>) {
  return (
    <div
      className={`
    bg-white dark:bg-zinc-900 text-foreground outline-0 ring ring-muted-foreground/20 shadow-lg
    print:hidden p-4 rounded-md text-[13px] font-medium min-w-80
    relative
    `}
    >
      {children}
      <div className="absolute top-2.5 right-2.5">
        <Button
          onClick={() => sonner.dismiss(t)}
          size="icon-sm"
          className="cursor-pointer outline-0 border-0"
          variant="outline"
        >
          <XIcon />
        </Button>
      </div>
    </div>
  );
}
