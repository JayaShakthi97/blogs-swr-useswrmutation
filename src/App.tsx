import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import TodoListPage from "./pages/todo-list-page";
import ProfileSection from "./components/profile-section";

const router = createBrowserRouter([
  {
    path: "/",
    element: <TodoListPage />,
  },
]);

function App() {
  return (
    <div>
      <ProfileSection />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
