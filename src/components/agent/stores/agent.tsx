"use client";

import { generateStore } from "@/lib/zustand-helpers";
import { type IAgent, type IAgentSkill } from "@/types/agent";

interface IAgentState {
  isLoaded: boolean;
  agent: IAgent;
}
interface IAgentActions {
  reset: (state: IAgentState) => void;
  merge: (agent: Partial<IAgent>) => void;

  getSkill: (skill: string) => IAgentSkill;
  updateSkill: (skill: string, score?: number, marked?: boolean) => void;
  getMultiSkillTypes: (skill: string) => IAgentSkill[];
  addMultiSkillType: (skill: string) => void;
  updateMultiSkillType: (
    skill: string,
    index: number,
    type?: string,
    score?: number,
    marked?: boolean
  ) => void;
  removeMultiSkillType: (skill: string, index: number) => void;
}

const store = generateStore<IAgentState, IAgentActions>({
  initState: () => ({
    isLoaded: false,
    agent: {
      bonds: [],
      skills: [],
      weapons: [],
      stunWeapons: [],
      specialTraining: [],
    },
  }),
  actions: ({ set, get }) => ({
    reset: (state: IAgentState) => set(() => state),
    merge: (agent: Partial<IAgent>) =>
      set((state) => ({
        agent: { ...state.agent, ...agent },
      })),

    getSkill: (skill: string) => {
      const { agent } = get();
      return (
        agent?.skills?.find((s) => s.skill === skill) ?? {
          skill,
          score: undefined,
          marked: undefined,
        }
      );
    },
    updateSkill: (skill: string, score?: number, marked?: boolean) => {
      const { agent } = get();
      if (!agent) return;

      const skills = agent.skills ? [...agent.skills] : [];
      const skillIndex = skills.findIndex((s) => s.skill === skill);

      if (skillIndex !== -1) {
        skills[skillIndex] = {
          ...skills[skillIndex],
          score: score !== undefined ? score : skills[skillIndex].score,
          marked: marked !== undefined ? marked : skills[skillIndex].marked,
        };
      } else {
        skills.push({ skill, score, marked });
      }

      set({
        agent: {
          ...agent,
          skills,
        },
      });
    },

    getMultiSkillTypes: (skill: string) => {
      const { agent } = get();
      return agent?.skills?.filter((s) => s.skill === skill) || [];
    },
    addMultiSkillType: (skill: string) => {
      const { agent } = get();
      if (!agent) return;

      const skills = agent.skills ? [...agent.skills] : [];
      skills.push({ skill, score: undefined, marked: undefined });

      set({
        agent: {
          ...agent,
          skills,
        },
      });
    },
    updateMultiSkillType: (
      skill: string,
      index: number,
      type?: string,
      score?: number,
      marked?: boolean
    ) => {
      const { agent } = get();
      if (!agent) return;

      const skills = agent.skills ? [...agent.skills] : [];
      const multiSkills = skills.filter((s) => s.skill === skill);
      if (index < 0 || index >= multiSkills.length) return;

      const skillIndex = skills.indexOf(multiSkills[index]);
      skills[skillIndex] = {
        ...skills[skillIndex],
        type: type !== undefined ? type : skills[skillIndex].type,
        score: score !== undefined ? score : skills[skillIndex].score,
        marked: marked !== undefined ? marked : skills[skillIndex].marked,
      };

      set({
        agent: {
          ...agent,
          skills,
        },
      });
    },
    removeMultiSkillType: (skill: string, index: number) => {
      const { agent } = get();
      if (!agent) return;

      const skills = agent.skills ? [...agent.skills] : [];
      const multiSkills = skills.filter((s) => s.skill === skill);
      if (index < 0 || index >= multiSkills.length) return;

      const skillIndex = skills.indexOf(multiSkills[index]);
      skills.splice(skillIndex, 1);

      set({
        agent: {
          ...agent,
          skills,
        },
      });
    },
  }),
});

export const AgentStoreProvider = store.StoreProvider;
export const useAgentStore = store.useStore;
