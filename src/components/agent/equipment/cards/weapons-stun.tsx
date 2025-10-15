"use client";

import type { IStunWeapon } from "@/types/agent";

import { Item, ItemContent, ItemTitle } from "@/components/ui/item";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Trash2Icon } from "@/components/ui/icons/lucide-trash-2";
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

export const StunWeaponsCards = ({
  loading,
  weapons,
  onChange,
  remove,
}: {
  loading: boolean;
  weapons: IStunWeapon[];
  onChange: (weapon: IStunWeapon, index: number) => void;
  remove: (index: number) => void;
}) => {
  const mode = useAgentStore((state) => state.mode);
  return weapons.map((weapon, index) => (
    <Item key={index} variant="outline">
      <ItemContent>
        <ItemTitle className="w-full">
          <AgentTextInput
            fieldName={`stun-weapon-${index}-name`}
            value={weapon.weapon}
            onChange={(value) => {
              onChange({ ...weapon, weapon: value }, index);
            }}
            maxLength={100}
            className="bg-zinc-800 text-white dark:bg-white dark:text-zinc-800 font-weight-bold"
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
                  fieldName={`stun-weapon-${index}-skill`}
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
                  fieldName={`stun-weapon-${index}-range`}
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
                  fieldName={`stun-weapon-${index}-penalty`}
                  label="Penalty"
                  maxLength={20}
                  value={weapon.penalty ?? ""}
                  onChange={(value) => {
                    onChange({ ...weapon, penalty: value }, index);
                  }}
                />
              </td>
              <td>
                <WeaponCardField
                  loading={loading}
                  fieldName={`stun-weapon-${index}-radius`}
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
                  fieldName={`stun-weapon-${index}-ammo`}
                  type="number"
                  label="Ammo"
                  maxLength={2}
                  value={weapon.ammo?.toString() ?? ""}
                  onChange={(value) => {
                    onChange({ ...weapon, ammo: parseInt(value, 10) }, index);
                  }}
                />
              </td>
              <td>
                <WeaponCardField
                  loading={loading}
                  fieldName={`stun-weapon-${index}-capacity`}
                  type="number"
                  label="Capacity"
                  maxLength={2}
                  value={weapon.capacity?.toString() ?? ""}
                  onChange={(value) => {
                    onChange(
                      { ...weapon, capacity: parseInt(value, 10) },
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
  ));
};
