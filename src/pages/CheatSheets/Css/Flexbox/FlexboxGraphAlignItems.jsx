import "./FlexboxGraph.styles.css";
import "./FlexboxGraphAlignItems.styles.css";

function FlexboxGraphAlignItems({ alignItemsGraph }) {
  return (
    <div
      className={`flexbox-graphics-container flexbox-align-items-container align-items-${alignItemsGraph}`}
    >
      <div className="flexbox-graphics-items flexbox-align-items-items flexbox-align-items-items-1">
        item 1
      </div>
      <div className="flexbox-graphics-items flexbox-align-items-items flexbox-align-items-items-2">
        item 2
      </div>
      <div className="flexbox-graphics-items flexbox-align-items-items flexbox-align-items-items-3">
        item 3
      </div>
    </div>
  );
}

export default FlexboxGraphAlignItems;
