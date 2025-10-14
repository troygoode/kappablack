"use client";

import { useShallow } from "zustand/shallow";

import { Skeleton } from "@/components/ui/skeleton";
import { AgentField } from "./agent-field";
import { AgentLabel } from "./agent-label";
import { AgentTextInput } from "./agent-text-input";
import { useAgentStore } from "../stores/agent";
import { IAgent } from "@/types/agent";

export function AgentTextField({
  fieldName,
  label,
  value,
  merge,
  maxLength,
  required,
  className,
}: {
  fieldName: string;
  label: React.ReactNode;
  value: (agent: IAgent) => string | undefined;
  merge: (value: string) => Partial<IAgent>;
  maxLength: number;
  required?: boolean;
  className?: string;
}) {
  const mergeStore = useAgentStore((state) => state.merge);

  const isLoaded = useAgentStore(useShallow((state) => state.isLoaded));
  const val = useAgentStore(
    useShallow((state) => (state.agent ? value(state.agent) : "") || "")
  );
  const agent = useAgentStore((state) => state.agent);

  const onChange = (value: string) => {
    if (agent) {
      mergeStore(merge(value));
    }
  };

  return (
    <AgentField className={className}>
      <AgentLabel
        fieldName={fieldName}
        length={val.length}
        maxLength={maxLength}
      >
        {label}
      </AgentLabel>
      {isLoaded ? (
        <AgentTextInput
          fieldName={fieldName}
          value={val}
          onChange={onChange}
          maxLength={maxLength}
          required={required}
        />
      ) : (
        <Skeleton className="h-9 w-full" />
      )}
    </AgentField>
  );
}
