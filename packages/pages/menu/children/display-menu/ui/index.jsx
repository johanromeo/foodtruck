import "./index.css";
import { useDispatch } from "react-redux";
import { MenuCard } from "@foodtruck/menu-card";
import { DisplayMenuItems } from "@foodtruck/display-menu-items";
import { useGetMenuQuery } from "@foodtruck/api";
import { addToCart } from "@foodtruck/reducers";

function DisplayMenu() {
  const { data, error, isLoading } = useGetMenuQuery();

  const dispatch = useDispatch();

  function handleAddToCart(menuItem) {
    dispatch(addToCart(menuItem));
  }

  const items = data?.items || [];

  const wontons = items.filter((item) => item.type === "wonton");
  const dipSauces = items.filter((item) => item.type === "dip");
  const drinks = items.filter((item) => item.type === "drink");

  const menuCardComponents = wontons.map((item) => (
    <MenuCard
      key={item.id}
      item={item}
      handleOnClick={() => handleAddToCart(item)}
    />
  ));

  const dipSauceComponents = dipSauces.map((item) => (
    <DisplayMenuItems
      key={item.id}
      item={item}
      handleOnClick={() => handleAddToCart(item)}
    />
  ));

  const drinkComponents = drinks.map((item) => (
    <DisplayMenuItems
      key={item.id}
      item={item}
      handleOnClick={() => handleAddToCart(item)}
    />
  ));

  return (
    <div className="display-menu-container">
      <div className="display-menu-title">
        <h2>Meny</h2>
      </div>
      <div>{menuCardComponents}</div>
      <div className="menu-types-container">
        <p>Dipsås</p>
        <p>19 SEK</p>
      </div>
      <div className="menu-types">{dipSauceComponents}</div>
      <div className="menu-types-container">
        <p>Dricka</p>
        <p>19 SEK</p>
      </div>
      <div className="menu-types">{drinkComponents}</div>
    </div>
  );
}

export { DisplayMenu };
