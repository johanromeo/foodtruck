import "./index.css";

function DisplayMenuItems({ item, handleOnClick }) {
  return (
    <article
      className="menu-items-container"
      onClick={() => handleOnClick(item.id)}
    >
      <p>{item.name}</p>
    </article>
  );
}

export { DisplayMenuItems };
