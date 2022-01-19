import { useState } from "react";
import DisplayCopyProperty from "../../../../../components/DisplayCopyProperty/DisplayCopyProperty";
import PropertyTitle from "../../../../../components/PropertyTitle/PropertyTitle";
import ValueSliderButton from "../../../../../components/ValueSliderButton/ValueSliderButton";
import "./FlexboxFlex.styles.css";
import FlexGrow from "./FlexboxGraphFlexGrow";

function FlexboxFlex({ visible, itemCat, propertiesCat }) {
  const [flexGrowAlone, setFlexGrowAlone] = useState(0);
  const [flexShrinkAlone, setFlexShrinkAlone] = useState(1);
  const [flexBasisAlone, setFlexBasisAlone] = useState("auto");

  function onFlexGrow(event) {
    setFlexGrowAlone(event.target.value);
  }
  function displayFlexProperty() {
    if (itemCat === true && visible === true && propertiesCat === true) {
      return (
        <div>
          <PropertyTitle marginTop="small">
            {`flex is the shorthand of 3 properties: \nflex-grow flex-shrink flex-basis`}
          </PropertyTitle>
          <ValueSliderButton
            id="flex-grow"
            label={`flex-\ngrow`}
            marginTop="small"
            placeholder="0px"
            min={1}
            max={12}
            value={flexGrowAlone}
            unit=""
            onChange={onFlexGrow}
          />
          <FlexGrow flexGrow={flexGrowAlone} />
          <DisplayCopyProperty
            property={`flex-grow: ${flexGrowAlone}`}
            marginTop="small"
          />
        </div>
      );
    } else return null;
  }
  return displayFlexProperty();
}

export default FlexboxFlex;
