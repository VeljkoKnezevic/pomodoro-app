import { useEffect, useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { SelectedEnum } from "../Enums";
import { SettingsState } from "../SettingsState";

type CountdownTimerProps = {
  selected: SelectedEnum;
  settings: SettingsState;
};

const children = ({ remainingTime = 1500 }) => {
  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;

  return (
    <div className="flex flex-col items-center">
      <p className="text-[80px] text-grey">
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
    time: 1500,
    playing: true,
    key: 0,
  });

  const { completed, time, playing, key } = counter;

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
        time: 1500,
        key: prev.key + 1,
        playing: true,
      }));
    } else if (selected === SelectedEnum.SECOND) {
      setCounter((prev) => ({
        ...prev,
        time: 300,
        key: prev.key + 1,
        playing: true,
      }));
    } else {
      setCounter((prev) => ({
        ...prev,
        time: 900,
        key: prev.key + 1,
        playing: true,
      }));
    }
  };

  // Calls the function when the selected button is changed
  useEffect(() => {
    calcTime();
  }, [selected]);

  const colorConverter = (): string => {
    if (settings.color === "bg-red") {
      return "F87070";
    }
    if (settings.color === "bg-blue") {
      return "70F3F8";
    }

    return "D881F8";
  };

  return (
    <div className="relative timer-parent rounded-full w-[300px] flex flex-col items-center justify-center h-[300px] mt-12">
      <CountdownCircleTimer
        isPlaying={playing}
        duration={time}
        key={key}
        colors={`#${colorConverter()}`}
        rotation="counterclockwise"
        size={268}
        onComplete={() => setCounter((prev) => ({ ...prev, completed: true }))}
        trailColor="#161932"
      >
        {children}
      </CountdownCircleTimer>
      <button
        onClick={handleClick}
        value={completed ? "restart" : "pause"}
        className="absolute bottom-20 left-1/2 -translate-x-1/2 text-grey text-sm tracking-[13px] uppercase"
        type="button"
      >
        {completed ? "restart" : "pause"}
      </button>
    </div>
  );
};

export default CountdownTimer;
