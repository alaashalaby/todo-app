import { BiSearch, BiX } from "react-icons/bi";
import logo from "../assets/logo.png";
import SearchBar from "./SearchBar";
import { useState } from "react";
const Navbar = () => {
  const [isSearchBarVisible, setIsSearchBarVisible] = useState(false);
  const handleToggleSearchBar = () => {
    setIsSearchBarVisible(!isSearchBarVisible);
  };
  return (
    <header className="fixed top-0 left-0 z-50 shadow-sm w-full">
      <div className="container mx-auto flex justify-between items-center p-2 relative">
        <img src={logo} alt="todo logo" className="w-16" />
        <nav>
          <button
            onClick={handleToggleSearchBar}
            className="text-xl text-[#D72C63] border border-[#D72C63] p-2 rounded-full transition-all duration-[0.3s] ease-in-out hover:bg-[#D72C63] hover:text-white"
          >
            {isSearchBarVisible ? <BiX /> : <BiSearch />}
          </button>
          {isSearchBarVisible && <SearchBar />}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
