import "./ButtonActionable.styles.css";

function ButtonActionable({
  color,
  onClick,
  value,
  isActivated,
  basis,
  ...otherProps
}) {
  return isActivated === false ? (
    <button
      onClick={onClick}
      className={`button-actionable button-actionable-${color} button-basis-${basis}`}
      value={value}
      {...otherProps}
    >
      {value}
    </button>
  ) : (
    <button
      onClick={onClick}
      className={`button-actionable button-actionable-${color} button-actionable-${color}-${isActivated} button-basis-${basis}`}
      value={value}
      {...otherProps}
    >
      {value}
    </button>
  );
}

export default ButtonActionable;
