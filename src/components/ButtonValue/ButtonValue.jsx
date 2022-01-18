import "./ButtonValue.styles.css";

function ButtonValue({ id, label, placeholder }) {
  return (
    <div className="button-value-container">
      <label className="button-value-label">{label}</label>
      <input
        className="button-value-input"
        type="number"
        id={id}
        placeholder={placeholder}
      ></input>
    </div>
  );
}

export default ButtonValue;
