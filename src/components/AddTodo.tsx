import { BiPlus } from "react-icons/bi";
import { useAppDispatch } from "../app/hooks";
import { addTodo } from "../rtk/features/todos/todoSlice";
import React, { useState } from "react";
import { nanoid } from "nanoid";
import { Slide, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const AddTodo = () => {
  const [title, setTitle] = useState("");
  const dispatch = useAppDispatch();

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const handleAddTodo = () => {
    if (title.trim() === "") {
      toast.error("Please Enter Todo Title !", {
        position: "top-center",
      });
    } else {
      dispatch(
        addTodo({
          title,
          id: nanoid(),
          isCompleted: false,
        })
      );
      toast.success("Your Todo Added!", {
        position: "top-center",
      });
      setTitle("");
    }
  };
  return (
    <>
      <div className="rounded p-5 max-w-2xl mx-auto">
        <form
          className="flex items-center gap-2 mb-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            placeholder="Enter Your Todo"
            value={title}
            onChange={handleTitleChange}
            className="outline-none p-2 flex-grow border border-[#D72C63] rounded"
          />
          <button
            className="bg-[#D72c63] text-white p-2 rounded"
            type="submit"
            onClick={handleAddTodo}
          >
            <BiPlus className="text-center text-2xl" />
          </button>
        </form>
      </div>
      <ToastContainer transition={Slide} autoClose={2000} />
    </>
  );
};

export default AddTodo;
