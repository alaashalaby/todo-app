import { BiSearch } from "react-icons/bi";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { setSearchQuery } from "../rtk/features/todos/todoSlice";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
const SearchBar = () => {
  const searchQuery = useAppSelector((state) => state.todoReducer.searchQuery);
  const dispatch = useAppDispatch();
  const handleSearchQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery(e.target.value));
  };
  const {t}=useTranslation()
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.5 }}
      className="absolute top-20 right-0 w-full h-full 
   mt-3 mb-10 px-4"
    >
      <form>
        <div className="flex items-center gap-2 px-3 py-1 rounded border border-[#D72C63]">
          <input
            type="text"
            placeholder={t("searchPlaceholder")}
            aria-label="Search"
            value={searchQuery}
            onChange={handleSearchQueryChange}
            className="bg-transparent text-sm placeholder:text-[#0D0508] outline-none w-full"
          />
          <BiSearch fontSize="20" color="#D72C63" />
        </div>
      </form>
    </motion.div>
  );
};

export default SearchBar;
