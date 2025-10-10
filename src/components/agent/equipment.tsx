"use client";

import { Button } from "../ui/button";
import { CirclePlusIcon } from "../ui/icons/lucide-circle-plus";
import { Trash2Icon } from "../ui/icons/lucide-trash-2";
import { Skeleton } from "../ui/skeleton";
import { AgentTextInput } from "./form/agent-text-input";
import { AgentTextarea } from "./form/agent-textarea";
import { SideHeader } from "./form/side-header";
import { useAgentStore } from "./stores/agent";

const WeaponsTable = ({ loading }: { loading: boolean }) => (
  <table className="hidden w-full font-jost lg:table print:table">
    <thead className="text-xs uppercase">
      <tr>
        <th className="border-l border-b border-zinc-800 py-0.5 pl-2 pr-1 text-left font-normal">
          <div className="flex items-center justify-between">
            16.1. Weapons
            <Button
              size="sm"
              variant="outline"
              className="cursor-pointer"
              disabled={loading}
            >
              <CirclePlusIcon />
            </Button>
          </div>
        </th>
        <th className="border-l border-b border-zinc-800 px-1 py-0.5 font-normal">
          Skill
        </th>
        <th className="border-l border-b border-zinc-800 px-1 py-0.5 font-normal">
          Base range
        </th>
        <th className="border-l border-b border-zinc-800 px-1 py-0.5 font-normal">
          Damage
        </th>
        <th className="border-l border-b border-zinc-800 px-1 py-0.5 font-normal">
          Armor piercing
        </th>
        <th className="border-l border-b border-zinc-800 px-1 py-0.5 font-normal">
          Lethality
        </th>
        <th className="border-l border-b border-zinc-800 px-1 py-0.5 font-normal">
          Radius
        </th>
        <th className="border-l border-b border-zinc-800 px-1 py-0.5 font-normal">
          Ammo
        </th>
        <th className="border-l border-b border-zinc-800 px-1 py-0.5 font-normal">
          Capacity
        </th>
      </tr>
    </thead>
    <tbody>
      <tr className="text-center">
        <td className="border-l border-b border-zinc-800 px-1 py-0.5 w-80">
          <div className="flex items-center gap-1.5">
            {!loading ? (
              <AgentTextInput
                fieldName="weapon-1-name"
                maxLength={100}
                value="Unarmed Attack"
                onChange={() => {}}
              />
            ) : (
              <Skeleton className="h-9 w-full" />
            )}
            <Button
              size="sm"
              variant="outline"
              className="cursor-pointer hover:bg-destructive hover:text-destructive-foreground dark:hover:bg-destructive dark:hover:text-destructive-foreground"
              disabled={loading}
            >
              <Trash2Icon />
            </Button>
          </div>
        </td>
        <td className="border-l border-b border-zinc-800 px-1 py-0.5 w-40">
          {!loading ? (
            <AgentTextInput
              fieldName="weapon-1-skill"
              maxLength={10}
              value="Constitution"
              onChange={() => {}}
            />
          ) : (
            <Skeleton className="h-9 w-full" />
          )}
        </td>
        <td className="border-l border-b border-zinc-800 px-1 py-0.5 w-35">
          {!loading ? (
            <AgentTextInput
              fieldName="weapon-1-range"
              maxLength={10}
              value="Air-dropped"
              onChange={() => {}}
            />
          ) : (
            <Skeleton className="h-9 w-full" />
          )}
        </td>
        <td className="border-l border-b border-zinc-800 px-1 py-0.5">
          {!loading ? (
            <AgentTextInput
              fieldName="weapon-1-damage"
              maxLength={10}
              value="1d12+2"
              onChange={() => {}}
            />
          ) : (
            <Skeleton className="h-9 w-full" />
          )}
        </td>
        <td className="border-l border-b border-zinc-800 px-1 py-0.5 w-30">
          {!loading ? (
            <AgentTextInput
              fieldName="weapon-1-ap"
              type="number"
              maxLength={2}
              min={0}
              value="10"
              onChange={() => {}}
            />
          ) : (
            <Skeleton className="h-9 w-full" />
          )}
        </td>
        <td className="border-l border-b border-zinc-800 px-1 py-0.5 w-20">
          {!loading ? (
            <AgentTextInput
              fieldName="weapon-1-lethality"
              type="number"
              maxLength={2}
              min={0}
              value="70"
              onChange={() => {}}
            />
          ) : (
            <Skeleton className="h-9 w-full" />
          )}
        </td>
        <td className="border-l border-b border-zinc-800 px-1 py-0.5 w-30">
          {!loading ? (
            <AgentTextInput
              fieldName="weapon-1-radius"
              maxLength={10}
              value="Per burst"
              onChange={() => {}}
            />
          ) : (
            <Skeleton className="h-9 w-full" />
          )}
        </td>
        <td className="border-l border-b border-zinc-800 px-1 py-0.5 w-20">
          {!loading ? (
            <AgentTextInput
              fieldName="weapon-1-ammo"
              type="number"
              maxLength={2}
              min={0}
              value="100"
              onChange={() => {}}
            />
          ) : (
            <Skeleton className="h-9 w-full" />
          )}
        </td>
        <td className="border-l border-b border-zinc-800 px-1 py-0.5 w-20">
          {!loading ? (
            <AgentTextInput
              fieldName="weapon-1-capacity"
              type="number"
              maxLength={2}
              min={0}
              value="100"
              onChange={() => {}}
            />
          ) : (
            <Skeleton className="h-9 w-full" />
          )}
        </td>
      </tr>
    </tbody>
  </table>
);

