import "./index.css";

import { useNavigate } from "react-router-dom";

import { DisplayMenu } from "@foodtruck/display-menu";

function Menu() {
  const navigate = useNavigate();

  return (
    <div className="menu">
      <header>
        <img src="/src/assets/white-logo.png" alt="logo" />
        <div className="cart" onClick={() => navigate("/my-order")}>
          <img src="/src/assets/cart-icon.svg" alt="cart icon" />
          <p>6</p>
        </div>
      </header>
      <DisplayMenu />
    </div>
  );
}

export { Menu };
