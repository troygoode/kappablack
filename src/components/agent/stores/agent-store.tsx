import { createStore } from "zustand";

import { type IAgent } from "@/types/agent";

interface IAgentState {
  agent: IAgent | undefined;
}

interface IAgentActions {
  update: (agent: IAgent) => void;
}

const defaultAgentState: IAgentState = {
  agent: undefined,
};

export interface IAgentStore extends IAgentState, IAgentActions {}

export const initAgentStore = (): IAgentState => {
  return {
    agent: undefined,
  };
};

export const createAgentStore = (
  initState: IAgentState = defaultAgentState
) => {
  return createStore<IAgentStore>()((set) => ({
    ...initState,
    update: (agent: IAgent) => set(() => ({ agent })),
  }));
};
