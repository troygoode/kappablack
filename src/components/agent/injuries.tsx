"use client";

import { useShallow } from "zustand/shallow";

import { AgentTextarea } from "./form/agent-textarea";
import { SideHeader } from "./form/side-header";
import { SquareCheckbox } from "./form/square-checkbox";
import { useAgentStore } from "./stores/agent";

export default function Injuries() {
  const merge = useAgentStore((state) => state.merge);
  const { isLoaded, wounds, firstAidAttempted } = useAgentStore(
    useShallow((state) => ({
      isLoaded: state.isLoaded,
      wounds: state.agent?.wounds || "",
      firstAidAttempted: state.agent?.firstAidAttempted || false,
    }))
  );

  return (
    <div className="flex flex-col outline-1 outline-zinc-800 sm:flex-row print:outline-slate-950">
      <SideHeader>Injuries</SideHeader>
      <div className="w-full">
        <div
          className="flex h-auto w-full flex-col gap-1 px-2 py-1 font-jost outline-1 outline-zinc-800 print:gap-0 print:outline-slate-950"
          data-headlessui-state=""
        >
          <div className="flex items-center justify-between">
            <label className="w-full text-xs uppercase" htmlFor="wounds">
              <h3>14. Wounds and ailments</h3>
            </label>
            {wounds.length > 0 && (
              <span className="text-xs print:hidden">{wounds.length}/300</span>
            )}
          </div>
          <AgentTextarea
            fieldName="wounds"
            loading={!isLoaded}
            value={wounds}
            onChange={(value) => {
              merge({ wounds: value });
            }}
            maxLength={300}
          />
        </div>
        <div className="flex flex-col items-center justify-center px-2 py-1 font-jost text-sm lg:flex-row lg:gap-4">
          <span>Has First Aid been attempted since the last injury?</span>
          <div className="flex items-center gap-1">
            <SquareCheckbox
              className="cursor-pointer"
              id="first-aid-no"
              checked={firstAidAttempted}
              disabled={!isLoaded}
              onCheckedChange={(checked) => {
                merge({ firstAidAttempted: !!checked });
              }}
            />
            <span>
              Yes: Only Medicine, Surgery, or long-term rest can help further.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
