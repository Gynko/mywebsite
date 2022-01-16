import "../FlexboxGraph.styles.css";
import "./FlexboxGraphDisplay.styles.css";

function FlexboxGraphDisplay({ property }) {
  function textRender() {
    if (property === "flex") return "a block element";
    else if (property === "inline-flex") return "an inline element";
  }
  return (
    <div className="flexbox-graphics-container flexbox-container-display">
      {" "}
      <p className="display-flex-text">
        With property "{property}" this div{" "}
        <div className={`display-flex-div display-flex-div-${property}`}>
          <div className="column1">item1</div>
          <div className="column2">item2</div>
        </div>{" "}
        behaves as {textRender()}
      </p>
    </div>
  );
}

export default FlexboxGraphDisplay;
