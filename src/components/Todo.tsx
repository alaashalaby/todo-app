import { BiEdit, BiTrash } from "react-icons/bi";

const Todo = () => {
  return (
    <li className="flex items-center p-3 rounded bg-[#F5F5F5] shadow-md">
      <label className="flex items-center flex-1 relative cursor-pointer before:content-['']  before:w-4 before:h-4 before:border before:border-[#D72C63] before:rounded-full before:items-center before:justify-center before:absolute before:left-0}">
        <input type="checkbox" className="hidden" />
        <span className="ms-6">Todo</span>
      </label>
      <div className="flex gap-3 items-center">
        <button className="text-[#D72C63]">
          <BiEdit className="text-center text-xl" />
        </button>
        <button className="text-red-600">
          <BiTrash className="text-center text-xl" />
        </button>
      </div>
    </li>
  );
};

export default Todo;
