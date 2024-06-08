import { BiSearch } from "react-icons/bi";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { setSearchQuery } from "../rtk/features/todos/todoSlice";
const SearchBar = () => {
  const searchQuery = useAppSelector(state => state.todoReducer.searchQuery)
  const dispatch = useAppDispatch()
  const handleSearchQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery(e.target.value))
  }
  return (
    <form>
      <div className="flex items-center gap-2 px-3 py-1 rounded border border-[#D72C63]">
        <input
          type="text"
          placeholder="Search by Name"
          aria-label="Search"
          value={searchQuery}
          onChange={handleSearchQueryChange}
          className="bg-transparent text-sm placeholder:text-[#0D0508] outline-none"
        />
        <BiSearch fontSize="20" color="#D72C63" />
      </div>
    </form>
  );
};

export default SearchBar;
