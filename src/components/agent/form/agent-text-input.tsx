"use client";

import { Input } from "@/components/ui/input";

const AgentTextInput = ({
  fieldName,
  onChange,
  maxLength,
  defaultValue,
  value,
  disabled,
}: {
  fieldName?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  maxLength?: number;
  defaultValue?: string;
  value?: string;
  disabled?: boolean;
}) => {
  return (
    <>
      <Input
        type="text"
        id={fieldName}
        name={fieldName}
        onChange={onChange}
        maxLength={maxLength}
        defaultValue={defaultValue}
        value={value}
        disabled={disabled}
        autoComplete="off"
        data-1p-ignore
      />
    </>
  );
};

export { AgentTextInput };
