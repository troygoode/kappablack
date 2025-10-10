import { InfoIcon } from "@/components/ui/icons/lucide-info";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const AgentTooltip = ({
  maxWidth = 70,
  children,
}: React.PropsWithChildren<{
  maxWidth?: number;
}>) => (
  <div className="relative print:hidden">
    <Tooltip>
      <TooltipTrigger>
        <InfoIcon size={12} className="text-muted-foreground" />
      </TooltipTrigger>
      <TooltipContent className="outline-1 outline-zinc-800">
        <div className={`${maxWidth ? `max-w-${maxWidth}` : ""}`}>
          {children}
        </div>
      </TooltipContent>
    </Tooltip>
  </div>
);

export { AgentTooltip };
