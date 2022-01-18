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
  onChange,
  columnGap,
  ...otherProps
}) {
  return (
    <div
      className={`value-slider-container value-slider-container-margin-${marginTop}`}
    >
      <ButtonValue label={label} placeholder={`${value}px`} />
      <Slider
        min={min}
        max={max}
        value={value}
        onChange={onChange}
        {...otherProps}
      />
    </div>
  );
}

export default ValueSliderButton;
