"use client";

export default function Equipment() {
  return (
    <div className="flex flex-col outline-1 outline-slate-500 sm:flex-row print:outline-slate-950">
      <h2 className="bg-slate-950 px-1.5 py-1.5 text-center font-jost text-sm font-bold uppercase text-slate-50 outline-1 outline-slate-500 sm:rotate-180 sm:py-5 sm:[writing-mode:vertical-lr] print:py-0 print:outline-slate-950">
        Equipment
      </h2>
      <div className="w-full">
        <div
          className="flex h-auto w-full flex-col gap-1 px-2 py-1 font-jost outline-1 outline-slate-500 print:gap-0 print:outline-slate-950"
          data-headlessui-state=""
        >
          <div className="flex items-center justify-between">
            <label
              className="w-full text-xs uppercase"
              id="headlessui-label-:r1dp:"
              htmlFor="headlessui-control-:r1do:"
              data-headlessui-state=""
            >
              <h3>15. Armor and gear</h3>
            </label>
            <span className="text-xs print:hidden">0/500</span>
          </div>
          <textarea
            className="min-h-10 w-full justify-self-end rounded-t-md border-b border-slate-500 bg-zinc-300 bg-opacity-70 px-2 py-0.5 hover:bg-opacity-100 focus-visible:border-b-0 focus-visible:bg-opacity-100 focus-visible:outline-2 focus-visible:outline-slate-600 sm:min-h-0 sm:px-1 print:border-0 print:bg-transparent print:p-0 print:text-sm h-60"
            maxLength={500}
            placeholder=""
            id="headlessui-control-:r1do:"
            data-headlessui-state=""
            aria-labelledby="headlessui-label-:r1dp:"
          ></textarea>
        </div>
        <div className="flex flex-col lg:hidden print:hidden">
          <div className="flex items-center justify-between px-2 py-1 font-jost text-xs uppercase">
            <span>16. Weapons</span>
            <button
              className="disabled:hover flex min-h-10 sm:min-h-0 h-fit px-3 sm:px-0 items-center gap-1 text-nowrap rounded-full border border-slate-600 sm:pl-1.5 text-sm text-zinc-600 hover:border-slate-950 hover:bg-zinc-300 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-slate-600 active:scale-95 active:bg-zinc-400 disabled:scale-100 disabled:border-slate-600 disabled:bg-inherit disabled:text-inherit disabled:opacity-30 print:hidden"
              type="button"
              data-headlessui-state=""
            >
              Add weapon
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
          <div className="m-2 flex flex-col gap-4 rounded-xl bg-zinc-200 p-2 font-jost">
            <div className="flex items-center">
              <input
                className="min-h-10 w-full justify-self-end rounded-t-md border-b border-slate-500 bg-zinc-300 bg-opacity-70 px-2 py-0.5 hover:bg-opacity-100 focus-visible:border-b-0 focus-visible:bg-opacity-100 focus-visible:outline-2 focus-visible:outline-slate-600 sm:min-h-0 sm:px-1 print:border-0 print:bg-transparent print:p-0 print:text-sm"
                maxLength={100}
                placeholder=""
                id="headlessui-input-:r1dr:"
                data-headlessui-state=""
                defaultValue="Unarmed Attack"
              />
              <button
                className="flex size-10 items-center justify-center rounded-full text-zinc-600 hover:border-slate-950 hover:bg-zinc-300 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-slate-600 active:scale-95 active:bg-zinc-400 sm:size-6 print:hidden"
                type="button"
                data-headlessui-state=""
              >
                <svg
                  role="img"
                  className="size-5"
                  aria-label="Remove weapon"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                >
                  <use href="/icons/trash.svg#trash"></use>
                </svg>
              </button>
            </div>
            <div className="grid grid-cols-4 gap-y-4">
              <div className="flex flex-col items-center justify-center leading-none">
                <span className="text-center text-xs uppercase">Skill</span>
                <span>40%</span>
              </div>
              <div className="flex flex-col items-center justify-center leading-none">
                <span className="text-center text-xs uppercase">
                  Base range
                </span>
                <span>—</span>
              </div>
              <div className="col-span-2 flex flex-col items-center justify-center leading-none">
                <span className="text-center text-xs uppercase">Ammo</span>
                <span>—</span>
              </div>
              <div className="flex flex-col items-center justify-center leading-none">
                <span className="text-center text-xs uppercase">Radius</span>
                <span>—</span>
              </div>
              <div className="flex flex-col items-center justify-center leading-none">
                <span className="text-center text-xs uppercase">Damage</span>
                <span>1d4−1</span>
              </div>
              <div className="flex flex-col items-center justify-center leading-none">
                <span className="text-center text-xs uppercase">AP</span>
                <span>—</span>
              </div>
              <div className="flex flex-col items-center justify-center leading-none">
                <span className="text-center text-xs uppercase">Lethality</span>
                <span>—</span>
              </div>
            </div>
          </div>
        </div>
        <table className="hidden w-full font-jost lg:table print:table">
          <thead className="text-xs uppercase">
            <tr>
              <th className="border-l border-b border-slate-500 py-0.5 px-2 text-left font-normal">
                <div className="flex items-center justify-between">
                  16. Weapons
                  <button
                    className="disabled:hover flex min-h-10 sm:min-h-0 h-fit px-3 sm:px-0 items-center gap-1 text-nowrap rounded-full border border-slate-600 sm:pl-1.5 text-sm text-zinc-600 hover:border-slate-950 hover:bg-zinc-300 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-slate-600 active:scale-95 active:bg-zinc-400 disabled:scale-100 disabled:border-slate-600 disabled:bg-inherit disabled:text-inherit disabled:opacity-30 print:hidden"
                    type="button"
                    data-headlessui-state=""
                  >
                    Add weapon
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
              </th>
              <th className="border-l border-b border-slate-500 px-1 py-0.5 font-normal">
                Skill %
              </th>
              <th className="border-l border-b border-slate-500 px-1 py-0.5 font-normal">
                Base range
              </th>
              <th className="border-l border-b border-slate-500 px-1 py-0.5 font-normal">
                Damage
              </th>
              <th className="border-l border-b border-slate-500 px-1 py-0.5 font-normal">
                Armor piercing
              </th>
              <th className="border-l border-b border-slate-500 px-1 py-0.5 font-normal">
                Lethality
              </th>
              <th className="border-l border-b border-slate-500 px-1 py-0.5 font-normal">
                Radius
              </th>
              <th className="border-l border-b border-slate-500 px-1 py-0.5 font-normal">
                Ammo
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              <td className="border-l border-b border-slate-500 px-1 py-0.5">
                <div className="flex items-center gap-1.5">
                  <input
                    className="min-h-10 w-full justify-self-end rounded-t-md border-b border-slate-500 bg-zinc-300 bg-opacity-70 px-2 py-0.5 hover:bg-opacity-100 focus-visible:border-b-0 focus-visible:bg-opacity-100 focus-visible:outline-2 focus-visible:outline-slate-600 sm:min-h-0 sm:px-1 print:border-0 print:bg-transparent print:p-0 print:text-sm print:py-0.5 print:px-1"
                    maxLength={100}
                    placeholder=""
                    id="headlessui-input-:r1ds:"
                    data-headlessui-state=""
                    defaultValue="Unarmed Attack"
                  />
                  <button
                    className="flex h-6 w-6 items-center justify-center rounded-full text-zinc-600 hover:border-slate-950 hover:bg-zinc-300 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-slate-600 active:scale-95 active:bg-zinc-400 print:hidden"
                    type="button"
                    data-headlessui-state=""
                  >
                    <svg
                      role="img"
                      className="size-5"
                      aria-label="Remove weapon"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                    >
                      <use href="/icons/trash.svg#trash"></use>
                    </svg>
                  </button>
                </div>
              </td>
              <td className="border-l border-b border-slate-500 px-1 py-0.5">
                40
              </td>
              <td className="border-l border-b border-slate-500 px-1 py-0.5">
                —
              </td>
              <td className="border-l border-b border-slate-500 px-1 py-0.5">
                1d4−1
              </td>
              <td className="border-l border-b border-slate-500 px-1 py-0.5">
                —
              </td>
              <td className="border-l border-b border-slate-500 px-1 py-0.5">
                —
              </td>
              <td className="border-l border-b border-slate-500 px-1 py-0.5">
                —
              </td>
              <td className="border-l border-b border-slate-500 px-1 py-0.5">
                <span>—</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
