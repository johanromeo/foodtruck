import "./index.css";

import { OrderCard } from "@foodtruck/order-card";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeFromCart } from "@foodtruck/reducers";

function DisplayOrder() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  function handleRemoveFromCart(menuItem) {
    dispatch(removeFromCart(menuItem));
  }

  const orderCardComponents = cart.map((item) => {
    return (
      <OrderCard
        key={item.id}
        item={item}
        handleOnClick={() => handleRemoveFromCart(item)}
      />
    );
  });

  return <section>{orderCardComponents}</section>;
}

export { DisplayOrder };
