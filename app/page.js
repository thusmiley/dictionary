import Dictionary from "@/components/Dictionary";
import NavBar from "@/components/NavBar";
import SearchBar from "@/components/SearchBar";

export default function Home() {
  return (
    <main>
      <NavBar />
      <SearchBar />
      <Dictionary />
    </main>
  );
}