const NonLethalWeaponsTable = ({ loading }: { loading: boolean }) => (
  <table className="hidden w-full font-jost lg:table print:table">
    <thead className="text-xs uppercase">
      <tr>
        <th className="border-l border-b border-zinc-800 py-0.5 pl-2 pr-1 text-left font-normal">
          <div className="flex items-center justify-between">
            16.2. Status Effect Weapons
            <Button
              size="sm"
              variant="outline"
              className="cursor-pointer"
              disabled={loading}
            >
              <CirclePlusIcon />
            </Button>
          </div>
        </th>
        <th className="border-l border-b border-zinc-800 px-1 py-0.5 font-normal">
          Skill
        </th>
        <th className="border-l border-b border-zinc-800 px-1 py-0.5 font-normal">
          Base range
        </th>
        <th className="border-l border-b border-zinc-800 px-1 py-0.5 font-normal">
          Victim&rsquo;s Penalty
        </th>
        <th className="border-l border-b border-zinc-800 px-1 py-0.5 font-normal">
          Radius
        </th>
        <th className="border-l border-b border-zinc-800 px-1 py-0.5 font-normal">
          Ammo
        </th>
        <th className="border-l border-b border-zinc-800 px-1 py-0.5 font-normal">
          Capacity
        </th>
      </tr>
    </thead>
    <tbody>
      <tr className="text-center">
        <td className="border-l border-b border-zinc-800 px-1 py-0.5 w-80">
          <div className="flex items-center gap-1.5">
            {!loading ? (
              <AgentTextInput
                fieldName="weapon-1-name"
                maxLength={100}
                value="Flash-bang grenade, launched"
                onChange={() => {}}
              />
            ) : (
              <Skeleton className="h-9 w-full" />
            )}
            <Button
              size="sm"
              variant="outline"
              className="cursor-pointer hover:bg-destructive hover:text-destructive-foreground dark:hover:bg-destructive dark:hover:text-destructive-foreground"
              disabled={loading}
            >
              <Trash2Icon />
            </Button>
          </div>
        </td>
        <td className="border-l border-b border-zinc-800 px-1 py-0.5 w-40">
          {!loading ? (
            <AgentTextInput
              fieldName="weapon-1-skill"
              maxLength={10}
              value="Constitution"
              onChange={() => {}}
            />
          ) : (
            <Skeleton className="h-9 w-full" />
          )}
        </td>
        <td className="border-l border-b border-zinc-800 px-1 py-0.5 w-35">
          {!loading ? (
            <AgentTextInput
              fieldName="weapon-1-range"
              maxLength={10}
              value="300 m"
              onChange={() => {}}
            />
          ) : (
            <Skeleton className="h-9 w-full" />
          )}
        </td>
        <td className="border-l border-b border-zinc-800 px-1 py-0.5">
          {!loading ? (
            <AgentTextInput
              fieldName="nl-weapon-1-penalty"
              maxLength={10}
              value="-20% for 1d20 turns"
              onChange={() => {}}
            />
          ) : (
            <Skeleton className="h-9 w-full" />
          )}
        </td>
        <td className="border-l border-b border-zinc-800 px-1 py-0.5 w-30">
          {!loading ? (
            <AgentTextInput
              fieldName="weapon-1-radius"
              maxLength={10}
              value="1 target"
              onChange={() => {}}
            />
          ) : (
            <Skeleton className="h-9 w-full" />
          )}
        </td>
        <td className="border-l border-b border-zinc-800 px-1 py-0.5 w-20">
          {!loading ? (
            <AgentTextInput
              fieldName="weapon-1-ammo"
              type="number"
              maxLength={2}
              min={0}
              value="100"
              onChange={() => {}}
            />
          ) : (
            <Skeleton className="h-9 w-full" />
          )}
        </td>
        <td className="border-l border-b border-zinc-800 px-1 py-0.5 w-20">
          {!loading ? (
            <AgentTextInput
              fieldName="weapon-1-capacity"
              type="number"
              maxLength={2}
              min={0}
              value="100"
              onChange={() => {}}
            />
          ) : (
            <Skeleton className="h-9 w-full" />
          )}
        </td>
      </tr>
    </tbody>
  </table>
);

export default function Equipment() {
  const { agent, update } = useAgentStore();

  return (
    <div className="flex flex-col outline-1 outline-zinc-800 sm:flex-row print:outline-slate-950">
      <SideHeader>Equipment</SideHeader>
      <div className="w-full">
        <div
          className="flex h-auto w-full flex-col gap-1 px-2 py-1 font-jost outline-1 outline-zinc-800 print:gap-0 print:outline-slate-950"
          data-headlessui-state=""
        >
          <div className="flex items-center justify-between">
            <label
              className="w-full text-xs uppercase"
              id="headlessui-label-:r1dp:"
              htmlFor="headlessui-control-:r1do:"
            >
              <h3>15. Armor and gear</h3>
            </label>
            {agent && (agent?.gear?.length ?? 0) > 0 && (
              <span className="text-xs print:hidden">
                {agent?.gear?.length ?? 0}/500
              </span>
            )}
          </div>
          <AgentTextarea
            loading={!agent}
            fieldName="gear"
            value={agent?.gear || ""}
            onChange={(value) => {
              update({ ...agent, gear: value });
            }}
            maxLength={500}
            className="h-60"
          />
        </div>
        <WeaponsTable loading={!agent} />
        <NonLethalWeaponsTable loading={!agent} />
      </div>
    </div>
  );
}
