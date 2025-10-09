"use client";

import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { SideHeader } from "./form/side-header";

const Stat = ({
  label,
  abbreviation,
  score,
  feature,
}: {
  label: string;
  abbreviation: string;
  score: number;
  feature: string;
}) => {
  return (
    <div className="grid grid-cols-7">
      <div className="col-span-2 flex flex-wrap items-center gap-1 px-2 py-1 text-sm outline-1 outline-zinc-800 print:outline-slate-950">
        {label} <span className="text-xs uppercase">({abbreviation})</span>
      </div>
      <div
        className="flex items-center p-1 outline-1 outline-zinc-800 print:outline-slate-950"
        data-headlessui-state=""
      >
        <div className="flex gap-0.5">
          <Input
            className="span min-h-10 w-full grow rounded-t-md border-b border-zinc-800 bg-zinc-300 bg-opacity-70 px-1 py-0.5 text-center hover:bg-opacity-100 focus-visible:border-b-0 focus-visible:bg-opacity-100 focus-visible:outline-2 focus-visible:outline-slate-600 sm:min-h-0 print:border-0 print:bg-transparent print:text-sm"
            type="number"
            min="3"
            maxLength={3}
            defaultValue={score}
            data-1p-ignore
          />
        </div>
      </div>
      <div className="flex items-center justify-center px-2 py-1 outline-1 outline-zinc-800 print:text-sm print:outline-slate-950">
        {score * 5}
      </div>
      <div className="col-span-3 flex items-center p-1 outline-1 outline-zinc-800 print:px-2 print:outline-slate-950">
        <Input
          className="min-h-10 w-full justify-self-end rounded-t-md border-b border-zinc-800 bg-zinc-300 bg-opacity-70 px-2 py-0.5 hover:bg-opacity-100 focus-visible:border-b-0 focus-visible:bg-opacity-100 focus-visible:outline-2 focus-visible:outline-slate-600 sm:min-h-0 sm:px-1 print:border-0 print:bg-transparent print:p-0 print:text-sm disabled:opacity-0 transition-opacity duration-200"
          maxLength={100}
          defaultValue={feature}
          data-1p-ignore
          disabled={score > 9 && score < 13}
        />
      </div>
    </div>
  );
};

const Derived = ({
  label,
  abbreviation,
  max,
  current,
}: {
  label: string;
  abbreviation: string;
  max: number;
  current: number;
}) => {
  return (
    <div className="grid grid-cols-7 print:text-sm">
      <div className="col-span-3 flex items-center gap-1 px-2 py-1 text-sm outline-1 outline-zinc-800 print:outline-slate-950">
        {label} <span className="uppercase">({abbreviation})</span>
      </div>
      <div className="col-span-2 flex items-center justify-center px-2 py-1 outline-1 outline-zinc-800 print:outline-slate-950">
        <span>{max}</span>
      </div>
      <div className="col-span-2 flex items-center justify-center px-2 py-1 outline-1 outline-zinc-800 print:outline-slate-950">
        <div className="flex gap-0.5">
          <Input
            className="span min-h-10 w-full grow rounded-t-md border-b border-zinc-800 bg-zinc-300 bg-opacity-70 px-1 py-0.5 text-center hover:bg-opacity-100 focus-visible:border-b-0 focus-visible:bg-opacity-100 focus-visible:outline-2 focus-visible:outline-slate-600 sm:min-h-0 print:border-0 print:bg-transparent print:text-sm"
            maxLength={3}
            min={0}
            type="number"
            defaultValue={current}
          />
        </div>
      </div>
    </div>
  );
};

export default function Stats() {
  return (
    <div className="flex flex-col outline-1 outline-zinc-800 sm:flex-row print:outline-slate-950 ">
      <SideHeader>Statistical Data</SideHeader>
      <div className="w-full">
        <div className="flex h-full flex-col">
          <div className="flex flex-col font-jost">
            <div className="grid grid-cols-7 text-xs uppercase">
              <h3 className="col-span-2 px-2 py-1 outline-1 outline-zinc-800 print:outline-slate-950">
                8. Statistics
              </h3>
              <div className="px-2 py-1 text-center outline-1 outline-zinc-800 print:outline-slate-950">
                Score
              </div>
              <div className="px-2 py-1 text-center outline-1 outline-zinc-800 print:outline-slate-950">
                &#10799;5
              </div>
              <div className="col-span-3 px-2 py-1 text-center outline-1 outline-zinc-800 print:outline-slate-950">
                Distinguishing features
              </div>
            </div>
            <Stat label="Strength" abbreviation="str" score={11} feature="" />
            <Stat label="Dexterity" abbreviation="dex" score={13} feature="" />
            <Stat
              label="Constitution"
              abbreviation="con"
              score={10}
              feature=""
            />
            <Stat
              label="Intelligence"
              abbreviation="int"
              score={10}
              feature=""
            />
            <Stat label="Power" abbreviation="pow" score={10} feature="" />
            <Stat label="Charisma" abbreviation="cha" score={9} feature="" />
          </div>
          <div className="flex flex-col font-jost">
            <div className="grid grid-cols-7 text-xs uppercase">
              <h3 className="col-span-3 flex items-center px-2 py-1 outline-1 outline-zinc-800 print:outline-slate-950">
                9. Derived Attributes
              </h3>
              <div className="col-span-2 flex items-center justify-center px-2 py-1 align-middle outline-1 outline-zinc-800 print:outline-slate-950">
                Maximum
              </div>
              <div className="col-span-2 flex items-center justify-center px-2 py-1 outline-1 outline-zinc-800 print:outline-slate-950">
                Current
              </div>
            </div>
            <Derived label="Hit Points" abbreviation="hp" max={7} current={3} />
            <Derived
              label="Willpower Points"
              abbreviation="wp"
              max={3}
              current={3}
            />
            <Derived
              label="Sanity Points"
              abbreviation="san"
              max={15}
              current={15}
            />
            <Derived
              label="Breaking Point"
              abbreviation="hp"
              max={40}
              current={12}
            />
          </div>
          <div
            className="flex w-full flex-col gap-1 px-2 py-1 outline-1 outline-zinc-800 print:gap-0 print:outline-slate-950 grow sm:h-auto h-36"
            data-headlessui-state=""
          >
            <div className="flex items-center justify-between">
              <label
                className="w-full text-xs uppercase"
                htmlFor="physical-description"
              >
                <h3>10. Physical description</h3>
              </label>
              <span className="text-xs print:hidden">0/300</span>
            </div>
            <Textarea
              className="min-h-15 h-full w-full justify-self-end rounded-t-md border-b border-zinc-800 bg-zinc-300 bg-opacity-70 px-2 py-0.5 hover:bg-opacity-100 focus-visible:border-b-0 focus-visible:bg-opacity-100 focus-visible:outline-2 focus-visible:outline-slate-600 print:border-0 print:bg-transparent print:p-0 print:text-sm"
              maxLength={300}
              id="physical-description"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
