import { Children, SetStateAction, useEffect, useRef, useState } from "react";
import { SettingsState } from "../SettingsState";

type SettingsProps = {
  settings: SettingsState;
  setSettings: React.Dispatch<SetStateAction<SettingsState>>;
  setOpenSettings: React.Dispatch<SetStateAction<boolean>>;
};

const Buttons = () => {
  return (
    <div className="flex flex-col">
      <button
        type="button"
        className="h-2 w-3 bg-[/assets/icon-arrow-up.svg] bg-center bg-no-repeat "
        aria-label="increase"
      ></button>
      <button
        type="button"
        className="h-2 w-3 bg-[/assets/icon-arrow-down.svg] "
        aria-label="decrease"
      ></button>
    </div>
  );
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

  const handleColorClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    let arr: Element[] = [];

    if (e.currentTarget.parentElement) {
      arr = [...e.currentTarget.parentElement.children];
    }

    arr.forEach((elem) => {
      elem.removeAttribute("style");
    });

    const [first, second, third] = arr;

    if (e.currentTarget === first) {
      setSettingsToBeApplied((prev) => ({ ...prev, color: "bg-red" }));
    } else if (e.currentTarget === second) {
      setSettingsToBeApplied((prev) => ({ ...prev, color: "bg-blue" }));
    } else if (e.currentTarget === third) {
      setSettingsToBeApplied((prev) => ({ ...prev, color: "bg-pink" }));
    }
  };

  const buttonRef = useRef<Element>();

  // Add check bg image to the color pickers
  useEffect(() => {
    const { color } = settingsToBeApplied;
    let arr: Element[] = [];

    if (buttonRef.current) {
      arr = [...buttonRef.current.children];
    }

    const [first, second, third] = arr;

    if (color === "bg-red") {
      first.setAttribute(
        "style",
        "background-image:url(/assets/icon-check.svg)"
      );
    } else if (color === "bg-blue") {
      second.setAttribute(
        "style",
        "background-image:url(/assets/icon-check.svg)"
      );
    } else if (color === "bg-pink") {
      third.setAttribute(
        "style",
        "background-image:url(/assets/icon-check.svg)"
      );
    }
  }, [settingsToBeApplied]);

  return (
    <div className="absolute top-11 z-20 w-11/12 rounded-2xl bg-white">
      <div className="flex items-center justify-between p-6">
        <h2 className="text-xl text-dark-blue ">Settings</h2>
        <button
          onClick={() => setOpenSettings(false)}
          type="button"
          className="h-4 w-4 bg-[url(/assets/icon-close.svg)] bg-center bg-no-repeat"
          aria-label="Close settings"
        ></button>
      </div>
      <section className="border-y-[1px] border-[#E3E1E1] p-6">
        <h3 className="text-center text-[11px]/[14px] uppercase tracking-[4.23px]">
          Time (minutes)
        </h3>
        <div className="mt-4 flex items-center justify-between">
          <p>pomodoro</p>
          <div className="flex w-36 items-center justify-between rounded-xl bg-cream pb-3 pl-4 pr-4 pt-4 text-start">
            <p>{settings.pomodoro / 60}</p>
            <Buttons />
          </div>
        </div>
        <div className="mt-2 flex items-center justify-between">
          <p>short break</p>
          <div className="flex w-36 items-center justify-between rounded-xl bg-cream pb-3 pl-4 pr-4 pt-4 text-start">
            <p>{settings.short / 60}</p>
            <Buttons />
          </div>
        </div>
        <div className="mt-2 flex items-center justify-between">
          <p>long break</p>
          <div className="flex w-36 items-center justify-between rounded-xl bg-cream pb-3 pl-4 pr-4 pt-4 text-start">
            <p>{settings.long / 60}</p>
            <Buttons />
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center border-b-[1px] border-[#E3E1E1] p-6">
        <h3 className="text-[11px]/[14px] uppercase tracking-[4.23px]">font</h3>
        <div className="mt-[18px] flex gap-4">
          <button type="button" className="h-10 w-10 rounded-full">
            Aa
          </button>
          <button type="button" className="h-10 w-10 rounded-full">
            Aa
          </button>
          <button type="button" className="h-10 w-10 rounded-full">
            Aa
          </button>
        </div>
      </section>
      <section className="flex flex-col items-center p-6 pb-16">
        <h3 className="text-[11px]/[14px] uppercase tracking-[4.23px]">
          Color
        </h3>
        <div ref={buttonRef} className="mt-[18px] flex gap-4">
          <button
            type="button"
            className="h-10 w-10 rounded-full bg-red"
            aria-label="red"
            value="first"
            onClick={handleColorClick}
          ></button>
          <button
            type="button"
            className="h-10 w-10 rounded-full bg-blue"
            aria-label="blue"
            value="second"
            onClick={handleColorClick}
          ></button>
          <button
            type="button"
            className="h-10 w-10 rounded-full bg-pink"
            aria-label="pink"
            onClick={handleColorClick}
            value="third"
          ></button>
        </div>
      </section>
      <button
        type="button"
        className={`${settingsToBeApplied.color} absolute bottom-[-26px] left-1/2 -translate-x-1/2 rounded-[26.5px] px-12 pb-5 pt-4 text-white`}
        onClick={handleApplyClick}
      >
        Apply
      </button>
    </div>
  );
};

export default Settings;
