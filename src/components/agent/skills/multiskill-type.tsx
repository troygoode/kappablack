"use client";

import { Button } from "../../ui/button";
import { Trash2Icon } from "../../ui/icons/lucide-trash-2";
import { Skeleton } from "../../ui/skeleton";
import { AgentTextInput } from "../form/agent-text-input";
import { SquareCheckbox } from "../form/square-checkbox";

export interface ISkillType {
  type: string | undefined;
  score: number | undefined;
  marked: boolean | undefined;
}

export function MultiSkillType({
  loading,
  uniqueKey,
  type,
  score,
  marked,
  onUpdateType,
  onRemoveType,
}: ISkillType & {
  loading: boolean;
  uniqueKey: string;
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
              disabled={loading || !type?.length}
            />
          </div>
          <div className="grow gap-0.5">
            {!loading ? (
              <AgentTextInput
                fieldName={`${uniqueKey}-type`}
                value={type ?? ""}
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
              fieldName={`${uniqueKey}-score`}
              type="number"
              value={score?.toString() ?? ""}
              onChange={(value) =>
                onUpdateType(type, value ? parseInt(value) : undefined, marked)
              }
              maxLength={3}
              min={0}
              disabled={!type?.length}
              required
            />
          ) : (
            <Skeleton className="h-9 w-full" />
          )}
        </div>
      </div>
    </div>
  );
}
