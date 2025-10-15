"use client";

import { useShallow } from "zustand/shallow";

import { Rollable } from "./rollable";
import { useAgentStore } from "./stores/agent";

export function RollableLookup({
  enabled,
  source,
  value,
  children,
}: React.PropsWithChildren<{
  enabled: boolean;
  source: string;
  value: string | number | undefined;
}>) {
  const strength = useAgentStore(
    useShallow((state) => ({
      ...{ score: undefined, feature: "" },
      ...state.agent?.strength,
    }))
  );
  const dexterity = useAgentStore(
    useShallow((state) => ({
      ...{ score: undefined, feature: "" },
      ...state.agent?.dexterity,
    }))
  );
  const constitution = useAgentStore(
    useShallow((state) => ({
      ...{ score: undefined, feature: "" },
      ...state.agent?.constitution,
    }))
  );
  const intelligence = useAgentStore(
    useShallow((state) => ({
      ...{ score: undefined, feature: "" },
      ...state.agent?.intelligence,
    }))
  );
  const power = useAgentStore(
    useShallow((state) => ({
      ...{ score: undefined, feature: "" },
      ...state.agent?.power,
    }))
  );
  const charisma = useAgentStore(
    useShallow((state) => ({
      ...{ score: undefined, feature: "" },
      ...state.agent?.charisma,
    }))
  );
  const skill = useAgentStore(
    useShallow((state) => state.getSkill(value?.toString() ?? ""))
  );

  let lookupSource = source;
  let lookupValue: string | number | undefined = value;

  switch (value?.toString().toLowerCase()) {
    // ability score lookup
    case "strength":
      if (strength.score) {
        lookupSource = `${lookupSource} → Strength`;
        lookupValue = strength.score;
      }
      break;
    case "dexterity":
      if (dexterity.score) {
        lookupSource = `${lookupSource} → Dexterity`;
        lookupValue = dexterity.score;
      }
      break;
    case "constitution":
      if (constitution.score) {
        lookupSource = `${lookupSource} → Constitution`;
        lookupValue = constitution.score;
      }
      break;
    case "intelligence":
      if (intelligence.score) {
        lookupSource = `${lookupSource} → Intelligence`;
        lookupValue = intelligence.score;
      }
      break;
    case "power":
      if (power.score) {
        lookupSource = `${lookupSource} → Power`;
        lookupValue = power.score;
      }
      break;
    case "charisma":
      if (charisma.score) {
        lookupSource = `${lookupSource} → Charisma`;
        lookupValue = charisma.score;
      }
      break;

    // DEX x 5
    case "dexx5":
      if (dexterity.score) {
        lookupSource = `${lookupSource} → DEXx5`;
        lookupValue = dexterity.score * 5;
      }
      break;

    // skill lookup
    default:
      if (skill) {
        lookupSource = `${lookupSource} → ${value}`;
        lookupValue = skill.score ?? 0;
      }
      break;
  }

  return (
    <Rollable enabled={enabled} source={lookupSource} value={lookupValue}>
      {children}
    </Rollable>
  );
}
