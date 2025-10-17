"use client";

import type { IWeaponData } from "@/types/data";
import type { IWeapon, IStunWeapon, IAgent, IAgentSkill } from "@/types/agent";

import { generateStore } from "@/lib/zustand-helpers";
import { debounce } from "@/lib/debounce";
import { save } from "@/actions/update-agent";

interface IAgentState {
  isLoaded: boolean;
  mode: "view" | "edit" | "play";
  isEditable: boolean;
  pk: string | undefined;
  sk: string | undefined;
  agent: IAgent;
}
interface IAgentActions {
  reset: (state: IAgentState) => void;
  merge: (agent: Partial<IAgent>) => void;
  setMode: (mode: "view" | "edit" | "play") => void;

  addWeapon: (weapon: IWeaponData) => void;
  updateWeapon: (weapon: IWeapon, index: number) => void;
  updateStunWeapon: (weapon: IStunWeapon, index: number) => void;
  removeWeapon: (index: number) => void;
  removeStunWeapon: (index: number) => void;

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

const _debouncedSave = debounce(save, 1000);
const debouncedSave = (get: () => IAgentState & IAgentActions) => {
  const { pk, sk, agent: agent2 } = get();
  if (pk && sk && agent2) {
    _debouncedSave(pk, sk, agent2);
  }
};

const store = generateStore<IAgentState, IAgentActions>({
  initState: () => ({
    isLoaded: false,
    mode: "view",
    isEditable: false,
    agent: {
      bonds: [],
      skills: [],
      weapons: [],
      stunWeapons: [],
      specialTraining: [],
    },
    pk: undefined,
    sk: undefined,
  }),
  actions: ({ set, get }) => ({
    reset: (state: IAgentState) => set(() => state),
    merge: (agent: Partial<IAgent>) => {
      set((state) => ({
        agent: { ...state.agent, ...agent },
      }));
      debouncedSave(get);
    },
    setMode: (mode: "view" | "edit" | "play") => set(() => ({ mode })),

    addWeapon: (weapon: IWeaponData) => {
      if (weapon.penalty !== undefined) {
        const stunWeapons = [...(get().agent.stunWeapons ?? [])];
        stunWeapons.push({
          ...weapon,
          ammo: weapon.capacity ? weapon.capacity : undefined,
        });
        set({
          agent: {
            ...get().agent,
            stunWeapons,
          },
        });
      } else {
        const weapons = [...(get().agent.weapons ?? [])];
        weapons.push({
          ...weapon,
          ammo: weapon.capacity ? weapon.capacity : undefined,
        });
        set({
          agent: {
            ...get().agent,
            weapons,
          },
        });
      }
      debouncedSave(get);
    },
    updateWeapon: (weapon: IWeapon, index: number) => {
      const weapons = [...(get().agent.weapons ?? [])];
      weapons[index] = weapon;
      set({
        agent: {
          ...get().agent,
          weapons,
        },
      });
      debouncedSave(get);
    },
    updateStunWeapon: (weapon: IStunWeapon, index: number) => {
      const stunWeapons = [...(get().agent.stunWeapons ?? [])];
      stunWeapons[index] = weapon;
      set({
        agent: {
          ...get().agent,
          stunWeapons,
        },
      });
      debouncedSave(get);
    },
    removeWeapon: (index: number) => {
      const weapons = [...(get().agent.weapons ?? [])];
      weapons.splice(index, 1);
      set({
        agent: {
          ...get().agent,
          weapons,
        },
      });
      debouncedSave(get);
    },
    removeStunWeapon: (index: number) => {
      const stunWeapons = [...(get().agent.stunWeapons ?? [])];
      stunWeapons.splice(index, 1);
      set({
        agent: {
          ...get().agent,
          stunWeapons,
        },
      });
      debouncedSave(get);
    },

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
      debouncedSave(get);
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
      debouncedSave(get);
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
      debouncedSave(get);
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
      debouncedSave(get);
    },
  }),
});

export const AgentStoreProvider = store.StoreProvider;
export const useAgentStore = store.useStore;
