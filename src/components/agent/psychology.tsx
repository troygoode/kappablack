"use client";

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
          className="cursor-pointer hover:bg-destructive hover:text-destructive-foreground dark:hover:bg-destructive dark:hover:text-destructive-foreground"
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
  const { agent, update } = useAgentStore((state) => state);

  const addBond = () => {
    if (!agent) return;
    const newBond = { bond: undefined, score: undefined, marked: false };
    agent.bonds = agent.bonds ? [...agent.bonds, newBond] : [newBond];
    update(agent);
  };

  const removeBond = (index: number) => {
    return () => {
      if (!agent?.bonds) return;
      agent.bonds = agent.bonds.filter((_, i) => i !== index);
      update(agent);
    };
  };

  const updateBond = (index: number) => {
    return (
      bond: string | undefined,
      score: number | undefined,
      isMarked: boolean
    ) => {
      if (!agent?.bonds) return;
      agent.bonds[index] = { bond, score, marked: isMarked };
      update(agent);
    };
  };

  return (
    <div className="flex h-full flex-col outline-1 outline-zinc-800 sm:flex-row print:outline-slate-950">
      <SideHeader>Psychological Data</SideHeader>
      <div className="w-full">
        <div className="flex h-full flex-col">
          <div className="flex flex-col font-jost">
            <div className="flex text-xs uppercase">
              <div className="flex h-10 grow items-center justify-between px-2 py-1 outline-1 outline-zinc-800 print:outline-slate-950">
                <h3>11. Bonds</h3>
                {(agent?.bonds?.length ?? 0) > 0 ? (
                  <Button
                    size="sm"
                    variant="outline"
                    className="cursor-pointer"
                    onClick={() => addBond()}
                    disabled={!agent}
                  >
                    <CirclePlusIcon />
                  </Button>
                ) : null}
              </div>
              <div className="flex w-20 items-center justify-center px-2 py-1 outline-1 outline-zinc-800 print:outline-slate-950">
                Score
              </div>
            </div>
            {!agent?.bonds?.length ? (
              <div className="flex py-1.5 w-full items-center justify-center">
                <Button
                  size="sm"
                  variant="outline"
                  className="cursor-pointer"
                  onClick={() => addBond()}
                  disabled={!agent}
                >
                  <CirclePlusIcon />
                  Add a bond
                </Button>
              </div>
            ) : null}
            {(agent?.bonds?.length &&
              agent.bonds.map((bond, idx) => (
                <Bond
                  key={idx}
                  index={idx}
                  bond={bond.bond}
                  score={bond.score}
                  isMarked={!!bond.marked}
                  update={updateBond(idx)}
                  remove={removeBond(idx)}
                />
              ))) ||
              null}
            <div className="flex justify-center px-2 py-1 text-sm">
              Check a damaged Bond&rsquo;s box until the next Home scene ends.
            </div>
          </div>
          <div
            className="flex w-full flex-col gap-1 px-2 py-1 font-jost outline-1 outline-zinc-800 print:gap-0 print:outline-slate-950 grow sm:h-auto h-36"
            data-headlessui-state=""
          >
            <div className="flex items-center justify-between">
              <label className="w-full text-xs uppercase" htmlFor="motivations">
                <h3>12. Motivations and mental disorders</h3>
              </label>
              {agent && (agent?.motivationsAndDisorders?.length ?? 0) > 0 && (
                <span className="text-xs print:hidden">
                  {agent?.motivationsAndDisorders?.length ?? 0}/300
                </span>
              )}
            </div>
            <AgentTextarea
              loading={!agent}
              fieldName="motivations"
              value={agent?.motivationsAndDisorders ?? ""}
              onChange={(value) => {
                update({ ...agent, motivationsAndDisorders: value });
              }}
              maxLength={300}
              required
            />
          </div>
          <div className="flex flex-col px-2 py-1 font-jost text-sm">
            <h3 className="text-xs uppercase">
              13. Incidents of san loss without going insane
            </h3>
            <div className="flex flex-col justify-between sm:flex-row">
              <div className="flex items-center justify-center gap-3 sm:gap-1">
                <span className="mr-1">Violence</span>
                <SquareCheckbox
                  id="violence-adapted-1"
                  name="violence-adapted-1"
                  className="cursor-pointer"
                  checked={agent && (agent.violenceAdaptation ?? 0) >= 1}
                  onCheckedChange={(b) => {
                    if (!agent) return;
                    if (b || (agent.violenceAdaptation ?? 0) > 1) {
                      agent.violenceAdaptation = 1;
                    } else {
                      agent.violenceAdaptation = undefined;
                    }
                    update(agent);
                  }}
                  disabled={!agent}
                />
                <SquareCheckbox
                  id="violence-adapted-2"
                  name="violence-adapted-2"
                  className="cursor-pointer"
                  checked={agent && (agent.violenceAdaptation ?? 0) >= 2}
                  onCheckedChange={(b) => {
                    if (!agent) return;
                    if (b || (agent.violenceAdaptation ?? 0) > 2) {
                      agent.violenceAdaptation = 2;
                    } else {
                      agent.violenceAdaptation = 1;
                    }
                    update(agent);
                  }}
                  disabled={!agent}
                />
                <SquareCheckbox
                  id="violence-adapted-3"
                  name="violence-adapted-3"
                  className="cursor-pointer"
                  checked={agent && (agent.violenceAdaptation ?? 0) >= 3}
                  onCheckedChange={(b) => {
                    if (!agent) return;
                    if (b || (agent.violenceAdaptation ?? 0) > 3) {
                      agent.violenceAdaptation = 3;
                    } else {
                      agent.violenceAdaptation = 2;
                    }
                    update(agent);
                  }}
                  disabled={!agent}
                />
                {agent && (agent.violenceAdaptation ?? 0) >= 3 ? (
                  <Badge asChild className="ml-2" variant="destructive">
                    <span>
                      <HeartCrackIcon />
                      <span className="pt-0.5">Adapted</span>
                    </span>
                  </Badge>
                ) : (
                  <Badge asChild className="ml-2 text-accent" variant="outline">
                    <span>
                      <HeartCrackIcon />
                      <span className="pt-0.5">Adapted</span>
                    </span>
                  </Badge>
                )}
              </div>
              <div className="flex items-center justify-center gap-3 sm:gap-1">
                <span className="mr-1">Helplessness</span>
                <SquareCheckbox
                  id="helpless-adapted-1"
                  name="helpless-adapted-1"
                  className="cursor-pointer"
                  checked={agent && (agent.helplessnessAdaptation ?? 0) >= 1}
                  onCheckedChange={(b) => {
                    if (!agent) return;
                    if (b || (agent.helplessnessAdaptation ?? 0) > 1) {
                      agent.helplessnessAdaptation = 1;
                    } else {
                      agent.helplessnessAdaptation = undefined;
                    }
                    update(agent);
                  }}
                  disabled={!agent}
                />
                <SquareCheckbox
                  id="helpless-adapted-2"
                  name="helpless-adapted-2"
                  className="cursor-pointer"
                  checked={agent && (agent.helplessnessAdaptation ?? 0) >= 2}
                  onCheckedChange={(b) => {
                    if (!agent) return;
                    if (b || (agent.helplessnessAdaptation ?? 0) > 2) {
                      agent.helplessnessAdaptation = 2;
                    } else {
                      agent.helplessnessAdaptation = 1;
                    }
                    update(agent);
                  }}
                  disabled={!agent}
                />
                <SquareCheckbox
                  id="helpless-adapted-3"
                  name="helpless-adapted-3"
                  className="cursor-pointer"
                  checked={agent && (agent.helplessnessAdaptation ?? 0) >= 3}
                  onCheckedChange={(b) => {
                    if (!agent) return;
                    if (b || (agent.helplessnessAdaptation ?? 0) > 3) {
                      agent.helplessnessAdaptation = 3;
                    } else {
                      agent.helplessnessAdaptation = 2;
                    }
                    update(agent);
                  }}
                  disabled={!agent}
                />
                {agent && (agent.helplessnessAdaptation ?? 0) >= 3 ? (
                  <Badge
                    asChild
                    className="ml-2 bg-blue-500"
                    variant="secondary"
                  >
                    <span>
                      <BrainIcon />
                      <span className="pt-0.5">Adapted</span>
                    </span>
                  </Badge>
                ) : (
                  <Badge asChild className="ml-2 text-accent" variant="outline">
                    <span>
                      <BrainIcon />
                      <span className="pt-0.5">Adapted</span>
                    </span>
                  </Badge>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
