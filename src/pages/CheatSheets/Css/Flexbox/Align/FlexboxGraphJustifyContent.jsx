import "./FlexboxGraphJustifyContent.styles.css";
import "../FlexboxGraph.styles.css";

function FlexboxGraphJustifyContent({ justifyContentGraph }) {
  return (
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
  );
}

export default FlexboxGraphJustifyContent;
