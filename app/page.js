"use client";

import { useEffect, useState } from "react";
import Dictionary from "@/components/Dictionary";
import NavBar from "@/components/NavBar";
import SearchBar from "@/components/SearchBar";
import fontNames from "@/utils/fonts";

export default function Home() {
  const [currentFont, setCurrentFont] = useState(
    localStorage.getItem("current-font") ?? "Sans Serif"
  );

  const fontClass = fontNames[currentFont];

  useEffect(() => {
    localStorage.setItem("current-font", currentFont);
  }, [currentFont]);

  return (
    <div className={`${fontClass}`}>
      <NavBar currentFont={currentFont} applyFont={setCurrentFont} />
      <SearchBar />
      <Dictionary />
    </div>
  );
}
