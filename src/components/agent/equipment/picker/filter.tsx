"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function WeaponFilter({
  filter,
  setFilter,
}: {
  filter: string;
  setFilter: (val: string) => void;
}) {
  return (
    <Select value={filter} onValueChange={setFilter}>
      <SelectTrigger className="cursor-pointer w-full placeholder:text-muted-foreground">
        <SelectValue placeholder="All Weapons" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value={"ALL"} className="cursor-pointer">
            All Weapons
          </SelectItem>

          <SelectLabel>Lethal Weapons</SelectLabel>
          {[
            "Hand-to-Hand Weapons",
            "Firearms",
            "Heavy Weapons",
            "Demolitions",
            "Artillery",
          ].map((cat, idx) => (
            <SelectItem value={cat} className="cursor-pointer" key={idx}>
              {cat}
            </SelectItem>
          ))}

          <SelectLabel>Stun Weapons</SelectLabel>
          {[
            "Tear Gas and Pepper Spray",
            "Stun Grenades",
            "Electroshock Weapons",
          ].map((cat, idx) => (
            <SelectItem value={cat} className="cursor-pointer" key={idx}>
              {cat}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
