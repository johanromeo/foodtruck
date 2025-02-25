import "./index.css";

import { useNavigate } from "react-router-dom";
import { DisplayOrder } from "@foodtruck/display-order";
import { Button } from "@foodtruck/button";
import { DisplaySum } from "@foodtruck/display-sum";
import { useSelector, useDispatch } from "react-redux";
import { usePlaceOrderMutation } from "@foodtruck/api";
import { emptyCart, saveOrderId } from "@foodtruck/reducers";

function CustomerOrder() {
  const navigate = useNavigate();
  const [placeOrder, { data, error, isLoading }] = usePlaceOrderMutation();
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const items = cart.flatMap((item) => Array(item.quantity).fill(item.id));

  // Break out into separate file for cleanliness?
  async function handlePlaceOrderMutation() {
    try {
      const response = await placeOrder(items).unwrap();
      const orderId = response.order.id;
      dispatch(saveOrderId(orderId));
      navigate(`/eta/${orderId}`);
    } catch (error) {
      console.error("Order placement failed:", error);
    }
  }

  return (
    <div className="customer-order-container">
      <header className="order-header">
        <img src="/src/assets/cart-icon.svg" alt="cart icon" />
      </header>
      <DisplayOrder />
      <div className="order-border"></div>
      <div className="bottom-buttons">
        <DisplaySum />
        <Button
          type={"button button__black"}
          text={"Take My Money!"}
          onClick={() => {
            handlePlaceOrderMutation(items);
          }}
        />
      </div>
    </div>
  );
}

export { CustomerOrder };
