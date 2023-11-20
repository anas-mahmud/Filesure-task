import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  // Error Route...
  {
    path: "*",
    element: (
      <div>
        <h1>No Page Found........</h1>
      </div>
    ),
  },
]);

export default router;
