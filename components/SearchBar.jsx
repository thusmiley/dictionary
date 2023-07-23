import search from "../assets/icon-search.svg";
import Image from "next/image";

const SearchBar = () => {
  return (
    <section className="w-container flexBetween mx-auto mb-cx relative searchbox">
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Search for any word..."
        className="w-[90%]"
      />
      <Image
        src={search}
        alt="search"
        width={16}
        height={16}
        className="absolute right-6 bg-transparent"
      />
      {/* error message  */}
      <p className="error paragraph absolute -bottom-7 left-0 text-[#ff5252] hidden">
        Whoops, can't be empty...
      </p>
    </section>
  );
};

export default SearchBar;
