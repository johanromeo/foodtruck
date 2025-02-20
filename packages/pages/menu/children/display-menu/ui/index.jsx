import { MenuCard } from "@foodtruck/menu-card";
import "./index.css";

import { useGetMenuQuery } from "@foodtruck/api";

function DisplayMenu() {
  //TODO: Add error and isLoading ternary operators...
  const { data, error, isLoading } = useGetMenuQuery();

  const menuCardComponents = data?.items.map((item) => {
    return <MenuCard key={item.id} item={item} />;
  });
  return (
    <section className="display-menu-container">
      <div className="display-menu-title">
        <h2>Meny</h2>
      </div>
      <div className="display-menu-items">{menuCardComponents}</div>
    </section>
  );
}

export { DisplayMenu };
