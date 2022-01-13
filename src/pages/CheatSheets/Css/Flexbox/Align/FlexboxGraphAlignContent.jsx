import "../FlexboxGraph.styles.css";
import "./FlexboxGraphAlignContent.styles.css";

function FlexboxGraphAlignContent({ alignContentGraph }) {
  return (
    <div
      className={`flexbox-graphics-container flexbox-align-content-container align-content-${alignContentGraph}`}
    >
      <div className="flexbox-graphics-items flexbox-align-content-items align-content-item1">
        1
      </div>
      <div className="flexbox-graphics-items flexbox-align-content-items align-content-item2">
        2
      </div>
      <div className="flexbox-graphics-items flexbox-align-content-items align-content-item3">
        3
      </div>
      <div className="flexbox-graphics-items flexbox-align-content-items align-content-item4">
        4
      </div>
      <div className="flexbox-graphics-items flexbox-align-content-items align-content-item5">
        5
      </div>
      <div className="flexbox-graphics-items flexbox-align-content-items align-content-item6">
        6
      </div>
      <div className="flexbox-graphics-items flexbox-align-content-items align-content-item7">
        7
      </div>
    </div>
  );
}

export default FlexboxGraphAlignContent;
