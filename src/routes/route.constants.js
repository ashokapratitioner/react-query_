import Home from "../pages/home";
import TodoPage from "../pages/todos";
import TodoPageById from "../pages/todos/[todoId]";
import TodoPageTraditional from "../pages/traditional";

// TODO: Use this for routing purpose, here the scope is about react-query
export const pages = [
  {
    path: "/home",
    element: <Home />,
    visibility: true,
    title: "Home",
  },
  {
    path: "/traditional",
    element: <TodoPageTraditional />,
    visibility: true,
    title: "Traditional",
  },
  {
    path: "/todos",
    element: <TodoPage />,
    visibility: true,
    title: "React Query",
  },
  {
    path: "/todos/:todoId",
    element: <TodoPageById />,
    visibility: false,
    title: "React Query Individual",
  },
];
