import { useState } from "react";

import ButtonActionable from "../../../../components/ButtonActionable/ButtonActionable";
import TerminologyFlexbox from "../../../../animations/TerminologyFlexbox/TerminologyFlexbox";
import TitleHeader from "../../../../components/TitleHeader/TitleHeader";
import "./FlexboxCheatSheet.styles.css";
import Footer from "../../../../components/Footer/Footer";
import LabelledIcon from "../../../../components/LabelledIcon/LabelledIcon";
import IconFlow from "../../../../components/Icons/IconFlow";

function FlexboxCheatSheet() {
  const [terminologyCat, setTerminologyCatOn] = useState(false);
  const [propertiesCat, setPropertiesCatOn] = useState(false);
  const [containerCat, setContainerCatOn] = useState(false);
  const [itemCat, setItemCatOn] = useState(false);
  const [termiName, setTermiName] = useState(false);
  const [termiAxis, setTermiAxis] = useState(false);
  const [termiSize, setTermiSize] = useState(false);
  const [termiStartEnd, setTermiStartEnd] = useState(false);

  function terminology() {
    setTerminologyCatOn(!terminologyCat);
    setPropertiesCatOn(false);
  }
  function properties() {
    setPropertiesCatOn(!propertiesCat);
    setTerminologyCatOn(false);
  }
  function container() {
    setContainerCatOn(!containerCat);
    setItemCatOn(false);
  }
  function item() {
    setItemCatOn(!itemCat);
    setContainerCatOn(false);
  }
  function termiNameToggle() {
    setTermiName(!termiName);
  }
  function termiAxisToggle() {
    setTermiAxis(!termiAxis);
  }
  function termiSizeToggle() {
    setTermiSize(!termiSize);
  }
  function termiStartEndToggle() {
    setTermiStartEnd(!termiStartEnd);
  }

  return (
    <div className="cheat-sheet-container">
      <TitleHeader title="flexbox" />
      <div className="cheat-sheet-all-buttons">
        <div className="cheat-sheet-options-container">
          <ButtonActionable
            value="terminology"
            color="--color-button-yellow"
            onClick={terminology}
            isActivated={terminologyCat}
            basis={2}
          />
          <ButtonActionable
            value="properties"
            color="--color-button-yellow"
            onClick={properties}
            isActivated={propertiesCat}
            basis={2}
          />
        </div>
        {terminologyCat === false ? null : (
          <div className="cheat-sheet-sub-options-container">
            <ButtonActionable
              value="name"
              color="--color-button-white"
              onClick={termiNameToggle}
              isActivated={termiName}
              basis={4}
            />
            <ButtonActionable
              value="axis"
              color="--color-button-redish"
              onClick={termiAxisToggle}
              isActivated={termiAxis}
              basis={4}
            />
            <ButtonActionable
              value="size"
              color="--color-button-green"
              onClick={termiSizeToggle}
              isActivated={termiSize}
              basis={4}
            />
            <ButtonActionable
              value={`start\nend`}
              color="--color-button-blue"
              onClick={termiStartEndToggle}
              isActivated={termiStartEnd}
              basis={4}
            />
          </div>
        )}
      </div>
      {terminologyCat === false ? null : (
        <div className="cheat-sheet-svg">
          <TerminologyFlexbox
            name={termiName}
            axis={termiAxis}
            size={termiSize}
            startend={termiStartEnd}
          />
        </div>
      )}
      {propertiesCat === false ? null : (
        <div className="cheat-sheet-options-container">
          <ButtonActionable
            value={`flex\ncontainer`}
            color="--color-button-yellow"
            onClick={container}
            isActivated={containerCat}
            basis={2}
          />
          <ButtonActionable
            value={`flex\nitem`}
            color="--color-button-yellow"
            onClick={item}
            isActivated={itemCat}
            basis={2}
          />
        </div>
      )}
      {containerCat === false ? null : (
        <div className="flex-cont-main-cat">
          <LabelledIcon svgFile={<IconFlow />} title="Display" />
          <LabelledIcon svgFile={<IconFlow />} title="Flow" />
          <LabelledIcon svgFile={<IconFlow />} title="Align" />
          <LabelledIcon svgFile={<IconFlow />} title="gap" />
        </div>
      )}
      <Footer />
    </div>
  );
}

export default FlexboxCheatSheet;
