import "./index.css";

function MenuCard({ item, handleOnClick }) {
  let ingredients = item.ingredients?.join(", ");

  return (
    <article
      className="menu-card-container"
      onClick={() => handleOnClick(item)}
    >
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
