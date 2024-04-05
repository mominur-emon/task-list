import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error from "../pages/Error";
import Navbar from "../layouts/Navbar";
import TasksScreen from "../features/tasks/TasksScreen";
import AddTasks from "../features/tasks/AddTasks";
import Footer from "../layouts/Footer";
import EditTask from "../features/tasks/EditTask";

const Index = () => {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<TasksScreen />} />
          <Route path="/add-task" element={<AddTasks />} />
          <Route path="/edit-task" element={<EditTask />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default Index;
