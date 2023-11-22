import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/home/Home";
import Error from "../pages/Error";
import Accountant from "../pages/accountant/Accountant";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/:id",
        element: <Accountant />,
      }
    ],
  },
  // Error Route...
  {
    path: "*",
    element: <Error />,
  },
]);

export default router;
