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
    <header className="flex flex-col items-center pt-8">
      <h1>
        <img src="/assets/logo.svg" alt="pomodoro logo" />
      </h1>
      <section className="mt-12 mx-6 flex bg-gunmetal text-xs py-2 px-[6px] rounded-[31.5px]">
        <button
          type="button"
          name="first"
          onClick={handleClick}
          className={`${
            selected === SelectedEnum.FIRST
              ? `${settings.color} text-dark-blue opacity-100`
              : "text-grey opacity-40"
          } py-4 px-5  rounded-3xl`}
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
          } py-4 px-6 rounded-3xl`}
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
          } py-4 px-6  rounded-3xl`}
        >
          long break
        </button>
      </section>
    </header>
  );
};

export default Header;
