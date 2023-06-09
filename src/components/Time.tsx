import { SetStateAction, useRef } from "react";
import { SettingsState } from "../SettingsState";

type ButtonsProps = {
  handleButtons: (e: React.MouseEvent<HTMLButtonElement>) => {
    increment: () => void;
    decrement: () => void;
  };
};

const Buttons = ({ handleButtons }: ButtonsProps) => {
  return (
    <div className="flex flex-col items-center gap-1">
      <button
        type="button"
        className="h-2 w-3 bg-[url(/assets/icon-arrow-up.svg)] bg-center bg-no-repeat "
        aria-label="increase"
        onClick={(e) => handleButtons(e).increment()}
      ></button>
      <button
        type="button"
        className="h-2 w-4 bg-[url(/assets/icon-arrow-down.svg)] bg-center bg-no-repeat "
        aria-label="decrease"
        onClick={(e) => handleButtons(e).decrement()}
      ></button>
    </div>
  );
};

type TimeProps = {
  settingsToBeApplied: SettingsState;
  setSettingsToBeApplied: React.Dispatch<SetStateAction<SettingsState>>;
};

const Time = ({ settingsToBeApplied, setSettingsToBeApplied }: TimeProps) => {
  const timerRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  const handleButtons = (e: React.MouseEvent<HTMLButtonElement>) => {
    let arr: Element[] = [];

    if (timerRef.current) {
      arr = [...timerRef.current.children];
    }

    const [first, second, third] = arr;

    const parentDiv =
      e.currentTarget.parentElement?.parentElement?.parentElement;

    const increment = () => {
      if (parentDiv === first) {
        setSettingsToBeApplied((prev) => ({
          ...prev,
          pomodoro: prev.pomodoro + 60,
        }));
      } else if (parentDiv === second) {
        setSettingsToBeApplied((prev) => ({
          ...prev,
          short: prev.short + 60,
        }));
      } else if (parentDiv === third) {
        setSettingsToBeApplied((prev) => ({
          ...prev,
          long: prev.long + 60,
        }));
      }
    };

    const decrement = () => {
      if (parentDiv === first) {
        setSettingsToBeApplied((prev) => ({
          ...prev,
          pomodoro: settingsToBeApplied.pomodoro > 60 ? prev.pomodoro - 60 : 60,
        }));
      } else if (parentDiv === second) {
        setSettingsToBeApplied((prev) => ({
          ...prev,
          short: settingsToBeApplied.short > 60 ? prev.short - 60 : 60,
        }));
      } else if (parentDiv === third) {
        setSettingsToBeApplied((prev) => ({
          ...prev,
          long: settingsToBeApplied.long > 60 ? prev.long - 60 : 60,
        }));
      }
    };

    return { increment, decrement };
  };

  return (
    <section className="border-t-[1px] border-[#E3E1E1] p-6 md:px-10 md:py-6">
      <h3 className="text-center text-[11px]/[14px] uppercase tracking-[4.23px] md:text-start md:text-sm">
        Time (minutes)
      </h3>
      <div
        ref={timerRef}
        className="mt-4 flex flex-col gap-2 md:mt-6 md:flex-row md:gap-5"
      >
        <div
          id="pomodoro"
          className="flex items-center justify-between md:flex-col md:items-start md:gap-2"
        >
          <p className="text-xs text-dark-blue opacity-40">pomodoro</p>
          <div className="flex w-36 items-center justify-between rounded-xl bg-cream pb-3 pl-4 pr-4 pt-4 text-start">
            <p>{settingsToBeApplied.pomodoro / 60}</p>
            <Buttons handleButtons={handleButtons} />
          </div>
        </div>
        <div
          id="short"
          className=" flex items-center justify-between md:flex-col md:items-start"
        >
          <p className="text-xs text-dark-blue opacity-40">short break</p>
          <div className="flex w-36 items-center justify-between rounded-xl bg-cream pb-3 pl-4 pr-4 pt-4 text-start">
            <p>{settingsToBeApplied.short / 60}</p>
            <Buttons handleButtons={handleButtons} />
          </div>
        </div>
        <div
          id="long"
          className=" flex items-center justify-between md:flex-col md:items-start"
        >
          <p className="text-xs text-dark-blue opacity-40">long break</p>
          <div className="flex w-36 items-center justify-between rounded-xl bg-cream pb-3 pl-4 pr-4 pt-4 text-start">
            <p>{settingsToBeApplied.long / 60}</p>
            <Buttons handleButtons={handleButtons} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Time;
