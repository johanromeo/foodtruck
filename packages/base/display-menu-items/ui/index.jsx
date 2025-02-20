import "./index.css";

function DisplayMenuItems({ item }) {
  return (
    <article className="menu-items-container">
      {/* Dip sauce/Beverage items placed here */}
      <p>{item.name}</p>
    </article>
  );
}

export { DisplayMenuItems };
