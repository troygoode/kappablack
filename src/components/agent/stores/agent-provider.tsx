"use client";

import {
  type PropsWithChildren,
  createContext,
  useRef,
  useContext,
} from "react";
import { useStore } from "zustand";

import {
  type IAgentStore,
  createAgentStore,
  initAgentStore,
} from "./agent-store";

export type TAgentStoreApi = ReturnType<typeof createAgentStore>;

export const AgentStoreContext = createContext<TAgentStoreApi | undefined>(
  undefined
);

export const AgentStoreProvider = ({ children }: PropsWithChildren) => {
  const storeRef = useRef<TAgentStoreApi | null>(null);
  if (storeRef.current === null) {
    storeRef.current = createAgentStore(initAgentStore());
  }

  return (
    <AgentStoreContext.Provider value={storeRef.current}>
      {children}
    </AgentStoreContext.Provider>
  );
};

type TAgentStoreSelector<T> = (store: IAgentStore) => T;
export const useAgentStore = <T,>(selector: TAgentStoreSelector<T>): T => {
  const agentStoreContext = useContext(AgentStoreContext);

  if (!agentStoreContext) {
    throw new Error(`useAgentStore must be used within AgentStoreProvider`);
  }

  return useStore(agentStoreContext, selector);
};
