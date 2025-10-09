"use client";

import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { CirclePlusIcon } from "../ui/icons/lucide-circle-plus";
import { SquareArrowDownIcon } from "../ui/icons/lucide-square-arrow-down";
import { SquareArrowUpIcon } from "../ui/icons/lucide-square-arrow-up";
import { Trash2Icon } from "../ui/icons/lucide-trash-2";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { SideHeader } from "./form/side-header";

const Incrementor = ({
  value,
  increment,
}: {
  value?: number;
  increment: -1 | 1;
}) => {
  return (
    <button
      className="cursor-pointer disabled:pointer-default flex h-4.5 w-4.5 items-center justify-center rounded text-zinc-600 hover:border-slate-950 hover:bg-zinc-300 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-slate-600 active:bg-zinc-400"
      type="button"
      data-headlessui-state=""
      disabled={(value ?? 0) + increment < 0}
    >
      {increment === -1 ? <SquareArrowDownIcon /> : <SquareArrowUpIcon />}
    </button>
  );
};

const Bond = () => {
  return (
    <div className="flex">
      <div className="flex grow items-center gap-1.5 px-2 py-1 outline-1 outline-zinc-800 print:outline-slate-950">
        <Checkbox className="cursor-pointer" />
        <div className="grow" data-headlessui-state="">
          <label
            className="sr-only"
            id="headlessui-label-:r2o:"
            htmlFor="headlessui-control-:r2n:"
            data-headlessui-state=""
          >
            Bond name
          </label>
          <Input
            className="min-h-10 w-full justify-self-end rounded-t-md border-b border-zinc-800 bg-zinc-300 bg-opacity-70 px-2 py-0.5 hover:bg-opacity-100 focus-visible:border-b-0 focus-visible:bg-opacity-100 focus-visible:outline-2 focus-visible:outline-slate-600 sm:min-h-0 sm:px-1 print:border-0 print:bg-transparent print:p-0 print:text-sm"
            maxLength={50}
            placeholder=""
            id="headlessui-control-:r2n:"
            data-headlessui-state=""
            defaultValue=""
            aria-labelledby="headlessui-label-:r2o:"
          />
        </div>
        <Button size="sm" variant="outline" className="cursor-pointer">
          <Trash2Icon />
        </Button>
      </div>
      <div className="w-20 text-center outline-1 outline-zinc-800 print:outline-slate-950">
        <div
          className="flex items-center p-1 outline-zinc-800"
          data-headlessui-state=""
        >
          <label
            className="sr-only"
            id="headlessui-label-:r2r:"
            htmlFor="headlessui-control-:r2q:"
            data-headlessui-state=""
          >
            score
          </label>
          <div className="flex gap-0.5">
            <Input
              type="number"
              className="w-full grow rounded-t-md border-b border-zinc-800 bg-zinc-300 bg-opacity-70 px-1 py-0.5 text-center hover:bg-opacity-100 focus-visible:border-b-0 focus-visible:bg-opacity-100 focus-visible:outline-2 focus-visible:outline-slate-600 sm:min-h-0 print:border-0 print:bg-transparent print:text-sm"
              pattern="[0-9]*"
              maxLength={3}
              min={0}
              defaultValue="0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Psychology() {
  return (
    <div className="flex h-full flex-col outline-1 outline-zinc-800 sm:flex-row print:outline-slate-950">
      <SideHeader>Psychological Data</SideHeader>
      <div className="w-full">
        <div className="flex h-full flex-col">
          <div className="flex flex-col font-jost">
            <div className="flex text-xs uppercase">
              <div className="flex grow items-center justify-between px-2 py-1 outline-1 outline-zinc-800 print:outline-slate-950">
                <h3>11. Bonds</h3>
                <Button size="sm" variant="outline" className="cursor-pointer">
                  <CirclePlusIcon />
                  Add bond
                </Button>
              </div>
              <div className="flex w-20 items-center justify-center px-2 py-1 outline-1 outline-zinc-800 print:outline-slate-950">
                Score
              </div>
            </div>
            <Bond />
            <Bond />
            <Bond />
            <div className="flex justify-center px-2 py-1 text-sm">
              Check a Bond's box when projecting sanity damage.
            </div>
          </div>
          <div
            className="flex w-full flex-col gap-1 px-2 py-1 font-jost outline-1 outline-zinc-800 print:gap-0 print:outline-slate-950 grow sm:h-auto h-36"
            data-headlessui-state=""
          >
            <div className="flex items-center justify-between">
              <label
                className="w-full text-xs uppercase"
                id="headlessui-label-:r3c:"
                htmlFor="headlessui-control-:r3b:"
                data-headlessui-state=""
              >
                <h3>12. Motivations and mental disorders</h3>
              </label>
              <span className="text-xs print:hidden">0/300</span>
            </div>
            <Textarea
              className="min-h-10 w-full justify-self-end rounded-t-md border-b border-zinc-800 bg-zinc-300 bg-opacity-70 px-2 py-0.5 hover:bg-opacity-100 focus-visible:border-b-0 focus-visible:bg-opacity-100 focus-visible:outline-2 focus-visible:outline-slate-600 sm:min-h-0 sm:px-1 print:border-0 print:bg-transparent print:p-0 print:text-sm h-full"
              maxLength={300}
              id="headlessui-control-:r3b:"
            />
          </div>
          <div className="flex flex-col px-2 py-1 font-jost text-sm">
            <h3 className="text-xs uppercase">
              13. Incidents of san loss without going insane
            </h3>
            <div className="flex flex-col justify-between sm:flex-row">
              <div className="flex items-center justify-center gap-3 sm:gap-1">
                <span>Violence</span>
                <Checkbox
                  id="headlessui-checkbox-:r3e:"
                  className="cursor-pointer"
                />
                <Checkbox
                  id="headlessui-checkbox-:r3e:"
                  className="cursor-pointer"
                />
                <Checkbox
                  id="headlessui-checkbox-:r3e:"
                  className="cursor-pointer"
                />
                <span className="peer rounded-full border border-transparent pl-0.5 pr-1 italic data-[adapted]:border-slate-950">
                  adapted
                </span>
              </div>
              <div className="flex items-center justify-center gap-3 sm:gap-1">
                <span>Helplessness</span>
                <Checkbox
                  id="headlessui-checkbox-:r3e:"
                  className="cursor-pointer"
                />
                <Checkbox
                  id="headlessui-checkbox-:r3e:"
                  className="cursor-pointer"
                />
                <Checkbox
                  id="headlessui-checkbox-:r3e:"
                  className="cursor-pointer"
                />
                <span className="peer rounded-full border border-transparent pl-0.5 pr-1 italic data-[adapted]:border-slate-950">
                  adapted
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
