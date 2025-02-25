import "./index.css";

function MenuCard({ item, handleOnClick }) {
  let ingredients = item.ingredients?.join(", ");

  return (
    <article
      className="menu-card-container"
      onClick={() => handleOnClick(item)}
    >
      <div>
        <p className="bold">{item.name}</p>
        <p className="light">{ingredients}</p>
      </div>
      <div className="menu-price">
        <p className="bold">{item.price} SEK</p>
      </div>
    </article>
  );
}

export { MenuCard };
