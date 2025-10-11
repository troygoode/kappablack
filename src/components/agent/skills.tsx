"use client";

import { type ISkill, type IMultiSkill } from "@/types/skill";

import { SideHeader } from "./form/side-header";
import { Skill, MultiSkill } from "./skill";
import skillData from "@/data/skills.json";
import { useAgentStore } from "./stores/agent";

for (const s of skillData.skills) {
  s.multi = !!s.multi;
}

type TSkill = ISkill | IMultiSkill;

const skills: TSkill[] = skillData.skills as (ISkill | IMultiSkill)[];
const BREAK_1 = 15;
const BREAK_2 = BREAK_1 + 15;
const col1 = skills.slice(0, BREAK_1);
const col2 = skills.slice(BREAK_1, BREAK_2);
const col3 = skills.slice(BREAK_2);

export default function Skills() {
  const { agent, update } = useAgentStore((state) => state);

  const getSkill = (skill: string) => {
    return agent?.skills?.find((s) => s.skill === skill);
  };
  const updateSkill = (skill: string) => {
    return (score: number | undefined, marked: boolean | undefined) => {
      if (!agent) return;
      const agentSkill = getSkill(skill);

      if (agentSkill) {
        agent.skills = agent.skills?.map((s) => {
          if (s.skill === skill) {
            return { ...s, score, marked };
          }
          return s;
        });
      } else if (agent.skills?.length) {
        agent.skills.push({ skill, score, marked });
      } else {
        agent.skills = [{ skill, score, marked }];
      }

      update({ ...agent, skills: agent.skills });
    };
  };

  const getMultiSkills = (skill: string) => {
    return (
      agent?.skills
        ?.filter((s) => s.skill === skill)
        .map((s) => ({
          type: s.type,
          score: s.score,
          marked: s.marked,
        })) ?? []
    );
  };
  const addMultiSkill = (skill: string) => () => {
    if (!agent) return;
    const agentskills = agent?.skills ?? [];
    const multiskills = getMultiSkills(skill);

    if (multiskills.length >= 3) {
      return;
    } else if (multiskills.length === 0) {
      agentskills.push({
        skill,
        type: undefined,
        score: undefined,
        marked: undefined,
      });
      agentskills.push({
        skill,
        type: undefined,
        score: undefined,
        marked: undefined,
      });
    } else {
      agentskills.push({
        skill,
        type: undefined,
        score: undefined,
        marked: undefined,
      });
    }
    update({ ...agent, skills: agentskills });
  };
  const updateMultiSkill = (skill: string) => (index: number) => {
    return (
      type: string | undefined,
      score: number | undefined,
      marked: boolean | undefined
    ) => {
      if (!agent) return;
      const agentskills = agent?.skills ?? [];
      const multiskills = getMultiSkills(skill);

      if (multiskills.length) {
        let count = -1;
        agent.skills = agentskills.map((s) => {
          if (s.skill === skill) {
            count++;
            if (count === index) {
              return { ...s, type, score, marked };
            }
          }
          return s;
        });
      } else {
        agent.skills = agentskills.concat([{ skill, type, score, marked }]);
      }
      update({ ...agent, skills: agent.skills });
    };
  };
  const removeMultiSkill = (skill: string) => (index: number) => {
    return () => {
      if (!agent) return;
      const agentskills = agent?.skills ?? [];
      let count = -1;
      agent.skills = agentskills.filter((s) => {
        if (s.skill === skill) {
          count++;
          if (count === index) {
            return false;
          }
        }
        return true;
      });
      update({ ...agent, skills: agent.skills });
    };
  };

  const SkillColumn = ({ col }: { col: TSkill[] }) => (
    <>
      {col.map((s, index) => {
        if (s.multi) {
          return (
            <MultiSkill
              loading={!agent}
              key={index}
              skill={s.name}
              tooltip={s.tooltip}
              types={getMultiSkills(s.name)}
              onAddType={addMultiSkill(s.name)}
              onUpdateType={updateMultiSkill(s.name)}
              onRemoveType={removeMultiSkill(s.name)}
            />
          );
        } else {
          const skill = getSkill(s.name);
          return (
            <Skill
              loading={!agent}
              key={index}
              skill={s.name}
              tooltip={s.tooltip}
              base={s.base}
              score={skill?.score}
              marked={skill?.marked}
              update={updateSkill(s.name)}
            />
          );
        }
      })}
    </>
  );

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
            <MultiSkill
              loading={!agent}
              skill="Other Skills"
              types={getMultiSkills("Other Skills")}
              onAddType={addMultiSkill("Other Skills")}
              onUpdateType={updateMultiSkill("Other Skills")}
              onRemoveType={removeMultiSkill("Other Skills")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
