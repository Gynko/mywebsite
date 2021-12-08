import "./Button.styles.css";

function Button({ name, value, label }) {
  return (
    <button type="button" name={name} value={value} className="button">
      {label}
    </button>
  );
}

export default Button;
