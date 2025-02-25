import "./index.css";

function OrderCard({ item, handleOnClick }) {
  return (
    <article
      className="order-card-container"
      // onClick={() => handleOnClick(item)}
    >
      {/* <div>
        <p className="order-bold"></p>
        <p className="order-light">{item.quantity} stycken</p>
      </div>
      <p className="order-bold">{item.price} SEK</p> */}
      <div className="order-menu-line">
        <span className="order-menu-item-info">{item.name}</span>
        <span className="order-dots"></span>
        <span className="order-menu-item-info">
          {item.price * item.quantity} SEK
        </span>

        <div className="trashcan" onClick={() => handleOnClick(item)}>
          🗑️
        </div>
      </div>
      <p className="order-item-qty">{item.quantity} st</p>
    </article>
  );
}

export { OrderCard };
