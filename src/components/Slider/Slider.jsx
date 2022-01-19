import "./Slider.styles.css";

function Slider({ min, max, value, onChange, color }) {
  return (
    <div className="slider-container">
      <input
        type="range"
        className={`slider-bar slider-bar-${color}`}
        min={min}
        max={max}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default Slider;
