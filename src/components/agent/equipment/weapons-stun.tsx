"use client";

import { type IStunWeapon } from "@/types/agent";
import { type IWeaponData } from "@/types/data";

import { Button } from "@/components/ui/button";
import { CirclePlusIcon } from "@/components/ui/icons/lucide-circle-plus";
import { Trash2Icon } from "@/components/ui/icons/lucide-trash-2";
import { Skeleton } from "@/components/ui/skeleton";
import { AgentTextInput } from "../form/agent-text-input";
import { WeaponPicker } from "./picker/picker";

const WIDTHS = {
  name: "w-80",
  skill: "w-38",
  range: "w-32",
  radius: "w-28",
  ammo: "w-18",
  capacity: "w-18",

  penalty: "",
};

export const StunWeaponsTable = ({
  loading,
  weapons,
  add,
}: {
  loading: boolean;
  weapons: IStunWeapon[];
  add: (weapon: IWeaponData) => void;
}) => {
  return (
    <table className="w-full">
      <thead className="text-xs uppercase">
        <tr>
          <th className="border-l border-b border-zinc-800 py-0.5 pl-2 pr-1 text-left font-normal h-10">
            <div className="flex items-center justify-between">
              16.b. Stun Weapons
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
            Victim's Penalty
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
              colSpan={7}
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
                  Add stun weapon
                </Button>
              </WeaponPicker>
            </td>
          </tr>
        )}
        {weapons.map((weapon: IStunWeapon, index: number) => (
          <tr className="text-center" key={index}>
            <td
              className={`border-l border-b border-zinc-800 px-1 py-0.5 ${WIDTHS.name}`}
            >
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
            <td
              className={`border-l border-b border-zinc-800 px-1 py-0.5 ${WIDTHS.skill}`}
            >
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
            <td
              className={`border-l border-b border-zinc-800 px-1 py-0.5 ${WIDTHS.range}`}
            >
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
            <td
              className={`border-l border-b border-zinc-800 px-1 py-0.5 ${WIDTHS.penalty}`}
            >
              {!loading ? (
                <AgentTextInput
                  fieldName="weapon-1-penalty"
                  maxLength={10}
                  value={weapon.penalty || ""}
                  onChange={() => {}}
                />
              ) : (
                <Skeleton className="h-9 w-full" />
              )}
            </td>
            <td
              className={`border-l border-b border-zinc-800 px-1 py-0.5 ${WIDTHS.radius}`}
            >
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
            <td
              className={`border-l border-b border-zinc-800 px-1 py-0.5 ${WIDTHS.ammo}`}
            >
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
            <td
              className={`border-l border-b border-zinc-800 px-1 py-0.5 ${WIDTHS.capacity}`}
            >
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
