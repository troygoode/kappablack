export interface IWeaponData {
  category: string;
  weapon: string;
  skill: string;
  range?: string;
  damage?: string;
  lethality?: number;
  radius?: string;
  ap?: number;
  capacity?: number;
  penalty?: string;
  expense: "None" | "Incidental" | "Standard" | "Unusual" | "Major" | "Extreme";
  notes?: string;
}
