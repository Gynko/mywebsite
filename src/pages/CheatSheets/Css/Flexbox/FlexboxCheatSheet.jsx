import { useState } from "react";

import "./FlexboxCheatSheet.styles.css";

import ButtonActionable from "../../../../components/ButtonActionable/ButtonActionable";
import TerminologyFlexbox from "../../../../animations/TerminologyFlexbox/TerminologyFlexbox";
import TitleHeader from "../../../../components/TitleHeader/TitleHeader";
import Footer from "../../../../components/Footer/Footer";
import LabelledIcon from "../../../../components/LabelledIcon/LabelledIcon";
import IconFlow from "../../../../components/Icons/IconFlow";
import IconGap from "../../../../components/Icons/IconGap";
import FlexboxAlign from "./Align/FlexboxAlign";
import PageContainerColumn from "../../../../components/PageContainerColumn/PageContainerColumn";
import ButtonActionableContainer from "../../../../components/ButtonActionableContainer/ButtonActionableContainer";

function FlexboxCheatSheet() {
  /* Buttons state - Menus */
  const [terminologyCat, setTerminologyCatOn] = useState(false);
  const [propertiesCat, setPropertiesCatOn] = useState(false);
  const [containerCat, setContainerCatOn] = useState(false);
  const [itemCat, setItemCatOn] = useState(false);
  /* Buttons state - Flexbox terminology */
  const [termiName, setTermiName] = useState(false);
  const [termiAxis, setTermiAxis] = useState(false);
  const [termiSize, setTermiSize] = useState(false);
  const [termiStartEnd, setTermiStartEnd] = useState(false);
  /* Buttons state - Flex Container - Align */
  const [display, setDisplay] = useState(false);
  const [flow, setFlow] = useState(false);
  const [align, setAlign] = useState(false);
  const [gap, setGap] = useState(false);
  /* OnClick functions - Menus */
  function terminology() {
    setTerminologyCatOn(!terminologyCat);
    setPropertiesCatOn(false);
  }
  function properties() {
    setPropertiesCatOn(!propertiesCat);
    setTerminologyCatOn(false);
  }
  function flexContainer() {
    setContainerCatOn(!containerCat);
    setItemCatOn(false);
  }
  function flexItem() {
    setItemCatOn(!itemCat);
    setContainerCatOn(false);
  }
  /* Container category onClick functions */
  function displayToggle() {
    setDisplay(!display);
    setFlow(false);
    setAlign(false);
    setGap(false);
  }
  function flowToggle() {
    setFlow(!flow);
    setDisplay(false);
    setAlign(false);
    setGap(false);
  }
  function alignToggle() {
    setAlign(!align);
    setDisplay(false);
    setFlow(false);
    setGap(false);
  }
  function gapToggle() {
    setGap(!gap);
    setDisplay(false);
    setFlow(false);
    setAlign(false);
  }
  /* Toggle Menu Flex Container*/
  function flexContainerMenu() {
    if (containerCat === true && propertiesCat === true)
      return (
        <div className="flex-container-main-category">
          <LabelledIcon
            svgFile={<IconFlow />}
            title="display"
            activated={display}
            onClick={displayToggle}
          />
          <LabelledIcon
            svgFile={<IconFlow />}
            title="flow"
            activated={flow}
            onClick={flowToggle}
          />
          <LabelledIcon
            svgFile={<IconFlow />}
            title="Align"
            activated={align}
            onClick={alignToggle}
          />
          <LabelledIcon
            svgFile={<IconGap />}
            title="gap"
            activated={gap}
            onClick={gapToggle}
          />
        </div>
      );
    else return null;
  }
  /* TODO Toggle Menu Flex Container*/
  function flexItemMenu() {}
  return (
    <PageContainerColumn verticalCenter="vertical-center">
      <TitleHeader title="flexbox" />
      <div className="cheat-sheet-categories-buttons">
        <ButtonActionableContainer>
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
        </ButtonActionableContainer>
        {terminologyCat === false ? null : (
          <ButtonActionableContainer>
            <ButtonActionable
              value="name"
              color="--color-button-white"
              onClick={() => setTermiName(!termiName)}
              isActivated={termiName}
              basis={4}
            />
            <ButtonActionable
              value="axis"
              color="--color-button-redish"
              onClick={() => setTermiAxis(!termiAxis)}
              isActivated={termiAxis}
              basis={4}
            />
            <ButtonActionable
              value="size"
              color="--color-button-green"
              onClick={() => setTermiSize(!termiSize)}
              isActivated={termiSize}
              basis={4}
            />
            <ButtonActionable
              value={`start\nend`}
              color="--color-button-blue"
              onClick={() => setTermiStartEnd(!termiStartEnd)}
              isActivated={termiStartEnd}
              basis={4}
            />
          </ButtonActionableContainer>
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
            onClick={flexContainer}
            isActivated={containerCat}
            basis={2}
          />
          <ButtonActionable
            value={`flex\nitem`}
            color="--color-button-yellow"
            onClick={flexItem}
            isActivated={itemCat}
            basis={2}
          />
        </div>
      )}
      {flexContainerMenu()}
      <FlexboxAlign
        align={align}
        containerCat={containerCat}
        propertiesCat={propertiesCat}
      />
      <Footer />
    </PageContainerColumn>
  );
}

export default FlexboxCheatSheet;
