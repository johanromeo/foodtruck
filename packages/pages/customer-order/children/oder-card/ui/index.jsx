import "./index.css";

function OrderCard({ item }) {
  return (
    <article className="order-card-container">
      <p>{item.name}</p>
      <p>{item.price}</p>
    </article>
  );
}

export { OrderCard };
