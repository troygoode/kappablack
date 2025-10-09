export interface ISkill {
  name: string;
  tooltip: string;
  base?: number;
  multi: false;
}

export interface IMultiSkill {
  name: string;
  tooltip: string;
  multi: true;
}
