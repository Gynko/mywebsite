import "./ButtonValue.styles.css";

function ButtonValue({ label, placeholder }) {
  return (
    <div className="button-value-container">
      <p className="button-value-label">{label}</p>
      <div className="button-value">{placeholder}</div>
    </div>
  );
}

export default ButtonValue;
