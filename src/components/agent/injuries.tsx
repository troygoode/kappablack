"use client";

export default function Injuries() {
  return (
    <div className="flex flex-col outline-1 outline-slate-500 sm:flex-row print:outline-slate-950">
      <h2 className="bg-slate-950 px-1.5 py-1.5 text-center font-jost text-sm font-bold uppercase text-slate-50 outline-1 outline-slate-500 sm:rotate-180 sm:py-5 sm:[writing-mode:vertical-lr] print:py-0 print:outline-slate-950">
        Injuries
      </h2>
      <div className="w-full">
        <div
          className="flex h-auto w-full flex-col gap-1 px-2 py-1 font-jost outline-1 outline-slate-500 print:gap-0 print:outline-slate-950"
          data-headlessui-state=""
        >
          <div className="flex items-center justify-between">
            <label
              className="w-full text-xs uppercase"
              id="headlessui-label-:r1dl:"
              htmlFor="headlessui-control-:r1dk:"
              data-headlessui-state=""
            >
              <h3>14. Wounds and ailments</h3>
            </label>
            <span className="text-xs print:hidden">0/300</span>
          </div>
          <textarea
            className="min-h-10 w-full justify-self-end rounded-t-md border-b border-slate-500 bg-zinc-300 bg-opacity-70 px-2 py-0.5 hover:bg-opacity-100 focus-visible:border-b-0 focus-visible:bg-opacity-100 focus-visible:outline-2 focus-visible:outline-slate-600 sm:min-h-0 sm:px-1 print:border-0 print:bg-transparent print:p-0 print:text-sm h-28"
            maxLength={300}
            placeholder=""
            id="headlessui-control-:r1dk:"
            data-headlessui-state=""
            aria-labelledby="headlessui-label-:r1dl:"
          ></textarea>
        </div>
        <div className="flex flex-col items-center justify-center px-2 py-1 font-jost text-sm lg:flex-row lg:gap-4">
          <span>Has First Aid been attempted since the last injury?</span>
          <div className="flex items-center gap-1">
            <span
              aria-label="Bond damaged"
              className="size-4 flex-none cursor-pointer border border-slate-950 focus-visible:outline-slate-600 data-[checked]:bg-slate-950 sm:size-3"
              id="headlessui-checkbox-:r1dn:"
              role="checkbox"
              aria-checked="false"
              tabIndex={0}
              data-headlessui-state=""
            ></span>
            <span>
              Yes: Only Medicine, Surgery, or long-term rest can help further.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
