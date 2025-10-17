"use client";

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
  const addWeapon = useAgentStore((state) => state.addWeapon);
  const updateWeapon = useAgentStore((state) => state.updateWeapon);
  const updateStunWeapon = useAgentStore((state) => state.updateStunWeapon);
  const removeWeapon = useAgentStore((state) => state.removeWeapon);
  const removeStunWeapon = useAgentStore((state) => state.removeStunWeapon);
  const isLoaded = useAgentStore((state) => state.isLoaded);
  const mode = useAgentStore((state) => state.mode);
  const gear = useAgentStore((state) => state.agent?.gear || "");
  const weapons = useAgentStore(
    useShallow((state) => state.agent?.weapons || [])
  );
  const stunWeapons = useAgentStore(
    useShallow((state) => state.agent?.stunWeapons || [])
  );

  return (
    <div className="flex flex-col outline-1 outline-zinc-800 sm:flex-row print:outline-slate-950">
      <SideHeader>Equipment</SideHeader>
      <div className="w-full">
        <div className="flex w-full flex-col gap-1 px-2 py-1 outline-1 outline-zinc-800 print:gap-0 print:outline-slate-950">
          <div className="flex items-center justify-between">
            <label className="w-full text-xs uppercase" htmlFor="gear">
              <h3>15. Armor and gear: {weapons?.length}</h3>
            </label>
            {isLoaded && gear.length && mode === "edit" ? (
              <span className="text-xs print:hidden">{gear.length}/1200</span>
            ) : null}
          </div>
          <AgentTextarea
            loading={!isLoaded}
            fieldName="gear"
            value={gear}
            onChange={(value) => {
              merge({ gear: value });
            }}
            maxLength={1200}
            className="h-58"
          />
        </div>
        <div className="md:hidden print:hidden">
          <WeaponsCards
            loading={!isLoaded}
            weapons={weapons ?? []}
            add={addWeapon}
            onChange={updateWeapon}
            remove={removeWeapon}
            stunWeapons={
              stunWeapons.length > 0 ? (
                <StunWeaponsCards
                  loading={!isLoaded}
                  weapons={stunWeapons}
                  onChange={updateStunWeapon}
                  remove={removeStunWeapon}
                />
              ) : null
            }
          />
        </div>
        <div className="hidden md:block print:block">
          <WeaponsTable
            loading={!isLoaded}
            weapons={weapons ?? []}
            add={addWeapon}
            onChange={updateWeapon}
            remove={removeWeapon}
            hasStunWeapons={stunWeapons.length > 0}
          />
          {stunWeapons.length > 0 && (
            <StunWeaponsTable
              loading={!isLoaded}
              weapons={stunWeapons}
              add={addWeapon}
              onChange={updateStunWeapon}
              remove={removeStunWeapon}
            />
          )}
        </div>
      </div>
    </div>
  );
}
