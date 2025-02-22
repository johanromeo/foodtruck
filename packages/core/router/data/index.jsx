import { createBrowserRouter } from "react-router-dom";
import { Menu } from "@foodtruck/menu";
import { CustomerOrder } from "@foodtruck/customer-order";
import { ETAScreen } from "@foodtruck/eta-screen";
import { Receipt } from "@foodtruck/receipt";

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
    path: "/eta/:orderId",
    element: <ETAScreen />,
  },
  {
    path: "/receipt/:orderId",
    element: <Receipt />,
  },
]);

export { router };
