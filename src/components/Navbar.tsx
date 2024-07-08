import { BiSearch, BiX } from "react-icons/bi";
import logo from "../assets/logo.png";
import SearchBar from "./SearchBar";
import { useState } from "react";
import ChangeLangButtons from "./ChangeLangButtons";
const Navbar = () => {
  const [isSearchBarVisible, setIsSearchBarVisible] = useState(false);
  const handleToggleSearchBar = () => {
    setIsSearchBarVisible(!isSearchBarVisible);
  };
  return (
    <header className="fixed top-0 left-0 z-50 shadow-md md:shadow-sm w-full">
      <div className="container mx-auto flex justify-between items-center p-2 relative">
        <img src={logo} alt="todo logo" className="w-16" />
        <nav className="flex gap-3 items-center">
          <button
            onClick={handleToggleSearchBar}
            className="text-xl text-[#D72C63] border border-[#D72C63] p-2 rounded-full transition-all duration-[0.3s] ease-in-out hover:bg-[#D72C63] hover:text-white"
          >
            {isSearchBarVisible ? <BiX /> : <BiSearch />}
          </button>
          <ChangeLangButtons/>
          {isSearchBarVisible && <SearchBar />}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
