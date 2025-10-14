"use client";

import { useShallow } from "zustand/shallow";

import { Skeleton } from "../../ui/skeleton";
import { AgentTextInput } from "../form/agent-text-input";
import { AgentTooltip } from "../form/agent-tooltip";
import { SquareCheckbox } from "../form/square-checkbox";
import { useAgentStore } from "../stores/agent";

export function Skill({
  fieldName,
  skill,
  tooltip,
  base,
}: {
  fieldName: string;
  skill: string;
  tooltip?: string;
  base?: number;
}) {
  const updateSkill = useAgentStore((state) => state.updateSkill);
  const isLoaded = useAgentStore((state) => state.isLoaded);
  const { marked, score } = useAgentStore(
    useShallow((state) => state.getSkill(skill))
  );

  return (
    <div className="flex grow">
      <div className="flex w-full items-center px-2 py-1 outline-1 outline-zinc-800 print:outline-slate-950">
        <div className="w-7 pt-1.5">
          <SquareCheckbox
            className="cursor-pointer"
            checked={marked}
            onCheckedChange={(checked) => {
              updateSkill(skill, score, checked === true);
            }}
            disabled={!isLoaded}
          />
        </div>
        <div className="flex grow items-center gap-1.5 text-sm print:text-xs">
          {tooltip && (
            <AgentTooltip>
              <p className="mb-2">{tooltip}</p>
              {base != undefined && (
                <p>
                  <strong>Base value:</strong> {base}%
                </p>
              )}
            </AgentTooltip>
          )}
          <span>{skill}</span>
          {base !== undefined && base !== 0 && (
            <span className="hidden print:inline">({base}%)</span>
          )}
        </div>
      </div>
      <div className="w-20 p-1 outline-1 outline-zinc-800 print:outline-slate-950">
        <div className="flex h-full items-center justify-center">
          <div className="flex gap-0.5 w-full">
            {isLoaded ? (
              <AgentTextInput
                fieldName={`${fieldName}-score`}
                type="number"
                value={score?.toString() ?? ""}
                placeholder={base && base !== 0 ? base.toString() : undefined}
                maxLength={3}
                min={0}
                onChange={(value) => {
                  updateSkill(
                    skill,
                    value?.length ? parseInt(value) : undefined,
                    marked
                  );
                }}
                required
              />
            ) : (
              <Skeleton className="h-9 w-full" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
