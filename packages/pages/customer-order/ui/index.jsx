import { useNavigate } from "react-router-dom";
import "./index.css";

import { DisplayOrder } from "@foodtruck/display-order";

function CustomerOrder() {
  const navigate = useNavigate();

  return (
    <div>
      <DisplayOrder />

      {/* Base components under this line? */}
      <p>TOTAL: 100kr</p>
      <button
        onClick={
          () => alert("User navigates to ETA screen")
          // onClick={() => navigate("/eta-screen")}
        }
      >
        Take my money
      </button>
    </div>
  );
}

export { CustomerOrder };
