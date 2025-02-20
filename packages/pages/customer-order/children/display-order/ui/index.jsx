import "./index.css";

import { OrderCard } from "@foodtruck/order-card";
import { useSelector } from "react-redux";

function DisplayOrder() {
  const cart = useSelector((state) => state.cart);

  const orderCardComponents = cart.map((item) => {
    return <OrderCard key={item.id} item={item} />;
  });

  return <section>{orderCardComponents}</section>;
}

export { DisplayOrder };
