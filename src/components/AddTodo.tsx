import { BiPlus } from "react-icons/bi";
import { useState } from "react";
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FilterTodos from "./FilterTodos";
import AddTodoModal from "./AddTodoModal";
const AddTodo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="rounded p-5 max-w-2xl mx-auto flex flex-col gap-4">
        <button
          className="bg-[#D72c63] text-white p-2 rounded flex items-center justify-center w-full"
          onClick={handleOpenModal}
        >
          <BiPlus className="text-center text-2xl" />
        </button>
        <FilterTodos />
      </div>
      {isModalOpen && <AddTodoModal onClose={handleCloseModal} />}
      <ToastContainer transition={Slide} autoClose={2000} />
    </>
  );
};

export default AddTodo;
