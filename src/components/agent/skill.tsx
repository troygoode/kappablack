import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { CirclePlusIcon } from "../ui/icons/lucide-circle-plus";
import { InfoIcon } from "../ui/icons/lucide-info";
import { Trash2Icon } from "../ui/icons/lucide-trash-2";
import { Input } from "../ui/input";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { AgentTextInput } from "./form/agent-text-input";
import { SquareCheckbox } from "./form/square-checkbox";

interface ISkillType {
  type: string;
  score: number | undefined;
  marked: boolean | undefined;
}

export function Skill({
  skill,
  score,
  marked,
  tooltip,
  base,
  update,
}: {
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
          />
        </div>
        <div className="flex grow items-center gap-1.5 text-sm print:text-xs">
          {skill} <span className="hidden print:inline">(10%)</span>
          {tooltip && (
            <div className="relative print:hidden">
              <Tooltip>
                <TooltipTrigger>
                  <InfoIcon size={12} />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="max-w-60 mb-2">{tooltip}</p>
                  {base != undefined && (
                    <p>
                      <strong>Base value:</strong> {base}%
                    </p>
                  )}
                </TooltipContent>
              </Tooltip>
            </div>
          )}
        </div>
      </div>
      <div className="w-20 p-1 outline-1 outline-zinc-800 print:outline-slate-950">
        <div className="flex h-full items-center justify-center">
          <div className="flex gap-0.5">
            <AgentTextInput
              fieldName={`skills.${skill}.score`}
              type="number"
              maxLength={3}
              min={0}
              value={score?.toString() ?? ""}
              onChange={(value) => {
                update(value?.length ? parseInt(value) : undefined, marked);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function MultiSkillType() {
  return (
    <div className="flex grow mt-2">
      <div className="flex w-full flex-col px-2">
        <div className="flex items-center">
          <div className="w-7 pt-1.5">
            <SquareCheckbox className="cursor-pointer" />
          </div>
          <div className="grow gap-0.5">
            <AgentTextInput
              fieldName="multi-skill-type"
              maxLength={50}
              onChange={() => {}}
            />
          </div>
          <Button size="sm" variant="outline" className="cursor-pointer ml-1.5">
            <Trash2Icon />
          </Button>
        </div>
      </div>

      <div className="flex w-20 flex-col px-1">
        <div className="flex h-full items-center">
          <AgentTextInput
            fieldName="multi-skill-score"
            type="number"
            maxLength={3}
            min={0}
            onChange={() => {}}
          />
        </div>
      </div>
    </div>
  );
}

export function MultiSkill({
  skill,
  tooltip,
  types,
}: {
  skill?: string;
  tooltip?: string;
  types?: ISkillType[];
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
                <div className="relative print:hidden">
                  <Tooltip>
                    <TooltipTrigger>
                      <InfoIcon size={12} />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="max-w-60 mb-2">{tooltip}</p>
                      <p>
                        <strong>Base value:</strong> 0%
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              )}
            </div>
            <Button size="sm" variant="outline" className="cursor-pointer">
              <CirclePlusIcon />
            </Button>
          </div>
        </div>
        <div className="flex w-20 items-center flex-col gap-1.5 p-1"></div>
      </div>
      {types && types.length
        ? types.map((type, index) => (
            <MultiSkillType key={`${type.type}-${index}`} />
          ))
        : null}
    </div>
  );
}
