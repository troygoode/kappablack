"use client";

import { type IWeapon } from "@/types/agent";

import { Button } from "../ui/button";
import { CirclePlusIcon } from "../ui/icons/lucide-circle-plus";
import { Trash2Icon } from "../ui/icons/lucide-trash-2";
import { Skeleton } from "../ui/skeleton";
import { AgentTextInput } from "./form/agent-text-input";
import { WeaponPicker } from "./weapons-picker";

export const WeaponsTable = ({
  loading,
  weapons,
  add,
}: {
  loading: boolean;
  weapons: IWeapon[];
  add: (weapon: IWeapon) => void;
}) => {
  return (
    <table className="w-full">
      <thead className="text-xs uppercase">
        <tr>
          <th className="border-l border-b border-zinc-800 py-0.5 pl-2 pr-1 text-left font-normal h-10">
            <div className="flex items-center justify-between">
              16.1. Weapons
              {weapons.length > 0 && (
                <WeaponPicker add={add}>
                  <Button
                    size="sm"
                    variant="outline"
                    className="cursor-pointer"
                    disabled={loading}
                  >
                    <CirclePlusIcon />
                  </Button>
                </WeaponPicker>
              )}
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
        {weapons.length === 0 && (
          <tr className="text-center">
            <td
              colSpan={9}
              className="border-l border-b border-zinc-800 px-1 py-3"
            >
              <WeaponPicker add={add}>
                <Button
                  size="sm"
                  variant="outline"
                  className="cursor-pointer"
                  disabled={loading}
                >
                  <CirclePlusIcon />
                  Add weapon
                </Button>
              </WeaponPicker>
            </td>
          </tr>
        )}
        {weapons.map((weapon: IWeapon, index: number) => (
          <tr className="text-center" key={index}>
            <td className="border-l border-b border-zinc-800 px-1 py-0.5 w-80">
              <div className="flex items-center gap-1.5">
                {!loading ? (
                  <AgentTextInput
                    fieldName="weapon-1-name"
                    maxLength={100}
                    value={weapon.weapon || ""}
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
                  value={weapon.skill || ""}
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
                  value={weapon.range || ""}
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
                  value={weapon.damage || ""}
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
                  value={weapon.ap?.toString() || ""}
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
                  value={weapon.lethality?.toString() || ""}
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
                  value={weapon.radius || ""}
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
                  value={weapon.ammo?.toString() || ""}
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
                  value={weapon.capacity?.toString() || ""}
                  onChange={() => {}}
                />
              ) : (
                <Skeleton className="h-9 w-full" />
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
