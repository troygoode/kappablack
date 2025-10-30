"use client";

import Roll from "roll";
import { toast as sonner } from "sonner";

import { DicesIcon } from "../ui/icons/lucide-dices";
import { useAgentStore } from "./stores/agent";

const REGEX_NUMERIC = /^\d+$/;
const roll = new Roll();

function rollToast(
  source: string,
  value?: string,
  publish?: (msg: object) => void,
) {
  if (value && REGEX_NUMERIC.test(value)) {
    const d1 = Math.floor(Math.random() * 10);
    const d2 = Math.floor(Math.random() * 10);
    publish
      ? publish({
          source,
          value,
          d1,
          d2,
        })
      : null;
  } else {
    try {
      const result = roll.roll(value?.toLowerCase() ?? "");
      publish
        ? publish({
            source,
            value,
            result,
          })
        : null;
    } catch {
      sonner.error(`Could not parse roll for ${source}: ${value}`);
    }
  }
}

export function Rollable({
  enabled,
  source,
  value,
  children,
}: React.PropsWithChildren<{
  enabled: boolean;
  source: string;
  value: string | number | undefined;
}>) {
  const publish = useAgentStore((state) => state.publish);
  const roll = () => {
    rollToast(source, value?.toString(), publish);
  };

  if (!enabled) return <>{children}</>;
  return (
    <div
      className={`
        w-full text-center relative cursor-pointer hover:*:block
        hover:bg-zinc-800 hover:text-white hover:dark:bg-white hover:dark:text-black
        `}
      onClick={roll}
      onKeyUp={roll}
    >
      <DicesIcon className="w-[14px] absolute -top-1 -right-0 hidden" />
      {children}
    </div>
  );
}
