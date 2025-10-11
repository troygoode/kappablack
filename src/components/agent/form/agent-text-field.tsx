"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { AgentField } from "./agent-field";
import { AgentLabel } from "./agent-label";
import { AgentTextInput } from "./agent-text-input";
import { useAgentStore } from "../stores/agent-provider";
import { IAgent } from "@/types/agent";

export function AgentTextField({
  fieldName,
  label,
  value,
  update,
  maxLength,
  required,
  className,
}: {
  fieldName: string;
  label: string;
  value: (agent: IAgent) => string | undefined;
  update: (agent: IAgent, value: string) => IAgent;
  maxLength: number;
  required?: boolean;
  className?: string;
}) {
  const { agent, update: updateStore } = useAgentStore((state) => state);
  const onChange = (value: string) => {
    if (agent) {
      updateStore(update(agent, value));
    }
  };

  const val = agent ? value(agent) ?? "" : "";

  return (
    <AgentField className={className}>
      <AgentLabel
        fieldName={fieldName}
        length={val.length}
        maxLength={maxLength}
      >
        {label}
      </AgentLabel>
      {agent ? (
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
