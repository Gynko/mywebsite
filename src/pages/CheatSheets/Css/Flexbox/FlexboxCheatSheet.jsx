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
import FlexboxDisplay from "./Display/FlexboxDisplay";
import LabelledIconContainer from "../../../../components/LabelledIconContainer/LabelledIconContainer";
import FlexboxFlow from "./Flow/FlexboxFlow";
import FlexboxGap from "./Gap/FlexboxGap";
import FlexboxOrder from "./Order/FlexboxOrder";
import FlexboxFlex from "./Flex/FlexboxFlex";

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
  /* Buttons state - Flex Container */
  const [display, setDisplay] = useState(false);
  const [flow, setFlow] = useState(false);
  const [align, setAlign] = useState(false);
  const [gap, setGap] = useState(false);
  /* Buttons state - Flex Item */
  const [order, setOrder] = useState(false);
  const [flex, setFlex] = useState(false);
  const [flexItemAlign, setFlexItemAlign] = useState(false);
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
  /* Flex item category onClick functions */
  function displayOrder() {
    setOrder(!order);
    setFlex(false);
    setFlexItemAlign(false);
  }
  function displayFlex() {
    setFlex(!flex);
    setOrder(false);
    setFlexItemAlign(false);
  }
  function displayFlexItemAlign() {
    setFlexItemAlign(!flexItemAlign);
    setOrder(false);
    setFlex(false);
  }
  /* Toggle Menu Flex Container*/
  function flexContainerMenu() {
    if (containerCat === true && propertiesCat === true)
      return (
        <>
          <LabelledIconContainer marginTop="small">
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
              title="align"
              activated={align}
              onClick={alignToggle}
            />
            <LabelledIcon
              svgFile={<IconGap activated={gap} />}
              title="gap"
              activated={gap}
              onClick={gapToggle}
            />
          </LabelledIconContainer>
        </>
      );
    else return null;
  }
  function flexItemNenu() {
    if (itemCat === true && propertiesCat === true) {
      return (
        <>
          <LabelledIconContainer marginTop="small">
            <LabelledIcon
              svgFile={<IconFlow />}
              title="order"
              activated={order}
              onClick={displayOrder}
            />
            <LabelledIcon
              svgFile={<IconFlow />}
              title="flex"
              activated={flex}
              onClick={displayFlex}
            />
            <LabelledIcon
              svgFile={<IconFlow />}
              title="align"
              activated={flexItemAlign}
              onClick={displayFlexItemAlign}
            />
          </LabelledIconContainer>
        </>
      );
    }
  }
  return (
    <PageContainerColumn verticalCenter="vertical-center">
      <TitleHeader title="flexbox" />
      <ButtonActionableContainer marginTop="small">
        <ButtonActionable
          value="terminology"
          color="--color-button-yellow"
          onClick={terminology}
          isActivated={terminologyCat}
          buttonsNumber={2}
        />
        <ButtonActionable
          value="properties"
          color="--color-button-yellow"
          onClick={properties}
          isActivated={propertiesCat}
          buttonsNumber={2}
        />
      </ButtonActionableContainer>

      {terminologyCat === false ? null : (
        <>
          <ButtonActionableContainer marginTop="small">
            <ButtonActionable
              value="name"
              color="--color-button-white"
              onClick={() => setTermiName(!termiName)}
              isActivated={termiName}
              buttonsNumber={4}
            />
            <ButtonActionable
              value="axis"
              color="--color-button-redish"
              onClick={() => setTermiAxis(!termiAxis)}
              isActivated={termiAxis}
              buttonsNumber={4}
            />
            <ButtonActionable
              value="size"
              color="--color-button-green"
              onClick={() => setTermiSize(!termiSize)}
              isActivated={termiSize}
              buttonsNumber={4}
            />
            <ButtonActionable
              value={`start\nend`}
              color="--color-button-blue"
              onClick={() => setTermiStartEnd(!termiStartEnd)}
              isActivated={termiStartEnd}
              buttonsNumber={4}
            />
          </ButtonActionableContainer>
        </>
      )}

      {terminologyCat === false ? null : (
        <>
          <div className="cheat-sheet-svg">
            <TerminologyFlexbox
              name={termiName}
              axis={termiAxis}
              size={termiSize}
              startend={termiStartEnd}
            />
          </div>
        </>
      )}

      {propertiesCat === false ? null : (
        <>
          <ButtonActionableContainer marginTop="small">
            <ButtonActionable
              value={`flex\ncontainer`}
              color="--color-button-yellow"
              onClick={flexContainer}
              isActivated={containerCat}
              buttonsNumber={2}
            />
            <ButtonActionable
              value={`flex\nitem`}
              color="--color-button-yellow"
              onClick={flexItem}
              isActivated={itemCat}
              buttonsNumber={2}
            />
          </ButtonActionableContainer>
        </>
      )}
      {flexContainerMenu()}
      <FlexboxAlign
        visible={align}
        containerCat={containerCat}
        propertiesCat={propertiesCat}
      />
      <FlexboxDisplay
        visible={display}
        containerCat={containerCat}
        propertiesCat={propertiesCat}
      />
      <FlexboxFlow
        visible={flow}
        containerCat={containerCat}
        propertiesCat={propertiesCat}
      />
      <FlexboxGap
        visible={gap}
        containerCat={containerCat}
        propertiesCat={propertiesCat}
      />
      <Footer
        visible={gap}
        containerCat={containerCat}
        propertiesCat={propertiesCat}
      />
      {flexItemNenu()}
      <FlexboxOrder
        visible={order}
        itemCat={itemCat}
        propertiesCat={propertiesCat}
      />
      <FlexboxFlex
        visible={flex}
        itemCat={itemCat}
        propertiesCat={propertiesCat}
      />
    </PageContainerColumn>
  );
}

export default FlexboxCheatSheet;
