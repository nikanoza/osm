type FormType = "w" | "d" | "l";

export interface TeamType {
  name: string;
  manager: string;
  logo: string;
  win: number;
  draw: number;
  lose: number;
  points: number;
  gf: number;
  ga: number;
  gd: number;
  form: FormType[];
}
