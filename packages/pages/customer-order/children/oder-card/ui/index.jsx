import "./index.css";

function OrderCard({ item, handleOnClick }) {
  return (
    <article
      className="order-card-container"
      onClick={() => handleOnClick(item)}
    >
      <div>
        <p className="order-bold">{item.name}</p>
        <p className="order-light">{item.quantity} stycken</p>
      </div>
      <p className="order-bold">{item.price} SEK</p>
    </article>
  );
}

export { OrderCard };
