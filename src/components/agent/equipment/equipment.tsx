"use client";

import { type IStunWeapon, type IWeapon } from "@/types/agent";
import { type IWeaponData } from "@/types/data";

import { useShallow } from "zustand/shallow";

import { AgentTextarea } from "../form/agent-textarea";
import { SideHeader } from "../form/side-header";
import { useAgentStore } from "../stores/agent";
import { WeaponsTable } from "./tables/weapons";
import { WeaponsCards } from "./cards/weapons";
import { StunWeaponsTable } from "./tables/weapons-stun";
import { StunWeaponsCards } from "./cards/weapons-stun";

export default function Equipment() {
  const merge = useAgentStore((state) => state.merge);
  const isLoaded = useAgentStore((state) => state.isLoaded);
  const gear = useAgentStore((state) => state.agent?.gear || "");
  const weapons = useAgentStore(
    useShallow((state) => state.agent?.weapons || [])
  );
  const stunWeapons = useAgentStore(
    useShallow((state) => state.agent?.stunWeapons || [])
  );

  const addWeapon = (weapon: IWeaponData) => {
    if (weapon.penalty !== undefined) {
      stunWeapons.push({
        ...weapon,
        ammo: weapon.capacity ? weapon.capacity : undefined,
      });
      merge({ stunWeapons: stunWeapons });
    } else {
      weapons.push({
        ...weapon,
        ammo: weapon.capacity ? weapon.capacity : undefined,
      });
      merge({ weapons });
    }
  };

  const handleWeaponChange = (weapon: IWeapon, index: number) => {
    const updatedWeapons = [...weapons];
    updatedWeapons[index] = weapon;
    merge({ weapons: updatedWeapons });
  };

  const handleStunWeaponChange = (weapon: IStunWeapon, index: number) => {
    const updatedWeapons = [...stunWeapons];
    updatedWeapons[index] = weapon;
    merge({ stunWeapons: updatedWeapons });
  };

  const removeWeapon = (index: number) => {
    const updatedWeapons = [...weapons];
    updatedWeapons.splice(index, 1);
    merge({ weapons: updatedWeapons });
  };

  const removeStunWeapon = (index: number) => {
    const updatedWeapons = [...stunWeapons];
    updatedWeapons.splice(index, 1);
    merge({ stunWeapons: updatedWeapons });
  };

  return (
    <div className="flex flex-col outline-1 outline-zinc-800 sm:flex-row print:outline-slate-950">
      <SideHeader>Equipment</SideHeader>
      <div className="w-full">
        <div className="flex w-full flex-col gap-1 px-2 py-1 outline-1 outline-zinc-800 print:gap-0 print:outline-slate-950">
          <div className="flex items-center justify-between">
            <label className="w-full text-xs uppercase" htmlFor="gear">
              <h3>15. Armor and gear</h3>
            </label>
            {isLoaded && gear.length ? (
              <span className="text-xs print:hidden">{gear.length}/500</span>
            ) : null}
          </div>
          <AgentTextarea
            loading={!isLoaded}
            fieldName="gear"
            value={gear}
            onChange={(value) => {
              merge({ gear: value });
            }}
            maxLength={500}
            className="h-58"
          />
        </div>
        <div className="md:hidden print:hidden">
          <WeaponsCards
            loading={!isLoaded}
            weapons={weapons}
            add={addWeapon}
            onChange={handleWeaponChange}
            remove={removeWeapon}
            stunWeapons={
              stunWeapons.length > 0 ? (
                <StunWeaponsCards
                  loading={!isLoaded}
                  weapons={stunWeapons}
                  add={addWeapon}
                  onChange={handleStunWeaponChange}
                  remove={removeStunWeapon}
                />
              ) : null
            }
          />
        </div>
        <div className="hidden md:block print:block">
          <WeaponsTable
            loading={!isLoaded}
            weapons={weapons}
            add={addWeapon}
            onChange={handleWeaponChange}
            remove={removeWeapon}
            hasStunWeapons={stunWeapons.length > 0}
          />
          {stunWeapons.length > 0 && (
            <StunWeaponsTable
              loading={!isLoaded}
              weapons={stunWeapons}
              add={addWeapon}
              onChange={handleStunWeaponChange}
              remove={removeStunWeapon}
            />
          )}
        </div>
      </div>
    </div>
  );
}
