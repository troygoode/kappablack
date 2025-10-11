"use client";

import { generateStore } from "@/lib/zustand-helpers";
import { type IAgent } from "@/types/agent";

interface IAgentState {
  agent: IAgent | undefined;
}
interface IAgentActions {
  update: (agent: IAgent) => void;
}

const store = generateStore<IAgentState, IAgentActions>({
  initState: () => ({
    agent: undefined,
  }),
  actions: ({ set }) => ({
    update: (agent: IAgent) => set(() => ({ agent })),
  }),
});

export const AgentStoreProvider = store.StoreProvider;
export const useAgentStore = store.useStore;
