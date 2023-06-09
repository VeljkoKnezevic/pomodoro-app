import { useRef, useEffect } from "react";
import { SettingsState } from "../SettingsState";
import { ColorEnum } from "../Enums";

type ColorProps = {
  settingsToBeApplied: SettingsState;
  handleClick: (
    e: React.MouseEvent<HTMLButtonElement>,
    setting: string,
    values: {
      first: string;
      second: string;
      third: string;
    }
  ) => void;
};

const Color = ({ settingsToBeApplied, handleClick }: ColorProps) => {
  const buttonRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const { color } = settingsToBeApplied;
    let arr: Element[] = [];

    if (buttonRef.current) {
      arr = [...buttonRef.current.children];
    }

    const [first, second, third] = arr;

    if (color === ColorEnum.RED) {
      first.setAttribute(
        "style",
        "background-image:url(/assets/icon-check.svg)"
      );
    } else if (color === ColorEnum.BLUE) {
      second.setAttribute(
        "style",
        "background-image:url(/assets/icon-check.svg)"
      );
    } else if (color === ColorEnum.PINK) {
      third.setAttribute(
        "style",
        "background-image:url(/assets/icon-check.svg)"
      );
    }
  }, [settingsToBeApplied]);

  const values = {
    first: ColorEnum.RED,
    second: ColorEnum.BLUE,
    third: ColorEnum.PINK,
  };

  return (
    <section className="flex flex-col items-center p-6 pb-16 md:mx-10 md:flex-row md:justify-between md:px-0">
      <h3 className="text-[11px]/[14px] uppercase tracking-[4.23px]">Color</h3>
      <div ref={buttonRef} className="mt-[18px] flex gap-4 md:mt-0">
        <button
          type="button"
          className="h-10 w-10 rounded-full bg-red"
          aria-label="red"
          value="first"
          onClick={(e) => handleClick(e, "color", values)}
        ></button>
        <button
          type="button"
          className="h-10 w-10 rounded-full bg-blue"
          aria-label="blue"
          value="second"
          onClick={(e) => handleClick(e, "color", values)}
        ></button>
        <button
          type="button"
          className="h-10 w-10 rounded-full bg-pink"
          aria-label="pink"
          onClick={(e) => handleClick(e, "color", values)}
          value="third"
        ></button>
      </div>
    </section>
  );
};

export default Color;
