import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { CirclePlusIcon } from "../ui/icons/lucide-circle-plus";
import { InfoIcon } from "../ui/icons/lucide-info";
import { Trash2Icon } from "../ui/icons/lucide-trash-2";
import { Input } from "../ui/input";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

export function Skill({
  skill,
  score,
  tooltip,
  base,
}: {
  skill?: string;
  score?: number;
  tooltip?: string;
  base?: number;
}) {
  return (
    <div className="flex grow font-jost">
      <div className="flex w-full items-center gap-1.5 px-2 py-1 outline-1 outline-zinc-800 print:outline-slate-950">
        <Checkbox className="cursor-pointer" />
        <div className="flex grow items-center gap-1.5 text-sm print:text-xs">
          {skill} <span className="hidden print:inline">(10%)</span>
          {tooltip && (
            <div className="relative print:hidden">
              <Tooltip>
                <TooltipTrigger>
                  <InfoIcon size={16} />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="max-w-60 mb-2">{tooltip}</p>
                  {base != undefined && (
                    <p>
                      <strong>Base value:</strong> {base}%
                    </p>
                  )}
                </TooltipContent>
              </Tooltip>
            </div>
          )}
        </div>
      </div>
      <div className="w-20 p-1 outline-1 outline-zinc-800 print:outline-slate-950">
        <div className="flex h-full items-center justify-center">
          <div className="flex gap-0.5">
            <Input
              className="span min-h-10 w-full grow rounded-t-md border-b border-zinc-800 bg-zinc-300 bg-opacity-70 px-1 py-0.5 text-center hover:bg-opacity-100 focus-visible:border-b-0 focus-visible:bg-opacity-100 focus-visible:outline-2 focus-visible:outline-slate-600 sm:min-h-0 print:border-0 print:bg-transparent print:text-sm"
              maxLength={3}
              min={0}
              type="number"
              defaultValue={score ?? "0"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export function Art({ skill, tooltip }: { skill?: string; tooltip?: string }) {
  return (
    <div className="flex grow font-jost">
      <div className="flex w-full flex-col gap-1.5 px-2 py-1 outline-1 outline-zinc-800 print:gap-0 print:outline-slate-950">
        <div className="ml-[1.375rem] flex items-center sm:ml-[1.125rem]">
          <div className="flex grow items-center gap-1.5 text-sm print:text-xs">
            {skill} <span className="hidden print:inline">(0%)</span>
            {tooltip && (
              <div className="relative print:hidden">
                <Tooltip>
                  <TooltipTrigger>
                    <InfoIcon size={16} />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="max-w-60 mb-2">{tooltip}</p>
                    <p>
                      <strong>Base value:</strong> 0%
                    </p>
                  </TooltipContent>
                </Tooltip>
              </div>
            )}
          </div>
          <Button size="sm" variant="outline">
            <CirclePlusIcon />
          </Button>
        </div>
        <div className="flex items-center gap-1.5">
          <Checkbox className="cursor-pointer" />
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
          <Button size="sm" variant="outline" className="cursor-pointer">
            <Trash2Icon />
          </Button>
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
              maxLength={3}
              min={0}
              type="number"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export function Other() {
  return (
    <>
      <div className="flex grow items-center justify-between px-2 py-1 font-jost text-sm outline-1 outline-zinc-800 print:outline-slate-950">
        <span className="font-bold">Other skills:</span>
        <Button size="sm" variant="outline">
          <CirclePlusIcon />
          Add skill
        </Button>
      </div>
      <div className="flex grow font-jost">
        <div className="flex w-full items-center gap-1.5 px-2 py-1 outline-1 outline-zinc-800 print:outline-slate-950">
          <Checkbox className="cursor-pointer" />
          <div className="grow" data-headlessui-state="">
            <Input
              className="min-h-10 w-full justify-self-end rounded-t-md border-b border-zinc-800 bg-zinc-300 bg-opacity-70 px-2 py-0.5 hover:bg-opacity-100 focus-visible:border-b-0 focus-visible:bg-opacity-100 focus-visible:outline-2 focus-visible:outline-slate-600 sm:min-h-0 sm:px-1 print:border-0 print:bg-transparent print:p-0 print:text-sm "
              maxLength={50}
              placeholder=""
              id="headlessui-control-:r1t5:"
              data-headlessui-state=""
              defaultValue="test"
              aria-labelledby="headlessui-label-:r1t6:"
            />
          </div>
          <Button size="sm" variant="outline" className="cursor-pointer">
            <Trash2Icon />
          </Button>
        </div>
        <div className="w-20 p-1 outline-1 outline-zinc-800 print:outline-slate-950">
          <div data-headlessui-state="">
            <div className="flex gap-0.5">
              <Input
                className="span min-h-10 w-full grow rounded-t-md border-b border-zinc-800 bg-zinc-300 bg-opacity-70 px-1 py-0.5 text-center hover:bg-opacity-100 focus-visible:border-b-0 focus-visible:bg-opacity-100 focus-visible:outline-2 focus-visible:outline-slate-600 sm:min-h-0 print:border-0 print:bg-transparent print:text-sm"
                maxLength={3}
                type="number"
                min={0}
                defaultValue={0}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
