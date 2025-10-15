"use client";

import { type IWeapon } from "@/types/agent";
import { type IWeaponData } from "@/types/data";

import { Button } from "@/components/ui/button";
import { CirclePlusIcon } from "@/components/ui/icons/lucide-circle-plus";
import { Trash2Icon } from "@/components/ui/icons/lucide-trash-2";
import { Skeleton } from "@/components/ui/skeleton";
import { AgentTextInput } from "../../form/agent-text-input";
import { WeaponPicker } from "../picker/picker";
import { useAgentStore } from "../../stores/agent";

const WIDTHS = {
  name: "w-80",
  skill: "w-38",
  range: "w-32",
  radius: "w-28",
  ammo: "w-18",
  capacity: "w-18",

  damage: "",
  ap: "w-18",
  lethality: "w-22",
};

export const WeaponsTable = ({
  loading,
  weapons,
  add,
  onChange,
  hasStunWeapons,
  remove,
}: {
  loading: boolean;
  weapons: IWeapon[];
  add: (weapon: IWeaponData) => void;
  hasStunWeapons: boolean;
  onChange: (weapon: IWeapon, index: number) => void;
  remove: (index: number) => void;
}) => {
  const mode = useAgentStore((state) => state.mode);
  return (
    <table className="w-full">
      <thead className="text-xs uppercase">
        <tr>
          <th className="border-l border-b border-zinc-800 py-0.5 pl-2 pr-1 text-left font-normal h-10">
            <div className="flex items-center justify-between">
              {hasStunWeapons ? "16.a. Lethal Weapons" : "16. Weapons"}
              {weapons.length > 0 && mode === "edit" ? (
                <WeaponPicker add={add}>
                  <Button
                    size="sm"
                    variant="outline"
                    className="cursor-pointer print:hidden"
                    disabled={loading}
                  >
                    <CirclePlusIcon />
                  </Button>
                </WeaponPicker>
              ) : null}
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
          <th
            className="border-l border-b border-zinc-800 px-1 py-0.5 font-normal"
            title="Armor Piercing"
          >
            A.P.
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
          <tr className="text-center print:hidden">
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
            <td
              className={`border-l border-b border-zinc-800 px-1 py-0.5 ${WIDTHS.name}`}
            >
              <div className="flex items-center gap-1.5">
                {!loading ? (
                  <AgentTextInput
                    fieldName={`weapon-${index}-name`}
                    maxLength={100}
                    value={weapon.weapon || ""}
                    onChange={(value) =>
                      onChange({ ...weapon, weapon: value }, index)
                    }
                    className="text-left"
                    required
                  />
                ) : (
                  <Skeleton className="h-9 w-full" />
                )}
                {mode === "edit" ? (
                  <Button
                    size="sm"
                    variant="outline"
                    className="cursor-pointer hover:bg-destructive hover:text-destructive-foreground dark:hover:bg-destructive dark:hover:text-destructive-foreground print:hidden"
                    disabled={loading}
                    onClick={() => remove(index)}
                  >
                    <Trash2Icon />
                  </Button>
                ) : null}
              </div>
            </td>
            <td
              className={`border-l border-b border-zinc-800 px-1 py-0.5 ${WIDTHS.skill}`}
            >
              {!loading ? (
                <AgentTextInput
                  fieldName={`weapon-${index}-skill`}
                  maxLength={16}
                  value={weapon.skill || ""}
                  onChange={(value) =>
                    onChange({ ...weapon, skill: value }, index)
                  }
                  className="text-left"
                  required
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
                  fieldName={`weapon-${index}-range`}
                  maxLength={11}
                  value={weapon.range || ""}
                  onChange={(value) =>
                    onChange({ ...weapon, range: value }, index)
                  }
                />
              ) : (
                <Skeleton className="h-9 w-full" />
              )}
            </td>
            <td
              className={`border-l border-b border-zinc-800 px-1 py-0.5 ${WIDTHS.damage}`}
            >
              {!loading ? (
                <AgentTextInput
                  fieldName={`weapon-${index}-damage`}
                  maxLength={10}
                  value={weapon.damage || ""}
                  onChange={(value) =>
                    onChange({ ...weapon, damage: value }, index)
                  }
                />
              ) : (
                <Skeleton className="h-9 w-full" />
              )}
            </td>
            <td
              className={`border-l border-b border-zinc-800 px-1 py-0.5 ${WIDTHS.ap}`}
            >
              {!loading ? (
                <AgentTextInput
                  fieldName={`weapon-${index}-ap`}
                  type="number"
                  maxLength={2}
                  min={0}
                  value={weapon.ap?.toString() || ""}
                  onChange={(value) =>
                    onChange(
                      { ...weapon, ap: parseInt(value) ?? undefined },
                      index
                    )
                  }
                />
              ) : (
                <Skeleton className="h-9 w-full" />
              )}
            </td>
            <td
              className={`border-l border-b border-zinc-800 px-1 py-0.5 ${WIDTHS.lethality}`}
            >
              {!loading ? (
                <AgentTextInput
                  fieldName={`weapon-${index}-lethality`}
                  type="number"
                  maxLength={2}
                  min={0}
                  value={weapon.lethality?.toString() || ""}
                  onChange={(value) =>
                    onChange(
                      { ...weapon, lethality: parseInt(value) ?? undefined },
                      index
                    )
                  }
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
                  fieldName={`weapon-${index}-radius`}
                  maxLength={9}
                  value={weapon.radius || ""}
                  onChange={(value) =>
                    onChange({ ...weapon, radius: value }, index)
                  }
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
                  fieldName={`weapon-${index}-ammo`}
                  type="number"
                  maxLength={3}
                  min={0}
                  value={weapon.ammo?.toString() || ""}
                  onChange={(value) =>
                    onChange(
                      { ...weapon, ammo: parseInt(value) ?? undefined },
                      index
                    )
                  }
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
                  fieldName={`weapon-${index}-capacity`}
                  type="number"
                  maxLength={3}
                  min={0}
                  value={weapon.capacity?.toString() || ""}
                  onChange={(value) =>
                    onChange(
                      { ...weapon, capacity: parseInt(value) ?? undefined },
                      index
                    )
                  }
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
