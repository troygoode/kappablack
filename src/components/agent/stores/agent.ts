import { create } from "zustand";

import { type IAgent } from "@/types/agent";

interface IAgentState {
  agent: IAgent | undefined;
  update: (agent: IAgent) => void;
}

const useAgentStore = create<IAgentState>((set) => ({
  agent: undefined,
  update: (agent: IAgent) => set(() => ({ agent })),
}));

export { useAgentStore };
