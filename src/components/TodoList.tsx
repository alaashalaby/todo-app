import { AnimatePresence, motion } from "framer-motion";
import { useAppSelector } from "../app/hooks";
import Todo from "./Todo";
import { BiSad } from "react-icons/bi";
const TodoList = () => {
  const todos = useAppSelector((state) => state.todoReducer.todos);
  const filter = useAppSelector((state) => state.todoReducer.filter);
  const searchQuery = useAppSelector((state) => state.todoReducer.searchQuery);
  const filterTodos = todos.filter((todo) => {
    const matchFilter =
      filter === "All" ||
      (filter === "completed" && todo.isCompleted) ||
      (filter === "uncompleted" && !todo.isCompleted);
    const matchSearchQuery = todo.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchFilter && matchSearchQuery;
  });
  return (
    <ul className="flex flex-col gap-4 max-w-2xl mx-auto">
      <AnimatePresence>
        {filterTodos.length > 0 ? (
          filterTodos.map((todo) => (
            <motion.li
              key={todo.id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              <Todo todo={todo} />
            </motion.li>
          ))
        ) : (
          <div className="flex items-center justify-center text-[#D72C63] text-3xl my-8">
            No Matches!! <BiSad className="ms-2"/>
          </div>
        )}
      </AnimatePresence>
    </ul>
  );
};

export default TodoList;
