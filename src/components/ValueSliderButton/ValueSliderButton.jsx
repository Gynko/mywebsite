import ButtonValue from "../ButtonValue/ButtonValue";
import Slider from "../Slider/Slider";
import "./ValueSliderButton.styles.css";

function ValueSliderButton({ id, label, marginTop, placeholder }) {
  return (
    <div
      className={`value-slider-container value-slider-container-margin-${marginTop}`}
    >
      <ButtonValue id={id} label={label} placeholder={placeholder} />
      <Slider />
    </div>
  );
}

export default ValueSliderButton;
