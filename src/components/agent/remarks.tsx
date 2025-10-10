"use client";

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
        className="cursor-pointer hover:bg-destructive hover:text-destructive-foreground dark:hover:bg-destructive dark:hover:text-destructive-foreground"
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
  const { agent, update } = useAgentStore();
  const trainings = agent?.specialTraining || [];

  const addTraining = () => {
    if (trainings.length >= 6) {
      return;
    } else if (trainings.length === 0) {
      trainings.push({ training: undefined, skillOrStat: undefined });
      trainings.push({ training: undefined, skillOrStat: undefined });
    } else {
      trainings.push({ training: undefined, skillOrStat: undefined });
    }
    update({ ...agent, specialTraining: trainings });
  };

  const updateTraining =
    (index: number) =>
    (training: string | undefined, skillOrStat: string | undefined) => {
      if (trainings.length === 0) {
        trainings.push({ training: undefined, skillOrStat: undefined });
      }

      const updatedTrainings = trainings.map((t, i) =>
        i === index ? { ...t, training, skillOrStat } : t
      );
      update({ ...agent, specialTraining: updatedTrainings });
    };

  const removeTraining = (index: number) => () => {
    const updatedTrainings = trainings.filter((_, i) => i !== index);
    update({ ...agent, specialTraining: updatedTrainings });
  };

  return (
    <div className="flex flex-col outline-1 outline-zinc-800 sm:flex-row print:outline-slate-950">
      <SideHeader>Remarks</SideHeader>
      <div className="w-full">
        <div className="flex flex-col lg:grid lg:grid-cols-2 print:grid print:grid-cols-2">
          <div
            className="flex h-auto w-full flex-col gap-1 px-2 py-1 font-jost outline-1 outline-zinc-800 print:gap-0 print:outline-slate-950"
            data-headlessui-state=""
          >
            <div className="flex items-center justify-between">
              <label
                className="w-full text-xs uppercase"
                id="headlessui-label-:r1du:"
                htmlFor="headlessui-control-:r1dt:"
                data-headlessui-state=""
              >
                <h3>17. Personal details and notes</h3>
              </label>
              {agent && (agent?.notes?.length ?? 0) > 0 && (
                <span className="text-xs print:hidden">
                  {agent?.notes?.length ?? 0}/500
                </span>
              )}
            </div>
            <AgentTextarea
              fieldName="notes"
              loading={!agent}
              value={agent?.notes || ""}
              onChange={(value) => {
                update({ ...agent, notes: value });
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
                  id="headlessui-label-:r1e1:"
                  htmlFor="headlessui-control-:r1e0:"
                  data-headlessui-state=""
                >
                  <h3>18. Developments which affect home and family</h3>
                </label>
                {agent && (agent?.developments?.length ?? 0) > 0 && (
                  <span className="text-xs print:hidden">
                    {agent?.developments?.length ?? 0}/300
                  </span>
                )}
              </div>
              <AgentTextarea
                fieldName="developments"
                loading={!agent}
                value={agent?.developments || ""}
                onChange={(value) => {
                  update({ ...agent, developments: value });
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
                    className="cursor-pointer"
                    onClick={() => addTraining()}
                    disabled={!agent || trainings.length >= 6}
                  >
                    <CirclePlusIcon />
                  </Button>
                </div>
                <div className="relative items-center flex h-16 w-1/2 justify-center px-2 py-1 outline-1 outline-zinc-800 sm:h-12 print:outline-slate-950">
                  Skill or stat used
                </div>
              </div>
              {trainings && trainings.length ? (
                trainings.map((training, index) => (
                  <SpecialTraining
                    key={`special-training-${index}`}
                    index={index}
                    loading={!agent}
                    training={training.training}
                    skillOrStat={training.skillOrStat}
                    update={updateTraining(index)}
                    remove={removeTraining(index)}
                  />
                ))
              ) : (
                <SpecialTraining
                  loading={!agent}
                  index={0}
                  training={undefined}
                  skillOrStat={undefined}
                  update={updateTraining(0)}
                  remove={removeTraining(0)}
                />
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-center px-2 py-1 font-jost text-sm">
          Please indicate why this agent was recruited and why the agent agreed
          to be recruited.
        </div>
      </div>
    </div>
  );
}
