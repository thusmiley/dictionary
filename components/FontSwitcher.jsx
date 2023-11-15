import { useRef } from "react";
import useClick from "@/hooks/useClick";
import chevron from "../assets/icon-arrow-down.svg";
import Image from "next/image";
import { CSSTransition } from "react-transition-group";

const FontSwitcher = (props) => {
  const dropdownRef = useRef(null);
  useClick(dropdownRef, props.isExpanded, props.toggle);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="flexBetween"
        onClick={props.toggle}
        aria-expanded={props.isExpanded}
      >
        <span className="font-bold">{props.currentFont}</span>
        <Image
          src={chevron}
          width={12}
          height={12}
          className="object-contain ml-4"
          alt='arrow down'
        />
      </button>

      <CSSTransition
        in={props.isExpanded}
        timeout={200}
        unmountOnExit
      >
        <ul className="absolute bg-white top-10 right-0 text-dark-2d min-w-[183px] font-bold leading-[1.5rem] rounded-[16px] shadow-xl-light dark:shadow-xl-dark dark:bg-dark-1f dark:text-white z-10 p-6">
          {props.children}
        </ul>
      </CSSTransition>
    </div>
  );
};

export default FontSwitcher;
