import "./index.css";

function MenuCard({ item }) {
  return (
    <article className="menu-card-container">
      <div>
        <p>{item.name}</p>
        <p>{item.ingredients}</p>
      </div>
      <div className="menu-price">
        <p>{item.price} SEK</p>
      </div>
    </article>
  );
}

export { MenuCard };
