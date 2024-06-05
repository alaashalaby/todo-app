import { BiSearch } from "react-icons/bi";
const SearchBar = () => {
  return (
    <form>
      <div className="flex items-center gap-2 px-3 py-1 rounded border border-[#D72C63]">
        <input
          type="text"
          placeholder="Search by Name"
          aria-label="Search"
          className="bg-transparent text-sm placeholder:text-[#0D0508]"
        />
        <BiSearch fontSize="20" color="#D72C63" />
      </div>
    </form>
  );
};

export default SearchBar;
