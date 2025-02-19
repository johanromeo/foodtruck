import "./index.css";

// Dynamic button meant as a base component. Used in other components.
// Dynamic styling, onClick, text
function Button({ type, onClick, text }) {
  return (
    <button className={`button button__${type}`} onClick={onClick}>
      {text}
    </button>
  );
}

export { Button };
