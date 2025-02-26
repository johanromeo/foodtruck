import { DisplaySum } from "@foodtruck/display-sum/ui";
import "./index.css";

function DisplayReceipt({ data, items }) {
  return (
    <div className="receipt-container">
      <div className="receipt-margin-container">
        <div className="receipt-info">
          <img
            className="red-logo"
            src="/src/assets/red-logo.png"
            alt="YYGS logo"
          />
          <h2 className="receipt-title">KVITTO</h2>
          <p className="receipt-id">#{data?.receipt?.id}</p>
        </div>

        <div className="receipt-menu-line">
          {items &&
            items.map((item) => (
              <div className="receipt-menu-item" key={item.id}>
                <div className="receipt-specific">
                  <span className="receipt-menu-item-info">{item.name}</span>
                  <span className="receipt-dots"></span>
                  <span className="receipt-menu-item-info">
                    {item.price} SEK
                  </span>
                </div>
                <div>
                  <p className="receipt-item-qty">{item.quantity} st</p>
                </div>
              </div>
            ))}
        </div>
      </div>
      <DisplaySum />
    </div>
  );
}

export { DisplayReceipt };
