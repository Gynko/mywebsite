import { useState } from "react";
import "./FlexboxGap.styles.css";
import ValueSliderButton from "../../../../../components/ValueSliderButton/ValueSliderButton";
import FlexboxGraphGap from "./FlexboxGraphGap";
import DisplayCopyProperty from "../../../../../components/DisplayCopyProperty/DisplayCopyProperty";

function FlexboxGap({ visible, containerCat, propertiesCat }) {
  const [gap, setGap] = useState(0);
  const [rowGap, setRowGap] = useState(0);
  const [columnGap, setColumnGap] = useState(0);

  function onGapChange(event) {
    setGap(event.target.value);
    setRowGap(event.target.value);
    setColumnGap(event.target.value);
  }
  function onRowChange(event) {
    setRowGap(event.target.value);
  }
  function onColumnChange(event) {
    setColumnGap(event.target.value);
  }
  function displayGapProperty() {
    if (rowGap === columnGap) {
      return (
        <DisplayCopyProperty property={`gap: ${rowGap}px`} marginTop="small" />
      );
    } else
      return (
        <div className="display-copy-property-page-container">
          <DisplayCopyProperty
            property={`row-gap: ${rowGap}px;\ncolumn-gap: ${columnGap}px;`}
            marginTop="small"
          />
        </div>
      );
  }

  function setGapCategory() {
    if (containerCat === true && visible === true && propertiesCat === true) {
      return (
        <>
          <p className="flexbox-graph-flow-warning">
            ⚠️: Doesn't work on older IOS devices.
          </p>
          <div className="flexbox-graph-flow-positioning">
            <ValueSliderButton
              id="gap"
              label="gap"
              marginTop="small"
              placeholder="0px"
              min={0}
              max={12}
              value={gap}
              unit="px"
              onChange={onGapChange}
            />
            <ValueSliderButton
              id="row-gap"
              label={`row-\ngap`}
              marginTop="small"
              placeholder="0px"
              min={0}
              max={12}
              value={rowGap}
              unit="px"
              onChange={onRowChange}
            />
            <ValueSliderButton
              id="column-gap"
              label={`column-\ngap`}
              marginTop="small"
              placeholder="0px"
              min={0}
              max={12}
              value={columnGap}
              unit="px"
              onChange={onColumnChange}
            />
          </div>
          <FlexboxGraphGap rowGap={rowGap} columnGap={columnGap} />
          {displayGapProperty()}
        </>
      );
    } else return null;
  }
  return setGapCategory();
}

export default FlexboxGap;
