"use client";

import classNames from "classnames";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { useAgentStore } from "./stores/agent";
import { AgentTextInput } from "./form/agent-text-input";
import { SideHeader } from "./form/side-header";
import { RefreshCwIcon } from "../ui/icons/lucide-refresh-cw";
import { Skeleton } from "../ui/skeleton";

const Stat = ({
  loading,
  label,
  abbreviation,
  score,
  setScore,
  feature,
  setFeature,
}: {
  loading: boolean;
  label: string;
  abbreviation: string;
  score: number | undefined;
  setScore: (score: number | undefined) => void;
  feature: string;
  setFeature: (feature: string | undefined) => void;
}) => {
  return (
    <div className="grid grid-cols-8">
      <div className="col-span-3 flex flex-wrap items-center gap-1 px-2 py-1 text-sm outline-1 outline-zinc-800 print:outline-slate-950">
        {label} <span className="text-xs uppercase">({abbreviation})</span>
      </div>
      <div
        className="flex items-center p-1 outline-1 outline-zinc-800 print:outline-slate-950"
        data-headlessui-state=""
      >
        <div className="flex gap-0.5 w-full">
          {loading ? (
            <Skeleton className="h-9 w-full" />
          ) : (
            <AgentTextInput
              className="text-center"
              fieldName={`stat-${abbreviation}-score`}
              type="number"
              value={score?.toString() ?? ""}
              onChange={(value) => {
                setScore(parseInt(value) || undefined);
              }}
              maxLength={3}
              min={3}
            />
          )}
        </div>
      </div>
      <div className="flex items-center justify-center px-2 py-1 outline-1 outline-zinc-800 print:text-sm print:outline-slate-950">
        {score ? (
          score * 5
        ) : (
          <span className="text-muted-foreground">&mdash;</span>
        )}
      </div>
      <div className="col-span-3 flex items-center p-1 outline-1 outline-zinc-800 print:px-2 print:outline-slate-950">
        <AgentTextInput
          fieldName={`stat-${abbreviation}-feature`}
          value={feature}
          onChange={(value) => {
            setFeature(value);
          }}
          maxLength={100}
          disabled={!score || score < 3 || (score > 9 && score < 13)}
        />
      </div>
    </div>
  );
};

