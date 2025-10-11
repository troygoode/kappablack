"use client";

import { useShallow } from "zustand/shallow";

import { AgentLabel } from "./form/agent-label";
import { AgentTextInput } from "./form/agent-text-input";
import { useAgentStore } from "./stores/agent";
import { Skeleton } from "../ui/skeleton";

const MAX_LENGTH = 100;

export default function Footer() {
  const merge = useAgentStore((state) => state.merge);
  const { isLoaded, player } = useAgentStore(
    useShallow((state) => ({
      isLoaded: state.isLoaded,
      player: state.agent?.player || "",
    }))
  );

  return (
    <div className="flex flex-col gap-4 font-jost">
      <div className="grid grid-cols-1 font-jost text-xs uppercase sm:grid-cols-2 mb-2">
        <div className="flex h-18 w-full flex-col gap-1 px-2 py-1 font-jost outline-1 outline-zinc-800 dark:outline-zinc-100 print:gap-0 print:outline-slate-950">
          <AgentLabel
            fieldName="player"
            length={player.length}
            maxLength={MAX_LENGTH}
          >
            20. Authorizing officer
          </AgentLabel>
          {isLoaded ? (
            <AgentTextInput
              fieldName="player"
              onChange={(value) => {
                merge({ player: value });
              }}
              maxLength={MAX_LENGTH}
              value={player}
            />
          ) : (
            <Skeleton className="h-9 w-full" />
          )}
        </div>
        <div className="h-18 px-2 py-1 outline-1 outline-zinc-800 dark:outline-zinc-100 print:outline-slate-950">
          21. Agent signature
        </div>
      </div>
      <div className="flex flex-col gap-2 uppercase lg:flex-row lg:justify-between print:flex-row print:justify-between">
        <div className="flex items-center justify-center">
          <span className="font-roboto-condensed text-3xl">DD</span>
          <div className="w-24 text-center text-xs leading-none">
            United States form
          </div>
          <span className="font-roboto-condensed text-3xl">315</span>
        </div>
        <div className="flex flex-col items-center gap-2 lg:flex-row print:flex-row">
          <div className="w-96 text-center text-xs leading-none">
            Top secret//orcon//special access required—Delta Green Agent
            documentation sheet
          </div>
          <span className="font-roboto-condensed text-3xl">112382</span>
        </div>
      </div>
    </div>
  );
}
