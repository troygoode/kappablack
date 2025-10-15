"use client";

import { toast as sonner } from "sonner";

import styles from "./rollable.module.css";

import { Toast } from "./toast";
import { ShineBorder } from "../ui/shine-border";
import { DicesIcon } from "../ui/icons/lucide-dices";

function Dice100Toast({
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

  let value = parseInt(d1.toString() + d2.toString());
  if (value === 0) value = 100;

  const isGood = target && value <= target;
  const isBad = target && value > target;
  const match = d1 === d2 || value === 1;

  return (
    <>
      {match && <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />}
      <div className="flex gap-2 items-center justify-start">
        <div
          className={`text-
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

function rollToast(source: string, value?: string) {
  if (value && parseInt(value, 10) > 0) {
    const d1 = Math.floor(Math.random() * 10);
    const d2 = Math.floor(Math.random() * 10);
    sonner.custom(
      (t) => (
        <Toast t={t}>
          <Dice100Toast
            label={`${source} (${value}%)`}
            target={parseInt(value)}
            d1={d1}
            d2={d2}
          />
        </Toast>
      ),
      {
        // duration: 4000 * 60,
      }
    );
  } else {
    sonner.error(`Could not parse roll for ${source}: ${value}`);
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
  const roll = () => {
    rollToast(source, value?.toString());
  };

  if (!enabled) return <>{children}</>;
  return (
    <div
      className={`
        w-full border-1 text-center relative cursor-pointer hover:*:block
        hover:bg-zinc-800 hover:text-white hover:dark:bg-white hover:dark:text-black
        `}
      onClick={roll}
    >
      <DicesIcon className="w-[14px] absolute -top-1 -right-0 hidden" />
      {children}
    </div>
  );
}
