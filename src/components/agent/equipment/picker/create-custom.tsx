"use client";

import { Button } from "@/components/ui/button";
import { BrainIcon } from "@/components/ui/icons/lucide-brain";
import { HeartCrackIcon } from "@/components/ui/icons/lucide-heart-crack";
import { SheetClose } from "@/components/ui/sheet";

export function CreateCustom({
  onClick,
}: {
  onClick?: (type: string) => void;
}) {
  return (
    <div className="flex w-full items-center justify-center gap-3 p-2 border-1 border-dashed border-muted-foreground rounded-md">
      <div className="text-sm text-muted-foreground">Custom Weapon</div>
      <SheetClose asChild>
        <Button
          className="cursor-pointer"
          onClick={() => {
            if (onClick) onClick("lethal");
          }}
        >
          <HeartCrackIcon />
          <span className="pt-1">Lethal</span>
        </Button>
      </SheetClose>
      <SheetClose asChild>
        <Button
          className="cursor-pointer"
          onClick={() => {
            if (onClick) onClick("stun");
          }}
        >
          <BrainIcon />
          <span className="pt-1">Stun</span>
        </Button>
      </SheetClose>
    </div>
  );
}
