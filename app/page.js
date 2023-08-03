"use client";

import { useEffect, useState } from "react";
import Dictionary from "@/components/Dictionary";
import NavBar from "@/components/NavBar";
import SearchBar from "@/components/SearchBar";
import fontNames from "@/utils/fonts";

export default function Home() {
  const [currentFont, setCurrentFont] = useState(() => {
    if (
      typeof window !== "undefined" &&
      localStorage.getItem("current-font") !== null
      ) {
      return localStorage.getItem("current-font");
    } else {
      return "Serif";
    }
  });

  useEffect(() => {
    localStorage.setItem("current-font", currentFont);
  }, [currentFont]);

  const fontClass = fontNames[currentFont];

  return (
    <div className={`${fontClass} `}>
      <NavBar currentFont={currentFont} applyFont={setCurrentFont} />
      <SearchBar />
      <Dictionary />
    </div>
  );
}
