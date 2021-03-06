import { useState } from "react";
import CssPropertiesMenu from "../../../../../components/CssPropertiesMenu/CssPropertiesMenu";
import FlexboxGraphFlow from "./FlexboxGraphFlow";
import DisplayCopyProperty from "../../../../../components/DisplayCopyProperty/DisplayCopyProperty";

import "./FlexboxFlow.styles.css";

function FlexboxFlow({ containerCat, propertiesCat, visible }) {
  const [direction, setDirection] = useState("row");
  const [wrap, setWrap] = useState("nowrap");

  function onDirection(event) {
    setDirection(event.target.value);
  }
  function onWrap(event) {
    setWrap(event.target.value);
  }

  function setFlowCategory() {
    if (containerCat === true && visible === true && propertiesCat === true) {
      return (
        <div className="flexbox-graph-flow-positioning">
          <CssPropertiesMenu
            name="direction"
            listObj={[
              { property: "row", label: `row` },
              { property: "row-reverse", label: `row-\nreverse` },
              { property: "column", label: `column` },
              { property: "column-reverse", label: `column-\nreverse` },
            ]}
            onChange={onDirection}
            graph={direction}
            columns={2}
            marginTop="small"
          />
          <CssPropertiesMenu
            name="wrap"
            listObj={[
              { property: "nowrap", label: `nowrap` },
              { property: "wrap", label: `wrap` },
              { property: "wrap-reverse", label: `wrap-\nreverse` },
            ]}
            onChange={onWrap}
            graph={wrap}
            columns={3}
            marginTop="small"
          />
          <FlexboxGraphFlow direction={direction} wrap={wrap} />
          <DisplayCopyProperty
            property={`flex-flow: ${direction} ${wrap}`}
            marginTop="small"
          />
        </div>
      );
    } else return null;
  }
  return setFlowCategory();
}

export default FlexboxFlow;
