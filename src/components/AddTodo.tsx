import { BiPlus } from "react-icons/bi";
const AddTodo = () => {
  return (
    <div className="rounded p-5 max-w-2xl mx-auto">
      <form className="flex items-center gap-2 mb-4">
        <input
          type="text"
          placeholder="Enter Your Todo"
          className="outline-none p-2 flex-grow border border-[#D72C63] rounded"
        />
        <button className="bg-[#D72c63] text-white p-2 rounded" type="submit">
          <BiPlus className="text-center text-2xl" />
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
