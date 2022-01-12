import ButtonActionable from "../../../../components/ButtonActionable/ButtonActionable";
import "./FlexboxAlign.styles.css";
import { useState } from "react";
import RadioButtons from "../../../../components/RadioButtons/RadioButtons";

function FlexboxAlign({ containerCat, propertiesCat, align }) {
  const [justifyContentCat, setJustifyContentCat] = useState(false);

  const [alignItemsCat, setAlignItemsCat] = useState(false);
  const [alignContentCat, setAlignContentCat] = useState(false);
  const [justifyContentGraph, setJustifyContentGraph] = useState("flex-start");
  const [alignItemsGraph, setAlignItemsGraph] = useState("flex-start");

  function onJustContent(event) {
    setJustifyContentGraph(event.target.value);
  }

  function onAlignItems(event) {
    setAlignItemsGraph(event.target.value);
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
                <RadioButtons
                  name="justify-content"
                  value="flex-start"
                  label={`flex\n-start`}
                  id="justify-flex-start"
                  onChange={onJustContent}
                  checked={justifyContentGraph === "flex-start"}
                />
                <RadioButtons
                  name="justify-content"
                  value="center"
                  label={`center`}
                  id="justify-center"
                  onChange={onJustContent}
                  checked={justifyContentGraph === "center"}
                />
                <RadioButtons
                  name="justify-content"
                  value="flex-end"
                  label={`flex\n-end`}
                  id="justify-flex-end"
                  onChange={onJustContent}
                  checked={justifyContentGraph === "flex-end"}
                />
                <RadioButtons
                  name="justify-content"
                  value="space-between"
                  label={`space\n-between`}
                  id="justify-space-between"
                  onChange={onJustContent}
                  checked={justifyContentGraph === "space-between"}
                />
                <RadioButtons
                  name="justify-content"
                  value="space-around"
                  label={`space\n-around`}
                  id="justify-space-around"
                  onChange={onJustContent}
                  checked={justifyContentGraph === "space-around"}
                />

                <RadioButtons
                  name="justify-content"
                  value="space-evenly"
                  label={`space\n-evenly`}
                  id="justify-space-evenly"
                  onChange={onJustContent}
                  checked={alignItemsGraph === "space-evenly"}
                />
              </div>
              <div
                className={`flexbox-graphics-container flexbox-justify-content-container justify-content-${justifyContentGraph}`}
              >
                <div className="flexbox-graphics-items flexbox-justify-content-items">
                  item 1
                </div>
                <div className="flexbox-graphics-items flexbox-justify-content-items">
                  item 2
                </div>
                <div className="flexbox-graphics-items flexbox-justify-content-items">
                  item 3
                </div>
              </div>
            </>
          )}
          {alignItemsCat === false ? null : (
            <>
              <div className="flexbox-options">
                <RadioButtons
                  name="align-items"
                  value="flex-start"
                  label={`flex\n-start`}
                  id="align-items-flex-start"
                  onChange={onAlignItems}
                  checked={alignItemsGraph === "flex-start"}
                />
                <RadioButtons
                  name="align-items"
                  value="center"
                  label={`center`}
                  id="align-items-center"
                  onChange={onAlignItems}
                  checked={alignItemsGraph === "center"}
                />
                <RadioButtons
                  name="align-items"
                  value="flex-end"
                  label={`flex\n-end`}
                  id="align-items-flex-end"
                  onChange={onAlignItems}
                  checked={alignItemsGraph === "flex-end"}
                />
                <RadioButtons
                  name="align-items"
                  value="stretch"
                  label={`stretch`}
                  id="align-items-stretch"
                  onChange={onAlignItems}
                  checked={alignItemsGraph === "stretch"}
                />
                <RadioButtons
                  name="align-items"
                  value="baseline"
                  label={`baseline`}
                  id="align-items-baseline"
                  onChange={onAlignItems}
                  checked={alignItemsGraph === "baseline"}
                />
              </div>
              <div
                className={`flexbox-graphics-container flexbox-align-items-container align-items-${alignItemsGraph}`}
              >
                <div className="flexbox-graphics-items flexbox-align-items-items flexbox-align-items-items-1">
                  item 1
                </div>
                <div className="flexbox-graphics-items flexbox-align-items-items flexbox-align-items-items-2">
                  item 2
                </div>
                <div className="flexbox-graphics-items flexbox-align-items-items flexbox-align-items-items-3">
                  item 3
                </div>
              </div>
            </>
          )}
        </>
      );
    else return null;
  }
  return setAlignCategory();
}

export default FlexboxAlign;
