import ButtonActionable from "../../../../components/ButtonActionable/ButtonActionable";
import "./FlexboxAlign.styles.css";
import { useState } from "react";
import CssPropertiesMenu from "../../../../components/CssPropertiesMenu/CssPropertiesMenu";
import FlexboxGraphJustifyContent from "./FlexboxGraphJustifyContent";
import FlexboxGraphAlignItems from "./FlexboxGraphAlignItems";
import FlexboxGraphAlignContent from "./FlexboxGraphAlignContent";

function FlexboxAlign({ containerCat, propertiesCat, align }) {
  const [justifyContentCat, setJustifyContentCat] = useState(false);

  const [alignItemsCat, setAlignItemsCat] = useState(false);
  const [alignContentCat, setAlignContentCat] = useState(false);
  const [justifyContentGraph, setJustifyContentGraph] = useState("flex-start");
  const [alignItemsGraph, setAlignItemsGraph] = useState("flex-start");
  const [alignContentGraph, setAlignContentGraph] = useState("flex-start");

  function onJustContent(event) {
    setJustifyContentGraph(event.target.value);
  }
  function onAlignItems(event) {
    setAlignItemsGraph(event.target.value);
  }
  function onAlignContent(event) {
    setAlignContentGraph(event.target.value);
  }

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

  function setAlignCategory() {
    if (containerCat === true && align === true && propertiesCat === true)
      return (
        <>
          <div className="flexbox-align-categories-container">
            <ButtonActionable
              value={`justify-\ncontent`}
              color="--color-button-yellow"
              onClick={onJustifyContentCat}
              isActivated={justifyContentCat}
              basis={3}
            />
            <ButtonActionable
              value={`align-\nitems`}
              color="--color-button-yellow"
              onClick={onAlignItemsCat}
              isActivated={alignItemsCat}
              basis={3}
            />
            <ButtonActionable
              value={`align-\ncontent`}
              color="--color-button-yellow"
              onClick={onAlignContentCat}
              isActivated={alignContentCat}
              basis={3}
            />
          </div>
          {justifyContentCat === false ? null : (
            <>
              <div className="flexbox-options">
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
                />
              </div>
              <FlexboxGraphJustifyContent
                justifyContentGraph={justifyContentGraph}
              />
            </>
          )}
          {alignItemsCat === false ? null : (
            <>
              <div className="flexbox-options">
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
                />
              </div>
              <FlexboxGraphAlignItems alignItemsGraph={alignItemsGraph} />
            </>
          )}
          {alignContentCat === false ? null : (
            <>
              <div className="flexbox-options">
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
                />
              </div>
              <FlexboxGraphAlignContent alignContentGraph={alignContentGraph} />
            </>
          )}
        </>
      );
    else return null;
  }
  return setAlignCategory();
}

export default FlexboxAlign;