const Derived = ({
  label,
  abbreviation,
  max,
  current,
  setCurrent,
}: {
  label: string;
  abbreviation: string;
  max?: number;
  current: number | undefined;
  setCurrent: (current: number | undefined) => void;
}) => {
  return (
    <div className="grid grid-cols-7 print:text-sm">
      <div className="col-span-3 flex items-center gap-1 px-2 py-1 text-sm outline-1 outline-zinc-800 print:outline-slate-950">
        {label} <span className="uppercase">({abbreviation})</span>
      </div>
      <div className="col-span-2 flex items-center justify-center px-2 py-1 outline-1 outline-zinc-800 print:outline-slate-950">
        {max ?? <span className="text-muted-foreground">&mdash;</span>}
      </div>
      <div className="col-span-2 flex items-center justify-center px-2 py-1 outline-1 outline-zinc-800 print:outline-slate-950">
        <div className="flex gap-0.5">
          {max !== undefined ? (
            <>
              <AgentTextInput
                className="text-center"
                fieldName={`derived-${abbreviation}-current`}
                type="number"
                value={current?.toString() ?? ""}
                onChange={(value) => {
                  setCurrent(parseInt(value) || undefined);
                }}
                maxLength={3}
                min={0}
                disabled={max === undefined}
              />
              <Button
                size="sm"
                variant="outline"
                className="ml-2 cursor-pointer"
                onClick={() => setCurrent(max)}
              >
                <RefreshCwIcon />
              </Button>
            </>
          ) : (
            <span className="text-muted-foreground">&mdash;</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default function Stats() {
  const { agent, update } = useAgentStore();

  return (
    <div className="flex flex-col outline-1 outline-zinc-800 sm:flex-row print:outline-slate-950 ">
      <SideHeader>Statistical Data</SideHeader>
      <div className="w-full">
        <div className="flex h-full flex-col">
          <div className="flex flex-col font-jost">
            <div className="grid grid-cols-8 text-xs uppercase">
              <h3 className="col-span-3 px-2 py-1 outline-1 outline-zinc-800 print:outline-slate-950">
                8. Statistics
              </h3>
              <div className="px-2 py-1 text-center outline-1 outline-zinc-800 print:outline-slate-950">
                Score
              </div>
              <div className="px-2 py-1 text-center outline-1 outline-zinc-800 print:outline-slate-950">
                &#10799;5
              </div>
              <div className="col-span-3 px-2 py-1 text-center outline-1 outline-zinc-800 print:outline-slate-950">
                Distinguishing features
              </div>
            </div>
            <Stat
              loading={!agent}
              label="Strength"
              abbreviation="str"
              score={agent?.strength?.score}
              setScore={(score) => {
                if (!agent) return;
                agent.strength = { ...agent.strength, score };
                update(agent);
              }}
              feature={agent?.strength?.feature ?? ""}
              setFeature={(feature) => {
                if (!agent) return;
                agent.strength = {
                  ...agent.strength,
                  feature,
                };
                update(agent);
              }}
            />
            <Stat
              loading={!agent}
              label="Dexterity"
              abbreviation="dex"
              score={agent?.dexterity?.score}
              setScore={(score) => {
                if (!agent) return;
                agent.dexterity = { ...agent.dexterity, score };
                update(agent);
              }}
              feature={agent?.dexterity?.feature ?? ""}
              setFeature={(feature) => {
                if (!agent) return;
                agent.dexterity = {
                  ...agent.dexterity,
                  feature,
                };
                update(agent);
              }}
            />
            <Stat
              loading={!agent}
              label="Constitution"
              abbreviation="con"
              score={agent?.constitution?.score}
              setScore={(score) => {
                if (!agent) return;
                agent.constitution = { ...agent.constitution, score };
                update(agent);
              }}
              feature={agent?.constitution?.feature ?? ""}
              setFeature={(feature) => {
                if (!agent) return;
                agent.constitution = {
                  ...agent.constitution,
                  feature,
                };
                update(agent);
              }}
            />
            <Stat
              loading={!agent}
              label="Intelligence"
              abbreviation="int"
              score={agent?.intelligence?.score}
              setScore={(score) => {
                if (!agent) return;
                agent.intelligence = { ...agent.intelligence, score };
                update(agent);
              }}
              feature={agent?.intelligence?.feature ?? ""}
              setFeature={(feature) => {
                if (!agent) return;
                agent.intelligence = {
                  ...agent.intelligence,
                  feature,
                };
                update(agent);
              }}
            />
            <Stat
              loading={!agent}
              label="Power"
              abbreviation="pow"
              score={agent?.power?.score}
              setScore={(score) => {
                if (!agent) return;
                agent.power = { ...agent.power, score };
                update(agent);
              }}
              feature={agent?.power?.feature ?? ""}
              setFeature={(feature) => {
                if (!agent) return;
                agent.power = {
                  ...agent.power,
                  feature,
                };
                update(agent);
              }}
            />
            <Stat
              loading={!agent}
              label="Charisma"
              abbreviation="cha"
              score={agent?.charisma?.score}
              setScore={(score) => {
                if (!agent) return;
                agent.charisma = { ...agent.charisma, score };
                update(agent);
              }}
              feature={agent?.charisma?.feature ?? ""}
              setFeature={(feature) => {
                if (!agent) return;
                agent.charisma = {
                  ...agent.charisma,
                  feature,
                };
                update(agent);
              }}
            />
          </div>
          <div className="flex flex-col font-jost">
            <div className="grid grid-cols-7 text-xs uppercase">
              <h3 className="col-span-3 flex items-center px-2 py-1 outline-1 outline-zinc-800 print:outline-slate-950">
                9. Derived Attributes
              </h3>
              <div className="col-span-2 flex items-center justify-center px-2 py-1 align-middle outline-1 outline-zinc-800 print:outline-slate-950">
                Maximum
              </div>
              <div className="col-span-2 flex items-center justify-center px-2 py-1 outline-1 outline-zinc-800 print:outline-slate-950">
                Current
              </div>
            </div>
            <Derived
              label="Hit Points"
              abbreviation="hp"
              max={
                !agent?.strength?.score || !agent?.constitution?.score
                  ? undefined
                  : Math.ceil(
                      ((agent.strength.score ?? 0) +
                        (agent.constitution.score ?? 0)) /
                        2
                    )
              }
              current={agent?.hp}
              setCurrent={(current) => {
                if (!agent) return;
                update({ ...agent, hp: current });
              }}
            />
            <Derived
              label="Willpower Points"
              abbreviation="wp"
              max={!agent?.power?.score ? undefined : agent.power.score}
              current={agent?.wp}
              setCurrent={(current) => {
                if (!agent) return;
                update({ ...agent, wp: current });
              }}
            />
            <Derived
              label="Sanity Points"
              abbreviation="san"
              max={!agent?.power?.score ? undefined : agent.power.score * 5}
              current={agent?.san}
              setCurrent={(current) => {
                if (!agent) return;
                update({ ...agent, san: current });
              }}
            />
            <Derived
              label="Breaking Point"
              abbreviation="bp"
              max={
                !agent?.power?.score || !agent?.san
                  ? undefined
                  : agent.san - agent.power.score
              }
              current={agent?.bp}
              setCurrent={(current) => {
                if (!agent) return;
                update({ ...agent, bp: current });
              }}
            />
          </div>
          <div
            className="flex w-full flex-col gap-1 px-2 py-1 outline-1 outline-zinc-800 print:gap-0 print:outline-slate-950 grow sm:h-auto h-36"
            data-headlessui-state=""
          >
            <div className="flex items-center justify-between">
              <label
                className="w-full text-xs uppercase"
                htmlFor="physical-description"
              >
                <h3>10. Physical description</h3>
              </label>
              {agent && (agent?.physicalDescription?.length ?? 0) > 0 && (
                <span className="text-xs print:hidden">
                  {agent?.physicalDescription?.length ?? 0}/300
                </span>
              )}
            </div>
            {agent ? (
              <Textarea
                id="physical-description"
                name="physical-description"
                value={agent?.physicalDescription ?? ""}
                maxLength={300}
                onChange={(e) => {
                  if (!agent) return;
                  update({ ...agent, physicalDescription: e.target.value });
                }}
                className={classNames(
                  "min-h-15 h-full w-full justify-self-end rounded-t-md border-b border-zinc-800 bg-zinc-300 bg-opacity-70 px-2 py-0.5 hover:bg-opacity-100 focus-visible:border-b-0 focus-visible:bg-opacity-100 focus-visible:outline-2 focus-visible:outline-slate-600 print:border-0 print:bg-transparent print:p-0 print:text-sm",
                  (agent?.physicalDescription ?? "").length === 0
                    ? "dark:bg-amber-100"
                    : ""
                )}
              />
            ) : (
              <Skeleton className="min-h-15 h-full rounded-md" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
