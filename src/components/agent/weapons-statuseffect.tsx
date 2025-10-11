"use client";

import { type IStatusEffectWeapon } from "@/types/agent";

import { Button } from "../ui/button";
import { CirclePlusIcon } from "../ui/icons/lucide-circle-plus";
import { Trash2Icon } from "../ui/icons/lucide-trash-2";
import { Skeleton } from "../ui/skeleton";
import { AgentTextInput } from "./form/agent-text-input";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export const StatusEffectWeaponsTable = ({ loading }: { loading: boolean }) => (
  <table className="w-full">
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
