import { useEffect, useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { SelectedEnum } from "../Enums";
import { SettingsState } from "../SettingsState";
import useWindowDimensions from "../hooks/useWindowDimensions";

type CountdownTimerProps = {
  selected: SelectedEnum;
  settings: SettingsState;
};

const children = ({ remainingTime = 1500 }) => {
  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;

  return (
    <div className="flex flex-col items-center">
      <p className="text-[80px] text-grey md:text-[100px]">
        {`${minutes < 10 ? `0${minutes}` : minutes}:${
          seconds < 10 ? `0${seconds}` : seconds
        }`}
      </p>
    </div>
  );
};

const CountdownTimer = ({ selected, settings }: CountdownTimerProps) => {
  const [counter, setCounter] = useState({
    completed: false,
    time: settings.pomodoro,
    playing: true,
    key: 0,
  });

  const { completed, time, playing, key } = counter;
  const { width } = useWindowDimensions();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { value } = e.currentTarget;

    if (value === "pause") {
      setCounter((prev) => ({ ...prev, playing: !playing }));
    } else {
      // Value is restart
      setCounter((prev) => ({ ...prev, key: prev.key + 1, completed: false }));
    }
  };

  // Resets the counter state based on the selected button
  const calcTime = () => {
    if (selected === SelectedEnum.FIRST) {
      setCounter((prev) => ({
        ...prev,
        time: settings.pomodoro,
        key: prev.key + 1,
        playing: true,
      }));
    } else if (selected === SelectedEnum.SECOND) {
      setCounter((prev) => ({
        ...prev,
        time: settings.short,
        key: prev.key + 1,
        playing: true,
      }));
    } else {
      setCounter((prev) => ({
        ...prev,
        time: settings.long,
        key: prev.key + 1,
        playing: true,
      }));
    }
  };

  // Calls the function when the selected button is changed
  useEffect(() => {
    calcTime();
  }, [selected, settings]);

  const colorConverter = (): string => {
    if (settings.color === "bg-red") {
      return "f87070";
    }
    if (settings.color === "bg-blue") {
      return "70f3f8";
    }

    return "d881f8";
  };

  return (
    <div className="timer-parent relative mt-12 flex h-[300px] w-[300px] flex-col items-center justify-center rounded-full md:mt-[109px] md:h-[410px] md:w-[410px] lg:mt-11">
      <CountdownCircleTimer
        isPlaying={playing}
        duration={time}
        key={key}
        colors={`#${colorConverter()}`}
        rotation="counterclockwise"
        size={width < 768 ? 268 : 366}
        onComplete={() => setCounter((prev) => ({ ...prev, completed: true }))}
        trailColor="#161932"
      >
        {children}
      </CountdownCircleTimer>
      <button
        onClick={handleClick}
        value={completed ? "restart" : "pause"}
        className={`absolute bottom-20 left-1/2 -translate-x-1/2 text-sm uppercase tracking-[13px] text-white hover:text-[#${colorConverter()}] md:bottom-24 md:text-base `}
        type="button"
      >
        {completed ? "restart" : "pause"}
      </button>
    </div>
  );
};

export default CountdownTimer;
