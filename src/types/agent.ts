export interface IStat {
  score?: number;
  feature?: string;
}

export interface IBond {
  marked?: boolean;
  bond?: string;
  score?: number;
}

export interface IWeapon {
  weapon?: string;
  skill?: string;
  range?: string;
  damage?: string;
  ap?: string;
  lethality?: string;
  killRadius?: string;
  ammo?: string;
}

export interface ISpecialTraining {
  training?: string;
  skillOrStat?: string;
}

export interface IAgentSkill {
  skill?: string;
  type?: string;
  score?: number;
  marked?: boolean;
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
  skills?: IAgentSkill[];

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
