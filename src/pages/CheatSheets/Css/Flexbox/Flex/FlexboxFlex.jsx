import { useState } from "react";
import DisplayCopyProperty from "../../../../../components/DisplayCopyProperty/DisplayCopyProperty";
import PropertyTitle from "../../../../../components/PropertyTitle/PropertyTitle";
import ValueSliderButton from "../../../../../components/ValueSliderButton/ValueSliderButton";
import "./FlexboxFlex.styles.css";
import FlexboxGraphFlexGrow from "./FlexboxGraphFlexGrow";
import FlexboxGraphFlexShrink from "./FlexboxGraphFlexShrink";

function FlexboxFlex({ visible, itemCat, propertiesCat }) {
  const [flexGrowAlone, setFlexGrowAlone] = useState({ flexGrow: 0 });
  const [flexShrinkAlone, setFlexShrinkAlone] = useState(1);
  const [flexBasisAlone, setFlexBasisAlone] = useState("auto");

  function onFlexGrow(event) {
    setFlexGrowAlone(event.target.value);
  }
  function onFlexShrink(event) {
    setFlexShrinkAlone(event.target.value);
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
            min={0}
            max={24}
            value={flexGrowAlone}
            unit=""
            onChange={onFlexGrow}
          />
          <FlexboxGraphFlexGrow flexGrow={flexGrowAlone} />
          <DisplayCopyProperty
            property={`flex-grow: ${flexGrowAlone}`}
            marginTop="small"
          />
          <ValueSliderButton
            id="flex-shrink"
            label={`flex-\nshrink`}
            marginTop="small"
            placeholder="0px"
            min={0}
            max={24}
            value={flexShrinkAlone}
            unit=""
            onChange={onFlexShrink}
          />
          <FlexboxGraphFlexShrink flexShrink={flexShrinkAlone} />
          <DisplayCopyProperty
            property={`flex-shrink: ${flexShrinkAlone}`}
            marginTop="small"
          />
        </div>
      );
    } else return null;
  }
  return displayFlexProperty();
}

export default FlexboxFlex;
