"use client";

import { Input } from "@/components/ui/input";
import classNames from "classnames";
import React from "react";

const onChangeDOM =
  (change: (value: string, e?: React.ChangeEvent<HTMLInputElement>) => void) =>
  (e: React.ChangeEvent<HTMLInputElement>) => {
    change(e.target.value, e);
  };

const AgentTextInput = ({
  fieldName,
  type = "text",
  value,
  onChange,
  className,
  min,
  maxLength,
  disabled,
}: {
  fieldName: string;
  type?: "text" | "number";
  value?: string;
  onChange: (value: string, e?: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  min?: number;
  maxLength?: number;
  disabled?: boolean;
}) => {
  const val = value ?? "";
  return (
    <Input
      className={classNames(
        className,
        val.length === 0 ? "dark:bg-amber-100 disabled:dark:bg-input/10" : ""
      )}
      type={type}
      id={fieldName}
      name={fieldName}
      onChange={onChangeDOM(onChange)}
      maxLength={maxLength}
      value={value}
      disabled={disabled}
      autoComplete="off"
      data-1p-ignore
      min={min}
    />
  );
};

export { AgentTextInput };
