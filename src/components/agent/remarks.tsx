"use client";

import { useShallow } from "zustand/shallow";

import { Button } from "../ui/button";
import { CirclePlusIcon } from "../ui/icons/lucide-circle-plus";
import { Trash2Icon } from "../ui/icons/lucide-trash-2";
import { Skeleton } from "../ui/skeleton";
import { AgentTextInput } from "./form/agent-text-input";
import { AgentTextarea } from "./form/agent-textarea";
import { SideHeader } from "./form/side-header";
import { useAgentStore } from "./stores/agent";

const SpecialTraining = ({
  loading,
  index,
  training,
  skillOrStat,
  update,
  remove,
}: {
  loading: boolean;
  index: number;
  training: string | undefined;
  skillOrStat: string | undefined;
  update: (
    training: string | undefined,
    skillOrStat: string | undefined
  ) => void;
  remove: () => void;
}) => (
  <div className="flex">
    <div className="flex w-1/2 items-center gap-1.5 px-2 py-1 outline-1 outline-zinc-800 print:outline-slate-950">
      <div className="grow">
        {!loading ? (
          <AgentTextInput
            fieldName={`special-training-${index}`}
            value={training ?? ""}
            onChange={(value) => update(value, skillOrStat)}
            maxLength={50}
          />
        ) : (
          <Skeleton className="h-9 w-full" />
        )}
      </div>
      <Button
        size="sm"
        variant="outline"
        className="cursor-pointer hover:bg-destructive hover:text-destructive-foreground dark:hover:bg-destructive dark:hover:text-destructive-foreground print:hidden"
        onClick={() => remove()}
        disabled={loading}
      >
        <Trash2Icon />
      </Button>
    </div>
    <div className="w-1/2 text-center outline-1 outline-zinc-800 print:outline-slate-950">
      <div className="flex h-full w-full flex-col justify-end gap-1 px-2 py-1 font-jost outline-1 outline-zinc-800 print:gap-0 print:outline-slate-950">
        {!loading ? (
          <AgentTextInput
            fieldName={`special-training-${index}-skill`}
            value={skillOrStat ?? ""}
            onChange={(value) => update(training, value)}
            maxLength={50}
            disabled={!training?.length}
          />
        ) : (
          <Skeleton className="h-9 w-full" />
        )}
      </div>
    </div>
  </div>
);

export default function Remarks() {
  const merge = useAgentStore((state) => state.merge);
  const { isLoaded, notes, developments } = useAgentStore(
    useShallow((state) => ({
      isLoaded: state.isLoaded,
      notes: state.agent?.notes || "",
      developments: state.agent?.developments || "",
    }))
  );
  const trainings = useAgentStore(
    useShallow((state) => state.agent?.specialTraining || [])
  );

  const addTraining = () => {
    if (trainings.length >= 6) {
      return;
    }
    const updated = [...trainings];
    const newItem = { training: undefined, skillOrStat: undefined };
    updated.push(newItem);
    merge({ specialTraining: updated });
  };

  const updateTraining =
    (index: number) =>
    (training: string | undefined, skillOrStat: string | undefined) => {
      const updated = [...trainings];
      updated[index] = { training, skillOrStat };
      merge({ specialTraining: updated });
    };

  const removeTraining = (index: number) => () => {
    const updated = [...trainings];
    updated.splice(index, 1);
    merge({ specialTraining: updated });
  };

  return (
    <div className="flex flex-col outline-1 outline-zinc-800 sm:flex-row print:outline-slate-950">
      <SideHeader>Remarks</SideHeader>
      <div className="w-full">
        <div className="flex flex-col lg:grid lg:grid-cols-2 print:grid print:grid-cols-2">
          <div className="flex h-auto w-full flex-col gap-1 px-2 py-1 font-jost outline-1 outline-zinc-800 print:gap-0 print:outline-slate-950">
            <div className="flex items-center justify-between">
              <label className="w-full text-xs uppercase" htmlFor="notes">
                <h3>17. Personal details and notes</h3>
              </label>
              {notes.length ? (
                <span className="text-xs print:hidden">
                  {notes.length ?? 0}/500
                </span>
              ) : null}
            </div>
            <AgentTextarea
              fieldName="notes"
              loading={!isLoaded}
              value={notes}
              onChange={(value) => {
                merge({ notes: value });
              }}
              maxLength={500}
            />
          </div>
          <div className="flex flex-col">
            <div
              className="flex h-auto w-full flex-col gap-1 px-2 py-1 font-jost outline-1 outline-zinc-800 print:gap-0 print:outline-slate-950"
              data-headlessui-state=""
            >
              <div className="flex items-center justify-between">
                <label
                  className="w-full text-xs uppercase"
                  htmlFor="developments"
                >
                  <h3>18. Developments which affect home and family</h3>
                </label>
                {developments.length ? (
                  <span className="text-xs print:hidden">
                    {developments.length ?? 0}/300
                  </span>
                ) : null}
              </div>
              <AgentTextarea
                fieldName="developments"
                loading={!isLoaded}
                value={developments}
                onChange={(value) => {
                  merge({ developments: value });
                }}
                maxLength={300}
              />
            </div>
            <div className="flex flex-col font-jost">
              <div className="flex text-xs uppercase">
                <div className="flex w-1/2 items-center justify-between px-2 py-1 outline-1 outline-zinc-800 print:outline-slate-950">
                  <h3>19. Special Training</h3>
                  <Button
                    size="sm"
                    variant="outline"
                    className="cursor-pointer print:hidden"
                    onClick={() => addTraining()}
                    disabled={!isLoaded || trainings.length >= 6}
                  >
                    <CirclePlusIcon />
                  </Button>
                </div>
                <div className="relative items-center flex h-16 w-1/2 justify-center px-2 py-1 outline-1 outline-zinc-800 sm:h-12 print:outline-slate-950">
                  Skill or stat used
                </div>
              </div>
              {trainings.map((training, index) => (
                <SpecialTraining
                  key={`special-training-${index}`}
                  index={index}
                  loading={!isLoaded}
                  training={training.training}
                  skillOrStat={training.skillOrStat}
                  update={updateTraining(index)}
                  remove={removeTraining(index)}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-center px-2 py-1 text-sm text-muted-foreground">
          Please indicate why this agent was recruited and why the agent agreed
          to be recruited.
        </div>
      </div>
    </div>
  );
}
