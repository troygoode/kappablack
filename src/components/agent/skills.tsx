import { Accounting, Art } from "./skill";

export default function Skills() {
  return (
    <div className="flex flex-col outline-1 outline-slate-500 sm:flex-row print:outline-slate-950 break-after-page">
      <h2 className="bg-slate-950 px-1.5 py-1.5 text-center font-jost text-sm font-bold uppercase text-slate-50 outline-1 outline-slate-500 sm:rotate-180 sm:py-5 sm:[writing-mode:vertical-lr] print:py-0 print:outline-slate-950">
        Applicable skill sets
      </h2>
      <div className="w-full">
        <div className="grid grid-cols-1 md:hidden print:hidden">
          <div className="flex flex-col"></div>
          <Accounting />
          <Art />
        </div>
      </div>
    </div>
  );
}
