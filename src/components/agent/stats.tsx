"use client";

import StatsData from "@/data/stats.json";

import { Button } from "../ui/button";
import { useAgentStore } from "./stores/agent-provider";
import { AgentTextInput } from "./form/agent-text-input";
import { SideHeader } from "./form/side-header";
import { RefreshCwIcon } from "../ui/icons/lucide-refresh-cw";
import { Skeleton } from "../ui/skeleton";
import { AgentTextarea } from "./form/agent-textarea";
import { AgentTooltip } from "./form/agent-tooltip";

interface IStatsData {
  str: string;
  dex: string;
  con: string;
  int: string;
  pow: string;
  cha: string;
  hp: string;
  wp: string;
  san: string;
  bp: string;
}

const Stat = ({
  loading,
  label,
  abbreviation,
  score,
  setScore,
  feature,
  featurePlaceholder,
  setFeature,
  tooltip,
}: {
  loading: boolean;
  label: string;
  abbreviation: string;
  score: number | undefined;
  setScore: (score: number | undefined) => void;
  feature: string;
  featurePlaceholder?: string;
  setFeature: (feature: string | undefined) => void;
  tooltip?: string;
}) => {
  return (
    <div className="grid grid-cols-8">
      <div className="col-span-3 flex flex-wrap items-center gap-1 px-2 py-1 text-sm outline-1 outline-zinc-800 print:outline-slate-950">
        {label} <span className="text-xs uppercase">({abbreviation})</span>
        {tooltip && (
          <AgentTooltip>
            <p>{tooltip}</p>
          </AgentTooltip>
        )}
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
              required
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
          placeholder={featurePlaceholder}
          onChange={(value) => {
            setFeature(value);
          }}
          maxLength={100}
          disabled={!score || score < 3 || (score > 9 && score < 13)}
          required
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
  tooltip,
  setCurrent,
}: {
  label: string;
  abbreviation: string;
  max?: number;
  current: number | undefined;
  tooltip?: string;
  setCurrent: (current: number | undefined) => void;
}) => {
  return (
    <div className="grid grid-cols-7 print:text-sm">
      <div className="col-span-3 flex items-center gap-1 px-2 py-1 text-sm outline-1 outline-zinc-800 print:outline-slate-950">
        {label} <span className="uppercase">({abbreviation})</span>
        {tooltip && (
          <AgentTooltip>
            <p>{tooltip}</p>
          </AgentTooltip>
        )}
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
                required
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

const featurePlaceholders = (
  score: number | undefined,
  lowest: string,
  low: string,
  high: string,
  highest: string
) => {
  if (!score || (score >= 9 && score <= 12)) return undefined;
  switch (score) {
    case 3:
    case 4:
      return lowest;
    case 5:
    case 6:
    case 7:
    case 8:
      return low;
    case 13:
    case 14:
    case 15:
    case 16:
      return high;
    case 17:
    case 18:
      return highest;
  }
  return undefined;
};

export default function Stats() {
  const { agent, update } = useAgentStore((state) => state);

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
              featurePlaceholder={featurePlaceholders(
                agent?.strength?.score,
                "Feeble",
                "Weak",
                "Muscular",
                "Huge"
              )}
              setFeature={(feature) => {
                if (!agent) return;
                agent.strength = {
                  ...agent.strength,
                  feature,
                };
                update(agent);
              }}
              tooltip={(StatsData as IStatsData).str}
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
              featurePlaceholder={featurePlaceholders(
                agent?.dexterity?.score,
                "Barely Mobile",
                "Clumsy",
                "Nimble",
                "Acrobatic"
              )}
              setFeature={(feature) => {
                if (!agent) return;
                agent.dexterity = {
                  ...agent.dexterity,
                  feature,
                };
                update(agent);
              }}
              tooltip={(StatsData as IStatsData).dex}
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
              featurePlaceholder={featurePlaceholders(
                agent?.constitution?.score,
                "Bedridden",
                "Sickly",
                "Perfect Health",
                "Indefatigable"
              )}
              setFeature={(feature) => {
                if (!agent) return;
                agent.constitution = {
                  ...agent.constitution,
                  feature,
                };
                update(agent);
              }}
              tooltip={(StatsData as IStatsData).con}
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
              featurePlaceholder={featurePlaceholders(
                agent?.intelligence?.score,
                "Imbecilic",
                "Slow",
                "Perceptive",
                "Brilliant"
              )}
              setFeature={(feature) => {
                if (!agent) return;
                agent.intelligence = {
                  ...agent.intelligence,
                  feature,
                };
                update(agent);
              }}
              tooltip={(StatsData as IStatsData).int}
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
              featurePlaceholder={featurePlaceholders(
                agent?.power?.score,
                "Spineless",
                "Nervous",
                "Strong-willed",
                "Indomitable"
              )}
              setFeature={(feature) => {
                if (!agent) return;
                agent.power = {
                  ...agent.power,
                  feature,
                };
                update(agent);
              }}
              tooltip={(StatsData as IStatsData).pow}
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
              featurePlaceholder={featurePlaceholders(
                agent?.charisma?.score,
                "Unbearable",
                "Awkward",
                "Charming",
                "Magnetic"
              )}
              setFeature={(feature) => {
                if (!agent) return;
                agent.charisma = {
                  ...agent.charisma,
                  feature,
                };
                update(agent);
              }}
              tooltip={(StatsData as IStatsData).cha}
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
              tooltip={(StatsData as IStatsData).hp}
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
              tooltip={(StatsData as IStatsData).wp}
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
              tooltip={(StatsData as IStatsData).san}
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
              tooltip={(StatsData as IStatsData).bp}
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
            <AgentTextarea
              loading={!agent}
              fieldName="physical-description"
              value={agent?.physicalDescription}
              maxLength={300}
              onChange={(value) => {
                update({ ...agent, physicalDescription: value });
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
