import "./index.css";

function MenuCard({ item, handleOnClick }) {
  let ingredients = item.ingredients?.join(", ");

  return (
    // OLD
    // <article
    //   className="menu-card-container"
    //   onClick={() => handleOnClick(item)}
    // >
    //   <div>
    //     <p className="menu-item-info">{item.name}</p>
    //     <p className="light">{ingredients}</p>
    //   </div>
    //   <div className="menu-item-info">
    //     <p className="bold">{item.price} SEK</p>
    //   </div>
    // </article>

    // NEW WITH DOTS
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
