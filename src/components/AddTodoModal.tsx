import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { toast } from "react-toastify";
import { addTodo } from "../rtk/features/todos/todoSlice";
import { nanoid } from "nanoid";
import CategoriesSelect from "./CategoriesSelect";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";
import { BiX } from "react-icons/bi";
interface AddTodoModalProps {
  onClose: () => void;
}
const AddTodoModal = ({ onClose }: AddTodoModalProps) => {
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
            time: new Date().toISOString(),
            category: selectedCategory,
          })
        );
        toast.success("Your Todo Added!", {
          position: "top-center",
        });
        setTitle("");
        setSelectedCategoryName("");
        onClose();
      }
    }
  };
  return ReactDOM.createPortal(
    <div className="w-full h-full bg-black fixed top-0 left-0 z-50 bg-opacity-40 backdrop-filter backdrop-blur-sm">
      <motion.div
        initial={{
          opacity: 0.5,
          scale: 0,
          top: "50%",
          left: "50%",
          x: "-50%",
          y: "-50%",
        }}
        animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
        exit={{ opacity: 0, scale: 0, transition: { duration: 0.5 } }}
        transition={{ duration: 0.5 }}
        className="bg-[#ffd6e2] p-5 w-full max-w-[95%] sm:max-w-[600px] z-40 rounded-lg fixed"
      >
        <div className="flex justify-between items-center mb-5">
          <h2>Add Todo</h2>
          <button
            onClick={onClose}
            className="bg-[#D72c63] text-white p-1 rounded-full"
          >
            <BiX className="text-2xl cursor-pointer" />
          </button>
        </div>
        <div>
          <form
            className="flex flex-col gap-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              placeholder="Enter Your Todo"
              value={title}
              onChange={handleTitleChange}
              className="outline-none p-2 flex-grow border border-[#D72C63] rounded"
            />
            <CategoriesSelect
              selectedCategoryName={selectedCategoryName}
              handleCategoryChange={handleCategoryChange}
            />
            <button
              className="bg-[#D72c63] text-white p-2 rounded flex items-center justify-center"
              type="submit"
              onClick={handleAddTodo}
            >
              Add Todo
            </button>
          </form>
        </div>
      </motion.div>
    </div>,
    document.getElementById("modal") as HTMLElement
  );
};

export default AddTodoModal;
