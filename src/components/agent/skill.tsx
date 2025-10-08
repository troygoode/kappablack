import { CirclePlusIcon } from "../ui/icons/lucide-circle-plus";
import { InfoIcon } from "../ui/icons/lucide-info";
import { SquareArrowDownIcon } from "../ui/icons/lucide-square-arrow-down";
import { SquareArrowUpIcon } from "../ui/icons/lucide-square-arrow-up";
import { Trash2Icon } from "../ui/icons/lucide-trash-2";
import { Input } from "../ui/input";

export function Skill({ skill, score }: { skill?: string; score?: number }) {
  return (
    <div className="flex grow font-jost">
      <div className="flex w-full items-center gap-1.5 px-2 py-1 outline-1 outline-zinc-800 print:outline-slate-950">
        <span
          aria-label=" test failed this session"
          className="size-4 flex-none cursor-pointer border border-slate-950 focus-visible:outline-slate-600 data-[checked]:bg-slate-950 sm:size-3"
          id="headlessui-checkbox-:r3k:"
          role="checkbox"
          aria-checked="false"
          tabIndex={0}
          data-headlessui-state=""
        ></span>
        <div className="flex grow items-center gap-1.5 text-sm print:text-xs">
          {skill} <span className="hidden print:inline">(10%)</span>
          <div className="relative print:hidden" data-headlessui-state="">
            <button
              className="flex size-10 items-center justify-center rounded-full text-zinc-600 hover:border-slate-950 hover:bg-zinc-300 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-slate-600 active:scale-95 active:bg-zinc-400 sm:size-6"
              type="button"
              aria-expanded="false"
              data-headlessui-state=""
              id="headlessui-popover-button-:r3n:"
            >
              <InfoIcon />
            </button>
          </div>
        </div>
      </div>
      <div className="w-20 p-1 outline-1 outline-zinc-800 print:outline-slate-950">
        <div
          className="flex h-full items-center justify-center"
          data-headlessui-state=""
        >
          <label
            className="sr-only"
            id="headlessui-label-:r3s:"
            htmlFor="headlessui-control-:r3r:"
            data-headlessui-state=""
          >
            Skill Accounting value
          </label>
          <div className="flex gap-0.5">
            <Input
              className="span min-h-10 w-full grow rounded-t-md border-b border-zinc-800 bg-zinc-300 bg-opacity-70 px-1 py-0.5 text-center hover:bg-opacity-100 focus-visible:border-b-0 focus-visible:bg-opacity-100 focus-visible:outline-2 focus-visible:outline-slate-600 sm:min-h-0 print:border-0 print:bg-transparent print:text-sm"
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={3}
              id="headlessui-control-:r3r:"
              data-headlessui-state=""
              type="text"
              defaultValue={score ?? "0"}
              aria-labelledby="headlessui-label-:r3s:"
            />
            <div className="hidden flex-col justify-between gap-0 sm:flex print:hidden">
              <button
                className="flex h-3.5 w-4 items-center justify-center rounded-sm border border-slate-600 text-zinc-600 hover:border-slate-950 hover:bg-zinc-300 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-slate-600 active:scale-95 active:bg-zinc-400"
                type="button"
                data-headlessui-state=""
              >
                <SquareArrowUpIcon />
              </button>
              <button
                className="flex h-3.5 w-4 items-center justify-center rounded-sm border border-slate-600 text-zinc-600 hover:border-slate-950 hover:bg-zinc-300 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-slate-600 active:scale-95 active:bg-zinc-400"
                type="button"
                data-headlessui-state=""
              >
                <SquareArrowDownIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Art() {
  return (
    <div className="flex grow font-jost">
      <div className="flex w-full flex-col gap-1.5 px-2 py-1 outline-1 outline-zinc-800 print:gap-0 print:outline-slate-950">
        <div className="ml-[1.375rem] flex items-center sm:ml-[1.125rem]">
          <div className="flex grow items-center gap-1.5 text-sm print:text-xs">
            Art <span className="hidden print:inline">(0%)</span>
            <div className="relative print:hidden" data-headlessui-state="">
              <button
                className="flex size-10 items-center justify-center rounded-full text-zinc-600 hover:border-slate-950 hover:bg-zinc-300 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-slate-600 active:scale-95 active:bg-zinc-400 sm:size-6"
                type="button"
                aria-expanded="false"
                data-headlessui-state=""
                id="headlessui-popover-button-:r4u:"
              >
                <InfoIcon />
              </button>
            </div>
          </div>
          <button
            className="disabled:hover flex min-h-10 sm:min-h-0 h-fit px-3 sm:px-0 items-center gap-1 text-nowrap rounded-full border border-slate-600 sm:pl-1.5 text-sm text-zinc-600 hover:border-slate-950 hover:bg-zinc-300 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-slate-600 active:scale-95 active:bg-zinc-400 disabled:scale-100 disabled:border-slate-600 disabled:bg-inherit disabled:text-inherit disabled:opacity-30 print:hidden"
            type="button"
            data-headlessui-state=""
          >
            Add type
            <CirclePlusIcon />
          </button>
        </div>
        <div className="flex items-center gap-1.5">
          <span
            aria-label=" test failed this session"
            className="size-4 flex-none cursor-pointer border border-slate-950 focus-visible:outline-slate-600 data-[checked]:bg-slate-950 sm:size-3"
            id="headlessui-checkbox-:r52:"
            role="checkbox"
            aria-checked="false"
            tabIndex={0}
            data-headlessui-state=""
          ></span>
          <div className="grow" data-headlessui-state="">
            <label
              className="sr-only"
              id="headlessui-label-:r54:"
              htmlFor="headlessui-control-:r53:"
              data-headlessui-state=""
            >
              Skill type name
            </label>
            <Input
              className="min-h-10 w-full justify-self-end rounded-t-md border-b border-zinc-800 bg-zinc-300 bg-opacity-70 px-2 py-0.5 hover:bg-opacity-100 focus-visible:border-b-0 focus-visible:bg-opacity-100 focus-visible:outline-2 focus-visible:outline-slate-600 sm:min-h-0 sm:px-1 print:border-0 print:bg-transparent print:p-0 print:text-xs"
              maxLength={50}
              placeholder=""
              id="headlessui-control-:r53:"
              data-headlessui-state=""
              defaultValue=""
              aria-labelledby="headlessui-label-:r54:"
            />
          </div>
          <button
            className="flex size-10 items-center justify-center rounded-full text-zinc-600 hover:border-slate-950 hover:bg-zinc-300 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-slate-600 active:scale-95 active:bg-zinc-400 sm:size-6 print:hidden"
            type="button"
            data-headlessui-state=""
          >
            <Trash2Icon />
          </button>
        </div>
      </div>
      <div className="flex w-20 flex-col gap-1.5 p-1 pt-[3.125rem] outline-1 outline-zinc-800 sm:pt-8 print:gap-0 print:pt-6 print:outline-slate-950">
        <div className="flex h-full items-center" data-headlessui-state="">
          <label
            className="sr-only"
            id="headlessui-label-:r57:"
            htmlFor="headlessui-control-:r56:"
            data-headlessui-state=""
          >
            Skill type value
          </label>
          <div className="flex gap-0.5">
            <Input
              className="span min-h-10 w-full grow rounded-t-md border-b border-zinc-800 bg-zinc-300 bg-opacity-70 px-1 py-0.5 text-center hover:bg-opacity-100 focus-visible:border-b-0 focus-visible:bg-opacity-100 focus-visible:outline-2 focus-visible:outline-slate-600 sm:min-h-0 print:border-0 print:bg-transparent print:text-sm"
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={3}
              id="headlessui-control-:r56:"
              data-headlessui-state=""
              type="text"
              defaultValue="0"
              aria-labelledby="headlessui-label-:r57:"
            />
            <div className="hidden flex-col justify-between gap-0 sm:flex print:hidden">
              <button
                className="flex h-3.5 w-4 items-center justify-center rounded-sm border border-slate-600 text-zinc-600 hover:border-slate-950 hover:bg-zinc-300 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-slate-600 active:scale-95 active:bg-zinc-400"
                type="button"
                data-headlessui-state=""
              >
                <SquareArrowUpIcon />
              </button>
              <button
                className="flex h-3.5 w-4 items-center justify-center rounded-sm border border-slate-600 text-zinc-600 hover:border-slate-950 hover:bg-zinc-300 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-slate-600 active:scale-95 active:bg-zinc-400"
                type="button"
                data-headlessui-state=""
              >
                <SquareArrowDownIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
