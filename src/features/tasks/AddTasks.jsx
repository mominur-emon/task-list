import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addTask } from "./TasksSlice";
import { v4 as uuid } from "uuid";

const AddTasks = () => {
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const task = { id: uuid(), description, title, priority };
    dispatch(addTask(task));
    navigate("/");
  };

  return (
    <div className="h-screen flex justify-center px-10">
      <div className="w-full max-w-md">
        <h2 className="text-center py-4 text-sm font-bold mt-4 sm:text-lg lg:text-xl sm:mt-6 lg:mt-12">
          Add Task
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="title"
              className="block text-sm sm:text-base lg:text-lg"
            >
              Title
            </label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border rounded-md px-3 py-2 outline-none text-[12px] sm:text-sm lg:text-base text-neutral-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-sm sm:text-base lg:text-lg"
            >
              Description
            </label>
            <input
              type="text"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border rounded-md px-3 py-2 outline-none text-[12px] sm:text-sm lg:text-base text-neutral-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="priority"
              className="block text-sm sm:text-base lg:text-lg "
            >
              Priority
            </label>
            <select
              name="priority"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="w-full border rounded-md px-3 py-2 outline-none text-[12px] sm:text-sm lg:text-base text-neutral-500"
              required
            >
              <option value="">Select Priority Level</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className=" mt-4 bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 transition duration-300 sm:px-7 lg:px-12"
            >
              Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTasks;
