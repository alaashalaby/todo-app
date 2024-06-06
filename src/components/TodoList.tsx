import Todo from "./Todo"

const TodoList = () => {
  return (
    <ul className="flex flex-col gap-4 max-w-2xl mx-auto">
      <Todo />
      <Todo />
    </ul>
  );
}

export default TodoList
