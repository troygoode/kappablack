"use client";

import { Button } from "@/components/ui/button";
import { SettingsIcon } from "@/components/ui/icons/lucide-settings";
import { SettingsMenu } from "./settings-menu";

export function Settings({ className }: { className?: string }) {
  return (
    <div className={className}>
      <SettingsMenu>
        <Button
          size="sm"
          variant="outline"
          className="cursor-pointer bg-black text-zinc-200 border-zinc-800 hover:text-white hover:bg-zinc-800 hover:border-zinc-600 dark:text-black dark:border-zinc-100 dark:hover:bg-zinc-200 dark:hover:text-black dark:hover:border-zinc-200"
        >
          <SettingsIcon />
        </Button>
      </SettingsMenu>
    </div>
  );
}
