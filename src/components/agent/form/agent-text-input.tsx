"use client";

import React from "react";
import classNames from "classnames";

import { Input } from "@/components/ui/input";
import { useAgentStore } from "../stores/agent";
import { AgentText } from "./agent-text";

const onChangeDOM =
  (change: (value: string, e?: React.ChangeEvent<HTMLInputElement>) => void) =>
  (e: React.ChangeEvent<HTMLInputElement>) => {
    change(e.target.value, e);
  };

const AgentTextInput = ({
  fieldName,
  type = "text",
  value,
  defaultValue,
  placeholder,
  onChange,
  className,
  min,
  maxLength,
  disabled,
  required,
}: {
  fieldName: string;
  type?: "text" | "number";
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  onChange: (value: string, e?: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  min?: number;
  maxLength: number;
  disabled?: boolean;
  required?: boolean;
}) => {
  const mode = useAgentStore((state) => state.mode);
  const val = value ?? "";

  return mode === "edit" ? (
    <Input
      id={fieldName}
      name={fieldName}
      type={type}
      value={value}
      defaultValue={defaultValue}
      placeholder={placeholder}
      onChange={onChangeDOM(onChange)}
      disabled={disabled}
      required={required}
      maxLength={maxLength}
      min={min}
      className={classNames(
        className,
        "dark:placeholder:text-zinc-600",
        val.length === 0
          ? `
          disabled:dark:bg-input/10

          required:bg-amber-100 required:border-amber-300
          required:focus:bg-white required:focus:border-input
          disabled:required:bg-input/10 disabled:required:border-input/10

          required:dark:bg-zinc-900 required:dark:border-amber-500
          required:focus:dark:bg-zinc-900 required:focus:dark:border-input

          disabled:required:dark:border-input/10

          print:border-0 print:outline-0
          `
          : ""
      )}
      autoComplete="off"
      data-1p-ignore
    />
  ) : (
    <AgentText value={value} type={type} className={className} />
  );
};

export { AgentTextInput };
