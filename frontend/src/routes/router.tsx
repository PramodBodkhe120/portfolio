import { createBrowserRouter } from "react-router-dom";
import { App } from "../App";
import { AdminDashboard } from "../pages/AdminDashboard";
import { HomePage } from "../pages/HomePage";
import { NotFound } from "../pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "admin", element: <AdminDashboard /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

