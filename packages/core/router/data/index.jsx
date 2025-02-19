import { createBrowserRouter } from "react-router-dom";
import { Menu } from "@foodtruck/menu";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Menu />,
  },
]);

export { router };
