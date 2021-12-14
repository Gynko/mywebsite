import { useState } from "react";

import ButtonActionable from "../../../../components/ButtonActionable/ButtonActionable";
import Footer from "../../../../components/Footer/Footer";
import PageContainer from "../../../../components/PageContainer/PageContainer";
import SvgFlexbox from "../../../../components/SVG/SvgFlexbox";
import TitleHeader from "../../../../components/TitleHeader/TitleHeader";
import "./FlexboxCheatSheet.styles.css";

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
    <PageContainer>
      <div className="cheat-sheet-container">
        <TitleHeader title="flexbox" />
        <div className="cheat-sheet-title-options">
          <div className="cheat-sheet-options-container">
            <ButtonActionable
              value="terminology"
              color="yellow"
              onClick={terminology}
              activated={terminologyCat}
            />
            <ButtonActionable value="Properties" color="yellow" />
          </div>
          {terminologyCat === false ? null : (
            <div className="cheat-sheet-sub-options-container">
              <ButtonActionable
                value="name"
                color="white"
                onClick={termiNameToggle}
                activated={termiName}
              />
              <ButtonActionable
                value="axis"
                color="redish"
                onClick={termiAxisToggle}
                activated={termiAxis}
              />
              <ButtonActionable
                value="size"
                color="green"
                onClick={termiSizeToggle}
                activated={termiSize}
              />
              <ButtonActionable
                value="start-end"
                color="blue"
                onClick={termiStartEndToggle}
                activated={termiStartEnd}
              />
            </div>
          )}
        </div>
        {terminologyCat === false ? null : (
          <div className="cheat-sheet-svg">
            <SvgFlexbox
              name={termiName}
              axis={termiAxis}
              size={termiSize}
              startend={termiStartEnd}
            />
          </div>
        )}
      </div>
      <Footer />
    </PageContainer>
  );
}

export default FlexboxCheatSheet;
