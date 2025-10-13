"use client";

import { generateStore } from "@/lib/zustand-helpers";
import { type IAgent } from "@/types/agent";

interface IAgentState {
  isLoaded: boolean;
  agent: IAgent;
}
interface IAgentActions {
  markLoaded: () => void;
  update: (agent: IAgent) => void;
  merge: (agent: Partial<IAgent>) => void;
}

const store = generateStore<IAgentState, IAgentActions>({
  initState: () => ({
    isLoaded: false,
    agent: {
      bonds: [],
      skills: [],
      weapons: [],
      statusEffectWeapons: [],
      specialTraining: [],
    },
  }),
  actions: ({ set }) => ({
    markLoaded: () => set(() => ({ isLoaded: true })),
    update: (agent: IAgent) => set(() => ({ agent })),
    merge: (agent: Partial<IAgent>) =>
      set((state) => ({
        agent: { ...state.agent, ...agent },
      })),
  }),
});

export const AgentStoreProvider = store.StoreProvider;
export const useAgentStore = store.useStore;
