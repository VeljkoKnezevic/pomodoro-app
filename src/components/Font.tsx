import { useEffect, useRef } from "react";
import { SettingsState } from "../SettingsState";
import { FontEnum } from "../Enums";

type FontProps = {
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

const Font = ({ settingsToBeApplied, handleClick }: FontProps) => {
  const values = {
    first: FontEnum.KUMBH,
    second: FontEnum.ROBOTO,
    third: FontEnum.SPACEMONO,
  };

  const buttonRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const { font } = settingsToBeApplied;
    let arr: Element[] = [];

    if (buttonRef.current) {
      arr = [...buttonRef.current.children];
    }

    const [first, second, third] = arr;

    if (font === FontEnum.KUMBH) {
      first.setAttribute("style", "background: #161932; color:#ffffff;");
    } else if (font === FontEnum.ROBOTO) {
      second.setAttribute("style", "background: #161932; color:#ffffff;");
    } else if (font === FontEnum.SPACEMONO) {
      third.setAttribute("style", "background: #161932; color:#ffffff;");
    }
  }, [settingsToBeApplied]);

  return (
    <section className="flex flex-col items-center border-y-[1px] border-[#E3E1E1] p-6 md:mx-10 md:flex-row md:justify-between md:px-0">
      <h3 className="text-[11px]/[14px] uppercase tracking-[4.23px] md:text-xs">
        font
      </h3>
      <div ref={buttonRef} className="mt-[18px] flex gap-4 md:mt-0">
        <button
          onClick={(e) => handleClick(e, "font", values)}
          type="button"
          className="h-10 w-10 rounded-full font-kumbh"
        >
          Aa
        </button>
        <button
          onClick={(e) => handleClick(e, "font", values)}
          type="button"
          className="h-10 w-10 rounded-full font-roboto"
        >
          Aa
        </button>
        <button
          onClick={(e) => handleClick(e, "font", values)}
          type="button"
          className="h-10 w-10 rounded-full font-spacemono"
        >
          Aa
        </button>
      </div>
    </section>
  );
};

export default Font;
