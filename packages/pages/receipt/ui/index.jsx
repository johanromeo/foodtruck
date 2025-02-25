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
    <div className="wrapper">
      <header>
        <p>YYGS logo</p>
      </header>
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
