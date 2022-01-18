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
        With the flex property set to "{property}" this div{" "}
        <span className={`display-flex-div display-flex-div-${property}`}>
          <span className="column1">item1</span>
          <span className="column2">item2</span>
        </span>{" "}
        behaves as {textRender()}.
      </p>
    </div>
  );
}

export default FlexboxGraphDisplay;
