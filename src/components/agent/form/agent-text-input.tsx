"use client";

import { Input } from "@/components/ui/input";

const AgentTextInput = ({
  fieldName,
  onChange,
  maxLength,
  defaultValue,
  value,
}: {
  fieldName?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  maxLength?: number;
  defaultValue?: string;
  value?: string;
}) => {
  return (
    <>
      <Input
        name={fieldName}
        onChange={onChange}
        maxLength={maxLength}
        defaultValue={defaultValue}
        value={value}
        data-1p-ignore
      />
    </>
  );
};

export { AgentTextInput };
