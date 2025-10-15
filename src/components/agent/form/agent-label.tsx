"use client";

import { Label } from "@/components/ui/label";
import { useAgentStore } from "../stores/agent";

const AgentLabel = ({
  fieldName,
  length,
  maxLength,
  children,
}: React.PropsWithChildren<{
  fieldName: string;
  length?: number;
  maxLength?: number;
}>) => {
  const mode = useAgentStore((state) => state.mode);
  return (
    <div className="flex items-center justify-between">
      <Label
        className="w-full text-xs uppercase overflow-ellipsis"
        htmlFor={fieldName}
      >
        {children}
      </Label>
      {(length ?? 0) > 0 && mode === "edit" ? (
        <span className="text-xs print:hidden">
          {length}/{maxLength}
        </span>
      ) : null}
    </div>
  );
};

export { AgentLabel };
