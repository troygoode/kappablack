"use client";

import { type ISkill, type IMultiSkill } from "@/types/skill";

import { SideHeader } from "../form/side-header";
import { Skill } from "./skill";
import { MultiSkill } from "./multiskill";

import skillData from "@/data/skills.json";

for (const s of skillData.skills) {
  s.multi = !!s.multi;
}

type TSkill = ISkill | IMultiSkill;

const ROW_COUNT = 15;
const skills: TSkill[] = skillData.skills as (ISkill | IMultiSkill)[];
const BREAK_1 = ROW_COUNT;
const BREAK_2 = BREAK_1 + ROW_COUNT;
const col1 = skills.slice(0, BREAK_1);
const col2 = skills.slice(BREAK_1, BREAK_2);
const col3 = skills.slice(BREAK_2);

const SkillColumn = ({ col }: { col: TSkill[] }) =>
  col.map((s, index) => {
    if (s.multi) {
      return <MultiSkill key={index} skill={s.name} tooltip={s.tooltip} />;
    } else {
      return (
        <Skill key={index} skill={s.name} tooltip={s.tooltip} base={s.base} />
      );
    }
  });

export default function Skills() {
  return (
    <div className="flex flex-col outline-1 outline-zinc-800 sm:flex-row print:outline-slate-950 break-after-page">
      <SideHeader>Applicable Skill Sets</SideHeader>
      <div className="w-full">
        <div className="grid grid-cols-3">
          <div className="flex flex-col">
            <SkillColumn col={col1} />
          </div>
          <div className="flex flex-col">
            <SkillColumn col={col2} />
          </div>
          <div className="flex flex-col">
            <SkillColumn col={col3} />
            <MultiSkill skill="Other Skills" />
          </div>
        </div>
      </div>
    </div>
  );
}
