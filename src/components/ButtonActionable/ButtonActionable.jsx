import "./ButtonActionable.styles.css";

function ButtonActionable({
  color,
  onClick,
  value,
  isActivated,
  buttonsNumber,
  ...otherProps
}) {
  return isActivated === false ? (
    <button
      onClick={onClick}
      className={`button-actionable button-actionable-${color} button-number-${buttonsNumber}`}
      value={value}
      {...otherProps}
    >
      {value}
    </button>
  ) : (
    <button
      onClick={onClick}
      className={`button-actionable button-actionable-${color} button-actionable-${color}-${isActivated} button-number-${buttonsNumber}`}
      value={value}
      {...otherProps}
    >
      {value}
    </button>
  );
}

export default ButtonActionable;
