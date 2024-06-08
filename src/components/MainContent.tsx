import AddTodo from "./AddTodo";
import FilterTodos from "./FilterTodos";
import Todos from "./Todos";
const MainContent = () => {
  return (
    <>
      <AddTodo />
      <FilterTodos/>
      <Todos />
    </>
  );
};

export default MainContent;
