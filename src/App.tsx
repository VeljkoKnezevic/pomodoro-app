import { useState } from "react";
import "./style.css";
import { SelectedEnum } from "./Enums";
import CountdownTimer from "./components/CountdownTimer";
import Header from "./components/Header";
import Settings from "./components/Settings";
import { SettingsState } from "./SettingsState";

const App = () => {
  const [selected, setSelected] = useState<SelectedEnum>(SelectedEnum.FIRST);
  const [openSettings, setOpenSettings] = useState(false);
  const [settings, setSettings] = useState({
    pomodoro: 1500,
    short: 300,
    long: 900,
    font: "font-kumbh",
    color: "bg-red",
  });

  return (
    <>
      {openSettings && (
        <div className="w-full h-full absolute z-10 bg-[rgba(10,12,28,0.5)]" />
      )}
      <Header
        selected={selected}
        setSelected={setSelected}
        settings={settings}
      />
      <main className="flex flex-col items-center">
        <CountdownTimer selected={selected} settings={settings} />
        <button
          type="button"
          className="w-7 h-7 bg-[url(/assets/icon-settings.svg)] mt-20"
          aria-label="Settings"
          onClick={() => setOpenSettings(true)}
        ></button>
        {openSettings && (
          <Settings
            settings={settings}
            setSettings={setSettings}
            setOpenSettings={setOpenSettings}
          />
        )}
      </main>
    </>
  );
};

export default App;
