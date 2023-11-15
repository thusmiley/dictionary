"use client";

import logo from "../assets/logo.svg";
import moon from "../assets/icon-moon.svg";
import moonPurple from "../assets/icon-moon-purple.svg";

import Image from "next/image";
import { useState, useEffect } from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import useToggler from "@/hooks/useToggler";
import FontSwitcher from "./FontSwitcher";
import fontNames from "@/utils/fonts";
import Link from "next/link";

const NavBar = (props) => {
  const [isDarkTheme, toggleTheme] = useToggler(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme-color") === "dark";
    }
  });

  const [isDropdownExpanded, toggleDropdown] = useToggler(false);

  useEffect(() => {
    document.documentElement.className = isDarkTheme ? "dark" : "";
    localStorage.setItem("theme-color", isDarkTheme ? "dark" : "light");
  }, [isDarkTheme]);

  function selectItem(value) {
    props.applyFont(value);
    toggleDropdown();
  }

  const listItems = Object.entries(fontNames).map(([key, value]) => (
    <li key={key} className={`${value} mb-4 last:mb-0 hover:text-purple `} onClick={() => selectItem(key)}>
      <button>{key}</button>
    </li>
  ));

  return (
    <nav className="w-container flexBetween mx-auto my-8 md:mt-[58px] md:mb-[50px]">
      <Link href='/'><Image src={logo} alt="logo" width={32} height={32} /></Link>
      

      <div className="flexEnd">
        <FontSwitcher applyfont={props.applyFont} currentFont={props.currentFont} toggle={toggleDropdown} isExpanded={isDropdownExpanded}>
          {listItems}
        </FontSwitcher>

        <span className="nav-divider mx-5"></span>

        <div className="flexStart">
          <ThemeSwitcher checked={isDarkTheme} toggle={toggleTheme} />
          <Image src={isDarkTheme ? moonPurple : moon} alt="dark theme" className="object-contain ml-5" width={20} height={20} />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
