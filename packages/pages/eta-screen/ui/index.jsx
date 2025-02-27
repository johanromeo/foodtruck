import "./index.css";

import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@foodtruck/button";
import { useGetOrderByIdQuery } from "@foodtruck/api";

function ETAScreen() {
  const navigate = useNavigate();
  const { orderId } = useParams();
  const { data, error, isLoading } = useGetOrderByIdQuery(orderId);

  return (
    <div className="eta-wrapper">
      <div className="eta-header">
        <img className="eta-logo" src="/src/assets/white-logo.png" alt="logo" />
      </div>
      <div className="eta-body">
        <img src="/src/assets/food-box.png" alt="YYGS logo in red" />
        {isLoading ? (
          <h2>Inväntar orderstatus.</h2>
        ) : error ? (
          <h2>
            Din orderstatus kunde inte hämtas. Vänligen kontakta Flavoy's
            Foodtruck.
          </h2>
        ) : (
          <div className="eta-body">
            <h2>DINA WONTONS TILLAGAS!</h2>
            <h3>ETA {data?.order.eta}</h3>
            <p>#{data?.order.id}</p>
          </div>
        )}
      </div>
      <div className="eta-button">
        <Button
          type={"black"}
          onClick={() => navigate("/")}
          text={"GÖR EN NY BESTÄLLNING"}
        />
      </div>
      <Button
        type={"transparent"}
        onClick={() => navigate(`/receipt/${orderId}`)}
        text={"SE KVITTO"}
      />
    </div>
  );
}

export { ETAScreen };
