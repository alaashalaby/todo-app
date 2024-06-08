import { useAppSelector } from "../app/hooks";
import NoData from "./NoData";
import TodoList from "./TodoList";
const Todos = () => {
  const todos = useAppSelector((state) => state.todoReducer.todos);
  return (
    <div className="mx-4">{todos.length === 0 ? <NoData /> : <TodoList />}</div>
  );
};

export default Todos;
