"use client";

import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { SideHeader } from "./form/side-header";

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
                ×5
              </div>
              <div className="col-span-3 px-2 py-1 text-center outline-1 outline-zinc-800 print:outline-slate-950">
                Distinguishing features
              </div>
            </div>
            <div className="grid grid-cols-7">
              <div className="col-span-2 flex flex-wrap items-center gap-1 px-2 py-1 text-sm outline-1 outline-zinc-800 print:outline-slate-950">
                Strength <span className="text-xs uppercase">(str)</span>
              </div>
              <div
                className="flex items-center p-1 outline-1 outline-zinc-800 print:outline-slate-950"
                data-headlessui-state=""
              >
                <label
                  className="sr-only"
                  id="headlessui-label-:r1c:"
                  htmlFor="headlessui-control-:r1b:"
                  data-headlessui-state=""
                >
                  Strength score
                </label>
                <div className="flex gap-0.5">
                  <Input
                    className="span min-h-10 w-full grow rounded-t-md border-b border-zinc-800 bg-zinc-300 bg-opacity-70 px-1 py-0.5 text-center hover:bg-opacity-100 focus-visible:border-b-0 focus-visible:bg-opacity-100 focus-visible:outline-2 focus-visible:outline-slate-600 sm:min-h-0 print:border-0 print:bg-transparent print:text-sm"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    maxLength={3}
                    id="headlessui-control-:r1b:"
                    data-headlessui-state=""
                    type="text"
                    defaultValue="11"
                    aria-labelledby="headlessui-label-:r1c:"
                  />
                  <div className="hidden flex-col justify-between gap-0 sm:flex print:hidden">
                    <button
                      className="flex h-3.5 w-4 items-center justify-center rounded-sm border border-zinc-800 text-zinc-600 hover:border-slate-950 hover:bg-zinc-300 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-slate-600 active:scale-95 active:bg-zinc-400"
                      type="button"
                      data-headlessui-state=""
                    >
                      <svg
                        role="img"
                        className="h-3.5"
                        aria-label="Increase score"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                      >
                        <use href="/icons/caret-up.svg#caret-up"></use>
                      </svg>
                    </button>
                    <button
                      className="flex h-3.5 w-4 rotate-180 items-center justify-center rounded-sm border border-zinc-800 text-zinc-600 hover:border-slate-950 hover:bg-zinc-300 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-slate-600 active:scale-95 active:bg-zinc-400"
                      type="button"
                      data-headlessui-state=""
                    >
                      <svg
                        role="img"
                        className="h-3.5"
                        aria-label="Increase score"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                      >
                        <use href="/icons/caret-up.svg#caret-up"></use>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center px-2 py-1 outline-1 outline-zinc-800 print:text-sm print:outline-slate-950">
                55
              </div>
              <div
                className="col-span-3 flex items-center p-1 outline-1 outline-zinc-800 print:px-2 print:outline-slate-950"
                data-headlessui-state=""
              >
                <label
                  className="sr-only"
                  id="headlessui-label-:r1f:"
                  htmlFor="headlessui-control-:r1e:"
                  data-headlessui-state=""
                >
                  Strength distinguishing feature
                </label>
                <Input
                  className="min-h-10 w-full justify-self-end rounded-t-md border-b border-zinc-800 bg-zinc-300 bg-opacity-70 px-2 py-0.5 hover:bg-opacity-100 focus-visible:border-b-0 focus-visible:bg-opacity-100 focus-visible:outline-2 focus-visible:outline-slate-600 sm:min-h-0 sm:px-1 print:border-0 print:bg-transparent print:p-0 print:text-sm disabled:opacity-0 transition-opacity duration-200"
                  maxLength={50}
                  placeholder=""
                  id="headlessui-control-:r1e:"
                  data-headlessui-state="disabled"
                  defaultValue="foo"
                  aria-labelledby="headlessui-label-:r1f:"
                  disabled
                  data-disabled=""
                />
              </div>
            </div>
            <div className="grid grid-cols-7">
              <div className="col-span-2 flex flex-wrap items-center gap-1 px-2 py-1 text-sm outline-1 outline-zinc-800 print:outline-slate-950">
                Dexterity <span className="text-xs uppercase">(dex)</span>
              </div>
              <div
                className="flex items-center p-1 outline-1 outline-zinc-800 print:outline-slate-950"
                data-headlessui-state=""
              >
                <label
                  className="sr-only"
                  id="headlessui-label-:r1i:"
                  htmlFor="headlessui-control-:r1h:"
                  data-headlessui-state=""
                >
                  Dexterity score
                </label>
                <div className="flex gap-0.5">
                  <Input
                    className="span min-h-10 w-full grow rounded-t-md border-b border-zinc-800 bg-zinc-300 bg-opacity-70 px-1 py-0.5 text-center hover:bg-opacity-100 focus-visible:border-b-0 focus-visible:bg-opacity-100 focus-visible:outline-2 focus-visible:outline-slate-600 sm:min-h-0 print:border-0 print:bg-transparent print:text-sm"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    maxLength={3}
                    id="headlessui-control-:r1h:"
                    data-headlessui-state=""
                    type="text"
                    defaultValue="3"
                    aria-labelledby="headlessui-label-:r1i:"
                  />
                  <div className="hidden flex-col justify-between gap-0 sm:flex print:hidden">
                    <button
                      className="flex h-3.5 w-4 items-center justify-center rounded-sm border border-zinc-800 text-zinc-600 hover:border-slate-950 hover:bg-zinc-300 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-slate-600 active:scale-95 active:bg-zinc-400"
                      type="button"
                      data-headlessui-state=""
                    >
                      <svg
                        role="img"
                        className="h-3.5"
                        aria-label="Increase score"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                      >
                        <use href="/icons/caret-up.svg#caret-up"></use>
                      </svg>
                    </button>
                    <button
                      className="flex h-3.5 w-4 rotate-180 items-center justify-center rounded-sm border border-zinc-800 text-zinc-600 hover:border-slate-950 hover:bg-zinc-300 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-slate-600 active:scale-95 active:bg-zinc-400"
                      type="button"
                      data-headlessui-state=""
                    >
                      <svg
                        role="img"
                        className="h-3.5"
                        aria-label="Increase score"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                      >
                        <use href="/icons/caret-up.svg#caret-up"></use>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center px-2 py-1 outline-1 outline-zinc-800 print:text-sm print:outline-slate-950">
                15
              </div>
              <div
                className="col-span-3 flex items-center p-1 outline-1 outline-zinc-800 print:px-2 print:outline-slate-950"
                data-headlessui-state=""
              >
                <label
                  className="sr-only"
                  id="headlessui-label-:r1l:"
                  htmlFor="headlessui-control-:r1k:"
                  data-headlessui-state=""
                >
                  Dexterity distinguishing feature
                </label>
                <Input
                  className="min-h-10 w-full justify-self-end rounded-t-md border-b border-zinc-800 bg-zinc-300 bg-opacity-70 px-2 py-0.5 hover:bg-opacity-100 focus-visible:border-b-0 focus-visible:bg-opacity-100 focus-visible:outline-2 focus-visible:outline-slate-600 sm:min-h-0 sm:px-1 print:border-0 print:bg-transparent print:p-0 print:text-sm disabled:opacity-0 transition-opacity duration-200"
                  maxLength={50}
                  placeholder=""
                  id="headlessui-control-:r1k:"
                  data-headlessui-state=""
                  defaultValue=""
                  aria-labelledby="headlessui-label-:r1l:"
                />
              </div>
            </div>
            <div className="grid grid-cols-7">
              <div className="col-span-2 flex flex-wrap items-center gap-1 px-2 py-1 text-sm outline-1 outline-zinc-800 print:outline-slate-950">
                Constitution <span className="text-xs uppercase">(con)</span>
              </div>
              <div
                className="flex items-center p-1 outline-1 outline-zinc-800 print:outline-slate-950"
                data-headlessui-state=""
              >
                <label
                  className="sr-only"
                  id="headlessui-label-:r1o:"
                  htmlFor="headlessui-control-:r1n:"
                  data-headlessui-state=""
                >
                  Constitution score
                </label>
                <div className="flex gap-0.5">
                  <Input
                    className="span min-h-10 w-full grow rounded-t-md border-b border-zinc-800 bg-zinc-300 bg-opacity-70 px-1 py-0.5 text-center hover:bg-opacity-100 focus-visible:border-b-0 focus-visible:bg-opacity-100 focus-visible:outline-2 focus-visible:outline-slate-600 sm:min-h-0 print:border-0 print:bg-transparent print:text-sm"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    maxLength={3}
                    id="headlessui-control-:r1n:"
                    data-headlessui-state=""
                    type="text"
                    defaultValue="3"
                    aria-labelledby="headlessui-label-:r1o:"
                  />
                  <div className="hidden flex-col justify-between gap-0 sm:flex print:hidden">
                    <button
                      className="flex h-3.5 w-4 items-center justify-center rounded-sm border border-zinc-800 text-zinc-600 hover:border-slate-950 hover:bg-zinc-300 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-slate-600 active:scale-95 active:bg-zinc-400"
                      type="button"
                      data-headlessui-state=""
                    >
                      <svg
                        role="img"
                        className="h-3.5"
                        aria-label="Increase score"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                      >
                        <use href="/icons/caret-up.svg#caret-up"></use>
                      </svg>
                    </button>
                    <button
                      className="flex h-3.5 w-4 rotate-180 items-center justify-center rounded-sm border border-zinc-800 text-zinc-600 hover:border-slate-950 hover:bg-zinc-300 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-slate-600 active:scale-95 active:bg-zinc-400"
                      type="button"
                      data-headlessui-state=""
                    >
                      <svg
                        role="img"
                        className="h-3.5"
                        aria-label="Increase score"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                      >
                        <use href="/icons/caret-up.svg#caret-up"></use>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center px-2 py-1 outline-1 outline-zinc-800 print:text-sm print:outline-slate-950">
                15
              </div>
              <div
                className="col-span-3 flex items-center p-1 outline-1 outline-zinc-800 print:px-2 print:outline-slate-950"
                data-headlessui-state=""
              >
                <label
                  className="sr-only"
                  id="headlessui-label-:r1r:"
                  htmlFor="headlessui-control-:r1q:"
                  data-headlessui-state=""
                >
                  Constitution distinguishing feature
                </label>
                <Input
                  className="min-h-10 w-full justify-self-end rounded-t-md border-b border-zinc-800 bg-zinc-300 bg-opacity-70 px-2 py-0.5 hover:bg-opacity-100 focus-visible:border-b-0 focus-visible:bg-opacity-100 focus-visible:outline-2 focus-visible:outline-slate-600 sm:min-h-0 sm:px-1 print:border-0 print:bg-transparent print:p-0 print:text-sm disabled:opacity-0 transition-opacity duration-200"
                  maxLength={50}
                  placeholder=""
                  id="headlessui-control-:r1q:"
                  data-headlessui-state=""
                  defaultValue=""
                  aria-labelledby="headlessui-label-:r1r:"
                />
              </div>
            </div>
            <div className="grid grid-cols-7">
              <div className="col-span-2 flex flex-wrap items-center gap-1 px-2 py-1 text-sm outline-1 outline-zinc-800 print:outline-slate-950">
                Intelligence <span className="text-xs uppercase">(int)</span>
              </div>
              <div
                className="flex items-center p-1 outline-1 outline-zinc-800 print:outline-slate-950"
                data-headlessui-state=""
              >
                <label
                  className="sr-only"
                  id="headlessui-label-:r1u:"
                  htmlFor="headlessui-control-:r1t:"
                  data-headlessui-state=""
                >
                  Intelligence score
                </label>
                <div className="flex gap-0.5">
                  <Input
                    className="span min-h-10 w-full grow rounded-t-md border-b border-zinc-800 bg-zinc-300 bg-opacity-70 px-1 py-0.5 text-center hover:bg-opacity-100 focus-visible:border-b-0 focus-visible:bg-opacity-100 focus-visible:outline-2 focus-visible:outline-slate-600 sm:min-h-0 print:border-0 print:bg-transparent print:text-sm"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    maxLength={3}
                    id="headlessui-control-:r1t:"
                    data-headlessui-state=""
                    type="text"
                    defaultValue="3"
                    aria-labelledby="headlessui-label-:r1u:"
                  />
                  <div className="hidden flex-col justify-between gap-0 sm:flex print:hidden">
                    <button
                      className="flex h-3.5 w-4 items-center justify-center rounded-sm border border-zinc-800 text-zinc-600 hover:border-slate-950 hover:bg-zinc-300 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-slate-600 active:scale-95 active:bg-zinc-400"
                      type="button"
                      data-headlessui-state=""
                    >
                      <svg
                        role="img"
                        className="h-3.5"
                        aria-label="Increase score"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                      >
                        <use href="/icons/caret-up.svg#caret-up"></use>
                      </svg>
                    </button>
                    <button
                      className="flex h-3.5 w-4 rotate-180 items-center justify-center rounded-sm border border-zinc-800 text-zinc-600 hover:border-slate-950 hover:bg-zinc-300 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-slate-600 active:scale-95 active:bg-zinc-400"
                      type="button"
                      data-headlessui-state=""
                    >
                      <svg
                        role="img"
                        className="h-3.5"
                        aria-label="Increase score"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                      >
                        <use href="/icons/caret-up.svg#caret-up"></use>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center px-2 py-1 outline-1 outline-zinc-800 print:text-sm print:outline-slate-950">
                15
              </div>
              <div
                className="col-span-3 flex items-center p-1 outline-1 outline-zinc-800 print:px-2 print:outline-slate-950"
                data-headlessui-state=""
              >
                <label
                  className="sr-only"
                  id="headlessui-label-:r21:"
                  htmlFor="headlessui-control-:r20:"
                  data-headlessui-state=""
                >
                  Intelligence distinguishing feature
                </label>
                <Input
                  className="min-h-10 w-full justify-self-end rounded-t-md border-b border-zinc-800 bg-zinc-300 bg-opacity-70 px-2 py-0.5 hover:bg-opacity-100 focus-visible:border-b-0 focus-visible:bg-opacity-100 focus-visible:outline-2 focus-visible:outline-slate-600 sm:min-h-0 sm:px-1 print:border-0 print:bg-transparent print:p-0 print:text-sm disabled:opacity-0 transition-opacity duration-200"
                  maxLength={50}
                  placeholder=""
                  id="headlessui-control-:r20:"
                  data-headlessui-state=""
                  defaultValue=""
                  aria-labelledby="headlessui-label-:r21:"
                />
              </div>
            </div>
            <div className="grid grid-cols-7">
              <div className="col-span-2 flex flex-wrap items-center gap-1 px-2 py-1 text-sm outline-1 outline-zinc-800 print:outline-slate-950">
                Power <span className="text-xs uppercase">(pow)</span>
              </div>
              <div
                className="flex items-center p-1 outline-1 outline-zinc-800 print:outline-slate-950"
                data-headlessui-state=""
              >
                <label
                  className="sr-only"
                  id="headlessui-label-:r24:"
                  htmlFor="headlessui-control-:r23:"
                  data-headlessui-state=""
                >
                  Power score
                </label>
                <div className="flex gap-0.5">
                  <Input
                    className="span min-h-10 w-full grow rounded-t-md border-b border-zinc-800 bg-zinc-300 bg-opacity-70 px-1 py-0.5 text-center hover:bg-opacity-100 focus-visible:border-b-0 focus-visible:bg-opacity-100 focus-visible:outline-2 focus-visible:outline-slate-600 sm:min-h-0 print:border-0 print:bg-transparent print:text-sm"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    maxLength={3}
                    id="headlessui-control-:r23:"
                    data-headlessui-state=""
                    type="text"
                    defaultValue="3"
                    aria-labelledby="headlessui-label-:r24:"
                  />
                  <div className="hidden flex-col justify-between gap-0 sm:flex print:hidden">
                    <button
                      className="flex h-3.5 w-4 items-center justify-center rounded-sm border border-slate-600 text-zinc-600 hover:border-slate-950 hover:bg-zinc-300 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-slate-600 active:scale-95 active:bg-zinc-400"
                      type="button"
                      data-headlessui-state=""
                    >
                      <svg
                        role="img"
                        className="h-3.5"
                        aria-label="Increase score"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                      >
                        <use href="/icons/caret-up.svg#caret-up"></use>
                      </svg>
                    </button>
                    <button
                      className="flex h-3.5 w-4 rotate-180 items-center justify-center rounded-sm border border-slate-600 text-zinc-600 hover:border-slate-950 hover:bg-zinc-300 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-slate-600 active:scale-95 active:bg-zinc-400"
                      type="button"
                      data-headlessui-state=""
                    >
                      <svg
                        role="img"
                        className="h-3.5"
                        aria-label="Increase score"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                      >
                        <use href="/icons/caret-up.svg#caret-up"></use>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center px-2 py-1 outline-1 outline-zinc-800 print:text-sm print:outline-slate-950">
                15
              </div>
              <div
                className="col-span-3 flex items-center p-1 outline-1 outline-zinc-800 print:px-2 print:outline-slate-950"
                data-headlessui-state=""
              >
                <label
                  className="sr-only"
                  id="headlessui-label-:r27:"
                  htmlFor="headlessui-control-:r26:"
                  data-headlessui-state=""
                >
                  Power distinguishing feature
                </label>
                <Input
                  className="min-h-10 w-full justify-self-end rounded-t-md border-b border-zinc-800 bg-zinc-300 bg-opacity-70 px-2 py-0.5 hover:bg-opacity-100 focus-visible:border-b-0 focus-visible:bg-opacity-100 focus-visible:outline-2 focus-visible:outline-slate-600 sm:min-h-0 sm:px-1 print:border-0 print:bg-transparent print:p-0 print:text-sm disabled:opacity-0 transition-opacity duration-200"
                  maxLength={50}
                  placeholder=""
                  id="headlessui-control-:r26:"
                  data-headlessui-state=""
                  defaultValue=""
                  aria-labelledby="headlessui-label-:r27:"
                />
              </div>
            </div>
            <div className="grid grid-cols-7">
              <div className="col-span-2 flex flex-wrap items-center gap-1 px-2 py-1 text-sm outline-1 outline-zinc-800 print:outline-slate-950">
                Charisma <span className="text-xs uppercase">(cha)</span>
              </div>
              <div
                className="flex items-center p-1 outline-1 outline-zinc-800 print:outline-slate-950"
                data-headlessui-state=""
              >
                <label
                  className="sr-only"
                  id="headlessui-label-:r2a:"
                  htmlFor="headlessui-control-:r29:"
                  data-headlessui-state=""
                >
                  Charisma score
                </label>
                <div className="flex gap-0.5">
                  <Input
                    className="span min-h-10 w-full grow rounded-t-md border-b border-zinc-800 bg-zinc-300 bg-opacity-70 px-1 py-0.5 text-center hover:bg-opacity-100 focus-visible:border-b-0 focus-visible:bg-opacity-100 focus-visible:outline-2 focus-visible:outline-slate-600 sm:min-h-0 print:border-0 print:bg-transparent print:text-sm"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    maxLength={3}
                    id="headlessui-control-:r29:"
                    data-headlessui-state=""
                    type="text"
                    defaultValue="3"
                    aria-labelledby="headlessui-label-:r2a:"
                  />
                  <div className="hidden flex-col justify-between gap-0 sm:flex print:hidden">
                    <button
                      className="flex h-3.5 w-4 items-center justify-center rounded-sm border border-slate-600 text-zinc-600 hover:border-slate-950 hover:bg-zinc-300 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-slate-600 active:scale-95 active:bg-zinc-400"
                      type="button"
                      data-headlessui-state=""
                    >
                      <svg
                        role="img"
                        className="h-3.5"
                        aria-label="Increase score"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                      >
                        <use href="/icons/caret-up.svg#caret-up"></use>
                      </svg>
                    </button>
                    <button
                      className="flex h-3.5 w-4 rotate-180 items-center justify-center rounded-sm border border-slate-600 text-zinc-600 hover:border-slate-950 hover:bg-zinc-300 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-slate-600 active:scale-95 active:bg-zinc-400"
                      type="button"
                      data-headlessui-state=""
                    >
                      <svg
                        role="img"
                        className="h-3.5"
                        aria-label="Increase score"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                      >
                        <use href="/icons/caret-up.svg#caret-up"></use>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center px-2 py-1 outline-1 outline-zinc-800 print:text-sm print:outline-slate-950">
                15
              </div>
              <div
                className="col-span-3 flex items-center p-1 outline-1 outline-zinc-800 print:px-2 print:outline-slate-950"
                data-headlessui-state=""
              >
                <label
                  className="sr-only"
                  id="headlessui-label-:r2d:"
                  htmlFor="headlessui-control-:r2c:"
                  data-headlessui-state=""
                >
                  Charisma distinguishing feature
                </label>
                <Input
                  className="min-h-10 w-full justify-self-end rounded-t-md border-b border-zinc-800 bg-zinc-300 bg-opacity-70 px-2 py-0.5 hover:bg-opacity-100 focus-visible:border-b-0 focus-visible:bg-opacity-100 focus-visible:outline-2 focus-visible:outline-slate-600 sm:min-h-0 sm:px-1 print:border-0 print:bg-transparent print:p-0 print:text-sm disabled:opacity-0 transition-opacity duration-200"
                  maxLength={50}
                  placeholder=""
                  id="headlessui-control-:r2c:"
                  data-headlessui-state=""
                  defaultValue=""
                  aria-labelledby="headlessui-label-:r2d:"
                />
              </div>
            </div>
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
            <div className="grid grid-cols-7 print:text-sm">
              <div className="col-span-3 flex items-center gap-1 px-2 py-1 text-sm outline-1 outline-zinc-800 print:outline-slate-950">
                Hit Points <span className="uppercase">(hp)</span>
              </div>
              <div className="col-span-2 flex items-center justify-center px-2 py-1 outline-1 outline-zinc-800 print:outline-slate-950">
                <span>7</span>
              </div>
              <div className="col-span-2 flex items-center justify-center px-2 py-1 outline-1 outline-zinc-800 print:outline-slate-950">
                <div className="flex gap-0.5">
                  <Input
                    className="span min-h-10 w-full grow rounded-t-md border-b border-zinc-800 bg-zinc-300 bg-opacity-70 px-1 py-0.5 text-center hover:bg-opacity-100 focus-visible:border-b-0 focus-visible:bg-opacity-100 focus-visible:outline-2 focus-visible:outline-slate-600 sm:min-h-0 print:border-0 print:bg-transparent print:text-sm"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    maxLength={3}
                    id="headlessui-input-:r2f:"
                    data-headlessui-state=""
                    type="text"
                    defaultValue="3"
                  />
                  <div className="hidden flex-col justify-between gap-0 sm:flex print:hidden">
                    <button
                      className="flex h-3.5 w-4 items-center justify-center rounded-sm border border-slate-600 text-zinc-600 hover:border-slate-950 hover:bg-zinc-300 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-slate-600 active:scale-95 active:bg-zinc-400"
                      type="button"
                      data-headlessui-state=""
                    >
                      <svg
                        role="img"
                        className="h-3.5"
                        aria-label="Increase score"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                      >
                        <use href="/icons/caret-up.svg#caret-up"></use>
                      </svg>
                    </button>
                    <button
                      className="flex h-3.5 w-4 rotate-180 items-center justify-center rounded-sm border border-slate-600 text-zinc-600 hover:border-slate-950 hover:bg-zinc-300 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-slate-600 active:scale-95 active:bg-zinc-400"
                      type="button"
                      data-headlessui-state=""
                    >
                      <svg
                        role="img"
                        className="h-3.5"
                        aria-label="Increase score"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                      >
                        <use href="/icons/caret-up.svg#caret-up"></use>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-7 print:text-sm">
              <div className="col-span-3 flex items-center gap-1 px-2 py-1 text-sm outline-1 outline-zinc-800 print:outline-slate-950">
                Willpower Points <span className="uppercase">(wp)</span>
              </div>
              <div className="col-span-2 flex items-center justify-center px-2 py-1 outline-1 outline-zinc-800 print:outline-slate-950">
                <span>3</span>
              </div>
              <div className="col-span-2 flex items-center justify-center px-2 py-1 outline-1 outline-zinc-800 print:outline-slate-950">
                <div className="flex gap-0.5">
                  <Input
                    className="span min-h-10 w-full grow rounded-t-md border-b border-zinc-800 bg-zinc-300 bg-opacity-70 px-1 py-0.5 text-center hover:bg-opacity-100 focus-visible:border-b-0 focus-visible:bg-opacity-100 focus-visible:outline-2 focus-visible:outline-slate-600 sm:min-h-0 print:border-0 print:bg-transparent print:text-sm"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    maxLength={3}
                    id="headlessui-input-:r2g:"
                    data-headlessui-state=""
                    type="text"
                    defaultValue="3"
                  />
                  <div className="hidden flex-col justify-between gap-0 sm:flex print:hidden">
                    <button
                      className="flex h-3.5 w-4 items-center justify-center rounded-sm border border-slate-600 text-zinc-600 hover:border-slate-950 hover:bg-zinc-300 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-slate-600 active:scale-95 active:bg-zinc-400"
                      type="button"
                      data-headlessui-state=""
                    >
                      <svg
                        role="img"
                        className="h-3.5"
                        aria-label="Increase score"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                      >
                        <use href="/icons/caret-up.svg#caret-up"></use>
                      </svg>
                    </button>
                    <button
                      className="flex h-3.5 w-4 rotate-180 items-center justify-center rounded-sm border border-slate-600 text-zinc-600 hover:border-slate-950 hover:bg-zinc-300 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-slate-600 active:scale-95 active:bg-zinc-400"
                      type="button"
                      data-headlessui-state=""
                    >
                      <svg
                        role="img"
                        className="h-3.5"
                        aria-label="Increase score"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                      >
                        <use href="/icons/caret-up.svg#caret-up"></use>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-7 print:text-sm">
              <div className="col-span-3 flex items-center gap-1 px-2 py-1 text-sm outline-1 outline-zinc-800 print:outline-slate-950">
                Sanity Points <span className="uppercase">(san)</span>
              </div>
              <div className="col-span-2 flex items-center justify-center px-2 py-1 outline-1 outline-zinc-800 print:outline-slate-950">
                <span>15</span>
              </div>
              <div className="col-span-2 flex items-center justify-center px-2 py-1 outline-1 outline-zinc-800 print:outline-slate-950">
                <div className="flex gap-0.5">
                  <Input
                    className="span min-h-10 w-full grow rounded-t-md border-b border-zinc-800 bg-zinc-300 bg-opacity-70 px-1 py-0.5 text-center hover:bg-opacity-100 focus-visible:border-b-0 focus-visible:bg-opacity-100 focus-visible:outline-2 focus-visible:outline-slate-600 sm:min-h-0 print:border-0 print:bg-transparent print:text-sm"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    maxLength={3}
                    id="headlessui-input-:r2h:"
                    data-headlessui-state=""
                    type="text"
                    defaultValue="15"
                  />
                  <div className="hidden flex-col justify-between gap-0 sm:flex print:hidden">
                    <button
                      className="flex h-3.5 w-4 items-center justify-center rounded-sm border border-slate-600 text-zinc-600 hover:border-slate-950 hover:bg-zinc-300 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-slate-600 active:scale-95 active:bg-zinc-400"
                      type="button"
                      data-headlessui-state=""
                    >
                      <svg
                        role="img"
                        className="h-3.5"
                        aria-label="Increase score"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                      >
                        <use href="/icons/caret-up.svg#caret-up"></use>
                      </svg>
                    </button>
                    <button
                      className="flex h-3.5 w-4 rotate-180 items-center justify-center rounded-sm border border-slate-600 text-zinc-600 hover:border-slate-950 hover:bg-zinc-300 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-slate-600 active:scale-95 active:bg-zinc-400"
                      type="button"
                      data-headlessui-state=""
                    >
                      <svg
                        role="img"
                        className="h-3.5"
                        aria-label="Increase score"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                      >
                        <use href="/icons/caret-up.svg#caret-up"></use>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-7 print:text-sm">
              <div className="col-span-3 flex items-center gap-1 px-2 py-1 text-sm outline-1 outline-zinc-800 print:outline-slate-950">
                Breaking Point <span className="uppercase">(bp)</span>
              </div>
              <div className="col-span-2 flex items-center justify-center px-2 py-1 outline-1 outline-zinc-800 print:outline-slate-950">
                <span>N/A</span>
              </div>
              <div className="col-span-2 flex items-center justify-center px-2 py-1 outline-1 outline-zinc-800 print:outline-slate-950">
                <div className="flex gap-0.5">
                  <Input
                    className="span min-h-10 w-full grow rounded-t-md border-b border-zinc-800 bg-zinc-300 bg-opacity-70 px-1 py-0.5 text-center hover:bg-opacity-100 focus-visible:border-b-0 focus-visible:bg-opacity-100 focus-visible:outline-2 focus-visible:outline-slate-600 sm:min-h-0 print:border-0 print:bg-transparent print:text-sm"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    maxLength={3}
                    id="headlessui-input-:r2i:"
                    data-headlessui-state=""
                    type="text"
                    defaultValue="12"
                  />
                  <div className="hidden flex-col justify-between gap-0 sm:flex print:hidden">
                    <button
                      className="flex h-3.5 w-4 items-center justify-center rounded-sm border border-slate-600 text-zinc-600 hover:border-slate-950 hover:bg-zinc-300 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-slate-600 active:scale-95 active:bg-zinc-400"
                      type="button"
                      data-headlessui-state=""
                    >
                      <svg
                        role="img"
                        className="h-3.5"
                        aria-label="Increase score"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                      >
                        <use href="/icons/caret-up.svg#caret-up"></use>
                      </svg>
                    </button>
                    <button
                      className="flex h-3.5 w-4 rotate-180 items-center justify-center rounded-sm border border-slate-600 text-zinc-600 hover:border-slate-950 hover:bg-zinc-300 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-slate-600 active:scale-95 active:bg-zinc-400"
                      type="button"
                      data-headlessui-state=""
                    >
                      <svg
                        role="img"
                        className="h-3.5"
                        aria-label="Increase score"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                      >
                        <use href="/icons/caret-up.svg#caret-up"></use>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="flex w-full flex-col gap-1 px-2 py-1 font-jost outline-1 outline-zinc-800 print:gap-0 print:outline-slate-950 grow sm:h-auto h-36"
            data-headlessui-state=""
          >
            <div className="flex items-center justify-between">
              <label
                className="w-full text-xs uppercase "
                id="headlessui-label-:r2k:"
                htmlFor="headlessui-control-:r2j:"
                data-headlessui-state=""
              >
                <h3>10. Physical description</h3>
              </label>
              <span className="text-xs print:hidden">0/300</span>
            </div>
            <Textarea
              className="min-h-10 w-full justify-self-end rounded-t-md border-b border-zinc-800 bg-zinc-300 bg-opacity-70 px-2 py-0.5 hover:bg-opacity-100 focus-visible:border-b-0 focus-visible:bg-opacity-100 focus-visible:outline-2 focus-visible:outline-slate-600 sm:min-h-0 sm:px-1 print:border-0 print:bg-transparent print:p-0 print:text-sm h-full"
              maxLength={300}
              id="headlessui-control-:r2j:"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
