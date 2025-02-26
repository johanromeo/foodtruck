import { useNavigate, useParams } from "react-router-dom";
import "./index.css";

import { Button } from "@foodtruck/button";
import { DisplayReceipt } from "@foodtruck/display-receipt";
import { useGetReceiptByIdQuery } from "@foodtruck/api";

function Receipt() {
  const navigate = useNavigate();
  const { orderId } = useParams();
  const { data, error, isLoading } = useGetReceiptByIdQuery(orderId);

  console.log(data);

  return (
    <div className="receipt-wrapper">
      <div className="receipt-header">
        <img className="eta-logo" src="/src/assets/white-logo.png" alt="logo" />
      </div>
      <DisplayReceipt data={data} items={data?.receipt?.items} />
      <Button
        type={"black"}
        onClick={() => navigate("/")}
        text={"GÖR EN NY BESTÄLLNING"}
      />
    </div>
  );
}

export { Receipt };
