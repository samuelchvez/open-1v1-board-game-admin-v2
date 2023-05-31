import { StrictMode } from "react";
import { RouterProvider } from "react-router-dom";

import router from "./router";
import AdminSocket from "./components/AdminSocket";

function App() {
  return (
    <StrictMode>
      <AdminSocket />
      <RouterProvider router={router} />
    </StrictMode>
  );
}

export default App;
