export interface IStat {
  score?: number;
  feature?: string;
}

export interface IBond {
  marked?: boolean;
  description?: string;
  strength?: number;
}

export interface IWeapon {
  description?: string;
  skill?: string;
  range?: string;
  damage?: string;
  ap?: string;
  lethality?: string;
  killRadius?: string;
  ammo?: string;
}

export interface ISpecialTraining {
  description?: string;
  skillOrStat?: string;
}

export interface IAgent {
  // personal
  name?: string;
  profession?: string;
  employer?: string;
  nationality?: string;
  sex?: string;
  sexOther?: string;
  age?: string;
  education?: string;

  // stats
  strength?: IStat;
  dexterity?: IStat;
  constitution?: IStat;
  intelligence?: IStat;
  power?: IStat;
  charisma?: IStat;
  hp?: number;
  wp?: number;
  san?: number;
  bp?: number;
  physicalDescription?: string;

  // pyschological
  bonds?: IBond[];
  motivationsAndDisorders?: string;
  violenceAdaptation?: number;
  helplessnessAdaptation?: number;

  // skills

  // injuries
  wounds?: string;
  firstAidAttempted?: boolean;

  // equipment
  gear?: string;
  weapons?: IWeapon[];

  // remarks
  notes?: string;
  developments?: string;
  specialTraining?: ISpecialTraining[];

  // footer
  player?: string;
}
