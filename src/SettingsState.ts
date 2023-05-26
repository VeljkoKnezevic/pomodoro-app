import { ColorEnum, FontEnum } from "./Enums";

export type SettingsState = {
  pomodoro: number;
  short: number;
  long: number;
  font: FontEnum;
  color: ColorEnum;
};
