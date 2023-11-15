"use client";

import searchIcon from "../assets/icon-search.svg";
import Image from "next/image";

import { useState, useEffect, useCallback } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

const SearchBar = (props) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const initialInput = searchParams.get("search") ?? "hello";

  const [input, setInput] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    setInput(initialInput);
    props.fetchData(initialInput);
  }, [initialInput]);

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  function handleSubmit(e) {
    e.preventDefault();
    if (input.length < 1) {
      setIsEmpty(true);
      return;
    }
    setIsEmpty(false);
    router.push(pathname + "?" + createQueryString("search", input));
  }

  return (
    <form className={`${isEmpty ? "border-red" : "border-transparent"} w-container flexBetween mx-auto mb-8 relative border-[1px] searchbox md:mb-[50px]`} onSubmit={handleSubmit}>
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
      <Image src={searchIcon} alt="search" width={16} height={16} className="absolute right-6 bg-transparent" />
      {/* error message  */}
      {isEmpty && <p className="text-[12px] absolute -bottom-7 text-red left-0">Whoops, can't be empty...</p>}
    </form>
  );
};

export default SearchBar;
