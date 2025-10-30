"use client";

import {
  createContext as createReactContext,
  type PropsWithChildren,
  useContext,
  useRef,
} from "react";
import {
  createStore as createZustandStore,
  type StoreApi,
  useStore as useZustandStore,
} from "zustand";

type TSet<T> = {
  (
    partial: T | Partial<T> | ((state: T) => T | Partial<T>),
    replace?: false | undefined,
  ): void;
  (state: T | ((state: T) => T), replace: true): void;
};

export const createContext = <IState, IActions>(
  value?: StoreApi<IState & IActions>,
) => {
  return createReactContext<StoreApi<IState & IActions> | undefined>(value);
};

export const generateStore = <IState, IActions>({
  initState,
  actions,
}: {
  initState: () => IState;
  actions: ({
    set,
    get,
    store,
  }: {
    set: TSet<IState & IActions>;
    get: () => IState & IActions;
    store: StoreApi<IState & IActions>;
  }) => IActions;
}) => {
  const StoreContext = createContext<IState, IActions>();

  const createStore = (initState: IState) => {
    const storeCreator = createZustandStore<IState & IActions>();
    return storeCreator((set, get, store) => ({
      ...initState,
      ...actions({ set, get, store }),
    }));
  };

  const createProvider = () => {
    return ({ children }: PropsWithChildren) => {
      const storeRef = useRef<StoreApi<IState & IActions> | null>(null);
      if (storeRef.current === null) {
        storeRef.current = createStore(initState());
      }

      return (
        <StoreContext.Provider value={storeRef.current}>
          {children}
        </StoreContext.Provider>
      );
    };
  };

  type TStoreSelector<T> = (store: IState & IActions) => T;
  const useStore = <T,>(selector: TStoreSelector<T>): T => {
    const storeContext = useContext(StoreContext);

    if (!storeContext) {
      throw new Error(`useStore must be used within StoreProvider`);
    }

    return useZustandStore(storeContext, selector);
  };

  return {
    StoreContext,
    StoreProvider: createProvider(),
    useStore,
  };
};
