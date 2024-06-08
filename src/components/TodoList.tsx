import { AnimatePresence, motion } from "framer-motion";
import { useAppSelector } from "../app/hooks";
import Todo from "./Todo";
const TodoList = () => {
  const todos = useAppSelector((state) => state.todoReducer.todos);
  return (
    <ul className="flex flex-col gap-4 max-w-2xl mx-auto">
      <AnimatePresence>
        {todos &&
          todos.map((todo) => (
            <motion.li
              key={todo.id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              <Todo todo={todo} />
            </motion.li>
          ))}
      </AnimatePresence>
    </ul>
  );
};

export default TodoList;
