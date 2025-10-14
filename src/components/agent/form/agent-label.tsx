"use client";

import { Label } from "@/components/ui/label";

const AgentLabel = ({
  fieldName,
  length,
  maxLength,
  children,
}: React.PropsWithChildren<{
  fieldName: string;
  length?: number;
  maxLength?: number;
}>) => (
  <div className="flex items-center justify-between">
    <Label
      className="w-full text-xs uppercase overflow-ellipsis"
      htmlFor={fieldName}
    >
      {children}
    </Label>
    {(length ?? 0) > 0 ? (
      <span className="text-xs print:hidden">
        {length}/{maxLength}
      </span>
    ) : null}
  </div>
);

export { AgentLabel };
