import "./index.css";

function MenuCard({ item }) {
  let ingredients = item.ingredients?.join(", ");

  return (
    <article className="menu-card-container">
      <div>
        <p>{item.name}</p>
        <p>{ingredients}</p>
      </div>
      <div className="menu-price">
        <p>{item.price} SEK</p>
      </div>
    </article>
  );
}

export { MenuCard };
