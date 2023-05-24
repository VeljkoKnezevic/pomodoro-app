import { SetStateAction } from "react";
import { SelectedEnum } from "../Enums";
import { SettingsState } from "../SettingsState";

type HeaderProps = {
  selected: SelectedEnum;
  setSelected: React.Dispatch<SetStateAction<SelectedEnum>>;
  settings: SettingsState;
};

const Header = ({ selected, setSelected, settings }: HeaderProps) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (e.currentTarget.name === "first") {
      setSelected(SelectedEnum.FIRST);
    } else if (e.currentTarget.name === "second") {
      setSelected(SelectedEnum.SECOND);
    } else {
      setSelected(SelectedEnum.THIRD);
    }
  };
  return (
    <header className="flex flex-col items-center pt-8 md:pt-20">
      <h1>
        <img src="/assets/logo.svg" alt="pomodoro logo" />
      </h1>
      <section className="mx-6 mt-12 flex rounded-[31.5px] bg-gunmetal px-[6px] py-2 text-xs md:mt-14 md:gap-4 md:text-sm">
        <button
          type="button"
          name="first"
          onClick={handleClick}
          className={`${
            selected === SelectedEnum.FIRST
              ? `${settings.color} text-dark-blue opacity-100`
              : "text-grey opacity-40"
          } rounded-3xl px-5  py-4 md:px-6 `}
        >
          pomodoro
        </button>
        <button
          type="button"
          onClick={handleClick}
          name="second"
          className={`${
            selected === SelectedEnum.SECOND
              ? `${settings.color} text-dark-blue opacity-100`
              : "text-grey opacity-40"
          } rounded-3xl px-6 py-4 md:px-6`}
        >
          short break
        </button>
        <button
          type="button"
          name="third"
          onClick={handleClick}
          className={`${
            selected === SelectedEnum.THIRD
              ? `${settings.color} text-dark-blue opacity-100`
              : "text-grey opacity-40"
          } rounded-3xl px-6  py-4 md:px-6 `}
        >
          long break
        </button>
      </section>
    </header>
  );
};

export default Header;
