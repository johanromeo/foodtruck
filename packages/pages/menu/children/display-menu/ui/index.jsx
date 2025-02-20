import "./index.css";
import { useDispatch } from "react-redux";
import { MenuCard } from "@foodtruck/menu-card";
import { DisplayMenuItems } from "@foodtruck/display-menu-items";

import { useGetMenuQuery } from "@foodtruck/api";
import { addToCart } from "@foodtruck/reducers";

function DisplayMenu() {
  //TODO: Add error and isLoading ternary operators...
  const { data, error, isLoading } = useGetMenuQuery();
  const dispatch = useDispatch();

  function handleAddToCart(menuItemId) {
    dispatch(addToCart(menuItemId));
    console.log("Menu item with id " + menuItemId + " added!");
  }

  //TODO: Change name on package to not mix with DisplayMenuItems?
  const wontons = (data?.items || []).filter((item) => item.type === "wonton");
  const menuCardComponents = wontons.map((item) => {
    return (
      <MenuCard key={item.id} item={item} handleOnClick={handleAddToCart} />
    );
  });

  // Filter array. Source: https://react.dev/learn/rendering-lists#filtering-arrays-of-items
  // "(data?.items || [])" is a protection against undefined data and errors, so that
  // the .map() always has an array to work with
  const dipSauces = (data?.items || []).filter((item) => item.type === "dip");
  const dipSauceComponents = dipSauces.map((dipSauce) => {
    return <DisplayMenuItems key={dipSauce.id} item={dipSauce} />;
  });

  const drinks = (data?.items || []).filter((item) => item.type === "drink");
  const drinkComponents = drinks.map((drink) => {
    return <DisplayMenuItems key={drink.id} item={drink} />;
  });

  return (
    <section className="display-menu-container">
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
    </section>
  );
}

export { DisplayMenu };
