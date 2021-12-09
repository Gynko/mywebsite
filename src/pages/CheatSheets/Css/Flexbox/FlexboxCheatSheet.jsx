import Footer from "../../../../components/Footer/Footer";
import PageContainer from "../../../../components/PageContainer/PageContainer";
import SvgFlexbox from "../../../../components/SVG/SvgFlexbox";
import "./FlexboxCheatSheet.styles.css";

function FlexboxCheatSheet() {
  return (
    <PageContainer>
      <div className="cheat-sheet-container">
        <div className="cheat-sheet-title-container">
          <h1 className="cheat-sheet-title">Flexbox</h1>
        </div>
        <div className="cheat-sheet-options-container">
          <button>Terminology</button>
          <button>Properties</button>
        </div>
        <div className="cheat-sheet-options-container">
          <button>Name</button>
          <button>Axis</button>
          <button>Size</button>
          <button>
            Start
            <br />
            End
          </button>
        </div>
        <SvgFlexbox />
      </div>
      <Footer />
    </PageContainer>
  );
}

export default FlexboxCheatSheet;
