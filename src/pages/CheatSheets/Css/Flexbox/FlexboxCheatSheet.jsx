import { useState } from "react";

import ButtonActionable from "../../../../components/ButtonActionable/ButtonActionable";
import Footer from "../../../../components/Footer/Footer";
import PageContainer from "../../../../components/PageContainer/PageContainer";
import SvgFlexbox from "../../../../components/SVG/SvgFlexbox";
import TitleHeader from "../../../../components/TitleHeader/TitleHeader";
import "./FlexboxCheatSheet.styles.css";

function FlexboxCheatSheet() {
  const [terminologyCat, setTerminologyCatOn] = useState(false);

  function terminology() {
    setTerminologyCatOn(!terminologyCat);
  }
  return (
    <PageContainer>
      <div className="cheat-sheet-container">
        <TitleHeader title="flexbox" />
        <div className="cheat-sheet-options-container">
          <ButtonActionable
            label="Terminology"
            color="yellow"
            onClick={terminology}
          />
          <ButtonActionable label="Properties" color="yellow" />
        </div>
        {terminologyCat === false ? null : (
          <>
            <div className="cheat-sheet-options-container">
              <ButtonActionable label="Name" color="white" />
              <ButtonActionable label="Axis" color="redish" />
              <ButtonActionable label="Size" color="green" />
              <ButtonActionable label="Start End" color="blue" />
            </div>
            <SvgFlexbox />
          </>
        )}
      </div>
      <Footer />
    </PageContainer>
  );
}

export default FlexboxCheatSheet;
