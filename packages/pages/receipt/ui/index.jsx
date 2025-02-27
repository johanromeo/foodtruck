import { useNavigate, useParams } from "react-router-dom";
import "./index.css";

import { Button } from "@foodtruck/button";
import { DisplayReceipt } from "@foodtruck/display-receipt";
import { useGetReceiptByIdQuery } from "@foodtruck/api";

function Receipt() {
  const navigate = useNavigate();
  const { orderId } = useParams();
  const { data, error, isLoading } = useGetReceiptByIdQuery(orderId);

  return (
    <div className="receipt-wrapper">
      <div className="receipt-header">
        <img className="eta-logo" src="/src/assets/white-logo.png" alt="logo" />
      </div>
      <div className="receipt-margin">
        <DisplayReceipt data={data} items={data?.receipt?.items} />
      </div>
      <Button
        type={"black"}
        onClick={() => navigate("/")}
        text={"GÖR EN NY BESTÄLLNING"}
      />
    </div>
  );
}

export { Receipt };
