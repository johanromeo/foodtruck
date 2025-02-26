import "./index.css";

function DisplaySum({ total }) {
  return (
    <div className="display-sum-container">
      <div>
        <p className="total">TOTALT</p>
        <p className="moms">inkl 20% moms</p>
      </div>
      <div className="total">
        <p>{total} SEK</p>
      </div>
    </div>
  );
}

export { DisplaySum };
