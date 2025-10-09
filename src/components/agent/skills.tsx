import { type ISkill, type IMultiSkill } from "@/tskill";

import { SideHeader } from "./form/side-header";
import { Skill, Art, Other } from "./skill";
import skillData from "@/data/skills.json";

for (const s of skillData.skills) {
  s.multi = !!s.multi;
}

const skills: (ISkill | IMultiSkill)[] = skillData.skills as (
  | ISkill
  | IMultiSkill
)[];
const col1 = skills.slice(0, 16);
const col2 = skills.slice(16, 16 + 16);
const col3 = skills.slice(16 + 16);

export default function Skills() {
  return (
    <div className="flex flex-col outline-1 outline-zinc-800 sm:flex-row print:outline-slate-950 break-after-page">
      <SideHeader>Applicable Skill Sets</SideHeader>
      <div className="w-full">
        <div className="grid grid-cols-3">
          <div className="flex flex-col">
            {col1.map((s, index) =>
              s.multi ? (
                <Art key={index} skill={s.name} tooltip={s.tooltip} />
              ) : (
                <Skill
                  key={index}
                  skill={s.name}
                  tooltip={s.tooltip}
                  base={s.base}
                  score={0}
                />
              )
            )}
          </div>
          <div className="flex flex-col">
            {col2.map((s, index) =>
              s.multi ? (
                <Art key={index} skill={s.name} tooltip={s.tooltip} />
              ) : (
                <Skill
                  key={index}
                  skill={s.name}
                  tooltip={s.tooltip}
                  base={s.base}
                  score={0}
                />
              )
            )}
          </div>
          <div className="flex flex-col">
            {col3.map((s, index) =>
              s.multi ? (
                <Art key={index} skill={s.name} tooltip={s.tooltip} />
              ) : (
                <Skill
                  key={index}
                  skill={s.name}
                  tooltip={s.tooltip}
                  base={s.base}
                  score={0}
                />
              )
            )}
            <Other />
          </div>
        </div>
      </div>
    </div>
  );
}
