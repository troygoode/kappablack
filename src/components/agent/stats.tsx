"use client";

import { useShallow } from "zustand/shallow";
import StatsData from "@/data/stats.json";
import { Button } from "../ui/button";
import { RefreshCwIcon } from "../ui/icons/lucide-refresh-cw";
import { Skeleton } from "../ui/skeleton";
import { AgentTextInput } from "./form/agent-text-input";
import { AgentTextarea } from "./form/agent-textarea";
import { AgentTooltip } from "./form/agent-tooltip";
import { SideHeader } from "./form/side-header";
import { Rollable } from "./rollable";
import { useAgentStore } from "./stores/agent";

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
  const mode = useAgentStore((state) => state.mode);
  return (
    <div className="grid grid-cols-9">
      <div
        className={`col-span-${
          mode === "edit" ? 3 : 4
        } flex flex-wrap items-center gap-1 px-2 py-1 text-sm outline-1 outline-zinc-800 print:outline-slate-950`}
      >
        {mode !== "print" && tooltip && (
          <AgentTooltip>
            <p>{tooltip}</p>
          </AgentTooltip>
        )}
        <span className="">{label}</span>
        <span className="text-xs uppercase hidden sm:inline lg:hidden xl:inline">
          ({abbreviation})
        </span>
      </div>
      <div
        className={`col-span-${
          mode === "edit" ? 2 : 1
        } flex items-center p-1 outline-1 outline-zinc-800 print:outline-slate-950`}
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
      <div
        className={`col-span-1 flex items-center justify-center py-0 px-0.5 outline-1 outline-zinc-800 print:text-sm print:outline-slate-950`}
      >
        <Rollable
          value={(score ?? 0) * 5}
          source={label}
          enabled={!!score && mode === "play"}
        >
          <div className="p-2 ">
            {score ? (
              score * 5
            ) : (
              <span className="text-muted-foreground">&mdash;</span>
            )}
          </div>
        </Rollable>
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
          disabled={!score || score < 3 || (score > 8 && score < 13)}
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
  reset,
  disabled,
}: {
  label: string;
  abbreviation: string;
  max?: number;
  current: number | undefined;
  tooltip?: string;
  setCurrent: (current: number | undefined) => void;
  reset?: () => void;
  disabled?: boolean;
}) => {
  const mode = useAgentStore((state) => state.mode);
  return (
    <div className="grid grid-cols-9 print:text-sm">
      <div className="col-span-4 flex items-center gap-1 px-2 py-1 text-sm outline-1 outline-zinc-800 print:outline-slate-950">
        {mode !== "print" && tooltip && (
          <AgentTooltip>
            <p>{tooltip}</p>
          </AgentTooltip>
        )}
        <span>{label}</span>
        <span className="uppercase hidden sm:inline lg:hidden xl:inline">
          ({abbreviation})
        </span>
      </div>
      <div className="col-span-2 flex items-center justify-center px-2 py-1 outline-1 outline-zinc-800 print:outline-slate-950">
        {max ?? <span className="text-muted-foreground">&mdash;</span>}
      </div>
      <div className="col-span-3 flex items-center justify-center px-2 py-1 outline-1 outline-zinc-800 print:outline-slate-950">
        <div className="flex gap-0.5">
          {!disabled && max !== undefined ? (
            <>
              <AgentTextInput
                className="text-center"
                fieldName={`derived-${abbreviation}-current`}
                type="number"
                value={current?.toString() ?? ""}
                onChange={(value) => {
                  setCurrent(parseInt(value, 10) || undefined);
                }}
                maxLength={3}
                min={0}
                disabled={max === undefined || disabled}
                editableDuringPlay={true}
                required
              />
              {mode === "edit" || mode === "play" ? (
                <Button
                  size="sm"
                  variant="outline"
                  className="ml-2 cursor-pointer print:hidden"
                  onClick={() => (reset ? reset() : setCurrent(max))}
                >
                  <RefreshCwIcon />
                </Button>
              ) : null}
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
  highest: string,
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
  const merge = useAgentStore((state) => state.merge);
  const { isLoaded, mode, hp, wp, san, bp, physicalDescription } =
    useAgentStore(
      useShallow((state) => ({
        isLoaded: state.isLoaded,
        mode: state.mode,
        hp: state.agent?.hp,
        wp: state.agent?.wp,
        san: state.agent?.san,
        bp: state.agent?.bp,
        physicalDescription: state.agent?.physicalDescription || "",
      })),
    );
  const strength = useAgentStore(
    useShallow((state) => ({
      ...{ score: undefined, feature: "" },
      ...state.agent?.strength,
    })),
  );
  const dexterity = useAgentStore(
    useShallow((state) => ({
      ...{ score: undefined, feature: "" },
      ...state.agent?.dexterity,
    })),
  );
  const constitution = useAgentStore(
    useShallow((state) => ({
      ...{ score: undefined, feature: "" },
      ...state.agent?.constitution,
    })),
  );
  const intelligence = useAgentStore(
    useShallow((state) => ({
      ...{ score: undefined, feature: "" },
      ...state.agent?.intelligence,
    })),
  );
  const power = useAgentStore(
    useShallow((state) => ({
      ...{ score: undefined, feature: "" },
      ...state.agent?.power,
    })),
  );
  const charisma = useAgentStore(
    useShallow((state) => ({
      ...{ score: undefined, feature: "" },
      ...state.agent?.charisma,
    })),
  );
  const unnatural = useAgentStore(
    useShallow((state) => state.getSkill("Unnatural")),
  );

  return (
    <div className="flex flex-col outline-1 outline-zinc-800 sm:flex-row print:outline-slate-950 ">
      <SideHeader>Statistical Data</SideHeader>
      <div className="w-full">
        <div className="flex h-full flex-col">
          <div className="flex flex-col font-jost">
            <div className="grid grid-cols-9 text-xs uppercase">
              <h3
                className={`col-span-${
                  mode === "edit" ? 3 : 4
                } flex items-center justify-start px-2 py-1 outline-1 outline-zinc-800 print:outline-slate-950`}
              >
                <span>8. Statistics</span>
              </h3>
              <div
                className={`col-span-${
                  mode === "edit" ? 2 : 1
                } flex items-center justify-center px-2 py-1 text-center outline-1 outline-zinc-800 print:outline-slate-950`}
              >
                <span>Score</span>
              </div>
              <div className="col-span-1 flex items-center justify-center px-2 py-1 text-center outline-1 outline-zinc-800 print:outline-slate-950">
                <span>&#10799;5</span>
              </div>
              <div className="col-span-3 flex items-center justify-center px-2 py-1 text-center outline-1 outline-zinc-800 print:outline-slate-950">
                <span className="sm:hidden lg:inline xl:hidden">Features</span>
                <span className="hidden sm:inline lg:hidden xl:inline">
                  Distinguishing features
                </span>
              </div>
            </div>
            <Stat
              loading={!isLoaded}
              label="Strength"
              abbreviation="str"
              score={strength.score}
              setScore={(score) => {
                merge({ strength: { score, feature: strength.feature } });
              }}
              feature={strength.feature}
              featurePlaceholder={featurePlaceholders(
                strength.score,
                "Feeble",
                "Weak",
                "Muscular",
                "Huge",
              )}
              setFeature={(feature) => {
                merge({ strength: { score: strength.score, feature } });
              }}
              tooltip={(StatsData as IStatsData).str}
            />
            <Stat
              loading={!isLoaded}
              label="Dexterity"
              abbreviation="dex"
              score={dexterity.score}
              setScore={(score) => {
                merge({ dexterity: { score, feature: dexterity.feature } });
              }}
              feature={dexterity.feature}
              featurePlaceholder={featurePlaceholders(
                dexterity.score,
                "Barely Mobile",
                "Clumsy",
                "Nimble",
                "Acrobatic",
              )}
              setFeature={(feature) => {
                merge({ dexterity: { score: dexterity.score, feature } });
              }}
              tooltip={(StatsData as IStatsData).dex}
            />
            <Stat
              loading={!isLoaded}
              label="Constitution"
              abbreviation="con"
              score={constitution.score}
              setScore={(score) => {
                merge({
                  constitution: { score, feature: constitution.feature },
                });
              }}
              feature={constitution.feature}
              featurePlaceholder={featurePlaceholders(
                constitution.score,
                "Bedridden",
                "Sickly",
                "Perfect Health",
                "Indefatigable",
              )}
              setFeature={(feature) => {
                merge({ constitution: { score: constitution.score, feature } });
              }}
              tooltip={(StatsData as IStatsData).con}
            />
            <Stat
              loading={!isLoaded}
              label="Intelligence"
              abbreviation="int"
              score={intelligence.score}
              setScore={(score) => {
                merge({
                  intelligence: { score, feature: intelligence.feature },
                });
              }}
              feature={intelligence.feature}
              featurePlaceholder={featurePlaceholders(
                intelligence.score,
                "Imbecilic",
                "Slow",
                "Perceptive",
                "Brilliant",
              )}
              setFeature={(feature) => {
                merge({ intelligence: { score: intelligence.score, feature } });
              }}
              tooltip={(StatsData as IStatsData).int}
            />
            <Stat
              loading={!isLoaded}
              label="Power"
              abbreviation="pow"
              score={power.score}
              setScore={(score) => {
                merge({ power: { score, feature: power.feature } });
              }}
              feature={power.feature}
              featurePlaceholder={featurePlaceholders(
                power.score,
                "Spineless",
                "Nervous",
                "Strong-willed",
                "Indomitable",
              )}
              setFeature={(feature) => {
                merge({ power: { score: power.score, feature } });
              }}
              tooltip={(StatsData as IStatsData).pow}
            />
            <Stat
              loading={!isLoaded}
              label="Charisma"
              abbreviation="cha"
              score={charisma.score}
              setScore={(score) => {
                merge({ charisma: { score, feature: charisma.feature } });
              }}
              feature={charisma.feature}
              featurePlaceholder={featurePlaceholders(
                charisma.score,
                "Unbearable",
                "Awkward",
                "Charming",
                "Magnetic",
              )}
              setFeature={(feature) => {
                merge({ charisma: { score: charisma.score, feature } });
              }}
              tooltip={(StatsData as IStatsData).cha}
            />
          </div>
          <div className="flex flex-col font-jost">
            <div className="grid grid-cols-9 text-xs uppercase">
              <h3 className="col-span-4 flex items-center px-2 py-1 outline-1 outline-zinc-800 print:outline-slate-950">
                9. Derived Attributes
              </h3>
              <div className="col-span-2 flex items-center justify-center px-2 py-1 align-middle outline-1 outline-zinc-800 print:outline-slate-950">
                Maximum
              </div>
              <div className="col-span-3 flex items-center justify-center px-2 py-1 outline-1 outline-zinc-800 print:outline-slate-950">
                Current
              </div>
            </div>
            <Derived
              label="Hit Points"
              abbreviation="hp"
              max={
                !strength.score || !constitution.score
                  ? undefined
                  : Math.ceil(
                      ((strength.score ?? 0) + (constitution.score ?? 0)) / 2,
                    )
              }
              current={hp}
              setCurrent={(current) => {
                merge({ hp: current });
              }}
              tooltip={(StatsData as IStatsData).hp}
            />
            <Derived
              label="Willpower Points"
              abbreviation="wp"
              max={!power.score ? undefined : power.score}
              current={wp}
              setCurrent={(current) => {
                merge({ wp: current });
              }}
              tooltip={(StatsData as IStatsData).wp}
            />
            <Derived
              label="Sanity Points"
              abbreviation="san"
              max={99 - (unnatural.score ?? 0)}
              current={san}
              setCurrent={(current) => {
                merge({ san: current });
              }}
              reset={() => {
                if (power.score) merge({ san: power.score * 5 });
              }}
              tooltip={(StatsData as IStatsData).san}
              disabled={!power.score}
            />
            <Derived
              label="Breaking Point"
              abbreviation="bp"
              max={!power.score || !san ? undefined : san - power.score}
              current={bp}
              setCurrent={(current) => {
                merge({ bp: current });
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
              {physicalDescription.length && mode === "edit" ? (
                <span className="text-xs print:hidden">
                  {physicalDescription.length}/300
                </span>
              ) : null}
            </div>
            <AgentTextarea
              loading={!isLoaded}
              fieldName="physical-description"
              value={physicalDescription}
              maxLength={300}
              onChange={(value) => {
                merge({ physicalDescription: value });
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
