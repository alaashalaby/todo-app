import { BiPlus } from "react-icons/bi";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { addTodo } from "../rtk/features/todos/todoSlice";
import React, { useState } from "react";
import { nanoid } from "nanoid";
import { Slide, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CategoriesSelect from "./CategoriesSelect";
const AddTodo = () => {
  const [title, setTitle] = useState("");
  const [selectedCategoryName, setSelectedCategoryName] = useState("");
  const categories = useAppSelector(
    (state) => state.categoriesReducer.categories
  );
  const selectedCategory = categories.find(
    (category) => category.name === selectedCategoryName
  );
  const dispatch = useAppDispatch();

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategoryName(e.target.value);
  };
  const handleAddTodo = () => {
    if (!title.trim()) {
      toast.error("Please Enter Todo Title !", {
        position: "top-center",
      });
      return;
    }
    if (!selectedCategoryName) {
      toast.error("Please Select A Category !", {
        position: "top-center",
      });
      return;
    } else {
      if (selectedCategory) {
        dispatch(
          addTodo({
            title,
            id: nanoid(),
            isCompleted: false,
            time:new Date().toISOString(),
            category: selectedCategory,
          })
        );
        toast.success("Your Todo Added!", {
          position: "top-center",
        });
        setTitle("");
        setSelectedCategoryName("");
      }
    }
  };
  return (
    <>
      <div className="rounded p-5 max-w-2xl mx-auto">
        <form
          className="flex gap-2 mb-4 flex-col md:flex-row"
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
            className="bg-[#D72c63] text-white p-2 rounded flex items-center justify-center"
            type="submit"
            onClick={handleAddTodo}
          >
            <BiPlus className="text-center text-2xl" />
          </button>
        </form>
      </div>
      <CategoriesSelect
        selectedCategoryName={selectedCategoryName}
        handleCategoryChange={handleCategoryChange}
      />
      <ToastContainer transition={Slide} autoClose={2000} />
    </>
  );
};

export default AddTodo;
