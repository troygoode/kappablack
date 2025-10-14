"use client";

import { useShallow } from "zustand/shallow";

import { Button } from "../../ui/button";
import { CirclePlusIcon } from "../../ui/icons/lucide-circle-plus";
import { AgentTooltip } from "../form/agent-tooltip";
import { useAgentStore } from "../stores/agent";
import { MultiSkillType, type ISkillType } from "./multiskill-type";

export function MultiSkill({
  skill,
  tooltip,
}: {
  skill: string;
  tooltip?: string;
}) {
  const addMultiSkillType = useAgentStore((state) => state.addMultiSkillType);
  const updateMultiSkillType = useAgentStore(
    (state) => state.updateMultiSkillType
  );
  const removeMultiSkillType = useAgentStore(
    (state) => state.removeMultiSkillType
  );
  const isLoaded = useAgentStore((state) => state.isLoaded);
  const types = useAgentStore(
    useShallow((state) => state.getMultiSkillTypes(skill))
  );

  const onUpdateType =
    (index: number) => (type?: string, score?: number, marked?: boolean) => {
      updateMultiSkillType(skill, index, type, score, marked);
    };
  const onRemoveType = (index: number) => () => {
    removeMultiSkillType(skill, index);
  };

  return (
    <div className="py-2 outline-1 outline-zinc-800 print:outline-slate-950">
      <div className="flex grow">
        <div className="flex justify-center w-full flex-col px-2">
          <div className="flex justify-center">
            <div className="w-7 pt-1.5"></div>
            <div className="flex grow items-center gap-1.5 text-sm print:text-xs">
              {tooltip && (
                <span className="inline">
                  <AgentTooltip>
                    <p className="mb-2">{tooltip}</p>
                    <p>
                      <strong>Base value:</strong> 0%
                    </p>
                  </AgentTooltip>
                </span>
              )}
              <span>
                <span className="inline">{skill}</span>
              </span>
              <span className="hidden print:inline">(0%)</span>
            </div>
            <Button
              size="sm"
              variant="outline"
              className="cursor-pointer"
              onClick={() => addMultiSkillType(skill)}
              disabled={!isLoaded || types.length >= 3}
            >
              <CirclePlusIcon />
            </Button>
          </div>
        </div>
        <div className="flex w-20 items-center flex-col gap-1.5 p-1"></div>
      </div>
      {types && types.length
        ? types.map((type, index) => (
            <MultiSkillType
              key={`${skill}-type-${index}`}
              loading={!isLoaded}
              uniqueKey={`${skill}-type-${index}`}
              type={type.type}
              score={type.score}
              marked={type.marked}
              onUpdateType={onUpdateType(index)}
              onRemoveType={onRemoveType(index)}
            />
          ))
        : null}
    </div>
  );
}
