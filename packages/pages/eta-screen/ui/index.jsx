import "./index.css";

import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@foodtruck/button";
import { useGetOrderByIdQuery } from "@foodtruck/api";

function ETAScreen() {
  const navigate = useNavigate();

  // Thanks to my dynamic /eta/:orderId and useParams, I can extract the order id from the url...
  const { orderId } = useParams();
  // ...and pass it as an argument to useGetOrderByIdQuery below.
  const { data, error, isLoading } = useGetOrderByIdQuery(orderId);
  console.log(data);

  return (
    <div className="eta-wrapper">
      <div className="eta-header">
        <img className="eta-logo" src="/src/assets/white-logo.png" alt="logo" />
      </div>
      <div className="eta-body">
        <img src="/src/assets/food-box.png" alt="YYGS logo in red" />
        <h2>DINA WONTONS TILLAGAS!</h2>
        <h3>ETA {data?.order.eta}</h3>
        <p>#{data?.order.id}</p>
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
