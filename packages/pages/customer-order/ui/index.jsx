import { useNavigate } from "react-router-dom";
import "./index.css";

import { DisplayOrder } from "@foodtruck/display-order";
import { Button } from "@foodtruck/button";
import { DisplaySum } from "@foodtruck/display-sum";
import { useSelector } from "react-redux";

function CustomerOrder() {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);

  // Add all the cart items in an "items" array.
  // If quantity of an item is > 0, multiple id of a same item will be added, like [1, 1, 2, 5, 6, 6, 6]
  const items = cart.flatMap((item) => Array(item.quantity).fill(item.id));
  console.log(items);

  // Call API endpoint to place an order and pass items[] as body.

  return (
    <div>
      <DisplayOrder />
      <DisplaySum />
      <Button
        type={"button button__black"}
        text={"Take My Money!"}
        onClick={() => {
          navigate("/eta");
        }}
      />
    </div>
  );
}

export { CustomerOrder };
