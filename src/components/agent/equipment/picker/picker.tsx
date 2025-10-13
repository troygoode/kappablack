"use client";

import { type IWeapon } from "@/types/agent";
import { type IWeaponData } from "@/types/data";

import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { WeaponFilter } from "./filter";

import weapons from "@/data/weapons.json";
import { CreateCustom } from "./create-custom";
import { WeaponItem } from "./weapon-item";
import { useState } from "react";

const weaponData = (weapons.weapons as IWeaponData[]).reduce(
  (acc: Record<string, IWeaponData[]>, weapon: IWeaponData) => {
    if (!acc[weapon.category]) {
      acc[weapon.category] = [];
    }
    acc[weapon.category].push(weapon);
    return acc;
  },
  {} as Record<string, IWeaponData[]>
);

export const WeaponPicker = ({
  add,
  children,
}: React.PropsWithChildren<{
  add: (weapon: IWeaponData) => void;
}>) => {
  const [filter, setFilter] = useState<string>("ALL");

  const createCustom = (type: string) => {
    if (type === "lethal") {
      add({
        category: "Custom",
        weapon: "Custom Lethal Weapon",
        skill: "",
        expense: "None",
      });
    } else {
      add({
        category: "Custom",
        weapon: "Custom Stun Weapon",
        skill: "",
        penalty: "-20%",
        expense: "None",
      });
    }
  };

  const addWeapon = (weapon: IWeaponData) => {
    add(weapon);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent>
        <div className="flex h-full w-full flex-col">
          <SheetHeader>
            <SheetTitle>Add Weapon</SheetTitle>
            <WeaponFilter filter={filter} setFilter={setFilter} />
          </SheetHeader>
          <div className="flex-1 overflow-y-auto px-4">
            {Object.keys(weaponData).map((category, idx) =>
              filter === "ALL" || filter === category ? (
                <div key={idx} className="mb-6">
                  <SheetTitle className="mb-2">{category}</SheetTitle>
                  {weaponData[category].map((weapon, widx) => (
                    <WeaponItem
                      key={widx}
                      weapon={weapon}
                      onClick={() => addWeapon(weapon)}
                    />
                  ))}
                </div>
              ) : null
            )}
          </div>
          <SheetFooter>
            <CreateCustom onClick={createCustom} />
          </SheetFooter>
        </div>
      </SheetContent>
    </Sheet>
  );
};
