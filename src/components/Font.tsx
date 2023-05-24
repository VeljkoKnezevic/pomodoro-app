import { useEffect, useRef } from "react";
import { SettingsState } from "../SettingsState";

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
    first: "font-kumbh",
    second: "font-roboto",
    third: "font-spacemono",
  };

  const buttonRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const { font } = settingsToBeApplied;
    let arr: Element[] = [];

    if (buttonRef.current) {
      arr = [...buttonRef.current.children];
    }

    const [first, second, third] = arr;

    if (font === "font-kumbh") {
      first.setAttribute("style", "background: #161932; color:#ffffff;");
    } else if (font === "font-roboto") {
      second.setAttribute("style", "background: #161932; color:#ffffff;");
    } else if (font === "font-spacemono") {
      third.setAttribute("style", "background: #161932; color:#ffffff;");
    }
  }, [settingsToBeApplied]);

  return (
    <section className="flex flex-col items-center border-b-[1px] border-[#E3E1E1] p-6">
      <h3 className="text-[11px]/[14px] uppercase tracking-[4.23px]">font</h3>
      <div ref={buttonRef} className="mt-[18px] flex gap-4">
        <button
          onClick={(e) => handleClick(e, "font", values)}
          type="button"
          className="h-10 w-10 rounded-full"
        >
          Aa
        </button>
        <button
          onClick={(e) => handleClick(e, "font", values)}
          type="button"
          className="h-10 w-10 rounded-full"
        >
          Aa
        </button>
        <button
          onClick={(e) => handleClick(e, "font", values)}
          type="button"
          className="h-10 w-10 rounded-full"
        >
          Aa
        </button>
      </div>
    </section>
  );
};

export default Font;
