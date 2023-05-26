import { SetStateAction, useState } from "react";
import { SettingsState } from "../SettingsState";
import Color from "./Color";
import Font from "./Font";
import Time from "./Time";

type SettingsProps = {
  settings: SettingsState;
  setSettings: React.Dispatch<SetStateAction<SettingsState>>;
  setOpenSettings: React.Dispatch<SetStateAction<boolean>>;
};

const Settings = ({
  settings,
  setSettings,
  setOpenSettings,
}: SettingsProps) => {
  const [settingsToBeApplied, setSettingsToBeApplied] = useState<SettingsState>(
    {
      ...settings,
    }
  );

  const handleApplyClick = () => {
    setSettings(settingsToBeApplied);
    setOpenSettings(false);
  };

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    setting: string,
    values: {
      first: string;
      second: string;
      third: string;
    }
  ) => {
    let arr: Element[] = [];

    if (e.currentTarget.parentElement) {
      arr = [...e.currentTarget.parentElement.children];
    }

    arr.forEach((elem) => {
      elem.removeAttribute("style");
    });

    const [first, second, third] = arr;

    if (e.currentTarget === first) {
      setSettingsToBeApplied((prev) => ({ ...prev, [setting]: values.first }));
    } else if (e.currentTarget === second) {
      setSettingsToBeApplied((prev) => ({ ...prev, [setting]: values.second }));
    } else if (e.currentTarget === third) {
      setSettingsToBeApplied((prev) => ({ ...prev, [setting]: values.third }));
    }
  };

  return (
    <section
      className={`${settingsToBeApplied.font} absolute top-11 z-20 w-11/12 rounded-2xl bg-white md:top-[267px] md:w-auto `}
    >
      <div className="flex items-center justify-between p-6 md:px-10 md:py-8">
        <h2 className="text-xl text-dark-blue md:text-3xl">Settings</h2>
        <button
          onClick={() => setOpenSettings(false)}
          type="button"
          className="h-4 w-4 bg-[url(/assets/icon-close.svg)] bg-center bg-no-repeat"
          aria-label="Close settings"
        ></button>
      </div>
      <Time
        setSettingsToBeApplied={setSettingsToBeApplied}
        settingsToBeApplied={settingsToBeApplied}
      />
      <Font
        settingsToBeApplied={settingsToBeApplied}
        handleClick={handleClick}
      />
      <Color
        settingsToBeApplied={settingsToBeApplied}
        handleClick={handleClick}
      />
      <button
        type="button"
        className={`${settingsToBeApplied.color} absolute bottom-[-26px] left-1/2 -translate-x-1/2 rounded-[26.5px] px-12 pb-5 pt-4 text-white`}
        onClick={handleApplyClick}
      >
        Apply
      </button>
    </section>
  );
};

export default Settings;
