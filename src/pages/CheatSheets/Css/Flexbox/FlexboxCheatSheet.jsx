import { useState } from "react";

import ButtonActionable from "../../../../components/ButtonActionable/ButtonActionable";
import TerminologyFlexbox from "../../../../animations/TerminologyFlexbox/TerminologyFlexbox";
import TitleHeader from "../../../../components/TitleHeader/TitleHeader";
import "./FlexboxCheatSheet.styles.css";
import Footer from "../../../../components/Footer/Footer";

function FlexboxCheatSheet() {
  const [terminologyCat, setTerminologyCatOn] = useState(false);
  const [termiName, setTermiName] = useState(false);
  const [termiAxis, setTermiAxis] = useState(false);
  const [termiSize, setTermiSize] = useState(false);
  const [termiStartEnd, setTermiStartEnd] = useState(false);

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
          <ButtonActionable value="properties" color="--color-button-yellow" />
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
      <Footer />
    </div>
  );
}

export default FlexboxCheatSheet;
