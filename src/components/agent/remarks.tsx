"use client";

import { Button } from "../ui/button";
import { CirclePlusIcon } from "../ui/icons/lucide-circle-plus";
import { Trash2Icon } from "../ui/icons/lucide-trash-2";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { SideHeader } from "./form/side-header";

export default function Remarks() {
  return (
    <div className="flex flex-col outline-1 outline-zinc-800 sm:flex-row print:outline-slate-950">
      <SideHeader>Remarks</SideHeader>
      <div className="w-full">
        <div className="flex flex-col lg:grid lg:grid-cols-2 print:grid print:grid-cols-2">
          <div
            className="flex h-auto w-full flex-col gap-1 px-2 py-1 font-jost outline-1 outline-zinc-800 print:gap-0 print:outline-slate-950"
            data-headlessui-state=""
          >
            <div className="flex items-center justify-between">
              <label
                className="w-full text-xs uppercase"
                id="headlessui-label-:r1du:"
                htmlFor="headlessui-control-:r1dt:"
                data-headlessui-state=""
              >
                <h3>17. Personal details and notes</h3>
              </label>
              <span className="text-xs print:hidden">0/500</span>
            </div>
            <Textarea
              className="min-h-10 w-full justify-self-end rounded-t-md border-b border-zinc-800 bg-zinc-300 bg-opacity-70 px-2 py-0.5 hover:bg-opacity-100 focus-visible:border-b-0 focus-visible:bg-opacity-100 focus-visible:outline-2 focus-visible:outline-slate-600 sm:min-h-0 sm:px-1 print:border-0 print:bg-transparent print:p-0 print:text-sm grow h-28 lg:h-auto"
              maxLength={500}
              id="headlessui-control-:r1dt:"
            />
          </div>
          <div className="flex flex-col">
            <div
              className="flex h-auto w-full flex-col gap-1 px-2 py-1 font-jost outline-1 outline-zinc-800 print:gap-0 print:outline-slate-950"
              data-headlessui-state=""
            >
              <div className="flex items-center justify-between">
                <label
                  className="w-full text-xs uppercase"
                  id="headlessui-label-:r1e1:"
                  htmlFor="headlessui-control-:r1e0:"
                  data-headlessui-state=""
                >
                  <h3>18. Developments which affect home and family</h3>
                </label>
                <span className="text-xs print:hidden">0/300</span>
              </div>
              <Textarea
                className="min-h-10 w-full justify-self-end rounded-t-md border-b border-zinc-800 bg-zinc-300 bg-opacity-70 px-2 py-0.5 hover:bg-opacity-100 focus-visible:border-b-0 focus-visible:bg-opacity-100 focus-visible:outline-2 focus-visible:outline-slate-600 sm:min-h-0 sm:px-1 print:border-0 print:bg-transparent print:p-0 print:text-sm grow h-28"
                maxLength={300}
                id="headlessui-control-:r1e0:"
              />
            </div>
            <div className="flex flex-col font-jost">
              <div className="flex text-xs uppercase">
                <div className="flex w-1/2 justify-between px-2 py-1 outline-1 outline-zinc-800 print:outline-slate-950">
                  <h3>19. Special Training</h3>
                </div>
                <div className="relative flex h-16 w-1/2 justify-center px-2 py-1 outline-1 outline-zinc-800 sm:h-12 print:outline-slate-950">
                  Skill or stat used
                  <div className="absolute bottom-1 right-1">
                    <Button size="sm" variant="outline">
                      <CirclePlusIcon />
                      Add special training
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex">
                <div className="flex w-1/2 items-center gap-1.5 px-2 py-1 outline-1 outline-zinc-800 print:outline-slate-950">
                  <div className="grow" data-headlessui-state="">
                    <label
                      className="sr-only"
                      id="headlessui-label-:r1e4:"
                      htmlFor="headlessui-control-:r1e3:"
                      data-headlessui-state=""
                    >
                      Special training name
                    </label>
                    <Input
                      className="min-h-10 w-full justify-self-end rounded-t-md border-b border-zinc-800 bg-zinc-300 bg-opacity-70 px-2 py-0.5 hover:bg-opacity-100 focus-visible:border-b-0 focus-visible:bg-opacity-100 focus-visible:outline-2 focus-visible:outline-slate-600 sm:min-h-0 sm:px-1 print:border-0 print:bg-transparent print:p-0 print:text-sm"
                      maxLength={50}
                      placeholder=""
                      id="headlessui-control-:r1e3:"
                      data-headlessui-state=""
                      defaultValue=""
                      aria-labelledby="headlessui-label-:r1e4:"
                    />
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    className="cursor-pointer"
                  >
                    <Trash2Icon />
                  </Button>
                </div>
                <div className="w-1/2 text-center outline-1 outline-zinc-800 print:outline-slate-950">
                  <div
                    className="flex h-full w-full flex-col justify-end gap-1 px-2 py-1 font-jost outline-1 outline-zinc-800 print:gap-0 print:outline-slate-950"
                    data-headlessui-state=""
                  >
                    <label
                      className="w-full text-xs uppercase"
                      id="headlessui-label-:r1e7:"
                      htmlFor="headlessui-control-:r1e6:"
                      data-headlessui-state=""
                    >
                      <h3></h3>
                    </label>
                    <Input
                      className="min-h-10 w-full justify-self-end rounded-t-md border-b border-zinc-800 bg-zinc-300 bg-opacity-70 px-2 py-0.5 hover:bg-opacity-100 focus-visible:border-b-0 focus-visible:bg-opacity-100 focus-visible:outline-2 focus-visible:outline-slate-600 sm:min-h-0 sm:px-1 print:border-0 print:bg-transparent print:p-0 print:text-sm"
                      maxLength={50}
                      placeholder=""
                      id="headlessui-control-:r1ep:"
                      data-headlessui-state=""
                      defaultValue=""
                      aria-labelledby="headlessui-label-:r1eq:"
                    />
                  </div>
                </div>
              </div>
              <div className="flex">
                <div className="flex w-1/2 items-center gap-1.5 px-2 py-1 outline-1 outline-zinc-800 print:outline-slate-950">
                  <div className="grow" data-headlessui-state="">
                    <label
                      className="sr-only"
                      id="headlessui-label-:r1ef:"
                      htmlFor="headlessui-control-:r1ee:"
                      data-headlessui-state=""
                    >
                      Special training name
                    </label>
                    <Input
                      className="min-h-10 w-full justify-self-end rounded-t-md border-b border-zinc-800 bg-zinc-300 bg-opacity-70 px-2 py-0.5 hover:bg-opacity-100 focus-visible:border-b-0 focus-visible:bg-opacity-100 focus-visible:outline-2 focus-visible:outline-slate-600 sm:min-h-0 sm:px-1 print:border-0 print:bg-transparent print:p-0 print:text-sm"
                      maxLength={50}
                      placeholder=""
                      id="headlessui-control-:r1ee:"
                      data-headlessui-state=""
                      defaultValue=""
                      aria-labelledby="headlessui-label-:r1ef:"
                    />
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    className="cursor-pointer"
                  >
                    <Trash2Icon />
                  </Button>
                </div>
                <div className="w-1/2 text-center outline-1 outline-zinc-800 print:outline-slate-950">
                  <div
                    className="flex h-full w-full flex-col justify-end gap-1 px-2 py-1 font-jost outline-1 outline-zinc-800 print:gap-0 print:outline-slate-950"
                    data-headlessui-state=""
                  >
                    <label
                      className="w-full text-xs uppercase"
                      id="headlessui-label-:r1ei:"
                      htmlFor="headlessui-control-:r1eh:"
                      data-headlessui-state=""
                    >
                      <h3></h3>
                    </label>
                    <Input
                      className="min-h-10 w-full justify-self-end rounded-t-md border-b border-zinc-800 bg-zinc-300 bg-opacity-70 px-2 py-0.5 hover:bg-opacity-100 focus-visible:border-b-0 focus-visible:bg-opacity-100 focus-visible:outline-2 focus-visible:outline-slate-600 sm:min-h-0 sm:px-1 print:border-0 print:bg-transparent print:p-0 print:text-sm"
                      maxLength={50}
                      placeholder=""
                      id="headlessui-control-:r1ep:"
                      data-headlessui-state=""
                      defaultValue=""
                      aria-labelledby="headlessui-label-:r1eq:"
                    />
                  </div>
                </div>
              </div>
              <div className="flex">
                <div className="flex w-1/2 items-center gap-1.5 px-2 py-1 outline-1 outline-zinc-800 print:outline-slate-950">
                  <div className="grow" data-headlessui-state="">
                    <label
                      className="sr-only"
                      id="headlessui-label-:r1eq:"
                      htmlFor="headlessui-control-:r1ep:"
                      data-headlessui-state=""
                    >
                      Special training name
                    </label>
                    <Input
                      className="min-h-10 w-full justify-self-end rounded-t-md border-b border-zinc-800 bg-zinc-300 bg-opacity-70 px-2 py-0.5 hover:bg-opacity-100 focus-visible:border-b-0 focus-visible:bg-opacity-100 focus-visible:outline-2 focus-visible:outline-slate-600 sm:min-h-0 sm:px-1 print:border-0 print:bg-transparent print:p-0 print:text-sm"
                      maxLength={50}
                      placeholder=""
                      id="headlessui-control-:r1ep:"
                      data-headlessui-state=""
                      defaultValue=""
                      aria-labelledby="headlessui-label-:r1eq:"
                    />
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    className="cursor-pointer"
                  >
                    <Trash2Icon />
                  </Button>
                </div>
                <div className="w-1/2 text-center outline-1 outline-zinc-800 print:outline-slate-950">
                  <div
                    className="flex h-full w-full flex-col justify-end gap-1 px-2 py-1 font-jost outline-1 outline-zinc-800 print:gap-0 print:outline-slate-950"
                    data-headlessui-state=""
                  >
                    <label
                      className="w-full text-xs uppercase"
                      id="headlessui-label-:r1et:"
                      htmlFor="headlessui-control-:r1es:"
                      data-headlessui-state=""
                    >
                      <h3></h3>
                    </label>
                    <Input
                      className="min-h-10 w-full justify-self-end rounded-t-md border-b border-zinc-800 bg-zinc-300 bg-opacity-70 px-2 py-0.5 hover:bg-opacity-100 focus-visible:border-b-0 focus-visible:bg-opacity-100 focus-visible:outline-2 focus-visible:outline-slate-600 sm:min-h-0 sm:px-1 print:border-0 print:bg-transparent print:p-0 print:text-sm"
                      maxLength={50}
                      placeholder=""
                      id="headlessui-control-:r1ep:"
                      data-headlessui-state=""
                      defaultValue=""
                      aria-labelledby="headlessui-label-:r1eq:"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center px-2 py-1 font-jost text-sm">
          Please indicate why this agent was recruited and why the agent agreed
          to be recruited.
        </div>
      </div>
    </div>
  );
}
