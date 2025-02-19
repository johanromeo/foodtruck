import "./index.css";
import { DisplayMenu } from "@foodtruck/display-menu";

function Menu() {
  return (
    <div className="menu">
      <header>
        <img src="/src/assets/white-logo.png" alt="logo" />
        <div className="cart">
          <img src="/src/assets/cart-icon.svg" alt="cart icon" />
          <p>6</p>
        </div>
      </header>
      <DisplayMenu />
    </div>
  );
}

export { Menu };
