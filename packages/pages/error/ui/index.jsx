import "./index.css";
import { Button } from "@foodtruck/button";
import { useNavigate } from "react-router-dom";

function DisplayError() {
  const navigate = useNavigate();
  return (
    <div className="error-container">
      <div className="error-info">
        <h1 className="error-title">Jag vet att du är hungrig...🤤</h1>
        <h2 className="error-taunt">
          Se då till att navigera rätt så du blir mätt😊
        </h2>
        <p className="error-comfort">Låt oss ta hand om din mage!🤰</p>
        <p className="error-comfort">Med vänliga hälsningar👋,</p>
        <p className="error-comfort">👑Flavoy's Foodtruck👑</p>
        <Button
          type={"black"}
          text={"GÅ TILL MENYN"}
          onClick={() => navigate("/")}
        />
      </div>
    </div>
  );
}

export { DisplayError };
