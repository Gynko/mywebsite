import { useState } from "react";
import CssPropertiesMenu from "../../../../../components/CssPropertiesMenu/CssPropertiesMenu";
import FlexboxGraphDisplay from "./FlexboxGraphDisplay";
import DisplayCopyProperty from "../../../../../components/DisplayCopyProperty/DisplayCopyProperty";

import "./FlexboxDisplay.styles.css";

function FlexboxDisplay({ containerCat, propertiesCat, visible }) {
  const [displayFlexGraph, setDisplayFlexGraph] = useState("flex");
  function onFlex(event) {
    setDisplayFlexGraph(event.target.value);
  }

  function setDisplayCategory() {
    if (containerCat === true && visible === true && propertiesCat === true) {
      return (
        <div className="flexbox-graph-display-positioning">
          <CssPropertiesMenu
            name="align-content"
            listObj={[
              { property: "flex", label: `flex` },
              { property: "inline-flex", label: `inline\n-flex` },
            ]}
            onChange={onFlex}
            graph={displayFlexGraph}
            columns={2}
            marginTop="medium"
          />
          <FlexboxGraphDisplay property={displayFlexGraph} />
          <DisplayCopyProperty
            property={`display: ${displayFlexGraph}`}
            marginTop="medium"
          />
        </div>
      );
    } else return null;
  }
  return setDisplayCategory();
}

export default FlexboxDisplay;
