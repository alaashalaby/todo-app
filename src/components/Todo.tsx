import { BiEdit, BiTrash } from "react-icons/bi";
import { useAppDispatch } from "../app/hooks";
import { deleteTodo, toggleTodo } from "../rtk/features/todos/todoSlice";
import { useState } from "react";
import UpdateTodo from "./UpdateTodo";
const Todo = ({ todo }: { todo: Todo }) => {
  const dispatch = useAppDispatch();
  const [isUpdated, setIsUpdated] = useState(false);
  const handleDeleteTodo = (id: string) => {
    dispatch(deleteTodo(id));
  };
  const handleToggle = (id: string) => {
    dispatch(toggleTodo(id));
  };
  return (
    <div className="flex items-center justify-between p-3 rounded bg-[#F5F5F5] shadow-md ">
      {isUpdated ? (
        <UpdateTodo todo={todo} setIsUpdated={setIsUpdated} />
      ) : (
        <>
          <label className="flex items-center flex-1 relative cursor-pointer">
            <input
              type="checkbox"
              checked={todo.isCompleted}
              className="hidden peer"
              onChange={() => handleToggle(todo.id)}
            />
            <span className="w-5 h-5 rounded-full border border-[#D72C63] absolute left-0 peer-checked:bg-[#D72C63] peer-checked:text-white peer-checked:text-sm peer-checked:font-bold flex items-center justify-center ">
              {todo.isCompleted && "✓"}
            </span>
            <span
              className={`ml-7 ${
                todo.isCompleted ? "line-through text-[#7c7c7c] italic" : ""
              }`}
            >
              {todo.title}
            </span>
          </label>
          <div className="flex gap-3 items-center">
            <button
              className="text-[#D72C63]"
              onClick={() => setIsUpdated(true)}
            >
              <BiEdit className="text-center text-xl" />
            </button>
            <button
              className="text-red-600"
              onClick={() => handleDeleteTodo(todo.id)}
            >
              <BiTrash className="text-center text-xl" />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Todo;
