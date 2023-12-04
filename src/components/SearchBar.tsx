import { useState } from "react";
import foodOptions from "../utils/foodOptionsArray";

function SearchBar({
  setFoundItemId,
}: {
  setFoundItemId: React.Dispatch<React.SetStateAction<string | null>>;
}) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    for (const category of foodOptions) {
      const foundItem = category.options.find(
        (item) => item.name.toLowerCase() === searchTerm.toLowerCase()
      );

      if (foundItem) {
        const targetElement = document.getElementById(foundItem.name);

        if (targetElement) {
          setFoundItemId(foundItem.name);

          setTimeout(() => {
            setFoundItemId(null);
          }, 1000);
          targetElement.scrollIntoView({
            behavior: "smooth",
          });
        }
      }
    }
  };
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <section className="flex flex-col mb-20 gap-5">
      <label htmlFor="searchInput" className="text-4xl font-bold">Seja bem vindo!</label>
      <input
        type="text"
        id="searchInput"
        name="searchInput"
        value={searchTerm}
        placeholder="O que voce procura?"
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={handleKeyPress}
        className="bg-gray-200 w-96 h-12 px-3 rounded-lg
        placeholder:text-gray-500 focus:outline-none max-[415px]:w-full"
      />
    </section>
  );
}

export default SearchBar;
