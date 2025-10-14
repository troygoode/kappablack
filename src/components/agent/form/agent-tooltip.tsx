"use client";

import { InfoIcon } from "@/components/ui/icons/lucide-info";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const AgentTooltip = ({ children }: React.PropsWithChildren) => (
  <div className="relative print:hidden">
    <Tooltip>
      <TooltipTrigger>
        <InfoIcon size={12} className="text-muted-foreground" />
      </TooltipTrigger>
      <TooltipContent className="outline-1 outline-zinc-800 max-w-80">
        {children}
      </TooltipContent>
    </Tooltip>
  </div>
);

export { AgentTooltip };
