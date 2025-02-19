import "./index.css";

import { useNavigate } from "react-router-dom";

import { DisplayMenu } from "@foodtruck/display-menu";

import { useGetMenuQuery } from "@foodtruck/api";

function Menu() {
  const navigate = useNavigate();

  const { data, error, isLoading } = useGetMenuQuery();
  console.log(data);

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
