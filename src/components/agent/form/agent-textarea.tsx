"use client";

import classNames from "classnames";

import { Skeleton } from "@/components/ui/skeleton";
import { Textarea } from "@/components/ui/textarea";
import { useAgentStore } from "../stores/agent";
import { AgentText } from "./agent-text";

const AgentTextarea = ({
  loading,
  fieldName,
  className,
  skeletonClassName,
  value,
  onChange,
  maxLength,
  required,
}: {
  loading: boolean;
  fieldName: string;
  className?: string;
  skeletonClassName?: string;
  value: string | undefined;
  onChange: (value: string, e?: React.ChangeEvent<HTMLTextAreaElement>) => void;
  maxLength: number;
  required?: boolean;
}) => {
  const mode = useAgentStore((state) => state.mode);
  return !loading ? (
    mode === "edit" ? (
      <Textarea
        id={fieldName}
        name={fieldName}
        value={value ?? ""}
        maxLength={maxLength}
        required={required}
        onChange={(e) => {
          if (loading) return;
          onChange(e.target.value, e);
        }}
        className={classNames(
          `min-h-15 h-full w-full justify-self-end rounded-t-md border-b
        border-input bg-zinc-300 focus-visible:outline-slate-600
        bg-opacity-70 px-2 py-0.5 hover:bg-opacity-100 focus-visible:border-b-0 focus-visible:bg-opacity-100 focus-visible:outline-2 print:border-0 print:bg-transparent print:p-0 print:text-sm`,
          (value?.length ?? 0) === 0
            ? `
          disabled:dark:bg-input/10

          required:bg-amber-100 required:border-amber-300
          required:focus:bg-white required:focus:border-input
          disabled:required:bg-input/10 disabled:required:border-input/10

          required:dark:bg-zinc-900 required:dark:border-amber-500
          required:focus:dark:bg-zinc-900 required:focus:dark:border-input

          disabled:required:dark:border-input/10
          `
            : "",
          className,
        )}
      />
    ) : (
      <AgentText
        value={value ?? ""}
        className="min-h-15 h-full whitespace-pre-wrap"
      />
    )
  ) : (
    <Skeleton
      className={classNames(
        "min-h-15 h-full rounded-md",
        className ?? skeletonClassName,
      )}
    />
  );
};

export { AgentTextarea };
