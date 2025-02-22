import { useNavigate, useParams } from "react-router-dom";
import "./index.css";

import { Button } from "@foodtruck/button";
import { DisplayReceipt } from "@foodtruck/display-receipt";
import { useGetReceiptByIdQuery } from "@foodtruck/api";
import { DisplayMenu } from "@foodtruck/display-menu";
import { DisplaySum } from "@foodtruck/display-sum";

function Receipt() {
  const navigate = useNavigate();
  const { orderId } = useParams();
  const { data, error, isLoading } = useGetReceiptByIdQuery(orderId);
  console.log(data);

  // 2025-02-22 progress
  // - The whole flow from Menu => Order => ETA screen works.
  // - Need to break out another base component to display all the menu items, ordered items and receipt items
  // - Need to style much better. This looks like crap tbh...
  // - What a ride it has been... :-)

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
