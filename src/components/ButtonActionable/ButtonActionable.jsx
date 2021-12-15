import "./ButtonActionable.styles.css";

function ButtonActionable({
  color,
  onClick,
  value,
  isActivated,
  ...otherProps
}) {
  return isActivated === false ? (
    <button
      onClick={onClick}
      className={`button-actionable button-actionable-${color}`}
      value={value}
      {...otherProps}
    >
      {value}
    </button>
  ) : (
    <button
      onClick={onClick}
      className={`button-actionable button-actionable-${color} button-actionable-${value}-active`}
      value={value}
      {...otherProps}
    >
      {value}
    </button>
  );
}

export default ButtonActionable;
