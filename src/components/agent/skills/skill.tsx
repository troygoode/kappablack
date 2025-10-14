"use client";

import { Skeleton } from "../../ui/skeleton";
import { AgentTextInput } from "../form/agent-text-input";
import { AgentTooltip } from "../form/agent-tooltip";
import { SquareCheckbox } from "../form/square-checkbox";

export function Skill({
  loading,
  skill,
  score,
  marked,
  tooltip,
  base,
  update,
}: {
  loading: boolean;
  skill?: string;
  score?: number | undefined;
  marked?: boolean | undefined;
  tooltip?: string;
  base?: number;
  update: (score: number | undefined, marked: boolean | undefined) => void;
}) {
  return (
    <div className="flex grow">
      <div className="flex w-full items-center px-2 py-1 outline-1 outline-zinc-800 print:outline-slate-950">
        <div className="w-7 pt-1.5">
          <SquareCheckbox
            className="cursor-pointer"
            checked={marked}
            onCheckedChange={(checked) => {
              update(score, checked === true);
            }}
            disabled={loading}
          />
        </div>
        <div className="flex grow items-center gap-1.5 text-sm print:text-xs">
          {skill} <span className="hidden print:inline">(10%)</span>
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
        </div>
      </div>
      <div className="w-20 p-1 outline-1 outline-zinc-800 print:outline-slate-950">
        <div className="flex h-full items-center justify-center">
          <div className="flex gap-0.5 w-full">
            {!loading ? (
              <AgentTextInput
                fieldName={`skills.${skill}.score`}
                type="number"
                value={score?.toString() ?? ""}
                placeholder={base && base !== 0 ? base.toString() : undefined}
                maxLength={3}
                min={0}
                onChange={(value) => {
                  update(value?.length ? parseInt(value) : undefined, marked);
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
