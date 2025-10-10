"use client";

import { Button } from "../ui/button";
import { CirclePlusIcon } from "../ui/icons/lucide-circle-plus";
import { Trash2Icon } from "../ui/icons/lucide-trash-2";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { AgentTextarea } from "./form/agent-textarea";
import { SideHeader } from "./form/side-header";
import { useAgentStore } from "./stores/agent";

const WeaponsTable = () => (
  <table className="hidden w-full font-jost lg:table print:table">
    <thead className="text-xs uppercase">
      <tr>
        <th className="border-l border-b border-zinc-800 py-0.5 px-2 text-left font-normal">
          <div className="flex items-center justify-between">
            16. Weapons
            <Button size="sm" variant="outline" className="cursor-pointer">
              <CirclePlusIcon />
              Add weapon
            </Button>
          </div>
        </th>
        <th className="border-l border-b border-zinc-800 px-1 py-0.5 font-normal">
          Skill %
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
      </tr>
    </thead>
    <tbody>
      <tr className="text-center">
        <td className="border-l border-b border-zinc-800 px-1 py-0.5">
          <div className="flex items-center gap-1.5">
            <Input
              className="min-h-10 w-full justify-self-end rounded-t-md border-b border-zinc-800 bg-zinc-300 bg-opacity-70 px-2 py-0.5 hover:bg-opacity-100 focus-visible:border-b-0 focus-visible:bg-opacity-100 focus-visible:outline-2 focus-visible:outline-slate-600 sm:min-h-0 sm:px-1 print:border-0 print:bg-transparent print:p-0 print:text-sm print:py-0.5 print:px-1"
              maxLength={100}
              placeholder=""
              id="headlessui-input-:r1ds:"
              data-headlessui-state=""
              defaultValue="Unarmed Attack"
            />
            <Button size="sm" variant="outline" className="cursor-pointer">
              <Trash2Icon />
            </Button>
          </div>
        </td>
        <td className="border-l border-b border-zinc-800 px-1 py-0.5">40</td>
        <td className="border-l border-b border-zinc-800 px-1 py-0.5">
          &mdash;
        </td>
        <td className="border-l border-b border-zinc-800 px-1 py-0.5">1d4-1</td>
        <td className="border-l border-b border-zinc-800 px-1 py-0.5">
          &mdash;
        </td>
        <td className="border-l border-b border-zinc-800 px-1 py-0.5">
          &mdash;
        </td>
        <td className="border-l border-b border-zinc-800 px-1 py-0.5">
          &mdash;
        </td>
        <td className="border-l border-b border-zinc-800 px-1 py-0.5">
          &mdash;
        </td>
      </tr>
    </tbody>
  </table>
);

export default function Equipment() {
  const { agent, update } = useAgentStore();

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
        <WeaponsTable />
      </div>
    </div>
  );
}
