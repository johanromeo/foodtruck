import "./index.css";

function OrderCard({ item, handleOnClick }) {
  return (
    <article
      className="order-card-container"
      onClick={() => handleOnClick(item)}
    >
      <p>{item.name}</p>
      <p>{item.price}</p>
      <p>{item.quantity}</p>
    </article>
  );
}

export { OrderCard };
