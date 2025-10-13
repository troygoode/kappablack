"use client";

import { type IWeaponData } from "@/types/data";

import { SheetClose } from "@/components/ui/sheet";
import {
  Item,
  ItemContent,
  ItemTitle,
  ItemDescription,
} from "@/components/ui/item";
import { BrainIcon } from "@/components/ui/icons/lucide-brain";
import { Badge } from "@/components/ui/badge";
import { RulerDimensionLineIcon } from "@/components/ui/icons/lucide-ruler-dimension-line";
import { SkullIcon } from "@/components/ui/icons/lucide-skull";
import { CircleDotDashedIcon } from "@/components/ui/icons/lucide-circle-dot-dashed";
import { TriangleIcon } from "@/components/ui/icons/lucide-triangle";
import { HeartCrackIcon } from "@/components/ui/icons/lucide-heart-crack";
import { ShieldMinusIcon } from "@/components/ui/icons/lucide-shield-minus";
import { CalculatorIcon } from "@/components/ui/icons/lucide-calculator";
import { FlagIcon } from "@/components/ui/icons/lucide-flag";

function expenseToColor(expense: string | undefined) {
  switch (expense) {
    case "Incidental":
      return "text-green-500";
    case "Standard":
      return "text-blue-500";
    case "Unusual":
      return "text-yellow-500";
    case "Major":
      return "text-orange-500";
    case "Extreme":
      return "text-red-500";
    default:
      return "";
  }
}

function labelToVariant(label: string) {
  switch (label) {
    case "Skill":
    case "Victim's Penalty":
      return "secondary";
    case "Damage":
    case "Lethality":
    case "AP":
      return "destructive";
    default:
      return "outline";
  }
}

function WeaponDatapoint({
  label,
  value,
  icon,
}: {
  label: string;
  value: string | number | undefined;
  icon?: React.ReactNode;
}) {
  return value?.toString().length ? (
    icon ? (
      <Badge variant={labelToVariant(label)}>
        {icon}
        <span className="pt-1">{value}</span>
      </Badge>
    ) : (
      <div className="wrap-anywhere">
        <span className="mr-2">{label}:</span>
        <span>{value}</span>
      </div>
    )
  ) : null;
}

export function WeaponItem({
  weapon,
  onClick,
}: {
  weapon: IWeaponData;
  onClick: () => void;
}) {
  return (
    <SheetClose asChild className="mb-2 cursor-pointer">
      <Item
        variant="outline"
        className="hover:dark:bg-zinc-900"
        onClick={onClick}
      >
        <ItemContent>
          <ItemTitle>{weapon.weapon}</ItemTitle>
          <div className="flex flex-wrap gap-1">
            <WeaponDatapoint
              label="Skill"
              value={weapon.skill}
              icon={<BrainIcon width="16" />} // brain
            />
            <WeaponDatapoint
              label="Expense"
              value={weapon.expense}
              icon={
                <TriangleIcon
                  width="16"
                  className={expenseToColor(weapon.expense)}
                />
              }
            />
            <WeaponDatapoint
              label="Damage"
              value={weapon.damage}
              icon={<HeartCrackIcon width="16" />} // heart crack
            />
            <WeaponDatapoint
              label="Lethality"
              value={weapon.lethality}
              icon={<SkullIcon width="16" />} // skull
            />
            <WeaponDatapoint
              label="AP"
              value={weapon.ap}
              icon={<ShieldMinusIcon width="16" />} // shield minus
            />
            <WeaponDatapoint
              label="Range"
              value={weapon.range}
              icon={<RulerDimensionLineIcon width="16" />} // ruler
            />
            <WeaponDatapoint
              label="Radius"
              value={weapon.radius}
              icon={<CircleDotDashedIcon width="16" />} // circle-dot-dashed
            />
            <WeaponDatapoint
              label="Ammo"
              value={weapon.capacity}
              icon={<CalculatorIcon width="16" />} // calculator...
            />
            <WeaponDatapoint
              label="Victim's Penalty"
              value={weapon.penalty}
              icon={<FlagIcon width="16" />} // flag
            />
          </div>
          {weapon.notes?.length && (
            <ItemDescription title={weapon.notes} className="mt-1">
              {weapon.notes}
            </ItemDescription>
          )}
        </ItemContent>
      </Item>
    </SheetClose>
  );
}
