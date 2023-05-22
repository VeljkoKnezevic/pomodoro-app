import { SetStateAction } from "react";
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
        className="bg-[/assets/icon-arrow-up.svg] bg-center bg-no-repeat w-3 h-2 "
        aria-label="increase"
      ></button>
      <button
        type="button"
        className="bg-[/assets/icon-arrow-down.svg] w-3 h-2 "
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
  return (
    <div className="bg-white rounded-2xl absolute z-20 w-11/12 top-11">
      <div className="flex justify-between items-center p-6">
        <h2>Settings</h2>
        <button
          onClick={() => setOpenSettings(false)}
          type="button"
          className="bg-[url(/assets/icon-close.svg)] bg-no-repeat bg-center w-4 h-4"
          aria-label="Close settings"
        ></button>
      </div>
      <section className="p-6 border-y-[1px] border-[#E3E1E1]">
        <h3>Time (minutes)</h3>
        <div className="flex items-center justify-between">
          <p>pomodoro</p>
          <div className="flex items-center justify-between bg-cream text-start pt-4 pr-4 pb-3 pl-4">
            <p>{settings.pomodoro / 60}</p>
            <Buttons />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <p>short break</p>
          <div className="flex items-center justify-between bg-cream text-start pt-4 pr-4 pb-3 pl-4">
            <p>{settings.short / 60}</p>
            <Buttons />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <p>long break</p>
          <div className="flex items-center justify-between bg-cream text-start pt-4 pr-4 pb-3 pl-4">
            <p>{settings.long / 60}</p>
            <Buttons />
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center p-6 border-b-[1px] border-[#E3E1E1]">
        <h2>font</h2>
        <div className="flex gap-4 mt-[18px]">
          <button type="button" className="w-10 h-10 rounded-full">
            Aa
          </button>
          <button type="button" className="w-10 h-10 rounded-full">
            Aa
          </button>
          <button type="button" className="w-10 h-10 rounded-full">
            Aa
          </button>
        </div>
      </section>
      <section className="flex flex-col items-center p-6 pb-16">
        <h2>Color</h2>
        <div className="flex gap-4 mt-[18px]">
          <button
            type="button"
            className="w-10 h-10 rounded-full bg-red"
            aria-label="red"
          ></button>
          <button
            type="button"
            className="w-10 h-10 rounded-full bg-blue"
            aria-label="blue"
          ></button>
          <button
            type="button"
            className="w-10 h-10 rounded-full bg-pink"
            aria-label="pink"
          ></button>
        </div>
      </section>
      <button
        type="button"
        className={`${settings.color} pt-4 px-12 pb-5 rounded-[26.5px] text-white absolute bottom-[-26px] left-1/2 -translate-x-1/2`}
      >
        Apply
      </button>
    </div>
  );
};

export default Settings;
