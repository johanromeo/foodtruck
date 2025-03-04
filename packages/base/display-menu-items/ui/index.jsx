import "./index.css";

function DisplayMenuItems({ item, handleOnClick }) {
  return (
    <article
      className="menu-items-container"
      onClick={() => handleOnClick(item)}
    >
      <p>{item.name}</p>
    </article>
  );
}

export { DisplayMenuItems };
