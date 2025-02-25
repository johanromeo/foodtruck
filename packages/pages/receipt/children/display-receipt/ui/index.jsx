import { DisplaySum } from "@foodtruck/display-sum/ui";
import "./index.css";

function DisplayReceipt({ data, items }) {
  return (
    <div className="receipt-container">
      <div className="receipt-info">
        <img
          className="red-logo"
          src="/src/assets/red-logo.png"
          alt="YYGS logo"
        />
        <h2>KVITTO</h2>
        {/* Access the receipt id from the nested data */}
        <p>#{data?.receipt?.id}</p>
      </div>
      <div className="receipt-items">
        {items &&
          items.map((item) => (
            <div className="receipt-specific" key={item.id}>
              <div>
                <p className="bold">{item.name}</p>
                <p className="light">Quantity: {item.quantity}</p>
              </div>
              <div>
                <p className="bold">Price: {item.price}</p>
              </div>
            </div>
          ))}
      </div>
      <div>
        <p>total: {data?.receipt?.orderValue}</p>
      </div>
      {/* <DisplaySum /> */}
    </div>
  );
}

export { DisplayReceipt };
