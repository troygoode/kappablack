"use client";

import { Button } from "../../ui/button";
import { CirclePlusIcon } from "../../ui/icons/lucide-circle-plus";
import { AgentTooltip } from "../form/agent-tooltip";
import { MultiSkillType, type ISkillType } from "./multiskill-type";

export function MultiSkill({
  loading,
  skill,
  tooltip,
  types,
  onAddType,
  onUpdateType,
  onRemoveType,
}: {
  loading: boolean;
  skill?: string;
  tooltip?: string;
  types?: ISkillType[];
  onAddType: () => void;
  onUpdateType: (
    index: number
  ) => (
    type: string | undefined,
    score: number | undefined,
    marked: boolean | undefined
  ) => void;
  onRemoveType: (index: number) => () => void;
}) {
  return (
    <div className="py-2 outline-1 outline-zinc-800 print:outline-slate-950">
      <div className="flex grow">
        <div className="flex justify-center w-full flex-col px-2">
          <div className="flex justify-center">
            <div className="w-7 pt-1.5"></div>
            <div className="flex grow items-center gap-1.5 text-sm print:text-xs">
              {skill} <span className="hidden print:inline">(0%)</span>
              {tooltip && (
                <AgentTooltip>
                  <p className="mb-2">{tooltip}</p>
                  <p>
                    <strong>Base value:</strong> 0%
                  </p>
                </AgentTooltip>
              )}
            </div>
            <Button
              size="sm"
              variant="outline"
              className="cursor-pointer"
              onClick={() => onAddType()}
              disabled={loading || (types && types.length >= 3)}
            >
              <CirclePlusIcon />
            </Button>
          </div>
        </div>
        <div className="flex w-20 items-center flex-col gap-1.5 p-1"></div>
      </div>
      {types && types.length ? (
        types.map((type, index) => (
          <MultiSkillType
            key={`${skill}-type-${index}`}
            loading={loading}
            uniqueKey={`${skill}-type-${index}`}
            type={type.type}
            score={type.score}
            marked={type.marked}
            onUpdateType={onUpdateType(index)}
            onRemoveType={onRemoveType(index)}
          />
        ))
      ) : (
        <MultiSkillType
          loading={loading}
          uniqueKey={`${skill}-type-0`}
          type={undefined}
          score={undefined}
          marked={undefined}
          onUpdateType={onUpdateType(0)}
          onRemoveType={onRemoveType(0)}
        />
      )}
    </div>
  );
}
