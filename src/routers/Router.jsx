import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
   {
      path: '/',
      element: <h1>This home page</h1>
   },
   // Error Route...
   {
      path: "*",
      element: <div><h1>NO Page Found........</h1></div>,
    }
]);

export default router;