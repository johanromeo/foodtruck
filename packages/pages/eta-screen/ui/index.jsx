import "./index.css";
import { Button } from "@foodtruck/button";

function ETAScreen() {
  return (
    <div className="eta-wrapper">
      <header>
        <p>YYGS logo</p>
      </header>
      <img src="/src/assets/food-box.png" alt="" />
      <h2>DINA WONTONS TILLAGAS!</h2>
      <h3>ETA 5 MIN</h3>
      <p>#4kfsdp59d</p>
      <Button
        type={"black"}
        onClick={() => alert("New Order")}
        text={"GÖR EN NY BESTÄLLNING"}
      />
      <Button
        type={"transparent"}
        onClick={() => alert("See Receipts")}
        text={"SE KVITTO"}
      />
    </div>
  );
}

export { ETAScreen };
