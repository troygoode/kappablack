"use client";

import { type IWeapon } from "@/types/agent";

import { Button } from "../ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export const WeaponPicker = ({
  add,
  children,
}: React.PropsWithChildren<{
  add: (weapon: IWeapon) => void;
}>) => {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Select Weapon to Add</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
          <SheetDescription>
            <SheetClose asChild>
              <Button
                className="cursor-pointer"
                onClick={() => {
                  add({});
                }}
              >
                CUSTOM WEAPON
              </Button>
            </SheetClose>
          </SheetDescription>
          <SheetTitle>Hand-to-Hand Weapons</SheetTitle>
          <SheetDescription>
            <ul>
              <li>
                <SheetClose asChild>
                  <Button
                    className="cursor-pointer"
                    onClick={() => {
                      add({
                        weapon: "Unarmed Attack",
                        skill: "Unarmed Combat",
                        damage: "1d4-1",
                      });
                    }}
                  >
                    Unarmed Attack
                  </Button>
                </SheetClose>
              </li>
            </ul>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};
