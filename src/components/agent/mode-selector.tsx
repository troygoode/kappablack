"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { EyeIcon } from "../ui/icons/lucide-eye";
import { PencilLineIcon } from "../ui/icons/lucide-pencil-line";
import { PlayIcon } from "../ui/icons/lucide-play";
import { useAgentStore } from "./stores/agent";

export function ModeSelector({ className }: { className?: string }) {
  const mode = useAgentStore((state) => state.mode);
  const setMode = useAgentStore((state) => state.setMode);

  return (
    <div className={className}>
      <Select value={mode} onValueChange={setMode}>
        <SelectTrigger className="cursor-pointer w-[180px] bg-black text-zinc-200 border-zinc-800 hover:text-white hover:bg-zinc-800 hover:border-zinc-600 dark:text-black dark:border-zinc-100 dark:hover:bg-zinc-200 dark:hover:text-black dark:hover:border-zinc-200">
          <SelectValue placeholder="Select edit mode" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Editing Mode</SelectLabel>
            <SelectItem value="edit" className="cursor-pointer">
              <PencilLineIcon /> Editing
            </SelectItem>
            <SelectItem value="view" className="cursor-pointer">
              <EyeIcon /> Viewing
            </SelectItem>
            <SelectItem value="play" className="cursor-pointer">
              <PlayIcon /> Playing
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
