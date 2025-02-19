import { DisplaySum } from "@foodtruck/display-sum/ui";
import "./index.css";

function DisplayReceipt() {
  return (
    <div>
      <img src="/src/assets/red-logo.png" alt="YYGS logo" />
      <h2>KVITTO</h2>
      <p>#4kfsdp59d</p>
      <p>KARLSTAD.................27 SEK</p>
      <p>KARLSTAD.................27 SEK</p>
      <p>KARLSTAD.................27 SEK</p>
      <p>KARLSTAD.................27 SEK</p>
      <p>KARLSTAD.................27 SEK</p>
      <p>KARLSTAD.................27 SEK</p>
      <p>KARLSTAD.................27 SEK</p>
      <DisplaySum />
    </div>
  );
}

export { DisplayReceipt };
