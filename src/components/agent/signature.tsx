"use client";

import { useShallow } from "zustand/shallow";
import { Skeleton } from "../ui/skeleton";
import { AgentLabel } from "./form/agent-label";
import { AgentTextInput } from "./form/agent-text-input";
import { useAgentStore } from "./stores/agent";

const MAX_LENGTH = 100;

export default function Signature() {
  const merge = useAgentStore((state) => state.merge);
  const { isLoaded, player } = useAgentStore(
    useShallow((state) => ({
      isLoaded: state.isLoaded,
      player: state.agent?.player || "",
    })),
  );

  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-1 text-xs uppercase sm:grid-cols-2">
        <div className="flex h-18 w-full flex-col gap-1 px-2 py-1 outline-1 outline-zinc-800 dark:outline-zinc-100 print:gap-0 print:outline-slate-950">
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
    </div>
  );
}
