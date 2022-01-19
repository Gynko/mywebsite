import ButtonValue from "../ButtonValue/ButtonValue";
import Slider from "../Slider/Slider";
import "./ValueSliderButton.styles.css";

function ValueSliderButton({
  id,
  label,
  marginTop,
  placeholder,
  min,
  max,
  value,
  unit,
  onChange,
  columnGap,
  color,
  ...otherProps
}) {
  return (
    <div
      className={`value-slider-container value-slider-container-margin-${marginTop}`}
    >
      <ButtonValue label={label} placeholder={`${value}${unit}`} />
      <Slider
        min={min}
        max={max}
        value={value}
        onChange={onChange}
        color={color}
        {...otherProps}
      />
    </div>
  );
}

export default ValueSliderButton;
