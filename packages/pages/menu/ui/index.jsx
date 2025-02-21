import "./index.css";
import { useNavigate } from "react-router-dom";
import { DisplayMenu } from "@foodtruck/display-menu";
import { useSelector } from "react-redux";

function Menu() {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const totalQuantity = cart.reduce(
    (total, item) => total + (item.quantity || 0),
    0
  );

  return (
    <div className="menu">
      <header>
        <img src="/src/assets/white-logo.png" alt="logo" />
        <div className="cart" onClick={() => navigate("/my-order")}>
          <img src="/src/assets/cart-icon.svg" alt="cart icon" />
          <p>{totalQuantity}</p>
        </div>
      </header>
      <DisplayMenu />
    </div>
  );
}

export { Menu };
