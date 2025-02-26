import "./index.css";

function MenuCard({ item, handleOnClick }) {
  let ingredients = item.ingredients?.join(", ");

  return (
    <article
      className="menu-card-container"
      onClick={() => handleOnClick(item)}
    >
      <div className="menu-line">
        <span className="menu-item-info">{item.name}</span>
        <span className="dots"></span>
        <span className="menu-item-info">{item.price} SEK</span>
      </div>
      <p className="light">{ingredients}</p>
    </article>
  );
}

export { MenuCard };
