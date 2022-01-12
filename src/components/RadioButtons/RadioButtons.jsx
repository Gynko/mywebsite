import "./RadioButtons.styles.css";

function RadioButtons({ name, value, id, label, ...otherProps }) {
  return (
    <div className="radio-input-container ">
      <input
        className="radio-input"
        type="radio"
        name={name}
        value={value}
        id={id}
        {...otherProps}
      />
      <label className="radio-label" htmlFor={id}>
        {label}
      </label>
    </div>
  );
}

export default RadioButtons;
