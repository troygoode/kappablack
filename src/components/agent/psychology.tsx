"use client";

import { useShallow } from "zustand/shallow";

import { Button } from "../ui/button";
import { CirclePlusIcon } from "../ui/icons/lucide-circle-plus";
import { Trash2Icon } from "../ui/icons/lucide-trash-2";
import { AgentTextInput } from "./form/agent-text-input";
import { SideHeader } from "./form/side-header";
import { SquareCheckbox } from "./form/square-checkbox";
import { Badge } from "../ui/badge";
import { BrainIcon } from "../ui/icons/lucide-brain";
import { HeartCrackIcon } from "../ui/icons/lucide-heart-crack";
import { AgentTextarea } from "./form/agent-textarea";
import { useAgentStore } from "./stores/agent";

const Bond = ({
  index,
  bond,
  score,
  isMarked,
  update,
  remove,
}: {
  index: number;
  bond: string | undefined;
  score: number | undefined;
  isMarked: boolean;
  update: (
    bond: string | undefined,
    score: number | undefined,
    isMarked: boolean
  ) => void;
  remove: () => void;
}) => {
  return (
    <div className="flex">
      <div className="flex grow items-center gap-1.5 px-2 py-1 outline-1 outline-zinc-800 print:outline-slate-950">
        <SquareCheckbox
          className="cursor-pointer"
          checked={isMarked}
          onCheckedChange={(e) => {
            update(bond, score, !!e);
          }}
        />
        <div className="grow" data-headlessui-state="">
          <AgentTextInput
            fieldName={`bond-${index}-text`}
            value={bond ?? ""}
            onChange={(value) => {
              update(value, score, isMarked);
            }}
            maxLength={50}
            required
          />
        </div>
        <Button
          size="sm"
          variant="outline"
          className="cursor-pointer hover:bg-destructive hover:text-destructive-foreground dark:hover:bg-destructive dark:hover:text-destructive-foreground print:hidden"
          onClick={() => remove()}
        >
          <Trash2Icon />
        </Button>
      </div>
      <div className="w-20 text-center outline-1 outline-zinc-800 print:outline-slate-950">
        <div className="flex items-center p-1 outline-zinc-800">
          <div className="flex gap-0.5">
            <AgentTextInput
              className="text-center"
              fieldName={`bond-${index}-score`}
              type="number"
              value={score?.toString() ?? ""}
              onChange={(value) => {
                update(
                  bond,
                  value !== undefined
                    ? parseInt(value) ?? undefined
                    : undefined,
                  isMarked
                );
              }}
              maxLength={3}
              min={0}
              required
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Psychology() {
  const merge = useAgentStore((state) => state.merge);
  const {
    isLoaded,
    motivationsAndDisorders,
    violenceAdaptation,
    helplessnessAdaptation,
  } = useAgentStore(
    useShallow((state) => ({
      isLoaded: state.isLoaded,
      motivationsAndDisorders: state.agent?.motivationsAndDisorders || "",
      violenceAdaptation: state.agent?.violenceAdaptation || 0,
      helplessnessAdaptation: state.agent?.helplessnessAdaptation || 0,
    }))
  );
  const charismaScore = useAgentStore(
    useShallow((state) => state.agent?.charisma?.score)
  );
  const bonds = useAgentStore(useShallow((state) => state.agent?.bonds || []));

  const addBond = () => {
    const updatedBonds = [...bonds];
    const newBond = { bond: undefined, score: charismaScore, marked: false };
    updatedBonds.push(newBond);
    merge({ bonds: updatedBonds });
  };

  const removeBond = (index: number) => {
    return () => {
      const updatedBonds = [...bonds];
      updatedBonds.splice(index, 1);
      merge({ bonds: updatedBonds });
    };
  };

  const updateBond = (index: number) => {
    return (
      bond: string | undefined,
      score: number | undefined,
      isMarked: boolean
    ) => {
      const updatedBonds = [...bonds];
      updatedBonds[index] = { bond, score, marked: isMarked };
      merge({ bonds: updatedBonds });
    };
  };

  return (
    <div className="flex h-full flex-col outline-1 outline-zinc-800 sm:flex-row print:outline-slate-950">
      <SideHeader>Psychological Data</SideHeader>
      <div className="flex w-full h-full flex-col">
        <div className="flex flex-col">
          <div className="flex text-xs uppercase">
            <div className="flex h-10 grow items-center justify-between px-2 py-1 outline-1 outline-zinc-800 print:outline-slate-950">
              <h3>11. Bonds</h3>
              {bonds.length ? (
                <Button
                  size="sm"
                  variant="outline"
                  className="cursor-pointer print:hidden"
                  onClick={() => addBond()}
                  disabled={!isLoaded}
                >
                  <CirclePlusIcon />
                </Button>
              ) : null}
            </div>
            <div className="flex w-20 items-center justify-center px-2 py-1 outline-1 outline-zinc-800 print:outline-slate-950">
              Score
            </div>
          </div>
          {!bonds.length ? (
            <div className="flex py-1.5 w-full items-center justify-center print:hidden">
              <Button
                size="sm"
                variant="outline"
                className="cursor-pointer"
                onClick={() => addBond()}
                disabled={!isLoaded}
              >
                <CirclePlusIcon />
                Add a bond
              </Button>
            </div>
          ) : null}
          {bonds.map((bond, idx) => (
            <Bond
              key={idx}
              index={idx}
              bond={bond.bond}
              score={bond.score}
              isMarked={!!bond.marked}
              update={updateBond(idx)}
              remove={removeBond(idx)}
            />
          ))}
          <div className="flex justify-center px-2 py-1 text-sm text-muted-foreground">
            Check a damaged Bond&rsquo;s box until the next Home scene ends.
          </div>
        </div>
        <div className="flex w-full flex-col gap-1 px-2 py-1 outline-1 outline-zinc-800 print:gap-0 print:outline-slate-950 grow sm:h-auto h-36">
          <div className="flex items-center justify-between">
            <label className="w-full text-xs uppercase" htmlFor="motivations">
              <h3>12. Motivations and mental disorders</h3>
            </label>
            {motivationsAndDisorders.length > 0 && (
              <span className="text-xs print:hidden">
                {motivationsAndDisorders.length}/300
              </span>
            )}
          </div>
          <AgentTextarea
            loading={!isLoaded}
            fieldName="motivations"
            value={motivationsAndDisorders}
            onChange={(value) => {
              merge({ motivationsAndDisorders: value });
            }}
            maxLength={300}
            required
          />
        </div>
        <div className="flex flex-col px-2 py-1 text-sm">
          <h3 className="text-xs uppercase">
            13. Incidents of san loss without going insane
          </h3>
          <div className="flex justify-between sm:flex-row">
            <div className="flex items-center justify-center gap-3 sm:gap-1">
              <span className="mr-1 text-xs">Violence</span>
              <SquareCheckbox
                id="violence-adapted-1"
                name="violence-adapted-1"
                className="cursor-pointer"
                checked={violenceAdaptation >= 1}
                onCheckedChange={(b) => {
                  merge({
                    violenceAdaptation: b || violenceAdaptation > 1 ? 1 : 0,
                  });
                }}
                disabled={!isLoaded}
              />
              <SquareCheckbox
                id="violence-adapted-2"
                name="violence-adapted-2"
                className="cursor-pointer"
                checked={violenceAdaptation >= 2}
                onCheckedChange={(b) => {
                  merge({
                    violenceAdaptation: b || violenceAdaptation > 2 ? 2 : 1,
                  });
                }}
                disabled={!isLoaded}
              />
              <SquareCheckbox
                id="violence-adapted-3"
                name="violence-adapted-3"
                className="cursor-pointer"
                checked={violenceAdaptation >= 3}
                onCheckedChange={(b) => {
                  merge({
                    violenceAdaptation: b || violenceAdaptation > 3 ? 3 : 2,
                  });
                }}
                disabled={!isLoaded}
              />
              {violenceAdaptation >= 3 ? (
                <Badge
                  asChild
                  className="ml-2"
                  variant="destructive"
                  title="Adapted"
                >
                  <span>
                    <HeartCrackIcon className="" />
                    <span className="pt-0.5 lg:hidden xl:inline">Adapted</span>
                  </span>
                </Badge>
              ) : (
                <Badge asChild className="ml-2 text-accent" variant="outline">
                  <span>
                    <HeartCrackIcon className="" />
                    <span className="pt-0.5 lg:hidden xl:inline">Adapted</span>
                  </span>
                </Badge>
              )}
            </div>
            <div className="flex items-center justify-center gap-3 sm:gap-1">
              <span className="mr-1 text-xs">Helplessness</span>
              <SquareCheckbox
                id="helpless-adapted-1"
                name="helpless-adapted-1"
                className="cursor-pointer"
                checked={helplessnessAdaptation >= 1}
                onCheckedChange={(b) => {
                  merge({
                    helplessnessAdaptation:
                      b || helplessnessAdaptation > 1 ? 1 : 0,
                  });
                }}
                disabled={!isLoaded}
              />
              <SquareCheckbox
                id="helpless-adapted-2"
                name="helpless-adapted-2"
                className="cursor-pointer"
                checked={helplessnessAdaptation >= 2}
                onCheckedChange={(b) => {
                  merge({
                    helplessnessAdaptation:
                      b || helplessnessAdaptation > 2 ? 2 : 1,
                  });
                }}
                disabled={!isLoaded}
              />
              <SquareCheckbox
                id="helpless-adapted-3"
                name="helpless-adapted-3"
                className="cursor-pointer"
                checked={helplessnessAdaptation >= 3}
                onCheckedChange={(b) => {
                  merge({
                    helplessnessAdaptation:
                      b || helplessnessAdaptation > 3 ? 3 : 2,
                  });
                }}
                disabled={!isLoaded}
              />
              {helplessnessAdaptation >= 3 ? (
                <Badge
                  asChild
                  className="ml-2 bg-blue-500 text-white"
                  variant="secondary"
                  title="Adapted"
                >
                  <span>
                    <BrainIcon className="" />
                    <span className="pt-0.5 lg:hidden xl:inline">Adapted</span>
                  </span>
                </Badge>
              ) : (
                <Badge asChild className="ml-2 text-accent" variant="outline">
                  <span>
                    <BrainIcon className="" />
                    <span className="pt-0.5 lg:hidden xl:inline">Adapted</span>
                  </span>
                </Badge>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
