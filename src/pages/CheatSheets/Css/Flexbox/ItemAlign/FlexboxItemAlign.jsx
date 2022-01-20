import { useState } from "react";

import CssPropertiesMenu from "../../../../../components/CssPropertiesMenu/CssPropertiesMenu";
import FlexboxItemAlignGraph from "./FlexboxItemAlignGraph";
import PropertyTitle from "../../../../../components/PropertyTitle/PropertyTitle";
import DisplayCopyProperty from "../../../../../components/DisplayCopyProperty/DisplayCopyProperty";

function FlexboxItemAlign({ itemCat, propertiesCat, visible }) {
  const [alignSelf, setAlignSelf] = useState("auto");
  function onAlignSelf(event) {
    setAlignSelf(event.target.value);
  }
  function setItemAlign() {
    if (itemCat === true && visible === true && propertiesCat === true) {
      return (
        <div>
          {" "}
          <CssPropertiesMenu
            name="align-self"
            listObj={[
              { property: "auto", label: `auto` },
              { property: "flex-start", label: `flex-\nstart` },
              { property: "center", label: `center` },
              { property: "flex-end", label: `flex-\nend` },
              { property: "baseline", label: `baseline` },
              { property: "stretch", label: `stretch` },
            ]}
            onChange={onAlignSelf}
            graph={alignSelf}
            columns={3}
            marginTop="small"
          />
          <PropertyTitle marginTop="small">
            Container is set to align-items: flex-start
          </PropertyTitle>
          <FlexboxItemAlignGraph alignSelf={alignSelf} />
          <DisplayCopyProperty property={`align-self: ${alignSelf}`} />
        </div>
      );
    } else return null;
  }
  return setItemAlign();
}

export default FlexboxItemAlign;
