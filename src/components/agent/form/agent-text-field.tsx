"use client";

import { type IAgent } from "@/tagent";

import { useState } from "react";
import { AgentField } from "./agent-field";
import { AgentLabel } from "./agent-label";
import { AgentTextInput } from "./agent-text-input";

const AgentTextField = ({
  fieldName,
  className,
  state,
  getState,
  setState,
  label,
  maxLength,
}: {
  fieldName?: string;
  className?: string;
  state?: IAgent;
  getState?: () => string;
  setState?: (val: string) => void;
  label: string;
  maxLength: number;
}) => {
  const xGetState =
    getState ??
    (() => {
      return state && fieldName ? state[fieldName as keyof IAgent] ?? "" : "";
    });
  const xSetState =
    setState ??
    ((val: string) => {
      if (state && fieldName && state[fieldName as keyof IAgent]) {
        // state[fieldName as keyof IAgent] = val;
        Object.defineProperty(state, fieldName, { value: val });
      }
    });

  const [value, setValue] = useState(xGetState());
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    xSetState(e.target.value);
  };

  return (
    <AgentField className={className}>
      <AgentLabel
        fieldName={fieldName}
        length={value.toString().length}
        maxLength={maxLength}
      >
        {label}
      </AgentLabel>
      <AgentTextInput
        fieldName={fieldName}
        onChange={onChange}
        maxLength={maxLength}
        defaultValue={value.toString()}
      />
    </AgentField>
  );
};

export { AgentTextField };
