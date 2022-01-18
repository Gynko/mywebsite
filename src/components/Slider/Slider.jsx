import "./Slider.styles.css";

function Slider({ min, max, value, onChange }) {
  return (
    <div className="slider-container">
      <input
        type="range"
        className="slider-bar"
        min={min}
        max={max}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default Slider;
