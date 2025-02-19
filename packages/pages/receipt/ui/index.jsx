import { useNavigate } from "react-router-dom";
import "./index.css";

import { Button } from "@foodtruck/button";
import { DisplayReceipt } from "@foodtruck/display-receipt";

function Receipt() {
  const navigate = useNavigate();
  return (
    <div>
      <header>
        <p>YYGS logo</p>
      </header>
      {/* DisplayReceipt components */}
      <DisplayReceipt />
      <Button
        type={"black"}
        onClick={() => navigate("/")}
        text={"GÖR EN NY BESTÄLLNING"}
      />
    </div>
  );
}

export { Receipt };
