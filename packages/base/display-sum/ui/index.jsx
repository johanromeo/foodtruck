import "./index.css";
import { useSelector } from "react-redux";

function DisplaySum() {
  const cart = useSelector((state) => state.cart);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="display-sum-container">
      <div>
        <p className="total">TOTALT</p>
        <p className="moms">inkl 20% moms</p>
      </div>
      <div className="total">
        <p>{total} SEK</p>
      </div>
    </div>
  );
}

export { DisplaySum };
