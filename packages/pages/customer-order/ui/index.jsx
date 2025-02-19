import { useNavigate } from "react-router-dom";
import "./index.css";

import { DisplayOrder } from "@foodtruck/display-order";
import { Button } from "@foodtruck/button";

function CustomerOrder() {
  const navigate = useNavigate();

  return (
    <div>
      <DisplayOrder />

      {/* Base components under this line? */}
      <p>TOTAL: 100kr</p>
      <Button
        type={"button button__black"}
        text={"Take My Money!"}
        // TODO: Maybe fix onclick so it's cleaner?
        onClick={() => {
          navigate("/eta");
        }}
      />
    </div>
  );
}

export { CustomerOrder };
