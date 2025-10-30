"use client";

import classNames from "classnames";

export const AgentText = ({
  className,
  value,
  type,
}: {
  className?: string;
  value?: string;
  type?: "number" | "text";
}) => {
  return (
    <div
      className={classNames(
        "w-full p-2 text-sm min-h-8 rounded",
        type === "number" ? "text-center" : "",
        className,
      )}
    >
      {value}
    </div>
  );
};
