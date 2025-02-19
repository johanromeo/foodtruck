import "./index.css";

//TODO: Need className fixing

function DisplaySum() {
  return (
    <div className="display-sum-container">
      <div>
        <p className="total">TOTALT</p>
        <p className="moms">inkl 20% moms</p>
      </div>
      <div className="total">
        <p>101 SEK</p>
      </div>
    </div>
  );
}

export { DisplaySum };
