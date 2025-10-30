"use client";

import { toast as sonner } from "sonner";

import { Button } from "../ui/button";
import { XIcon } from "../ui/icons/lucide-x";
import { ShineBorder } from "../ui/shine-border";

const Die = ({ value, isMatch }: { value: number; isMatch: boolean }) => (
  <div
    className={`w-[16px] h-[16px]
    items-center justify-center text-center text-[10px] font-bold rounded-[2px]
    ${
      isMatch
        ? "bg-linear-65 from-cyan-600 to-blue-800 text-white"
        : "bg-zinc-300 text-black"
    }
    `}
  >
    <div className="relative">{value}</div>
  </div>
);

export function Dice100Toast({
  label,
  target,
  d1,
  d2,
}: {
  label: string;
  target: number | undefined;
  d1: number;
  d2: number;
}) {
  let value = parseInt(d1.toString() + d2.toString(), 10);
  if (value === 0) value = 100;

  const isGood = target && value <= target;
  const isBad = target && value > target;
  const match = d1 === d2 || value === 1;

  return (
    <>
      {match && <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />}
      <div className="flex gap-2 items-center justify-start">
        <div
          className={`
        w-[48px] h-[48px] text-xl items-center justify-center text-center outline-2 rounded-sm font-bold mr-1
        ${
          isGood
            ? "bg-linear-65 from-lime-500 to-emerald-500 outline-lime-400"
            : isBad
              ? "bg-linear-65 from-amber-500 to-red-500 outline-amber-400"
              : "outline-zinc-600"
        }
        `}
        >
          <div className="relative top-2">{value}</div>
        </div>
        <div className="gap-1">
          <div className="flex gap-1 mb-1">
            <Die value={d1} isMatch={match} />
            <Die value={d2} isMatch={match} />
          </div>
          <div>{label}</div>
        </div>
      </div>
    </>
  );
}

export function DiceToast({
  label,
  total,
  dice,
}: {
  label: string;
  total: number;
  dice: number[];
}) {
  const Die = ({ value, isMatch }: { value: number; isMatch: boolean }) => (
    <div
      className={`w-[16px] h-[16px]
    items-center justify-center text-center text-[10px] font-bold rounded-[2px]
    ${
      isMatch
        ? "bg-linear-65 from-cyan-600 to-blue-800 text-white"
        : "bg-zinc-300 text-black"
    }
    `}
    >
      <div className="relative">{value}</div>
    </div>
  );

  return (
    <div className="flex gap-2 items-center justify-start">
      <div
        className={`
        w-[48px] h-[48px] text-xl items-center justify-center text-center outline-2 rounded-sm font-bold mr-1
      outline-zinc-600
        `}
      >
        <div className="relative top-2">{total}</div>
      </div>
      <div className="gap-1">
        <div className="flex gap-1 mb-1">
          {dice.map((d, idx) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: these are just dice; no natural key
            <Die key={idx} value={d} isMatch={false} />
          ))}
        </div>
        <div>{label}</div>
      </div>
    </div>
  );
}

export function Toast({
  t,
  children,
}: React.PropsWithChildren<{ t: string | number }>) {
  return (
    <div
      className={`
    bg-white dark:bg-zinc-900 text-foreground outline-0 ring ring-muted-foreground/20 shadow-lg
    print:hidden p-4 rounded-md text-[13px] font-medium min-w-80
    relative
    `}
    >
      {children}
      <div className="absolute top-2.5 right-2.5">
        <Button
          onClick={() => sonner.dismiss(t)}
          size="icon-sm"
          className="cursor-pointer outline-0 border-0"
          variant="outline"
        >
          <XIcon />
        </Button>
      </div>
    </div>
  );
}
