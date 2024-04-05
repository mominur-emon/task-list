// EditTask.jsx
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { updateTask } from "./TasksSlice";

const EditTask = () => {
  const location = useLocation();

  const [title, setTitle] = useState(location.state.title);
  const [description, setDescription] = useState(location.state.description);
  const [priority, setPriority] = useState(location.state.priority);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updateTask({ id: location.state.id, title, description, priority })
    );
    navigate("/", { replace: true });
  };

  return (
    <div className="h-screen flex justify-center  px-10">
      <div className="w-full max-w-md">
        <h2 className="text-center py-4 text-sm font-bold mt-4 sm:text-lg lg:text-xl sm:mt-6 lg:mt-12">
          Edit Task
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
              className="block text-sm sm:text-base lg:text-lg"
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
              Update Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditTask;
