import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PencilLineIcon } from "../ui/icons/lucide-pencil-line";
import { EyeIcon } from "../ui/icons/lucide-eye";
import { PlayIcon } from "../ui/icons/lucide-play";

export function ModeSelector() {
  return (
    <Select value="edit">
      <SelectTrigger className="cursor-pointer w-[180px] bg-input/30 hover:bg-input/50 dark:bg-zinc-800 dark:hover:bg-zinc-700">
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
  );
}
