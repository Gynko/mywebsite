import { useState } from "react";

import ButtonActionable from "../../../../components/ButtonActionable/ButtonActionable";
import Footer from "../../../../components/Footer/Footer";
import TerminologyFlexbox from "../../../../animations/TerminologyFlexbox/TerminologyFlexbox";
import TitleHeader from "../../../../components/TitleHeader/TitleHeader";
import "./FlexboxCheatSheet.styles.css";
import PageContainerNoScroll from "../../../../components/PageContainerNoScroll/PageContainerNoScroll";

function FlexboxCheatSheet() {
  const [terminologyCat, setTerminologyCatOn] = useState(true);
  const [termiName, setTermiName] = useState(true);
  const [termiAxis, setTermiAxis] = useState(true);
  const [termiSize, setTermiSize] = useState(true);
  const [termiStartEnd, setTermiStartEnd] = useState(true);

  function terminology() {
    setTerminologyCatOn(!terminologyCat);
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
    <PageContainerNoScroll>
      <div className="cheat-sheet-container">
        <TitleHeader title="flexbox" />
        <div className="cheat-sheet-all-buttons">
          <div className="cheat-sheet-options-container">
            <ButtonActionable
              value="terminology"
              color="--color-button-yellow"
              onClick={terminology}
              isActivated={terminologyCat}
            />
            <ButtonActionable
              value="properties"
              color="--color-button-yellow"
            />
          </div>
          {terminologyCat === false ? null : (
            <div className="cheat-sheet-sub-options-container">
              <ButtonActionable
                value="name"
                color="--color-button-white"
                onClick={termiNameToggle}
                isActivated={termiName}
              />
              <ButtonActionable
                value="axis"
                color="--color-button-redish"
                onClick={termiAxisToggle}
                isActivated={termiAxis}
              />
              <ButtonActionable
                value="size"
                color="--color-button-green"
                onClick={termiSizeToggle}
                isActivated={termiSize}
              />
              <ButtonActionable
                value="start-end"
                color="--color-button-blue"
                onClick={termiStartEndToggle}
                isActivated={termiStartEnd}
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
      </div>
      <Footer />
    </PageContainerNoScroll>
  );
}

export default FlexboxCheatSheet;
