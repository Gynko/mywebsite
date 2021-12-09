import "./ButtonActionable.styles.css";

function ButtonActionable({ label, color, onClick, ...otherProps }) {
  return (
    <button
      onClick={onClick}
      className={`button-actionable button-actionable-${color}`}
      {...otherProps}
    >
      {label}
    </button>
  );
}

export default ButtonActionable;
