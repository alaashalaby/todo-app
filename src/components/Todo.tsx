import { BiEdit, BiTrash } from "react-icons/bi";
import { useAppDispatch } from "../app/hooks";
import { deleteTodo, toggleTodo } from "../rtk/features/todos/todoSlice";
import { useState } from "react";
import UpdateTodo from "./UpdateTodo";
import { formatTime } from "../utils/formatTime";
import { useTranslation } from "react-i18next";
const Todo = ({ todo }: { todo: Todo }) => {
  const dispatch = useAppDispatch();
  const [isUpdated, setIsUpdated] = useState(false);
  const {t,i18n} = useTranslation();
  const handleDeleteTodo = (id: string) => {
    dispatch(deleteTodo(id));
  };
  const handleToggle = (id: string) => {
    dispatch(toggleTodo(id));
  };
  const isRtl = i18n.language === 'ar';
  return (
    <div className="flex flex-col gap-2 p-6 rounded bg-[#F5F5F5] shadow-md ">
      {isUpdated ? (
        <UpdateTodo todo={todo} setIsUpdated={setIsUpdated} />
      ) : (
        <>
          <div className="flex items-center justify-between">
            <label className="flex items-center flex-1 relative cursor-pointer">
              <input
                type="checkbox"
                checked={todo.isCompleted}
                className="hidden peer"
                onChange={() => handleToggle(todo.id)}
              />
                <span className={`w-5 h-5 rounded-full border border-[#D72C63] absolute ${isRtl?"right-0" :"left-0"} peer-checked:bg-[#D72C63] peer-checked:text-white peer-checked:text-sm peer-checked:font-bold flex items-center justify-center `}>
                {todo.isCompleted && "✓"}
              </span>
              <span
                className={`${isRtl? "mr-7" : "ml-7"} ${
                  todo.isCompleted ? "line-through text-[#7c7c7c] italic" : ""
                }`}
              >
                {todo.title}
              </span>
            </label>
            <div className="flex gap-1 items-center">
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
          </div>
          <div className="pt-5 pb-3 flex items-center justify-between">
            <span
              style={{ backgroundColor: todo.category.color }}
              className="px-4 py-2 text-sm rounded-full text-white"
            >
              {t(`categories.${todo.category.name}`)}
            </span>
            <span>{todo && formatTime(new Date(todo?.time))}</span>
          </div>
        </>
      )}
    </div>
  );
};

export default Todo;
