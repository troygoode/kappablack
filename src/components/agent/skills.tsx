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
const col1 = skills.slice(0, 16);
const col2 = skills.slice(16, 16 + 16);
const col3 = skills.slice(16 + 16);

export default function Skills() {
  const { agent, update } = useAgentStore();

  const getSkill = (skill: string) => {
    return agent?.skills?.find((s) => s.skill === skill);
  };
  const getMultiSkills = (skill: string) => {
    return agent?.skills?.filter((s) => s.skill === skill);
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

  const SkillColumn = ({ col }: { col: TSkill[] }) => (
    <>
      {col.map((s, index) => {
        if (s.multi) {
          // const multiSkills = getMultiSkills(s.name);
          return <MultiSkill key={index} skill={s.name} tooltip={s.tooltip} />;
        } else {
          const skill = getSkill(s.name);
          return (
            <Skill
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
            <MultiSkill skill="Other Skills" />
          </div>
        </div>
      </div>
    </div>
  );
}
