import { Button } from "../ui/button";
import { CirclePlusIcon } from "../ui/icons/lucide-circle-plus";
import { InfoIcon } from "../ui/icons/lucide-info";
import { Trash2Icon } from "../ui/icons/lucide-trash-2";
import { Skeleton } from "../ui/skeleton";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { AgentTextInput } from "./form/agent-text-input";
import { SquareCheckbox } from "./form/square-checkbox";

interface ISkillType {
  type: string | undefined;
  score: number | undefined;
  marked: boolean | undefined;
}

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
          <div className="flex gap-0.5 w-full">
            {!loading ? (
              <AgentTextInput
                fieldName={`skills.${skill}.score`}
                type="number"
                value={score?.toString() ?? ""}
                maxLength={3}
                min={0}
                onChange={(value) => {
                  update(value?.length ? parseInt(value) : undefined, marked);
                }}
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

function MultiSkillType({
  loading,
  type,
  score,
  marked,
  onUpdateType,
  onRemoveType,
}: ISkillType & {
  loading: boolean;
  onUpdateType: (
    type: string | undefined,
    score: number | undefined,
    marked: boolean | undefined
  ) => void;
  onRemoveType: () => void;
}) {
  return (
    <div className="flex grow mt-2">
      <div className="flex w-full flex-col px-2">
        <div className="flex items-center">
          <div className="w-7 pt-1.5">
            <SquareCheckbox
              className="cursor-pointer"
              checked={!!marked}
              onCheckedChange={(checked) =>
                onUpdateType(type, score, !!checked)
              }
            />
          </div>
          <div className="grow gap-0.5">
            {!loading ? (
              <AgentTextInput
                fieldName="multi-skill-type"
                value={type}
                maxLength={50}
                onChange={(value) => onUpdateType(value, score, marked)}
              />
            ) : (
              <Skeleton className="h-9 w-full" />
            )}
          </div>
          <Button
            size="sm"
            variant="outline"
            className="cursor-pointer ml-1.5 hover:bg-destructive hover:text-destructive-foreground dark:hover:bg-destructive dark:hover:text-destructive-foreground"
            onClick={() => onRemoveType()}
            disabled={loading}
          >
            <Trash2Icon />
          </Button>
        </div>
      </div>

      <div className="flex w-20 flex-col px-1">
        <div className="flex h-full items-center">
          {!loading ? (
            <AgentTextInput
              fieldName="multi-skill-score"
              type="number"
              value={score?.toString()}
              onChange={(value) =>
                onUpdateType(type, value ? parseInt(value) : undefined, marked)
              }
              maxLength={3}
              min={0}
            />
          ) : (
            <Skeleton className="h-9 w-full" />
          )}
        </div>
      </div>
    </div>
  );
}

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
            loading={loading}
            key={`${skill}-type-${index}`}
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
          key={`${skill}-type-0`}
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
