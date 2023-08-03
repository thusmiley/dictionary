"use client";

import { useEffect, useState } from "react";
import Keyword from "@/components/Keyword";
import NavBar from "@/components/NavBar";
import SearchBar from "@/components/SearchBar";
import fontNames from "@/utils/fonts";
import useFetch from "@/hooks/useFetch";

export default function Home() {
  const [keyword, setKeyword] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
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

  async function fetchData(input) {
    useFetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${input}`,
      (data) => {
        setKeyword(data[0]);
      },
      setIsLoading,
      setIsError
    );
  }

  const errorElement = (
    <main className="text-center mt-32 w-container mx-auto">
      {/* no definitions found  */}
      <span className="text-[64px]">😕</span>
      <p className="paragraph font-bold mt-10 mb-6">No Definitions Found</p>
      <p className="paragraph">
        Sorry pal, we couldn't find definitions for the word you were looking
        for. You can try the search again at later time or head to the web
        instead.
      </p>
    </main>
  );

  return (
    <div className={`${fontClass}`}>
      <NavBar currentFont={currentFont} applyFont={setCurrentFont} />
      <SearchBar fetchData={fetchData} />
      {isError && errorElement}
      {!isLoading && !isError && <Keyword data={keyword} isError={isError} />}
    </div>
  );
}
