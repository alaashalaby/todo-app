import logo from "../assets/logo.png";
import SearchBar from "./SearchBar";
const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 z-50 shadow-sm w-full">
      <div className="container mx-auto flex justify-between items-center p-2">
        <img src={logo} alt="todo logo" className="w-16" />
        <nav>
          <SearchBar />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
