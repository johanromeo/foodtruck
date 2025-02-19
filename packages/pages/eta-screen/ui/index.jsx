import "./index.css";

import { useNavigate } from "react-router-dom";
import { Button } from "@foodtruck/button";

function ETAScreen() {
  const navigate = useNavigate();

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
        onClick={() => navigate("/")}
        text={"GÖR EN NY BESTÄLLNING"}
      />
      <Button
        type={"transparent"}
        onClick={() => navigate("/receipt")}
        text={"SE KVITTO"}
      />
    </div>
  );
}

export { ETAScreen };
