import ButtonActionable from "../../../../../components/ButtonActionable/ButtonActionable";
import { useState } from "react";
import CssPropertiesMenu from "../../../../../components/CssPropertiesMenu/CssPropertiesMenu";
import FlexboxGraphJustifyContent from "./FlexboxGraphJustifyContent";
import FlexboxGraphAlignItems from "./FlexboxGraphAlignItems";
import FlexboxGraphAlignContent from "./FlexboxGraphAlignContent";
import ButtonActionableContainer from "../../../../../components/ButtonActionableContainer/ButtonActionableContainer";
import DisplayCopyProperty from "../../../../../components/DisplayCopyProperty/DisplayCopyProperty";

function FlexboxAlign({ containerCat, propertiesCat, visible }) {
  /* Setting state for categories-buttons */
  const [justifyContentCat, setJustifyContentCat] = useState(false);
  const [alignItemsCat, setAlignItemsCat] = useState(false);
  const [alignContentCat, setAlignContentCat] = useState(false);
  function onJustContent(event) {
    setJustifyContentGraph(event.target.value);
  }
  function onAlignItems(event) {
    setAlignItemsGraph(event.target.value);
  }
  function onAlignContent(event) {
    setAlignContentGraph(event.target.value);
  }
  /* Setting state for the graphics - flexbox properties */
  const [justifyContentGraph, setJustifyContentGraph] = useState("flex-start");
  const [alignItemsGraph, setAlignItemsGraph] = useState("flex-start");
  const [alignContentGraph, setAlignContentGraph] = useState("flex-start");

  function onJustifyContentCat() {
    setJustifyContentCat(!justifyContentCat);
    setAlignItemsCat(false);
    setAlignContentCat(false);
  }
  function onAlignItemsCat() {
    setAlignItemsCat(!alignItemsCat);
    setJustifyContentCat(false);
    setAlignContentCat(false);
  }
  function onAlignContentCat() {
    setAlignContentCat(!alignContentCat);
    setJustifyContentCat(false);
    setAlignItemsCat(false);
  }
  /* Setting the conditional rendering depending on button selection state*/
  function setAlignCategory() {
    if (containerCat === true && visible === true && propertiesCat === true)
      return (
        <>
          <ButtonActionableContainer marginTop="small">
            <ButtonActionable
              value={`justify-\ncontent`}
              color="--color-button-yellow"
              onClick={onJustifyContentCat}
              isActivated={justifyContentCat}
              buttonsNumber={3}
            />
            <ButtonActionable
              value={`align-\nitems`}
              color="--color-button-yellow"
              onClick={onAlignItemsCat}
              isActivated={alignItemsCat}
              buttonsNumber={3}
            />
            <ButtonActionable
              value={`align-\ncontent`}
              color="--color-button-yellow"
              onClick={onAlignContentCat}
              isActivated={alignContentCat}
              buttonsNumber={3}
            />
          </ButtonActionableContainer>

          {justifyContentCat === false ? null : (
            <>
              <CssPropertiesMenu
                name="justify-content"
                listObj={[
                  { property: "flex-start", label: `flex\n-start` },
                  { property: "center", label: `center` },
                  { property: "flex-end", label: `flex\n-end` },
                  { property: "space-between", label: `space\n-between` },
                  { property: "space-around", label: `space\n-around` },
                  { property: "space-evenly", label: `space\n-evenly` },
                ]}
                onChange={onJustContent}
                graph={justifyContentGraph}
                columns={3}
                marginTop="small"
              />
              <FlexboxGraphJustifyContent
                justifyContentGraph={justifyContentGraph}
              />
              <DisplayCopyProperty
                property={`justify-content: ${justifyContentGraph}`}
                marginTop="small"
              />
            </>
          )}

          {alignItemsCat === false ? null : (
            <>
              <CssPropertiesMenu
                name="align-items"
                listObj={[
                  { property: "flex-start", label: `flex\n-start` },
                  { property: "center", label: `center` },
                  { property: "flex-end", label: `flex\n-end` },
                  { property: "stretch", label: `stretch` },
                  { property: "baseline", label: `baseline` },
                ]}
                onChange={onAlignItems}
                graph={alignItemsGraph}
                columns={3}
                marginTop="small"
              />
              <FlexboxGraphAlignItems alignItemsGraph={alignItemsGraph} />
              <DisplayCopyProperty
                property={`align-items: ${alignItemsGraph}`}
                marginTop="small"
              />
            </>
          )}
          {alignContentCat === false ? null : (
            <>
              <CssPropertiesMenu
                name="align-content"
                listObj={[
                  { property: "flex-start", label: `flex\n-start` },
                  { property: "center", label: `center` },
                  { property: "flex-end", label: `flex\n-end` },
                  { property: "stretch", label: `stretch` },
                  { property: "space-around", label: `space\n-around` },
                  { property: "space-between", label: `space\n-between` },
                ]}
                onChange={onAlignContent}
                graph={alignContentGraph}
                columns={3}
                marginTop="small"
              />
              <FlexboxGraphAlignContent alignContentGraph={alignContentGraph} />
              <DisplayCopyProperty
                property={`align-content: ${alignContentGraph}`}
                marginTop="small"
              />
            </>
          )}
        </>
      );
    else return null;
  }
  return setAlignCategory();
}

export default FlexboxAlign;
