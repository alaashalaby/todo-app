import { useAppDispatch, useAppSelector } from "../app/hooks";
import { setFilter } from "../rtk/features/todos/todoSlice";

const FilterTodos = () => {
  const filter = useAppSelector((state) => state.todoReducer.filter);
  const dispatch = useAppDispatch();
  const handleChangeFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setFilter(e.target.value));
  };
  return (
    <div className="flex items-center justify-center mb-5">
      <select
        className="border border-[#0D0508] outline-none rounded cursor-pointer py-1 text-[#0D0508]"
        value={filter}
        onChange={handleChangeFilter}
      >
        <option value="All">All</option>
        <option value="uncompleted">UnCompleted</option>
        <option value="completed">Completed</option>
      </select>
    </div>
  );
};

export default FilterTodos;
