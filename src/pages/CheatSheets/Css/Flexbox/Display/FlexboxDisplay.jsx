import { useState } from "react/cjs/react.development";
import CssPropertiesMenu from "../../../../../components/CssPropertiesMenu/CssPropertiesMenu";
import FlexboxGraphDisplay from "./FlexboxGraphDisplay";

function FlexboxDisplay({ containerCat, propertiesCat, visible }) {
  const [displayFlexGraph, setDisplayFlexGraph] = useState("flex");
  function onFlex(event) {
    setDisplayFlexGraph(event.target.value);
  }

  function setDisplayCategory() {
    if (containerCat === true && visible === true && propertiesCat === true) {
      return (
        <>
          <CssPropertiesMenu
            name="align-content"
            listObj={[
              { property: "flex", label: `flex` },
              { property: "inline-flex", label: `inline\n-flex` },
            ]}
            onChange={onFlex}
            graph={displayFlexGraph}
            columns={2}
            marginTop="small"
          />
          <FlexboxGraphDisplay property={displayFlexGraph} />
        </>
      );
    } else return null;
  }
  return setDisplayCategory();
}

export default FlexboxDisplay;
