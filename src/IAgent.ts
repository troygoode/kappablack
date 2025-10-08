interface IStat {
  score?: number;
  distinguishingFeature?: string;
}

interface IBond {
  description?: string;
  strength?: number;
}

interface IWeapon {
  description?: string;
  skill?: string;
  range?: string;
  damage?: string;
  ap?: string;
  lethality?: string;
  killRadius?: string;
  ammo?: string;
}

interface ISpecialTraining {
  description?: string;
  skillOrStat?: string;
}

interface IAgent {
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
}

export { type IAgent };
