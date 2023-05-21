import { useState } from "react";
import "./style.css";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const children = ({ remainingTime = 1500 }) => {
  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;

  return (
    <div className="flex flex-col items-center">
      <p className="text-[80px]">
        {`${minutes < 10 ? `0${minutes}` : minutes}: 
        ${seconds < 10 ? `0${seconds}` : seconds}`}
      </p>
      <p>Pause</p>
    </div>
  );
};

enum SelectedEnum {
  FIRST = "first",
  SECOND = "second",
  THIRD = "third",
}

const App = () => {
  const [selected, setSelected] = useState<SelectedEnum>(SelectedEnum.FIRST);

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
    <>
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
              selected === SelectedEnum.FIRST && "bg-blue text-dark-blue"
            } py-4 px-6 text-grey rounded-3xl`}
          >
            pomodoro
          </button>
          <button
            type="button"
            onClick={handleClick}
            name="second"
            className={`${
              selected === SelectedEnum.SECOND && "bg-blue text-dark-blue"
            } py-4 px-6 text-grey rounded-3xl`}
          >
            short break
          </button>
          <button
            type="button"
            name="third"
            onClick={handleClick}
            className={`${
              selected === SelectedEnum.THIRD && "bg-blue text-dark-blue"
            } py-4 px-6 text-grey rounded-3xl`}
          >
            long break
          </button>
        </section>
      </header>
      <main>
        <CountdownCircleTimer
          isPlaying
          duration={1500}
          colors="#004777"
          size={250}
          onComplete={() => console.log("Timer completed")}
        >
          {children}
        </CountdownCircleTimer>

        <button
          type="button"
          className="w-7 h-7 bg-[url(/assets/icon-settings.svg)]"
          aria-label="Settings"
        ></button>
      </main>
    </>
  );
};

export default App;
