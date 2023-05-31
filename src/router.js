import { createBrowserRouter } from "react-router-dom";

import Home from "./components/screens/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

export default router;
