import "./index.css";

import { useNavigate } from "react-router-dom";
import { DisplayOrder } from "@foodtruck/display-order";
import { Button } from "@foodtruck/button";
import { DisplaySum } from "@foodtruck/display-sum";
import { useSelector, useDispatch } from "react-redux";
import { usePlaceOrderMutation } from "@foodtruck/api";
import { emptyCart } from "@foodtruck/reducers";

function CustomerOrder() {
  const navigate = useNavigate();
  const [placeOrder, { data, error, isLoading }] = usePlaceOrderMutation();
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // Add all the cart items in an "items" array.
  // If quantity of an item is > 0, multiple id of a same item will be added, like [1, 1, 2, 5, 6, 6, 6]
  const items = cart.flatMap((item) => Array(item.quantity).fill(item.id));
  console.log(items);

  // Call API endpoint to place an order and pass items[] as body.
  function handlePlaceOrderMutation(items) {
    placeOrder(items);
    if (!error) {
      dispatch(emptyCart());
    }
  }
  console.log(data);

  return (
    <div>
      <DisplayOrder />
      <DisplaySum />
      <Button
        type={"button button__black"}
        text={"Take My Money!"}
        onClick={() => {
          handlePlaceOrderMutation(items);
          navigate("/eta");
        }}
      />
    </div>
  );
}

export { CustomerOrder };
