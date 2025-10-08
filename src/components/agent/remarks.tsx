"use client";

export default function Remarks() {
  return (
    <div className="flex flex-col outline-1 outline-slate-500 sm:flex-row print:outline-slate-950">
      <h2 className="bg-slate-950 px-1.5 py-1.5 text-center font-jost text-sm font-bold uppercase text-slate-50 outline-1 outline-slate-500 sm:rotate-180 sm:py-5 sm:[writing-mode:vertical-lr] print:py-0 print:outline-slate-950">
        Remarks
      </h2>
      <div className="w-full">
        <div className="flex flex-col lg:grid lg:grid-cols-2 print:grid print:grid-cols-2">
          <div
            className="flex h-auto w-full flex-col gap-1 px-2 py-1 font-jost outline-1 outline-slate-500 print:gap-0 print:outline-slate-950"
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
            <textarea
              className="min-h-10 w-full justify-self-end rounded-t-md border-b border-slate-500 bg-zinc-300 bg-opacity-70 px-2 py-0.5 hover:bg-opacity-100 focus-visible:border-b-0 focus-visible:bg-opacity-100 focus-visible:outline-2 focus-visible:outline-slate-600 sm:min-h-0 sm:px-1 print:border-0 print:bg-transparent print:p-0 print:text-sm grow h-28 lg:h-auto"
              maxLength={500}
              placeholder=""
              id="headlessui-control-:r1dt:"
              data-headlessui-state=""
              aria-labelledby="headlessui-label-:r1du:"
            ></textarea>
          </div>
          <div className="flex flex-col">
            <div
              className="flex h-auto w-full flex-col gap-1 px-2 py-1 font-jost outline-1 outline-slate-500 print:gap-0 print:outline-slate-950"
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
              <textarea
                className="min-h-10 w-full justify-self-end rounded-t-md border-b border-slate-500 bg-zinc-300 bg-opacity-70 px-2 py-0.5 hover:bg-opacity-100 focus-visible:border-b-0 focus-visible:bg-opacity-100 focus-visible:outline-2 focus-visible:outline-slate-600 sm:min-h-0 sm:px-1 print:border-0 print:bg-transparent print:p-0 print:text-sm grow h-28"
                maxLength={300}
                placeholder=""
                id="headlessui-control-:r1e0:"
                data-headlessui-state=""
                aria-labelledby="headlessui-label-:r1e1:"
              ></textarea>
            </div>
            <div className="flex flex-col font-jost">
              <div className="flex text-xs uppercase">
                <div className="flex w-1/2 justify-between px-2 py-1 outline-1 outline-slate-500 print:outline-slate-950">
                  <h3>19. Special Training</h3>
                </div>
                <div className="relative flex h-16 w-1/2 justify-center px-2 py-1 outline-1 outline-slate-500 sm:h-12 print:outline-slate-950">
                  Skill or stat used
                  <div className="absolute bottom-1 right-1">
                    <button
                      className="disabled:hover flex min-h-10 sm:min-h-0 h-fit px-3 sm:px-0 items-center gap-1 text-nowrap rounded-full border border-slate-600 sm:pl-1.5 text-sm text-zinc-600 hover:border-slate-950 hover:bg-zinc-300 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-slate-600 active:scale-95 active:bg-zinc-400 disabled:scale-100 disabled:border-slate-600 disabled:bg-inherit disabled:text-inherit disabled:opacity-30 print:hidden"
                      type="button"
                      data-headlessui-state=""
                    >
                      Add special training
                      <svg
                        role="img"
                        className="size-6 sm:size-5"
                        aria-label=""
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                      >
                        <use href="/icons/add.svg#add"></use>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex">
                <div className="flex w-1/2 items-center gap-1.5 px-2 py-1 outline-1 outline-slate-500 print:outline-slate-950">
                  <div className="grow" data-headlessui-state="">
                    <label
                      className="sr-only"
                      id="headlessui-label-:r1e4:"
                      htmlFor="headlessui-control-:r1e3:"
                      data-headlessui-state=""
                    >
                      Special training name
                    </label>
                    <input
                      className="min-h-10 w-full justify-self-end rounded-t-md border-b border-slate-500 bg-zinc-300 bg-opacity-70 px-2 py-0.5 hover:bg-opacity-100 focus-visible:border-b-0 focus-visible:bg-opacity-100 focus-visible:outline-2 focus-visible:outline-slate-600 sm:min-h-0 sm:px-1 print:border-0 print:bg-transparent print:p-0 print:text-sm"
                      maxLength={50}
                      placeholder=""
                      id="headlessui-control-:r1e3:"
                      data-headlessui-state=""
                      defaultValue=""
                      aria-labelledby="headlessui-label-:r1e4:"
                    />
                  </div>
                  <button
                    className="flex h-6 w-6 items-center justify-center rounded-full text-zinc-600 hover:border-slate-950 hover:bg-zinc-300 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-slate-600 active:scale-95 active:bg-zinc-400 print:hidden"
                    type="button"
                    data-headlessui-state=""
                  >
                    <svg
                      role="img"
                      className="size-5"
                      aria-label="Remove bond type"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                    >
                      <use href="/icons/trash.svg#trash"></use>
                    </svg>
                  </button>
                </div>
                <div className="w-1/2 text-center outline-1 outline-slate-500 print:outline-slate-950">
                  <div
                    className="flex h-full w-full flex-col justify-end gap-1 px-2 py-1 font-jost outline-1 outline-slate-500 print:gap-0 print:outline-slate-950"
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
                    <button
                      className="group flex h-10 w-full items-center justify-between rounded-t-md border-b border-slate-500 bg-zinc-300 bg-opacity-70 px-3 py-0.5 hover:bg-opacity-100 focus-visible:border-b-0 focus-visible:bg-opacity-100 focus-visible:outline-2 focus-visible:outline-slate-600 sm:h-auto sm:px-1 print:border-0 print:bg-transparent print:p-0 print:text-sm"
                      id="headlessui-control-:r1e6:"
                      type="button"
                      aria-haspopup="listbox"
                      aria-expanded="false"
                      data-headlessui-state=""
                      aria-labelledby="headlessui-label-:r1e7: headlessui-control-:r1e6:"
                    >
                      <span
                        className="grow text-left data-[use-spacer=true]:invisible"
                        data-use-spacer="true"
                      >
                        spacer
                      </span>
                      <svg
                        role="img"
                        className="pointer-events-none size-5 rotate-180 text-zinc-600 group-hover:text-zinc-950 print:hidden"
                        aria-label="Open combobox"
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
              <div className="flex">
                <div className="flex w-1/2 items-center gap-1.5 px-2 py-1 outline-1 outline-slate-500 print:outline-slate-950">
                  <div className="grow" data-headlessui-state="">
                    <label
                      className="sr-only"
                      id="headlessui-label-:r1ef:"
                      htmlFor="headlessui-control-:r1ee:"
                      data-headlessui-state=""
                    >
                      Special training name
                    </label>
                    <input
                      className="min-h-10 w-full justify-self-end rounded-t-md border-b border-slate-500 bg-zinc-300 bg-opacity-70 px-2 py-0.5 hover:bg-opacity-100 focus-visible:border-b-0 focus-visible:bg-opacity-100 focus-visible:outline-2 focus-visible:outline-slate-600 sm:min-h-0 sm:px-1 print:border-0 print:bg-transparent print:p-0 print:text-sm"
                      maxLength={50}
                      placeholder=""
                      id="headlessui-control-:r1ee:"
                      data-headlessui-state=""
                      defaultValue=""
                      aria-labelledby="headlessui-label-:r1ef:"
                    />
                  </div>
                  <button
                    className="flex h-6 w-6 items-center justify-center rounded-full text-zinc-600 hover:border-slate-950 hover:bg-zinc-300 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-slate-600 active:scale-95 active:bg-zinc-400 print:hidden"
                    type="button"
                    data-headlessui-state=""
                  >
                    <svg
                      role="img"
                      className="size-5"
                      aria-label="Remove bond type"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                    >
                      <use href="/icons/trash.svg#trash"></use>
                    </svg>
                  </button>
                </div>
                <div className="w-1/2 text-center outline-1 outline-slate-500 print:outline-slate-950">
                  <div
                    className="flex h-full w-full flex-col justify-end gap-1 px-2 py-1 font-jost outline-1 outline-slate-500 print:gap-0 print:outline-slate-950"
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
                    <button
                      className="group flex h-10 w-full items-center justify-between rounded-t-md border-b border-slate-500 bg-zinc-300 bg-opacity-70 px-3 py-0.5 hover:bg-opacity-100 focus-visible:border-b-0 focus-visible:bg-opacity-100 focus-visible:outline-2 focus-visible:outline-slate-600 sm:h-auto sm:px-1 print:border-0 print:bg-transparent print:p-0 print:text-sm"
                      id="headlessui-control-:r1eh:"
                      type="button"
                      aria-haspopup="listbox"
                      aria-expanded="false"
                      data-headlessui-state=""
                      aria-labelledby="headlessui-label-:r1ei: headlessui-control-:r1eh:"
                    >
                      <span
                        className="grow text-left data-[use-spacer=true]:invisible"
                        data-use-spacer="true"
                      >
                        spacer
                      </span>
                      <svg
                        role="img"
                        className="pointer-events-none size-5 rotate-180 text-zinc-600 group-hover:text-zinc-950 print:hidden"
                        aria-label="Open combobox"
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
              <div className="flex">
                <div className="flex w-1/2 items-center gap-1.5 px-2 py-1 outline-1 outline-slate-500 print:outline-slate-950">
                  <div className="grow" data-headlessui-state="">
                    <label
                      className="sr-only"
                      id="headlessui-label-:r1eq:"
                      htmlFor="headlessui-control-:r1ep:"
                      data-headlessui-state=""
                    >
                      Special training name
                    </label>
                    <input
                      className="min-h-10 w-full justify-self-end rounded-t-md border-b border-slate-500 bg-zinc-300 bg-opacity-70 px-2 py-0.5 hover:bg-opacity-100 focus-visible:border-b-0 focus-visible:bg-opacity-100 focus-visible:outline-2 focus-visible:outline-slate-600 sm:min-h-0 sm:px-1 print:border-0 print:bg-transparent print:p-0 print:text-sm"
                      maxLength={50}
                      placeholder=""
                      id="headlessui-control-:r1ep:"
                      data-headlessui-state=""
                      defaultValue=""
                      aria-labelledby="headlessui-label-:r1eq:"
                    />
                  </div>
                  <button
                    className="flex h-6 w-6 items-center justify-center rounded-full text-zinc-600 hover:border-slate-950 hover:bg-zinc-300 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-slate-600 active:scale-95 active:bg-zinc-400 print:hidden"
                    type="button"
                    data-headlessui-state=""
                  >
                    <svg
                      role="img"
                      className="size-5"
                      aria-label="Remove bond type"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                    >
                      <use href="/icons/trash.svg#trash"></use>
                    </svg>
                  </button>
                </div>
                <div className="w-1/2 text-center outline-1 outline-slate-500 print:outline-slate-950">
                  <div
                    className="flex h-full w-full flex-col justify-end gap-1 px-2 py-1 font-jost outline-1 outline-slate-500 print:gap-0 print:outline-slate-950"
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
                    <button
                      className="group flex h-10 w-full items-center justify-between rounded-t-md border-b border-slate-500 bg-zinc-300 bg-opacity-70 px-3 py-0.5 hover:bg-opacity-100 focus-visible:border-b-0 focus-visible:bg-opacity-100 focus-visible:outline-2 focus-visible:outline-slate-600 sm:h-auto sm:px-1 print:border-0 print:bg-transparent print:p-0 print:text-sm"
                      id="headlessui-control-:r1es:"
                      type="button"
                      aria-haspopup="listbox"
                      aria-expanded="false"
                      data-headlessui-state=""
                      aria-labelledby="headlessui-label-:r1et: headlessui-control-:r1es:"
                    >
                      <span
                        className="grow text-left data-[use-spacer=true]:invisible"
                        data-use-spacer="true"
                      >
                        spacer
                      </span>
                      <svg
                        role="img"
                        className="pointer-events-none size-5 rotate-180 text-zinc-600 group-hover:text-zinc-950 print:hidden"
                        aria-label="Open combobox"
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
        </div>
        <div className="flex justify-center px-2 py-1 font-jost text-sm">
          Please indicate why this agent was recruited and why the agent agreed
          to be recruited.
        </div>
      </div>
    </div>
  );
}
