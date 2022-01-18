import { useState } from "react";
import "./FlexboxGap.styles.css";
import ValueSliderButton from "../../../../../components/ValueSliderButton/ValueSliderButton";

function FlexboxGap({ visible, containerCat, propertiesCat }) {
  const [gapProperty, setGapProperty] = useState("gap");

  function onGap(event) {
    setGapProperty(event.target.value);
  }
  function setGapCategory() {
    if (containerCat === true && visible === true && propertiesCat === true) {
      return (
        <div className="flexbox-graph-flow-positioning">
          <ValueSliderButton
            id="gap"
            label="gap"
            marginTop="small"
            placeholder="0px"
          />
          <ValueSliderButton
            id="row-gap"
            label={`row-\ngap`}
            marginTop="small"
            placeholder="0px"
          />
          <ValueSliderButton
            id="column-gap"
            label={`column-\ngap`}
            marginTop="small"
            placeholder="0px"
          />
        </div>
      );
    } else return null;
  }
  return setGapCategory();
}

export default FlexboxGap;
