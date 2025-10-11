"use client";

import { AgentTextarea } from "./form/agent-textarea";
import { SideHeader } from "./form/side-header";
import { SquareCheckbox } from "./form/square-checkbox";
import { useAgentStore } from "./stores/agent";

export default function Injuries() {
  const { agent, update } = useAgentStore((state) => state);

  return (
    <div className="flex flex-col outline-1 outline-zinc-800 sm:flex-row print:outline-slate-950">
      <SideHeader>Injuries</SideHeader>
      <div className="w-full">
        <div
          className="flex h-auto w-full flex-col gap-1 px-2 py-1 font-jost outline-1 outline-zinc-800 print:gap-0 print:outline-slate-950"
          data-headlessui-state=""
        >
          <div className="flex items-center justify-between">
            <label
              className="w-full text-xs uppercase"
              id="headlessui-label-:r1dl:"
              htmlFor="headlessui-control-:r1dk:"
              data-headlessui-state=""
            >
              <h3>14. Wounds and ailments</h3>
            </label>
            {agent && (agent?.wounds?.length ?? 0) > 0 && (
              <span className="text-xs print:hidden">
                {agent?.wounds?.length ?? 0}/300
              </span>
            )}
          </div>
          <AgentTextarea
            fieldName="wounds"
            loading={!agent}
            value={agent?.wounds}
            onChange={(value) => {
              update({ ...agent, wounds: value });
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
              checked={agent?.firstAidAttempted}
              disabled={!agent}
              onCheckedChange={(checked) => {
                if (!agent) return;
                update({ ...agent, firstAidAttempted: !!checked });
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
