import { createBrowserRouter } from "react-router-dom";
import { Menu } from "@foodtruck/menu";
import { CustomerOrder } from "@foodtruck/customer-order";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Menu />,
  },
  {
    path: "/my-order",
    element: <CustomerOrder />,
  },
]);

export { router };
