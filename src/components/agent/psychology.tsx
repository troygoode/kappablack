"use client";

export default function Psychology() {
  return (
    <div className="flex flex-col outline-1 outline-slate-500 sm:flex-row print:outline-slate-950">
      <h2 className="bg-slate-950 px-1.5 py-1.5 text-center font-jost text-sm font-bold uppercase text-slate-50 outline-1 outline-slate-500 sm:rotate-180 sm:py-5 sm:[writing-mode:vertical-lr] print:py-0 print:outline-slate-950">
        Psychological Data
      </h2>
      <div className="w-full">
        <div className="flex h-full flex-col">
          <div className="flex flex-col font-jost">
            <div className="flex text-xs uppercase">
              <div className="flex grow items-center justify-between px-2 py-1 outline-1 outline-slate-500 print:outline-slate-950">
                <h3>11. Bonds</h3>
                <button
                  className="disabled:hover flex min-h-10 sm:min-h-0 h-fit px-3 sm:px-0 items-center gap-1 text-nowrap rounded-full border border-slate-600 sm:pl-1.5 text-sm text-zinc-600 hover:border-slate-950 hover:bg-zinc-300 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-slate-600 active:scale-95 active:bg-zinc-400 disabled:scale-100 disabled:border-slate-600 disabled:bg-inherit disabled:text-inherit disabled:opacity-30 print:hidden"
                  type="button"
                  data-headlessui-state=""
                >
                  Add bond
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
              <div className="flex w-20 items-center justify-center px-2 py-1 outline-1 outline-slate-500 print:outline-slate-950">
                Score
              </div>
            </div>
            <div className="flex">
              <div className="flex grow items-center gap-1.5 px-2 py-1 outline-1 outline-slate-500 print:outline-slate-950">
                <span
                  aria-label="Bond damaged"
                  className="size-4 flex-none cursor-pointer border border-slate-950 focus-visible:outline-slate-600 data-[checked]:bg-slate-950 sm:size-3"
                  id="headlessui-checkbox-:r2m:"
                  role="checkbox"
                  aria-checked="false"
                  tabIndex={0}
                  data-headlessui-state=""
                ></span>
                <div className="grow" data-headlessui-state="">
                  <label
                    className="sr-only"
                    id="headlessui-label-:r2o:"
                    htmlFor="headlessui-control-:r2n:"
                    data-headlessui-state=""
                  >
                    Bond name
                  </label>
                  <input
                    className="min-h-10 w-full justify-self-end rounded-t-md border-b border-slate-500 bg-zinc-300 bg-opacity-70 px-2 py-0.5 hover:bg-opacity-100 focus-visible:border-b-0 focus-visible:bg-opacity-100 focus-visible:outline-2 focus-visible:outline-slate-600 sm:min-h-0 sm:px-1 print:border-0 print:bg-transparent print:p-0 print:text-sm"
                    maxLength={50}
                    placeholder=""
                    id="headlessui-control-:r2n:"
                    data-headlessui-state=""
                    defaultValue=""
                    aria-labelledby="headlessui-label-:r2o:"
                  />
                </div>
                <button
                  className="flex size-10 items-center justify-center rounded-full text-zinc-600 hover:border-slate-950 hover:bg-zinc-300 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-slate-600 active:scale-95 active:bg-zinc-400 sm:size-6 print:hidden"
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
              <div className="w-20 text-center outline-1 outline-slate-500 print:outline-slate-950">
                <div
                  className="flex items-center p-1 outline-slate-950"
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
                    <input
                      className="span min-h-10 w-full grow rounded-t-md border-b border-slate-500 bg-zinc-300 bg-opacity-70 px-1 py-0.5 text-center hover:bg-opacity-100 focus-visible:border-b-0 focus-visible:bg-opacity-100 focus-visible:outline-2 focus-visible:outline-slate-600 sm:min-h-0 print:border-0 print:bg-transparent print:text-sm"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      maxLength={3}
                      id="headlessui-control-:r2q:"
                      data-headlessui-state=""
                      type="text"
                      defaultValue="0"
                      aria-labelledby="headlessui-label-:r2r:"
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
            <div className="flex">
              <div className="flex grow items-center gap-1.5 px-2 py-1 outline-1 outline-slate-500 print:outline-slate-950">
                <span
                  aria-label="Bond damaged"
                  className="size-4 flex-none cursor-pointer border border-slate-950 focus-visible:outline-slate-600 data-[checked]:bg-slate-950 sm:size-3"
                  id="headlessui-checkbox-:r2t:"
                  role="checkbox"
                  aria-checked="false"
                  tabIndex={0}
                  data-headlessui-state=""
                ></span>
                <div className="grow" data-headlessui-state="">
                  <label
                    className="sr-only"
                    id="headlessui-label-:r2v:"
                    htmlFor="headlessui-control-:r2u:"
                    data-headlessui-state=""
                  >
                    Bond name
                  </label>
                  <input
                    className="min-h-10 w-full justify-self-end rounded-t-md border-b border-slate-500 bg-zinc-300 bg-opacity-70 px-2 py-0.5 hover:bg-opacity-100 focus-visible:border-b-0 focus-visible:bg-opacity-100 focus-visible:outline-2 focus-visible:outline-slate-600 sm:min-h-0 sm:px-1 print:border-0 print:bg-transparent print:p-0 print:text-sm"
                    maxLength={50}
                    placeholder=""
                    id="headlessui-control-:r2u:"
                    data-headlessui-state=""
                    defaultValue=""
                    aria-labelledby="headlessui-label-:r2v:"
                  />
                </div>
                <button
                  className="flex size-10 items-center justify-center rounded-full text-zinc-600 hover:border-slate-950 hover:bg-zinc-300 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-slate-600 active:scale-95 active:bg-zinc-400 sm:size-6 print:hidden"
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
              <div className="w-20 text-center outline-1 outline-slate-500 print:outline-slate-950">
                <div
                  className="flex items-center p-1 outline-slate-950"
                  data-headlessui-state=""
                >
                  <label
                    className="sr-only"
                    id="headlessui-label-:r32:"
                    htmlFor="headlessui-control-:r31:"
                    data-headlessui-state=""
                  >
                    score
                  </label>
                  <div className="flex gap-0.5">
                    <input
                      className="span min-h-10 w-full grow rounded-t-md border-b border-slate-500 bg-zinc-300 bg-opacity-70 px-1 py-0.5 text-center hover:bg-opacity-100 focus-visible:border-b-0 focus-visible:bg-opacity-100 focus-visible:outline-2 focus-visible:outline-slate-600 sm:min-h-0 print:border-0 print:bg-transparent print:text-sm"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      maxLength={3}
                      id="headlessui-control-:r31:"
                      data-headlessui-state=""
                      type="text"
                      defaultValue="0"
                      aria-labelledby="headlessui-label-:r32:"
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
            <div className="flex">
              <div className="flex grow items-center gap-1.5 px-2 py-1 outline-1 outline-slate-500 print:outline-slate-950">
                <span
                  aria-label="Bond damaged"
                  className="size-4 flex-none cursor-pointer border border-slate-950 focus-visible:outline-slate-600 data-[checked]:bg-slate-950 sm:size-3"
                  id="headlessui-checkbox-:r34:"
                  role="checkbox"
                  aria-checked="false"
                  tabIndex={0}
                  data-headlessui-state=""
                ></span>
                <div className="grow" data-headlessui-state="">
                  <label
                    className="sr-only"
                    id="headlessui-label-:r36:"
                    htmlFor="headlessui-control-:r35:"
                    data-headlessui-state=""
                  >
                    Bond name
                  </label>
                  <input
                    className="min-h-10 w-full justify-self-end rounded-t-md border-b border-slate-500 bg-zinc-300 bg-opacity-70 px-2 py-0.5 hover:bg-opacity-100 focus-visible:border-b-0 focus-visible:bg-opacity-100 focus-visible:outline-2 focus-visible:outline-slate-600 sm:min-h-0 sm:px-1 print:border-0 print:bg-transparent print:p-0 print:text-sm"
                    maxLength={50}
                    placeholder=""
                    id="headlessui-control-:r35:"
                    data-headlessui-state=""
                    defaultValue=""
                    aria-labelledby="headlessui-label-:r36:"
                  />
                </div>
                <button
                  className="flex size-10 items-center justify-center rounded-full text-zinc-600 hover:border-slate-950 hover:bg-zinc-300 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-slate-600 active:scale-95 active:bg-zinc-400 sm:size-6 print:hidden"
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
              <div className="w-20 text-center outline-1 outline-slate-500 print:outline-slate-950">
                <div
                  className="flex items-center p-1 outline-slate-950"
                  data-headlessui-state=""
                >
                  <label
                    className="sr-only"
                    id="headlessui-label-:r39:"
                    htmlFor="headlessui-control-:r38:"
                    data-headlessui-state=""
                  >
                    score
                  </label>
                  <div className="flex gap-0.5">
                    <input
                      className="span min-h-10 w-full grow rounded-t-md border-b border-slate-500 bg-zinc-300 bg-opacity-70 px-1 py-0.5 text-center hover:bg-opacity-100 focus-visible:border-b-0 focus-visible:bg-opacity-100 focus-visible:outline-2 focus-visible:outline-slate-600 sm:min-h-0 print:border-0 print:bg-transparent print:text-sm"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      maxLength={3}
                      id="headlessui-control-:r38:"
                      data-headlessui-state=""
                      type="text"
                      defaultValue="0"
                      aria-labelledby="headlessui-label-:r39:"
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
            <div className="flex justify-center px-2 py-1 text-sm">
              Check a damaged Bond's box until the next Home scene ends.
            </div>
          </div>
          <div
            className="flex w-full flex-col gap-1 px-2 py-1 font-jost outline-1 outline-slate-500 print:gap-0 print:outline-slate-950 grow sm:h-auto h-36"
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
            <textarea
              className="min-h-10 w-full justify-self-end rounded-t-md border-b border-slate-500 bg-zinc-300 bg-opacity-70 px-2 py-0.5 hover:bg-opacity-100 focus-visible:border-b-0 focus-visible:bg-opacity-100 focus-visible:outline-2 focus-visible:outline-slate-600 sm:min-h-0 sm:px-1 print:border-0 print:bg-transparent print:p-0 print:text-sm h-full"
              maxLength={300}
              placeholder=""
              id="headlessui-control-:r3b:"
              data-headlessui-state=""
              aria-labelledby="headlessui-label-:r3c:"
            ></textarea>
          </div>
          <div className="flex flex-col px-2 py-1 font-jost text-sm">
            <h3 className="text-xs uppercase">
              13. Incidents of san loss without going insane
            </h3>
            <div className="flex flex-col justify-between sm:flex-row">
              <div className="flex items-center justify-center gap-3 sm:gap-1">
                <span>Violence</span>
                <span
                  className="size-4 flex-none cursor-pointer border border-slate-950 focus-visible:outline-slate-600 data-[checked]:bg-slate-950 sm:size-3"
                  id="headlessui-checkbox-:r3e:"
                  role="checkbox"
                  aria-checked="false"
                  tabIndex={0}
                  data-headlessui-state=""
                ></span>
                <span
                  className="size-4 flex-none cursor-pointer border border-slate-950 focus-visible:outline-slate-600 data-[checked]:bg-slate-950 sm:size-3"
                  id="headlessui-checkbox-:r3f:"
                  role="checkbox"
                  aria-checked="false"
                  tabIndex={0}
                  data-headlessui-state=""
                ></span>
                <span
                  className="size-4 flex-none cursor-pointer border border-slate-950 focus-visible:outline-slate-600 data-[checked]:bg-slate-950 sm:size-3"
                  id="headlessui-checkbox-:r3g:"
                  role="checkbox"
                  aria-checked="false"
                  tabIndex={0}
                  data-headlessui-state=""
                ></span>
                <span className="peer rounded-full border border-transparent pl-0.5 pr-1 italic data-[adapted]:border-slate-950">
                  adapted
                </span>
              </div>
              <div className="flex items-center justify-center gap-3 sm:gap-1">
                <span>Helplessness</span>
                <span
                  className="size-4 flex-none cursor-pointer border border-slate-950 focus-visible:outline-slate-600 data-[checked]:bg-slate-950 sm:size-3"
                  id="headlessui-checkbox-:r3h:"
                  role="checkbox"
                  aria-checked="false"
                  tabIndex={0}
                  data-headlessui-state=""
                ></span>
                <span
                  className="size-4 flex-none cursor-pointer border border-slate-950 focus-visible:outline-slate-600 data-[checked]:bg-slate-950 sm:size-3"
                  id="headlessui-checkbox-:r3i:"
                  role="checkbox"
                  aria-checked="false"
                  tabIndex={0}
                  data-headlessui-state=""
                ></span>
                <span
                  className="size-4 flex-none cursor-pointer border border-slate-950 focus-visible:outline-slate-600 data-[checked]:bg-slate-950 sm:size-3"
                  id="headlessui-checkbox-:r3j:"
                  role="checkbox"
                  aria-checked="false"
                  tabIndex={0}
                  data-headlessui-state=""
                ></span>
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
