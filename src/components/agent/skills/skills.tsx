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
const skills: TSkill[] = skillData.skills as (ISkill | IMultiSkill)[];

const COL3_ROW_COUNT = 15;
const COL3_BREAK_1 = COL3_ROW_COUNT;
const COL3_BREAK_2 = COL3_BREAK_1 + COL3_ROW_COUNT;
const col3_1 = skills.slice(0, COL3_BREAK_1);
const col3_2 = skills.slice(COL3_BREAK_1, COL3_BREAK_2);
const col3_3 = skills.slice(COL3_BREAK_2);

const COL2_ROW_COUNT = 23;
const col2_1 = skills.slice(0, COL2_ROW_COUNT);
const col2_2 = skills.slice(COL2_ROW_COUNT);

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

      <div className="md:hidden w-full">
        <div className="flex flex-col">
          <SkillColumn col={col2_1} />
          <SkillColumn col={col2_2} />
          <MultiSkill skill="Other Skills" />
        </div>
      </div>

      <div className="hidden md:block lg:hidden w-full">
        <div className="grid grid-cols-2">
          <div className="flex flex-col">
            <SkillColumn col={col2_1} />
          </div>
          <div className="flex flex-col">
            <SkillColumn col={col2_2} />
            <MultiSkill skill="Other Skills" />
          </div>
        </div>
      </div>

      <div className="hidden lg:block w-full">
        <div className="grid grid-cols-3">
          <div className="flex flex-col">
            <SkillColumn col={col3_1} />
          </div>
          <div className="flex flex-col">
            <SkillColumn col={col3_2} />
          </div>
          <div className="flex flex-col">
            <SkillColumn col={col3_3} />
            <MultiSkill skill="Other Skills" />
          </div>
        </div>
      </div>
    </div>
  );
}
