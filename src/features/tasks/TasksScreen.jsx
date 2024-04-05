import { useDispatch, useSelector } from "react-redux";
import { deleteTask } from "./TasksSlice";
import { Link } from "react-router-dom";

const TasksScreen = () => {
  const tasks = useSelector((state) => state.tasksReducer.tasks);
  const dispatch = useDispatch();

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <div className="min-h-screen px-4 pb-4 sm:px-8 sm:pb-7 lg:px-14 lg:pb-12">
      <h2 className="text-center py-4 text-sm font-bold mt-4 sm:text-lg lg:text-xl sm:mt-6 lg:mt-12">
        List of Tasks
      </h2>
      <table className="border-collapse w-full">
        <thead>
          <tr className="text-[10px]  sm:text-[14px] lg:text-[16px]">
            <th className="py-1 border border-solid border-gray-400 px-1 sm:px-3 lg:px-5">
              Title
            </th>
            <th className="py-1 border border-solid border-gray-400 px-1 sm:px-3 lg:px-5">
              Description
            </th>
            <th className="py-1 border border-solid border-gray-400 px-1 sm:px-3 lg:px-5">
              Priority
            </th>
            <th className="py-1 border border-solid border-gray-400 sm:px-3 lg:px-5">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {tasks &&
            tasks.map((task) => {
              const { id, description, title, priority } = task;
              return (
                <tr key={id}>
                  <td className="p-1 border border-solid border-gray-400  text-center text-[10px]  max-w-[80px] overflow-hidden sm:text-[14px] sm:max-w-[200px] lg:text-[16px] lg:max-w-[300px]">
                    {title}
                  </td>
                  <td className="p-1 border border-solid border-gray-400 text-center text-[10px] max-w-[80px] overflow-hidden sm:text-[14px] sm:max-w-[200px] lg:text-[16px] lg:max-w-[300px]">
                    {description}
                  </td>
                  <td className="p-1 border border-solid border-gray-400 text-center text-[10px] sm:text-[14px] lg:text-[16px]">
                    {priority}
                  </td>
                  <td className="p-1 border border-solid border-gray-400 text-center text-[10px] sm:text-[14px] lg:text-[16px]">
                    <Link
                      to="/edit-task"
                      state={{ id, description, title, priority }}
                    >
                      <button className="px-5 py-1 mb-1 mx-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 sm:mx-4 lg:mx-6 ">
                        Edit
                      </button>
                    </Link>
                    <button
                      onClick={() => handleDeleteTask(id)}
                      className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default TasksScreen;
