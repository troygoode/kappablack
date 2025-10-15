"use client";

import { type IWeapon } from "@/types/agent";
import { type IWeaponData } from "@/types/data";

import { Item, ItemContent, ItemTitle } from "@/components/ui/item";

import { Button } from "@/components/ui/button";
import { CirclePlusIcon } from "@/components/ui/icons/lucide-circle-plus";
import { Skeleton } from "@/components/ui/skeleton";
import { Trash2Icon } from "@/components/ui/icons/lucide-trash-2";
import { WeaponPicker } from "../picker/picker";
import { AgentTextInput } from "../../form/agent-text-input";
import { AgentLabel } from "../../form/agent-label";
import { useAgentStore } from "../../stores/agent";

const WeaponCardField = ({
  loading,
  fieldName,
  type,
  label,
  value,
  maxLength,
  required,
  onChange,
}: {
  loading: boolean;
  fieldName: string;
  type?: "text" | "number";
  label: string;
  value: string;
  maxLength: number;
  required?: boolean;
  onChange: (value: string) => void;
}) => {
  return (
    <div className={`flex h-auto w-full flex-col gap-1 px-2 py-1`}>
      <AgentLabel
        fieldName={fieldName}
        length={type === "number" ? 0 : value.length}
        maxLength={maxLength}
      >
        {label}
      </AgentLabel>
      {!loading ? (
        <AgentTextInput
          fieldName={fieldName}
          type={type}
          value={value}
          onChange={onChange}
          maxLength={maxLength}
          required={required}
        />
      ) : (
        <Skeleton className="h-9 w-full" />
      )}
    </div>
  );
};

export const WeaponsCards = ({
  loading,
  weapons,
  add,
  onChange,
  remove,
  stunWeapons,
}: {
  loading: boolean;
  weapons: IWeapon[];
  add: (weapon: IWeaponData) => void;
  onChange: (weapon: IWeapon, index: number) => void;
  remove: (index: number) => void;
  stunWeapons?: React.ReactNode;
}) => {
  const mode = useAgentStore((state) => state.mode);
  return (
    <div className="w-full">
      <div className="flex w-full flex-col gap-1 px-2 py-1 outline-1 outline-zinc-800 print:gap-0 print:outline-slate-950">
        <div className="flex items-center justify-between">
          <label className="w-full text-xs uppercase" htmlFor="gear">
            <h3>16. Weapons</h3>
          </label>
          {(weapons.length > 0 || stunWeapons) && mode === "edit" && (
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
        {!weapons.length && !stunWeapons ? (
          <div className="flex py-1.5 w-full items-center justify-center">
            <WeaponPicker add={add}>
              <Button
                size="sm"
                variant="outline"
                className="cursor-pointer"
                disabled={loading}
              >
                <CirclePlusIcon />
                Add a weapon
              </Button>
            </WeaponPicker>
          </div>
        ) : null}
        <div className="flex flex-col gap-2">
          {weapons.map((weapon, index) => (
            <Item key={index} variant="outline">
              <ItemContent>
                <ItemTitle className="w-full">
                  <AgentTextInput
                    fieldName={`weapon-${index}-name`}
                    value={weapon.weapon}
                    onChange={(value) => {
                      onChange({ ...weapon, weapon: value }, index);
                    }}
                    maxLength={100}
                    className="bg-zinc-800 text-white dark:bg-white dark:text-zinc-800"
                    required
                  />
                  {mode === "edit" && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="cursor-pointer"
                      onClick={() => remove(index)}
                      disabled={loading}
                    >
                      <Trash2Icon />
                    </Button>
                  )}
                </ItemTitle>
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <WeaponCardField
                          loading={loading}
                          fieldName={`weapon-${index}-skill`}
                          label="Skill"
                          maxLength={16}
                          value={weapon.skill ?? ""}
                          onChange={(value) => {
                            onChange({ ...weapon, skill: value }, index);
                          }}
                          required
                        />
                      </td>
                      <td>
                        <WeaponCardField
                          loading={loading}
                          fieldName={`weapon-${index}-range`}
                          label="Range"
                          maxLength={11}
                          value={weapon.range ?? ""}
                          onChange={(value) => {
                            onChange({ ...weapon, range: value }, index);
                          }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <WeaponCardField
                          loading={loading}
                          fieldName={`weapon-${index}-damage`}
                          label="Damage"
                          maxLength={10}
                          value={weapon.damage ?? ""}
                          onChange={(value) => {
                            onChange({ ...weapon, damage: value }, index);
                          }}
                        />
                      </td>
                      <td>
                        <WeaponCardField
                          loading={loading}
                          fieldName={`weapon-${index}-ap`}
                          type="number"
                          label="Armor Piercing"
                          maxLength={2}
                          value={weapon.ap?.toString() ?? ""}
                          onChange={(value) => {
                            onChange({ ...weapon, ap: parseInt(value) }, index);
                          }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <WeaponCardField
                          loading={loading}
                          fieldName={`weapon-${index}-lethality`}
                          type="number"
                          label="Lethality"
                          maxLength={2}
                          value={weapon.lethality?.toString() ?? ""}
                          onChange={(value) => {
                            onChange(
                              { ...weapon, lethality: parseInt(value) },
                              index
                            );
                          }}
                        />
                      </td>
                      <td>
                        <WeaponCardField
                          loading={loading}
                          fieldName={`weapon-${index}-radius`}
                          label="Radius"
                          maxLength={9}
                          value={weapon.radius ?? ""}
                          onChange={(value) => {
                            onChange({ ...weapon, radius: value }, index);
                          }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <WeaponCardField
                          loading={loading}
                          fieldName={`weapon-${index}-ammo`}
                          type="number"
                          label="Ammo"
                          maxLength={2}
                          value={weapon.ammo?.toString() ?? ""}
                          onChange={(value) => {
                            onChange(
                              { ...weapon, ammo: parseInt(value) },
                              index
                            );
                          }}
                        />
                      </td>
                      <td>
                        <WeaponCardField
                          loading={loading}
                          fieldName={`weapon-${index}-capacity`}
                          type="number"
                          label="Capacity"
                          maxLength={2}
                          value={weapon.capacity?.toString() ?? ""}
                          onChange={(value) => {
                            onChange(
                              { ...weapon, capacity: parseInt(value) },
                              index
                            );
                          }}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </ItemContent>
            </Item>
          ))}
          {stunWeapons}
        </div>
      </div>
    </div>
  );
};
