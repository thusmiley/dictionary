"use client";

import search from "../assets/icon-search.svg";
import Image from "next/image";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

const SearchBar = (props) => {
  const searchParams = useSearchParams();
  const initialInput = searchParams.get("keyword") ?? "keyboard";

  const [input, setInput] = useState("");
  const [isValid, setIsValid] = useState(true);

  const invalidClass = !isValid ? "border-[1px] border-red" : "";

  useEffect(() => {
    setInput(initialInput);
    props.fetchData(initialInput);
  }, [initialInput]);

  function handleSubmit(e) {
    e.preventDefault();
    if (input.length < 1) {
      setIsValid(false);
      return;
    }
    setIsValid(true);
    searchParams.set("keyword", input);
  }

  return (
    <form
      className="w-container flexBetween mx-auto mb-cx relative searchbox"
      onSubmit={handleSubmit}
    >
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Search for any word..."
        className="w-[90%]"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <Image
        src={search}
        alt="search"
        width={16}
        height={16}
        className="absolute right-6 bg-transparent"
      />
      {/* error message  */}
      {!isValid && (
        <p className="error paragraph absolute -bottom-7 left-0 text-[#ff5252] hidden">
          Whoops, can't be empty...
        </p>
      )}
    </form>
  );
};

export default SearchBar;
