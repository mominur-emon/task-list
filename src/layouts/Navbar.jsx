import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-[#4682b4] flex justify-center items-center h-[40px] sm:h-[48px] lg:h-[56px]">
      <NavLink
        style={({ isActive }) => ({
          color: isActive ? "greenyellow" : "white",
        })}
        to="/"
        className="mr-[20px] text-sm sm:text-base lg:text-lg sm:mr-[30px] lg:mr-[50px]"
      >
        All Tasks
      </NavLink>
      <NavLink
        style={({ isActive }) => ({
          color: isActive ? "greenyellow" : "white",
        })}
        to="/add-task"
        className="mr-[20px] text-sm sm:text-base lg:text-lg"
      >
        Add Task
      </NavLink>
    </nav>
  );
};

export default Navbar;
