"use client";

import { IWeapon } from "@/types/agent";
import { AgentTextarea } from "./form/agent-textarea";
import { SideHeader } from "./form/side-header";
import { useAgentStore } from "./stores/agent";
import { WeaponsTable } from "./weapons";
import { StatusEffectWeaponsTable } from "./weapons-statuseffect";

export default function Equipment() {
  const { agent, update } = useAgentStore();
  const weapons = agent?.weapons || [];

  const addWeapon = (weapon: IWeapon) => {
    weapons.push(weapon);
    update({ ...agent, weapons });
  };

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
        <WeaponsTable
          loading={!agent}
          weapons={agent?.weapons || []}
          add={addWeapon}
        />
        <StatusEffectWeaponsTable loading={!agent} />
      </div>
    </div>
  );
}
