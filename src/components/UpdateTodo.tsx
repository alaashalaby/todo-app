import { useEffect, useRef, useState } from "react";
import { useAppDispatch } from "../app/hooks";
import { updateTodo } from "../rtk/features/todos/todoSlice";
const UpdateTodo = ({
  todo,
  setIsUpdated,
}: {
  todo: Todo;
  setIsUpdated: (value: boolean) => void;
}) => {
  const [editTitle, setEditTitle] = useState(todo.title);
  const dispatch = useAppDispatch();
  const handleSaveUpdate = (todo: Todo) => {
    setIsUpdated(false);
    dispatch(
      updateTodo({
        ...todo,
        title: editTitle,
      })
    );
  };
  const inpRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inpRef.current?.focus();
  }, []);
  return (
    <div className="flex items-center gap-2">
      <input
        ref={inpRef}
        type="text"
        value={editTitle}
        className="outline-none p-2 border border-[#D72C63] rounded"
        onChange={(e) => setEditTitle(e.target.value)}
      />
      <button
        className="bg-[#D72c63] text-white p-2 rounded"
        onClick={() => handleSaveUpdate(todo)}
      >
        Update
      </button>
    </div>
  );
};

export default UpdateTodo;
