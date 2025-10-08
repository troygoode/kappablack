"use client";

const AgentLabel = ({
  fieldName,
  length,
  maxLength,
  children,
}: React.PropsWithChildren<{
  fieldName?: string;
  length?: number;
  maxLength?: number;
}>) => (
  <div className="flex items-center justify-between">
    <label
      className="w-full text-xs uppercase"
      id={fieldName}
      htmlFor={fieldName}
    >
      <h3>{children}</h3>
    </label>
    <span className="text-xs print:hidden">
      {length}/{maxLength}
    </span>
  </div>
);

export { AgentLabel };
