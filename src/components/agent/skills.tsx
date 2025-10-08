import { SideHeader } from "./form/side-header";
import { Skill, Art } from "./skill";

export default function Skills() {
  return (
    <div className="flex flex-col outline-1 outline-zinc-800 sm:flex-row print:outline-slate-950 break-after-page">
      <SideHeader>Applicable Skill Sets</SideHeader>
      <div className="w-full">
        <div className="grid grid-cols-3">
          <div className="flex flex-col">
            <Skill skill="Accounting" score={10} />
            <Art />
          </div>
        </div>
      </div>
    </div>
  );
}
