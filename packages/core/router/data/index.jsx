import { createBrowserRouter } from "react-router-dom";
import { Menu } from "@foodtruck/menu";
import { CustomerOrder } from "@foodtruck/customer-order";
import { ETAScreen } from "@foodtruck/eta-screen";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Menu />,
  },
  {
    path: "/my-order",
    element: <CustomerOrder />,
  },
  {
    path: "/eta",
    element: <ETAScreen />,
  },
]);

export { router };
