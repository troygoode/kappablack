"use client";

import { type IWeaponData } from "@/types/data";

import { useShallow } from "zustand/shallow";

import { AgentTextarea } from "../form/agent-textarea";
import { SideHeader } from "../form/side-header";
import { useAgentStore } from "../stores/agent";
import { WeaponsTable } from "./weapons";
import { StunWeaponsTable } from "./weapons-statuseffect";

export default function Equipment() {
  const merge = useAgentStore((state) => state.merge);
  const isLoaded = useAgentStore((state) => state.isLoaded);
  const gear = useAgentStore((state) => state.agent?.gear || "");
  const weapons = useAgentStore(
    useShallow((state) => state.agent?.weapons || [])
  );
  const statusEffectWeapons = useAgentStore(
    useShallow((state) => state.agent?.statusEffectWeapons || [])
  );

  const addWeapon = (weapon: IWeaponData) => {
    if (weapon.penalty !== undefined) {
      statusEffectWeapons.push({
        ...weapon,
        ammo: weapon.capacity ? weapon.capacity : undefined,
      });
      merge({ statusEffectWeapons });
    } else {
      weapons.push({
        ...weapon,
        ammo: weapon.capacity ? weapon.capacity : undefined,
      });
      merge({ weapons });
    }
  };

  return (
    <div className="flex flex-col outline-1 outline-zinc-800 sm:flex-row print:outline-slate-950">
      <SideHeader>Equipment</SideHeader>
      <div className="w-full">
        <div
          className="flex w-full flex-col gap-1 px-2 py-1 font-jost outline-1 outline-zinc-800 print:gap-0 print:outline-slate-950"
          data-headlessui-state=""
        >
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
        <WeaponsTable
          loading={!isLoaded}
          weapons={weapons}
          add={addWeapon}
          hasStunWeapons={statusEffectWeapons.length > 0}
        />
        {statusEffectWeapons.length > 0 && (
          <StunWeaponsTable
            loading={!isLoaded}
            weapons={statusEffectWeapons}
            add={addWeapon}
          />
        )}
      </div>
    </div>
  );
}
